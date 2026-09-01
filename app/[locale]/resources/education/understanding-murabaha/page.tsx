import { Metadata } from "next";
import {
  Handshake,
  ArrowRight,
  CheckCircle,
  XCircle,
  Calculator,
  FileText
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui";
import ScrollSpyContent from "../components/ScrollSpyContent";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "education.understandingMurabaha.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "Murabaha financing",
      "cost plus financing",
      "Islamic asset financing",
      "Shariah compliant loans",
      "Murabaha contract",
      "Islamic trade financing",
      "regulatory compliance",
      "halal business financing",
      "Murabaha pricing",
      "Shariah contract structure"
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "article",
      publishedTime: "2024-01-20T00:00:00.000Z",
      authors: ["TIKARI Shariah Team"],
    },
    alternates: {
      canonical: "/resources/education/understanding-murabaha"
    }
  };
}

export default function UnderstandingMurabahaPage() {
  const t = useTranslations("education.understandingMurabaha");

  const tableOfContents = [
    { id: "introduction", title: t("tableOfContents.introduction") },
    { id: "how-it-works", title: t("tableOfContents.howItWorks") },
    { id: "step-by-step", title: t("tableOfContents.stepByStep") },
    { id: "pricing", title: t("tableOfContents.pricing") },
    { id: "documentation", title: t("tableOfContents.documentation") },
    { id: "vs-conventional", title: t("tableOfContents.vsConventional") },
    { id: "use-cases", title: t("tableOfContents.useCases") },
    { id: "compliance", title: t("tableOfContents.compliance") },
    { id: "risks", title: t("tableOfContents.risks") },
  ];

  const relatedArticles = [
    {
      title: t("relatedArticles.articles.whatIsIslamic.title"),
      description: t("relatedArticles.articles.whatIsIslamic.description"),
      href: "/resources/education/what-is-islamic-finance",
      duration: t("relatedArticles.articles.whatIsIslamic.duration")
    },
    {
      title: t("relatedArticles.articles.psr.title"),
      description: t("relatedArticles.articles.psr.description"),
      href: "/resources/education/profit-sharing-ratio",
      duration: t("relatedArticles.articles.psr.duration")
    },
    {
      title: t("relatedArticles.articles.aaoifiOhada.title"),
      description: t("relatedArticles.articles.aaoifiOhada.description"),
      href: "/resources/education/aaoifi-vs-ohada",
      duration: t("relatedArticles.articles.aaoifiOhada.duration")
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Article Hero */}
      <section className="relative bg-tikari-green-dark text-white py-16 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/resources/education"
            className="inline-flex items-center gap-2 text-tikari-gold hover:text-tikari-gold/80 text-sm font-semibold mb-8 transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" weight="bold" />
            {t("hero.backLink")}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="bg-tikari-gold/20 text-tikari-gold px-3 py-1 rounded-full text-xs font-semibold border border-tikari-gold/30">
              {t("hero.badge.level")}
            </span>
            <span className="text-white/70 text-sm">{t("hero.badge.duration")}</span>
            <span className="text-white/70 text-sm">{t("hero.badge.updated")}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollSpyContent tableOfContents={tableOfContents}>
            <article className="prose prose-lg max-w-3xl mx-auto">
              <div className="
                prose-headings:font-bold 
                prose-headings:text-tikari-green-dark 
                prose-h2:text-3xl lg:prose-h2:text-4xl 
                prose-h2:mb-8 
                prose-h2:mt-20 
                prose-h2:pt-10 
                prose-h2:border-t 
                prose-h2:border-tikari-green/10 
                prose-h3:text-xl lg:prose-h3:text-2xl 
                prose-h3:mb-5 
                prose-h3:mt-12 
                prose-p:text-tikari-sage 
                prose-p:leading-relaxed 
                prose-p:mb-7 
                prose-a:text-tikari-green-dark 
                prose-a:no-underline 
                hover:prose-a:text-tikari-gold 
                prose-strong:text-tikari-green-dark 
                prose-ul:text-tikari-sage 
                prose-li:my-2.5
                prose-ul:my-6
              ">

                {/* Introduction */}
                <div id="introduction">
                  <p className="text-xl lg:text-2xl text-tikari-green-dark font-semibold leading-relaxed mb-8 !mt-0">
                    {t("introduction.leadParagraph")}
                  </p>

                  <p dangerouslySetInnerHTML={{ __html: t.raw("introduction.paragraph1") }} />

                  <p>
                    {t("introduction.paragraph2")}
                  </p>
                  <ul>
                    <li>{t("introduction.popularUses.workingCapital")}</li>
                    <li>{t("introduction.popularUses.equipment")}</li>
                    <li>{t("introduction.popularUses.trade")}</li>
                    <li>{t("introduction.popularUses.expansion")}</li>
                  </ul>
                </div>

                {/* How It Works */}
                <h2 id="how-it-works" className="font-bold text-xl pt-4">{t("howItWorks.title")}</h2>
                <p dangerouslySetInnerHTML={{ __html: t.raw("howItWorks.intro") }} />

                <div className="not-prose my-12 p-7 bg-tikari-cream/40 border-l-4 border-tikari-green rounded-r-2xl">
                  <h4 className="text-lg font-bold text-tikari-green-dark mb-5">{t("howItWorks.frameworkTitle")}</h4>
                  <ol className="space-y-4 text-tikari-sage">
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">1.</span>
                      <span dangerouslySetInnerHTML={{ __html: `<strong>${t("howItWorks.steps.step1.title")}</strong> ${t("howItWorks.steps.step1.description")}` }} />
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">2.</span>
                      <span dangerouslySetInnerHTML={{ __html: `<strong>${t("howItWorks.steps.step2.title")}</strong> ${t("howItWorks.steps.step2.description")}` }} />
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">3.</span>
                      <span dangerouslySetInnerHTML={{ __html: `<strong>${t("howItWorks.steps.step3.title")}</strong> ${t("howItWorks.steps.step3.description")}` }} />
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">4.</span>
                      <span dangerouslySetInnerHTML={{ __html: `<strong>${t("howItWorks.steps.step4.title")}</strong> ${t("howItWorks.steps.step4.description")}` }} />
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">5.</span>
                      <span dangerouslySetInnerHTML={{ __html: `<strong>${t("howItWorks.steps.step5.title")}</strong> ${t("howItWorks.steps.step5.description")}` }} />
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">6.</span>
                      <span dangerouslySetInnerHTML={{ __html: `<strong>${t("howItWorks.steps.step6.title")}</strong> ${t("howItWorks.steps.step6.description")}` }} />
                    </li>
                  </ol>
                </div>

                <p dangerouslySetInnerHTML={{ __html: t.raw("howItWorks.keyDistinction") }} />

                {/* Step-by-Step */}
                <h2 id="step-by-step" className="font-bold text-xl pt-4">{t("transactionFlow.title")}</h2>
                <p>
                  {t("transactionFlow.intro")}
                </p>

                <div className="not-prose my-10">
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                      <div
                        key={idx}
                        className="flex gap-5 p-6 bg-white border border-tikari-green/15 rounded-2xl"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-tikari-gold flex items-center justify-center text-tikari-green-dark font-bold text-sm">
                            {idx}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <h4 className="text-lg font-bold text-tikari-green-dark">
                              {t(`transactionFlow.steps.step${idx}.title`)}
                            </h4>
                            <span className="text-xs text-tikari-sage bg-tikari-cream/60 px-3 py-1 rounded-full whitespace-nowrap">
                              {t(`transactionFlow.steps.step${idx}.actors`)}
                            </span>
                          </div>
                          <p className="text-tikari-sage leading-relaxed m-0">
                            {t(`transactionFlow.steps.step${idx}.description`)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <h2 id="pricing" className="font-bold text-xl pt-4">{t("pricing.title")}</h2>
                <p dangerouslySetInnerHTML={{ __html: t.raw("pricing.intro") }} />
                <ul>
                  <li>{t("pricing.disclosureItems.cost")}</li>
                  <li>{t("pricing.disclosureItems.markup")}</li>
                  <li>{t("pricing.disclosureItems.total")}</li>
                  <li>{t("pricing.disclosureItems.schedule")}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("pricing.howDetermined.title")}</h3>
                <p>
                  {t("pricing.howDetermined.intro")}
                </p>

                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.raw("pricing.howDetermined.factors.market") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("pricing.howDetermined.factors.risk") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("pricing.howDetermined.factors.period") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("pricing.howDetermined.factors.asset") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("pricing.howDetermined.factors.admin") }} />
                </ul>

                <div className="not-prose my-8 p-6 bg-tikari-gold/10 border border-tikari-gold/30 rounded-2xl">
                  <h4 className="text-lg font-bold text-tikari-green-dark mb-2 flex items-center gap-2">
                    <Calculator className="h-6 w-6" weight="bold" />
                    {t("pricing.example.title")}
                  </h4>
                  <div className="space-y-1 text-tikari-sage">
                    <div className="flex justify-between py-3 border-b border-tikari-green/15">
                      <span className="font-semibold">{t("pricing.example.cost")}</span>
                      <span className="font-mono">5,000,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-tikari-green/15">
                      <span className="font-semibold">{t("pricing.example.markup")}</span>
                      <span className="font-mono">750,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-3 border-b-2 border-tikari-green-dark">
                      <span className="font-bold text-tikari-green-dark">{t("pricing.example.total")}</span>
                      <span className="font-mono font-bold text-tikari-green-dark">5,750,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-3 mt-2">
                      <span className="font-semibold">{t("pricing.example.monthly")}</span>
                      <span className="font-mono">239,583 FCFA</span>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-5 italic">
                    {t("pricing.example.note")}
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">{t("pricing.fixedVsVariable.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("pricing.fixedVsVariable.intro") }} />

                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.raw("pricing.fixedVsVariable.conventional") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("pricing.fixedVsVariable.murabaha") }} />
                </ul>

                {/* Documentation */}
                <h2 id="documentation" className="font-bold text-xl pt-4">{t("documentation.title")}</h2>
                <p>
                  {t("documentation.intro")}
                </p>

                <h3 className="font-bold text-lg pt-2">{t("documentation.customer.title")}</h3>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.customer.items.application") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.customer.items.promise") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.customer.items.agency") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.customer.items.contract") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.customer.items.collateral") }} />
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("documentation.bank.title")}</h3>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.bank.items.invoice") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.bank.items.ownership") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.bank.items.shariah") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.bank.items.regulatory") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("documentation.bank.items.risk") }} />
                </ul>

                <div className="not-prose my-12 p-7 bg-tikari-cream/40 border-l-4 border-tikari-gold rounded-r-2xl">
                  <div className="flex items-start gap-5">
                    <FileText className="h-7 w-7 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <h4 className="text-lg font-bold text-tikari-green-dark mb-2">
                        {t("documentation.bestPractice.title")}
                      </h4>
                      <p className="text-tikari-sage leading-relaxed m-0" dangerouslySetInnerHTML={{ __html: t.raw("documentation.bestPractice.description") }} />
                    </div>
                  </div>
                </div>

                {/* Murabaha vs Conventional */}
                <h2 id="vs-conventional" className="font-bold text-xl pt-4">{t("vsConventional.title")}</h2>
                <p>
                  {t("vsConventional.intro")}
                </p>

                <div className="not-prose my-12">
                  <div className="overflow-x-auto border border-tikari-green/15 rounded-2xl">
                    <table className="w-full">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold">{t("vsConventional.table.headers.aspect")}</th>
                          <th className="px-6 py-4 text-left font-bold">{t("vsConventional.table.headers.murabaha")}</th>
                          <th className="px-6 py-4 text-left font-bold">{t("vsConventional.table.headers.conventional")}</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("vsConventional.table.rows.nature.aspect")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.nature.murabaha")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.nature.conventional")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("vsConventional.table.rows.ownership.aspect")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.ownership.murabaha")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.ownership.conventional")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("vsConventional.table.rows.return.aspect")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.return.murabaha")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.return.conventional")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("vsConventional.table.rows.price.aspect")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.price.murabaha")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.price.conventional")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("vsConventional.table.rows.latePenalty.aspect")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.latePenalty.murabaha")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.latePenalty.conventional")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("vsConventional.table.rows.earlySettlement.aspect")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.earlySettlement.murabaha")}</td>
                          <td className="px-6 py-4">{t("vsConventional.table.rows.earlySettlement.conventional")}</td>
                        </tr>
                        <tr className="bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("vsConventional.table.rows.shariah.aspect")}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600" weight="bold" />
                              {t("vsConventional.table.rows.shariah.murabaha")}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-2">
                              <XCircle className="h-5 w-5 text-red-600" weight="bold" />
                              {t("vsConventional.table.rows.shariah.conventional")}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Use Cases */}
                <h2 id="use-cases" className="font-bold text-xl pt-4">{t("useCases.title")}</h2>
                <p>
                  {t("useCases.intro")}
                </p>

                <h3 className="font-bold text-lg pt-2">{t("useCases.cases.workingCapital.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("useCases.cases.workingCapital.example") }} />
                <ul>
                  <li>{t("useCases.cases.workingCapital.points.point1")}</li>
                  <li>{t("useCases.cases.workingCapital.points.point2")}</li>
                  <li>{t("useCases.cases.workingCapital.points.point3")}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("useCases.cases.equipment.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("useCases.cases.equipment.example") }} />
                <ul>
                  <li>{t("useCases.cases.equipment.points.point1")}</li>
                  <li>{t("useCases.cases.equipment.points.point2")}</li>
                  <li>{t("useCases.cases.equipment.points.point3")}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("useCases.cases.vehicle.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("useCases.cases.vehicle.example") }} />
                <ul>
                  <li>{t("useCases.cases.vehicle.points.point1")}</li>
                  <li>{t("useCases.cases.vehicle.points.point2")}</li>
                  <li>{t("useCases.cases.vehicle.points.point3")}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("useCases.cases.import.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("useCases.cases.import.example") }} />
                <ul>
                  <li>{t("useCases.cases.import.points.point1")}</li>
                  <li>{t("useCases.cases.import.points.point2")}</li>
                  <li>{t("useCases.cases.import.points.point3")}</li>
                </ul>

                {/* Regulatory Compliance */}
                <h2 id="compliance" className="font-bold text-xl pt-4">{t("compliance.title")}</h2>
                <p dangerouslySetInnerHTML={{ __html: t.raw("compliance.intro") }} />

                <h3 className="font-bold text-lg pt-2">{t("compliance.centralBank.title")}</h3>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.centralBank.items.licensing") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.centralBank.items.capital") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.centralBank.items.reporting") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.centralBank.items.classification") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.centralBank.items.exposure") }} />
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("compliance.ohada.title")}</h3>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.ohada.items.recognition") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.ohada.items.revenue") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.ohada.items.disclosure") }} />
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("compliance.shariah.title")}</h3>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.shariah.items.ace") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.shariah.items.review") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.shariah.items.audit") }} />
                  <li dangerouslySetInnerHTML={{ __html: t.raw("compliance.shariah.items.fatwa") }} />
                </ul>

                {/* Risks */}
                <h2 id="risks" className="font-bold text-xl pt-4">{t("risks.title")}</h2>
                <p>
                  {t("risks.intro")}
                </p>

                <h3 className="font-bold text-lg pt-2">{t("risks.commodity.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("risks.commodity.risk") }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw("risks.commodity.mitigation") }} />
                <ul>
                  <li>{t("risks.commodity.strategies.minimize")}</li>
                  <li>{t("risks.commodity.strategies.insurance")}</li>
                  <li>{t("risks.commodity.strategies.inspection")}</li>
                  <li>{t("risks.commodity.strategies.agency")}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("risks.credit.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("risks.credit.risk") }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw("risks.credit.mitigation") }} />
                <ul>
                  <li>{t("risks.credit.strategies.assessment")}</li>
                  <li>{t("risks.credit.strategies.collateral")}</li>
                  <li>{t("risks.credit.strategies.diversification")}</li>
                  <li>{t("risks.credit.strategies.monitoring")}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("risks.shariahNonCompliance.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("risks.shariahNonCompliance.risk") }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw("risks.shariahNonCompliance.mitigation") }} />
                <ul>
                  <li>{t("risks.shariahNonCompliance.strategies.advisors")}</li>
                  <li>{t("risks.shariahNonCompliance.strategies.templates")}</li>
                  <li>{t("risks.shariahNonCompliance.strategies.training")}</li>
                  <li>{t("risks.shariahNonCompliance.strategies.audits")}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("risks.legal.title")}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.raw("risks.legal.risk") }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw("risks.legal.mitigation") }} />
                <ul>
                  <li>{t("risks.legal.strategies.experts")}</li>
                  <li>{t("risks.legal.strategies.clarifications")}</li>
                  <li>{t("risks.legal.strategies.language")}</li>
                  <li>{t("risks.legal.strategies.documentation")}</li>
                </ul>

                <div className="not-prose my-16 p-8 bg-tikari-gold/10 border-l-4 border-tikari-gold rounded-r-2xl">
                  <div className="flex items-start gap-5">
                    <Handshake className="h-8 w-8 text-tikari-green-dark flex-shrink-0 mt-1" weight="bold" />
                    <div>
                      <h4 className="text-xl font-bold text-tikari-green-dark mb-3">
                        {t("cta.title")}
                      </h4>
                      <p className="text-tikari-sage text-base leading-relaxed mb-6">
                        {t("cta.description")}
                      </p>
                      <Button
                        variant="primary"
                        size="lg"
                        href="/demo"
                      >
                        {t("cta.button")}
                        <ArrowRight className="ml-2 h-4 w-4" weight="bold" />
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          </ScrollSpyContent>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-tikari-green-dark mb-8">{t("relatedArticles.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, idx) => (
              <Link
                key={idx}
                href={article.href}
                className="block bg-white border-1 border-tikari-green/20 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 group p-6 rounded-2xl"
              >
                <div className="mb-3">
                  <span className="text-xs text-tikari-sage">{article.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-tikari-green-dark mb-3 group-hover:text-tikari-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-tikari-sage leading-relaxed">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
