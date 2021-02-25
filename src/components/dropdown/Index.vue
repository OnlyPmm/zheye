<template>
    <div class="dropdown">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle">{{title}}</a>
        <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            require: true
        }
    },
    setup() {
        const isOpen = ref(false)
        return {
            isOpen
        }
    }
})
</script>