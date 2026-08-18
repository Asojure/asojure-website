<script setup lang="ts">
  import type { ButtonVariant, ButtonType } from "@/types";

  interface Props {
    variant?: ButtonVariant;
    href?: string;
    type?: ButtonType;
    target?: string;
    rel?: string;
    download?: string | boolean;
  }

  withDefaults(defineProps<Props>(), {
    variant: "primary",
    type: "button",
  });

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-brand-purple text-white hover:bg-opacity-90 transform hover:-translate-y-1 shadow-lg uppercase tracking-wider",
    secondary:
      "bg-transparent border-2 border-brand-yellow text-white hover:bg-brand-yellow hover:text-brand-dark uppercase tracking-wider",
    light: "bg-white text-brand-dark hover:bg-gray-200 uppercase tracking-wider",
    outline:
      "bg-brand-yellow/10 border-2 border-brand-yellow text-brand-dark shadow-sm hover:bg-brand-yellow hover:text-brand-dark hover:shadow-md hover:-translate-y-0.5 uppercase tracking-wider",
  };
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :target="target ? target : undefined"
    :rel="rel ? rel : undefined"
    :download="download ? download : undefined"
    :class="[
      'px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 inline-block text-center',
      variantClasses[variant],
    ]"
  >
    <slot />
  </component>
</template>
