<script setup lang="ts">
  import Section from "../ui/Section.vue";
  import Card from "../ui/Card.vue";
  import { IMAGES } from "@/constants";

  interface ContactInfo {
    icon: string;
    title: string;
    content: string;
    link?: string;
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Dirección",
      content: "Carrera 112 A # 78 C 57 Piso 2, Villas de Granada",
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Teléfonos",
      content: "Cel: 3012167216 | Fijo: 6017713297",
      link: "tel:3012167216",
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Correo",
      content: "contacto@conciliacionasojure.com.co",
      link: "mailto:contacto@conciliacionasojure.com.co",
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Correo",
      content: "Asojure.27@gmail.com",
      link: "mailto:Asojure.27@gmail.com",
    },
  ];
</script>

<template>
  <Section id="contacto" title="Contáctanos" class="bg-gray-100">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Contact Info -->
      <div class="space-y-6">
        <Card
          v-for="info in contactInfo"
          :key="info.title"
          class="flex items-center p-4 transition-shadow duration-300"
        >
          <div
            class="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mr-6"
          >
            <svg class="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                :d="info.icon"
              />
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-bold font-heading text-brand-dark">{{ info.title }}</h4>
            <a
              v-if="info.link"
              :href="info.link"
              class="text-gray-600 hover:text-brand-purple transition-colors"
            >
              {{ info.content }}
            </a>
            <p v-else class="text-gray-600">{{ info.content }}</p>
          </div>
        </Card>
      </div>

      <!-- Image and Schedule -->
      <div class="space-y-6">
        <Card class="overflow-hidden">
          <img
            :src="IMAGES.CONTACT"
            alt="Oficina de Asojure"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 bg-brand-dark text-white">
            <h3 class="text-2xl font-bold mb-4 text-brand-yellow">Horario de Atención</h3>
            <p class="text-lg mb-2">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
            <p class="text-lg">Sábados (virtual): 8:00 AM - 1:00 PM</p>
            <p class="text-sm mt-4 opacity-80">Conciliaciones presenciales y virtuales</p>
          </div>
        </Card>
      </div>
    </div>
  </Section>
</template>
