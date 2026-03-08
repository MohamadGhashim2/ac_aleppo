import { PHONE, getWhatsAppUrl } from "../siteConfig";
import { trackLeadClick } from "../analytics";

export default function InnerPageLayout({ children }) {
  return (
    <>
      <header className="inner-nav">
        <div className="container inner-wrap">
          <a href="/" className="logo-container">
            <img src="/images/logo.webp" alt="ابو حلب" width="92" height="46" />
          </a>

          <nav className="inner-links">
            <a href="/">الرئيسية</a>
            <a href="/services">الخدمات</a>
            <a href="/articles">المقالات</a>
          </nav>

          <div className="inner-actions">
            <a
              className="btn btn-green inner-btn"
              href={getWhatsAppUrl("السلام عليكم، عندي استفسار")}
              onClick={() => trackLeadClick("whatsapp", "inner_nav")}
            >
              واتساب
            </a>
            <a
              className="btn btn-red inner-btn"
              href={`tel:${PHONE}`}
              onClick={() => trackLeadClick("call", "inner_nav")}
            >
              اتصال
            </a>
          </div>
        </div>
      </header>

      <section className="inner-page-bg">
        <div className="hero-blur-bg inner-bg-layer" aria-hidden="true"></div>
        <div className="hero-overlay inner-bg-layer" aria-hidden="true"></div>
        <div className="blue-effect inner-bg-layer" aria-hidden="true"></div>
        <div className="hero-wave-wrap inner-bg-layer" aria-hidden="true">
          <div className="hero-wave hero-wave-back"></div>
          <div className="hero-wave hero-wave-front"></div>
        </div>

        <div className="inner-content">{children}</div>
      </section>

      <footer className="footer inner-footer">
        <div className="container">
          <p className="footer-desc">
            العاصمة حلب لتكييف السيارات - خدمة سريعة داخل الرياض.
          </p>
          <div className="inner-footer-actions">
            <a className="btn btn-white" href="/">
              العودة للرئيسية
            </a>
            <a
              className="btn btn-green"
              href={getWhatsAppUrl("السلام عليكم، أريد حجز موعد")}
              onClick={() => trackLeadClick("whatsapp", "inner_footer")}
            >
              حجز عبر واتساب
            </a>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-fab"
        href={getWhatsAppUrl("السلام عليكم، أبغى فحص سريع للمكيف")}
        onClick={() => trackLeadClick("whatsapp", "inner_whatsapp_fab")}
        aria-label="تواصل واتساب"
        rel="noreferrer"
      >
        <span className="whatsapp-fab-note">اتصل الآن</span>
        <img src="/icons/whatsapp.svg" width="38" height="38" alt="" />
      </a>
    </>
  );
}
