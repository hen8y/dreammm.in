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
                    '600': '#1B2E29',
                    '500': '#223934',
                    '400': '#2A453F',
                    '300': '#35544D',
                    '200': '#416561',
                    '100': '#4C7670',
                }
            },
            fontFamily: {
                poppins: 'Poppins'
            },
            backgroundImage: {
                'head-gradient': "radial-gradient(55% 60% at bottom, rgb(192 132 252), rgba(96, 165, 250, 0.2) 70%, #fff 90%)",
                'md-head-gradient': "radial-gradient(25% 55% at bottom, rgb(192 132 252), rgba(96, 165, 250, 0.2) 70%, #fff 90%)",
                'head-gradient-full': "radial-gradient(rgb(192 132 252 /0.4), rgb(59 130 246 / 0.4))",
                "column": "radial-gradient(70% 80% at center -20%, rgb(82, 82, 82) 2%, rgba(245, 255, 98, 0) 60%, rgba(224, 255, 98, 0) 40%)",
            }
        }
    },
    plugins: [],
};
