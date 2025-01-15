<template>
    <LandingContainer>
        <!-- Hero Section with Background Image -->
        <div
            class="relative w-screen pt-32 px-16 py-16 sm:py-20 -mt-13 sm:-mt-4 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <!-- Background Image Container -->
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/fuel_attendant.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover brightness-75" />
            </div>

            <!-- Hero Content -->
            <div class="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto w-full mt-16">
                    <div
                        style="background: rgba(0, 0, 0, 0.25); padding: 10px; border-radius: 5px; display: inline-block;">
                        <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl mb-4">
                            Corrosion management
                        </h2>
                    </div>

                </div>
            </div>
        </div>

        <!-- Main Content Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Main Heading -->
            <h2 class="text-pretty text-3xl md:text-4xl font-light text-gray-900 mb-8">
                Protecting Infrastructure, Preserving Value
            </h2>

            <!-- Main Description -->
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed mb-8">
                    We help oil and gas companies combat corrosion-related challenges through tailored inspection,
                    maintenance, and repair services. Our approach focuses on extending the lifespan of critical assets
                    while minimizing downtime and operational risks.
                </p>

                <!-- Full-width container with image and content -->
                <div class="relative w-full">
                    <div class="flex flex-col lg:flex-row">
                        <!-- Left side - Image -->
                        <div class="w-full lg:w-1/2 h-[300px] lg:h-[600px] overflow-hidden">
                            <img src="assets/img/corrosion_mgt.jpg" alt="Sefa Energy Vision"
                                class="w-full h-full object-cover object-top" />
                        </div>

                        <div class="w-full lg:w-1/2 lg:h-[600px]">
                            <div class="grid h-full">
                                <div class="bg-gradient-to-r from-[#02194F] to-[#01133A] p-6 lg:p-8 flex flex-col mt-8">
                                    <p class="text-white mb-4">
                                        Corrosion can compromise safety, reliability, and performance, but with our
                                        proactive solutions, we ensure your infrastructure remains durable and
                                        efficient. From routine inspections to advanced maintenance strategies, we work
                                        to preserve the integrity of your systems, saving you time and costs in the long
                                        run.
                                    </p>

                                    <p class="text-white mb-4">Our experienced team brings hands-on expertise, ensuring
                                        all repairs and maintenance meet the highest safety and quality standards.
                                    </p>

                                    <p class="text-white mb-4">By addressing corrosion before it becomes critical, Sefa
                                        Energy helps you protect your investments and maintain uninterrupted operations
                                        across your energy projects.
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
                        Why partner with us?
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <!-- Column 1 -->
                        <div>
                            <ul class="space-y-6 text-white">
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                                        <path d="M8 2h8" />
                                        <path d="M9 2v2" />
                                        <path d="M15 2v2" />
                                        <circle cx="10" cy="11" r="3" />
                                        <line x1="12" y1="13" x2="16" y2="17" />
                                        <path d="M8 16l2 2" />
                                        <path d="M10 18l4-4" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Comprehensive Assessments</span>
                                        <p class="mt-1">We conduct detailed evaluations of pipelines, tanks, and
                                            equipment to identify early signs of corrosion, ensuring timely
                                            intervention.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <path d="M8 10h8" />
                                        <path d="M8 14h8" />
                                        <path d="M8 18h5" />
                                        <path d="M3 8h18" />
                                        <circle cx="16" cy="18" r="1" />
                                        <path d="M7 4V2" />
                                        <path d="M17 4V2" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Tailored Maintenance Plans</span>
                                        <p class="mt-1">Every project receives a customized maintenance plan designed to
                                            address unique challenges and support long-term performance.
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
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="M12 8a3 3 0 0 1 0 6 3 3 0 0 1 0-6z" />
                                        <path d="M12 2v3" />
                                        <path d="M3.5 7.5l2.5 2.5" />
                                        <path d="M20.5 7.5l-2.5 2.5" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Innovative Protection Techniques</span>
                                        <p class="mt-1">We implement proven methods, including coatings and cathodic
                                            protection systems, to reduce corrosion and prolong asset life.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="w-6 h-6 mt-1 flex-shrink-0">
                                        <circle cx="12" cy="12" r="8" />
                                        <path d="M15 9.354a4 4 0 1 0 0 5.292" />
                                        <path d="M15 8v3h-3" />
                                        <path d="M10 12h5" />
                                        <path d="M12 10v4" />
                                    </svg>
                                    <div>
                                        <span class="font-bold">Cost-Effective Solutions</span>
                                        <p class="mt-1">We focus on delivering practical, budget-friendly options that
                                            maintain your operations without compromising on safety or performance.</p>
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
</script>