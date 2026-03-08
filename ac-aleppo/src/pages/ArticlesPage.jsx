import { useEffect } from "react";
import { useSeoMeta } from "../seo";
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
];

export default function ArticlesPage() {
  const canonical = `${SITE_URL}/articles`;

  useSeoMeta({
    title: "مقالات أعطال التكييف في الرياض | حلول مشاكل الفريون والتبريد",
    description:
      "مكتبة مقالات متخصصة لأكثر مشاكل تكييف السيارات شيوعًا في الرياض: ضعف التبريد، تهريب الفريون، فصل الكمبروسر ونصائح التشخيص.",
    canonical,
    ogUrl: canonical,
  });

  useEffect(() => {
    trackPageView("articles_hub", "مقالات أعطال التكييف في الرياض");
  }, []);

  return (
    <InnerPageLayout>
      <main className="article-layout container">
        <h1>مقالات أعطال التكييف الأكثر بحثًا في الرياض</h1>
        <p className="lead">
          هذه الصفحات موجهة للعميل الذي يبحث في Google عن سبب العطل قبل زيارة
          الورشة.
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

        <a className="article-link" href="/services">
          عرض صفحة الخدمات
        </a>
      </main>
    </InnerPageLayout>
  );
}
