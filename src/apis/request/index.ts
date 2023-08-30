import axios, { type AxiosInstance, type AxiosRequestHeaders, AxiosError } from 'axios'
import type {
  APISchema,
  RequestPath,
  RequestFunction,
  RequestOptions,
  CreateRequestConfig,
  CreateRequestClient
} from './type'
import { getAccessToken } from '@/helper/localstorge'
import router from '@/router'
// import { ElMessage } from 'element-plus'
// useRouter只能在setUp中使用

const MATCH_METHOD = /^(GET|POST|PUT|DELETE|HEAD|OPTIONS|CONNECT|TRACE|PATCH)\s+/
const MATCH_PATH_PARAMS = /:(\w+)/g
const USE_DATA_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE']

function attachAPI<T extends APISchema>(
  client: AxiosInstance,
  apis: CreateRequestConfig<T>['apis']
): CreateRequestClient<T> {
  const hostApi: CreateRequestClient<T> = Object.create(null)
  for (const apiName in apis) {
    const apiConfig = apis[apiName]
    // 配置为一个函数
    if (typeof apiConfig === 'function') {
      hostApi[apiName] = apiConfig as RequestFunction
      continue
    }
    let apiOptions = {}
    let apiPath = apiConfig as RequestPath
    // 配置为一个对象
    if (typeof apiConfig === 'object') {
      const { path, ...rest } = apiConfig as RequestOptions
      apiPath = path as RequestPath
      apiOptions = rest
    }
    hostApi[apiName] = (params, options) => {
      const _params = { ...(params || {}) }
      // 匹配路径中请求方法，如：'POST /api/test'
      const [prefix, method] = apiPath.match(MATCH_METHOD) || ['GET ', 'GET']
      // 剔除掉 ”POST “ 前缀
      let url = apiPath.replace(prefix, '')
      // 匹配路径中的参数占位符， 如 '/api/:user_id/:res_id'
      const matchParams = apiPath.match(MATCH_PATH_PARAMS)
      if (matchParams) {
        matchParams.forEach((match) => {
          const key = match.replace(':', '')
          if (Reflect.has(_params, key)) {
            url = url.replace(match, Reflect.get(_params, key))
            Reflect.deleteProperty(_params, key)
          }
        })
      }
      const requestParams = USE_DATA_METHODS.includes(method)
        ? { data: _params }
        : { params: _params }
      return client.request({
        url,
        method: method.toLowerCase(),
        ...requestParams,
        ...apiOptions,
        ...options
      })
    }
  }
  return hostApi
}

const DEFAULT_BASE_URL = import.meta.env.VITE_REQUEST_BASE_URL

console.log(DEFAULT_BASE_URL)

// 创建请求客户端
export function createRequestClient<T extends APISchema>(
  requestConfig: CreateRequestConfig<T>
): CreateRequestClient<T> {
  const client = axios.create({
    baseURL: requestConfig.baseURL || DEFAULT_BASE_URL,
    headers: requestConfig.headers
  })

  // 附加各业务请求头
  client.interceptors.request.use((config: any) => {
    const jwtToken = getAccessToken()
    if (jwtToken) {
      config.headers.authorization = `Bearer ${jwtToken}`
    }
    const headerHandlers = (requestConfig.headerHandlers || []).map((handler) => {
      return handler(config)
        .then((mixHeaders: AxiosRequestHeaders) => {
          Object.assign(config.headers, mixHeaders)
        })
        .catch()
    })
    return Promise.all(headerHandlers).then(() => config)
  })

  // 拦截请求
  client.interceptors.response.use(
    (res: any) => res,
    (error: AxiosError) => {
      console.log(error)
      if (error.response?.status === 401) {
        // 登录已失效
        router.replace('/signin')
      } else {
        // ElMessage({
        //   // @ts-ignore
        //   message: error.response?.data?.message || error.message,
        //   type: 'error'
        // })
      }
      const requestError = requestConfig.errorHandler ? requestConfig.errorHandler(error) : error
      return Promise.reject(requestError)
    }
  )

  return attachAPI<T>(client, requestConfig.apis)
}
