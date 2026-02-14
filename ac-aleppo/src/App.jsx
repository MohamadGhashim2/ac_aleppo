import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phone = "+966546087818";
  const [showAll, setShowAll] = useState(false);
  const locationLink = "https://maps.app.goo.gl/HEv9z2j2GvYXzhUR7";
  // دالة لتجهيز رابط واتساب
  const getWhatsAppUrl = (message) => {
    const cleanPhone = phone.replace(/\D/g, "");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return systemPrefersDark ? "dark" : "light";
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);
  const galleryItems = [
    {
      src: "/gallery/ابو-حلب.webp",
      alt: "افضل اصلاح في الرياض",
      pos: "50% 40%",
    },
    { src: "/gallery/افضل-مصلح.webp", alt: "افضل اصلاح سيارات", pos: "center" },
    { src: "/gallery/العاصمة-حلب.webp", alt: "كشف تهريب", pos: "60% 50%" },
    { src: "/gallery/النترا.webp", alt: "تنظيف الثلاجة", pos: "center" },
    { src: "/gallery/فحص-فريون-جهاز.webp", alt: "كامري", pos: "center" },
    {
      src: "/gallery/تصليح-كمبروسر-كورولا.webp",
      alt: "فحص إلكتروني",
      pos: "center",
    },
    { src: "/gallery/تغيير-فريون.webp", alt: "كورولا يارس", pos: "center" },
    { src: "/gallery/جيمس-مكيفات.webp", alt: "النترا سوناتا", pos: "center" },
    { src: "/gallery/سيارات-كوري.webp", alt: "مرسيدس اودي", pos: "center" },
    { src: "/gallery/صناعية-الرياض.webp", alt: "صناعية الرياض", pos: "center" },
    {
      src: "/gallery/صناعية-النسيم.webp",
      alt: "اصلاح سيارات غربي الرياض",
      pos: "center",
    },
    { src: "/gallery/صناعية-الرياض.webp", alt: "مصلح مكيفات", pos: "center" },
  ];

  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 5);
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // تحسين إعادة الرسم في متصفحات الجوال التي قد تؤخر تحديث الخلفية
    document.body.style.transform = "translateZ(0)";
    requestAnimationFrame(() => {
      document.body.style.transform = "";
    });
  }, [theme]);
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);

  return (
    <>
      {/* السيارات الجانبية (Free Objects) */}
      {/* تمت إضافة الأبعاد لمنع اهتزاز الصفحة */}
      <img
        src="/images/Air-conditioning-repair.webp"
        alt="سيارة جانبية"
        className="free-car-object"
        width="925"
        height="367"
        style={{ height: "auto" }}
        data-aos="fade-left"
        data-aos-delay="800"
      />
      <img
        src="/images/Air-conditioning-repairman.webp"
        alt="سيارة جانبية"
        className="free-car-object-2"
        width="1146"
        height="405"
        style={{ height: "auto" }}
        data-aos="fade-right"
        data-aos-delay="900"
      />

      {/* الهيدر */}
      <header className="nav">
        <div className="container wrap">
          <a href="/" className="logo-container">
            <img
              src="/images/logo.webp"
              alt="ابو حلب كهربائي سيارات"
              width="120"
              height="60" // ✅ تحديد أبعاد اللوجو
            />
          </a>

          <nav className="links">
            <a href="#services">الخدمات</a>
            <a href="#whyus">لماذا نحن</a>
            <a href="#gallery">أعمالنا</a>
            <a href="#faq">الأسئلة</a>
          </nav>

          <div className="desktop-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="تبديل الوضع"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <span className="phone-number text-white ml-2">{phone}</span>
            <a
              href={getWhatsAppUrl("السلام عليكم، استفسار عام")}
              className="icon-btn whatsapp"
              aria-label="واتساب"
            >
              <img src="/icons/whatsapp.svg" width="22" height="22" alt="" />
            </a>
            <a
              href={locationLink}
              className="icon-btn location"
              aria-label="موقعنا"
            >
              <img src="/icons/pin.svg" width="22" height="22" alt="" />
            </a>
          </div>

          <div className="menu-btn">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{
                width: "35px",
                height: "35px",
                fontSize: "1rem",
                marginLeft: "5px",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a
              href={`tel:${phone}`}
              className="icon-btn call-mobile"
              aria-label="اتصال"
            >
              <img src="/icons/whatsapp.svg" width="22" height="22" alt="" />
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="القائمة"
            >
              <img
                src="/icons/menu.svg"
                alt=""
                width="24"
                height="24"
                style={{ filter: theme === "dark" ? "invert(1)" : "none" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* المنيو الجانبي */}
      {menuOpen && (
        <>
          <div className="backdrop" onClick={() => setMenuOpen(false)} />
          <nav id="mobile-drawer" className="mobile-drawer">
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
              className="btn btn-red"
              onClick={() => setMenuOpen(false)}
            >
              تواصل
            </a>
          </nav>
        </>
      )}

      <main>
        {/* --- HERO SECTION --- */}
        <section className="section hero">
          <div className="hero-blur-bg" aria-hidden="true"></div>
          <div className="hero-overlay" aria-hidden="true"></div>
          <div className="blue-effect" aria-hidden="true"></div>
          <div className="smooth-overlay" aria-hidden="true"></div>

          <div className="container grid hero-grid">
            <div className="hero-text-content animate-pop-in">
              <h1 className="hero-title">ابو حلب للتكييف</h1>
              <p className="hero-subtitle">افضل ورشة مكيفات سيارات بالرياض</p>
              <p className="hero-desc">
                صيانة وتعبئة فريون، كشف تهريب، تغيير كمبروسر، تنظيف ثلاجة، فحص
                إلكتروني… سرعة وجودة بأسعار مناسبة.
              </p>

              <div className="hero-actions">
                {/* ✅ الإضافة المطلوبة: الموقع فوق الزر */}
                <div className="actions-primary-group">
                  <a
                    href={locationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="location-hint"
                  >
                    <img src="/icons/pin.svg" width="16" height="16" alt="" />
                    <span>صناعية النسيم - الرياض</span>
                  </a>

                  <a
                    href={getWhatsAppUrl(
                      "السلام عليكم، أرغب بحجز موعد صيانة تكييف",
                    )}
                    className="btn btn-red btn-block"
                  >
                    احجز موعد صيانة
                  </a>
                </div>
                <a href="#services" className="btn btn-white btn-block">
                  شاهد خدماتنا
                </a>
              </div>
            </div>

            <div className="hero-car-container">
              <img
                src="/images/Best-repairs-in-East-Riyadh.webp"
                alt="سيارة بي ام دبليو"
                width="857"
                height="381" // ✅ ضروري جداً للأداء
                fetchpriority="high" // ✅ تحميل فوري لأهم صورة
                className="hero-car-img"
                style={{ width: "85%", height: "auto", maxWidth: "800px" }}
              />
            </div>
          </div>
        </section>

        {/* --- عرض 99 ريال --- */}
        <section className="section banner-section">
          <div className="container">
            <div
              className="offer-badge"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="offer-info">
                <h3>
                  99 <span className="currency">ريال</span>
                </h3>
                <p>عرض خاص: تعبئة فريون بأحدث الأجهزة</p>
                <a
                  href={getWhatsAppUrl(
                    "السلام عليكم، أرغب بحجز عرض تعبئة الفريون بـ 99 ريال",
                  )}
                  className="btn btn-green"
                >
                  احجز العرض الآن
                  <img
                    src="/icons/whatsapp.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </a>
              </div>
              <div className="offer-img-wrap">
                <img
                  src="images/Machine.webp"
                  alt="جهاز الفريون"
                  width="150"
                  height="235"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- الخدمات --- */}
        <section id="services" className="section services-section">
          <div className="container">
            <h2 className="section-header" data-aos="fade-up">
              خدماتنا
            </h2>
            <p className="section-sub" data-aos="fade-up">
              نقدم أفضل إصلاح مكيفات سيارات في الرياض، تعبئة فريون بأحدث
              الأجهزة...
            </p>

            <div className="grid services-grid">
              {[
                {
                  title: "تعبئة فريون",
                  desc: "فريون أصلي مع فحص ضغط",
                  icon: "/icons/snow.svg",
                },
                {
                  title: "كشف تهريب",
                  desc: "صبغة/نيتروجين وتحديد مكان التهريب",
                  icon: "/icons/search.svg",
                },
                {
                  title: "تغيير كمبروسر",
                  desc: "وكالة/بديل مع ضمان",
                  icon: "/icons/engine.svg",
                },
                {
                  title: "تنظيف الثلاجة",
                  desc: "تحسين التبريد وإزالة الروائح",
                  icon: "/icons/spray.svg",
                },
                {
                  title: "فحص إلكتروني",
                  desc: "قراءة أعطال وحساسات",
                  icon: "/icons/chip.svg",
                },
                {
                  title: "صيانة المواسير",
                  desc: "استبدال/لحام مواسير التكييف",
                  icon: "/icons/wrench.svg",
                },
              ].map((srv, i) => (
                <div key={i} className="service-card" data-aos="fade-up">
                  <img
                    src={srv.icon}
                    alt={srv.title}
                    width="60"
                    height="60" // ✅ أبعاد الأيقونات
                    className="service-icon-floating"
                    loading="lazy"
                  />
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- لماذا تختارنا --- */}
        <section id="whyus" className="section">
          <div className="container">
            <h2 className="section-header" data-aos="fade-up">
              لماذا تختارنا
            </h2>
            <div className="grid whyus-grid">
              {[
                {
                  t: "سرعة بالإنجاز",
                  d: "خدمة فورية حسب المواعيد",
                  img: "/icons/speed.svg",
                },
                {
                  t: "تشخيص دقيق",
                  d: "أجهزة فحص حديثة",
                  img: "/icons/laptop.svg",
                },
                {
                  t: "ضمان مكتوب",
                  d: "ضمان 3 أشهر على أعمال التكييف",
                  img: "/icons/shield.svg",
                },
              ].map((item, i) => (
                <div key={i} className="why-card" data-aos="fade-up">
                  <div className="why-icon-circle">
                    <img
                      src={item.img}
                      alt={item.t}
                      width="45"
                      height="45"
                      loading="lazy"
                    />
                  </div>
                  <h3>{item.t}</h3>
                  <p>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- من أعمالنا --- */}
        <section id="gallery" className="section">
          <div className="container">
            <h2 className="section-header" data-aos="fade-up">
              من أعمالنا
            </h2>
            <div className="grid gallery-grid">
              {visibleItems.map((g, i) => (
                <div key={i} className="gallery-item" data-aos="zoom-in">
                  <img
                    src={g.src}
                    alt={g.alt}
                    width="400"
                    height="400" // ✅ أبعاد تقريبية للصور المربعة
                    style={{ objectPosition: g.pos }}
                    loading="lazy"
                  />
                </div>
              ))}
              {!showAll ? (
                <div
                  className="gallery-item more-card"
                  onClick={() => setShowAll(true)}
                  data-aos="zoom-in"
                >
                  <div className="more-content">
                    <span className="arrow-left">◀</span>
                    <span>عرض كل الأعمال</span>
                  </div>
                </div>
              ) : (
                <button
                  className="btn btn-white full-width"
                  style={{ gridColumn: "1 / -1", marginTop: 20 }}
                  onClick={() => setShowAll(false)}
                >
                  إخفاء
                </button>
              )}
            </div>
          </div>
        </section>

        {/* --- الأسئلة الشائعة --- */}
        <section id="faq" className="section">
          <div className="container">
            <h2 className="section-header" data-aos="fade-up">
              الأسئلة الشائعة
            </h2>
            <div className="faq-grid">
              <div className="faq-card" data-aos="fade-up">
                <h4>
                  هل الفحص مدفوع؟ <span className="plus">+</span>
                </h4>
                <p>
                  الفحص مبدئي مجاني—أحيانًا تُحسب رسوم رمزية تُخصم عند الإصلاح.
                </p>
              </div>
              <div className="faq-card" data-aos="fade-up">
                <h4>
                  ما مدة الضمان؟ <span className="plus">+</span>
                </h4>
                <p>ضمان مكتوب 3 أشهر على العمل (تفاصيل الضمان بالفاتورة).</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- الفوتر --- */}
      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="footer-col info">
            <img
              src="/images/logo.webp"
              alt="لوجو"
              width="120"
              height="65"
              loading="lazy"
              className="footer-logo"
            />
            <p className="footer-desc">
              أفضل ورشة مكيفات سيارات بالرياض، نخدم صناعية النسيم وغرب وشرق
              الرياض.
            </p>
            <a
              href={locationLink}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-row hover-effect"
            >
              <img src="/icons/pin.svg" width="20" height="20" alt="" />
              <span>صناعية النسيم - الرياض</span>
            </a>
            <div className="footer-contact-row">
              <img src="/icons/phone.svg" width="20" height="20" alt="" />
              <span>{phone}</span>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4>روابط سريعة</h4>
            <a href="#services">الخدمات</a>
            <a href="#whyus">لماذا نحن</a>
            <a href="#contact">حجز موعد</a>
          </div>

          <div className="footer-col map-col">
            <h4>موقعنا</h4>
            <div className="map-preview">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4776903362417!2d46.852713099999995!3d24.7104755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa95da9d6ba3d%3A0x67336cca9c6a55b3!2z2YjYsdi02Kkg2KfZhNi52KfYtdmF2Ycg2K3ZhNioINin2YTYqtmD2YrZitmBINmE2LXZitin2YbYqSDYp9mE2LPZitin2LHYp9iq!5e0!3m2!1sar!2str!4v1770758271180!5m2!1sar!2str"
                title="map"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
            <div className="social-icons">
              <a href="#" aria-label="سناب شات">
                <img
                  src="/icons/snapchat.svg"
                  width="20"
                  height="20"
                  alt="snap"
                />
              </a>
              <a
                href="https://www.instagram.com/abo_aleppo1?igsh=MW9iNzB3OG5xeTVkeg=="
                aria-label="انستقرام"
              >
                <img
                  src="/icons/instagram.svg"
                  width="20"
                  height="20"
                  alt="insta"
                />
              </a>
              <a
                href="https://www.tiktok.com/@asimat_halab_ac?_r=1&_t=ZS-93oaiHV0EbK"
                aria-label="تيك توك"
              >
                <img
                  src="/icons/tiktok.svg"
                  width="20"
                  height="20"
                  alt="tiktok"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="footer-seo-text">
            ورشة أبو حلب لتكييف السيارات في الرياض متخصصة في إصلاح مكيفات جميع
            السيارات: كامري، كورولا، يارس، النترا، سوناتا، لكزس، مرسيدس، بي إم
            دبليو، جينيسس. نخدم صناعية النسيم، غرب الرياض وشرق الرياض.
          </p>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} ورشة أبو حلب – ورشة التكييف الافضل في
          الرياض.
        </div>
      </footer>

      <a
        className="whatsapp-fab"
        href={getWhatsAppUrl("السلام عليكم، عندي استفسار بخصوص مكيف السيارة")}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل واتساب"
      >
        <img src="/icons/whatsapp.svg" width="38" height="38" alt="" />
      </a>
    </>
  );
}
