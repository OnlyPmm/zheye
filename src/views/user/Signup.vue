<template>
  <div class="signup-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">注册者也账户</h5>
    <Form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <Input 
          v-model="formData.email"   
          :rules="emailRules"
          placeholder="请输入邮箱地址"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">昵称</label>
        <Input 
          v-model="formData.nickName"   
          :rules="nameRules"
          placeholder="请输入昵称"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <Input 
          v-model="formData.password"   
          :rules="passwordRules"
          placeholder="请输入密码"
          type="password"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">重复密码</label>
        <Input 
          v-model="formData.repeatPassword"   
          :rules="repeatPasswordRules"
          placeholder="请再次密码"
          type="password"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">注册新用户</button>
      </template>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Form from '@/components/validate/Form.vue'
import Input, { RulesProp } from '@/components/validate/Input.vue'

export default defineComponent({
    components: {
      Form,
      Input
    },
    setup() {
      const formData = reactive({
        email: '',
        nickName: '',
        password: '',
        repeatPassword: ''
      })
      const emailRules: RulesProp = [
        { type: 'required', message: '电子邮箱地址不能为空' },
        { type: 'email', message: '请输入正确的电子邮箱格式' }
      ]
      const nameRules: RulesProp = [
        { type: 'required', message: '昵称不能为空' }
      ]
      const passwordRules: RulesProp = [
        { type: 'required', message: '密码不能为空' }
      ]
      const repeatPasswordRules: RulesProp = [
        { type: 'required', message: '重复密码不能为空' },
        { 
          type: 'custom', 
          validator: () => {
            console.log(formData.password, formData.repeatPassword)
            return formData.password === formData.repeatPassword
          },
          message: '两次密码不相同' 
        }
      ]
      const onFormSubmit = (result: boolean) => {
        if (!result) return
      }

      return {
        formData,
        emailRules,
        nameRules,
        passwordRules,
        repeatPasswordRules,
        onFormSubmit
      }
    }
})
</script>>

<style>
.w-330 {
  max-width: 330px;
}
</style>