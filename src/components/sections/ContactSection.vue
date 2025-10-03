<script setup lang="ts">
  import Section from "../ui/Section.vue";
  import Card from "../ui/Card.vue";
  import IconBase from "../ui/IconBase.vue";
  import { IMAGES, CONTACT_INFO, BUSINESS_HOURS, ICONS } from "@/constants";
  import type { ContactInfo } from "@/types";

  const contactInfo: ContactInfo[] = [
    {
      icon: ICONS.LOCATION,
      title: "Dirección",
      content: CONTACT_INFO.ADDRESS,
    },
    {
      icon: ICONS.PHONE,
      title: "Teléfonos",
      content: `Cel: ${CONTACT_INFO.PHONE} | Fijo: ${CONTACT_INFO.LANDLINE}`,
      link: `tel:${CONTACT_INFO.PHONE}`,
    },
    {
      icon: ICONS.EMAIL,
      title: "Correo",
      content: `${CONTACT_INFO.EMAIL_PRIMARY} | ${CONTACT_INFO.EMAIL_SECONDARY}`,
      link: `mailto:${CONTACT_INFO.EMAIL_PRIMARY}`,
    },
    {
      icon: ICONS.WHATSAPP,
      title: "Whatsapp",
      content: `+${CONTACT_INFO.WHATSAPP}`,
      link: CONTACT_INFO.WHATSAPP_LINK,
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
          :link="info.link"
          :id="info.id ?? ('contacto-' + info.title.toLowerCase().replace(' ', '-'))"
          class="flex items-center p-4 transition-shadow duration-300"
        >
          <div
            class="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mr-6"
          >
            <IconBase
              :path="info.icon"
              :size="32"
              class="text-brand-blue"
            />
          </div>
          <div>
            <h4 class="text-lg font-bold font-heading text-brand-dark">{{ info.title }}</h4>
            <p class="text-gray-600">{{ info.content }}</p>
          </div>
        </Card>
      </div>

      <!-- Image and Schedule -->
      <div class="space-y-6">
        <Card class="overflow-hidden">
          <img :src="IMAGES.CONTACT" alt="Oficina de Asojure" class="w-full h-64 object-cover" />
          <div class="p-6 bg-brand-dark text-white">
            <h3 class="text-2xl font-bold mb-4 text-brand-yellow">Horario de Atención</h3>
            <p class="text-lg mb-2">{{ BUSINESS_HOURS.WEEKDAY }}</p>
            <p class="text-lg">{{ BUSINESS_HOURS.SATURDAY }}</p>
            <p class="text-sm mt-4 opacity-80">{{ BUSINESS_HOURS.NOTE }}</p>
          </div>
        </Card>
      </div>
    </div>
  </Section>
</template>
