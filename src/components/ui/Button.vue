<script setup lang="ts">
  interface Props {
    variant?: "primary" | "secondary" | "light";
    href?: string;
    type?: "button" | "submit" | "reset";
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: "primary",
    type: "button",
  });

  const variantClasses = {
    primary:
      "bg-brand-purple text-white hover:bg-opacity-90 transform hover:-translate-y-1 shadow-lg",
    secondary:
      "bg-transparent border-2 border-brand-yellow text-white hover:bg-brand-yellow hover:text-brand-dark",
    light: "bg-white text-brand-dark hover:bg-gray-200",
  };
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :class="[
      'px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 inline-block text-center',
      variantClasses[variant],
    ]"
  >
    <slot />
  </component>
</template>
