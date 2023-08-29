import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'
import { authApi } from '../../api-client/auth-api'
import { setCookie } from 'cookies-next'

export const useAuth = (option?: Partial<PublicConfiguration>) => {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 1000,
		revalidateOnFocus: false,
		...option,
	})

	const firstLoading = profile === undefined && error === undefined

	const login = async (payload: LoginPayload) => {
		const res = await authApi.login(payload)
		setCookie('access_token', res.data.accessToken)
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
