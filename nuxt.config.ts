// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,

  devtools: { enabled: false },
   modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],

  nitro: {
    storage: {
      cache: {
        driver: 'memory'
      }
    },
    prerender: {
      ignore: [
        '/pages/**'
      ]
    }

  },

  runtimeConfig: {
    public: {
      siteName: 'Khadem',
      siteDescription: 'The Dart Backend Framework',
      siteUrl: process.env.NODE_ENV === 'production' ? 'https://khadem-framework.github.io/khadem-docs' : 'https://khadem.dev',
      socialLinks: {
        github: 'https://github.com/khedrmahmoud/khadem',
        discord: 'https://discord.gg/XdbryzNJt9',
        twitter: 'https://x.com/KhademFramework',
        linkedin: 'https://linkedin.com/company/khadem-framework',
        youtube: 'https://youtube.com/@khadem-framework'
      }
    }
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        dir: 'ltr'
      },
      {
        code: 'ar',
        name: 'العربية',
        file: 'ar.json',
        dir: 'rtl'
      }
    ],
    lazy: true,
    defaultLocale: 'en',
    langDir: './locales',
    strategy: 'prefix_except_default'
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      hashMode: false
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/khadem-docs/' : '/',
    head: {
      title: 'Khadem - The Dart Backend Framework',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A high-performance, modular backend framework for building APIs and command-line tools with Dart' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
})