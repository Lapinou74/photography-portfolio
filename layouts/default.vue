<template>
  <div class="site-layout min-h-screen flex flex-col bg-nature-50 dark:bg-gray-900 text-nature-900 dark:text-nature-100 transition-colors duration-200">
    <menu-superior/>
    <main class="flex-1">
      <Nuxt />
    </main>
    <site-footer/>
  </div>
</template>

<script>
import MenuSuperior from '~/components/MenuSuperior.vue';
import SiteFooter from '~/components/SiteFooter.vue';
export default {
components: {MenuSuperior, SiteFooter},
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.site-layout {
  --site-header-height: 97px;
}

@media (min-width: 768px) {
  .site-layout {
    --site-header-height: 105px;
  }
}
</style>