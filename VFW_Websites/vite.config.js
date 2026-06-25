import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

