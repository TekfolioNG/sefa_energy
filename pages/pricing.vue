<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

// Define types for our pricing structure
interface PriceStructure {
  monthly?: string;
  annual?: string;
  discount?: string;
  original?: string;
}

interface PricingPlan {
  name: string;
  price: string | PriceStructure;
  popular: boolean;
  features: string[];
  button: {
    text: string;
    link: string;
  };
}

const pricing: PricingPlan[] = [
  {
    name: "Personal",
    price: "Free",
    popular: false,
    features: [
      "Lifetime free",
      "Up to 3 users",
      "Unlimited Pages",
      "Nuxt Sub domain",
      "Basic Integrations",
      "Community Support",
    ],
    button: {
      text: "Get Started",
      link: "/",
    },
  },
  {
    name: "Startup",
    price: {
      monthly: "$19",
      annual: "$16",
      discount: "10%",
      original: "$24",
    },
    popular: true,
    features: [
      "All Free Features",
      "Up to 20 users",
      "20 Custom domains",
      "Unlimited Collaborators",
      "Advanced Integrations",
      "Priority Support",
    ],
    button: {
      text: "Get Started",
      link: "#",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    popular: false,
    features: [
      "All Pro Features",
      "Unlimited Custom domains",
      "99.99% Uptime SLA",
      "SAML & SSO Integration",
      "Dedicated Account Manager",
      "24/7 Phone Support",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template #title>Pricing</template>
      <template #desc>Simple & Predictable pricing. No Surprises.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPricing v-for="item in pricing" :key="item.name" :plan="item" />
    </div>
  </LandingContainer>
</template>