<template>
  <legal-page base="pages.privacy" :sections="sections" />
</template>

<script>
import LegalPage from '~/components/LegalPage.vue';

export default {
  components: { LegalPage },
  data() {
    return {
      sections: ['data', 'purpose', 'retention', 'rights', 'cookies']
    };
  },
  head() {
    return {
      title: this.$t('pages.privacy.title')
    };
  }
};
</script>
