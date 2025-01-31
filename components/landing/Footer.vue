<template>
  <!-- Previous template code remains the same, just update the icon component names by removing 'Icon' suffix -->
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        <!-- Grid 1: About Us -->
        <div class="space-y-6">
          <NuxtLink to="/">
            <img class="h-20 w-auto mx-auto md:mx-0" src="assets/img/sefa-logo-final.png"
              alt="Sefa Energy Global Logo" />
          </NuxtLink>
          <div>
            <h3 class="text-lg font-bold mb-2 pb-2 border-b border-[#81DBFF]">
              FIND OUT WHO WE ARE
            </h3>
            <p class="text-gray-300 mb-4">
              Sefa Energy Global specializes in supply, engineering, production chemicals, and environmental management
              of
              energy solutions.
            </p>
            <NuxtLink to="/who-we-are"
              class="inline-flex items-center text-[#81DBFF] hover:text-white transition-colors">
              GET TO KNOW US
              <ArrowRight class="w-4 h-4 ml-2" />
            </NuxtLink>

          </div>
        </div>

        <!-- Grid 2: Our Services -->
        <div class="space-y-6">
          <h3 class="text-lg font-bold mb-2 pb-2 border-b border-[#81DBFF]">
            OUR SERVICES
          </h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.name">
              <NuxtLink :to="service.href" class="text-gray-300 hover:text-[#81DBFF] transition-colors">
                {{ service.name }}
              </NuxtLink>
            </li>
          </ul>
          <!-- Social Media Links -->
          <div class="flex space-x-4 pt-4 justify-center md:justify-start">
            <a href="#" class="text-[#81DBFF] hover:text-white transition-colors">
              <Facebook class="w-6 h-6" stroke-width="1" />
            </a>
            <a href="#" class="text-[#81DBFF] hover:text-white transition-colors">
              <Linkedin class="w-6 h-6" stroke-width="1" />
            </a>
          </div>

        </div>

        <!-- Grid 3: Product Solutions -->
        <div class="space-y-6">
          <h3 class="text-lg font-bold mb-2 pb-2 border-b border-[#81DBFF]">
            <NuxtLink to="/our-products-and-applications" class="hover:text-[#81DBFF] transition-colors">
              PRODUCTS & APPLICATIONS
            </NuxtLink>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul class="space-y-2 text-gray-300 text-sm">
              <li v-for="(product, index) in products.slice(0, Math.ceil(products.length / 2))" :key="index">
                {{ product }}
              </li>
            </ul>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li v-for="(product, index) in products.slice(Math.ceil(products.length / 2))" :key="index">
                {{ product }}
              </li>
            </ul>
          </div>

        </div>

        <!-- Grid 4: Support -->
        <div class="space-y-6">
          <h3 class="text-lg font-bold mb-2 pb-2 border-b border-[#81DBFF]">
            SUPPORT
          </h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <MapPin class="w-6 h-6 text-[#81DBFF] flex-shrink-0 mt-1" stroke-width="1" />
              <p class="text-gray-300">11 Oromineke Layout, <br>Off Wogu Street, D-Line, <br>Port Harcourt,
                Nigeria</br></br></p>
            </div>
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <Phone class="w-6 h-6 text-[#81DBFF] flex-shrink-0 mt-1" stroke-width="1" />
              <div class="text-gray-300">
                <p>(+234) 814 857 1524</p>
                <p>(+234) 901 065 4197</p>

              </div>
            </div>
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <Mail class="w-6 h-6 text-[#81DBFF] flex-shrink-0 mt-1" stroke-width="1" />
              <div class="text-gray-300">
                <p>info@sefaenergy.com</p>
                <p>support@sefaenergy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="bg-gray-800 py-4">
      <div
        class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center md:text-left">
        <p>© {{ currentYear }} Sefa Energy Global LTD. ALL RIGHTS RESERVED. Sefa Energy Global IS A REGISTERED
          SUBSIDIARY OF SEFA OIL
          AND GAS LTD.</p>
        <a href="https://tekfol.io" target="_blank" rel="noopener noreferrer"
          class="hover:text-[#81DBFF] transition-colors mt-2 md:mt-0">
          Web Design by Tekfolio Ltd
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  ArrowRight,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-vue-next';
import { computed } from 'vue';

// Dynamic year computation
const currentYear = computed(() => new Date().getFullYear())

// Services data
const services = [
  { name: 'Downstream Operations', href: '/downstream-operations' },
  { name: 'Manpower Services', href: '/manpower-services' },
  { name: 'Project Management', href: '/project-management' },
  { name: 'Contract Management (Commercials)', href: '/contract-management' },
  { name: 'Oil & Gas Chemical Processing', href: '/oil-and-gas-chemical-processing' },
  { name: 'Marine Operations', href: '/marine-operations' },
  { name: 'Corrosion Management', href: '/corrosion-management' },
]

// Products data
const products = [
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
</script>