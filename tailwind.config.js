module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'sm': '575px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1200px',
			'2xl': '1440px',
		},
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			Blue: {
				300: '#C9D3FF',
				800: '#2400F8',
				900: '#0201D1'
			},
			Black: {
				150: '#F0F0F0',
				160: '#f1eff1',
				500: 'hsla(0,0%,0%,0.5)',
				750: '#171717',
				800: '#191919',
				850: '#00090C',
				900: '#000'
			},
			TrueGrey: {
				100: 'hsla(0,0%,0%,0.02)',
				200: '#F0F1F3',
				300: '#efefef',
				450: '#bfbfbf',
				650: '#707070'
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		fontSize: {
			'0': '0',
			'4': '4px',
			'6': '6px',
			'8': '8px',
			'10': '10px',
			'13': '13px',
			'15': '15px',
			'18': '18px',
			'20': '20px',
			'22': '22px',
			'26': '26px',
			'31': '31px',
			'38': '38px',
			'45': '45px',
			'50': '50px',
			'55': '55px',
			'66': '66px',
			'79': '79px',
			'95': '95px',
			'114': '114px',
			'136': '136px',
			'164': '164px',

		},
		lineHeight: {
			'title': '1.2',
			'paragraph': '1.61',
			'0': '0',
			'1': '1px',
			'4': '4px',
			'6': '6px',
			'8': '8px',
			'10': '10px',
			'13': '13px',
			'15': '15px',
			'18': '18px',
			'20': '20px',
			'22': '22px',
			'26': '26px',
			'31': '31px',
			'38': '38px',
			'45': '45px',
			'50': '50px',
			'55': '55px',
			'66': '66px',
			'79': '79px',
			'95': '95px',
			'114': '114px',
			'136': '136px',
			'164': '164px',
		},
		lineHeight: {
			'title': '1.2',
			'paragraph': '1.61',
			'4': '8px',
			'6': '12px',
			'8': '16px',
			'10': '20px',
			'13': '23px',
			'15': '25px',
			'18': '28px',
			'22': '32px',
			'26': '36px',
			'31': '41px',
			'38': '48px',
			'45': '55px',
			'55': '65px',
			'66': '77px',
			'79': '89px',
			'95': '95px',
			'114': '124px',
			'136': '146px',
			'164': '174px',
		},
		spacing: {
			'0': '0px',
			'4': '4px',
			'6': '6px',
			'8': '8px',
			'10': '10px',
			'13': '13px',
			'15': '15px',
			'18': '18px',
			'22': '22px',
			'26': '26px',
			'31': '31px',
			'38': '38px',
			'45': '45px',
			'55': '55px',
			'66': '66px',
			'79': '79px',
			'95': '95px',
			'100': '100px',
			'114': '114px',
			'136': '136px',
			'164': '164px',
		},
		extend: {
			backgroundImage: {
				'ladder-person': "url('/img/ladder_person.png')",
			},
			spacing: {
				'27': '27%'
			}
		},
	},
	variants: {
		extend: {
		},
	},
	plugins: [],
}