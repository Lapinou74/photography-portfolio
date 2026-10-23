<template>
  <section
    class="page-hero relative flex items-center justify-center overflow-hidden text-center text-white"
    :class="{ 'page-hero--full': fullHeight }"
  >
    <img
      :src="image"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div class="page-hero__overlay absolute inset-0" aria-hidden="true"></div>

    <div class="relative z-10 px-6 max-w-3xl">
      <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mt-4 text-base md:text-lg font-light tracking-wide">
        {{ subtitle }}
      </p>
    </div>

    <div
      class="page-hero__curve absolute inset-x-0 bottom-0 bg-nature-50 dark:bg-gray-900 transition-colors duration-200"
      aria-hidden="true"
    ></div>
  </section>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    fullHeight: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.page-hero {
  margin-top: calc(-1 * var(--site-header-height));
  min-height: calc(60vh + var(--site-header-height));
  padding-top: var(--site-header-height);
}

.page-hero--full {
  min-height: 100vh;
}

.page-hero__overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.2));
}

.page-hero h1,
.page-hero p {
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
}

.page-hero__curve {
  height: 4rem;
  margin-bottom: -1px;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

@media (max-width: 767px) {
  .page-hero {
    min-height: calc(50vh + var(--site-header-height));
  }

  .page-hero--full {
    min-height: 100vh;
  }

  .page-hero__curve {
    height: 2rem;
  }
}
</style>
