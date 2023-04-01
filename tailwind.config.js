/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: ['class'],
    theme: {
        extend: {
            screens: {
                xs: '475px',
            },
            borderWidth: {
                3: '3px',
                6: '6px',
            },
            colors: {
                // Primary
                // pr: 'var(--primary)',
                // Secondaary
                // sc: 'var(--secondary)',
                // material
                pr: '#F06543',
                sc: '#F09D51',
                tx: '#121616',
            },
            boxShadow: {
                icon: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)',
                darkIcon: '0px 0px 1px 1px rgba(255, 255, 255, 0.5)',
            },
        },
    },
    plugins: [],
}
