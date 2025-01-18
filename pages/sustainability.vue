<template>
    <LandingContainer>
        <!-- Hero Section remains the same -->
        <div class="relative w-screen px-16 py-16 sm:py-20 mt-0 sm:mt-0 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/sustainability_compliance.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover brightness-[0.50]" />
            </div>
            <div class="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto w-full mt-16">
                    <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl mb-2"
                        style="padding: 10px; border-radius: 5px; display: inline-block;">

                        Energizing a greener future
                    </h2>
                    <p class="mt-0 text-pretty text-base font-medium text-gray-300 sm:text-lg/8">
                        Sefa is committed to industry-leading sustainability practices with full GHG and ESG compliance.
                    </p>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Sustainability Section -->
            <div class="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-20">
                <!-- Increased icon size and width -->
                <div class="w-full md:w-2/5 flex justify-center items-start">
                    <img src="@/assets/icons/sustainability_page.svg" alt="Sustainability Icon"
                        class="w-120 h-120 object-contain" />
                </div>
                <!-- Decreased text column width -->
                <div class="w-full md:w-3/5 max-w-lg">
                    <h3 class="text-pretty text-4xl font-light tracking-tight text-green-1600 mb-4">
                        Our Sustainable Culture
                    </h3>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        At Sefa Energy, we believe responsible energy practices are essential for a thriving and greener
                        future.

                    </p>

                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        Guided by strict <b>GHG and ESG compliance</b>, we actively work to minimize environmental
                        impact while
                        meeting
                        energy demands.
                    </p>

                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        Our focus is on sustainable operations that protect the environment, support
                        local
                        communities, and contribute to a healthier planet.
                    </p>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        In addition, we believe sustainability is a shared responsibility. That’s why we engage with our
                        partners, customers, and communities to promote practices that contribute to a healthier planet.

                    </p>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        From transparent reporting to active collaboration, we’re building a culture where
                        <b>sustainability isn’t just a goal—it’s a way of life.</b>
                    </p>
                </div>
            </div>
        </div>
    </LandingContainer>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "landing"
});

useSeoMeta({
    title: 'Sefa Energy Ltd',
    ogTitle: 'Sefa Energy Ltd',
    description: 'Making Energy Work For You.',
    ogDescription: 'Making Energy Work For You.',

    twitterCard: 'summary_large_image',
    twitterTitle: 'Sefa Energy Ltd',
    twitterDescription: 'Making Energy Work For You.',

    ogImage: {
        url: 'https://sefaenergy.com/Sefa_Energy_Ltd.png',
        width: 1200,
        height: 630,
        alt: 'Sefa Energy Ltd - Energy Solutions'
    },
    twitterImage: 'https://sefaenergy.com/Sefa_Energy_Ltd.png'
})
</script>