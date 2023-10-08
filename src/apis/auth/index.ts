import axiosInstance from '@/helpers/request'
import type { SignInWithEmailDto, SignInWithEmailResponse, SignUpWithEmailDto } from '@/types/auth'
import type { SimpleSuccessResponse } from '@/types/base'

export const signInWithEmail = (params: SignInWithEmailDto) => {
  return axiosInstance.post<SignInWithEmailResponse>('/auth/admin/email/signin', params)
}

export const signUpWithEmail = (params: SignUpWithEmailDto) => {
  return axiosInstance.post<SimpleSuccessResponse>('/auth/admin/email/signup', params)
}
