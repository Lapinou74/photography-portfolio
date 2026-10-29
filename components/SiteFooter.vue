<template>
  <footer class="flex-shrink-0 bg-nature-50 dark:bg-gray-900 transition-colors duration-200">
    <!-- Decorative mountains and pines; the ground flows into the bar below -->
    <svg
      class="block w-full h-28 md:h-36 lg:h-40 pointer-events-none"
      viewBox="0 0 1440 160"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <path
        class="site-footer__far"
        d="M0 160V112L80 94L150 104L240 72L320 96L400 86L500 56L590 90L680 80L760 100L860 62L960 92L1040 82L1130 50L1220 88L1300 78L1380 96L1440 88V160Z"
      />
      <path
        class="site-footer__mid"
        d="M0 160V126C200 110 380 122 560 118S920 102 1100 114S1340 122 1440 112V160Z"
      />
      <path
        class="site-footer__front"
        d="M0 160V146C240 138 480 142 720 146S1200 154 1440 146V160ZM30 99L35.7 118.3H24.3ZM30 110L39.1 129.4H20.9ZM30 121.1L42.5 141.3H17.5ZM28.6 140.4h2.8V151h-2.8ZM58 83L65.7 109H50.3ZM58 97.9L70.3 123.9H45.7ZM58 112.8L74.9 140H41.1ZM56.1 138.8h3.7V151h-3.7ZM84 105L89 121.8H79.1ZM84 114.6L91.9 131.4H76.1ZM84 124.2L94.9 141.8H73.1ZM82.8 141h2.4V151h-2.4ZM112 90L118.7 112.7H105.3ZM112 103L122.7 125.6H101.3ZM112 115.9L126.7 139.7H97.3ZM110.4 138.6h3.2V150h-3.2ZM138 110L142.2 124.3H133.8ZM138 118.2L144.7 132.4H131.3ZM138 126.3L147.3 141.3H128.7ZM137 140.6h2V150h-2ZM250 112L253.7 124.6H246.3ZM250 119.2L255.9 131.8H244.1ZM250 126.4L258.2 139.6H241.8ZM249 139h2V148h-2ZM272 100L277.2 117.6H266.8ZM272 110.1L280.3 127.7H263.7ZM272 120.2L283.4 138.6H260.6ZM270.7 137.8h2.5V148h-2.5ZM520 115L523.5 126.8H516.5ZM520 121.7L525.5 133.5H514.5ZM520 128.4L527.6 140.8H512.4ZM519 140.2h2V149h-2ZM540 107L544.5 122.1H535.5ZM540 115.6L547.1 130.8H532.9ZM540 124.3L549.8 140.1H530.2ZM538.9 139.4h2.2V149h-2.2ZM900 117L904 130.4H896ZM900 124.7L906.3 138.1H893.7ZM900 132.4L908.7 146.4H891.3ZM899 145.8h2V155h-2ZM922 125L925 135.1H919ZM922 130.8L926.8 140.8H917.2ZM922 136.5L928.5 147.1H915.5ZM921 146.6h2V155h-2ZM1160 114L1164.5 129.1H1155.5ZM1160 122.6L1167.1 137.8H1152.9ZM1160 131.3L1169.8 147.1H1150.2ZM1158.9 146.4h2.2V156h-2.2ZM1186 100L1192.2 121H1179.8ZM1186 112L1195.9 133H1176.1ZM1186 124L1199.6 146H1172.4ZM1184.5 145h3V156h-3ZM1214 111L1218.7 127H1209.3ZM1214 120.1L1221.5 136.1H1206.5ZM1214 129.2L1224.3 146H1203.7ZM1212.9 145.2h2.3V155h-2.3ZM1300 104L1305.4 122.5H1294.6ZM1300 114.6L1308.7 133H1291.3ZM1300 125.1L1312 144.5H1288ZM1298.7 143.6h2.6V154h-2.6ZM1326 84L1333.9 110.9H1318.1ZM1326 99.4L1338.7 126.2H1313.3ZM1326 114.7L1343.4 142.9H1308.6ZM1324.1 141.6h3.8V154h-3.8ZM1354 99L1359.9 119.2H1348.1ZM1354 110.5L1363.5 130.7H1344.5ZM1354 122L1367.1 143.2H1340.9ZM1352.6 142.2h2.9V153h-2.9ZM1382 89L1389.2 113.4H1374.8ZM1382 102.9L1393.5 127.3H1370.5ZM1382 116.8L1397.8 142.4H1366.2ZM1380.3 141.2h3.5V153h-3.5ZM1412 106L1417 122.8H1407.1ZM1412 115.6L1419.9 132.4H1404.1ZM1412 125.2L1422.9 142.8H1401.1ZM1410.8 142h2.4V152h-2.4Z"
      />
    </svg>

    <!-- Desktop: logo | copyright + legal links | Instagram + mail, on one row.
         Mobile: logo on the first row; legal line left and icons right below. -->
    <div class="site-footer__base px-4 md:px-12 lg:px-20 pt-2 pb-8 text-sm md:text-base text-nature-600 dark:text-nature-300">
      <nuxt-link
        :to="localePath('/')"
        :aria-label="$t('nav.home')"
        class="site-footer__logo inline-flex items-center justify-center w-14 h-14 border border-nature-400 dark:border-gray-600 text-[0.55rem] uppercase tracking-[0.35em] text-nature-600 dark:text-nature-400 transition-colors duration-200"
      >
        Logo
      </nuxt-link>

      <ul class="site-footer__list site-footer__legal flex flex-wrap justify-center">
        <li>&copy; {{ year }} Adrien Jeannaux</li>
        <li>
          <nuxt-link :to="localePath('/mentions-legales')" class="hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200">
            {{ $t('footer.legal') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/confidentialite')" class="hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200">
            {{ $t('footer.privacy') }}
          </nuxt-link>
        </li>
      </ul>

      <div class="site-footer__social flex items-center gap-3">
        <a
          :href="links.social.instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="p-1 hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 1.8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.3-3.6a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"
            />
          </svg>
        </a>
        <nuxt-link
          :to="localePath('/contact')"
          :aria-label="$t('nav.contact')"
          class="p-1 hover:text-forest-600 dark:hover:text-forest-300 transition-colors duration-200"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm-.6 3.9L12 13l7.6-5.1-1-1.5L12 10.8 5.4 6.4l-1 1.5Z"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
const links = require('~/config/links');

export default {
  name: 'SiteFooter',
  data() {
    return { links, year: new Date().getFullYear() };
  }
};
</script>

<style scoped>
/* Decoration colors on the site background (nature-50 / gray-900):
   each layer a little stronger than the one behind it */
.site-footer__far { fill: #f0eee9; }
.site-footer__mid { fill: #e8e5df; }
.site-footer__front { fill: #dedad3; }

.dark .site-footer__far { fill: #242424; }
.dark .site-footer__mid { fill: #292929; }
.dark .site-footer__front { fill: #303030; }

/* Bottom bar: same color as the front layer so the ground continues into it */
.site-footer__base { background-color: #dedad3; }
.dark .site-footer__base { background-color: #303030; }

.site-footer__far,
.site-footer__mid,
.site-footer__front {
  transition: fill 200ms;
}

.site-footer__base {
  transition: background-color 200ms;
}

/* Bar layout.
   Mobile: logo centered on the first row; copyright + legal links on the left
   (one line) and icons on the right on the second row.
   Desktop: logo | copyright + legal links | Instagram + mail on one row. */
.site-footer__base {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'logo logo'
    'legal social';
  align-items: center;
  row-gap: 1.25rem;
  column-gap: 1rem;
}

.site-footer__logo { grid-area: logo; justify-self: center; }
.site-footer__legal { grid-area: legal; justify-self: start; }
.site-footer__social { grid-area: social; justify-self: end; }

.site-footer__list li {
  white-space: nowrap;
}

.site-footer__list li + li::before {
  content: '-';
  content: '-' / '';
  margin: 0 0.6rem;
}

/* Mobile: copyright + legal links on one line next to the icons. Text scales
   with the screen width so the row fits on every phone; icons are smaller. */
@media (max-width: 767px) {
  .site-footer__base {
    column-gap: 0.75rem;
  }

  .site-footer__legal {
    justify-content: flex-start;
    flex-wrap: nowrap;
    font-size: min(2.5vw, 0.875rem);
    line-height: 1.4;
  }

  .site-footer__list li + li::before {
    margin: 0 0.35em;
  }

  .site-footer__social {
    gap: 0.25rem;
  }

  .site-footer__social a {
    padding: 0.125rem;
  }

  .site-footer__social svg {
    width: 1.125rem;
    height: 1.125rem;
  }
}

/* Desktop: one row; logo left, legal links center, icons right */
@media (min-width: 768px) {
  .site-footer__base {
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: 'logo legal social';
  }

  .site-footer__logo { justify-self: start; }
  .site-footer__legal { justify-self: center; }
}
</style>
