<template>
    <div
        class="relative bg-gradient-to-r from-[#000000] to-[#000000] w-screen py-10 sm:py-12 mt-8 sm:mt-14 translate-x-[-5%] sm:translate-x-[-2.8%]">
        <div class="container mx-auto px-4 sm:px-6">
            <h2
                class="text-left text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight lg:tracking-tight mt-4">
                Our Products & Services
            </h2>

            <!-- First row - Services -->
            <div class="relative">
                <div class="flex space-x-5 animate-scroll-left mt-8">
                    <template v-for="(items, index) in [...servicesList, ...servicesList]" :key="`row1-${index}`">
                        <div class="min-w-[220px] p-2" v-for="service in items" :key="service">
                            <div class="rounded-lg p-3 transition-transform hover:scale-105">
                                <div
                                    class="text-center text-xl font-medium text-white flex items-center justify-center whitespace-nowrap">
                                    {{ service }}
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <!-- Second row - Products -->
            <div class="relative mt-3 mb-4">
                <div class="flex space-x-5 animate-scroll-right">
                    <template v-for="(items, index) in [...productsList, ...productsList]" :key="`row2-${index}`">
                        <div class="min-w-[220px] p-2" v-for="product in items" :key="product">
                            <div class="rounded-lg p-3 transition-transform hover:scale-105">
                                <div
                                    class="text-center text-xl font-medium text-white flex items-center justify-center whitespace-nowrap">
                                    {{ product }}
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const servicesList = [
    [
        'Downstream Operations',
        'Manpower Services',
        'Project Management',
        'Contract Management',
        'Oil & Gas Chemicals',
        'Marine Operations',
        'Corrosion Management'
    ]
];

const productsList = [
    [
        'Antiscalants (Scale Inhibitors)',
        'Biocides',
        'Cleaners',
        'Coagulants',
        'Corrosion Inhibitors',
        'Defoamers',
        'Desalters',
        'Descalers',
        'Dewatering Agents',
        'Emulsion Breakers',
        'Filter Aids',
        'Flocculants',
        'Friction Reducers',
        'Gel Breakers',
        'Hydrogen Sulfide Scavengers',
        'Iron Control Agents'
    ]
];
</script>

<style>
@keyframes scroll-left {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@keyframes scroll-right {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0);
    }
}

.animate-scroll-left {
    animation: scroll-left 30s linear infinite;
}

.animate-scroll-right {
    animation: scroll-right 30s linear infinite;
}

.animate-scroll-left:hover,
.animate-scroll-right:hover {
    animation-play-state: paused;
}
</style>