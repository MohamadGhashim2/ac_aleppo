import { useEffect } from "react";
import { useJsonLd, useSeoMeta } from "../seo";
import { SITE_URL } from "../siteConfig";
import { trackPageView } from "../analytics";
import InnerPageLayout from "../components/InnerPageLayout";

const articles = [
  {
    title: "ليش مكيفي ما يبرد؟",
    slug: "/articles/why-ac-not-cooling-riyadh",
    excerpt: "أشهر الأسباب: نقص الفريون، انسداد الفلاتر، ضعف الكمبروسر.",
  },
  {
    title: "علامات تسريب فريون المكيف",
    slug: "/articles/ac-freon-leak-signs-riyadh",
    excerpt: "متى يكون نقص التبريد سببه تهريب فعلي وليس مجرد تعبئة؟",
  },
  {
    title: "المكيف يفصل ويشتغل بشكل متكرر",
    slug: "/articles/ac-cycles-on-off-riyadh",
    excerpt: "أسباب الفصل المتكرر وعلاقته بالحساس أو ضغط الفريون.",
  },
  {
    title: "ضعف تبريد المكيف وقت الظهر",
    slug: "/articles/ac-cooling-weak-at-noon-riyadh",
    excerpt:
      "كيف تؤثر حرارة الرياض العالية على كفاءة التكييف ومتى تكون المشكلة من المراوح؟",
  },
  {
    title: "ظهور رائحة من المكيف عند التشغيل",
    slug: "/articles/ac-smell-when-starting-riyadh",
    excerpt: "أسباب الرائحة المزعجة مع بداية التشغيل وخطوات المعالجة الصحيحة.",
  },
];

export default function ArticlesPage() {
  const canonical = `${SITE_URL}/articles`;
  const seoTitle = "مقالات مكيفات السيارات في الرياض | مشاكل الفريون والتبريد";
  const seoDescription =
    "مقالات أبو حلب لتكييف السيارات عن أعطال مكيف السيارة في الرياض: ضعف التبريد، نقص الفريون، تهريب الفريون، فصل الكمبروسر، الروائح، وفحص المكيف.";
  const keywords = [
    "مقالات مكيفات السيارات",
    "أعطال مكيف السيارة الرياض",
    "ضعف تبريد مكيف السيارة",
    "تهريب فريون السيارة",
    "نقص فريون السيارة",
    "تصليح مكيف سيارات الرياض",
    "فحص مكيف السيارة",
    "صناعية النسيم",
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
      "@type": "CollectionPage",
      name: "مقالات مكيفات السيارات في الرياض",
      description: seoDescription,
      inLanguage: "ar",
      url: canonical,
      publisher: {
        "@type": "Organization",
        name: "أبو حلب لتكييف السيارات",
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: article.title,
          url: `${SITE_URL}${article.slug}`,
        })),
      },
    },
    "articles-collection-jsonld",
  );

  useEffect(() => {
    trackPageView("articles_hub", "مقالات أعطال التكييف في الرياض");
  }, []);

  return (
    <InnerPageLayout>
      <main className="article-layout container">
        <h1>مقالات أعطال التكييف الأكثر بحثًا في الرياض</h1>
        <p className="lead">
          هذه الصفحات موجهة للعميل الذي يبحث في Google عن سبب عطل مكيف السيارة
          قبل زيارة الورشة: نقص الفريون، تهريب الفريون، ضعف التبريد، فصل
          الكمبروسر، أو رائحة المكيف.
        </p>

        <section className="card-list">
          {articles.map((item) => (
            <article key={item.slug} className="seo-card">
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <a className="article-link" href={item.slug}>
                اقرأ المقال
              </a>
            </article>
          ))}
        </section>

        <section className="seo-card landing-section">
          <h2>موضوعات يبحث عنها أصحاب السيارات في الرياض</h2>
          <p>
            نركز في هذه المقالات على مشاكل مكيف السيارة الأكثر شيوعًا في أجواء
            الرياض، مع شرح يساعدك تعرف متى تحتاج فحص ضغط، تعبئة فريون، كشف
            تهريب، أو صيانة كمبروسر.
          </p>
          <div className="car-chip-list" aria-label="كلمات بحث مقالات التكييف">
            {keywords.map((term) => (
              <span key={term}>{term}</span>
            ))}
          </div>
        </section>

        <a className="article-link" href="/services">
          عرض صفحة الخدمات
        </a>
      </main>
    </InnerPageLayout>
  );
}
