/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.html'
    ],
    theme: {
        screens: {
            'phone': '480px',
            'tablet': '640px',
            'laptop': '960px',
            'desktop': '1280px',
        },
        extend: {
            backgroundImage: {
                'header-image': 'url("assets/wave.svg")',
                'site-texture': ''
            },
            spacing: {
                '128' : '32rem',
                '192' : '48re'
            }
        },
        colors: {
            transparent: 'transparent',
            'white': '#ffffff',
            teal: {
                600: '#00848F'
            }
        }
    },
    plugins: [],
}

