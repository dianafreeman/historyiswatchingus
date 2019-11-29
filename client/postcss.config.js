const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./src/config/tailwind/'),
        require('autoprefixer'),
    ],
};