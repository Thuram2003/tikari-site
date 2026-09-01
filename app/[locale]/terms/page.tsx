import { useTranslations } from "next-intl";

export default function TermsOfUsePage() {
  const t = useTranslations("terms");

  return (
    <div className="flex flex-col w-full bg-white min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="bg-tikari-green-dark text-white pt-32 pb-16 px-6 md:px-12 border-b border-tikari-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">{t("header.badge")}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t("header.title")}</h1>
          <p className="text-sm text-tikari-cream/80">{t("header.lastRevised")}</p>
        </div>
      </section>

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-tikari-green-dark">
        <article className="prose prose-slate max-w-none space-y-8 text-sm md:text-base leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              {t("section1.title")}
            </h2>
            <p className="text-tikari-sage">
              {t("section1.content")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              {t("section2.title")}
            </h2>
            <p className="text-tikari-sage">
              {t("section2.paragraph1")}
            </p>
            <p className="text-tikari-sage">
              {t("section2.paragraph2")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              {t("section3.title")}
            </h2>
            <p className="text-tikari-sage">
              {t("section3.content")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              {t("section4.title")}
            </h2>
            <p className="text-tikari-sage">
              {t("section4.content")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              {t("section5.title")}
            </h2>
            <p className="text-tikari-sage">
              {t("section5.content")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              {t("section6.title")}
            </h2>
            <p className="text-tikari-sage">
              {t("section6.content")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              {t("section7.title")}
            </h2>
            <p className="text-tikari-sage font-semibold">
              {t("section7.content")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2 border-b border-tikari-green/10">
              {t("section8.title")}
            </h2>
            <p className="text-tikari-sage">
              {t("section8.content")}
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-tikari-green/20">
            <h2 className="text-xl md:text-2xl font-bold text-tikari-green-dark pb-2">
              {t("section9.title")}
            </h2>
            <p className="text-tikari-sage">
              {t("section9.content")}<br />
              {t("section9.email")}
            </p>
          </div>

        </article>
      </main>

    </div>
  );
}
