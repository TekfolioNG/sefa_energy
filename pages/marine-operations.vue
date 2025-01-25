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
                    <div style="padding: 10px; border-radius: 5px; display: inline-block;">
                        <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl mb-4">
                            Marine operations
                        </h2>
                    </div>

                </div>
            </div>
        </div>

        <!-- Main Content Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Main Heading -->
            <h2 class="text-pretty text-3xl md:text-4xl font-light text-gray-900 mb-8">
                Trusted Solutions for Marine Cargo and Vessel Handling
            </h2>

            <!-- Main Description -->
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed mb-8">
                    We deliver specialized services to support critical marine operations with precision and expertise.
                    Our team is dedicated to ensuring safe, efficient, and reliable handling of vessels, cargo, and
                    related operations for the oil and gas sector.
                </p>

                <!-- Full-width container with image and content -->
                <div class="relative w-full">
                    <div class="flex flex-col lg:flex-row">
                        <!-- Left side - Image -->
                        <div class="w-full lg:w-1/2 h-[300px] lg:h-[600px] overflow-hidden">
                            <img src="assets/img/sefa_marine_engineering.jpg" alt="Sefa Energy Vision"
                                class="w-full h-full object-cover object-top" />
                        </div>

                        <div class="w-full lg:w-1/2 lg:h-[600px]">
                            <div class="grid h-full">
                                <div class="bg-gradient-to-r from-[#02194F] to-[#01133A] p-6 lg:p-8 flex flex-col mt-8">
                                    <p class="text-white mb-4">
                                        We bring years of experience to every task, ensuring high-quality execution in
                                        hose handling, cargo operations, and tank or vessel cleaning. Each service is
                                        designed to meet industry standards, safeguard the environment, and prioritize
                                        operational safety.
                                    </p>

                                    <p class="text-white mb-4">Strict adherence to safety protocols ensures the
                                        protection of personnel, assets, and the surrounding environment.
                                    </p>

                                    <p class="text-white mb-4">By prioritizing safety, compliance, and precision, we
                                        help clients maintain uninterrupted operations and achieve optimal results. Our
                                        skilled team works diligently to handle every task with care, ensuring vessels
                                        and cargo are managed to the highest standards.
                                    </p>


                                    <p class="text-white mt-4">
                                        With Sefa Energy, you gain a partner dedicated to providing expert marine
                                        solutions tailored to meet your operational needs while upholding the highest
                                        standards of safety and efficiency.
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
                        What sets us apart?
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <!-- Column 1 -->
                        <div>
                            <ul class="space-y-6 text-white">
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                                        <path d="M20 10v2a2 2 0 0 1-2 2h-1" />
                                        <path d="M4 10v2a2 2 0 0 0 2 2h1" />
                                        <path d="M17 14v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-3" />
                                        <path d="M8 19h8" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Specialized Hose Handling</span>
                                        <p class="mt-1">Expert management of hoses during vessel operations to prevent
                                            spillage, minimize risks, and maintain safety.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M2 20h20" />
                                        <path d="M18 12H6c-1 0-2 1-2 2v6h16v-6c0-1-1-2-2-2Z" />
                                        <path d="M8 12V8c0-1 1-2 2-2h4c1 0 2 1 2 2v4" />
                                        <path d="M12 6V4" />
                                        <path d="M10 16h4" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Efficient Vessel and Cargo Operations</span>
                                        <p class="mt-1">Precise vessle movement management and handling and transfer of
                                            cargo to maximize operational
                                            efficiency and ensure the integrity of materials.
                                        </p>
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
                                        <rect x="4" y="6" width="16" height="16" rx="2" />
                                        <path d="M8 2h8" />
                                        <path d="M12 2v4" />
                                        <path d="M4 10h16" />
                                        <path d="M7 14l2 2 2-2" />
                                        <path d="M13 14l2 2 2-2" />
                                        <path d="M7 18l2 2 2-2" />
                                        <path d="M13 18l2 2 2-2" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Comprehensive Tank and Vessel Cleaning</span>
                                        <p class="mt-1">Advanced cleaning solutions to maintain hygiene, extend the
                                            lifespan of tanks and vessels, and comply with environmental standards.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <circle cx="12" cy="7" r="4" />
                                        <path d="M5 22c0-4.4 3.6-8 8-8" />
                                        <path d="M16 11c3.3 0 6 2.7 6 6" />
                                        <circle cx="17" cy="7" r="3" />
                                        <circle cx="7" cy="7" r="3" />
                                        <path d="M8 14c-2.2 0-4 1.8-4 4" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Experienced Team</span>
                                        <p class="mt-1">Our skilled professionals bring a wealth of experience and
                                            industry-specific knowledge to every operation, ensuring reliable and
                                            trusted service delivery.</p>
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