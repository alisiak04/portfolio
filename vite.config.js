import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a custom domain (alisiakazimierek.com) via public/CNAME,
// so the site is served from the root path, not a /repo-name/ subpath.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
