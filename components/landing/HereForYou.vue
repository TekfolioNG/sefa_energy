<template>
    <div class="w-screen bg-[#fbf9f9] overflow-hidden mt-16"> <!-- Lighter background + top margin -->
        <div class="w-full px-0 py-12 md:py-16 -ml-4"> <!-- Added negative margin to fix left space -->
            <div class="grid md:grid-cols-3 gap-8 items-center relative">
                <!-- Left Column (Heading) -->
                <div class="space-y-4 px-4 sm:px-8">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#E53E3E] text-center mt-12 sm:mt-0">
                        Energy Solutions You Can Trust
                    </h2>
                </div>

                <!-- Vertical Divider -->
                <div class="hidden md:block absolute h-full w-px bg-[#E53E3E] left-1/3 transform -translate-x-1/2">
                </div>

                <!-- Right Column (Spans 2 Columns) -->
                <div class="md:col-span-2 space-y-6 px-4 sm:px-8 mt-2">
                    <div class="prose prose-lg">
                        <p class="text-[#0E0147] text-[1.05rem]">
                            At Sefa Energy Global, our team of seasoned industry professionals shares one clear goal:
                            delivering
                            innovative solutions with honesty, transparency, and unmatched customer care. We pride
                            ourselves on
                            building
                            genuine partnerships with our clients and suppliers, ensuring every interaction is rooted in
                            trust.
                        </p>
                        <p class="text-[#0E0147] text-base">
                            Whether you're facing challenges or exploring opportunities, our sales and engineering
                            experts are here to
                            guide you toward the perfect solution.
                            Got questions or need expert advice? Let's talk.
                        </p>
                    </div>

                    <!-- Button at the Bottom -->
                    <div class="pt-2">
                        <a href="/contact-us">
                            <button
                                class="bg-[#E53E3E] hover:bg-[#E53E3E]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 sm:ml-0 ml-auto mr-auto mb-4 sm:mb-0 block sm:inline-block">
                                Connect With Us
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>