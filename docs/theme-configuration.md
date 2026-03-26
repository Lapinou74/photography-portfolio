# Theme Configuration Documentation

## Overview
This project uses a centralized theme configuration system that provides consistent typography, colors, and styling across light and dark modes.

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
- `text-gray-600 dark:text-gray-300`
- `bg-white dark:bg-gray-900`

## Adding New Typography

To add new typography styles:

1. **Update `config/theme.js`**:
```javascript
typography: {
  // Add new component
  newComponent: {
    light: 'text-gray-800 font-medium',
    dark: 'text-gray-200 font-medium'
  }
}
```

2. **Update `composables/useTheme.js`**:
```javascript
const themeClasses = {
  // Add shorthand access
  newComponent: 'text-gray-800 dark:text-gray-200 font-medium transition-colors duration-200'
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