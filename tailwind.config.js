/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                eesti: ['var(--font-eesti)'],
                inter: ['var(--font-poppins)'],
                dm: ['var(--font-dm)']
            },
            colors: {
                'brand-cyan': 'var(--brand-cyan)',
                'brand-pink': 'var(--brand-pink)',
                'brand-gray': 'var(--brand-gray)',
                'brand-black': 'var(--brand-black)'
            },
            backgroundImage: {
                'main-gradient': 'var(--main-gradient)',
                'vertical-gradient': 'var(--vertical-gradient)',
                'purple-gradient': 'var(--purple-gradient)',
                'purple-bottom': 'var(--purple-bottom)',
                'purple-top': 'var(--purple-top)',
                'box-gradient': 'var(--box-gradient)',
                'black-top-gradient': 'var(--black-top-gradient)',
                'black-bottom-gradient': 'var(--black-bottom-gradient)',
                news: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(5,5,62,0) 10%, rgba(0,0,0,0.7) 99%), url("/assets/images/news.webp")',
                dubaiw: 'linear-gradient(90deg, rgba(17, 17, 17, 0) 0%, #191A2C 50.52%, rgba(17, 17, 17, 0) 100%)',
                lines: ', linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(5,5,62,0) 100%, rgba(0,0,0,0.7) 99%), url("/assets/images/texture_right_lines.webp")'
            },
            boxShadow: {
                card: 'var(--shadow-card)',
                'card-hover': 'var(--shadow-card-hover)',
                'card-container': 'var(--card-container)'
            },
            transitionTimingFunction: {
                spring: 'cubic-bezier(.58,.08,.23,1.38)'
            },
            animation: {
                'pulse-slow': 'pulse-s 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            },
            keyframes: {
                'pulse-s': {
                    '0%, 100%': { opacity: 0.6 },
                    '50%': { opacity: 0.2 }
                }
            },
            dropShadow: {
                'pink-shadow': '0 1.5in 35px rgb(117,52,124)'
            },
            screens: {
                '3xl': '1900px',
                '4xl': '2560px'
            },
            content: {
                diamond: 'url("/assets/svg/diamond.svg")',
                arrow: 'url("/assets/svg/list-arrow.svg")'
            }
        }
    },
    plugins: []
}
