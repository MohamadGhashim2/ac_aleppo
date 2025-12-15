import { useEffect, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phone = "+966546087818";
  const waText = "مرحباً، أريد الاستفسار عن خدمة تكييف السيارات";
  const [showAll, setShowAll] = useState(false);

  // ⏱️ حالة العدّاد

  // ⏱️ منطق العدّاد 30 دقيقة مع localStorage

  const galleryItems = [
    {
      src: "gallery/ابو-حلب.webp",
      alt: " افضل اصلاح في الرياض",
      pos: "50% 40%",
    },
    {
      src: "/gallery/افضل-مصلح.webp",
      alt: "افضل اصلاح سيارات في الرياض",
      pos: "center",
    },
    { src: "/gallery/العاصمة-حلب.webp", alt: "كشف تهريب", pos: "60% 50%" },
    { src: "/gallery/النترا.webp", alt: "تنظيف الثلاجة", pos: "center" },
    {
      src: "/gallery/فحص-فريون-جهاز.webp",
      alt: "كامري",
      pos: "center",
    },
    {
      src: "/gallery/تصليح-كمبروسر-كورولا.webp",
      alt: "فحص إلكتروني",
      pos: "center",
    },
    { src: "/gallery/تغيير-فريون.webp", alt: "كورولا يارس", pos: "center" },
    {
      src: "/gallery/جيمس-مكيفات.webp",
      alt: "النترا سوناتا لكزس",
      pos: "center",
    },
    { src: "/gallery/سيارات-كوري.webp", alt: "مرسيدس اودي", pos: "center" },
    { src: "/gallery/صناعية-الرياض.webp", alt: "مرسيدس اودي", pos: "center" },
    {
      src: "/gallery/صناعية-النسيم.webp",
      alt: " ديزل افضل اصلاح سيارات غربي الرياض",
      pos: "center",
    },
    {
      src: "/gallery/صناعية-الرياض.webp",
      alt: "افضل مصلح مكيفات شرقي الرياض",
      pos: "center",
    },
    {
      src: "/gallery/تصليح-مكيفات.webp",
      alt: "واضف من عندك ايضاً اي شي متعلق بالتكييف",
      pos: "center",
    },
    { src: "/gallery/كشف-اعطال.webp", alt: "تصليح مكيفات", pos: "center" },
    { src: "/gallery/ميكانيكي.webp", alt: "تصليح كمبورسور", pos: "center" },
  ];

  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 5);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <>
      {/* الهيدر */}
      <header className="nav">
        <div className="container wrap">
          <strong style={{ color: "var(--brand)" }}>
            <img src="/images/logo.webp" alt="العاصمة حلب" height="50" />
          </strong>

          {/* روابط الدِسك توب */}
          <nav className="links">
            <a href="#services">الخدمات</a>
            <a href="#whyus">لماذا نحن</a>
            <a href="#gallery">أعمالنا</a>
            <a href="#faq">الأسئلة</a>
            <a href="#contact" className="btn whatsapp">
              تواصل
            </a>
          </nav>

          {/* زر منيو الجوال */}
          <div className="menu-btn" aria-hidden={false}>
            <button
              className="hamburger"
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <img src="/icons/menu.svg" alt="ابو حلب" width="24" height="24" />
            </button>
          </div>
        </div>
      </header>

      {/* الخلفية والمنيو */}
      {menuOpen && (
        <>
          <div className="backdrop" onClick={() => setMenuOpen(false)} />
          <nav
            id="mobile-drawer"
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
          >
            <div className="container">
              <a href="#services" onClick={() => setMenuOpen(false)}>
                الخدمات
              </a>
              <a href="#whyus" onClick={() => setMenuOpen(false)}>
                لماذا نحن
              </a>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>
                أعمالنا
              </a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>
                الأسئلة
              </a>
              <a
                href="#contact"
                className="btn whatsapp"
                onClick={() => setMenuOpen(false)}
              >
                تواصل
              </a>
              <button className="close" onClick={() => setMenuOpen(false)}>
                إغلاق القائمة
              </button>
            </div>
          </nav>
        </>
      )}

      {/* هيرو */}
      <section className="section hero" style={{ paddingTop: 40 }}>
        <div className="container grid hero-grid">
          {/* خلفية السيارة */}
          <div className="bg-car" aria-hidden="true" />
          <div data-aos="fade-up">
            <h1>تكييف سيارات بخبرة وضمان</h1>

            <p>
              صيانة وتعبئة فريون، كشف تهريب، تغيير كمبروسر، تنظيف ثلاجة، فحص
              إلكتروني… سرعة وجودة بأسعار مناسبة.
            </p>

            {/* فقرة SEO طبيعية */}
            <p className="seo-text">
              ورشة أبو حلب لتكييف السيارات في الرياض متخصصة في إصلاح مكيفات جميع
              السيارات: كامري، كورولا، يارس، النترا، سوناتا، لكزس، مرسيدس، بي إم
              دبليو، جينيسس، سيارات كورية وسيارات ديزل. نخدم صناعية النسيم، غرب
              الرياض وشرق الرياض مع أفضل إصلاح مكيف سيارات بأسعار مناسبة.
            </p>

            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn whatsapp"
                href={`https://wa.me/${phone.replace(
                  /\D/g,
                  ""
                )}?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noreferrer"
              >
                راسلنا واتساب
              </a>
              <a className="btn alt" href="#services">
                شاهد خدماتنا
              </a>
            </div>
            {/* صف الأيقونات */}
            <div className="social-row">
              <a
                className="social-btn"
                href=""
                target="_blank"
                rel="noreferrer"
                aria-label="Snapchat"
              >
                <img src="/icons/snapchat.svg" alt="ابو حلب صناعية النسيم" />
              </a>
              <a
                className="social-btn"
                href="https://www.instagram.com/abo_aleppo1"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src="/icons/instagram.svg" alt="تصليح مكيفات" />
              </a>
              <a
                className="social-btn"
                href="https://www.tiktok.com/@abohalp4?_t=ZS-90yjh3XbphM&_r=1"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <img src="/icons/tiktok.svg" alt="صناعية  النسيم" />
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="card banner-card"
            style={{ minHeight: 0, display: "block" }}
          >
            <img
              className="banner-media"
              src="images/Banner.webp"
              alt="الكترونيات حلب العاصمة - أفضل إصلاح مكيف سيارات في الرياض"
              width={500}
              height={220}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* الخدمات */}
      <section id="services" className="section services-wrap">
        <div
          className="car-services"
          data-aos="fade-right"
          aria-hidden="true"
        />
        <div className="container">
          <div className="services-content">
            <div className="offer-badge" data-aos="fade-left">
              <img
                className="offer-image"
                src="images/Machine.webp"
                data-aos="zoom-out"
                alt="عرض خاص"
              />

              <div className="offer-badge-price">
                <h3>
                  99 ريال <span>فقط</span>
                </h3>
              </div>

              <div className="offer-badge-text-title">
                <p>تعبئة فريون بأحدث الأجهزة</p>
              </div>

              <div className="offer-badge-text">
                <p>الحق العرض الآن (العرض محدود)</p>
              </div>
            </div>

            <h2
              className="underline-left"
              data-aos="fade-up"
              style={{ marginBottom: 18 }}
            >
              خدماتنا
            </h2>
            <p className="seo-text" data-aos="fade-up">
              نقدم أفضل إصلاح مكيفات سيارات في الرياض، تعبئة فريون بأحدث
              الأجهزة، كشف تهريب فريون، صيانة مواسير، تغيير كمبروسر، وتنظيف
              ثلاجة المكيف لمختلف أنواع السيارات اليابانية والكورية والألمانية،
              مع ضمان مكتوب وخدمة سريعة بالقرب من صناعية النسيم.
            </p>
            <div className="grid grid-services">
              {[
                ["تعبئة فريون", "فريون أصلي مع فحص ضغط."],
                ["كشف تهريب", "صبغة/نيتروجين وتحديد مكان التهريب."],
                ["تغيير كمبروسر", "وكالة/بديل مع ضمان."],
                ["تنظيف الثلاجة", "تحسين التبريد وإزالة الروائح."],
                ["فحص إلكتروني", "قراءة أعطال وحساسات."],
                ["صيانة المواسير", "استبدال/لحام مواسير التكييف."],
              ].map(([title, desc], i) => (
                <div key={i} className="card" data-aos="fade-up">
                  <h3 style={{ marginBottom: 8 }}>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* لماذا نحن */}
      <section
        id="whyus"
        className="section services-wrap"
        style={{ background: "#dbdbdbff" }}
      >
        <div
          className="car-services-1"
          data-aos="fade-left"
          aria-hidden="true"
        />

        <div className="container">
          <h2
            className="underline-left "
            data-aos="fade-up"
            style={{ marginBottom: 18 }}
          >
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-3 grid-services">
            {[
              ["ضمان مكتوب", "ضمان 3 أشهر على أعمال التكييف."],
              ["تشخيص دقيق", "أجهزة فحص حديثة."],
              ["سرعة بالإنجاز", "خدمة فورية حسب المواعيد."],
            ].map(([title, desc], i) => (
              <div key={i} className="card" data-aos="fade-up">
                <h3 style={{ marginBottom: 8 }}>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* من أعمالنا */}
      <section id="gallery" className="section services-wrap">
        <div
          className="car-services-2"
          data-aos="fade-right"
          aria-hidden="true"
        />

        <div className="container">
          <h2
            className="underline-left"
            data-aos="fade-up"
            style={{ marginBottom: 18 }}
          >
            من أعمالنا
          </h2>

          <div className="grid grid-3 grid-services">
            {visibleItems.map((g, i) => (
              <div key={i} className="card gallery-card" data-aos="zoom-in">
                <img
                  className="gallery-media"
                  src={g.src}
                  alt={g.alt}
                  width={300}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: g.pos }}
                />
              </div>
            ))}

            {!showAll && (
              <button
                type="button"
                className="card gallery-card more-card"
                onClick={() => setShowAll(true)}
                aria-label="عرض المزيد من الصور"
              >
                <div className="plus" aria-hidden="true">
                  +
                </div>
                <span className="more-label">عرض المزيد</span>
              </button>
            )}

            {showAll && (
              <button
                type="button"
                className="card gallery-card hide-card"
                onClick={() => setShowAll(false)}
                aria-label="إخفاء الصور الإضافية"
              >
                <span className="more-label">إخفاء</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section id="faq" className="section" style={{ background: "#dbdbdbff" }}>
        <div className="container">
          <h2
            className="underline-left "
            data-aos="fade-up"
            style={{ marginBottom: 18 }}
          >
            الأسئلة الشائعة
          </h2>
          <div className="grid">
            <div className="card" data-aos="fade-up">
              <strong>هل الفحص مدفوع؟</strong>
              <p>
                الفحص مبدئي مجاني—أحيانًا تُحسب رسوم رمزية تُخصم عند الإصلاح.
              </p>
            </div>
            <div className="card" data-aos="fade-up">
              <strong>ما مدة الضمان؟</strong>
              <p>ضمان مكتوب 3 أشهر على العمل (تفاصيل الضمان بالفاتورة).</p>
            </div>
          </div>
        </div>
      </section>

      {/* تواصل */}
      <section id="contact" className="section">
        <div className="container">
          <h2
            className="underline-left "
            data-aos="fade-up"
            style={{ marginBottom: 18 }}
          >
            التواصل والموقع
          </h2>
          <div className="card contact-section" data-aos="fade-up">
            <p style={{ marginBottom: 8 }}>
              واتساب:{" "}
              <a
                href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                7818 608 54 966+
              </a>
            </p>
            <p>السعودية – الرياض</p>
            <p>
              {" "}
              <a
                href="https://maps.app.goo.gl/AyVqY388NF9XLJMr7"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#000000ff" }}
              >
                الخريطة (إضغط لعرض الموقع)
              </a>
            </p>
            <p>ساعات العمل: يوميًا 10ص–10م</p>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="footer">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div>© {new Date().getFullYear()} العاصمة حلب – تكييف سيارات</div>
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href="https://www.instagram.com/abo_aleppo1"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff" }}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/100067570856327/posts/%D9%88%D8%B1%D8%B4%D8%A9-%D8%A7%D8%A8%D9%88-%D8%AD%D9%84%D8%A8-%D9%84%D9%84%D9%85%D9%83%D9%8A%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/997067369222282/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff" }}
            >
              Facebook
            </a>
            <a
              href="https://maps.app.goo.gl/AyVqY388NF9XLJMr7"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff" }}
            >
              الخريطة
            </a>
          </div>
        </div>
      </footer>

      {/* زر واتساب عائم */}
      <a
        className="whatsapp-fab"
        href={`https://wa.me/${phone.replace(
          /\D/g,
          ""
        )}?text=${encodeURIComponent(waText)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل واتساب"
      >
        <img src="/icons/whatsapp.svg" alt="واتساب" width="28" height="28" />
      </a>
    </>
  );
}
