<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Sefa Energy Ltd | Making Energy Work For You',
  ogTitle: 'Sefa Energy Ltd | Making Energy Work For You',
  description: 'Sefa Energy specializes in supply, engineering, production chemicals, and environmental management of energy solutions.',
  ogDescription: 'Sefa Energy specializes in supply, engineering, production chemicals, and environmental management of energy solutions.',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Sefa Energy Ltd | Making Energy Work For You',
  twitterDescription: 'Sefa Energy specializes in supply, engineering, production chemicals, and environmental management of energy solutions.',

  ogImage: {
    url: 'https://sefaenergy.com/Sefa_Energy_Ltd.png',
    width: 1200,
    height: 630,
    alt: 'Sefa Energy Ltd - Energy Solutions'
  },
  twitterImage: 'https://sefaenergy.com/Sefa_Energy_Ltd.png'
})
</script>

<template>
  <LandingContainer>
    <LandingHero />
    <LandingValues />
    <LandingFeatures />
    <LandingProducts />
    <LandingCta />
    <LandingBlogSnippets />
  </LandingContainer>
</template>
