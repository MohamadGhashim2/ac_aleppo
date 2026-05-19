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
  keywords = [],
  searchTerms = [],
}) {
  const canonical = `${SITE_URL}${slug}`;
  const businessName = "أبو حلب لتكييف السيارات";
  const articleKeywords = [
    title,
    "مكيف السيارة",
    "مكيف سيارات الرياض",
    "فريون السيارة",
    "تصليح مكيف سيارات",
    "صناعية النسيم",
    "أبو حلب لتكييف السيارات",
    ...keywords,
  ];
  const relatedSearchTerms =
    searchTerms.length > 0
      ? searchTerms
      : [
          `${title} الرياض`,
          "أعطال مكيف السيارة",
          "فحص مكيف السيارة",
          "صيانة مكيف سيارات الرياض",
        ];

  useSeoMeta({
    title: `${title} | مكيف سيارات الرياض | أبو حلب`,
    description,
    keywords: articleKeywords.join(", "),
    canonical,
    ogTitle: `${title} | مكيف سيارات الرياض | أبو حلب`,
    ogDescription: description,
    ogUrl: canonical,
    twitterTitle: `${title} | مكيف سيارات الرياض | أبو حلب`,
    twitterDescription: description,
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
        name: businessName,
      },
      publisher: {
        "@type": "Organization",
        name: businessName,
      },
      dateModified: "2026-05-19",
      datePublished: "2026-03-10",
      keywords: articleKeywords.join(", "),
      about: articleKeywords,
      articleSection: sections.map((section) => section.heading),
      articleBody: sections.flatMap((section) => section.paragraphs).join(" "),
    },
    `article-jsonld-${slug.replaceAll("/", "-")}`,
  );
  useJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "المقالات",
          item: `${SITE_URL}/articles`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: canonical,
        },
      ],
    },
    `article-breadcrumb-jsonld-${slug.replaceAll("/", "-")}`,
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
        <section className="seo-card landing-section">
          <h2>عبارات يبحث عنها العملاء</h2>
          <p>
            هذه المقالة تساعدك على فهم المشكلة قبل زيارة ورشة تكييف سيارات في
            الرياض، خصوصًا عند ضعف التبريد أو نقص الفريون أو الحاجة إلى فحص
            ضغط مكيف السيارة.
          </p>
          <div className="car-chip-list" aria-label="كلمات بحث مرتبطة بالمقال">
            {relatedSearchTerms.map((term) => (
              <span key={term}>{term}</span>
            ))}
          </div>
        </section>
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
