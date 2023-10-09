import axiosInstance from '@/helpers/request'
import type {
  GetArticleCategoryListResponse,
  GetArticleCategoryListDto,
  GetTagsByArticleCategoryIdResponse
} from '@/types/article-category'

export const getArticleCategoryList = (params: GetArticleCategoryListDto) => {
  return axiosInstance.get<GetArticleCategoryListResponse>('/article-category/list', {
    params
  })
}

export const getTagsByArticleCategoryId = (id: number) => {
  return axiosInstance.get<GetTagsByArticleCategoryIdResponse>(`/article-category/${id}/tags`)
}
