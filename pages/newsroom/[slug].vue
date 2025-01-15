<template>
    <div v-if="post" class="max-w-4xl mx-auto px-4 py-12">
        <img :src="post.featuredImage.fields.file.url" :alt="post.title"
            class="w-full rounded-lg aspect-[16/9] object-cover mb-8">
        <div class="prose max-w-none">
            <time :datetime="post.publishedDate" class="text-sm text-gray-500">
                {{ formatDate(post.publishedDate) }}
            </time>
            <h1 class="text-4xl font-bold text-[#01133A] mt-4 mb-8">{{ post.title }}</h1>
            <div v-html="renderedContent"></div>
        </div>

        <!-- Back to Newsroom link -->
        <div class="mt-12">
            <NuxtLink to="/newsroom"
                class="inline-flex items-center text-sm font-medium text-[#01133A] hover:text-gray-600">
                <svg class="mr-1 w-4 h-4 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
                Back to Newsroom
            </NuxtLink>
        </div>
    </div>
    <div v-else class="max-w-4xl mx-auto px-4 py-12">
        <p>Loading...</p>
    </div>
</template>

<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { BlogPost } from '~/types/contentful'

const route = useRoute()
const { fetchBlogPost } = useContentful()
const post = ref<BlogPost | null>(null)

onMounted(async () => {
    post.value = await fetchBlogPost(route.params.slug as string)
})

const renderedContent = computed(() => {
    if (!post.value?.content) return ''
    return documentToHtmlString(post.value.content)
})

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}
</script>

<style>
.prose {
    @apply text-gray-900;
}

.prose h2 {
    @apply text-2xl font-semibold mt-8 mb-4;
}

.prose h3 {
    @apply text-xl font-semibold mt-6 mb-3;
}

.prose p {
    @apply mb-4 leading-relaxed;
}

.prose ul {
    @apply list-disc list-inside mb-4;
}

.prose ol {
    @apply list-decimal list-inside mb-4;
}

.prose a {
    @apply text-blue-600 hover:text-blue-800;
}
</style>