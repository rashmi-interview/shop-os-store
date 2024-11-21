
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  build: {
    target: 'es2015', // Use native ES2015 features
    rollupOptions: {
      treeshake: true  // Ensure tree shaking is enabled
    }
  },
})
