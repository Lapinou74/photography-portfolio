<template>
  <div class="bg-nature-50 dark:bg-gray-900 transition-colors duration-200">
    <article class="px-6 py-16 mx-auto max-w-3xl text-nature-600 dark:text-nature-300">
      <h1 class="font-heading text-3xl md:text-4xl font-bold text-nature-900 dark:text-nature-100">
        {{ $t(`${base}.title`) }}
      </h1>
      <p class="mt-4 text-sm text-nature-500 dark:text-nature-400">
        {{ $t('pages.legalCommon.updated') }}
      </p>

      <section v-for="section in sections" :key="section" class="mt-10">
        <h2 class="text-sm uppercase tracking-[0.28em] text-nature-500 dark:text-nature-400">
          {{ $t(`${base}.sections.${section}.title`) }}
        </h2>
        <p class="mt-3 leading-relaxed whitespace-pre-line">
          {{ $t(`${base}.sections.${section}.body`, { email: links.contact.email }) }}
        </p>
      </section>
    </article>
  </div>
</template>

<script>
const links = require('~/config/links');

export default {
  name: 'LegalPage',
  props: {
    base: { type: String, required: true },
    sections: { type: Array, required: true }
  },
  data() {
    return { links };
  }
};
</script>
