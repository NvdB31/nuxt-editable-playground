import editableConfig from './editable.config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [['nuxt-editable', editableConfig]],
  vite: {
    optimizeDeps: {
      include: ['nuxt-editable > yup']
    }
  }
})
