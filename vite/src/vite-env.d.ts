/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEVTOOLS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
