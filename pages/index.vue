<script setup lang="ts">
import { LandingPrivacyNotice } from '#components';

definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Sefa Energy Global Ltd',
  ogTitle: 'Sefa Energy Global Ltd',
  description: 'Making Energy Work For You.',
  ogDescription: 'Making Energy Work For You.',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Sefa Energy Global Ltd',
  twitterDescription: 'Making Energy Work For You.',

  ogImage: {
    url: 'https://sefaenergy.com/Sefa_Energy_Ltd.png',
    width: 1200,
    height: 630,
    alt: 'Sefa Energy Global Ltd - Energy Solutions'
  },
  twitterImage: 'https://sefaenergy.com/Sefa_Energy_Ltd.png'
})
</script>

<template>
  <LandingContainer>
    <div class="flex flex-col min-h-screen"></div>
    <LandingHero />
      <LandingFeatures />
    <LandingHereForYou />
    <LandingContactHome />
    <LandingPrivacyNotice />
  </LandingContainer>
</template>