import axiosInstance from '@/helpers/request'
import type { GetArticleRecommendListResponse } from '@/types/article-recommend'

export const getArticleRecommendList = () => {
  return axiosInstance.get<GetArticleRecommendListResponse>('/article-recommend/list')
}
