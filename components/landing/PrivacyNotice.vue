<template>
    <div class="fixed bottom-4 left-4 z-50">
        <!-- Cookie Icon Button -->
        <button @click="toggleDrawer"
            class="bg-[#019BDB] p-3 rounded-full shadow-lg hover:bg-[#019BDB]/90 flex items-center justify-center">
            <Icon name="lucide:cookie" class="w-8 h-8 text-white transform rotate-90" />
        </button>

        <!-- Consent Dialog -->
        <Transition name="slide">
            <div v-if="isOpen"
                class="fixed top-1/2 sm:left-1/2 left-4 transform sm:-translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl w-[900px] max-h-[90vh] mx-auto max-w-[calc(100vw-2rem)] p-6">
                <button @click="toggleDrawer" class="absolute -top-1 right-4 rounded-full p-2">
                    <Icon name="lucide:x" class="w-5 h-5 text-gray-600" />
                </button>
                <div class="flex flex-col h-full">
                    <!-- Rest of the content remains the same -->
                    <div class="overflow-y-auto pr-4 custom-scrollbar flex-grow">
                        <!-- Initial Content -->
                        <div class="space-y-4">
                            <h2 class="text-xl font-semibold">Customize Consent Preferences</h2>

                            <div class="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                                <p>
                                    We use cookies to help you navigate efficiently and perform certain functions. You
                                    will find detailed information about all cookies under each consent category below.
                                </p>
                                <p class="mt-2">
                                    The cookies that are categorized as "Necessary" are stored on your browser as they
                                    are essential for enabling the basic functionalities of the site.
                                    <button v-if="!showDetails" @click="toggleDetails"
                                        class="text-[#019BDB] ml-2 hover:underline">
                                        Show more
                                    </button>
                                </p>
                            </div>

                            <div v-if="showDetails" class="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                                <p class="mb-2">We also use third-party cookies that help us analyze how you use this
                                    website, store your preferences, and provide the content and advertisements that are
                                    relevant to you. These cookies will only be stored in your browser with your prior
                                    consent.</p>
                                <p>
                                    You can choose to enable or disable some or all of these cookies but disabling some
                                    of them may affect your browsing experience.
                                    <button @click="toggleDetails" class="text-[#019BDB] ml-2 hover:underline">
                                        Show less
                                    </button>
                                </p>
                            </div>

                            <!-- Cookie Categories -->
                            <div class="grid grid-cols-1 gap-4">
                                <!-- Necessary -->
                                <div class="border rounded-lg p-3 bg-gray-50">
                                    <div class="flex justify-between items-center mb-2">
                                        <h3 class="font-semibold">Necessary</h3>
                                        <span class="text-sm text-gray-500">Always Active</span>
                                    </div>
                                    <p class="text-sm text-gray-600">
                                        Necessary cookies are required to enable the basic features of this site, such
                                        as providing secure log-in or adjusting your consent preferences. These cookies
                                        do not store any personally identifiable data.
                                    </p>
                                </div>

                                <!-- Other Categories -->
                                <div v-for="(category, key) in cookieCategories" :key="key"
                                    class="border rounded-lg p-3 bg-gray-50">
                                    <div class="flex justify-between items-center mb-2">
                                        <h3 class="font-semibold">{{ key }}</h3>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" class="sr-only peer"
                                                v-model="preferences[key.toLowerCase()]">
                                            <div
                                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#019BDB]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#019BDB]">
                                            </div>
                                        </label>
                                    </div>
                                    <p class="text-sm text-gray-600">{{ category }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-0 border-t">
                        <button @click="rejectAll"
                            class="w-full px-4 py-2 border border-[#019BDB] rounded-lg text-gray-700 hover:bg-gray-50">
                            Reject All
                        </button>
                        <button @click="savePreferences"
                            class="w-full px-4 py-2 border border-[#019BDB] rounded-lg text-gray-700 hover:bg-gray-50">
                            Save Preferences
                        </button>
                        <button @click="acceptAll"
                            class="w-full px-4 py-2 bg-[#019BDB] text-white rounded-lg hover:bg-[#019BDB]/90">
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
// Script remains exactly the same as before
const isOpen = ref(false)
const showDetails = ref(false)
const preferences = ref({
    functional: false,
    analytics: false,
    performance: false,
    advertisement: false
})

const cookieCategories = {
    Functional: "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
    Analytics: "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    Performance: "Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
    Advertisement: "Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns."
}

const toggleDrawer = () => {
    isOpen.value = !isOpen.value
}

const toggleDetails = () => {
    showDetails.value = !showDetails.value
}

const acceptAll = () => {
    Object.keys(preferences.value).forEach(key => {
        preferences.value[key] = true
    })
    isOpen.value = false
}

const rejectAll = () => {
    Object.keys(preferences.value).forEach(key => {
        preferences.value[key] = false
    })
    isOpen.value = false
}

const savePreferences = () => {
    isOpen.value = false
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translate(0, 60%);
    opacity: 0;
}

@media (min-width: 640px) {

    .slide-enter-from,
    .slide-leave-to {
        transform: translate(-50%, 60%);
    }
}

.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #019BDB #f1f1f1;
    overflow-y: auto;
    max-height: calc(90vh - 200px);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #019BDB;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(1, 155, 219, 0.8);
}
</style>