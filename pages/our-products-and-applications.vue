<template>
    <LandingContainer>
        <!-- Hero Section with Background Image -->
        <div class="relative w-screen px-16 py-16 sm:py-20 mt-0 sm:mt-0 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/our_products_applications_sefa.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover brightness-[0.50]" />
            </div>
            <div class="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto w-full mt-16">
                    <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl mb-4"
                        style="padding: 10px; border-radius: 5px; display: inline-block;">

                        Our Products
                    </h2>
                    <p class="mt-0 text-pretty text-base font-medium text-gray-300 sm:text-lg/8">
                        Comprehensive solutions for the oil & gas industry, engineered to enhance performance and
                        efficiency.
                    </p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- Overview Section -->
            <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20">
                <div class="w-full md:w-1/2">
                    <h3 class="text-3xl font-bold mb-6 text-gray-900" style="
                        background: linear-gradient(to right, #02194F, #01133A);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;">
                        Industrial Chemical Solutions
                    </h3>
                    <p class="text-gray-700 text-lg leading-relaxed">
                        Our comprehensive range of chemical solutions is designed to optimize your operations, protect
                        your equipment,
                        and improve efficiency across the entire production cycle. Each product is formulated with
                        attention to
                        quality and environmental responsibility.
                    </p>
                </div>
                <div class="w-full md:w-1/2">
                    <img src="@/assets/img/oil_and_gas_apps_sefa.jpg" alt="Industrial chemical solutions"
                        class="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
            </div>

            <!-- Products Grid -->
            <h3 class="text-3xl font-bold mb-12 text-gray-900" style="
                background: linear-gradient(to right, #02194F, #01133A);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">
                Product Categories
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="product in products" :key="product.name"
                    class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <component :is="product.icon" class="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ product.name }}</h4>
                            <p class="text-gray-600">{{ product.description }}</p>
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

import {
    ArrowPathIcon,
    ArrowsPointingInIcon,
    BeakerIcon,
    BoltIcon,
    BugAntIcon,
    CircleStackIcon,
    CloudIcon,
    ExclamationTriangleIcon,
    FireIcon,
    FunnelIcon,
    MagnifyingGlassCircleIcon,
    PuzzlePieceIcon,
    ShieldCheckIcon,
    SparklesIcon,
    Square3Stack3DIcon,
    WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline';


interface Product {
    name: string;
    description: string;
    icon: typeof CircleStackIcon;
}

const products: Product[] = [
    {
        name: "Antiscalants",
        description: "Prevent scale formation and deposits in processing equipment",
        icon: BeakerIcon
    },
    {
        name: "Biocides",
        description: "Control microbial growth in industrial systems",
        icon: BugAntIcon
    },
    {
        name: "Cleaners",
        description: "Maintain equipment cleanliness and efficiency",
        icon: SparklesIcon
    },
    {
        name: "Coagulants",
        description: "Enhance particle separation in water treatment",
        icon: ArrowsPointingInIcon
    },
    {
        name: "Corrosion Inhibitors",
        description: "Protect equipment from corrosive damage",
        icon: ShieldCheckIcon
    },
    {
        name: "Defoamers",
        description: "Control foam in industrial processes",
        icon: CloudIcon
    },
    {
        name: "Desalters",
        description: "Remove salt contaminants from crude oil",
        icon: FireIcon
    },
    {
        name: "Descalers",
        description: "Remove existing scale deposits from equipment",
        icon: WrenchScrewdriverIcon
    },
    {
        name: "Dewatering Agents",
        description: "Separate water from oil and solids",
        icon: MagnifyingGlassCircleIcon
    },
    {
        name: "Emulsion Breakers",
        description: "Separate oil-water emulsions effectively",
        icon: ArrowPathIcon
    },
    {
        name: "Filter Aids",
        description: "Improve filtration efficiency",
        icon: FunnelIcon
    },
    {
        name: "Flocculants",
        description: "Aggregate particles for easier separation",
        icon: Square3Stack3DIcon
    },
    {
        name: "Friction Reducers",
        description: "Minimize friction in fluid systems",
        icon: BoltIcon
    },
    {
        name: "Gel Breakers",
        description: "Break down gel structures in drilling fluids",
        icon: PuzzlePieceIcon
    },
    {
        name: "Hydrogen Sulfide Scavengers",
        description: "Remove H2S from gas streams",
        icon: ExclamationTriangleIcon
    },
    {
        name: "Iron Control Agents",
        description: "Manage iron content in process systems",
        icon: CircleStackIcon
    }
];

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
