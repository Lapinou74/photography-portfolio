<template>
  <div class="bg-nature-50 dark:bg-gray-900 transition-colors duration-200">
    <page-hero
      image="/images/hero/home.jpg"
      :title="$t('pages.home.title')"
      :subtitle="$t('pages.home.subtitle')"
      full-height
    />
    <section class="px-6 py-16 mx-auto max-w-2xl">
      <div class="text-lg text-nature-600 dark:text-nature-300">
        <p class="uppercase tracking-[0.2em] text-sm text-forest-600 dark:text-forest-300">
          {{ $t('pages.about.heroSubtitle') }}
        </p>
        <h2 class="font-heading text-3xl md:text-4xl font-bold text-nature-900 dark:text-nature-100 mt-2 mb-8">
          {{ $t('pages.about.title') }}
        </h2>
        <p>
          {{ $t('pages.about.content') }}
        </p>
        <p class="mt-6">
          {{ $t('pages.about.content2') }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import PageHero from '~/components/PageHero.vue';
export default {
  components: { PageHero },
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