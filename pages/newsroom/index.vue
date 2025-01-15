<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-4xl font-bold text-[#01133A] mb-8">Newsroom</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article v-for="post in posts" :key="post.id" class="flex flex-col">
                <img :src="post.featuredImage.fields.file.url" :alt="post.title"
                    class="rounded-lg w-full aspect-[16/9] object-cover mb-4">
                <time :datetime="post.publishedDate" class="text-sm text-gray-500">
                    {{ formatDate(post.publishedDate) }}
                </time>
                <h2 class="mt-2 text-xl font-semibold text-gray-900">
                    <NuxtLink :to="`/newsroom/${post.slug}`" class="hover:text-gray-600">
                        {{ post.title }}
                    </NuxtLink>
                </h2>
                <p class="mt-3 text-gray-600 line-clamp-3">{{ post.description }}</p>
                <NuxtLink :to="`/newsroom/${post.slug}`"
                    class="inline-flex items-center mt-4 text-sm font-medium text-[#01133A] hover:text-gray-600">
                    Read more
                    <svg class="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </NuxtLink>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/contentful'

const { fetchBlogPosts } = useContentful()
const posts = ref<BlogPost[]>([])

onMounted(async () => {
    posts.value = await fetchBlogPosts()
})

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}
</script>