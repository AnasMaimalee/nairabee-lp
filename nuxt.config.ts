// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/style/main.css"],
  antd:{},
  modules: [
    // "@nuxtjs/tailwindcss", 
    '@nuxtjs/google-fonts',
    "@ant-design-vue/nuxt"],

    googleFonts: {
      families: {
        Montserrat: {
          wght: [100, 200, 300, 400, 500, 600, 700, 800, 900], // Specify the weights you need
          ital: [100, 200, 300, 400, 500, 600, 700, 800, 900], // Specify the italics you need (if any)
        },
      },
      display: 'swap', // Optional: Specifies the display mode for the fonts
    }
})
