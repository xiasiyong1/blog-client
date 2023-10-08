import type { GenderEnum } from '@/enums/gender'
import type { Role } from './role'

export interface User {
  email: string
  id: string
  username: string
  avatar?: string
  gender: GenderEnum
  roles: Role[]
}

export interface Profile {
  gender: GenderEnum
  address?: string
  avatar?: string
  username?: string
  id: string
  user: User
}

export interface GetUserList {
  currentPage: number
  pageSize: number
  username?: string
  gender?: GenderEnum
  roles?: number[]
  email?: string
}
