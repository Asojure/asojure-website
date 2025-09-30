<script setup lang="ts">
  interface NavigationItem {
    name: string;
    href: string;
  }

  defineEmits<{
    itemClicked: [];
  }>();

  const navigationItems: NavigationItem[] = [
    { name: "Inicio", href: "#hero" },
    { name: "Misión", href: "#mision" },
    { name: "Visión", href: "#vision" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ];
</script>

<template>
  <nav>
    <ul class="flex flex-col md:flex-row md:space-x-2">
      <li v-for="item in navigationItems" :key="item.name">
        <a
          :href="item.href"
          @click="$emit('itemClicked')"
          class="block px-4 py-2 text-brand-dark font-medium hover:text-brand-purple transition-colors duration-300 rounded-lg hover:bg-gray-200 md:hover:bg-transparent"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>
