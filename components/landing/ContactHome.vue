<!-- components/ContactSection.vue -->
<template>
  <section class="contact-section relative w-screen -mt-4 sm:-mt-4">
    <!-- White Top Background (1/5) -->
    <div class="absolute top-0 left-0 w-full h-1/5 bg-white"></div>

     <!-- Wavy Background (4/5) -->
    <div class="wave absolute top-1/5 left-0 w-full h-4/5">
      <svg 
  viewBox="0 0 1440 320" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  class="w-full h-[240px]"
>
  <path 
    d="M0,320 L0,180 C240,120 480,100 720,120 C960,140 1200,160 1440,140 L1440,320 L0,320 Z" 
    fill="#f3f4f6"
  />
</svg>
    </div>

    <div class="container mx-auto pt-12">
      <div class="grid grid-cols-12 gap-0 items-stretch">
        <!-- Contact Form Column -->
        <div class="col-span-12 lg:col-span-6 flex items-center mt-16 lg:pl-12">
          <div class="w-full p-8 rounded-lg">
            <h2 class="text-xl font-bold text-center">CONTACT US</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <input type="hidden" name="access_key" :value="formAccessKey">

              <!-- Name Fields -->
              <div class="space-y-4">
                <div>
                  <input 
                    v-model="formData.firstName" 
                    type="text" 
                    name="first_name" 
                    placeholder="First Name *"
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] placeholder-gray-400" 
                  />
                </div>
                <div>
                  <input 
                    v-model="formData.lastName" 
                    type="text" 
                    name="last_name" 
                    placeholder="Last Name *" 
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] placeholder-gray-400" 
                  />
                </div>
              </div>

              <!-- Contact Fields -->
              <div class="space-y-4">
                <div>
                  <input 
                    v-model="formData.email" 
                    type="email" 
                    name="email" 
                    placeholder="Email *" 
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] placeholder-gray-400" 
                  />
                </div>
                <div>
                  <input 
                    v-model="formData.phone" 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone *" 
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] placeholder-gray-400" 
                  />
                </div>
              </div>

              <!-- Message Field -->
              <div>
                <textarea 
                  v-model="formData.message" 
                  name="message" 
                  placeholder="What can we help you with today?"
                  rows="4" 
                  required
                  class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#0E0147] placeholder-gray-400"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-center lg:justify-start">
  <button 
    type="submit"
    class="px-8 py-3 text-white bg-[#0E0147] rounded hover:bg-[#1a0275] transition-colors disabled:opacity-70"
    :disabled="isSubmitting"
  >
    {{ isSubmitting ? 'Submitting...' : 'SUBMIT' }}
  </button>
</div>
              <div
                v-if="statusMessage.show"
                :class="['p-4 rounded', statusMessage.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700']"
              >
                {{ statusMessage.text }}
              </div>
            </form>
          </div>
        </div>

        <!-- Image Column -->
        <div class="col-span-12 lg:col-span-6 relative -ml-56 lg:block -mt-16 -sm:mt-16">
          <div class="relative h-full">
            <img
              src="@/assets/img/contacthome.png"
              alt="Laboratory equipment"
              class="w-full h-full object-cover rounded-lg lg:rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const formAccessKey = ref('0f124479-05cd-4fcf-a66e-67276a365cbb')
const isSubmitting = ref(false)

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
})

const statusMessage = ref({
    show: false,
    error: false,
    text: ''
})

const handleSubmit = async () => {
    if (isSubmitting.value) return

    isSubmitting.value = true
    try {
        const response = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: {
                access_key: formAccessKey.value,
                ...formData.value
            }
        })

        if (response.success) {
            statusMessage.value = {
                show: true,
                error: false,
                text: 'Thank you for contacting us! We\'ll get back to you soon.'
            }
            // Reset form
            formData.value = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            }
        } else {
            throw new Error('Submission failed')
        }
    } catch (error) {
        statusMessage.value = {
            show: true,
            error: true,
            text: 'There was an error submitting the form. Please try again.'
        }
    } finally {
        isSubmitting.value = false
    }
}
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
  margin-left: 10px; 
}


  .col-span-12.-ml-56 {
    margin-left: 0;
  }
}
</style>