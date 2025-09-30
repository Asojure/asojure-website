<script setup lang="ts">
  import { ref } from "vue";
  import NavigationComponent from "./NavigationComponent.vue";

  const mobileMenuOpen = ref(false);

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };
</script>

<template>
  <header class="bg-brand-light shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-4">
          <div
            class="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
          >
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div>
            <h1 class="text-3xl font-heading font-bold text-brand-dark">ASOJURE</h1>
            <p class="text-sm text-gray-500">Centro de Conciliación</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <NavigationComponent />
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-brand-dark hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200">
        <NavigationComponent @item-clicked="toggleMobileMenu" />
      </div>
    </div>
  </header>
</template>
