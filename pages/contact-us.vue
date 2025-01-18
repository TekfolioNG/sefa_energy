<template>
    <LandingContainer>
        <!-- Hero Section remains the same -->
        <div class="relative w-screen px-16 py-16 sm:py-20 mt-0 sm:mt-0 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <!-- Background Image Container -->
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/contact_us_sefa.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover brightness-[0.50]" />

            </div>


            <!-- Hero Content -->
            <div class="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto w-full mt-16">
                    <div style="padding: 10px; border-radius: 5px; display: inline-block;">
                        <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl mb-4">
                            Contact us
                        </h2>
                    </div>

                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Contact Us Form -->
            <div class="max-w-2xl mx-auto">
                <LandingContactUsForm />
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
    description: 'Making Energy Work For You. For Tomorrow',
    ogDescription: 'Making Energy Work For You. For Tomorrow',

    twitterCard: 'summary_large_image',
    twitterTitle: 'Sefa Energy Ltd',
    twitterDescription: 'Making Energy Work For You. For Tomorrow',

    ogImage: {
        url: 'https://sefaenergy.com/Sefa_Energy_Ltd.png',
        width: 1200,
        height: 630,
        alt: 'Sefa Energy Ltd - Energy Solutions'
    },
    twitterImage: 'https://sefaenergy.com/Sefa_Energy_Ltd.png'
})
</script>