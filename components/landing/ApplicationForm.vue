<template>
    <form @submit.prevent="handleSubmit" class="space-y-6 bg-gray-200 p-6 rounded-lg shadow-sm"
        enctype="multipart/form-data">
        <input type="hidden" name="access_key" :value="accessKey">
        <input type="hidden" name="subject" value="New Job Application - Sefa Energy Global">
        <input type="hidden" name="from_name" value="Sefa Energy Global Careers">

        <!-- Name Field -->
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" v-model="formData.name" :class="{ 'border-red-500': errors.name }"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0E0147] focus:ring-[#0E0147]"
                placeholder="Full name" required>
            <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
        </div>

        <!-- Email Field -->
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" v-model="formData.email" :class="{ 'border-red-500': errors.email }"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0E0147] focus:ring-[#0E0147]"
                placeholder="Email address" required>
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
        </div>

        <!-- Phone Field -->
        <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" v-model="formData.phone" :class="{ 'border-red-500': errors.phone }"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0E0147] focus:ring-[#0E0147]"
                placeholder="Phone number" required>
            <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
        </div>

        <!-- Position Field (Dropdown) -->
        <div>
            <label for="position" class="block text-sm font-medium text-gray-700">Position of Interest</label>
            <select id="position" v-model="formData.position" :class="{ 'border-red-500': errors.position }"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0E0147] focus:ring-[#0E0147]"
                required>
                <option value="" disabled selected>Select a position</option>
                <option v-for="position in positions" :key="position" :value="position">
                    {{ position }}
                </option>
            </select>
            <p v-if="errors.position" class="mt-1 text-sm text-red-600">{{ errors.position }}</p>
        </div>

        <!-- Resume Upload Field -->
        <div>
            <label for="resume" class="block text-sm font-medium text-gray-700">CV/Resume</label>
            <input type="file" id="resume" @change="handleFileUpload" :class="{ 'border-red-500': errors.resume }"
                class="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#0E0147] file:text-white
                    hover:file:bg-[#1a0275]" accept=".pdf,.doc,.docx" required>
            <p class="mt-1 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            <p v-if="errors.resume" class="mt-1 text-sm text-red-600">{{ errors.resume }}</p>
        </div>

        <!-- Message Field -->
        <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Cover Letter</label>
            <textarea id="message" v-model="formData.message" :class="{ 'border-red-500': errors.message }"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0E0147] focus:ring-[#0E0147]"
                rows="4" placeholder="Tell us about yourself and why you'd like to join our team" required></textarea>
            <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
        </div>

        <input type="hidden" name="redirect" value="https://web3forms.com/success">

        <button type="submit" :disabled="isSubmitting"
            class="w-full bg-[#0E0147] text-white px-4 py-2 rounded-md hover:bg-[#1a0275] focus:outline-none focus:ring-2 focus:ring-[#0E0147] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
            <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
                Submitting...
            </span>
            <span v-else>Submit Application</span>
        </button>

        <!-- Success/Error Alert -->
        <div v-if="submitStatus" :class="[
            'mt-4 p-4 rounded-md',
            submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        ]">
            {{ submitStatus.message }}
        </div>
    </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const accessKey = '1161923c-b056-4001-9cee-e5c64d1d9c15'

const positions = [
    'Marketing Manager',
    'Receptionist',
    'Business Developer',    
]

const formData = reactive({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null as File | null
})

const errors = reactive({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
        const file = input.files[0]
        // Check file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
            errors.resume = 'File size must be less than 5MB'
            input.value = ''
            return
        }
        formData.resume = file
        errors.resume = ''
    }
}

const validateForm = () => {
    let isValid = true

    // Reset errors
    Object.keys(errors).forEach(key => errors[key as keyof typeof errors] = '')

    // Name validation
    if (formData.name.length < 2) {
        errors.name = 'Name must be at least 2 characters long'
        isValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    if (!phoneRegex.test(formData.phone)) {
        errors.phone = 'Please enter a valid phone number'
        isValid = false
    }

    // Position validation
    if (!formData.position) {
        errors.position = 'Please select a position'
        isValid = false
    }

    // Resume validation
    if (!formData.resume) {
        errors.resume = 'Please upload your CV/Resume'
        isValid = false
    }

    // Message validation
    if (formData.message.length < 50) {
        errors.message = 'Cover letter must be at least 50 characters long'
        isValid = false
    }

    return isValid
}

const handleSubmit = async () => {
    if (!validateForm()) return

    isSubmitting.value = true
    submitStatus.value = null

    try {
        const formDataToSend = new FormData()
        formDataToSend.append('access_key', accessKey)
        formDataToSend.append('name', formData.name)
        formDataToSend.append('email', formData.email)
        formDataToSend.append('phone', formData.phone)
        formDataToSend.append('position', formData.position)
        formDataToSend.append('message', formData.message)
        if (formData.resume) {
            formDataToSend.append('resume', formData.resume)
        }

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSend
        })

        const data = await response.json()

        if (data.success) {
            submitStatus.value = {
                type: 'success',
                message: 'Application submitted successfully! We will contact you soon.'
            }
            // Reset form
            Object.keys(formData).forEach(key => formData[key as keyof typeof formData] = key === 'resume' ? null : '')
            const fileInput = document.getElementById('resume') as HTMLInputElement
            if (fileInput) fileInput.value = ''
        } else {
            throw new Error('Submission failed')
        }
    } catch (error) {
        submitStatus.value = {
            type: 'error',
            message: 'There was an error submitting your application. Please try again.'
        }
    } finally {
        isSubmitting.value = false
    }
}
</script>