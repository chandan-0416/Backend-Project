// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    server:{
    proxy:{
      '/api' : 'http://localhost:3000',
    },
  },
  plugins: [
    tailwindcss(),

  ],
})