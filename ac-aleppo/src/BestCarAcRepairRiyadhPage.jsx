import { LOCATION_LINK, PHONE, SITE_URL, getWhatsAppUrl } from "./siteConfig";
import { useJsonLd, useSeoMeta } from "./seo";

const pagePath = "/best-car-ac-repair-riyadh";

export default function BestCarAcRepairRiyadhPage() {
  useSeoMeta({
    title: "أفضل اصلاح مكيفات سيارات في الرياض | ورشة أبو حلب",
    description:
      "أفضل اصلاح مكيفات سيارات في الرياض بخبرة عملية وفحص دقيق: تعبئة فريون سيارات، فحص تسريب فريون، إصلاح كمبروسر مكيف السيارة وصيانة دورة التكييف بسرعة وضمان.",
    canonical: `${SITE_URL}${pagePath}`,
    ogUrl: `${SITE_URL}${pagePath}`,
  });

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: "ورشة أبو حلب لإصلاح مكيفات السيارات",
      url: `${SITE_URL}${pagePath}`,
      telephone: PHONE,
      areaServed: "الرياض",
      description:
        "خدمة أفضل اصلاح مكيفات سيارات في الرياض تشمل تعبئة فريون، فحص تسريب، إصلاح كمبروسر وصيانة مكيف السيارات.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "الرياض",
        addressCountry: "SA",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات إصلاح مكيفات السيارات",
        itemListElement: [
          "تعبئة فريون سيارات",
          "فحص تسريب فريون",
          "إصلاح كمبروسر مكيف السيارة",
          "تنظيف دورة التكييف",
          "صيانة ثلاجة المكيف",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    "landing-auto-repair-jsonld",
  );

  return (
    <>
      <header className="nav nav-static">
        <div className="container wrap">
          <a href="/" className="logo-container">
            <img
              src="/images/logo.webp"
              alt="شعار ورشة أبو حلب"
              width="120"
              height="60"
            />
          </a>
          <nav className="links links-force-show">
            <a href="#services">الخدمات</a>
            <a href="#riyadh">خدمتنا في الرياض</a>
            <a href="#faq">الأسئلة الشائعة</a>
          </nav>
          <div className="desktop-actions desktop-actions-force-show">
            <a
              href={`tel:${PHONE}`}
              className="icon-btn call-mobile"
              aria-label="اتصل الآن"
            >
              <img src="/icons/phone.svg" width="22" height="22" alt="اتصال" />
            </a>
            <a
              href={getWhatsAppUrl(
                "السلام عليكم، أحتاج أفضل اصلاح مكيفات سيارات في الرياض",
              )}
              className="icon-btn whatsapp"
              aria-label="واتساب"
            >
              <img
                src="/icons/whatsapp.svg"
                width="22"
                height="22"
                alt="واتساب"
              />
            </a>
          </div>
        </div>
      </header>

      <main className="landing-main">
        <section className="section hero landing-hero">
          <div className="container grid hero-grid">
            <div className="hero-text-content animate-pop-in">
              <h1 className="hero-title">أفضل اصلاح مكيفات سيارات في الرياض</h1>
              <p className="hero-desc">
                إذا كنت تبحث عن أفضل اصلاح مكيفات سيارات في الرياض، نوفر لك خدمة
                احترافية تشمل التشخيص الدقيق، إصلاح الأعطال بسرعة، وضبط أداء
                التبريد بما يناسب حرارة الرياض طوال السنة.
              </p>
              <div className="hero-actions">
                <a href={`tel:${PHONE}`} className="btn btn-red btn-block">
                  اتصل الآن
                </a>
                <a
                  href={getWhatsAppUrl(
                    "السلام عليكم، أحتاج فحص مكيف السيارة اليوم",
                  )}
                  className="btn btn-green btn-block"
                >
                  واتساب
                </a>
                <a
                  href={LOCATION_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-white btn-block"
                >
                  احصل على موقع الورشة
                </a>
              </div>
            </div>
            <div className="hero-car-container">
              <img
                src="/images/Best-repairs-in-East-Riyadh.webp"
                alt="أفضل اصلاح مكيفات سيارات في الرياض داخل ورشة متخصصة"
                width="857"
                height="381"
                className="hero-car-img"
              />
            </div>
          </div>
        </section>

        <section id="whyus" className="section">
          <div className="container">
            <h2 className="section-header">لماذا نحن خيارك الأفضل</h2>
            <div className="grid whyus-grid">
              {[
                [
                  "خبرة عملية",
                  "خبرة يومية في صيانة مكيف السيارات بمختلف الموديلات.",
                ],
                ["تشخيص دقيق", "فحص احترافي لتحديد السبب الحقيقي قبل الإصلاح."],
                ["سرعة الخدمة", "استلام وفحص وتنفيذ سريع لتقليل وقت الانتظار."],
                ["أسعار مناسبة", "تسعير واضح مقابل خدمة موثوقة وجودة تنفيذ."],
                ["فحص شامل", "فحص تسريب وفريون وكمبروسر ضمن خطوات الصيانة."],
              ].map(([title, desc]) => (
                <div key={title} className="why-card">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <h2 className="section-header">
              خدمات ورشة إصلاح مكيف سيارات بالرياض
            </h2>
            <p className="section-sub">
              نقدم باقة كاملة لمن يبحث عن أفضل اصلاح مكيفات سيارات وأداء تبريد
              ثابت داخل المدينة.
            </p>
            <div className="grid services-grid">
              {[
                "تعبئة فريون سيارات",
                "فحص تسريب فريون",
                "إصلاح كمبروسر مكيف السيارة",
                "تنظيف دورة التكييف",
                "صيانة ثلاجة المكيف",
                "فحص ضعف التبريد",
              ].map((service) => (
                <div key={service} className="service-card">
                  <h3>{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="riyadh" className="section">
          <div className="container landing-highlight-card">
            <h2>خدمة مخصصة لعملاء الرياض</h2>
            <p>
              نخدم عملاء الرياض بسرعة وصول ممتازة، خصوصًا الباحثين عن ورشة تكييف
              سيارات بالرياض تقدم فحصًا واضحًا وحلًا عمليًا من أول زيارة قدر
              الإمكان. فريقنا يعرف أعطال التكييف الشائعة بسبب الحرارة العالية
              والزحام.
            </p>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <h2 className="section-header">الأسئلة الشائعة</h2>
            <div className="faq-grid">
              {[
                [
                  "كم يستغرق فحص المكيف؟",
                  "غالبًا من 15 إلى 30 دقيقة حسب نوع العطل.",
                ],
                [
                  "هل تعبئة الفريون وحدها تكفي؟",
                  "ليس دائمًا، لذلك نبدأ بفحص تسريب فريون قبل التعبئة.",
                ],
                [
                  "متى أحتاج إصلاح كمبروسر مكيف السيارة؟",
                  "عند وجود صوت غير طبيعي أو ضعف تبريد مستمر بعد الفحص.",
                ],
                [
                  "هل تقدمون خدمة لجميع أنواع السيارات؟",
                  "نعم، نستقبل السيارات اليابانية والكورية والأوروبية والأمريكية.",
                ],
                [
                  "هل يوجد ضمان على الخدمة؟",
                  "نعم، توضيح الضمان يكون حسب نوع القطعة أو الإصلاح المنفذ.",
                ],
                [
                  "هل أنتم مناسبون لمن يبحث عن أفضل اصلاح مكيفات سيارات؟",
                  "نعم، لأننا نركز على التشخيص الصحيح والجودة قبل أي شيء.",
                ],
              ].map(([q, a]) => (
                <div key={q} className="faq-card">
                  <h4>{q}</h4>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container landing-highlight-card">
            <h2>احجز الآن وتأكد من برودة مكيف سيارتك</h2>
            <p>
              اتصل أو راسلنا واتساب الآن إذا كنت تحتاج صيانة مكيف السيارات بسرعة
              داخل الرياض.
            </p>
            <div className="hero-actions">
              <a href={`tel:${PHONE}`} className="btn btn-red">
                اتصل الآن
              </a>
              <a
                href={getWhatsAppUrl(
                  "السلام عليكم، أحتاج موعد صيانة مكيف السيارة",
                )}
                className="btn btn-green"
              >
                تواصل واتساب
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h3 className="section-header">روابط داخلية مفيدة</h3>
            <div className="landing-internal-links">
              <a className="btn btn-white" href="/#services">
                خدماتنا الرئيسية
              </a>
              <a className="btn btn-white" href="/#gallery">
                أعمالنا السابقة
              </a>
              <a className="btn btn-white" href="/#faq">
                الأسئلة في الصفحة الرئيسية
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="footer-col info">
            <img
              src="/images/logo.webp"
              alt="شعار ورشة أبو حلب"
              width="120"
              height="65"
              loading="lazy"
              className="footer-logo"
            />
            <p className="footer-desc">
              ورشة إصلاح مكيف سيارات بالرياض بخدمة سريعة وتشخيص واضح وأسعار
              مناسبة.
            </p>
            <a
              href={LOCATION_LINK}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-row hover-effect"
            >
              <img
                src="/icons/pin.svg"
                width="20"
                height="20"
                alt="موقع الورشة"
              />
              <span>صناعية النسيم - الرياض</span>
            </a>
            <div className="footer-contact-row">
              <img
                src="/icons/phone.svg"
                width="20"
                height="20"
                alt="رقم الاتصال"
              />
              <span>{PHONE}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
