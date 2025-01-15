<template>
    <div
        class="relative bg-gradient-to-r from-[#02194F] to-[#01133A] w-screen py-20 sm:py-24 mt-12 sm:mt-28 translate-x-[-5%] sm:translate-x-[-2.8%]">
        <div class="container mx-auto px-4 sm:px-8">
            <h2
                class="text-left text-white text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight lg:tracking-tight -mt-16">
                Our Products
            </h2>

            <!-- First row - Left to Right -->
            <div class="relative">
                <div class="flex space-x-6 animate-scroll-left mt-16">
                    <template v-for="(products, index) in [...productsList, ...productsList]" :key="`row1-${index}`">
                        <div class="min-w-[250px] p-4" v-for="product in products.slice(0, 5)" :key="product">
                            <div
                                class="bg-gradient-to-br from-[#81DBFF] to-[#81DBFF] rounded-lg shadow-sm p-6 transition-transform hover:scale-105">
                                <div
                                    class="text-center text-lg font-medium text-white-900 flex items-center justify-center min-h-[24px]">
                                    {{ product }}</div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <!-- Second row - Right to Left -->
            <div class="relative mt-8">
                <div class="flex space-x-6 animate-scroll-right">
                    <template v-for="(products, index) in [...productsList, ...productsList]" :key="`row2-${index}`">
                        <div class="min-w-[250px] p-4" v-for="product in products.slice(5, 10)" :key="product">
                            <div
                                class="bg-gradient-to-br from-[#81DBFF] to-[#81DBFF] rounded-lg shadow-sm p-6 transition-transform hover:scale-105">
                                <div
                                    class="text-center text-lg font-medium text-white-900 flex items-center justify-center min-h-[24px]">
                                    {{ product }}</div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <!-- Third row - Left to Right -->
            <div class="relative mt-8">
                <div class="flex space-x-6 animate-scroll-left">
                    <template v-for="(products, index) in [...productsList, ...productsList]" :key="`row3-${index}`">
                        <div class="min-w-[250px] p-4" v-for="product in products.slice(10)" :key="product">
                            <div
                                class="bg-gradient-to-br from-[#81DBFF] to-[#81DBFF] rounded-lg shadow-sm p-6 transition-transform hover:scale-105">
                                <div
                                    class="text-center text-lg font-medium text-white-900 flex items-center justify-center min-h-[24px]">
                                    {{ product }}</div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const productsList = [
    [
        'Antiscalants',
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
        'H₂S Scavengers',
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

/* Pause animation on hover */
.animate-scroll-left:hover,
.animate-scroll-right:hover {
    animation-play-state: paused;
}
</style>
