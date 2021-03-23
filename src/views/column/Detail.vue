<template>
    <div class="column-detail-page w-75 mx-auto">
        <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="columnDetail">
            <div class="col-3 text-center">
                <img :src="columnDetail.avatar && columnDetail.avatar.fitUrl" :alt="columnDetail.title" class="rounded-circle border w-100">
            </div>
            <div class="col-9">
                <h4>{{columnDetail.title}}</h4>
                <p class="text-muted">{{columnDetail.description}}</p>
            </div>
        </div>
        <post-list :list="list"></post-list>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { GlobalDataProps, ColumnProps } from '@/propType'
import { addColumnAvatar } from '@/utils'
import PostList from '@/views/post/List.vue'

export default defineComponent({
    components: {
        PostList
    },
    setup() {
        const route = useRoute()
        const currentId = route.params.id
        const store = useStore<GlobalDataProps>()

        onMounted(() => {
            store.dispatch('fetchColumnDetail', currentId)
            store.dispatch('fetchPosts', { id: currentId })
        })
        const columnDetail = computed(() => {
            const column = store.getters.getColumnDetail as ColumnProps | undefined
            column && addColumnAvatar(column, 100, 100)
            return column
        })
        const list = computed(() => store.getters.getPosts)

        return {
            columnDetail,
            list
        }
    }
})
</script>