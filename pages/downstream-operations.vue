<template>
    <LandingContainer>
        <!-- Hero Section with Background Image -->
        <div class="relative w-screen px-16 py-16 sm:py-20 mt-0 sm:mt-0 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <!-- Background Image Container -->
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/fuel_attendant.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover brightness-[0.50]" />
            </div>

            <!-- Hero Content -->
            <div class="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto w-full mt-16">
                    <div
                        style="padding: 10px; border-radius: 5px; display: inline-block;">
                        <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl mb-4">
                            Downstream operations
                        </h2>
                    </div>

                </div>
            </div>
        </div>

        <!-- Main Content Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Main Heading -->
            <h2 class="text-pretty text-3xl md:text-4xl font-light text-gray-900 mb-8">
                Premium Petroleum & Gas Distribution
            </h2>

            <!-- Main Description -->
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed mb-8">
                    We redefine downstream excellence through the distribution and delivery of premiumpetroleum products
                    and LPG. Our unwavering focus on compliance, efficiency, and value
                    creation drives reliable operations across the supply chain.
                </p>

                <!-- Full-width container with image and content -->
                <div class="relative w-full">
                    <div class="flex flex-col lg:flex-row">
                        <!-- Left side - Image -->
                        <div class="w-full lg:w-1/2 h-[300px] lg:h-[600px] overflow-hidden">
                            <img src="assets/img/retail_fuel_station.jpg" alt="Sefa Energy Vision"
                                class="w-full h-full object-cover object-top" />
                        </div>

                        <div class="w-full lg:w-1/2 lg:h-[600px]">
                            <div class="grid h-full">
                                <div class="bg-gradient-to-r from-[#02194F] to-[#01133A] p-6 lg:p-8 flex flex-col mt-8">
                                    <p class="text-white mb-4">
                                        At Sefa, we are firmly commitment to operational excellence. We ensure every
                                        delivery meets
                                        industry standards and client expectations, supporting the smooth operation of
                                        energy supply networks.
                                    </p>

                                    <p class="text-white mb-4">As a trusted partner in Nigeria's energy sector
                                        , we continue to invest in
                                        technology and infrastructure to enhance our distribution capabilities. Our
                                        extensive network enables us to serve retail stations, industrial clients, and
                                        commercial customers with reliability and precision.
                                    </p>


                                    <p class="text-white mt-4">
                                        With Sefa Energy, you get more than just distribution—you gain a trusted partner
                                        dedicated to powering progress and creating value across the supply chain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Two-column section with blue background and white text -->
                <div class="bg-gradient-to-r from-[#02194F] to-[#01133A] p-6 -mt-4 pt-2 px-8">
                    <h2
                        class="text-pretty text-3xl lg:text-4xl font-light tracking-tight text-white sm:text-6xl mb-2 pb-8 mt-4 lg:mt-12">
                        What makes us different?
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <!-- Column 1 -->
                        <div>
                            <ul class="space-y-6 text-white">
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <rect x="3" y="8" width="18" height="14" />
                                        <path d="M2 8L12 2L22 8" />
                                        <rect x="9" y="14" width="6" height="8" />
                                        <rect x="5" y="10" width="3" height="3" />
                                        <rect x="16" y="10" width="3" height="3" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Strategic Storage Facilities</span>
                                        <p class="mt-1">Our network of storage terminals across key locations ensures
                                            consistent product availability and quick response to market demands.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M10 17h4V5H2v12h3" />
                                        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9" />
                                        <path d="M14 17h1" />
                                        <rect x="2" y="9" width="8" height="3" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Modern Distribution Fleet</span>
                                        <p class="mt-1">We maintain a fleet of well-maintained tankers and delivery
                                            vehicles equipped with tracking systems for real-time monitoring and
                                            efficient delivery.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- Column 2 -->
                        <div>
                            <ul class="space-y-6 text-white">
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path
                                            d="M9 2L9 7L6 19C6 20.7 7.3 22 9 22L15 22C16.7 22 18 20.7 18 19L15 7L15 2" />
                                        <path d="M7 2L17 2" />
                                        <path d="M7 13L17 13" />
                                        <circle cx="11" cy="16" r="1" />
                                        <circle cx="14" cy="17" r="1" />
                                        <path d="M20 6L22 8" />
                                        <path d="M20 8L22 6" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Quality Assurance</span>
                                        <p class="mt-1">Every product batch undergoes rigorous testing at our
                                            state-certified laboratories, guaranteeing that customers receive fuel that
                                            meets the highest quality standards.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Safety-First Operations</span>
                                        <p class="mt-1">We implement comprehensive safety protocols across loading,
                                            transportation, and delivery, protecting our team, customers, and the
                                            environment.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
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