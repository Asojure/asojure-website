<script setup lang="ts">
  interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }

  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      url: "https://facebook.com/centrodeconciliacionasojure",
      icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/asojure",
      icon: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@conciliacionasojure",
      icon: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z",
    },
  ];

  const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-brand-dark text-brand-light">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Información de Contacto -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-brand-yellow">Contacto</h3>
          <ul class="space-y-3 text-gray-300">
            <li>📍 Carrera 112 A # 78 C 57 Piso 2</li>
            <li>Villas de Granada</li>
            <li>📱 Celular: 3012167216</li>
            <li>📞 Fijo: 6017713297</li>
            <li>✉️ Asojure.27@gmail.com</li>
          </ul>
        </div>

        <!-- Redes Sociales -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-brand-yellow">Síguenos</h3>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-brand-purple transition-colors"
              :aria-label="social.name"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Información Legal -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-brand-yellow">Centro Aprobado</h3>
          <p class="text-gray-300">
            Aprobado por resolución 0596 del Ministerio de Justicia y del Derecho.
          </p>
          <p class="text-gray-300 mt-4 font-semibold">El arte de resolver conflictos</p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400">
        <p>
          &copy; {{ currentYear }} ASOJURE Centro de Conciliación. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
