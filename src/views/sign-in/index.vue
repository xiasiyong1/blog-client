<template>
  <div class="flex items-center flex-col justify-center h-[100vh]">
    <h2 class="text-[16px] mb-1 text-left">账号登录</h2>
    <Form @submit="onSubmit" class="w-full">
      <CellGroup inset>
        <Field
          v-model="form.email"
          name="email"
          label="邮箱"
          placeholder="请输入"
          :rules="[{ required: true, message: '邮箱不能为空' }]"
        />
        <Field
          v-model="form.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入"
          :rules="[{ required: true, message: '请输入密码' }]"
        />
      </CellGroup>
      <div style="margin: 16px">
        <Button round block type="primary" native-type="submit"> 登录 </Button>
        <div class="mt-1">
          已经有账号了？<router-link to="/signup" class="text-blue-400">注册</router-link>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Form, Field, CellGroup, Button, type FormInstance } from 'vant'
import authApi from '@/apis/auth'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/constants'
import { setAccessToken } from '@/helper/localstorge'
import { useUserStore } from '@/stores/user'

const store = useUserStore()

const router = useRouter()
const formRef = ref<FormInstance>()

const form = reactive({
  email: '',
  password: ''
})
const onSubmit = () => {
  // formRef.value
  //   ?.validate()
  //   .then(() => {
  authApi.signIn(form).then((res) => {
    setAccessToken(res.data.access_token)
    store.getAndSetUserInfo()
    router.replace(ROUTES.HOME.path)
  })
  // })
  // .catch((err) => console.log(err))
}
</script>

<style></style>
