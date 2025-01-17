<template>
    <section
        class="relative bg-gradient-to-r from-[#02194F] to-[#01133A] w-screen py-16 sm:py-20 -mt-13 sm:-mt-4 translate-x-[-5%] sm:translate-x-[-2.8%]">
        <div class="container mx-auto px-4 sm:px-8">
            <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <p
                    class="text-white text-base sm:text-lg md:text-2xl leading-relaxed font-light text-left md:max-w-3xl">
                    Oil and gas keep our world moving. That's why at Sefa Energy, we work hard to provide the best
                    solutions,
                    from supplying quality products to managing complex projects. Our skilled teams and proven methods
                    help companies work safely and protect their equipment.
                </p>

                <NuxtLink to="/our-products-and-applications"
                    class="group bg-[#81DBFF] hover:bg-[#6ac5e8] text-black px-8 py-3 rounded-none transition-all duration-300 inline-flex items-center space-x-2 min-w-[200px] justify-center">
                    <span class="font-medium text-sm">Our Products</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
