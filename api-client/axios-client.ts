import axios from 'axios'
import { getCookie } from 'cookies-next'

const axiosClient = axios.create({
	baseURL: 'https://js-post-api.herokuapp.com/api',
	headers: {
		'Content-Type': 'application/json',
	},
})

axiosClient.interceptors.request.use(
	async (config: any) => {
		const accessToken = getCookie('access_token')
		if (accessToken !== null) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}
		return config
	},
	(error) => {
		return error
	}
)

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error)
	}
)

export default axiosClient
