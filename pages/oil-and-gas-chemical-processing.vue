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
                        <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl">
                            Oil & gas chemical processing
                        </h2>
                    </div>

                </div>
            </div>
        </div>

        <!-- Main Content Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Main Heading -->
            <h2 class="text-pretty text-3xl md:text-4xl font-light text-gray-900">
                Specialized Chemical Solutions for Optimized Operations
            </h2>

            <!-- Main Description -->
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed mb-8">
                    At Sefa Energy Global, we provide tailored chemical processing solutions designed specifically for the oil
                    and gas sector. Our team of chemical specialists provides ongoing support, ensuring clients have the
                    insights and assistance needed to implement our <a href="/our-products-and-applications"
                        target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                        products and applications</a> effectively.
                </p>

                <!-- Full-width container with image and content -->
                <div class="relative w-full">
                    <div class="flex flex-col lg:flex-row">
                        <!-- Left side - Image -->
                        <div class="w-full lg:w-1/2 h-[300px] lg:h-[600px] overflow-hidden">
                            <img src="assets/img/oli_gas_chemical.jpg" alt="Sefa Energy Global Vision"
                                class="w-full h-full object-cover object-top" />
                        </div>

                        <div class="w-full lg:w-1/2 lg:h-[600px]">
                            <div class="grid h-full">
                                <div class="bg-gradient-to-r from-[#02194F] to-[#01133A] p-6 lg:p-8 flex flex-col mt-8">
                                    <p class="text-white mb-4">
                                        Our expertise ensures that every chemical application contributes to smoother
                                        operations, increased efficiency, and prolonged equipment life, helping clients
                                        achieve their operational goals with precision.
                                    </p>

                                    <p class="text-white mb-4">From descalers to corrosion inhibitors and other
                                        specialty chemicals, we deliver products that address the unique challenges of
                                        oilfield operations. Our focus is not just on supplying chemicals but on
                                        offering solutions that enhance safety, productivity, and environmental
                                        sustainability.
                                    </p>


                                    <p class="text-white mt-4">
                                        With Sefa Energy Global as your partner, you gain access to specialized chemical
                                        solutions that not only improve operational efficiency but also contribute to
                                        safer and more sustainable practices in the oil and gas industry.
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
                        What makes us unique?
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <!-- Column 1 -->
                        <div>
                            <ul class="space-y-6 text-white">
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M9 3h6" />
                                        <path d="M12 3v7" />
                                        <path d="M6 20h12a2 2 0 0 0 1.7-3L14 8V3h-4v5L4.3 17a2 2 0 0 0 1.7 3Z" />
                                        <path d="M8 14h8" />
                                        <path d="M7 17h10" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Customized Chemical Formulations</span>
                                        <p class="mt-1">We develop chemical solutions tailored to meet the specific
                                            needs of each client, ensuring optimal results for their operations.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M12 2v4" />
                                        <path d="M12 18v4" />
                                        <path d="M4.93 4.93l2.83 2.83" />
                                        <path d="M16.24 16.24l2.83 2.83" />
                                        <path d="M2 12h4" />
                                        <path d="M18 12h4" />
                                        <path d="M4.93 19.07l2.83-2.83" />
                                        <path d="M16.24 7.76l2.83-2.83" />
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M12 9v3l2 2" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Performance-Driven Products</span>
                                        <p class="mt-1">Our range of high-quality chemicals, including descalers,
                                            corrosion inhibitors, and biocides, is engineered to tackle complex
                                            operational challenges, and therefore ensure maximum performance and minimal
                                            downtime.
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
                                        <path
                                            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                                        <path d="M12 16v-4" />
                                        <path d="M8 12h8" />
                                        <path d="M15 9l-3 3-3-3" />
                                        <path d="M9 15l3-3 3 3" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Operational Efficiency</span>
                                        <p class="mt-1">By integrating advanced chemical technologies into processes, we
                                            help clients reduce operational bottlenecks and extend the lifespan of
                                            critical assets.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.8-.1 2.6-.3" />
                                        <path d="M20 12c0-4.4-3.6-8-8-8" />
                                        <path
                                            d="M12 6c-1.7 1.5-3 3.7-3 6s1.3 4.5 3 6c1.7-1.5 3-3.7 3-6s-1.3-4.5-3-6z" />
                                        <path d="M19 17c-1.7 1.5-3.7 2-6 2" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Environmental Responsibility</span>
                                        <p class="mt-1">Our solutions are designed with a focus on sustainability,
                                            offering environmentally friendly formulations that adhere to global safety
                                            standards.</p>
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
    title: 'Sefa Energy Global Global Ltd | Oil & Gas Chemical Processing',
    ogTitle: 'Sefa Energy Global Global Ltd | Oil & Gas Chemical Processings',
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