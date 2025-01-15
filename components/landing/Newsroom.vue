<template>
    <div
        class="relative bg-gradient-to-r from-[#81DBFF] to-[#81DBFF] w-screen py-12 sm:py-16 mt-4 sm:mt-5 translate-x-[-5%] sm:translate-x-[-2.8%]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 mb-8">
                <h2 class="text-pretty text-4xl font-light tracking-tight text-[#01133A] sm:text-5xl">THE FUTURE OF
                    ENERGY
                </h2>
                <p class="mt-2 text-lg/8 text-black">Industry Trends & Insights from Our Newsroom</p>
            </div>
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts" :key="post.id"
                    class="flex max-w-xl flex-col items-start justify-between">
                    <img :src="post.image" :alt="post.imageAlt" class="rounded-lg w-full">
                    <div class="mt-4">
                        <time :datetime="post.datetime" class="text-sm font-medium text-[#01133A]">{{ post.date
                            }}</time>
                    </div>
                    <div class="group relative flex-grow">
                        <h3 class="mt-2 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                            <a :href="post.href">
                                <span class="absolute inset-0" />
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-3 line-clamp-3 text-sm/6 text-dark-600">{{ post.description }}</p>
                        <a :href="post.href"
                            class="inline-flex items-center mt-4 text-sm font-medium text-[#01133A] hover:text-gray-600">
                            Read more
                            <svg class="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
const posts = [
    {
        id: 1,
        title: 'Oil Jumps Almost 3% Amid Sanction Concerns',
        href: 'oil-jumps-almost-5percent-amid-sanctions-concern',
        description:
            'Oil prices jumped nearly 3% this week, marking a third consecutive weekly gain. Traders are worried that potential new sanctions on Russia and Iran could disrupt supply.',
        date: 'Jan 15, 2024',
        datetime: '2024-01-15',
        image: new URL('@/assets/img/oil_refinery_sefa.jpg', import.meta.url).href,
        imageAlt: 'Oil Refinery News'
    },
    {
        id: 2,
        title: 'Warri Refinery Resumes Operations at 60% Capacity - Kyari',
        href: '/blog/green-energy-financing',
        description:
            'The Warri Refining & Petrochemicals Company (WRPC) in Delta State, Nigeria, has restarted operations after a decade-long closure. The refinery, with a capacity of 125,000 barrels per day, is currently operating at 60% capacity, focusing on producing diesel, kerosene, and naphtha.',
        date: 'Jan 20, 2024',
        datetime: '2024-01-20',
        image: new URL('@/assets/img/mele_kyari2.png', import.meta.url).href,
        imageAlt: 'Wind turbines installation'
    },
    {
        id: 3,
        title: 'Nigeria hit 1.51m bpd, meeting OPEC quota for the first time in over four years',
        href: '/blog/smart-grid-tech',
        description:
            'In December 2024, Nigeria\'s oil production reached 1.51 million barrels per day(bpd), meeting its OPEC quota for the first time in over four years.',
        date: 'Jan 25, 2024',
        datetime: '2024-01-25',
        image: new URL('@/assets/img/opec.png', import.meta.url).href,
        imageAlt: 'Smart grid infrastructure'
    }
]
</script>