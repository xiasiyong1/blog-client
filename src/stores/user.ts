import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import * as userApi from '@/apis/user'
import { getAccessToken } from '@/helpers/local-storge'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<User>()

  const getAndSetUserInfo = async () => {
    const result = await userApi.getUserInfo()
    userInfo.value = result.data.data
  }

  const isLogin = ref(false)

  isLogin.value = !!getAccessToken()

  return { userInfo, getAndSetUserInfo, isLogin }
})
