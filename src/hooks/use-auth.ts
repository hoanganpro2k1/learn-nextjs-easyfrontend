import { setCookie } from 'cookies-next'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'
import { authApi } from '../../api-client/auth-api'
import { StorageKeys } from 'constants/storage-keys'

export const useAuth = (options?: Partial<PublicConfiguration>) => {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 1000,
		revalidateOnFocus: false,
		...options,
		fallbackData: null,
		onSuccess(data) {
			// save user info to local storage
			localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data))
		},
		onError(err, key, config) {
			// failed to get profile --> logout
			console.log(err) // send error log to server if any
			localStorage.removeItem(StorageKeys.USER_INFO)
		},
	})

	const firstLoading = profile === undefined && error === undefined

	const login = async (payload: LoginPayload) => {
		const res = await authApi.login(payload)
		setCookie('accessToken', res.data.accessToken, {})
		await mutate()
	}

	const logout = async () => {
		await authApi.logout()
		mutate(null, false)
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
	}
}
