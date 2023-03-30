module.exports = {
    mode: "jit",
    purge: ["./build/*.html", "./src/**/*.tsx", "./safeclasses.txt"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors:{
                "bg-color":"#F4F8FA"
            },
            boxShadow: {
                '3xl': '0px 16px 32px rgba(30, 42, 50, 0.08)',
              }
        
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif']
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
