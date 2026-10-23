<template>
  <service-page name="concert" image="/images/hero/concert.jpg" />
</template>

<script>
import ServicePage from '~/components/ServicePage.vue';

export default {
  components: { ServicePage },
  head() {
    return {
      title: this.$t('pages.concert.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.concert.subtitle')
        }
      ]
    };
  }
};
</script>