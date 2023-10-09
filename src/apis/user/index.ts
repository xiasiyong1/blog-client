import axiosInstance from '@/helpers/request'
import type { GetUserInfoResponse } from '@/types/user'

export const getUserInfo = () => {
  return axiosInstance.get<GetUserInfoResponse>('/user')
}
