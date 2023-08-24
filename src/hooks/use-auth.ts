import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'

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

	return {
		profile,
		error,
	}
}
