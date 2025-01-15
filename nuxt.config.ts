// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
  devtools: { enabled: true },  // This was duplicated
  css: ["~/assets/css/main.css"], // This was duplicated
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },  // This was duplicated
  modules: [
    "nuxt-icon-tw",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],
  googleFonts: {
    families: {
      Montserrat: {
        wght: ["100", "200", "300", "700"],
        ital: ["100", "200", "300", "700"],
      },
      Roboto: {
        wght: ["100", "300", "400", "500"],
        ital: ["100", "300", "400", "500"],
      },
    },
    display: "swap",
    preload: true,
    prefetch: true,
    preconnect: true,
    useStylesheet: true,
  },
  image: {
    provider: "cloudinary",
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`,
    },
  },
  runtimeConfig: {
    public: {
      contentful: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN
      }
    }
  },
  nitro: {
    preset: 'cloudflare'
  },
});