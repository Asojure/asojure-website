<script setup lang="ts">
  import { RouterView } from "vue-router";
  import HeaderComponent from "./components/layout/HeaderComponent.vue";
  import FooterComponent from "./components/layout/FooterComponent.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-brand-light">
    <HeaderComponent />
    <main class="flex-grow">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>
