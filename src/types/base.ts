export interface BaseResponse<T> {
  code: number
  message: string
  data: T
}
export interface SimpleSuccessResponse {
  code: number
  message: string
}
