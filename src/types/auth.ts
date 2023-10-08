import type { BaseResponse } from './base'

export interface SignInWithEmailDto {
  email: string
  password: string
}
export interface SignUpWithEmailDto {
  email: string
  code: string
  password: string
}
export interface SendInviteEmailDto {
  email: string
  roleId: number
}

export interface SignUpWithCodeDto {
  email: string
  code: string
  password: string
}

export type SignInWithEmailResponse = BaseResponse<{
  access_token: string
  refresh_token: string
}>

export type GetInviteCodeInfoResponse = BaseResponse<{
  email: string
  inviteUserEmail: string
  roleId: number
}>
