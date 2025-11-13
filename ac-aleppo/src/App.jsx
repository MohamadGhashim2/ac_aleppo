import { useEffect, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phone = "+966546087818";
  const waText = "مرحباً، أريد الاستفسار عن خدمة تكييف السيارات";
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    { src: "/gallery/Blue.png", alt: " افضل اصلاح في الرياض", pos: "50% 40%" },
    {
      src: "/gallery/secound.jpg",
      alt: "افضل اصلاح سيارات في الرياض",
      pos: "center",
    },
    { src: "/gallery/Third.jpg", alt: "كشف تهريب", pos: "60% 50%" },
    { src: "/gallery/Fourth.jpg", alt: "تنظيف الثلاجة", pos: "center" },
    { src: "/gallery/Six.jpg", alt: "فحص إلكتروني", pos: "center" },
    // أضف ما تشاء لاحقًا…
    { src: "/gallery/Seven.jpg", alt: "كامري", pos: "center" },
    { src: "/gallery/10.jpg", alt: "كورولا يارس", pos: "center" },
    { src: "/gallery/11.jpg", alt: "النترا سوناتا لكزس", pos: "center" },
    { src: "/gallery/12.jpg", alt: "مرسيدس اودي", pos: "center" },
    { src: "/gallery/13.jpg", alt: "مرسيدس اودي", pos: "center" },
    {
      src: "/gallery/14.jpg",
      alt: " ديزل افضل اصلاح سيارات غربي الرياض",
      pos: "center",
    },
    {
      src: "/gallery/15.jpg",
      alt: "افضل مصلح مكيفات شرقي الرياض",
      pos: "center",
    },
    {
      src: "/gallery/17.jpg",
      alt: "واضف من عندك ايضاً اي شي متعلق بالتكييف",
      pos: "center",
    },
    { src: "/gallery/18.jpg", alt: "تصليح مكيفات", pos: "center" },
    { src: "/gallery/nine.jpg", alt: "تصليح كمبورسور", pos: "center" },
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
            <img src="/images/logo.png" alt="العاصمة حلب" height="50" />
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
            style={{ minHeight: 0, display: "block" }} // نلغي grid لأننا نعرض صورة
          >
            <img
              className="banner-media"
              src="images/Banner.png" // ضع مسار صورتك
              alt="الكترونيات حلب العاصمة"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* الخدمات */}
      <section id="services" className="section services-wrap">
        <div className="car-services" data-aos="fade-up" aria-hidden="true" />
        <div className="container ">
          {/* السيارة خلف الكروت ومقصوصة بحدود الحاوية */}

          {/* نفس المحتوى السابق، بس داخل غلاف يعلّيه فوق السيارة */}
          <div className="services-content">
            <h2
              className="underline-left"
              data-aos="fade-up"
              style={{ marginBottom: 18 }}
            >
              خدماتنا
            </h2>

            <div className="grid grid-services">
              {/* نفس الماب تبع الكروت كما هو */}
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
        style={{ background: "#ff1500ff" }}
      >
        <div className="car-services-1" data-aos="fade-up" aria-hidden="true" />

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

      <section id="gallery" className="section services-wrap">
        {/* السيارة الخلفية للديكور – مقصوصة بحدود القسم */}
        <div className="car-services-2" data-aos="fade-up" aria-hidden="true" />

        <div className="container">
          <h2
            className="underline-left"
            data-aos="fade-up"
            style={{ marginBottom: 18 }}
          >
            من أعمالنا
          </h2>

          {/* مهم: الشبكة */}
          <div className="grid grid-3 grid-services">
            {visibleItems.map((g, i) => (
              <div key={i} className="card gallery-card" data-aos="zoom-in">
                <img
                  className="gallery-media"
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: g.pos }}
                />
              </div>
            ))}

            {/* مربع عرض المزيد داخل الشبكة */}
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

            {/* زر الإخفاء داخل الشبكة */}
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
      <section id="faq" className="section" style={{ background: "#ff8888ff" }}>
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
          <div className="card" data-aos="fade-up">
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
