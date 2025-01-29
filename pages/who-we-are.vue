<template>
    <LandingContainer>
        <!-- Hero Section with Background Image -->
        <div
            class="relative w-screen min-h-[80vh] px-16 py-16 sm:py-20 mt-0 sm:mt-0 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <!-- Background Image Container -->
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/who-we-are-sefa-sefa.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/50"></div>

            </div>


            <!-- Hero Content -->
            <div class="relative h-full flex flex-col justify-center px-1 sm:px-2 lg:px-2 mt-80 sm:mt-32">
                <div class="max-w-7xl mx-auto w-full mt-16">
                    <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl mb-2">
                        Who we are
                    </h2>
                    <p class="mt-0 text-pretty text-base font-medium text-white sm:text-lg/8">
                        We create innovative solutions that power progress while advancing a greener future.
                    </p>
                </div>
            </div>
        </div>

        <!-- Main Content Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Main Heading -->
            <h2 class="text-pretty text-3xl md:text-4xl font-light text-gray-900 mb-8">
                Advancing Energy Solutions
            </h2>

            <!-- Main Description -->
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed mb-8">
                    Sefa Energy Global specializes in supply, engineering, production chemicals, and environmental management
                    of energy solutions.
                    We’re dedicated to sustainable practices and operational excellence, delivering value and innovation
                    that empower communities and partners globally.
                </p>

                <!-- Full-width container with image and content -->
                <div class="relative w-full">
                    <div class="flex flex-col lg:flex-row">
                        <!-- Left side - Image -->
                        <div class="w-full lg:w-1/2 h-[300px] lg:h-[600px] overflow-hidden">
                            <img src="assets/img/our_vision_sefa.jpg" alt="Sefa Energy Global Vision"
                                class="w-full h-full object-cover object-top" />
                        </div>

                        <div class="w-full lg:w-1/2 lg:h-[600px]">
                            <div class="grid h-full">
                                <!-- Purpose Row -->
                                <div
                                    class="bg-gradient-to-r from-[#02194F] to-[#01133A] p-6 lg:p-8 flex flex-col justify-center h-[250px] lg:h-[300px] mt-[32px]">
                                    <h2
                                        class="text-pretty text-3xl lg:text-4xl font-light tracking-tight text-white sm:text-6xl mb-4">
                                        Our purpose
                                    </h2>
                                    <p class="text-white">
                                        Deliver innovative energy solutions that empower progress <br>and drive
                                        sustainable
                                        growth for both clients and partners.
                                        </br> </p>
                                </div>

                                <!-- Vision Row -->
                                <div
                                    class="bg-gradient-to-r from-[#7e1414] to-[#7e1414] p-6 lg:p-8 flex flex-col justify-center h-[250px] lg:h-[268px]">
                                    <h2
                                        class="text-pretty text-3xl lg:text-4xl font-light tracking-tight text-white sm:text-6xl mb-4">
                                        Our vision
                                    </h2>
                                    <p class="text-white">
                                        To shape energy solutions that prioritize innovation, sustainability, and
                                        meaningful impact on communities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative w-full py-4 sm:py-8 md:py-8 lg:py-8">
                    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
                        <div class="relative z-10">
                            <h2
                                class="text-left text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight lg:tracking-tight mt-1 sm:mt-2 mb-1 sm:mb-2">
                                Our Values
                            </h2>

                            <div class="w-full py-6 space-y-8 sm:space-y-12">
                                <div v-for="value in values" :key="value.title" :class="[
                                    'flex flex-col items-center gap-4 md:gap-8',
                                    value.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                                ]">
                                    <!-- Icon Section - Optimized size -->
                                    <div class="w-full md:w-1/2 flex justify-center">
                                        <img :src="value.icon" :alt="value.title"
                                            class="w-48 h-48 sm:w-64 sm:h-64 object-contain" />
                                    </div>

                                    <!-- Content Section - Optimized spacing -->
                                    <div class="w-full md:w-1/2">
                                        <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900" style="
                            background: linear-gradient(to right, #02194F, #01133A);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;">
                                            {{ value.title }}
                                        </h3>
                                        <p class="text-gray-900 leading-relaxed max-w-md text-base sm:text-lg"
                                            style="color: #000000;">
                                            {{ value.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
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

// Import icons
import collaborationIcon from '@/assets/icons/Collaboration.svg';
import excellenceIcon from '@/assets/icons/Excellence.svg';
import innovationIcon from '@/assets/icons/Innovation.svg';
import integrityIcon from '@/assets/icons/Integrity.svg';
import sustainabilityIcon from '@/assets/icons/Sustainability.svg';

interface Value {
    title: string;
    description: string;
    icon: string;
    isReversed: boolean;
}

const values: Value[] = [
    {
        title: "Integrity",
        description: "Trust is the foundation of everything we do. We uphold the highest standards of honesty, transparency, and ethics in all our interactions. Our steadfast commitment to these principles creates lasting relationships, ensuring clients and partners experience reliability and authenticity throughout their journey with us.",
        icon: integrityIcon,
        isReversed: false
    },
    {
        title: "Excellence",
        description: "Good enough is never enough. We are committed to raising the bar, delivering services and solutions that not only meet but exceed expectations. This dedication to quality and continuous improvement shapes our reputation, reinforces our industry leadership, and drives outstanding outcomes for every project.",
        icon: excellenceIcon,
        isReversed: true
    },
    {
        title: "Innovation",
        description: "The future is built on fresh ideas. We embrace creativity and leverage advanced technologies to solve the complex challenges of today's energy landscape. Our forward-thinking approach keeps us agile and responsive, generating solutions that enhance efficiency and create lasting positive impact for clients and communities.",
        icon: innovationIcon,
        isReversed: false
    },
    {
        title: "Sustainability",
        description: "Success isn't just about profit—it's about preserving resources for generations to come. We are deeply committed to balancing operational goals with environmental stewardship. Smart practices and eco-conscious decisions guide our daily operations, creating value while protecting our planet's future.",
        icon: sustainabilityIcon,
        isReversed: true
    },
    {
        title: "Collaboration",
        description: "Teamwork makes everything possible. We believe in the power of partnerships—within our team and with our clients. Through mutual respect and open communication, we build connections that spark innovation, drive exceptional results, and ensure every voice contributes to our shared success.",
        icon: collaborationIcon,
        isReversed: false
    }
];
useSeoMeta({
    title: 'Sefa Energy Global Global Ltd | Who We Are',
    ogTitle: 'Sefa Energy Global Global Ltd | Who We Are',
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