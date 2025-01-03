// utils/config.ts
export const API_BASE_URL = import.meta.env.VITE_APP_ROOT_API || "http://localhost:5173";
export const GALLERY_URL = import.meta.env.VITE_APP_GALLERY_URL || "http://localhost:5173/gallery";
export const DOWNLOAD_URL = import.meta.env.VITE_APP_DOWNLOAD_URL || "http://localhost:5173/download";
export const STRIPE_KEY = import.meta.env.VITE_APP_STRIPE_KEY || "your-default-stripe-key";
