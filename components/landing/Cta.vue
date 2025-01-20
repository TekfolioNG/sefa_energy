<template>
  <div class="px-4 sm:px-20 py-12 sm:py-20 mt-4 sm:mt-5 mx-auto max-w-6xl rounded-lg mb-4">
    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <!-- Image -->
      <div class="w-full md:w-1/2">
        <img src="~/assets/img/sefa_cta.jpg" alt="Sefa CTA" class="rounded-lg w-full">
      </div>

      <!-- Content -->
      <div class="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
        <h2 class="text-[#D10101] text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight lg:tracking-tight">
          Fuel Your Performance
        </h2>
        <p class="text-dark-600 mt-4 text-lg md:text-xl">
          Discover how our premium energy solutions and industry expertise can transform your operations.
        </p>
        <div class="mt-6 flex justify-center md:justify-end w-full">
          <LandingLink href="/contact-us" styleName="gradient">Contact Us</LandingLink>
        </div>
      </div>
    </div>
  </div>
</template>