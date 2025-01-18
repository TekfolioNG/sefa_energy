<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useSeoMeta({
  title: 'Sefa Energy Ltd',
  ogTitle: 'Sefa Energy Ltd',
  description: 'Making Energy Work For You. For Tomorrow',
  ogDescription: 'Making Energy Work For You. For Tomorrow',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Sefa Energy Ltd',
  twitterDescription: 'Making Energy Work For You. For Tomorrow',

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
