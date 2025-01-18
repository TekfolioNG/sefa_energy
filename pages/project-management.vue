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
                            Project management
                        </h2>
                    </div>

                </div>
            </div>
        </div>

        <!-- Main Content Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Main Heading -->
            <h2 class="text-pretty text-3xl md:text-4xl font-light text-gray-900 mb-8">
                Expert Project Oversight and Execution
            </h2>

            <!-- Main Description -->
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed mb-8">
                    End-to-end project management for the energy sector. From initial planning to final execution, our
                    services ensure projects are delivered on time, within budget, and to the highest standards of
                    quality and safety.
                </p>

                <!-- Full-width container with image and content -->
                <div class="relative w-full">
                    <div class="flex flex-col lg:flex-row">
                        <!-- Left side - Image -->
                        <div class="w-full lg:w-1/2 h-[300px] lg:h-[600px] overflow-hidden">
                            <img src="assets/img/project_management.jpg" alt="Sefa Energy Vision"
                                class="w-full h-full object-cover object-top" />
                        </div>

                        <div class="w-full lg:w-1/2 lg:h-[600px]">
                            <div class="grid h-full">
                                <div class="bg-gradient-to-r from-[#02194F] to-[#01133A] p-6 lg:p-8 flex flex-col mt-8">
                                    <p class="text-white mb-4">
                                        Our team of experienced project managers brings industry-specific expertise and
                                        a commitment to excellence, ensuring that each project achieves its goals while
                                        exceeding client expectations. With Sefa Energy, you gain a trusted partner who
                                        prioritizes your success.
                                    </p>

                                    <p class="text-white mb-4">Our adherence to strict safety protocols and regulatory
                                        compliance ensures secure and responsible project execution, protecting people
                                        and assets.
                                    </p>


                                    <p class="text-white mt-4">
                                        At Sefa Energy, project management is more than a service—it’s a partnership. By
                                        aligning your goals with our expertise, we deliver value-driven solutions that
                                        empower your operations and support your long-term success in the energy sector.
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
                        What we do differently
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <!-- Column 1 -->
                        <div>
                            <ul class="space-y-6 text-white">
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M2 12l6 6 2-2-4-4 4-4-2-2-6 6z" />
                                        <path d="M22 12l-6 6-2-2 4-4-4-4 2-2 6 6z" />
                                        <line x1="8" y1="12" x2="16" y2="12" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Tailored Planning & Strategy</span>
                                        <p class="mt-1">Every project begins with a customized roadmap, aligning with
                                            your objectives and adapting to industry demands for efficient and precise
                                            execution.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <circle cx="18" cy="5" r="3" />
                                        <circle cx="6" cy="12" r="3" />
                                        <circle cx="18" cy="19" r="3" />
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Expert Coordination</span>
                                        <p class="mt-1">We bridge the gap between diverse teams and stakeholders,
                                            ensuring seamless communication and collaboration for optimal project
                                            outcomes.</p>
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
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                        <path d="M12 2v2" />
                                        <path d="M12 20v2" />
                                        <path d="M20 12h2" />
                                        <path d="M2 12h2" />
                                        <path d="M17 3l-3 3" />
                                        <path d="M17 21l-3-3" />
                                        <path d="M7 3l3 3" />
                                        <path d="M7 21l3-3" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Budget & Schedule Control</span>
                                        <p class="mt-1">Through rigorous oversight, we keep your project on track and on
                                            budget, mitigating risks and minimizing delays to ensure successful
                                            delivery.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <path d="M3 3v18h18" />
                                        <path d="m8 15 3-3 2 2 5-5" />
                                        <circle cx="18" cy="7" r="1" />
                                        <circle cx="13" cy="14" r="1" />
                                        <circle cx="11" cy="12" r="1" />
                                        <circle cx="8" cy="15" r="1" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Data-Driven Decision-Making</span>
                                        <p class="mt-1">Leveraging cutting-edge tools and insights, we monitor progress
                                            in real time, providing transparency and actionable recommendations for
                                            continuous improvement.</p>
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