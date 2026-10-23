<template>
  <svg
    v-if="country === 'gb'"
    class="lang-flag"
    viewBox="0 0 60 30"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <clipPath :id="clipId">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <rect width="60" height="30" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" :clip-path="`url(#${clipId})`" stroke="#C8102E" stroke-width="4" />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
  </svg>
  <svg
    v-else
    class="lang-flag"
    viewBox="0 0 3 2"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <rect width="1" height="2" fill="#002395" />
    <rect x="1" width="1" height="2" fill="#fff" />
    <rect x="2" width="1" height="2" fill="#ED2939" />
  </svg>
</template>

<script>
export default {
  name: 'LangFlag',
  props: {
    country: { type: String, required: true, validator: v => ['gb', 'fr'].includes(v) }
  },
  computed: {
    clipId() {
      return `lang-flag-clip-${this._uid}`
    }
  }
}
</script>

<style scoped>
.lang-flag {
  width: 1.5rem;
  height: 1rem;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
}
</style>
