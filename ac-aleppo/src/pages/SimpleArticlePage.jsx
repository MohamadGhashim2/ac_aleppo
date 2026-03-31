import { useEffect } from "react";
import { useJsonLd, useSeoMeta } from "../seo";
import { SITE_URL, getWhatsAppUrl } from "../siteConfig";
import { trackLeadClick, trackPageView } from "../analytics";
import InnerPageLayout from "../components/InnerPageLayout";

export default function SimpleArticlePage({
  title,
  slug,
  description,
  sections = [],
}) {
  const canonical = `${SITE_URL}${slug}`;

  useSeoMeta({
    title: `${title} | نصائح أعطال التكييف في الرياض`,
    description,
    canonical,
    ogUrl: canonical,
  });

  useEffect(() => {
    trackPageView("article", title);
  }, [title]);
  useJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      inLanguage: "ar",
      description,
      mainEntityOfPage: canonical,
      author: {
        "@type": "Organization",
        name: "العاصمة حلب لتكييف السيارات",
      },
      articleSection: sections.map((section) => section.heading),
      articleBody: sections.flatMap((section) => section.paragraphs).join(" "),
    },
    `article-jsonld-${slug.replaceAll("/", "-")}`,
  );
  return (
    <InnerPageLayout>
      <main className="article-layout container">
        <nav className="breadcrumbs">
          <a href="/">الرئيسية</a> / <a href="/articles">المقالات</a> / {title}
        </nav>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {sections.map((section) => (
          <section key={section.heading} className="article-section">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, idx) => (
              <p key={`${section.heading}-${idx}`}>{paragraph}</p>
            ))}
          </section>
        ))}
        <div className="cta-row">
          <a
            className="btn btn-green"
            href={getWhatsAppUrl(`السلام عليكم، أبغى فحص بخصوص: ${title}`)}
            onClick={() =>
              trackLeadClick("whatsapp", "simple_article", {
                article_slug: slug,
              })
            }
          >
            واتساب
          </a>
          <a
            className="btn btn-white"
            href={getWhatsAppUrl(`السلام عليكم، أريد حجز خدمة بخصوص: ${title}`)}
            onClick={() =>
              trackLeadClick("whatsapp", "simple_article_secondary", {
                article_slug: slug,
              })
            }
          >
            احجز عبر واتساب
          </a>
        </div>
      </main>
    </InnerPageLayout>
  );
}
