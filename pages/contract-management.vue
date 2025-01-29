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
                            Contract management (Commercials)
                        </h2>
                    </div>

                </div>
            </div>
        </div>

        <!-- Main Content Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Main Heading -->
            <h2 class="text-pretty text-3xl md:text-4xl font-light text-gray-900 mb-8">
                Full Lifecycle Contract Management
            </h2>

            <!-- Main Description -->
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed mb-8">
                    From negotiation to completion, we ensure that every contract is meticulously crafted, executed, and
                    monitored to meet your specific business needs and legal requirements.
                </p>

                <!-- Full-width container with image and content -->
                <div class="relative w-full">
                    <div class="flex flex-col lg:flex-row">
                        <!-- Left side - Image -->
                        <div class="w-full lg:w-1/2 h-[300px] lg:h-[600px] overflow-hidden">
                            <img src="assets/img/contract_management_sefa.jpg" alt="Sefa Energy Global Vision"
                                class="w-full h-full object-cover object-top" />
                        </div>

                        <div class="w-full lg:w-1/2 lg:h-[600px]">
                            <div class="grid h-full">
                                <div class="bg-gradient-to-r from-[#02194F] to-[#01133A] p-6 lg:p-8 flex flex-col mt-8">
                                    <p class="text-white mb-4">
                                        Our contract management (commercials) services are designed to ensure smooth,
                                        efficient, and compliant management of contracts from initial negotiation to
                                        successful project completion.
                                    </p>

                                    <p class="text-white mb-4">Focused on both client needs and regulatory requirements,
                                        our team delivers effective execution by managing risks, optimizing value, and
                                        ensuring performance. We are dedicated to providing transparent, reliable
                                        contract solutions for the energy sector.
                                    </p>


                                    <p class="text-white mt-4">
                                        As a trusted partner in Nigeria's energy sector, we leverage advanced contract
                                        management systems and deep industry expertise to simplify complex commercial
                                        relationships. Our proven approach helps clients optimize contract performance,
                                        minimize risks, and seize opportunities across their operations.
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <path d="M14 2v6h6" />
                                        <path d="M8 13h8" />
                                        <path d="M8 17h8" />
                                        <path d="M8 9h2" />
                                        <circle cx="19" cy="19" r="3" />
                                        <path d="M17 21l4-4" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Customized Contract Solutions</span>
                                        <p class="mt-1">We understand the unique needs of each client and create
                                            customized contract execution plans that align with your business objectives
                                            and industry regulatory
                                            requirements.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                        <path d="M16 16l2 2" />
                                        <path d="M8 16l-2 2" />
                                        <polyline points="9 11 12 14 22 4" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Timely Execution and Compliance</span>
                                        <p class="mt-1">We guarantee on-time execution and full compliance with all
                                            agreed terms, ensuring smooth business operations without delays or legal
                                            setbacks.</p>
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
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="M12 8v4" />
                                        <path d="M12 16h.01" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Risk Management & Compliance</span>
                                        <p class="mt-1">We implement robust governance frameworks that ensure
                                            contractual compliance, manage commercial risks, and maintain regulatory
                                            adherence while protecting your interests throughout the contract
                                            lifecycle.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        <line x1="8" y1="9" x2="16" y2="9" />
                                        <line x1="8" y1="13" x2="14" y2="13" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Transparent Reporting & Communication</span>
                                        <p class="mt-1">We maintain open lines of communication, keeping you informed at
                                            every stage of the contract process, thereby fostering trust and clarity in
                                            all
                                            dealings.</p>
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
   title: 'Sefa Energy Global Global Ltd | Contract Management',
    ogTitle: 'Sefa Energy Global Global Ltd | Contract Management',
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