<script setup lang="ts">
  interface Props {
    class?: string;
    link?: string;
  }

  const props = defineProps<Props>();
</script>

<template>
  <component
    :is="props.link ? 'a' : 'div'"
    :href="props.link"
    :target="props.link?.startsWith('http') ? '_blank' : undefined"
    :rel="props.link?.startsWith('http') ? 'noopener noreferrer' : undefined"
    :class="[
      'bg-white rounded-xl shadow-md overflow-hidden',
      props.link ? 'cursor-pointer hover:shadow-lg transition-shadow duration-300' : '',
      $props.class
    ]"
  >
    <slot />
  </component>
</template>
