<script setup lang="ts">
  import { RouterView } from "vue-router";
  import HeaderComponent from "./components/layout/HeaderComponent.vue";
  import FooterComponent from "./components/layout/FooterComponent.vue";
  import FloatingButton from "./components/ui/FloatingButton.vue";
  import { CONTACT_INFO } from "./constants";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-brand-light">
    <HeaderComponent />
    <main class="flex-grow">
      <RouterView />
    </main>
    <FooterComponent />
    <FloatingButton
      target-element-id="contacto-whatsapp"
      :href="CONTACT_INFO.WHATSAPP_LINK"
      text="Contáctanos"
      position="bottom-right"
      bg-color="bg-green-500"
      bg-color-hover="hover:bg-green-600"
    />
  </div>
</template>
