import axiosInstance from '@/helpers/request'
import type {
  FindArticleListDto,
  FindArticleListResponse,
  GetArticleInfoByIdResponse,
  RetArticleExtraDataResponse
} from '@/types/article'

export const findArticleList = (params: FindArticleListDto) => {
  return axiosInstance.get<FindArticleListResponse>('/article/list', { params })
}

export const getArticleInfoById = (id: number) => {
  return axiosInstance.get<GetArticleInfoByIdResponse>(`/article/${id}`)
}

export const getArticleExtraData = (id: number) => {
  return axiosInstance.get<RetArticleExtraDataResponse>(`/article/data/${id}`)
}
