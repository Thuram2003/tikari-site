import { Metadata } from "next";
import { 
  FileText,
  ArrowRight,
  ArrowsLeftRight,
  CheckCircle,
  Globe,
  Bank
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui";
import ScrollSpyContent from "../components/ScrollSpyContent";
import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'education.aaoifiVsOhada' });
  
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default function AAOIFIvsOHADAPage() {
  const t = useTranslations('education.aaoifiVsOhada');

  const tableOfContents = [
    { id: "introduction", title: t('tableOfContents.introduction') },
    { id: "aaoifi-overview", title: t('tableOfContents.aaoifiOverview') },
    { id: "ohada-overview", title: t('tableOfContents.ohadaOverview') },
    { id: "key-differences", title: t('tableOfContents.keyDifferences') },
    { id: "chart-of-accounts", title: t('tableOfContents.chartOfAccounts') },
    { id: "financial-statements", title: t('tableOfContents.financialStatements') },
    { id: "dual-compliance", title: t('tableOfContents.dualCompliance') },
    { id: "practical-implementation", title: t('tableOfContents.practicalImplementation') },
    { id: "software-solutions", title: t('tableOfContents.softwareSolutions') },
  ];

  const relatedArticles = [
    {
      title: t('relatedArticles.articles.whatIsIslamic.title'),
      description: t('relatedArticles.articles.whatIsIslamic.description'),
      href: "/resources/education/what-is-islamic-finance",
      duration: t('relatedArticles.articles.whatIsIslamic.duration')
    },
    {
      title: t('relatedArticles.articles.murabaha.title'),
      description: t('relatedArticles.articles.murabaha.description'),
      href: "/resources/education/understanding-murabaha",
      duration: t('relatedArticles.articles.murabaha.duration')
    },
    {
      title: t('relatedArticles.articles.psr.title'),
      description: t('relatedArticles.articles.psr.description'),
      href: "/resources/education/profit-sharing-ratio",
      duration: t('relatedArticles.articles.psr.duration')
    }
  ];

  const keyDifferenceRows = [
    "purpose",
    "geographicScope",
    "language",
    "chartOfAccounts",
    "investmentAccounts",
    "profitDistribution",
    "zakat",
    "shariahCompliance",
  ] as const;

  const syscohadaClasses = [
    "class1",
    "class2",
    "class3",
    "class4",
    "class5",
    "class6",
    "class7",
    "class8",
  ] as const;

  const mappingCards = [
    "murabaha",
    "mudarabah",
    "profitDistribution",
    "zakat",
  ] as const;

  const parallelAccountRows = [
    "murabaha",
    "mudarabah",
    "musharakah",
    "ijara",
  ] as const;

  const tikariFeatures = [
    {
      icon: FileText,
      title: t('content.softwareSolutions.tikariFeatures.cards.preMapped.title'),
      description: t('content.softwareSolutions.tikariFeatures.cards.preMapped.description')
    },
    {
      icon: ArrowsLeftRight,
      title: t('content.softwareSolutions.tikariFeatures.cards.reconciliation.title'),
      description: t('content.softwareSolutions.tikariFeatures.cards.reconciliation.description')
    },
    {
      icon: Globe,
      title: t('content.softwareSolutions.tikariFeatures.cards.bilingual.title'),
      description: t('content.softwareSolutions.tikariFeatures.cards.bilingual.description')
    },
    {
      icon: Bank,
      title: t('content.softwareSolutions.tikariFeatures.cards.regulatorReady.title'),
      description: t('content.softwareSolutions.tikariFeatures.cards.regulatorReady.description')
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
            {t('hero.backLink')}
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="bg-tikari-gold/20 text-tikari-gold px-3 py-1 rounded-full text-xs font-semibold border border-tikari-gold/30">
              {t('hero.badge.level')}
            </span>
            <span className="text-white/70 text-sm">{t('hero.badge.duration')}</span>
            <span className="text-white/70 text-sm">{t('hero.badge.updated')}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl">
            {t('hero.subtitle')}
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
                    {t('content.introduction.leadParagraph')}
                  </p>

                  <p>
                    {t('content.introduction.paragraph2')}
                  </p>

                  <div className="not-prose my-8 p-6 bg-tikari-gold/10 border-l-4 border-tikari-gold rounded-r-2xl">
                    <h4 className="text-lg font-bold text-tikari-green-dark mb-3">{t('content.introduction.whyMatters.title')}</h4>
                    <ul className="space-y-2 text-tikari-sage">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                        <span><strong>{t('content.introduction.whyMatters.items.regulatory.label')}</strong> {t('content.introduction.whyMatters.items.regulatory.text')}</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                        <span><strong>{t('content.introduction.whyMatters.items.shariah.label')}</strong> {t('content.introduction.whyMatters.items.shariah.text')}</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                        <span><strong>{t('content.introduction.whyMatters.items.stakeholder.label')}</strong> {t('content.introduction.whyMatters.items.stakeholder.text')}</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                        <span><strong>{t('content.introduction.whyMatters.items.efficiency.label')}</strong> {t('content.introduction.whyMatters.items.efficiency.text')}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* AAOIFI Overview */}
                <h2 id="aaoifi-overview" className="font-bold text-xl pt-4">{t('content.aaoifiOverview.title')}</h2>
                <p>
                  {t('content.aaoifiOverview.intro')}
                </p>

                <h3 className="pt-2 font-bold text-lg">{t('content.aaoifiOverview.scope.title')}</h3>
                <p>
                  {t('content.aaoifiOverview.scope.intro')}
                </p>
                <ul>
                  <li><strong>{t('content.aaoifiOverview.scope.items.fas.label')}</strong> {t('content.aaoifiOverview.scope.items.fas.text')}</li>
                  <li><strong>{t('content.aaoifiOverview.scope.items.ss.label')}</strong> {t('content.aaoifiOverview.scope.items.ss.text')}</li>
                  <li><strong>{t('content.aaoifiOverview.scope.items.gs.label')}</strong> {t('content.aaoifiOverview.scope.items.gs.text')}</li>
                  <li><strong>{t('content.aaoifiOverview.scope.items.as.label')}</strong> {t('content.aaoifiOverview.scope.items.as.text')}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.aaoifiOverview.principles.title')}</h3>
                <ul>
                  <li><strong>{t('content.aaoifiOverview.principles.items.substance.label')}</strong> {t('content.aaoifiOverview.principles.items.substance.text')}</li>
                  <li><strong>{t('content.aaoifiOverview.principles.items.shariah.label')}</strong> {t('content.aaoifiOverview.principles.items.shariah.text')}</li>
                  <li><strong>{t('content.aaoifiOverview.principles.items.transparency.label')}</strong> {t('content.aaoifiOverview.principles.items.transparency.text')}</li>
                  <li><strong>{t('content.aaoifiOverview.principles.items.stakeholder.label')}</strong> {t('content.aaoifiOverview.principles.items.stakeholder.text')}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.aaoifiOverview.adoption.title')}</h3>
                <p>
                  {t('content.aaoifiOverview.adoption.text')}
                </p>

                {/* OHADA Overview */}
                <h2 id="ohada-overview" className="font-bold text-xl pt-4">{t('content.ohadaOverview.title')}</h2>
                <p>
                  {t('content.ohadaOverview.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('content.ohadaOverview.framework.title')}</h3>
                <p>
                  {t('content.ohadaOverview.framework.intro')}
                </p>
                <ul>
                  <li><strong>{t('content.ohadaOverview.framework.items.chart.label')}</strong> {t('content.ohadaOverview.framework.items.chart.text')}</li>
                  <li><strong>{t('content.ohadaOverview.framework.items.formats.label')}</strong> {t('content.ohadaOverview.framework.items.formats.text')}</li>
                  <li><strong>{t('content.ohadaOverview.framework.items.principles.label')}</strong> {t('content.ohadaOverview.framework.items.principles.text')}</li>
                  <li><strong>{t('content.ohadaOverview.framework.items.disclosure.label')}</strong> {t('content.ohadaOverview.framework.items.disclosure.text')}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.ohadaOverview.features.title')}</h3>
                <ul>
                  <li><strong>{t('content.ohadaOverview.features.items.francophone.label')}</strong> {t('content.ohadaOverview.features.items.francophone.text')}</li>
                  <li><strong>{t('content.ohadaOverview.features.items.classBased.label')}</strong> {t('content.ohadaOverview.features.items.classBased.text')}</li>
                  <li><strong>{t('content.ohadaOverview.features.items.smeFriendly.label')}</strong> {t('content.ohadaOverview.features.items.smeFriendly.text')}</li>
                  <li><strong>{t('content.ohadaOverview.features.items.legal.label')}</strong> {t('content.ohadaOverview.features.items.legal.text')}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.ohadaOverview.application.title')}</h3>
                <p>
                  {t('content.ohadaOverview.application.intro')}
                </p>
                <ul>
                  <li>{t('content.ohadaOverview.application.items.syscohada')}</li>
                  <li>{t('content.ohadaOverview.application.items.quarterly')}</li>
                  <li>{t('content.ohadaOverview.application.items.comply')}</li>
                  <li>{t('content.ohadaOverview.application.items.audit')}</li>
                </ul>

                {/* Key Differences */}
                <h2 id="key-differences" className="font-bold text-xl pt-4">{t('content.keyDifferences.title')}</h2>
                <p>
                  {t('content.keyDifferences.intro')}
                </p>

                <div className="not-prose my-8">
                  <div className="overflow-x-auto rounded-2xl">
                    <table className="w-full border-1 border-tikari-green/20 text-sm">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold">{t('content.keyDifferences.table.headers.aspect')}</th>
                          <th className="px-4 py-3 text-left font-bold">{t('content.keyDifferences.table.headers.aaoifi')}</th>
                          <th className="px-4 py-3 text-left font-bold">{t('content.keyDifferences.table.headers.ohada')}</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        {keyDifferenceRows.map((rowKey, idx) => (
                          <tr 
                            key={rowKey}
                            className={`border-b border-tikari-green/20 ${idx % 2 === 1 ? 'bg-tikari-cream/30' : ''} ${idx === keyDifferenceRows.length - 1 ? 'border-b-0' : ''}`}
                          >
                            <td className="px-4 py-3 font-semibold text-tikari-green-dark">
                              {t(`content.keyDifferences.table.rows.${rowKey}.aspect`)}
                            </td>
                            <td className="px-4 py-3">
                              {t(`content.keyDifferences.table.rows.${rowKey}.aaoifi`)}
                            </td>
                            <td className="px-4 py-3">
                              {t(`content.keyDifferences.table.rows.${rowKey}.ohada`)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Chart of Accounts Mapping */}
                <h2 id="chart-of-accounts" className="font-bold text-xl pt-4">{t('content.chartOfAccounts.title')}</h2>
                <p>
                  {t('content.chartOfAccounts.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('content.chartOfAccounts.syscohada.title')}</h3>
                <p>
                  {t('content.chartOfAccounts.syscohada.intro')}
                </p>
                <ul>
                  {syscohadaClasses.map((clsKey) => (
                    <li key={clsKey}>
                      <strong>{t(`content.chartOfAccounts.syscohada.classes.${clsKey}.label`)}</strong> {t(`content.chartOfAccounts.syscohada.classes.${clsKey}.text`)}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.chartOfAccounts.mapping.title')}</h3>

                <div className="not-prose my-8">
                  <div className="space-y-6">
                    {mappingCards.map((cardKey) => (
                      <div key={cardKey} className="p-6 bg-white border-1 border-tikari-green/20 rounded-2xl">
                        <h4 className="text-lg font-bold text-tikari-green-dark mb-4">
                          {t(`content.chartOfAccounts.mapping.cards.${cardKey}.title`)}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                            <span className="text-tikari-sage">{t('content.chartOfAccounts.mapping.aaoifiLabel')}</span>
                            <span className="font-mono text-tikari-green-dark">{t(`content.chartOfAccounts.mapping.cards.${cardKey}.aaoifiValue`)}</span>
                          </div>
                          <div className="flex items-center justify-center py-2">
                            <ArrowsLeftRight className="h-6 w-6 text-tikari-gold" weight="bold" />
                          </div>
                          <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                            <span className="text-tikari-sage">{t('content.chartOfAccounts.mapping.ohadaLabel')}</span>
                            <span className="font-mono text-tikari-green-dark">{t(`content.chartOfAccounts.mapping.cards.${cardKey}.ohadaValue`)}</span>
                          </div>
                        </div>
                        <p className="text-sm text-tikari-sage mt-4 italic">
                          {t(`content.chartOfAccounts.mapping.cards.${cardKey}.note`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Statements */}
                <h2 id="financial-statements" className="font-bold text-xl pt-4">{t('content.financialStatements.title')}</h2>
                <p>
                  {t('content.financialStatements.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('content.financialStatements.aaoifiStatements.title')}</h3>
                <ul>
                  <li><strong>{t('content.financialStatements.aaoifiStatements.items.balanceSheet')}</strong></li>
                  <li><strong>{t('content.financialStatements.aaoifiStatements.items.incomeStatement')}</strong></li>
                  <li><strong>{t('content.financialStatements.aaoifiStatements.items.cashFlows')}</strong></li>
                  <li><strong>{t('content.financialStatements.aaoifiStatements.items.changesInEquity')}</strong></li>
                  <li><strong>{t('content.financialStatements.aaoifiStatements.items.restrictedInvestments')}</strong></li>
                  <li><strong>{t('content.financialStatements.aaoifiStatements.items.zakatFunds')}</strong></li>
                  <li><strong>{t('content.financialStatements.aaoifiStatements.items.notes')}</strong></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.financialStatements.ohadaStatements.title')}</h3>
                <ul>
                  <li><strong>{t('content.financialStatements.ohadaStatements.items.balanceSheet')}</strong></li>
                  <li><strong>{t('content.financialStatements.ohadaStatements.items.incomeStatement')}</strong></li>
                  <li><strong>{t('content.financialStatements.ohadaStatements.items.cashFlows')}</strong></li>
                  <li><strong>{t('content.financialStatements.ohadaStatements.items.notes')}</strong></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.financialStatements.reconciliation.title')}</h3>
                <p>
                  {t('content.financialStatements.reconciliation.intro')}
                </p>
                <ol>
                  <li><strong>{t('content.financialStatements.reconciliation.steps.aaoifiBooks.label')}</strong> {t('content.financialStatements.reconciliation.steps.aaoifiBooks.text')}</li>
                  <li><strong>{t('content.financialStatements.reconciliation.steps.mappingRules.label')}</strong> {t('content.financialStatements.reconciliation.steps.mappingRules.text')}</li>
                  <li><strong>{t('content.financialStatements.reconciliation.steps.ohadaStatements.label')}</strong> {t('content.financialStatements.reconciliation.steps.ohadaStatements.text')}</li>
                  <li><strong>{t('content.financialStatements.reconciliation.steps.notesSupplement.label')}</strong> {t('content.financialStatements.reconciliation.steps.notesSupplement.text')}</li>
                </ol>

                {/* Dual Compliance */}
                <h2 id="dual-compliance" className="font-bold text-xl pt-4">{t('content.dualCompliance.title')}</h2>
                <p>
                  {t('content.dualCompliance.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('content.dualCompliance.step1.title')}</h3>
                <p>
                  {t('content.dualCompliance.step1.intro')}
                </p>

                <div className="not-prose my-6">
                  <div className="overflow-x-auto rounded-2xl">
                    <table className="w-full border-1 border-tikari-green/20 text-sm rounded-2xl">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold">{t('content.dualCompliance.step1.table.headers.product')}</th>
                          <th className="px-4 py-3 text-left font-bold">{t('content.dualCompliance.step1.table.headers.aaoifiAccount')}</th>
                          <th className="px-4 py-3 text-left font-bold">{t('content.dualCompliance.step1.table.headers.ohadaCode')}</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        {parallelAccountRows.map((rowKey, idx) => (
                          <tr 
                            key={rowKey}
                            className={`border-b border-tikari-green/20 ${idx % 2 === 1 ? 'bg-tikari-cream/30' : ''} ${idx === parallelAccountRows.length - 1 ? 'border-b-0' : ''}`}
                          >
                            <td className="px-4 py-3 font-medium text-tikari-green-dark">
                              {t(`content.dualCompliance.step1.table.rows.${rowKey}.product`)}
                            </td>
                            <td className="px-4 py-3 font-mono text-xs">
                              {t(`content.dualCompliance.step1.table.rows.${rowKey}.aaoifiAccount`)}
                            </td>
                            <td className="px-4 py-3 font-mono text-xs">
                              {t(`content.dualCompliance.step1.table.rows.${rowKey}.ohadaCode`)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <h3 className="font-bold text-lg pt-2">{t('content.dualCompliance.step2.title')}</h3>
                <p>
                  {t('content.dualCompliance.step2.intro')}
                </p>
                <ul>
                  <li><strong>{t('content.dualCompliance.step2.items.customer.label')}</strong> {t('content.dualCompliance.step2.items.customer.text')}</li>
                  <li><strong>{t('content.dualCompliance.step2.items.investment.label')}</strong> {t('content.dualCompliance.step2.items.investment.text')}</li>
                  <li><strong>{t('content.dualCompliance.step2.items.shariah.label')}</strong> {t('content.dualCompliance.step2.items.shariah.text')}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.dualCompliance.step3.title')}</h3>
                <p>
                  {t('content.dualCompliance.step3.intro')}
                </p>
                <ol>
                  <li>{t('content.dualCompliance.step3.steps.step1')}</li>
                  <li>{t('content.dualCompliance.step3.steps.step2')}</li>
                  <li>{t('content.dualCompliance.step3.steps.step3')}</li>
                  <li>{t('content.dualCompliance.step3.steps.step4')}</li>
                  <li>{t('content.dualCompliance.step3.steps.step5')}</li>
                  <li>{t('content.dualCompliance.step3.steps.step6')}</li>
                </ol>

                <h3 className="font-bold text-lg pt-2">{t('content.dualCompliance.step4.title')}</h3>
                <p>
                  {t('content.dualCompliance.step4.intro')}
                </p>
                <ul>
                  <li><strong>{t('content.dualCompliance.step4.notes.note1.label')}</strong> {t('content.dualCompliance.step4.notes.note1.text')}</li>
                  <li><strong>{t('content.dualCompliance.step4.notes.note2.label')}</strong> {t('content.dualCompliance.step4.notes.note2.text')}</li>
                  <li><strong>{t('content.dualCompliance.step4.notes.note3.label')}</strong> {t('content.dualCompliance.step4.notes.note3.text')}</li>
                  <li><strong>{t('content.dualCompliance.step4.notes.note4.label')}</strong> {t('content.dualCompliance.step4.notes.note4.text')}</li>
                  <li><strong>{t('content.dualCompliance.step4.notes.note5.label')}</strong> {t('content.dualCompliance.step4.notes.note5.text')}</li>
                </ul>

                {/* Practical Implementation */}
                <h2 id="practical-implementation" className="font-bold text-xl pt-4">{t('content.practicalImplementation.title')}</h2>
                <p>
                  {t('content.practicalImplementation.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('content.practicalImplementation.tip1.title')}</h3>
                <p>
                  {t('content.practicalImplementation.tip1.intro')}
                </p>
                <ul>
                  <li>{t('content.practicalImplementation.tip1.products.murabaha')}</li>
                  <li>{t('content.practicalImplementation.tip1.products.mudarabah')}</li>
                  <li>{t('content.practicalImplementation.tip1.products.qardHassan')}</li>
                </ul>
                <p>
                  {t('content.practicalImplementation.tip1.complexProducts')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('content.practicalImplementation.tip2.title')}</h3>
                <ul>
                  <li><strong>{t('content.practicalImplementation.tip2.items.aaoifiExpert.label')}</strong> {t('content.practicalImplementation.tip2.items.aaoifiExpert.text')}</li>
                  <li><strong>{t('content.practicalImplementation.tip2.items.ohadaPractitioner.label')}</strong> {t('content.practicalImplementation.tip2.items.ohadaPractitioner.text')}</li>
                  <li><strong>{t('content.practicalImplementation.tip2.items.shariahCoordination.label')}</strong> {t('content.practicalImplementation.tip2.items.shariahCoordination.text')}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.practicalImplementation.tip3.title')}</h3>
                <p>
                  {t('content.practicalImplementation.tip3.intro')}
                </p>
                <ul>
                  <li>{t('content.practicalImplementation.tip3.items.mappingRationale')}</li>
                  <li>{t('content.practicalImplementation.tip3.items.profitClassification')}</li>
                  <li>{t('content.practicalImplementation.tip3.items.balanceSheetTreatment')}</li>
                </ul>
                <p>
                  {t('content.practicalImplementation.tip3.conclusion')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('content.practicalImplementation.tip4.title')}</h3>
                <p>
                  {t('content.practicalImplementation.tip4.text')}
                </p>

                {/* Software Solutions */}
                <h2 id="software-solutions" className="font-bold text-xl pt-4">{t('content.softwareSolutions.title')}</h2>
                <p>
                  {t('content.softwareSolutions.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('content.softwareSolutions.requirements.title')}</h3>
                <ul>
                  <li><strong>{t('content.softwareSolutions.requirements.items.dualChart.label')}</strong> {t('content.softwareSolutions.requirements.items.dualChart.text')}</li>
                  <li><strong>{t('content.softwareSolutions.requirements.items.automatedMapping.label')}</strong> {t('content.softwareSolutions.requirements.items.automatedMapping.text')}</li>
                  <li><strong>{t('content.softwareSolutions.requirements.items.parallelReporting.label')}</strong> {t('content.softwareSolutions.requirements.items.parallelReporting.text')}</li>
                  <li><strong>{t('content.softwareSolutions.requirements.items.subledgerManagement.label')}</strong> {t('content.softwareSolutions.requirements.items.subledgerManagement.text')}</li>
                  <li><strong>{t('content.softwareSolutions.requirements.items.reconciliationTools.label')}</strong> {t('content.softwareSolutions.requirements.items.reconciliationTools.text')}</li>
                  <li><strong>{t('content.softwareSolutions.requirements.items.multilingualSupport.label')}</strong> {t('content.softwareSolutions.requirements.items.multilingualSupport.text')}</li>
                  <li><strong>{t('content.softwareSolutions.requirements.items.auditTrail.label')}</strong> {t('content.softwareSolutions.requirements.items.auditTrail.text')}</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('content.softwareSolutions.tikariFeatures.title')}</h3>
                <p>
                  {t('content.softwareSolutions.tikariFeatures.intro')}
                </p>

                <div className="not-prose my-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {tikariFeatures.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={idx} className="flex gap-4 p-6 bg-tikari-cream/40 border-1 border-tikari-green/20 rounded-2xl">
                          <div className="flex-shrink-0">
                            <Icon className="h-8 w-8 text-tikari-green-dark" weight="bold" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-tikari-green-dark mb-2">{feature.title}</h4>
                            <p className="text-sm text-tikari-sage leading-relaxed m-0">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="not-prose my-12 p-8 bg-tikari-gold/10 border-l-4 border-tikari-gold rounded-r-2xl">
                  <div className="flex items-start gap-4">
                    <FileText className="h-8 w-8 text-tikari-green-dark flex-shrink-0 mt-1" weight="bold" />
                    <div>
                      <h4 className="text-xl font-bold text-tikari-green-dark mb-3">{t('content.cta.title')}</h4>
                      <p className="text-tikari-sage text-base leading-relaxed mb-4">
                        {t('content.cta.description')}
                      </p>
                      <Button
                        variant="primary"
                        size="lg"
                        href="/demo"
                      >
                        {t('content.cta.button')}
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
          <h2 className="text-3xl font-bold text-tikari-green-dark mb-8">{t('relatedArticles.title')}</h2>
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
