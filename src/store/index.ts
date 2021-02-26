import { createStore, Commit } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'
import { GlobalDataProps } from "@/propType"

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
		user: {
			isLogin: false
		},
		columns: {
			data: [],
			currentPage: 0,
			total: 0
		}
	},
	mutations: {
		fetchColumns(state, rawData) {
			state.columns.data = rawData.data.list
		}
	},
	actions: {
		fetchColumns({ state, commit }, params = {}) {
			const { currentPage = 1, pageSize = 6 } = params
			if (state.columns.currentPage < currentPage) {
				return asyncAndCommit(`/columns?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchColumns', commit)
			}
		}
	},
	getters: {
		getColumns: (state) => {
			return state.columns.data
		}
	}
})
