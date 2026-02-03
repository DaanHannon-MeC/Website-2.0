/// <reference types="vite/client" />

interface Window {
  gtag?: (
    command: 'consent' | 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: Record<string, any>
  ) => void;
  dataLayer?: any[];
}
