<template>
	<div class="login-page mx-auto p-3 w-330">
		<h5 class="my-4 text-center">登录到者也</h5>
		<Form @form-submit="onFormSubmit">
			<div class="mb-3">
				<label class="form-label">邮箱地址</label>
				<Input
					:rules="emailRules"
					v-model="emailVal"
					ref="inputRef"
					type="text"
					placeholder="请输入邮箱地址"
				/>
			</div>
			<div class="mb-3">
				<label class="form-label">密码</label>
				<Input
					:rules="passwordRules"
					v-model="passwordVal"
					type="password"
					placeholder="请输入密码"
				/>
			</div>
			<template #submit>
				<button type="submit" class="btn btn-primary btn-block btn-large">登录</button>
			</template>
		</Form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import Form from '@/components/validate/Form.vue'
import Input, { RulesProp } from '@/components/validate/Input.vue'

export default defineComponent({
	components: {
		Form,
		Input
	},
	setup() {
		const router = useRouter()
		const emialVal = ref('')
		const emailRules: RulesProp = [
			{ type: 'required', message: '电子邮箱地址不能为空' },
			{ type: 'email', message: '请输入正确的电子邮箱格式' }
		]
		const passwordVal = ref('')
		const passwordRules: RulesProp = [
			{ type: 'required', message: '密码不能为空' }
		]
		const onFormSubmit = (result: boolean) => {
			if (!result) return
			router.push('/')
		}

		return {
			emialVal,
			emailRules,
			passwordVal,
			passwordRules,
			onFormSubmit
		}
	}
})
</script>>
