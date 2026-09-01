"use client";

import { useTranslations } from "next-intl";
import { 
  ShieldCheck,
  Target,
  Users,
  Certificate,
  BookOpen,
  ArrowRight,
  CheckCircle,
  MapPin
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui";

export default function AboutPage() {
  const t = useTranslations("about");

  const scholars = [
    {
      name: t("shariahBoard.scholars.chairman.name"),
      title: t("shariahBoard.scholars.chairman.title"),
      credentials: t("shariahBoard.scholars.chairman.credentials"),
      expertise: t("shariahBoard.scholars.chairman.expertise"),
      certifications: t.raw("shariahBoard.scholars.chairman.certifications") as string[],
    },
    {
      name: t("shariahBoard.scholars.advisor.name"),
      title: t("shariahBoard.scholars.advisor.title"),
      credentials: t("shariahBoard.scholars.advisor.credentials"),
      expertise: t("shariahBoard.scholars.advisor.expertise"),
      certifications: t.raw("shariahBoard.scholars.advisor.certifications") as string[],
    },
    {
      name: t("shariahBoard.scholars.officer.name"),
      title: t("shariahBoard.scholars.officer.title"),
      credentials: t("shariahBoard.scholars.officer.credentials"),
      expertise: t("shariahBoard.scholars.officer.expertise"),
      certifications: t.raw("shariahBoard.scholars.officer.certifications") as string[],
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: t("values.items.shariahCompliant.title"),
      description: t("values.items.shariahCompliant.description")
    },
    {
      icon: Certificate,
      title: t("values.items.regulatorReady.title"),
      description: t("values.items.regulatorReady.description")
    },
    {
      icon: Users,
      title: t("values.items.communityFirst.title"),
      description: t("values.items.communityFirst.description")
    },
    {
      icon: BookOpen,
      title: t("values.items.transparent.title"),
      description: t("values.items.transparent.description")
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            {t("hero.title")}<br />{t("hero.titleLine2")}
          </h1>
          
          <p className="text-xl text-white/85 leading-relaxed max-w-2xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Mission */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-tikari-gold" weight="fill" />
                <span className="text-sm font-bold tracking-wider text-tikari-green-dark uppercase">{t("mission.badge")}</span>
              </div>
              <h2 className="text-3xl font-bold text-tikari-green-dark mb-6">
                {t("mission.title")}
              </h2>
              <p className="text-tikari-sage leading-relaxed mb-6">
                {t("mission.paragraph1")}
              </p>
              <p className="text-tikari-sage leading-relaxed mb-6">
                {t("mission.paragraph2")}
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white border-2 border-tikari-green/20 px-4 py-2 text-sm font-semibold text-tikari-green-dark rounded-full">
                  {t("mission.badges.zeroInterest")}
                </div>
                <div className="bg-white border-2 border-tikari-green/20 px-4 py-2 text-sm font-semibold text-tikari-green-dark rounded-full">
                  {t("mission.badges.assetBacked")}
                </div>
                <div className="bg-white border-2 border-tikari-green/20 px-4 py-2 text-sm font-semibold text-tikari-green-dark rounded-full">
                  {t("mission.badges.profitSharing")}
                </div>
              </div>
            </div>

            {/* Vision */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-tikari-gold" weight="fill" />
                <span className="text-sm font-bold tracking-wider text-tikari-green-dark uppercase">{t("vision.badge")}</span>
              </div>
              <h2 className="text-3xl font-bold text-tikari-green-dark mb-6">
                {t("vision.title")}
              </h2>
              <p className="text-tikari-sage leading-relaxed mb-6">
                {t("vision.paragraph1")}
              </p>
              <p className="text-tikari-sage leading-relaxed mb-6">
                {t("vision.paragraph2")}
              </p>
              <p className="text-tikari-sage leading-relaxed">
                {t("vision.paragraph3")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-tikari-green-dark mb-4">
              {t("values.heading")}
            </h2>
            <p className="text-lg text-tikari-sage">
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="p-8 bg-white border-1 border-tikari-green/10 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <Icon className="h-12 w-12 text-tikari-gold mb-4" weight="fill" />
                  <h3 className="text-xl font-bold text-tikari-green-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-tikari-sage leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shariah Board */}
      <section id="scholars" className="py-20 lg:py-24 px-6 bg-tikari-green-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t("shariahBoard.heading")}
            </h2>
            <p className="text-lg text-white/80">
              {t("shariahBoard.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {scholars.map((scholar, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm rounded-2xl">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {scholar.name}
                  </h3>
                  <p className="text-tikari-gold font-semibold mb-3">
                    {scholar.title}
                  </p>
                  <p className="text-sm text-white/70 mb-4">
                    {scholar.credentials}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-white/60 uppercase mb-2">{t("shariahBoard.labels.expertise")}</p>
                    <p className="text-sm text-white/80">{scholar.expertise}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white/60 uppercase mb-2">{t("shariahBoard.labels.certifications")}</p>
                    <div className="flex flex-wrap gap-2">
                      {scholar.certifications.map((cert, certIdx) => (
                        <span key={certIdx} className="text-xs bg-tikari-gold/10 border border-tikari-gold/30 text-tikari-gold px-3 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white/5 border border-tikari-gold/20 rounded-2xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 text-tikari-gold flex-shrink-0 mt-1" weight="fill" />
              <div>
                <h4 className="text-xl font-bold mb-3">{t("shariahBoard.certification.title")}</h4>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                    <p>{t("shariahBoard.certification.steps.submission")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                    <p>{t("shariahBoard.certification.steps.review")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                    <p>{t("shariahBoard.certification.steps.approval")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                    <p>{t("shariahBoard.certification.steps.audit")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-tikari-green-dark mb-6">
            {t("cta.heading")}
          </h2>
          <p className="text-lg text-tikari-sage mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="w-full sm:w-auto"
            >
              {t("cta.bookDemo")}
              <ArrowRight className="ml-2 h-5 w-5" weight="bold" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto"
            >
              {t("cta.contactUs")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
