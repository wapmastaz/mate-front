// formkit.config.js
import { generateClasses } from '@formkit/themes'
// import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './tailwind-theme' // change to your theme's path

export default {
  icons: {
    
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}