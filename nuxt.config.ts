// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/style/main.css"],
  antd:{},
  modules: [
    // "@nuxtjs/tailwindcss", 
    "@ant-design-vue/nuxt"]
})
