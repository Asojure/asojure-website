<script setup lang="ts">
  interface Props {
    class?: string;
  }

  defineProps<Props>();
</script>

<template>
  <div :class="['bg-white rounded-xl shadow-md overflow-hidden', $props.class]">
    <slot />
  </div>
</template>
