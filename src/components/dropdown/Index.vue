<template>
    <div class="dropdown" ref="dropdonwRef">
        <a 
            href="#" 
            class="btn btn-outline-light my-2 dropdown-toggle" 
            @click.prevent="toggleOpen"
        >
            {{title}}
        </a>
        <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

export default defineComponent({
    props: {
        title: {
            type: String,
            require: true
        }
    },
    setup() {
        const isOpen = ref(false)
        const dropdonwRef = ref<null | HTMLElement>(null)
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        const isClickOutside = useClickOutside(dropdonwRef)
        
        watch(isClickOutside, () => {
            if (isOpen.value && isClickOutside.value) {
                isOpen.value = false
            }
        })

        return {
            isOpen,
            toggleOpen,
            dropdonwRef
        }
    }
})
</script>