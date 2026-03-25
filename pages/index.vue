<template>
  <PhotoSlide/>
</template>

<script>
import PhotoSlide from '~/components/home/PhotoSlide.vue';
export default {
  components: { PhotoSlide },
  head() {
    return {
      title: this.$t('pages.home.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.description')
        }
      ]
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>