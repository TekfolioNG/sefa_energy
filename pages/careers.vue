<template>
    <LandingContainer>
        <!-- Hero Section with Background Image -->
        <div
            class="relative w-screen min-h-[90vh] px-16 py-16 sm:py-20 mt-0 sm:mt-0 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <!-- Background Image Container -->
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/career_sefa.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover object-[-900px] sm:object-center" />
                <!-- Dark overlay -->
                <div class="absolute inset-0 bg-black/35"></div>
            </div>
            <div class="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8"
                style="padding: 10px; border-radius: 5px; display: inline-block;">
                <div class="max-w-7xl mx-auto w-full mt-16">
                    <p class="px-4 mt-80 sm:mt-40 text-pretty text-sm font-small text-white sm:text-base"
            >
                        CAREER OPPORTUNITIES
                    </p>
                    <h2 class="text-pretty text-2xl font-light tracking-tight text-white sm:text-5xl mb-4"
                        style="line-height: 1.25; padding: 10px; border-radius: 5px; display: inline-block">
                        Join a team where your skills and <br>passion can make the world better</br>
                    </h2>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- First Section (Original) -->
            <div class="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-20">
                <div class="w-full md:w-2/5 flex justify-center items-start">
                    <img src="@/assets/img/career_sefa2.png" alt="sefa_hiring" class="w-120 h-120 object-contain" />
                </div>

                <div class="w-full md:w-3/5 max-w-lg">
                    <h3 class="text-pretty text-4xl font-light tracking-tight text-black-1200 mb-4">
                        <b>Build a Career with Sefa Energy Global</b>
                    </h3>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        At Sefa Energy Global, we value your skills, ideas, and passion. Joining our team means becoming part
                        of an environment where your contributions matter and where opportunities are personalized to
                        help
                        you grow — whether you’re an experienced professional or starting your career in the oil and gas
                        industry.
                    </p>

                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        Our culture is built on teamwork, inclusivity, and mutual respect. We’re dedicated to creating a
                        workplace where everyone feels supported, encouraged, and equipped to succeed. Your growth and
                        success are as important to us as the work we do together.
                    </p>

                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        Ready to take the next step in your career? <b>Send your application along with your CV/Resume
                            to
                            <a href="mailto:jobs@sefaenergy.com"
                                class="text-blue-600 underline hover:text-blue-800">jobs@sefaenergy.com</a>
                            or complete the form below.</b> Let's explore how you can grow with us at Sefa Energy Global. Your
                        journey starts here!
                    </p>
                </div>
            </div>

            <!-- Second Section (New Hiring Form) -->
            <div class="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-20">
                <!-- Form Section on Left -->
                <div class="w-full md:w-3/5 max-w-lg">
                    <h3 class="text-pretty text-4xl font-light tracking-tight text-black-1200 mb-6">
                        <b>Join our Team</b>
                    </h3>

                    <LandingApplicationForm />
                </div>

                <!-- Image Section on Right -->
                <div class="w-full md:w-2/5 flex justify-center items-start mt-24">
                    <img src="@/assets/img/career_sefa3.png" alt="sefa_hiring"
                        class="w-250 h-250 object-contain mt-0 md:mt-4" />
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
    title: 'Sefa Energy Global Global Ltd | Career',
    ogTitle: 'Sefa Energy Global Global Ltd | Career',
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