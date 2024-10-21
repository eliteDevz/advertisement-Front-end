
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  screens: {
    'xs': '480px',  
    'sm': '640px',  
    'md': '768px',  
    'lg': '1024px', 
    'xl': '1280px', 
    '2xl': '1536px' 
  },},
  },
  plugins: [],
};


// const withMT = require("@material-tailwind/react/utils/withMT");

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         'xs': '480px',  // Custom small breakpoint
//         'sm': '640px',  // Overriding default
//         'md': '768px',  // Overriding default
//         'lg': '1024px', // Overriding default
//         'xl': '1280px', // Overriding default
//         '2xl': '1536px' // Overriding default
//       },
//     },
//   },
//   plugins: [],
// };
