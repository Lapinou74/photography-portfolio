<template>
  <service-page name="sessions" image="/images/hero/seances-photo.jpg" />
</template>

<script>
import ServicePage from '~/components/ServicePage.vue';

export default {
  components: { ServicePage },
  head() {
    return {
      title: this.$t('pages.sessions.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.sessions.subtitle')
        }
      ]
    };
  }
};
</script>