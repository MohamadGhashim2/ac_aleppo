import { useEffect } from "react";

const ensureMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const ensureLinkTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const getAttr = (element, attr) => element?.getAttribute(attr) || "";

export const useSeoMeta = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  twitterTitle,
  twitterDescription,
}) => {
  useEffect(() => {
    const previousTitle = document.title;

    const descTag = ensureMetaTag('meta[name="description"]', {
      name: "description",
    });
    const canonicalTag = ensureLinkTag('link[rel="canonical"]', {
      rel: "canonical",
    });
    const ogTitleTag = ensureMetaTag('meta[property="og:title"]', {
      property: "og:title",
    });
    const ogDescriptionTag = ensureMetaTag('meta[property="og:description"]', {
      property: "og:description",
    });
    const ogTypeTag = ensureMetaTag('meta[property="og:type"]', {
      property: "og:type",
    });
    const ogUrlTag = ensureMetaTag('meta[property="og:url"]', {
      property: "og:url",
    });
    const twitterCardTag = ensureMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
    });
    const twitterTitleTag = ensureMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
    });
    const twitterDescriptionTag = ensureMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
    });

    const prev = {
      desc: getAttr(descTag, "content"),
      canonical: getAttr(canonicalTag, "href"),
      ogTitle: getAttr(ogTitleTag, "content"),
      ogDescription: getAttr(ogDescriptionTag, "content"),
      ogType: getAttr(ogTypeTag, "content"),
      ogUrl: getAttr(ogUrlTag, "content"),
      twCard: getAttr(twitterCardTag, "content"),
      twTitle: getAttr(twitterTitleTag, "content"),
      twDescription: getAttr(twitterDescriptionTag, "content"),
    };

    descTag.setAttribute("content", description);
    canonicalTag.setAttribute("href", canonical);
    ogTitleTag.setAttribute("content", ogTitle || title);
    ogDescriptionTag.setAttribute("content", ogDescription || description);
    ogTypeTag.setAttribute("content", "website");
    ogUrlTag.setAttribute("content", ogUrl || canonical);
    twitterCardTag.setAttribute("content", "summary_large_image");
    twitterTitleTag.setAttribute("content", twitterTitle || title);
    twitterDescriptionTag.setAttribute(
      "content",
      twitterDescription || description,
    );
    document.title = title;

    return () => {
      document.title = previousTitle;
      descTag.setAttribute("content", prev.desc);
      canonicalTag.setAttribute("href", prev.canonical);
      ogTitleTag.setAttribute("content", prev.ogTitle);
      ogDescriptionTag.setAttribute("content", prev.ogDescription);
      ogTypeTag.setAttribute("content", prev.ogType);
      ogUrlTag.setAttribute("content", prev.ogUrl);
      twitterCardTag.setAttribute("content", prev.twCard);
      twitterTitleTag.setAttribute("content", prev.twTitle);
      twitterDescriptionTag.setAttribute("content", prev.twDescription);
    };
  }, [
    canonical,
    description,
    ogDescription,
    ogTitle,
    ogUrl,
    title,
    twitterDescription,
    twitterTitle,
  ]);
};

export const useJsonLd = (data, id) => {
  useEffect(() => {
    const existing = document.getElementById(id);
    if (!data) {
      if (existing) existing.remove();
      return undefined;
    }

    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const node = document.getElementById(id);
      if (node) node.remove();
    };
  }, [data, id]);
};