<template>
  <service-page name="event" image="/images/hero/evenement.jpg" />
</template>

<script>
import ServicePage from '~/components/ServicePage.vue';

export default {
  components: { ServicePage },
  head() {
    return {
      title: this.$t('pages.event.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.event.subtitle')
        }
      ]
    };
  }
};
</script>