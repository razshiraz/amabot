declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackDownloadButtonClick(buttonName = "Free Download") {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "download_button_click", {
      button_name: buttonName,
    });
  }
}
