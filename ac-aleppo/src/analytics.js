const FIRST_TOUCH_KEY = "ac_first_touch";

const readParams = () => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
    gclid: params.get("gclid") || "",
    fbclid: params.get("fbclid") || "",
  };
};

const baseAttribution = () => {
  if (typeof window === "undefined") return {};
  const params = readParams();
  return {
    ...params,
    landing_page: window.location.pathname,
    referrer: document.referrer || "direct",
    captured_at: new Date().toISOString(),
  };
};

export const captureFirstTouch = () => {
  if (typeof window === "undefined") return {};

  const existing = localStorage.getItem(FIRST_TOUCH_KEY);
  if (existing) {
    try {
      return JSON.parse(existing);
    } catch {
      localStorage.removeItem(FIRST_TOUCH_KEY);
    }
  }

  const touch = baseAttribution();
  localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(touch));
  return touch;
};

export const getAttribution = () => {
  if (typeof window === "undefined") return {};
  const firstTouch = captureFirstTouch();
  return {
    ...firstTouch,
    current_page: window.location.pathname,
  };
};

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

export const trackPageView = (pageType, pageTitle) => {
  if (typeof window === "undefined") return;
  const attr = getAttribution();

  trackEvent("page_view", {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_type: pageType,
    ...attr,
  });
};

export const trackLeadClick = (method, source, extra = {}) => {
  const attr = getAttribution();
  trackEvent("lead_click", {
    lead_method: method,
    cta_source: source,
    ...extra,
    ...attr,
  });
};
