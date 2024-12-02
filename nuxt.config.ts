// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }, 
  vite: {
    server: {
      watch: {
        usePolling: true
        , interval: 3000
      },
      hmr: {
        host: '0.0.0.0'
        , port: 3000
      },
    }
  },
  sourcemap: {
    server: true
    , client: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
