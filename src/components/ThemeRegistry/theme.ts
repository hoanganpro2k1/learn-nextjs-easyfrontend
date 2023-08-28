import { Heebo } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const heebo = Heebo({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
})

let theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#FF6464',
		},
		secondary: {
			main: '#00A8CC',
			light: '#EDF7FA',
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#21243D',
		},
	},
	typography: {
		fontFamily: heebo.style.fontFamily,
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
					'&:hover, &.active': {
						color: '#FF6464',
					},
				},
			},
		},
		MuiTypography: {
			defaultProps: {},
			styleOverrides: {
				root: {
					color: 'black',
					'&.active': {
						color: '#FF6464',
					},
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						color: 'white',
					},
				},
			],
		},
		MuiChip: {
			styleOverrides: {
				root: {
					paddingInline: 2,
				},
			},
			variants: [
				{
					props: { color: 'secondary' },
					style: {
						color: 'white',
						fontWeight: 'bold',
						fontSize: 16,
						backgroundColor: '#142850',
					},
				},
			],
		},
	},
})

theme = responsiveFontSizes(theme)

// theme.typography.h3 = {
// 	fontSize: '2rem',

// 	[theme.breakpoints.up('md')]: {
// 		fontSize: '3rem',
// 	},
// }

export default theme
