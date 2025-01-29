<template>
  <header class="fixed w-full transition-transform duration-300 bg-black bg-opacity-55 z-50"
    :class="[isNavbarVisible ? 'translate-y-0' : '-translate-y-full']">
    <div class="relative w-screen translate-x-[-5%] sm:translate-x-[-2.8%]">
      <nav class="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex flex-shrink-0 lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Sefa Energy Global</span>
            <img class="h-20 w-auto ml-4" src="assets/img/sefa_energy_logo_transparent.png" alt="Sefa Energy Global Logo" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <a href="/who-we-are" class="text-sm/6 font-semibold text-white hover:text-[#81DBFF]">Who we are</a>

          <Popover class="relative">
            <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:text-[#81DBFF]">
              What we do
              <ChevronDownIcon class="size-5 flex-none text-white" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute left-1/2 top-full z-10 mt-3 w-screen max-w-4xl -translate-x-1/2 overflow-hidden rounded-3xl bg-black bg-opacity-55 shadow-lg ring-1 ring-white/5">
                <div class="p-4">
                  <div class="grid grid-cols-2 gap-4">
                    <!-- Left Column -->
                    <div class="space-y-2">
                      <div v-for="item in services.slice(0, 4)" :key="item.name"
                        class="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm/6 hover:bg-white/10 transition-colors">
                        <div
                          class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20">
                          <component :is="item.icon" class="size-6 text-white" aria-hidden="true" />
                        </div>
                        <div class="flex-1">
                          <a :href="item.href" class="block font-semibold text-white">
                            {{ item.name }}
                            <p class="mt-1 font-normal text-sm text-gray-200">{{ item.description }}</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <!-- Right Column -->
                    <div class="space-y-2">
                      <div v-for="item in services.slice(4)" :key="item.name"
                        class="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm/6 hover:bg-white/10 transition-colors">
                        <div
                          class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20">
                          <component :is="item.icon" class="size-6 text-white" aria-hidden="true" />
                        </div>
                        <div class="flex-1">
                          <a :href="item.href" class="block font-semibold text-white">
                            {{ item.name }}
                            <p class="mt-1 font-normal text-sm text-gray-200">{{ item.description }}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a href="/our-products-and-applications" class="text-sm/6 font-semibold text-white hover:text-[#81DBFF]">Our
            products</a>
          <a href="/sustainability" class="text-sm/6 font-semibold text-white hover:text-[#81DBFF]">Sustainability</a>
          <a href="/newsroom" class="text-sm/6 font-semibold text-white hover:text-[#81DBFF]">Newsroom</a>
          <a href="/careers" class="text-sm/6 font-semibold text-white hover:text-[#81DBFF]">Careers</a>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact-us"
            class="text-sm/6 font-semibold text-white border border-[#81DBFF] px-4 py-2 rounded-md hover:text-[#81DBFF]">CONTACT</a>
        </div>
      </nav>

      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 top-32">
          <div class="flex items-left justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Sefa Energy Global</span>

            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>

          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="/who-we-are"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-white hover:bg-gray-50">
                  Who we are
                </a>

                <div class="-mx-3">
                  <button @click="servicesOpen = !servicesOpen"
                    class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-white hover:bg-gray-50">
                    <span>What we do</span>
                    <ChevronDownIcon class="size-5 flex-none text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': servicesOpen }" aria-hidden="true" />
                  </button>

                  <div v-show="servicesOpen" class="mt-1 bg-gray-50">
                    <a v-for="item in services" :key="item.name" :href="item.href"
                      class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100">
                      <component :is="item.icon" class="size-5 text-gray-600" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                </div>

                <a href="/our-products-and-applications"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-white hover:bg-gray-50">
                  Our products
                </a>
                <a href="/sustainability"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-white hover:bg-gray-50">
                  Sustainability
                </a>
                <a href="/newsroom"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-white hover:bg-gray-50">
                  Newsroom
                </a>
                <a href="/careers"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-white hover:bg-gray-50">
                  Careers
                </a>
              </div>
              <div class="py-6 flex justify-start">
                <a href="/contact-us"
                  class="inline-block rounded-md px-6 py-2.5 text-base font-semibold leading-7 text-white bg-[#0E0147] hover:bg-[#81DBFF] hover:text-black">
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>

  </header>
</template>

<script setup>
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {
    Bars3Icon,
    BeakerIcon,
    BuildingOffice2Icon,
    CogIcon,
    PaintBrushIcon,
    TruckIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { onMounted, onUnmounted, ref } from 'vue'

const services = [
  {
    name: 'Downstream Operations',
    description: 'Supply, trading, and distribution of oil and gas products.',
    href: '/downstream-operations',
    icon: CogIcon
  },
  {
    name: 'Manpower Services',
    description: 'Providing skilled personnel, including Abseilers, Riggers, Scaffolders, and Fitters.',
    href: '/manpower-services',
    icon: UserGroupIcon
  },
  {
    name: 'Project Management',
    description: 'Comprehensive project oversight and execution, ensuring on-time, on-budget delivery.',
    href: '/project-management',
    icon: BuildingOffice2Icon
  },
  {
    name: 'Contract Management (Commercials)',
    description: 'Full lifecycle management of contract execution for clients in the oil and gas sector.',
    href: '/contract-management', 
    icon: WrenchScrewdriverIcon
  },
  {
    name: 'Oil & Gas Chemical Processing',
    description: 'Specialized chemical solutions, including Descalers, Corrosion Inhibitors, and more.',
    href: '/oil-and-gas-chemical-processing',
    icon: BeakerIcon
  },
  {
    name: 'Marine Operations',
    description: 'Expert handling of hoses, vessel operations, cargo operations/handling, and tank/vessel cleaning.',
    href: '/marine-operations',
    icon: TruckIcon
  },
  {
    name: 'Corrosion Management',
    description: 'Fabric renewal, inspection, and maintenance services to prevent and manage corrosion-related issues.',
    href: '/corrosion-management',
    icon: PaintBrushIcon
  }
]

// Navbar visibility state and scroll handling
const lastScrollY = ref(0)
const isNavbarVisible = ref(true)
const mobileMenuOpen = ref(false)
const servicesOpen = ref(false)

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Show navbar when scrolling up or at the top
  if (currentScrollY < lastScrollY.value || currentScrollY < 50) {
    isNavbarVisible.value = true
  }
  // Hide navbar when scrolling down and not at the top
  else if (currentScrollY > 50) {
    isNavbarVisible.value = false
  }

  lastScrollY.value = currentScrollY
}

// Add scroll event listener when component mounts
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

// Clean up scroll event listener when component unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Add some padding to the top of your main content to account for the fixed navbar */
main {
  padding-top: 88px;

}

.navbar {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  /* Prevent horizontal scrolling */
  display: flex;
  /* or grid, depending on your design */
  justify-content: space-between;
  /* Adjust alignment */
}


</style>