import type { APISchema } from '@/apis/request/type'
import { createRequestClient } from '@/apis/request/'
import type { User } from '@/types/user'

interface AuthAPISchema extends APISchema {
  signUp: {
    request: {
      email: string
      password: string
      code: string
    }
    response: {}
  }

  signIn: {
    request: {
      email: string
      password: string
    }
    response: {
      access_token: string
      user: User
    }
  }
}

const authApi = createRequestClient<AuthAPISchema>({
  apis: {
    signUp: 'POST /auth/email/signup',
    signIn: 'POST /auth/email/signin'
  }
})

export default authApi
