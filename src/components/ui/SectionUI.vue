<script setup lang="ts">
  interface Props {
    id: string;
    title: string;
  }

  defineProps<Props>();
</script>

<template>
  <section :id="id" class="py-16 md:py-24">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-dark">
        {{ title }}
      </h2>
      <slot />
    </div>
  </section>
</template>
