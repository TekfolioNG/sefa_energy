<template>
    <section class="contact-section relative w-screen -mt-4 sm:-mt-4">
        <!-- White Top Background (1/5) -->
        <div class="absolute top-0 left-0 w-full h-1/5 bg-white"></div>

        <!-- Wavy Background (4/5) -->
        <div class="wave absolute top-1/5 left-0 w-full h-4/5">
            <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                class="w-full h-[160px]">
                <path d="M0,320 L0,180 C240,120 480,100 720,120 C960,140 1200,160 1440,140 L1440,320 L0,320 Z"
                    fill="#f3f4f6" />
            </svg>
        </div>

        <div class="container mx-auto pt-12">
            <div class="grid grid-cols-12 gap-0 items-stretch">
                <!-- Image Column -->
                <div class="col-span-12 lg:col-span-6 relative lg:order-1 -mt-16">
                    <div class="relative h-full">
                        <img src="@/assets/img/home-image-sefa.png" alt="Laboratory equipment"
                            class="w-full h-auto object-cover rounded-lg lg:rounded-none" />
                    </div>
                </div>

                <!-- Value Statement Column -->
                <div class="col-span-12 lg:col-span-6 flex items-center mt-16 lg:pr-12 lg:order-2">
                    <div class="w-full p-8 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-lg">
                        <h2 class="text-3xl font-bold mb-6 text-[#0E0147] leading-tight">
                            Safety and Sustainability at Our Core
                        </h2>

                        <div class="space-y-6 text-gray-700">
                            <p class="text-lg font-semibold border-l-4 border-[#0E0147] pl-4">
                                At Sefa Energy Global, safety and sustainability drive every decision we make.
                            </p>

                            <div class="space-y-4">
                                <div class="flex items-start space-x-3">
                                    <div
                                        class="w-8 h-8 rounded-full bg-[#0E0147] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span class="text-white font-bold">1</span>
                                    </div>
                                    <p class="flex-1">
                                        We uphold strict safety protocols and environmental practices that surpass
                                        industry standards.
                                    </p>
                                </div>

                                <div class="flex items-start space-x-3">
                                    <div
                                        class="w-8 h-8 rounded-full bg-[#0E0147] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span class="text-white font-bold">2</span>
                                    </div>
                                    <p class="flex-1">
                                        Our partnerships are rooted in responsible operations and sustainable values.
                                    </p>
                                </div>

                                <div class="flex items-start space-x-3">
                                    <div
                                        class="w-8 h-8 rounded-full bg-[#0E0147] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span class="text-white font-bold">3</span>
                                    </div>
                                    <p class="flex-1">
                                        We invest in innovative solutions to reduce environmental impact while enhancing
                                        efficiency.
                                    </p>
                                </div>
                            </div>

                            <div class="mt-8 p-4 bg-[#0E0147] bg-opacity-10 rounded-lg">
                                <p class="text-[#0E0147] font-semibold">
                                    "Our true success lies in safeguarding people and the planet."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.contact-section {
    background: #f3f4f6;
    position: relative;
    overflow: hidden;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
}

.wave {
    z-index: 1;
}

.container {
    position: relative;
    z-index: 2;
}

@media (max-width: 1024px) {
    .contact-section {
        padding-top: 1rem;
    }

    .grid {
        flex-direction: column-reverse;
    }

    .col-span-12 {
        width: 100%;
    }

    .col-span-12 img {
        width: 100%;
        margin: 0 auto;
        display: block;
    }

    .col-span-12.-mt-16 {
        margin-top: 0;
    }
}
</style>