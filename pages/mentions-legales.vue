<template>
  <legal-page base="pages.legal" :sections="sections" />
</template>

<script>
import LegalPage from '~/components/LegalPage.vue';

export default {
  components: { LegalPage },
  data() {
    return {
      sections: ['publisher', 'hosting', 'property', 'liability']
    };
  },
  head() {
    return {
      title: this.$t('pages.legal.title')
    };
  }
};
</script>
