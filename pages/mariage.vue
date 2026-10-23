<template>
  <service-page name="wedding" image="/images/hero/mariage.jpg" />
</template>

<script>
import ServicePage from '~/components/ServicePage.vue';

export default {
  components: { ServicePage },
  head() {
    return {
      title: this.$t('pages.wedding.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.wedding.subtitle')
        }
      ]
    };
  }
};
</script>