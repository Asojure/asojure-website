<script setup lang="ts">
  import Section from "../ui/Section.vue";
  import Card from "../ui/Card.vue";
  import { IMAGES } from "@/constants";

  interface Service {
    title: string;
    description: string;
    image: string;
  }
  const specificServices: Service[] = [
    {
      title: "Asuntos Familiares",
      description:
        "Custodia y cuidado personal, visita y protección legal de los menores, fijación de la cuota alimentaria.",
      image: IMAGES.SERVICE_1,
    },
    {
      title: "Unión Marital de Hecho",
      description: "Declaración de Unión Marital de Hecho y sus efectos patrimoniales.",
      image: IMAGES.SERVICE_2,
    },
    {
      title: "Contratos y Obligaciones",
      description:
        "Disputas sobre contratos de arrendamiento, compraventa, y otros acuerdos civiles y comerciales.",
      image: IMAGES.SERVICE_3,
    },
  ];
</script>

<template>
  <Section id="servicios" title="Nuestros Servicios">
    <div class="max-w-4xl mx-auto text-center mb-12">
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
        Ofrecemos una amplia gama de servicios de conciliación, tanto presenciales como virtuales,
        en materias civil, comercial, laboral, comunitaria y familiar. Nos especializamos en
        resolver conflictos de manera ágil y efectiva.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        v-for="service in specificServices"
        :key="service.title"
        class="transform hover:scale-105 transition-transform duration-300"
      >
        <img :src="service.image" :alt="service.title" class="rounded-t-lg h-48 w-full object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-bold font-heading mb-2 text-brand-dark">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </Card>
    </div>
  </Section>
</template>
