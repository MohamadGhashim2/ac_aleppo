import { useEffect } from "react";
import { useJsonLd, useSeoMeta } from "../seo";
import { LOCATION_LINK, PHONE, getWhatsAppUrl } from "../siteConfig";
import { trackLeadClick, trackPageView } from "../analytics";
import InnerPageLayout from "../components/InnerPageLayout";

const canonical = "https://www.abu-halab.com/r1234yf-car-ac-gas-riyadh";
const whatsappMessage = `السلام عليكم، أريد الاستفسار عن تعبئة فريون R1234yf للسيارة.
نوع السيارة:
موديل السيارة:`;
const callHref = `tel:${PHONE.replace(/\s/g, "")}`;
const mediaBasePath = "/assets/r1234yf";

const quickPoints = [
  "فريون R1234yf للسيارات الحديثة",
  "فحص ضغط وتبريد قبل التعبئة",
  "كشف تهريب الفريون عند الحاجة",
  "خدمة متخصصة في صناعية النسيم",
  "اتصال وواتساب مباشر",
];

const needPoints = [
  "المكيف يطلع هواء حار أو تبريده ضعيف",
  "التبريد يضعف وقت الظهر",
  "الفريون ينقص بعد فترة قصيرة",
  "الكمبروسر يفصل ويشتغل كثير",
  "السيارة حديثة وتحتاج نوع فريون مختلف عن R134a",
];

const serviceSteps = [
  "فحص نوع الفريون المناسب للسيارة",
  "فحص ضغط المكيف",
  "التأكد من عدم وجود تهريب واضح",
  "تعبئة فريون R1234yf",
  "تجربة التبريد قبل تسليم السيارة",
];

const trustPoints = [
  "ورشة متخصصة في مكيفات السيارات",
  "خبرة في فحص التبريد والتهريب والكمبروسر",
  "موقعنا في الرياض - صناعية النسيم",
  "خدمة مباشرة عبر اتصال أو واتساب",
  "مناسب للسيارات اليابانية والكورية والألمانية والصينية",
];

const targetCars = [
  "كامري",
  "كورولا",
  "يارس",
  "النترا",
  "سوناتا",
  "لكزس",
  "مرسيدس",
  "بي إم دبليو",
  "جينيسس",
];

const faqs = [
  {
    question: "هل كل السيارات تستخدم R1234yf؟",
    answer:
      "لا، بعض السيارات تستخدم R134a وبعض السيارات الحديثة تستخدم R1234yf، لذلك نفحص نوع الفريون المناسب قبل التعبئة.",
  },
  {
    question: "هل يتم فحص التهريب قبل التعبئة؟",
    answer:
      "نعم، يتم فحص حالة المكيف والضغط، وإذا كان هناك نقص متكرر في الفريون يتم تنبيه العميل لاحتمال وجود تهريب.",
  },
  {
    question: "هل الخدمة متوفرة في الرياض؟",
    answer:
      "نعم، الخدمة متوفرة لدى أبو حلب لتكييف السيارات في الرياض - صناعية النسيم.",
  },
  {
    question: "هل أستطيع الحجز عبر واتساب؟",
    answer: "نعم، يمكنك التواصل مباشرة عبر واتساب أو الاتصال.",
  },
];

function R1234yfMediaSection() {
  return (
    <section className="seo-card landing-section r1234yf-proof-section">
      <div className="r1234yf-proof-video">
        <video
          src={`${mediaBasePath}/r1234yf-service.mp4`}
          poster={`${mediaBasePath}/r1234yf-photo-1.webp`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="فيديو يوضح جهاز تعبئة وفحص فريون R1234yf في أبو حلب لتكييف السيارات"
        />
      </div>

      <div className="r1234yf-proof-copy">
        <span className="landing-eyebrow">Media Proof</span>
        <h2>خدمة فريون R1234yf متوفرة الآن</h2>
        <p>
          وفرنا في أبو حلب لتكييف السيارات جهاز تعبئة وفحص فريون R1234yf
          المخصص للسيارات الحديثة، مع فحص ضغط وتبريد المكيف قبل التعبئة للتأكد
          من أن الخدمة مناسبة لسيارتك.
        </p>

        <ul className="quick-check-list">
          <li>فريون R1234yf للسيارات الحديثة</li>
          <li>فحص ضغط المكيف قبل التعبئة</li>
          <li>كشف نقص أو تهريب الفريون عند الحاجة</li>
          <li>الخدمة متوفرة في الرياض - صناعية النسيم</li>
        </ul>

        <div className="r1234yf-proof-gallery">
          <img
            src={`${mediaBasePath}/r1234yf-photo-1.webp`}
            alt="جهاز تعبئة فريون R1234yf في أبو حلب لتكييف السيارات"
            width="360"
            height="460"
            loading="lazy"
          />
          <img
            src={`${mediaBasePath}/r1234yf-photo-2.webp`}
            alt="فريون R1234yf للسيارات الحديثة"
            width="360"
            height="460"
            loading="lazy"
          />
          <img
            src={`${mediaBasePath}/r1234yf-photo-3.webp`}
            alt="خدمة تعبئة فريون R1234yf في الرياض"
            width="360"
            height="460"
            loading="lazy"
          />
        </div>

        <div className="cta-row r1234yf-cta-row">
          <a
            className="btn btn-green"
            href={getWhatsAppUrl(whatsappMessage)}
            onClick={() =>
              trackLeadClick("whatsapp", "r1234yf_media_whatsapp")
            }
          >
            اسأل عن فريون R1234yf
          </a>
          <a
            className="btn btn-red"
            href={callHref}
            onClick={() => trackLeadClick("phone", "r1234yf_media_call")}
          >
            اتصل الآن
          </a>
        </div>
      </div>
    </section>
  );
}

export default function R1234yfLandingPage() {
  useSeoMeta({
    title: "تعبئة فريون R1234yf بالرياض | أبو حلب لتكييف السيارات",
    description:
      "خدمة تعبئة فريون R1234yf للسيارات الحديثة في الرياض لدى أبو حلب لتكييف السيارات. فحص مكيف السيارة، كشف تهريب، واتصال أو واتساب مباشر.",
    canonical,
    ogTitle: "تعبئة فريون R1234yf بالرياض | أبو حلب لتكييف السيارات",
    ogDescription:
      "خدمة تعبئة فريون R1234yf للسيارات الحديثة في الرياض لدى أبو حلب لتكييف السيارات. فحص مكيف السيارة، كشف تهريب، واتصال أو واتساب مباشر.",
    ogUrl: canonical,
    twitterTitle: "تعبئة فريون R1234yf بالرياض | أبو حلب لتكييف السيارات",
    twitterDescription:
      "خدمة تعبئة فريون R1234yf للسيارات الحديثة في الرياض لدى أبو حلب لتكييف السيارات. فحص مكيف السيارة، كشف تهريب، واتصال أو واتساب مباشر.",
  });

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "تعبئة فريون R1234yf للسيارات الحديثة",
      provider: {
        "@type": "AutoRepair",
        name: "أبو حلب لتكييف السيارات",
        telephone: PHONE,
        areaServed: "Riyadh",
      },
      areaServed: "Riyadh",
      serviceType: "Car AC R1234yf Refrigerant Recharge",
      url: canonical,
    },
    "r1234yf-service-jsonld",
  );

  useEffect(() => {
    trackPageView(
      "service_landing",
      "تعبئة فريون R1234yf للسيارات الحديثة في الرياض",
    );
  }, []);

  return (
    <InnerPageLayout businessName="أبو حلب لتكييف السيارات">
      <main className="article-layout r1234yf-page container">
        <nav className="breadcrumbs">
          <a href="/">الرئيسية</a> / <a href="/services">الخدمات</a> / تعبئة
          فريون R1234yf
        </nav>

        <section className="r1234yf-hero">
          <div className="r1234yf-hero-copy">
            <span className="landing-eyebrow">خدمة جديدة للسيارات الحديثة</span>
            <h1>تعبئة فريون R1234yf للسيارات الحديثة في الرياض</h1>
            <p className="lead">
              إذا كانت سيارتك من الموديلات الحديثة وتحتاج فريون R1234yf، نوفر
              لك في أبو حلب لتكييف السيارات خدمة فحص وتعبئة فريون مخصصة
              للسيارات الحديثة داخل الرياض - صناعية النسيم.
            </p>

            <ul className="quick-check-list">
              {quickPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="cta-row r1234yf-cta-row">
              <a
                className="btn btn-green"
                href={getWhatsAppUrl(whatsappMessage)}
                onClick={() => trackLeadClick("whatsapp", "r1234yf_whatsapp")}
              >
                واتساب الآن
              </a>
              <a
                className="btn btn-red"
                href={callHref}
                onClick={() => trackLeadClick("phone", "r1234yf_call")}
              >
                اتصال مباشر
              </a>
            </div>
          </div>

          <div className="seo-card r1234yf-media-card">
            <img
              src="/gallery/فحص-فريون-جهاز.webp"
              alt="فحص وتعبئة فريون مكيف السيارة"
              width="520"
              height="420"
              loading="eager"
            />
            <p>فحص ضغط وتبريد قبل تعبئة فريون السيارات الحديثة.</p>
          </div>
        </section>

        <R1234yfMediaSection />

        <section className="seo-card landing-section">
          <h2>ما هو فريون R1234yf؟</h2>
          <p>
            R1234yf هو نوع فريون مستخدم في كثير من السيارات الحديثة. يحتاج إلى
            جهاز مناسب وفني يعرف طريقة فحص ضغط المكيف والتأكد من عدم وجود تهريب
            قبل التعبئة، حتى لا يرجع ضعف التبريد مرة ثانية.
          </p>
        </section>

        <section className="landing-section">
          <h2>متى تحتاج تعبئة فريون R1234yf؟</h2>
          <div className="card-list landing-card-grid">
            {needPoints.map((point) => (
              <article className="seo-card compact-card" key={point}>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section">
          <h2>طريقة الخدمة في أبو حلب</h2>
          <ol className="step-list">
            {serviceSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="seo-card landing-section">
          <h2>لماذا أبو حلب لتكييف السيارات؟</h2>
          <ul className="quick-check-list two-columns">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="landing-section">
          <h2>خدمة مناسبة للسيارات الحديثة</h2>
          <p>
            نوفر فحص وتعبئة فريون للعديد من السيارات الحديثة حسب نوع النظام
            المستخدم في السيارة.
          </p>
          <div className="car-chip-list" aria-label="أمثلة السيارات">
            {targetCars.map((car) => (
              <span key={car}>{car}</span>
            ))}
          </div>
          <p className="landing-note">
            يتم التأكد من نوع الفريون المناسب قبل التعبئة.
          </p>
        </section>

        <section className="landing-section">
          <h2>روابط مفيدة قبل الزيارة</h2>
          <div className="internal-link-grid">
            <a href="/">الصفحة الرئيسية</a>
            <a href="/services">صفحة الخدمات</a>
            <a href="/services">خدمة تعبئة الفريون</a>
            <a href="/best-car-ac-repair-riyadh">إصلاح مكيف السيارة</a>
          </div>
        </section>

        <section className="landing-section" id="faq">
          <h2>أسئلة شائعة عن R1234yf</h2>
          <div className="faq-grid">
            {faqs.map((item) => (
              <article className="faq-card" key={item.question}>
                <h4>
                  {item.question} <span className="plus">+</span>
                </h4>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="final-landing-cta">
          <h2>تحتاج تعبئة فريون R1234yf الآن؟</h2>
          <p>
            راسل أبو حلب لتكييف السيارات وحدد نوع سيارتك وموديلها، ونساعدك
            بتحديد الخدمة المناسبة.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-green"
              href={getWhatsAppUrl(whatsappMessage)}
              onClick={() =>
                trackLeadClick("whatsapp", "r1234yf_whatsapp_final")
              }
            >
              واتساب الآن
            </a>
            <a
              className="btn btn-red"
              href={callHref}
              onClick={() => trackLeadClick("phone", "r1234yf_call_final")}
            >
              اتصال مباشر
            </a>
            <a
              className="btn btn-white"
              href={LOCATION_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLeadClick("location", "r1234yf_location")}
            >
              موقع الورشة
            </a>
          </div>
        </section>
      </main>
    </InnerPageLayout>
  );
}
