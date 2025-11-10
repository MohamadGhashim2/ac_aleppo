import { useEffect, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const phone = "+9665XXXXXXXX"; // ضع رقمك السعودي هنا
  const waText = "مرحباً، أريد الاستفسار عن خدمة تكييف السيارات";
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
      {/* شريط علوي */}
      <header className="nav">
        <div className="container wrap">
          <strong style={{ color: "var(--brand)" }}>
            <img src="images/logo.png" alt="" height="50px" />
          </strong>
          {/* روابط الدِسك توب */}
          <nav className="links">
            <a href="#services">الخدمات</a>
            <a href="#whyus">لماذا نحن</a>
            <a href="#gallery">أعمالنا</a>
            <a href="#faq">الأسئلة</a>
            <a
              href="#contact"
              className="btn_1"
              style={{ marginInlineStart: 8 }}
            >
              تواصل
            </a>
          </nav>
          {/* زر الهامبرغر للجوال */}
          <div className="menu-btn" aria-hidden={false}>
            <button
              className="hamburger"
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <img src="/icons/menu.svg" alt="القائمة" width="24" height="24" />
            </button>
          </div>
        </div>
      </header>
      {/* الخلفية + اللوحة (تظهر عند الفتح) */}
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
                className="btn_1"
                onClick={() => setMenuOpen(false)}
              >
                تواصل
              </a>
              <button className="close" onClick={() => setMenuOpen(false)}>
                X
              </button>
            </div>
          </nav>
        </>
      )}
      {/* هيرو */}
      <section className="section hero" style={{ paddingTop: 40 }}>
        <div className="container grid hero-grid" /* صارت تُضبط من CSS */>
          {/* الخلفية المتحركة للسيارة */}
          <div className="bg-car" aria-hidden="true" />
          <div data-aos="fade-up">
            <h1>تكييف سيارات بخبرة وضمان</h1>
            <p>
              صيانة وتعبئة فريون، كشف تهريب، تغيير كمبروسر، تنظيف ثلاجة، فحص
              إلكتروني… سرعة وجودة بأسعار مناسبة.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn_1"
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
          </div>
          <div
            data-aos="zoom-in"
            className="card"
            style={{ minHeight: 160, display: "grid", placeItems: "center" }}
          >
            بانر/صورة لاحقًا
          </div>
        </div>
      </section>

      {/* الخدمات */}
      <section id="services" className="section">
        <div className="container">
          <h2 data-aos="fade-up" style={{ marginBottom: 18 }}>
            خدماتنا
          </h2>
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
      </section>

      {/* لماذا نحن */}
      <section
        id="whyus"
        className="section"
        style={{ background: "#070707ff" }}
      >
        <div className="container">
          <h2 data-aos="fade-up" style={{ marginBottom: 18 }}>
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-3">
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

      {/* أعمالنا */}
      <section id="gallery" className="section">
        <div className="container">
          <h2 data-aos="fade-up" style={{ marginBottom: 18 }}>
            من أعمالنا
          </h2>
          <div className="grid grid-3">
            <div className="card" data-aos="zoom-in">
              صورة قبل/بعد
            </div>
            <div className="card" data-aos="zoom-in">
              تبديل كمبروسر
            </div>
            <div className="card" data-aos="zoom-in">
              كشف تهريب
            </div>
          </div>
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section id="faq" className="section" style={{ background: "#070707ff" }}>
        <div className="container">
          <h2 data-aos="fade-up" style={{ marginBottom: 18 }}>
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
          <h2 data-aos="fade-up" style={{ marginBottom: 18 }}>
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
                {phone}
              </a>
            </p>
            <p>السعودية – (ضع مدينتك هنا)</p>
            <p>ساعات العمل: يوميًا 10ص–8م</p>
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
              href="https://instagram.com/yourbrand"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff" }}
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/yourbrand"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff" }}
            >
              Facebook
            </a>
            <a
              href="https://maps.google.com/?q=your+location"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff" }}
            >
              الخريطة
            </a>
          </div>
        </div>
      </footer>

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
        <img
          src="/icons/whatsapp.svg"
          alt="واتساب"
          width="45vw"
          height="45vw"
        />
      </a>
    </>
  );
}
