import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
})

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#FF6464',
		},
		secondary: {
			main: '#00A8CC',
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	components: {
		MuiContainer: {
			// Xet default cho cac thuoc tinh
			defaultProps: {
				maxWidth: 'md',
			},
			// Customer ghi de style cho cac thuoc tinh
			styleOverrides: {
				maxWidthSm: {
					maxWidth: '680px',

					'@media(min-width: 600px)': {
						maxWidth: '680px',
					},
				},
				maxWidthMd: {
					maxWidth: '860px',

					'@media(min-width: 900px)': {
						maxWidth: '860px',
					},
				},
			},
			variants: [],
		},
		MuiLink: {
			defaultProps: {
				underline: 'hover',
			},
			styleOverrides: {
				root: {
					color: 'black',
					'&:hover': {
						color: '#FF6464',
					},
				},
			},
		},
	},
})

export default theme
