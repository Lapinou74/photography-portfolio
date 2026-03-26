<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
    <menu-superior/>
    <Nuxt />
  </div>
</template>

<script>
import MenuSuperior from '~/components/MenuSuperior.vue';
export default {
components: {MenuSuperior},
  data() {
    return {
      show: false
    }
  }
}
</script>