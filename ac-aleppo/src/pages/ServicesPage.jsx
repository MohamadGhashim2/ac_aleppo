import { useEffect } from "react";
import { useJsonLd, useSeoMeta } from "../seo";
import { PHONE, SITE_URL, getWhatsAppUrl } from "../siteConfig";
import { trackLeadClick, trackPageView } from "../analytics";
import InnerPageLayout from "../components/InnerPageLayout";

const services = [
  {
    title: "تعبئة فريون مع فحص ضغط",
    description: "نتأكد من نوع الغاز المناسب ونقيس الضغط قبل وبعد التعبئة.",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "كشف تهريب الفريون",
    description: "كشف دقيق لمكان التسريب باستخدام أدوات فحص احترافية.",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "إصلاح الكمبروسر",
    description: "تشخيص سبب ضعف التبريد وإصلاح أو استبدال القطعة التالفة.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "تنظيف دورة التبريد",
    description: "تنظيف الثلاجة والمجرى الداخلي لتحسين كفاءة التبريد.",
    image:
      "https://images.unsplash.com/photo-1632823471565-1ecf9fca3f90?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  const canonical = `${SITE_URL}/services`;

  useSeoMeta({
    title: "خدمات تكييف السيارات في الرياض | تعبئة فريون وإصلاح كمبروسر",
    description:
      "خدمات إصلاح مكيف السيارات في الرياض: تعبئة فريون، كشف تسريب، إصلاح كمبروسر وتنظيف دورة التبريد مع فحص دقيق وحجز سريع عبر واتساب.",
    canonical,
    ogUrl: canonical,
  });

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "خدمات تكييف السيارات في الرياض",
      areaServed: "Riyadh",
      provider: {
        "@type": "AutoRepair",
        name: "العاصمة حلب لتكييف السيارات",
        telephone: PHONE,
      },
      serviceType: "إصلاح مكيفات سيارات وتعبئة فريون",
      url: canonical,
    },
    "services-jsonld",
  );

  useEffect(() => {
    trackPageView("services", "خدمات تكييف السيارات في الرياض");
  }, []);

  return (
    <InnerPageLayout>
      <main className="article-layout container">
        <h1>خدمات تكييف السيارات في الرياض</h1>
        <p className="lead">
          نقدم خدمة متخصصة لأعطال التكييف والتبريد في الرياض مع فحص شامل وشرح
          واضح قبل الإصلاح.
        </p>

        <section className="card-list">
          {services.map((service) => (
            <article className="seo-card service-card" key={service.title}>
              <img
                className="service-card-image"
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </section>

        <div className="cta-row">
          <a
            className="btn btn-green"
            href={getWhatsAppUrl(
              "السلام عليكم، أبغى حجز خدمة تكييف سيارات في الرياض",
            )}
            onClick={() => trackLeadClick("whatsapp", "services_page")}
          >
            تواصل واتساب
          </a>
          <a
            className="btn btn-white"
            href={getWhatsAppUrl(
              "السلام عليكم، أريد حجز خدمة تكييف سيارات في الرياض",
            )}
            onClick={() =>
              trackLeadClick("whatsapp", "services_page_secondary")
            }
          >
            احجز عبر واتساب
          </a>
        </div>

        <p>
          تصفح أيضًا <a href="/articles">مقالات الأعطال الشائعة</a> لمعرفة
          الأسباب قبل الزيارة.
        </p>
      </main>
    </InnerPageLayout>
  );
}
