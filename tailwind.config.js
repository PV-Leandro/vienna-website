/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    safelist: [
        //Dynamically generated on Timeline component
        'bg-yellow-500',
        'bg-sky-500',
        'bg-rose-500',
        'bg-emerald-500',
        'bg-orange-500',
        'bg-gray-500',
        'grid-cols-2',
        'grid-cols-3'
    ],
    plugins: [
        require('@tailwindcss/forms')
    ],
}

