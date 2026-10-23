<template>
  <div class="bg-nature-50 dark:bg-gray-900 transition-colors duration-200">
    <page-hero
      :image="image"
      :title="$t(`pages.${name}.title`)"
      :subtitle="$t(`pages.${name}.subtitle`)"
    />
    <section class="px-6 py-16 mx-auto max-w-2xl text-center text-lg text-nature-600 dark:text-nature-300">
      <p>
        {{ $t(`pages.${name}.content`) }}
      </p>
      <p class="mt-6 text-sm uppercase tracking-[0.28em] text-nature-500 dark:text-nature-400">
        {{ $t('pages.servicePlaceholder') }}
      </p>
    </section>
  </div>
</template>

<script>
import PageHero from '~/components/PageHero.vue';

export default {
  name: 'ServicePage',
  components: { PageHero },
  props: {
    name: { type: String, required: true },
    image: { type: String, required: true }
  }
};
</script>
