import { useEffect } from "react";
import { useSeoMeta } from "../seo";
import { PHONE, SITE_URL, getWhatsAppUrl } from "../siteConfig";
import { trackLeadClick, trackPageView } from "../analytics";
import InnerPageLayout from "../components/InnerPageLayout";

export default function SimpleArticlePage({ title, slug, description }) {
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

  return (
    <InnerPageLayout>
      <main className="article-layout container">
        <nav className="breadcrumbs">
          <a href="/">الرئيسية</a> / <a href="/articles">المقالات</a> / {title}
        </nav>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <p>
          هذه الصفحة جزء من خطة المحتوى SEO لاستهداف بحث العملاء في الرياض. يمكن
          توسيعها لاحقًا بمقال كامل وحالات عملية.
        </p>
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
            href={`tel:${PHONE}`}
            onClick={() =>
              trackLeadClick("call", "simple_article", { article_slug: slug })
            }
          >
            اتصال
          </a>
        </div>
      </main>
    </InnerPageLayout>
  );
}
