import { useEffect } from "react";
import { useJsonLd, useSeoMeta } from "../seo";
import { SITE_URL, getWhatsAppUrl } from "../siteConfig";
import { trackLeadClick, trackPageView } from "../analytics";
import InnerPageLayout from "../components/InnerPageLayout";

export default function ArticleNotCoolingPage() {
  const canonical = `${SITE_URL}/articles/why-ac-not-cooling-riyadh`;
  const businessName = "أبو حلب لتكييف السيارات";
  const seoTitle = "ليش مكيف السيارة ما يبرد؟ أسباب ضعف التبريد في الرياض";
  const seoDescription =
    "تعرف على أسباب ضعف تبريد مكيف السيارة في الرياض: نقص الفريون، تهريب الفريون، اتساخ الفلتر، ضعف الكمبروسر، ومتى تحتاج فحص مكيف السيارة في صناعية النسيم.";
  const keywords = [
    "ليش مكيف السيارة ما يبرد",
    "مكيف السيارة ما يبرد الرياض",
    "ضعف تبريد مكيف السيارة",
    "نقص فريون السيارة",
    "تهريب فريون مكيف السيارة",
    "فحص مكيف السيارة الرياض",
    "تصليح مكيف سيارات الرياض",
    "ورشة مكيفات سيارات صناعية النسيم",
    "أبو حلب لتكييف السيارات",
  ];

  useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    keywords: keywords.join(", "),
    canonical,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogUrl: canonical,
    twitterTitle: seoTitle,
    twitterDescription: seoDescription,
  });

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "ليش مكيف السيارة ما يبرد؟",
      inLanguage: "ar",
      description: seoDescription,
      author: {
        "@type": "Organization",
        name: businessName,
      },
      publisher: {
        "@type": "Organization",
        name: businessName,
      },
      datePublished: "2026-03-10",
      dateModified: "2026-05-19",
      keywords: keywords.join(", "),
      about: keywords,
      mainEntityOfPage: canonical,
    },
    "article-jsonld",
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
          name: "ليش مكيف السيارة ما يبرد؟",
          item: canonical,
        },
      ],
    },
    "article-not-cooling-breadcrumb-jsonld",
  );

  useEffect(() => {
    trackPageView("article", "ليش مكيف السيارة ما يبرد؟");
  }, []);

  return (
    <InnerPageLayout>
      <main className="article-layout container">
        <nav className="breadcrumbs">
          <a href="/">الرئيسية</a> / <a href="/articles">المقالات</a> / ليش
          مكيفي ما يبرد؟
        </nav>

        <h1>ليش مكيفي ما يبرد؟</h1>
        <p className="lead">
          هذا أكثر سؤال يبحث عنه العملاء في الرياض بالصيف. غالبًا المشكلة تكون
          في الفريون أو التبريد الداخلي، لكن التشخيص الصحيح يوفر عليك تكلفة
          ووقت.
        </p>

        <img
          className="article-hero"
          src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
          alt="فحص مكيف سيارة في ورشة"
          loading="lazy"
        />

        <section>
          <h2>أكثر 5 أسباب شائعة لضعف تبريد المكيف</h2>
          <ol>
            <li>نقص أو تهريب في الفريون.</li>
            <li>اتساخ فلتر المكيف أو الثلاجة الداخلية.</li>
            <li>ضعف في الكمبروسر أو كلتش الكمبروسر.</li>
            <li>مروحة التبريد لا تعمل بالكفاءة المطلوبة.</li>
            <li>انسداد في دورة الغاز أو بلف التمدد.</li>
          </ol>
        </section>

        <img
          className="article-hero"
          src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1200&q=80"
          alt="فني يتفقد ضغط فريون السيارة"
          loading="lazy"
        />

        <section>
          <h2>متى أقدر أحل المشكلة بنفسي؟</h2>
          <p>
            تقدر تبدأ بفحص بسيط مثل تنظيف الفلتر والتأكد من سرعة المروحة. إذا
            استمر الهواء حار أو التبريد يختفي مع الوقوف، الأفضل تتجه لفني متخصص.
          </p>
        </section>

        <section>
          <h2>متى لازم أحجز موعد فورًا؟</h2>
          <ul>
            <li>إذا المكيف صار يبرد ويقطع كل فترة قصيرة.</li>
            <li>إذا فيه صوت غير طبيعي عند تشغيل المكيف.</li>
            <li>إذا شمّيت ريحة غريبة أو لاحظت تسريب حول المواسير.</li>
          </ul>
        </section>

        <section className="seo-card landing-section">
          <h2>كلمات بحث مرتبطة بضعف تبريد مكيف السيارة</h2>
          <p>
            إذا كنت تبحث عن سبب ضعف تبريد مكيف السيارة أو نقص الفريون في
            الرياض، فالأفضل فحص ضغط المكيف والتأكد من عدم وجود تهريب قبل
            تغيير القطع.
          </p>
          <div className="car-chip-list" aria-label="كلمات بحث مرتبطة بالمقال">
            {keywords.slice(0, 8).map((term) => (
              <span key={term}>{term}</span>
            ))}
          </div>
        </section>

        <div className="cta-row">
          <a
            className="btn btn-green"
            href={getWhatsAppUrl(
              "السلام عليكم، قرأت مقال ليش المكيف ما يبرد وأبغى فحص",
            )}
            onClick={() =>
              trackLeadClick("whatsapp", "article_not_cooling", {
                article_slug: "why-ac-not-cooling-riyadh",
              })
            }
          >
            احجز عبر واتساب
          </a>
          <a
            className="btn btn-white"
            href={getWhatsAppUrl(
              "السلام عليكم، أريد حجز فحص بسبب ضعف تبريد المكيف",
            )}
            onClick={() =>
              trackLeadClick("whatsapp", "article_not_cooling_secondary", {
                article_slug: "why-ac-not-cooling-riyadh",
              })
            }
          >
            اطلب الخدمة عبر واتساب
          </a>
        </div>
      </main>
    </InnerPageLayout>
  );
}
