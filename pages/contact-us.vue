<template>
    <LandingContainer>
        <!-- Hero Section with Background Image -->
        <div
            class="relative w-screen min-h-[80vh] px-16 py-16 sm:py-20 mt-0 sm:mt-0 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/contact_us_sefa.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover object-[-900px] sm:object-center" />
                <div class="absolute inset-0 bg-black/50"></div>
            </div>


            <!-- Hero Content -->
            <div class="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 mt-80 sm:mt-32">
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
    title: 'Sefa Energy Global Global Ltd | Contact Us',
    ogTitle: 'Sefa Energy Global Global Ltd | Contact Us',
    description: 'Making Energy Work For You.',
    ogDescription: 'Making Energy Work For You.',

    twitterCard: 'summary_large_image',
    twitterTitle: 'Sefa Energy Global Ltd',
    twitterDescription: 'Making Energy Work For You.',

    ogImage: {
        url: 'https://sefaenergy.com/Sefa_Energy_Ltd.png',
        width: 1200,
        height: 630,
        alt: 'Sefa Energy Global Ltd - Energy Solutions'
    },
    twitterImage: 'https://sefaenergy.com/Sefa_Energy_Ltd.png'
})
</script>