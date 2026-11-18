import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Generated shadcn/ui primitives: they co-locate variants, hooks and
    // components in one file, which Fast Refresh cannot split by design.
    files: ['src/components/ui/**/*.{ts,tsx}', 'src/hooks/use-toast.ts'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    // Vendored primitives that predate the React Compiler lint rules.
    files: ['src/components/ui/carousel.tsx'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    files: ['src/components/ui/sidebar.tsx'],
    rules: {
      'react-hooks/purity': 'off',
    },
  },
])
