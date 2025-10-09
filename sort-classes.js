import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { glob } from 'glob'

// Only format class attributes with Prettier
const files = glob.sync('**/*.vue', { ignore: 'node_modules/**' })

files.forEach(file => {
  try {
    // Use Prettier only for this file to sort Tailwind classes
    execSync(`npx prettier --write "${file}" --plugin prettier-plugin-tailwindcss`, { 
      stdio: 'pipe' 
    })
    console.log(`Sorted classes in ${file}`)
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message)
  }
})