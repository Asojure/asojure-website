<script setup lang="ts">
  import SectionUi from "../ui/SectionUI.vue";
  import CardUi from "../ui/CardUI.vue";
  import ButtonUi from "../ui/ButtonUI.vue";
  import IconUi from "../ui/IconUI.vue";
  import { CONTACT_INFO } from "@/constants";

  const steps = [
    {
      label: "Descarga el formulario",
      description: "Obtén el archivo de sugerencias usando el botón de abajo.",
      icon: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2 M7 10l5 5 5-5 M12 15V3",
    },
    {
      label: "Dilígencialo",
      description: "Llena tus datos y cuéntanos cómo podemos mejorar.",
      icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    },
    {
      label: "Envíalo",
      description: `Adjunta el archivo y envíalo a ${CONTACT_INFO.EMAIL_PRIMARY}.`,
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];
</script>

<template>
  <SectionUi id="sugerencias" title="Buzón de Sugerencias">
    <CardUi class="max-w-4xl mx-auto p-8 md:p-12 text-center">
      <div class="mb-10">
        <div
          class="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <IconUi
            path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            :size="32"
            class="text-brand-purple"
          />
        </div>
        <h3 class="text-2xl font-bold text-brand-dark mb-2">Tu opinión nos ayuda a crecer</h3>
        <p class="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Queremos escucharte. Si tienes una queja, reclamo, felicitación o idea, déjanos saber a
          través de nuestro formato de sugerencias.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <div
            class="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-lg mb-4"
          >
            {{ index + 1 }}
          </div>
          <div
            class="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-3"
          >
            <IconUi :path="step.icon" :size="24" class="text-brand-blue" />
          </div>
          <h4 class="text-lg font-bold text-brand-dark mb-1">{{ step.label }}</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            <template v-if="index === 2">
              Adjunta el archivo y envíalo a
              <a
                :href="`mailto:${CONTACT_INFO.EMAIL_PRIMARY}`"
                class="text-brand-purple font-medium underline decoration-1 underline-offset-2 hover:text-brand-dark transition-colors"
              >
                {{ CONTACT_INFO.EMAIL_PRIMARY }} </a
              >.
            </template>
            <template v-else>
              {{ step.description }}
            </template>
          </p>
        </div>
      </div>

      <ButtonUi href="/documentos/sugerencias.docx" variant="primary" download>
        Descargar formulario
      </ButtonUi>
    </CardUi>
  </SectionUi>
</template>
