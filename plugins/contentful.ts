import { createClient } from 'contentful'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const client = createClient({
    space: config.public.contentful.spaceId,
    accessToken: config.public.contentful.accessToken,
    environment: 'master' // This is the default environment
  })

  return {
    provide: {
      contentful: client
    }
  }
})