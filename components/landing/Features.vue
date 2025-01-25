<template>
  <div class="relative w-full py-8 sm:py-12 lg:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative z-10 text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight blue-filter">
          Our Solutions
        </h2>
        <p class="text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 text-slate-600 max-w-3xl mx-auto blue-filter">
          We provide expert services across the oil and gas industry, combining local knowledge with international best
          practices to deliver reliable results
        </p>
      </div>
    </div>
  </div>

  <div class="px-4 sm:px-6 lg:px-8 w-full flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl">
      <div v-for="item of features" :key="item.title" class="flex flex-col items-center blue-filter">
        <a :href="item.href" class="group text-center w-full">
          <div class="mb-4 sm:mb-6 flex justify-center">
            <img :src="item.icon" :alt="item.title"
              class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 transition-transform duration-300 group-hover:scale-110 blue-filter">
          </div>
          <div class="text-center">
            <h3 class="font-semibold text-base sm:text-lg">{{ item.title }}</h3>
            <p class="text-sm sm:text-base text-slate-700 mt-2 leading-relaxed mx-auto max-w-sm">
              {{ item.description }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import all icons directly
import careerIcon from '@/assets/icons/Career.svg';
import contractIcon from '@/assets/icons/contract-management.svg';
import corrosionIcon from '@/assets/icons/corrosion-mgt.svg';
import downstreamIcon from '@/assets/icons/downstream6.svg';
import manpowerIcon from '@/assets/icons/manpower-services.svg';
import marineIcon from '@/assets/icons/marine-operations.svg';
import chemicalProcessingIcon from '@/assets/icons/oil-gas-chemical-processing.svg';
import projectMgtIcon from '@/assets/icons/project-mgt.svg';
import sustainabilityIcon from '@/assets/icons/sustainability3.svg';

const features = [
  {
    title: "Downstream Operations",
    description: "Managing the supply, trading, and distribution of oil and gas products to ensure efficient delivery to end-users.",
    icon: downstreamIcon,
    href: "/downstream-operations"
  },
  {
    title: "Oil & Gas Chemical Processing",
    description: "Advanced chemical treatment solutions like descalers and corrosion inhibitors that enhance production quality while protecting valuable industrial equipment.",
    icon: chemicalProcessingIcon,
    href: "/oil-and-gas-chemical-processing"
  },
  {
    title: "Manpower Services",
    description: "Providing a network of skilled personnel, including abseilers, riggers, scaffolders, fitters ansd other technicians and specialists to support energy sector operations.",
    icon: manpowerIcon,
    href: "/manpower-services"
  },
  {
    title: "Marine Operations",
    description: "Supporting offshore activities through expert vessel management, crew provision, and comprehensive marine logistics services.",
    icon: marineIcon,
    href: "/marine-operations"
  },
  {
    title: "Project Management",
    description: "Planning and executing oil and gas projects with precision, ensuring timely completion within budget constraints.",
    icon: projectMgtIcon,
    href: "/project-management"
  },
  {
    title: "Corrosion Management",
    description: "We protect valuable equipment and pipelines from corrosion damage through monitoring and preventive treatments.",
    icon: corrosionIcon,
    href: "/corrosion-management"
  },
  {
    title: "Contract Management (Commercials)",
    description: "Strategic contract services that build lasting business partnerships while ensuring clear terms and fair agreements.",
    icon: contractIcon,
    href: "/contract-management"
  },
  {
    title: "Sefa Sustainability",
    description: "Dedicated environmental solutions helping energy companies achieve greener operations and meet sustainability goals.",
    icon: sustainabilityIcon,
    href: "/sustainability"
  },
  {
    title: "Sefa Career",
    description: "Growing career opportunities in energy, with hands-on experience and continuous professional development programs.",
    icon: careerIcon,
    href: "/careers"
  }
];
</script>

<style>
.blue-filter {
  filter: invert(10%) sepia(88%) saturate(5000%) hue-rotate(250deg) brightness(50%) contrast(120%);
}
</style>