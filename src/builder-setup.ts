// builder-setup.ts
import { Builder } from '@builder.io/qwik'
import { CustomButton } from './components/Button'

// Register Components
Builder.registerComponent(CustomButton, {
  name: 'CustomButton',
  inputs: [
    { name: 'text', type: 'string', defaultValue: 'Click Me' },
    { name: 'url', type: 'url', defaultValue: 'https://example.com' },
  ],
  // Organize component into a custom section
  insertMenu: { name: 'Custom Components', section: 'Custom' },
})

// Add more component registrations here as needed
