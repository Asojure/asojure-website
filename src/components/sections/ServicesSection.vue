<script setup lang="ts">
  import SectionUi from "../ui/SectionUI.vue";
  import CardUi from "../ui/CardUI.vue";
  import ButtonUi from "../ui/ButtonUI.vue";
  import { createWhatsAppLink, SERVICES } from "@/constants";
</script>

<template>
  <SectionUi id="servicios" title="Nuestros Servicios">
    <div class="max-w-4xl mx-auto text-center mb-12">
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
        Ofrecemos una amplia gama de servicios de conciliación, tanto presenciales como virtuales,
        en materias civil, comercial, laboral, comunitaria y familiar. Nos especializamos en
        resolver conflictos de manera ágil y efectiva.
      </p>
    </div>

    <div class="services-grid grid grid-cols-1 md:grid-cols-2 gap-8">
      <CardUi
        v-for="service in SERVICES"
        :key="service.title"
        class="service-card flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <img
          :src="service.image"
          :alt="service.title"
          class="rounded-t-lg h-48 w-full object-cover"
        />
        <div class="p-6 flex flex-1 flex-col">
          <h3 class="text-xl font-bold font-heading mb-2 text-brand-dark">{{ service.title }}</h3>
          <p class="text-gray-600 flex-1">{{ service.description }}</p>
          <ButtonUi
            :href="createWhatsAppLink(service.whatsappMessage)"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 w-full min-h-14"
          >
            {{ service.ctaLabel }}
          </ButtonUi>
        </div>
      </CardUi>
    </div>
  </SectionUi>
</template>

<style scoped>
  @media (min-width: 1024px) {
    .services-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .service-card {
      flex: 0 1 calc((100% - 4rem) / 3);
    }
  }
</style>
