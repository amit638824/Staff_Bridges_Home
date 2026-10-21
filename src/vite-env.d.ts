/// <reference types="vite/client" />

declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean | string;
    disable?: boolean | string;
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
  };

  export default AOS;
}
