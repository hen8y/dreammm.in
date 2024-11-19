import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.tsx',
    ],
    theme: {
        extend: {
            colors: {
                'cyber': {
                    '900': '#0A1210',
                    '800': '#0F1A17',
                    '700': '#152420',
                }
            },
            fontFamily: {
                poppins: 'Poppins',
                kanit: 'Kanit'
            },
            backgroundImage: {
                "main-gradient": "radial-gradient(70% 80% at center -20%, rgb(82, 82, 82) 2%, rgba(245, 255, 98, 0) 60%, rgba(224, 255, 98, 0) 40%)",
                'golnft-gradient': "radial-gradient(55% 60% at bottom, rgb(192 132 252), rgba(96, 165, 250, 0.2) 70%, #fff 90%)",
                'md-golnft-gradient': "radial-gradient(25% 55% at bottom, rgb(192 132 252), rgba(96, 165, 250, 0.2) 70%, #fff 90%)",
                'golnft-gradient-full': "radial-gradient(rgb(192 132 252 /0.4), rgb(59 130 246 / 0.4))",
                "cryeto-gradient": "radial-gradient(40% 80% at left 0%, rgb(82, 82, 82) -40%, rgba(245, 255, 98, 0) 60%, rgba(224, 255, 98, 0) 20%)",
                "cryeto-gradient-full": "radial-gradient(rgb(82, 82, 82), rgba(0, 0, 0, 0.5))",
            }
        }
    },
    plugins: [],
};
