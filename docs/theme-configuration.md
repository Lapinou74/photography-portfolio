# Theme Configuration Documentation

## Overview
This project uses a centralized theme configuration system that provides consistent typography, colors, and styling across light and dark modes.

## Color Palette (neutral base + forest accent)

Photos are the main source of color, so the interface stays neutral and uses
green only as an accent. Both scales live in `config/theme.js`:

**`nature` – neutral base** (warm off-white to charcoal with a slight green
undertone; the name is kept so existing `*-nature-*` classes keep working):

| Shades | Usage |
| --- | --- |
| 50 / 100 | Page background and light stone panels (footer) |
| 200 / 300 | Subtle separators and borders; dark-mode body text |
| 400 / 500 | Secondary text |
| 600 / 700 | Light-mode body text and links |
| 800 / 900 | Light-mode headings and deep text |

**`forest` – accent**, used sparingly. One green per background so titles and
buttons always match:

| Shades | Usage |
| --- | --- |
| 600 (`#2f7a43`) | Light mode: link and icon hovers, small labels, Contact button (outline, text and hover fill), filled buttons (white text) |
| 700 | Light-mode filled button hover |
| 300 (`#8db594`) | Dark mode and text over photos: link hovers, labels, Contact button, filled buttons (dark text) |
| 200 | Dark-mode filled button hover |
| 500 | Focus rings |
| 200 / 900 | Text selection |

In dark mode, surfaces and borders use neutral dark grays (lighter than pure
black), exposed as `gray`: `gray-900` (`#1f1f1f`) for pages, `gray-800` for panels
and cards, `gray-700` for separators and `gray-600` for input and logo borders
(at least 3:1 against both surfaces). Green stays in the `forest` accents only.

Use `bg-nature-50 dark:bg-gray-900` for page backgrounds and
`text-nature-600 dark:text-nature-300` for body text. Use `forest` only for
accents: filled buttons use `bg-forest-600` with white text (light mode) or
`bg-forest-300` with `text-gray-900` (dark mode). All text/background pairs meet WCAG AA (4.5:1).
The Tailwind content list includes both theme configuration and composable
utilities so their classes are included in production builds.

## Files Structure
```
config/
  └── theme.js           # Central theme configuration
composables/
  └── useTheme.js        # Vue.js theme utilities
tailwind.config.js       # Extended with theme config
```

## Usage Patterns

### 1. Direct Import in Components
```vue
<script>
import { typography } from '~/composables/useTheme'

export default {
  computed: {
    brandClass() {
      return typography.brand
    }
  }
}
</script>

<template>
  <span :class="brandClass">Brand Name</span>
</template>
```

### 2. Using the Theme Composable
```vue
<script>
import { useTheme } from '~/composables/useTheme'

export default {
  setup() {
    const { themeClasses, colors } = useTheme()
    
    return {
      themeClasses,
      colors
    }
  }
}
</script>

<template>
  <h1 :class="themeClasses.heading1">{{ title }}</h1>
  <p :class="themeClasses.bodyPrimary">{{ content }}</p>
</template>
```

### 3. Accessing Raw Theme Config
```javascript
import { themeConfig } from '~/composables/useTheme'

// Access font families
const headingFont = themeConfig.fontFamily.heading

// Access typography configs
const navStyles = themeConfig.typography.nav
```

## Available Theme Classes

### Typography
- `typography.brand` - Brand/logo styling
- `typography.nav` - Navigation links
- `typography.h1` - Main headings
- `typography.h2` - Section headings  
- `typography.h3` - Subsection headings
- `typography.body1` - Primary body text
- `typography.body2` - Secondary body text

### Component Classes (via useTheme)
- `themeClasses.brand`
- `themeClasses.nav`
- `themeClasses.heading1/2/3`
- `themeClasses.bodyPrimary/Secondary`
- `themeClasses.formLabel/Input`
- `themeClasses.buttonPrimary`
- `themeClasses.galleryCard/Title/Description`

### Color Utilities
- `colors.text.primary/secondary/tertiary/accent/muted`
- `colors.bg.primary/secondary/accent`

## Font Configuration

### Font Families
- **Display**: Inter (for logos/brands)
- **Body**: Inter (for body text)
- **Heading**: Poppins + Inter fallback (for headings)
- **Nav**: Inter (for navigation)

### Font Weights
- `thin`: 100
- `extralight`: 200  
- `light`: 300
- `normal`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700
- `extrabold`: 800
- `black`: 900

## Dark Mode Support

All typography classes automatically include dark mode variants using CSS classes like:
- `text-nature-600 dark:text-nature-300`
- `bg-nature-50 dark:bg-gray-900`

## Adding New Typography

To add new typography styles:

1. **Update `config/theme.js`**:
```javascript
typography: {
  // Add new component
  newComponent: {
    light: 'text-nature-800 font-medium',
    dark: 'text-nature-200 font-medium'
  }
}
```

2. **Update `composables/useTheme.js`**:
```javascript
const themeClasses = {
  // Add shorthand access
  newComponent: 'text-nature-800 dark:text-nature-200 font-medium transition-colors duration-200'
}
```

3. **Use in components**:
```vue
<template>
  <div :class="themeClasses.newComponent">Content</div>
</template>
```

## Benefits

- **Consistency**: All text styling centralized in one place
- **Maintainability**: Easy to update fonts/colors across the entire app
- **Dark Mode**: Automatic support with proper contrast ratios
- **Performance**: Pre-defined classes reduce CSS generation
- **Type Safety**: Clear interface for available styles
- **Scalability**: Easy to add new typography patterns

## Migration Guide

To migrate existing components:

1. Identify typography patterns in your component
2. Find matching class in `themeClasses` or create new ones
3. Replace hardcoded classes with theme utilities
4. Test in both light and dark modes