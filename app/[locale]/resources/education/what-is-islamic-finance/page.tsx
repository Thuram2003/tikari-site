import { Metadata } from "next";
import {
  BookOpen,
  ShieldCheck,
  Coins,
  ChartLineUp,
  Users,
  ArrowRight,
  CheckCircle
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui";
import ScrollSpyContent from "../components/ScrollSpyContent";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "education.whatIsIslamicFinance.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "Islamic finance",
      "Shariah banking",
      "Islamic banking principles",
      "halal finance",
      "riba prohibition",
      "profit sharing",
      "regulatory compliance",
      "ethical banking",
      "Shariah compliance"
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "article",
      publishedTime: "2024-01-15T00:00:00.000Z",
      authors: ["TIKARI Shariah Team"],
    },
    alternates: {
      canonical: "/resources/education/what-is-islamic-finance"
    }
  };
}

export default function WhatIsIslamicFinancePage() {
  const t = useTranslations("education.whatIsIslamicFinance");

  const tableOfContents = [
    { id: "introduction", title: t("tableOfContents.introduction") },
    { id: "core-principles", title: t("tableOfContents.corePrinciples") },
    { id: "prohibition-of-riba", title: t("tableOfContents.prohibitionRiba") },
    { id: "risk-sharing", title: t("tableOfContents.riskSharing") },
    { id: "asset-backed", title: t("tableOfContents.assetBacked") },
    { id: "ethical-investment", title: t("tableOfContents.ethicalInvestment") },
    { id: "common-products", title: t("tableOfContents.commonProducts") },
    { id: "regulatory-context", title: t("tableOfContents.regulatoryContext") },
    { id: "getting-started", title: t("tableOfContents.gettingStarted") },
  ];

  const relatedArticles = [
    {
      title: t("relatedArticles.articles.murabaha.title"),
      description: t("relatedArticles.articles.murabaha.description"),
      href: "/resources/education/understanding-murabaha",
      duration: t("relatedArticles.articles.murabaha.duration")
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

  const corePrinciples = [
    {
      icon: ShieldCheck,
      title: t("corePrinciples.principles.ribaProhibition.title"),
      description: t("corePrinciples.principles.ribaProhibition.description")
    },
    {
      icon: Users,
      title: t("corePrinciples.principles.riskSharing.title"),
      description: t("corePrinciples.principles.riskSharing.description")
    },
    {
      icon: Coins,
      title: t("corePrinciples.principles.assetBacked.title"),
      description: t("corePrinciples.principles.assetBacked.description")
    },
    {
      icon: CheckCircle,
      title: t("corePrinciples.principles.ethicalInvestment.title"),
      description: t("corePrinciples.principles.ethicalInvestment.description")
    },
    {
      icon: ChartLineUp,
      title: t("corePrinciples.principles.transparency.title"),
      description: t("corePrinciples.principles.transparency.description")
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

                  <p>{t("introduction.paragraph1")}</p>

                  <p>{t("introduction.paragraph2")}</p>
                </div>

                {/* Core Principles */}
                <h2 id="core-principles" className="font-bold text-xl pt-4">{t("corePrinciples.title")}</h2>
                <p>{t("corePrinciples.intro")}</p>

                <div className="not-prose my-12 grid gap-6 md:grid-cols-2">
                  {corePrinciples.map((principle, idx) => {
                    const Icon = principle.icon;
                    return (
                      <div
                        key={idx}
                        className="flex gap-5 p-6 bg-tikari-cream/40 border-l-4 border-tikari-gold rounded-r-2xl"
                      >
                        <div className="flex-shrink-0 mt-0.5 rounded-full">
                          <Icon className="h-7 w-7 text-tikari-green-dark" weight="bold" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-tikari-green-dark mb-2">
                            {principle.title}
                          </h4>
                          <p className="text-tikari-sage text-base leading-relaxed m-0">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Prohibition of Riba */}
                <h2 id="prohibition-of-riba" className="font-bold text-xl pt-2">{t("prohibitionRiba.title")}</h2>
                <p>{t("prohibitionRiba.intro")}</p>

                <h3 className="font-bold text-lg pt-2">{t("prohibitionRiba.whyProhibited.title")}</h3>
                <p>{t("prohibitionRiba.whyProhibited.intro")}</p>
                <ul>
                  <li><strong>{t("prohibitionRiba.whyProhibited.reasons.riskUnbalanced")}</strong></li>
                  <li><strong>{t("prohibitionRiba.whyProhibited.reasons.exploitation")}</strong></li>
                  <li><strong>{t("prohibitionRiba.whyProhibited.reasons.moneyCommodity")}</strong></li>
                  <li><strong>{t("prohibitionRiba.whyProhibited.reasons.socialInequality")}</strong></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("prohibitionRiba.replacement.title")}</h3>
                <p>{t("prohibitionRiba.replacement.intro")}</p>
                <ul>
                  <li><strong>{t("prohibitionRiba.replacement.examples.murabaha")}</strong></li>
                  <li><strong>{t("prohibitionRiba.replacement.examples.mudarabah")}</strong></li>
                  <li><strong>{t("prohibitionRiba.replacement.examples.musharakah")}</strong></li>
                </ul>

                {/* Risk-Sharing */}
                <h2 id="risk-sharing" className="font-bold text-xl pt-4">{t("riskSharing.title")}</h2>
                <p>{t("riskSharing.intro")}</p>

                <p>{t("riskSharing.benefits.title")}</p>
                <ul>
                  <li><strong>{t("riskSharing.benefits.items.fairness")}</strong></li>
                  <li><strong>{t("riskSharing.benefits.items.stability")}</strong></li>
                  <li><strong>{t("riskSharing.benefits.items.alignment")}</strong></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("riskSharing.example.title")}</h3>
                <p>{t("riskSharing.example.description")}</p>
                <ul>
                  <li>{t("riskSharing.example.profitScenario")}</li>
                  <li>{t("riskSharing.example.lossScenario")}</li>
                </ul>
                <p>{t("riskSharing.example.comparison")}</p>

                {/* Asset-Backed */}
                <h2 id="asset-backed" className="font-bold text-xl pt-4">{t("assetBacked.title")}</h2>
                <p>{t("assetBacked.intro")}</p>

                <h3 className="font-bold text-lg pt-2">{t("assetBacked.importance.title")}</h3>
                <ul>
                  <li><strong>{t("assetBacked.importance.items.prevention")}</strong></li>
                  <li><strong>{t("assetBacked.importance.items.reducesRisk")}</strong></li>
                  <li><strong>{t("assetBacked.importance.items.encourages")}</strong></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("assetBacked.examples.title")}</h3>
                <ul>
                  <li><strong>{t("assetBacked.examples.items.murabaha")}</strong></li>
                  <li><strong>{t("assetBacked.examples.items.ijara")}</strong></li>
                  <li><strong>{t("assetBacked.examples.items.salam")}</strong></li>
                </ul>

                {/* Ethical Investment */}
                <h2 id="ethical-investment" className="font-bold text-xl pt-4">{t("ethicalInvestment.title")}</h2>
                <p>{t("ethicalInvestment.intro")}</p>
                <ul>
                  <li><strong>{t("ethicalInvestment.prohibitedSectors.alcohol")}</strong></li>
                  <li><strong>{t("ethicalInvestment.prohibitedSectors.gambling")}</strong></li>
                  <li><strong>{t("ethicalInvestment.prohibitedSectors.pork")}</strong></li>
                  <li><strong>{t("ethicalInvestment.prohibitedSectors.banking")}</strong></li>
                  <li><strong>{t("ethicalInvestment.prohibitedSectors.weapons")}</strong></li>
                  <li><strong>{t("ethicalInvestment.prohibitedSectors.tobacco")}</strong></li>
                  <li><strong>{t("ethicalInvestment.prohibitedSectors.pornography")}</strong></li>
                </ul>

                <p>{t("ethicalInvestment.positive.intro")}</p>
                <ul>
                  <li>{t("ethicalInvestment.positive.sectors.healthcare")}</li>
                  <li>{t("ethicalInvestment.positive.sectors.infrastructure")}</li>
                  <li>{t("ethicalInvestment.positive.sectors.smallBusiness")}</li>
                  <li>{t("ethicalInvestment.positive.sectors.agricultural")}</li>
                  <li>{t("ethicalInvestment.positive.sectors.renewable")}</li>
                </ul>

                {/* Common Products */}
                <h2 id="common-products" className="font-bold text-xl pt-4">{t("commonProducts.title")}</h2>
                <p>{t("commonProducts.intro")}</p>

                <div className="not-prose my-12">
                  <div className="overflow-x-auto rounded-2xl border border-tikari-green/20">
                    <table className="w-full">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold">{t("commonProducts.table.headers.product")}</th>
                          <th className="px-6 py-4 text-left font-bold">{t("commonProducts.table.headers.structure")}</th>
                          <th className="px-6 py-4 text-left font-bold">{t("commonProducts.table.headers.useCase")}</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("commonProducts.table.rows.murabaha.product")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.murabaha.structure")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.murabaha.useCase")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("commonProducts.table.rows.mudarabah.product")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.mudarabah.structure")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.mudarabah.useCase")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("commonProducts.table.rows.musharakah.product")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.musharakah.structure")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.musharakah.useCase")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("commonProducts.table.rows.ijara.product")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.ijara.structure")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.ijara.useCase")}</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("commonProducts.table.rows.salam.product")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.salam.structure")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.salam.useCase")}</td>
                        </tr>
                        <tr className="bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">{t("commonProducts.table.rows.qardHassan.product")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.qardHassan.structure")}</td>
                          <td className="px-6 py-4">{t("commonProducts.table.rows.qardHassan.useCase")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Regulatory Context */}
                <h2 id="regulatory-context" className="font-bold text-xl pt-4">{t("regulatoryContext.title")}</h2>
                <p>{t("regulatoryContext.intro")}</p>

                <h3 className="font-bold text-lg pt-2">{t("regulatoryContext.frameworks.title")}</h3>
                <ul>
                  <li><strong>{t("regulatoryContext.frameworks.items.cbn")}</strong></li>
                  <li><strong>{t("regulatoryContext.frameworks.items.cemac")}</strong></li>
                  <li><strong>{t("regulatoryContext.frameworks.items.waemu")}</strong></li>
                  <li><strong>{t("regulatoryContext.frameworks.items.ohada")}</strong></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("regulatoryContext.opportunities.title")}</h3>
                <ul>
                  <li><strong>{t("regulatoryContext.opportunities.items.inclusion")}</strong></li>
                  <li><strong>{t("regulatoryContext.opportunities.items.governance")}</strong></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("regulatoryContext.challenges.title")}</h3>
                <ul>
                  <li><strong>{t("regulatoryContext.challenges.items.lackRegulations")}</strong></li>
                  <li><strong>{t("regulatoryContext.challenges.items.dualCompliance")}</strong></li>
                </ul>

                <p>
                  {t("regulatoryContext.learnMore")} <Link href="/jurisdictions" className="font-bold text-tikari-green-dark hover:underline">{t("regulatoryContext.jurisdictionsLink")}</Link> {t("regulatoryContext.page")}
                </p>

                {/* Getting Started */}
                <h2 id="getting-started" className="font-bold text-xl pt-4">{t("gettingStarted.title")}</h2>
                <p>{t("gettingStarted.intro")}</p>

                <h3 className="font-bold text-lg pt-2">{t("gettingStarted.institutions.title")}</h3>
                <ul>
                  <li><strong>{t("gettingStarted.institutions.items.board")}</strong></li>
                  <li><strong>{t("gettingStarted.institutions.items.accounting")}</strong></li>
                  <li><strong>{t("gettingStarted.institutions.items.training")}</strong></li>
                  <li><strong>{t("gettingStarted.institutions.items.products")}</strong></li>
                  <li><strong>{t("gettingStarted.institutions.items.regulatory")}</strong></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t("gettingStarted.customers.title")}</h3>
                <ul>
                  <li><strong>{t("gettingStarted.customers.items.understand")}</strong></li>
                  <li><strong>{t("gettingStarted.customers.items.questions")}</strong></li>
                  <li><strong>{t("gettingStarted.customers.items.review")}</strong></li>
                  <li><strong>{t("gettingStarted.customers.items.certified")}</strong></li>
                </ul>

                <div className="not-prose my-16 p-8 bg-tikari-gold/10 border-l-4 border-tikari-gold rounded-r-2xl">
                  <div className="flex items-start gap-5">
                    <BookOpen className="h-8 w-8 text-tikari-green-dark flex-shrink-0 mt-1" weight="bold" />
                    <div>
                      <h4 className="text-xl font-bold text-tikari-green-dark mb-3">
                        {t("gettingStarted.cta.title")}
                      </h4>
                      <p className="text-tikari-sage text-base leading-relaxed mb-6">
                        {t("gettingStarted.cta.description")}
                      </p>
                      <Button
                        variant="primary"
                        size="lg"
                        href="/demo"
                      >
                        {t("gettingStarted.cta.button")}
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

      {/* Related Articles */}
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
