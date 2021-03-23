import { createStore, Commit } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'
import { GlobalDataProps, GlobalErrorProps } from "@/propType"

const asyncAndCommit = async(url: string, mutationName: string, commit: Commit, config: AxiosRequestConfig = { method: 'get' }, params?: any) => {
	const { data } = await axios(url, config)
	if (params) {
		commit(mutationName, { data, params })
	} else {
		commit(mutationName, data)
	}
	return data
}

export default createStore<GlobalDataProps>({
	state: {
		loading: false,
		error: { status: false },
		user: {
			isLogin: false
		},
		columns: {
			data: [],
			currentPage: 0,
			total: 0
		},
		columnDetail: {},
		posts: {
			data: []
		},
		postDetail: {}
	},
	mutations: {
		setLoading(state, status) {
			state.loading = status
		},
		setError(state, e: GlobalErrorProps) {
			state.error = e
		},
		fetchColumns(state, rawData) {
			state.columns.data = rawData.data.list
		},
		fetchColumnDetail(state, rawData) {
			state.columnDetail = rawData.data
		},
		fetchPosts(state, rawData) {
			state.posts.data = rawData.data.list
		},
		fetchPostDetail(state, rawData) {
			state.postDetail = rawData.data
		},
	},
	actions: {
		fetchColumns({ state, commit }, params = {}) {
			const { currentPage = 1, pageSize = 6 } = params
			if (state.columns.currentPage < currentPage) {
				return asyncAndCommit(`/columns?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchColumns', commit)
			}
		},
		fetchColumnDetail({ state, commit }, id) {
			return asyncAndCommit(`/columns/${id}`, 'fetchColumnDetail', commit)
		},
		fetchPosts({ state, commit }, params) {
			const { id, currentPage = 1, pageSize = 10 } = params
			return asyncAndCommit(`/columns/${id}/posts?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchPosts', commit)
		},
		fetchPostDetail({ state, commit }, id) {
			return asyncAndCommit(`/posts/${id}`, 'fetchPostDetail', commit)
		}
	},
	getters: {
		getColumns: (state) => {
			return state.columns.data
		},
		getColumnDetail: (state) => {
			return state.columnDetail
		},
		getPosts: (state) => {
			return state.posts.data
		},
		getCurrentPost: (state) => {
			return state.postDetail
		}
	}
})
