module.exports = {
    content: ['./src/**/*.{tsx,ts}'],
    theme: {
        colors: {
            blue: '#1fb6ff',
            purple: '#7e5bef',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#13ce66',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            dark: 'rgba(25,25,25,.97)',
            gray: '#8492a6',
            'gray-light': '#d3dce6',
            light: '#333',
            black: '#000',
            active: '#0ad269',
            background: '#fbfbfb',
            seconds: '#dee5ec',
            tag: '#ececec',
            line: '#e4e4e4',
            banner: '#f2f2f2',
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                login: '0 6px 17px 0 rgba(0,0,0,.1);',
            },
            backgroundImage: {
                'user-background': "url('./assets/images/background.jpg')",
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
