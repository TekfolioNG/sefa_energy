<template>
    <LandingContainer>
        <!-- Hero Section with Background Image -->
        <div
            class="relative w-screen min-h-[90vh] px-16 py-16 sm:py-20 mt-0 sm:mt-0 translate-x-[-5%] sm:translate-x-[-2.8%]">
            <!-- Background Image Container -->
            <div class="absolute inset-0 w-full h-full">
                <img src="@/assets/img/sefa_sustainability.jpg" alt="Industrial facility at night"
                    class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/35"></div>

            </div>


            <!-- Hero Content -->
            <div class="relative h-full flex flex-col justify-center px-1 sm:px-2 lg:px-2 mt-80 sm:mt-40">
                <div class="max-w-7xl mx-auto w-full mt-16">
                    <h2 class="text-pretty text-4xl font-light tracking-tight text-white sm:text-6xl mb-2">
                        Powering a greener future
                    </h2>
                    <p class="mt-0 text-pretty text-base font-medium text-white sm:text-lg/8">
                        Sefa is committed to industry-leading sustainability practices with full GHG and ESG compliance.
                    </p>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <!-- First Sustainability Section -->
            <div class="flex flex-col md:flex-row items-start gap-12 md:gap-24 mb-20">
                <div class="w-full md:w-1/3 flex justify-center items-start">
                    <img src="@/assets/icons/sustainability_page.svg" alt="Sustainability Icon"
                        class="w-120 h-120 object-contain" />
                </div>
                <div class="w-full md:w-2/3 max-w-3xl">
                    <h3 class="text-pretty text-4xl font-light tracking-tight text-green-1600 mb-4">
                        Our Commitment to Sustainability
                    </h3>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        At Sefa Energy, we believe in making energy work for a better future. We focus on responsible
                        energy practices that help meet the world's needs while protecting the environment. Our goal is
                        to create a greener, cleaner world through every decision we make.
                    </p>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        We follow strict guidelines to reduce our environmental impact, ensuring we provide energy
                        solutions that are good for the planet and the communities where we work. Sustainability is at
                        the heart of what we do every day.
                    </p>
                </div>
            </div>

            <!-- Second Sustainability Section (Reversed) -->
            <div class="flex flex-col md:flex-row-reverse items-start gap-12 md:gap-24 mb-20">
                <div class="w-full md:w-1/3 flex flex-col justify-center items-center gap-8">
                    <img src="@/assets/img/csr_sefa.jpeg" alt="CSR at Sefa" class="w-120 h-120 object-contain" />
                </div>
                <div class="w-full md:w-2/3 max-w-3xl">
                    <h4 class="text-pretty text-4xl font-light tracking-tight text-green-1600 mb-4">
                        Helping Communities Through CSR Initiatives
                    </h4>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        We know that energy can change lives for the better. That's why we support local communities
                        through various initiatives aimed at improving lives and creating long-lasting impact.
                    </p>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        Our projects include building schools, providing healthcare services, and creating job
                        opportunities. We also offer training programs that help people develop skills for the future.
                        We believe in working closely with the people in the communities where we operate to make sure
                        our efforts meet their real needs.
                    </p>
                </div>
            </div>

            <!-- Third Section with Side Image -->
            <div class="flex flex-col md:flex-row items-start gap-12 md:gap-24 mb-20">
                <div class="w-full md:w-1/3 flex justify-center items-start">
                    <img src="@/assets/img/esg_sefa.png" alt="ESG at Sefa" class="w-120 h-120 object-contain" />
                </div>
                <div class="w-full md:w-2/3 max-w-3xl">
                    <h3 class="text-pretty text-4xl font-light tracking-tight text-green-1600 mb-4">
                        Supporting Nigeria's Energy Transition Goals
                    </h3>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        We believe in fair working conditions, safety, and human rights for everyone we work with. Our
                        aim is to contribute positively to society and make a difference in the areas we serve.
                    </p>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        Sefa Energy is also fully committed to <a href="https://www.energytransition.gov.ng/"
                            class="font-bold underline text-blue-600 hover:text-blue-800">Nigeria's Energy Transition
                            Plan (ETP)</a>, which aims to reduce the country's dependence on fossil fuels and reach
                        net-zero emissions by 2060. This plan is a big step toward a cleaner, more sustainable energy
                        future.
                    </p>
                    <p
                        class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-4">
                        We are already playing our part by focusing on clean energy solutions, such as LPG, and helping
                        to reduce harmful emissions. The ETP sets goals to reduce Nigeria's greenhouse gas emissions by
                        45% by 2030 and up to 90% by 2050.
                    </p>
                </div>
            </div>

            <!-- Full Width Text Section -->
            <div class="w-full max-w-none mb-12 -mt-12">
                <p class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-6">
                    As part of this transition, the ETP is expected to create millions of new jobs in sectors like
                    renewable energy and electric mobility. At Sefa Energy, we are committed to supporting this
                    growth by investing in new skills and technology that will help make these goals a reality.
                </p>
                <p class="text-pretty text-4xl font-light tracking-tight text-black-900 text-lg leading-relaxed mb-12">
                    Though challenges remain, such as funding and infrastructure needs, we are dedicated to working
                    with others to overcome them and contribute to a cleaner, more sustainable future for Nigeria.
                </p>
            </div>

            <!-- Full Width Image Section -->
            <div class="w-full">
                <img src="@/assets/img/sefa_green.jpg" alt="Carbon Neutral"
                    class="w-full h-auto object-cover rounded-lg" />
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