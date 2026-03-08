import { useEffect } from "react";
import App from "./App";
import ServicesPage from "./pages/ServicesPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleNotCoolingPage from "./pages/ArticleNotCoolingPage";
import SimpleArticlePage from "./pages/SimpleArticlePage";
import { captureFirstTouch, trackEvent } from "./analytics";

export default function RootRouter() {
  useEffect(() => {
    const firstTouch = captureFirstTouch();
    trackEvent("first_touch_captured", firstTouch);
  }, []);

  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/services") return <ServicesPage />;
  if (path === "/articles") return <ArticlesPage />;
  if (path === "/articles/why-ac-not-cooling-riyadh") {
    return <ArticleNotCoolingPage />;
  }
  if (path === "/articles/ac-freon-leak-signs-riyadh") {
    return (
      <SimpleArticlePage
        title="علامات تسريب فريون المكيف"
        slug={path}
        description="تعرف على أبرز علامات تهريب الفريون وكيف تفرق بين النقص الطبيعي والتهريب الفعلي."
      />
    );
  }
  if (path === "/articles/ac-cycles-on-off-riyadh") {
    return (
      <SimpleArticlePage
        title="ليش المكيف يفصل ويشتغل؟"
        slug={path}
        description="شرح أسباب الفصل المتكرر لمكيف السيارة ومتى يكون الخلل كهربائي أو مرتبط بالضغط."
      />
    );
  }

  return <App />;
}
