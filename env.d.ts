/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IMAGE_UPLOAD_URL: string
  readonly VITE_IMAGE_PREVIEW_PREFIX: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
