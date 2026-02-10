import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phone = "+966546087818";
  // ... (نفس المتغيرات والبيانات السابقة) ...
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    {
      src: "/gallery/ابو-حلب.webp",
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
    { src: "/gallery/فحص-فريون-جهاز.webp", alt: "كامري", pos: "center" },
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
  ];

  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 5);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);

  return (
    <>
      {/* ✅✅ هنا مكان الـ Free Object الحقيقي ✅✅ */}
      {/* وضعناها خارج كل السكاشن لتكون مربوطة بالبادي مباشرة */}
      <img
        src="/images/Air-conditioning-repair.webp"
        alt="سيارة جانبية"
        className="free-car-object"
        data-aos="fade-left"
        data-aos-delay="1500"
      />
      <img
        src="/images/Air-conditioning-repairman.webp"
        alt="سيارة جانبية"
        className="free-car-object-2"
        data-aos="fade-right"
        data-aos-delay="1200"
      />
      {/* الهيدر */}
      <header className="nav">
        <div className="container wrap">
          {/* اللوجو يمين */}
          <a href="/" className="logo-container">
            <img
              src="/images/logo.webp"
              alt="ابو حلب كهربائي سيارات"
              height="60"
            />
          </a>

          {/* روابط الديسكتوب (وسط) */}
          <nav className="links">
            <a href="#services">الخدمات</a>
            <a href="#whyus">لماذا نحن</a>
            <a href="#gallery">أعمالنا</a>
            <a href="#faq">الأسئلة</a>
          </nav>

          {/* زر واتساب وموقع (يسار) */}
          <div className="desktop-actions">
            <span className="phone-number text-white ml-2">{phone}</span>
            <a
              href={`https://wa.me/${phone.replace(/\D/g, "")}`}
              className="icon-btn whatsapp"
            >
              <img src="/icons/whatsapp.svg" alt="wa" />
            </a>
            <a href="#location" className="icon-btn location">
              <img src="/icons/pin.svg" alt="loc" />
            </a>
          </div>

          {/* زر منيو الجوال */}
          <div className="menu-btn">
            <a href={`tel:${phone}`} className="icon-btn call-mobile">
              <img src="/icons/whatsapp.svg" alt="call" />
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <img
                src="/icons/menu.svg"
                alt="Menu"
                width="24"
                height="24"
                style={{ filter: "invert(1)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* المنيو الجانبي (Drawer) */}
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

      {/* --- HERO SECTION --- */}
      <section className="section hero">
        {/* الخلفية المموهة (كما في الديسكتوب) */}
        <div className="hero-blur-bg" aria-hidden="true"></div>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="blue-effect" aria-hidden="true"></div>
        <div className="smooth-overlay" aria-hidden="true"></div>

        <div className="container grid hero-grid">
          {/* النص (يمين في الديسكتوب) */}
          <div
            className="hero-text-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="hero-title">ابو حلب للتكييف</h1>
            <p className="hero-subtitle">افضل ورشة مكيفات سيارات بالرياض</p>

            <p className="hero-desc">
              صيانة وتعبئة فريون، كشف تهريب، تغيير كمبروسر، تنظيف ثلاجة، فحص
              إلكتروني… سرعة وجودة بأسعار مناسبة.
            </p>

            {/* الأزرار */}
            <div className="hero-actions">
              <a href="#contact" className="btn btn-red btn-block">
                احجز موعد صيانة
              </a>
              <a href="#services" className="btn btn-white btn-block">
                شاهد خدماتنا
              </a>
            </div>
          </div>

          {/* السيارة (يسار في الديسكتوب) */}
          <div className="hero-car-container">
            <img
              src="/images/Best-repairs-in-East-Riyadh.webp"
              alt="سيارة بي ام دبليو"
              className="hero-car-img"
            />
          </div>
        </div>
      </section>

      {/* --- عرض 99 ريال (بانر) --- */}
      <section className="section banner-section">
        <div className="container">
          <div className="offer-badge" data-aos="zoom-in" data-aos-delay="1800">
            <div className="offer-info">
              <h3>
                99 <span className="currency">ريال</span>
              </h3>
              <p>عرض خاص: تعبئة فريون بأحدث الأجهزة</p>
              <a
                href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                className="btn btn-green"
              >
                احجز العرض الآن
                <img src="/icons/whatsapp.svg" width="20" height="20" alt="" />
              </a>
            </div>
            <div className="offer-img-wrap">
              <img src="images/Machine.webp" alt="جهاز الفريون" />
            </div>
          </div>
        </div>
      </section>

      {/* --- الخدمات --- */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2
            className="section-header"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            خدماتنا
          </h2>
          <p className="section-sub" data-aos="fade-up" data-aos-delay="100">
            نقدم أفضل إصلاح مكيفات سيارات في الرياض، تعبئة فريون بأحدث الأجهزة،
            كشف تهريب فريون، صيانة مواسير، تغيير كمبروسر، وتنظيف ثلاجة المكيف.
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
              <div
                key={i}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={srv.icon}
                  alt={srv.title}
                  className="service-icon-floating"
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
          <h2
            className="section-header"
            data-aos="fade-up"
            data-aos-delay="100"
          >
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
              <div
                key={i}
                className="why-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="why-icon-circle">
                  <img src={item.img} alt={item.t} />
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
          <h2
            className="section-header"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            من أعمالنا
          </h2>
          <div className="grid gallery-grid">
            {visibleItems.map((g, i) => (
              <div
                key={i}
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img
                  src={g.src}
                  alt={g.alt}
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
                data-aos-delay="100"
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
          <h2
            className="section-header"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            الأسئلة الشائعة
          </h2>
          <div className="faq-grid">
            <div className="faq-card" data-aos="fade-up" data-aos-delay="100">
              <h4>
                هل الفحص مدفوع؟ <span className="plus">+</span>
              </h4>
              <p>
                الفحص مبدئي مجاني—أحيانًا تُحسب رسوم رمزية تُخصم عند الإصلاح.
              </p>
            </div>
            <div className="faq-card" data-aos="fade-up" data-aos-delay="100">
              <h4>
                ما مدة الضمان؟ <span className="plus">+</span>
              </h4>
              <p>ضمان مكتوب 3 أشهر على العمل (تفاصيل الضمان بالفاتورة).</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- تواصل + خريطة + فوتر --- */}
      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="footer-col info">
            <img src="/images/logo.webp" alt="لوجو" className="footer-logo" />
            <p className="footer-desc">
              أفضل ورشة مكيفات سيارات بالرياض، نخدم صناعية النسيم وغرب وشرق
              الرياض.
            </p>
            <div className="footer-contact-row">
              <img src="/icons/pin.svg" className="icon-sm" alt="" />
              <span>صناعية النسيم - الرياض</span>
            </div>
            <div className="footer-contact-row">
              <img src="/icons/phone.svg" className="icon-sm" alt="" />
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
              />
            </div>
            <div className="social-icons">
              <a href="#">
                <img src="/icons/snapchat.svg" alt="snap" />
              </a>
              <a href="#">
                <img src="/icons/instagram.svg" alt="insta" />
              </a>
              <a href="#">
                <img src="/icons/tiktok.svg" alt="tiktok" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} ورشة أبو حلب – صنع بكل حب في الرياض.
        </div>
      </footer>

      <a
        className="whatsapp-fab"
        href={`https://wa.me/${phone.replace(/\D/g, "")}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/whatsapp.svg" alt="واتساب" />
      </a>
    </>
  );
}
