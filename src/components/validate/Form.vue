<template>
    <form class="validate-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

type ValidateFn = () => boolean
export const emitter = mitt()

export default defineComponent({
    emits: ['form-submit'],
    setup(props, context) {
        let fnArr: ValidateFn[] = []
        const submitForm = () => {
            const result = fnArr.map(fn => fn()).every(res => res)
            context.emit('form-submit', result)
        }
        const callback = (fn?: ValidateFn) => {
            fn && fnArr.push(fn)
        }
    
        emitter.on('form-item-created', callback)
        onUnmounted(() => {
            emitter.off('form-item-created', callback)
            fnArr = []
        })
        
        return {
            submitForm
        }
    }
})
</script>