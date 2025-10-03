<script setup lang="ts">
  interface Props {
    /**
     * SVG path(s) for the icon
     * Can be a single string or array of strings for multiple paths
     */
    path: string | string[];
    /**
     * Size of the icon (width and height)
     */
    size?: number | string;
    /**
     * View box dimensions
     */
    viewBox?: string;
    /**
     * Fill color (use 'none' for stroke icons)
     */
    fill?: string;
    /**
     * Stroke color
     */
    stroke?: string;
    /**
     * Stroke width
     */
    strokeWidth?: number | string;
    /**
     * Additional CSS classes
     */
    class?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
  });

  const sizeValue = typeof props.size === "number" ? `${props.size}px` : props.size;
</script>

<template>
  <svg
    :width="sizeValue"
    :height="sizeValue"
    :viewBox="props.viewBox"
    :class="props.class"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-if="typeof props.path === 'string'">
      <path
        :fill="props.fill"
        :stroke="props.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="props.strokeWidth"
        :d="props.path"
      />
    </template>
    <template v-else>
      <path
        v-for="(p, index) in props.path"
        :key="index"
        :fill="props.fill"
        :stroke="props.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="props.strokeWidth"
        :d="p"
      />
    </template>
  </svg>
</template>
