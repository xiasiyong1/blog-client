import axiosInstance from '@/helpers/request'
import type { SendEmailCodeDto } from '@/types/email'
import type { SimpleSuccessResponse } from '@/types/base'

export const sendEmailCodeDto = (params: SendEmailCodeDto) => {
  return axiosInstance.post<SimpleSuccessResponse>('/email/code', { params })
}
