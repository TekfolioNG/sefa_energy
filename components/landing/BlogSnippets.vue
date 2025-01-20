<template>
    <div
        class="relative bg-gradient-to-r from-[#2C3E50] to-[#34495E] w-screen py-12 sm:py-16 mt-4 sm:mt-5 translate-x-[-5%] sm:translate-x-[-2.8%]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 mb-8">
                <h2 class="text-pretty text-4xl font-light tracking-tight text-gray-100 sm:text-5xl">
                    THE FUTURE OF ENERGY
                </h2>
                <p class="mt-2 text-lg/8 text-gray-300">Industry Trends & Insights from Our Newsroom</p>
            </div>
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600 pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts" :key="post.id"
                    class="flex max-w-xl flex-col items-start justify-between">
                    <img :src="post.featuredImage.fields.file.url" :alt="post.title" class="rounded-lg w-full">
                    <div class="mt-4">
                        <time :datetime="post.publishedDate" class="text-sm font-medium text-gray-300">
                            {{ formatDate(post.publishedDate) }}
                        </time>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-2 text-lg/6 font-semibold text-gray-100 group-hover:text-gray-300">
                            <NuxtLink :to="`/newsroom/${post.slug}`">
                                {{ post.title }}
                            </NuxtLink>
                        </h3>
                        <p class="mt-3 line-clamp-3 text-sm/6 text-gray-300">
                            {{ post.description }}
                        </p>
                        <NuxtLink :to="`/newsroom/${post.slug}`"
                            class="inline-flex items-center mt-4 text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
                            Read more
                            <svg class="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </NuxtLink>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/contentful'

const { fetchBlogPosts } = useContentful()
const posts = ref<BlogPost[]>([])

onMounted(async () => {
    posts.value = await fetchBlogPosts(true) // true to get featured posts only
})

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}
</script>