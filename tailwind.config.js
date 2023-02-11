const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            project: colors.indigo,
            blog: colors.orange,
            book: colors.lime,
            neutral: colors.slate,
            primary: colors.orange,
        },
    },
    plugins: [],
};
