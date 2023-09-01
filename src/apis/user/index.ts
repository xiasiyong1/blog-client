import type { APISchema } from '@/apis/request/type'
import { createRequestClient } from '@/apis/request/'
import type { User } from '@/types/user'

interface UserAPISchema extends APISchema {
  getUserInfo: {
    getUserInfo: {}
    response: User
  }
}

const userApi = createRequestClient<UserAPISchema>({
  apis: {
    getUserInfo: 'GET /user/info'
  }
})

export default userApi
