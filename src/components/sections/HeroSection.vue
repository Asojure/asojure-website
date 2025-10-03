<script setup lang="ts">
  import ButtonUi from "../ui/ButtonUI.vue";
  import { IMAGES } from "@/constants";
</script>

<template>
  <section
    id="hero"
    class="relative text-white py-24 md:py-32 bg-cover bg-center"
    :style="{ backgroundImage: `url(${IMAGES.HERO})` }"
  >
    <div class="absolute inset-0 bg-brand-dark opacity-60"></div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4 animate-fade-in-down">
          ASOJURE
        </h1>
        <h2 class="text-2xl md:text-4xl font-heading font-semibold mb-6 text-brand-yellow">
          Centro de Conciliación
        </h2>
        <p class="text-xl md:text-2xl mb-8 font-light">
          Unidos por la justicia y la reconciliación
        </p>
        <div
          class="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-10 inline-block border border-white/20"
        >
          <p class="text-lg">
            Aprobado por resolución 0596 del<br />
            Ministerio de Justicia y del Derecho
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonUi variant="primary" href="#servicios"> Nuestros Servicios </ButtonUi>
          <ButtonUi variant="secondary" href="#contacto"> Contáctanos </ButtonUi>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @keyframes fade-in-down {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-down {
    animation: fade-in-down 0.8s ease-out forwards;
  }
</style>
