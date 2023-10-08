import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import userApi from '@/apis/user'
import { getAccessToken } from '@/helpers/local-storge'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<User>()

  function getAndSetUserInfo() {
    userApi
      .getUserInfo({})
      .then((res) => {
        userInfo.value = res.data
      })
      .catch((res) => {
        console.log(1234, res)
      })
  }

  const isLogin = ref(false)

  isLogin.value = getAccessToken() !== ''

  return { userInfo, getAndSetUserInfo, isLogin }
})
