import type { APISchema } from '@/apis/request/type'
import { createRequestClient } from '@/apis/request/'

interface EmailAPISchema extends APISchema {
  getCode: {
    request: {
      email: string
    }
    response: {}
  }
}

const emailApi = createRequestClient<EmailAPISchema>({
  apis: {
    getCode: 'GET /email/code'
  }
})

export default emailApi
