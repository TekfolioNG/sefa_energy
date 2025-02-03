<template>
  <div class="max-w-screen-xl mx-auto px-5 -mb-48">
    <!-- Hero image -->
    <img src="assets/img/sefa_header_image2.jpg" alt="Sefa Logo"
      class="absolute inset-0 -z-10 w-full h-full object-cover"
      :style="{ objectPosition: 'var(--img-position, center)' }" />
    <div class="container mx-auto px-4">

      <!-- Gradient effects -->
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>

      <!-- Content -->
      <div class="w-full pt-48 pb-5">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 pl-0 md:pl-0">
            <div class="space-y-1">

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --img-position: 85% center;
}

@media (min-width: 640px) {
  :root {
    --img-position: 85% center;
  }
}

@media (min-width: 768px) {
  :root {
    --img-position: center;
  }
}
</style>