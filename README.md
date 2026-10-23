# Nuxt.js Photography Portfolio Template

Welcome to the Photography Template built in Nuxt! This project is aimed at providing a complete, ready-to-use template for photographers to showcase their work in a simple yet elegant manner.

> Hi I'm Sergio Perea. I am Computer Engineer and Photographer.
> I used this template to develop my photography portfolio: https://fotografia.sperea.es/

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

### Features
* Responsive design for tablets and mobiles
* Full-width hero photo at the top of each main page (see below)
* Shared footer on every page, modeled on a centered layout: logo, tagline, short activity description, navigation links, Instagram, and links to the placeholder `Mentions légales` (`pages/mentions-legales.vue`) and `Confidentialité` (`pages/confidentialite.vue`) pages. Fill in the `[à compléter]` fields in `lang/fr.js` and `lang/en.js` (`pages.legal` and `pages.privacy`).
* Lightbox for viewing images in full size
* Metadata loaded from a JS file, easy to modify
* SEO friendly
* Contributing

I appreciate any contribution you make to this project. Please refer to the CONTRIBUTING.md for more details.

### Page hero photos

The header centers the home-linked logo, with the Séances photo,
Mariage, Événement and Concert links on the left and an outlined Contact button
(filled on hover), Instagram, language and theme icons on the right.
The page list is shared by the header and footer in `config/navigation.js`.
Below 1024 px, the logo stays centered and a burger icon opens a full-screen
menu with all links, plus the Instagram, language and theme icons at the bottom
(`components/HeaderControls.vue`).

Each main page opens with a full-width photo (`components/PageHero.vue`).
The sticky header overlays the photo with a transparent background and white
controls at the top of the page. Scrolling restores its themed background and
separator; pages without a hero always keep the themed header.
The images are temporary placeholders from Unsplash (via picsum.photos).
To use your own photos, replace these files while keeping the same names
(landscape format, about 1920×1080 px, recommended):

| Page | File |
| --- | --- |
| Home | `static/images/hero/home.jpg` |
| Séances photo | `static/images/hero/seances-photo.jpg` |
| Mariage | `static/images/hero/mariage.jpg` |
| Événement | `static/images/hero/evenement.jpg` |
| Concert | `static/images/hero/concert.jpg` |
| Contact | `static/images/hero/contact.jpg` |

The Séances photo, Mariage, Événement and Concert pages are placeholders built
with `components/ServicePage.vue`; their texts live in `lang/fr.js` and
`lang/en.js` (`pages.sessions`, `pages.wedding`, `pages.event`, `pages.concert`).

### License
This project is licensed under the MIT License. See the LICENSE.md file for details.

### Support
If you encounter any problems or have any suggestions, please open an issue on the GitHub repository.

### Acknowledgements
Thank you for considering using or contributing to this project. We appreciate your support!
