"use client";

import { 
  ArrowRight,
  BookOpen,
  GraduationCap,
  FileText,
  Certificate,
  Coins,
  Users,
  ChartLineUp,
  ShieldCheck,
  Notebook,
  Question
} from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function EducationPage() {
  const t = useTranslations("education");
  
  const topics = [
    {
      title: t("topics.islamicPrinciples.title"),
      icon: ShieldCheck,
      description: t("topics.islamicPrinciples.description"),
      articles: [
        t("topics.islamicPrinciples.articles.riba"),
        t("topics.islamicPrinciples.articles.riskSharing"),
        t("topics.islamicPrinciples.articles.assetBacked"),
        t("topics.islamicPrinciples.articles.shariahFramework"),
        t("topics.islamicPrinciples.articles.halalHaram")
      ],
      badge: t("topics.islamicPrinciples.badge")
    },
    {
      title: t("topics.islamicProducts.title"),
      icon: Coins,
      description: t("topics.islamicProducts.description"),
      articles: [
        t("topics.islamicProducts.articles.murabaha"),
        t("topics.islamicProducts.articles.mudarabah"),
        t("topics.islamicProducts.articles.musharakah"),
        t("topics.islamicProducts.articles.ijara"),
        t("topics.islamicProducts.articles.salam")
      ],
      badge: t("topics.islamicProducts.badge")
    },
    {
      title: t("topics.aaoifi.title"),
      icon: FileText,
      description: t("topics.aaoifi.description"),
      articles: [
        t("topics.aaoifi.articles.chartOfAccounts"),
        t("topics.aaoifi.articles.financialStatements"),
        t("topics.aaoifi.articles.shariahGovernance"),
        t("topics.aaoifi.articles.investmentAccounting"),
        t("topics.aaoifi.articles.zakat")
      ],
      badge: t("topics.aaoifi.badge")
    },
    {
      title: t("topics.shariahGovernance.title"),
      icon: GraduationCap,
      description: t("topics.shariahGovernance.description"),
      articles: [
        t("topics.shariahGovernance.articles.boardRole"),
        t("topics.shariahGovernance.articles.fatwa"),
        t("topics.shariahGovernance.articles.internalAudit"),
        t("topics.shariahGovernance.articles.reviewUnits"),
        t("topics.shariahGovernance.articles.annualReports")
      ],
      badge: t("topics.shariahGovernance.badge")
    },
    {
      title: t("topics.regulatory.title"),
      icon: Users,
      description: t("topics.regulatory.description"),
      articles: [
        t("topics.regulatory.articles.centralBank"),
        t("topics.regulatory.articles.jurisdictions"),
        t("topics.regulatory.articles.crossBorder"),
        t("topics.regulatory.articles.regional"),
        t("topics.regulatory.articles.localCurrency")
      ],
      badge: t("topics.regulatory.badge"),
      link: {
        text: t("topics.regulatory.link.text"),
        href: t("topics.regulatory.link.href")
      }
    },
    {
      title: t("topics.glossary.title"),
      icon: BookOpen,
      description: t("topics.glossary.description"),
      articles: [
        t("topics.glossary.articles.translations"),
        t("topics.glossary.articles.acronyms"),
        t("topics.glossary.articles.bankingTerms"),
        t("topics.glossary.articles.shariahConcepts"),
        t("topics.glossary.articles.regulatoryTerms")
      ],
      badge: t("topics.glossary.badge")
    }
  ];

  const guides = [
    {
      title: t("guides.whatIsIslamic.title"),
      description: t("guides.whatIsIslamic.description"),
      duration: t("guides.whatIsIslamic.duration"),
      level: t("guides.whatIsIslamic.level"),
      topics: [t("guides.whatIsIslamic.topics.fundamentals"), t("guides.whatIsIslamic.topics.shariah")],
      href: "/resources/education/what-is-islamic-finance"
    },
    {
      title: t("guides.murabaha.title"),
      description: t("guides.murabaha.description"),
      duration: t("guides.murabaha.duration"),
      level: t("guides.murabaha.level"),
      topics: [t("guides.murabaha.topics.murabaha"), t("guides.murabaha.topics.contracts")],
      href: "/resources/education/understanding-murabaha"
    },
    {
      title: t("guides.psr.title"),
      description: t("guides.psr.description"),
      duration: t("guides.psr.duration"),
      level: t("guides.psr.level"),
      topics: [t("guides.psr.topics.mudarabah"), t("guides.psr.topics.compliance")],
      href: "/resources/education/profit-sharing-ratio"
    },
    {
      title: t("guides.aaoifiOhada.title"),
      description: t("guides.aaoifiOhada.description"),
      duration: t("guides.aaoifiOhada.duration"),
      level: t("guides.aaoifiOhada.level"),
      topics: [t("guides.aaoifiOhada.topics.aaoifi"), t("guides.aaoifiOhada.topics.reporting")],
      href: "/resources/education/aaoifi-vs-ohada"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            
            <h1 className="text-4xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="#guides"
              >
                {t("hero.startLearning")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="cream"
                size="lg"
                href="/demo"
              >
                {t("hero.bookDemo")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("topicsSection.title")}
            </h2>
            <p className="text-[17px] text-tikari-sage max-w-2xl mx-auto">
              {t("topicsSection.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border-1 border-tikari-green/20 hover:border-tikari-green hover:shadow-xl transition-all duration-300 group rounded-2xl"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-tikari-green/10 group-hover:bg-tikari-green-dark transition-colors duration-300 rounded-full">
                        <Icon className="h-6 w-6 text-tikari-green-dark group-hover:text-white" weight="bold" />
                      </div>
                      <span className="text-xs font-semibold text-tikari-gold bg-tikari-gold/10 px-3 py-1 rounded-full">
                        {topic.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-tikari-green-dark mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-[15px] text-tikari-sage leading-relaxed mb-6">
                      {topic.description}
                    </p>
                    
                    <ul className="space-y-2.5">
                      {topic.articles.map((article, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-tikari-sage">
                          <span className="text-tikari-green-dark mt-1">•</span>
                          <span>{article}</span>
                        </li>
                      ))}
                    </ul>

                    {topic.link && (
                      <div className="mt-6 pt-4 border-t border-tikari-green/10">
                        <Link 
                          href={topic.link.href}
                          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-tikari-green hover:text-tikari-gold transition-colors duration-300"
                        >
                          <span>{topic.link.text}</span>
                          <ArrowRight className="h-4 w-4" weight="bold" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="guides" className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
                {t("guidesSection.title")}
              </h2>
              <p className="text-[17px] text-tikari-sage max-w-2xl">
                {t("guidesSection.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, idx) => (
              <Link
                key={idx}
                href={guide.href}
                className="block bg-white border-1 border-tikari-green/20 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 group rounded-2xl"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      guide.level === t("levels.beginner") ? 'bg-green-100 text-green-700' :
                      guide.level === t("levels.intermediate") ? 'bg-tikari-gold/10 text-tikari-gold' :
                      'bg-tikari-green-dark/10 text-tikari-green-dark'
                    }`}>
                      {guide.level}
                    </span>
                    <span className="text-xs text-tikari-sage">
                      {guide.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-tikari-green-dark mb-3 group-hover:text-tikari-gold transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[15px] text-tikari-sage leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {guide.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className="text-xs text-tikari-green-dark bg-tikari-green/5 px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 text-tikari-green-dark">
            {t("cta.title")}
          </h2>
          <p className="text-[17px] text-tikari-green-dark/80 mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
            >
              {t("cta.bookDemo")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="cream"
              size="lg"
              href="/resources/support"
            >
              {t("cta.contactSupport")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
