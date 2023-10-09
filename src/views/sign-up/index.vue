<template>
  <div class="flex items-center flex-col justify-center h-[100vh]">
    <h2 class="text-[16px] mb-1 text-left">账号注册</h2>
    <Form @submit="onSubmit" class="w-full" ref="formRef">
      <CellGroup inset>
        <Field
          v-model="form.email"
          name="email"
          label="邮箱"
          placeholder="请输入"
          :rules="[{ required: true, message: '邮箱不能为空' }]"
        />
        <Field
          v-model="form.code"
          name="code"
          center
          clearable
          label="验证码"
          placeholder="请输入"
          :rules="[{ required: true, message: '验证码不能为空' }]"
        >
          <template #button>
            <Button size="small" type="primary" @click="getCode">{{ codeStatusText }}</Button>
          </template>
        </Field>
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
        <Button round block type="primary" native-type="submit"> 注册 </Button>
        <div class="mt-1">
          已经有账号了？<router-link to="/signin" class="text-blue-400">登录</router-link>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Form, Field, CellGroup, Button, type FormInstance } from 'vant'
import * as authApi from '@/apis/auth'
import * as emailApi from '@/apis/email'
import { CodeStatusEnum } from '@/enums/code'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/constants'

const formRef = ref<FormInstance>()

const router = useRouter()

const DEFAULT_EXPIRE_TIME = 5 * 60

const codeStatus = ref(CodeStatusEnum.UN_SEND)
const codeExpireTime = ref(DEFAULT_EXPIRE_TIME)

const form = reactive({
  email: '',
  password: '',
  code: ''
})

const codeStatusText = computed(() => {
  switch (codeStatus.value) {
    case CodeStatusEnum.SEND:
      return codeExpireTime.value + '秒后重新发送'
    case CodeStatusEnum.EXPIRED:
      return '重新发送'
    default:
      return '发送验证码'
  }
})

const startCountDown = () => {
  let timer: any = null
  timer = setInterval(() => {
    codeExpireTime.value--
    if (codeExpireTime.value <= 0) {
      codeStatus.value = CodeStatusEnum.EXPIRED
      codeExpireTime.value = DEFAULT_EXPIRE_TIME
      clearInterval(timer)
    }
  }, 1000)
}

const getCode = () => {
  formRef.value?.validate('email').then(() => {
    emailApi.sendEmailCodeDto({ email: form.email }).then(() => {
      codeStatus.value = CodeStatusEnum.SEND
      startCountDown()
    })
  })
}
const onSubmit = () => {
  formRef.value?.validate().then((res) => {
    authApi.signUpWithEmail(form).then(() => {
      router.replace(ROUTES.SIGNIN.path)
    })
  })
}
</script>

<style></style>
