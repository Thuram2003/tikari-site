import { Metadata } from "next";
import { 
  ChartLineUp,
  ArrowRight,
  Warning,
  CheckCircle,
  Scales,
  FileText
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui";
import ScrollSpyContent from "../components/ScrollSpyContent";
import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'education.profitSharingRatio' });
  
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default function ProfitSharingRatioPage() {
  const t = useTranslations('education.profitSharingRatio');
  
  const tableOfContents = [
    { id: "introduction", title: t('tableOfContents.introduction') },
    { id: "why-matters", title: t('tableOfContents.whyMatters') },
    { id: "aaoifi-requirements", title: t('tableOfContents.aaoifiRequirements') },
    { id: "disclosure-best-practices", title: t('tableOfContents.disclosureBestPractices') },
    { id: "calculation-examples", title: t('tableOfContents.calculationExamples') },
    { id: "common-mistakes", title: t('tableOfContents.commonMistakes') },
    { id: "regulatory-context", title: t('tableOfContents.regulatoryContext') },
    { id: "customer-education", title: t('tableOfContents.customerEducation') },
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
      title: t('relatedArticles.articles.aaoifiOhada.title'),
      description: t('relatedArticles.articles.aaoifiOhada.description'),
      href: "/resources/education/aaoifi-vs-ohada",
      duration: t('relatedArticles.articles.aaoifiOhada.duration')
    }
  ];

  const whyMattersReasons = [
    {
      icon: Scales,
      title: t('whyMatters.reasons.shariahCompliance.title'),
      description: t('whyMatters.reasons.shariahCompliance.description')
    },
    {
      icon: CheckCircle,
      title: t('whyMatters.reasons.customerTrust.title'),
      description: t('whyMatters.reasons.customerTrust.description')
    },
    {
      icon: FileText,
      title: t('whyMatters.reasons.regulatoryCompliance.title'),
      description: t('whyMatters.reasons.regulatoryCompliance.description')
    },
    {
      icon: ChartLineUp,
      title: t('whyMatters.reasons.informedDecisions.title'),
      description: t('whyMatters.reasons.informedDecisions.description')
    }
  ];

  const fas6Requirements = [
    { label: t('aaoifiRequirements.fas6.requirements.precontractual.label'), text: t('aaoifiRequirements.fas6.requirements.precontractual.text') },
    { label: t('aaoifiRequirements.fas6.requirements.written.label'), text: t('aaoifiRequirements.fas6.requirements.written.text') },
    { label: t('aaoifiRequirements.fas6.requirements.methodology.label'), text: t('aaoifiRequirements.fas6.requirements.methodology.text') },
    { label: t('aaoifiRequirements.fas6.requirements.loss.label'), text: t('aaoifiRequirements.fas6.requirements.loss.text') },
  ];

  const fas11Items = [
    { label: t('aaoifiRequirements.fas11.items.per.label'), text: t('aaoifiRequirements.fas11.items.per.text') },
    { label: t('aaoifiRequirements.fas11.items.irr.label'), text: t('aaoifiRequirements.fas11.items.irr.text') },
    { label: t('aaoifiRequirements.fas11.items.transparency.label'), text: t('aaoifiRequirements.fas11.items.transparency.text') },
  ];

  const shariah40Requirements = [
    t('aaoifiRequirements.shariah40.requirements.percentage'),
    t('aaoifiRequirements.shariah40.requirements.agreement'),
    t('aaoifiRequirements.shariah40.requirements.tiered'),
    t('aaoifiRequirements.shariah40.requirements.changes'),
  ];

  const proactiveCommunicationItems = [
    { label: t('bestPractices.proactiveCommunication.items.marketing.label'), text: t('bestPractices.proactiveCommunication.items.marketing.text') },
    { label: t('bestPractices.proactiveCommunication.items.accountOpening.label'), text: t('bestPractices.proactiveCommunication.items.accountOpening.text') },
    { label: t('bestPractices.proactiveCommunication.items.welcomeKits.label'), text: t('bestPractices.proactiveCommunication.items.welcomeKits.text') },
    { label: t('bestPractices.proactiveCommunication.items.statements.label'), text: t('bestPractices.proactiveCommunication.items.statements.text') },
  ];

  const comparativeContextItems = [
    { label: t('bestPractices.comparativeContext.items.conventional.label'), text: t('bestPractices.comparativeContext.items.conventional.text') },
    { label: t('bestPractices.comparativeContext.items.islamic.label'), text: t('bestPractices.comparativeContext.items.islamic.text') },
  ];

  const tieredPSRRows = [
    {
      level: t('calculationExamples.scenario3.tiers.tier1.level'),
      customer: t('calculationExamples.scenario3.tiers.tier1.customer'),
      bank: t('calculationExamples.scenario3.tiers.tier1.bank'),
      isStriped: false
    },
    {
      level: t('calculationExamples.scenario3.tiers.tier2.level'),
      customer: t('calculationExamples.scenario3.tiers.tier2.customer'),
      bank: t('calculationExamples.scenario3.tiers.tier2.bank'),
      isStriped: true
    },
    {
      level: t('calculationExamples.scenario3.tiers.tier3.level'),
      customer: t('calculationExamples.scenario3.tiers.tier3.customer'),
      bank: t('calculationExamples.scenario3.tiers.tier3.bank'),
      isStriped: true
    }
  ];

  const commonMistakesList = [
    {
      mistake: t('commonMistakes.mistakes.mistake1.title'),
      why: t('commonMistakes.mistakes.mistake1.why'),
      fix: t('commonMistakes.mistakes.mistake1.fix')
    },
    {
      mistake: t('commonMistakes.mistakes.mistake2.title'),
      why: t('commonMistakes.mistakes.mistake2.why'),
      fix: t('commonMistakes.mistakes.mistake2.fix')
    },
    {
      mistake: t('commonMistakes.mistakes.mistake3.title'),
      why: t('commonMistakes.mistakes.mistake3.why'),
      fix: t('commonMistakes.mistakes.mistake3.fix')
    },
    {
      mistake: t('commonMistakes.mistakes.mistake4.title'),
      why: t('commonMistakes.mistakes.mistake4.why'),
      fix: t('commonMistakes.mistakes.mistake4.fix')
    },
    {
      mistake: t('commonMistakes.mistakes.mistake5.title'),
      why: t('commonMistakes.mistakes.mistake5.why'),
      fix: t('commonMistakes.mistakes.mistake5.fix')
    },
  ];

  const dualComplianceItems = [
    { label: t('regulatoryContext.dualCompliance.items.aaoifi.label'), text: t('regulatoryContext.dualCompliance.items.aaoifi.text') },
    { label: t('regulatoryContext.dualCompliance.items.centralBank.label'), text: t('regulatoryContext.dualCompliance.items.centralBank.text') },
    { label: t('regulatoryContext.dualCompliance.items.ohada.label'), text: t('regulatoryContext.dualCompliance.items.ohada.text') },
  ];

  const languageAdaptationItems = [
    { label: t('regulatoryContext.languageAdaptations.items.francophone.label'), text: t('regulatoryContext.languageAdaptations.items.francophone.text') },
    { label: t('regulatoryContext.languageAdaptations.items.anglophone.label'), text: t('regulatoryContext.languageAdaptations.items.anglophone.text') },
  ];

  const reportingRequirementItems = [
    t('regulatoryContext.reportingRequirements.items.balances'),
    t('regulatoryContext.reportingRequirements.items.ranges'),
    t('regulatoryContext.reportingRequirements.items.allocation'),
    t('regulatoryContext.reportingRequirements.items.reserves'),
  ];

  const workshopItems = [
    t('customerEducation.workshops.items.difference'),
    t('customerEducation.workshops.items.fluctuation'),
    t('customerEducation.workshops.items.statements'),
  ];

  const digitalToolItems = [
    { label: t('customerEducation.digitalTools.items.calculator.label'), text: t('customerEducation.digitalTools.items.calculator.text') },
    { label: t('customerEducation.digitalTools.items.videos.label'), text: t('customerEducation.digitalTools.items.videos.text') },
    { label: t('customerEducation.digitalTools.items.faq.label'), text: t('customerEducation.digitalTools.items.faq.text') },
  ];

  const quarterlyUpdateItems = [
    t('customerEducation.quarterlyUpdates.items.opening'),
    t('customerEducation.quarterlyUpdates.items.totalProfits'),
    t('customerEducation.quarterlyUpdates.items.psrSplit'),
    t('customerEducation.quarterlyUpdates.items.credited'),
    t('customerEducation.quarterlyUpdates.items.closing'),
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
                    {t('introduction.leadParagraph')}
                  </p>

                  <p>
                    {t('introduction.paragraph1')}
                  </p>

                  <p>
                    {t('introduction.paragraph2')}
                  </p>
                  <ul>
                    <li><strong>{t('introduction.example.customer.percent')}</strong> {t('introduction.example.customer.text')}</li>
                    <li><strong>{t('introduction.example.bank.percent')}</strong> {t('introduction.example.bank.text')}</li>
                  </ul>

                  <p>
                    {t('introduction.paragraph3')}
                  </p>
                </div>

                {/* Why It Matters */}
                <h2 id="why-matters" className="font-bold text-xl pt-4">{t('whyMatters.title')}</h2>
                <p>
                  {t('whyMatters.intro')}
                </p>

                <div className="not-prose my-8 grid gap-4">
                  {whyMattersReasons.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-4 p-6 bg-tikari-cream/40 border-l-4 border-tikari-gold rounded-r-2xl">
                        <div className="flex-shrink-0">
                          <Icon className="h-8 w-8 text-tikari-green-dark" weight="bold" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-tikari-green-dark mb-2">{item.title}</h4>
                          <p className="text-tikari-sage text-base leading-relaxed m-0">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* AAOIFI Requirements */}
                <h2 id="aaoifi-requirements" className="font-bold text-xl pt-4">{t('aaoifiRequirements.title')}</h2>
                <p>
                  {t('aaoifiRequirements.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('aaoifiRequirements.fas6.title')}</h3>
                <p>
                  {t('aaoifiRequirements.fas6.intro')}
                </p>
                <ul>
                  {fas6Requirements.map((req, idx) => (
                    <li key={idx}>
                      <strong>{req.label}</strong> {req.text}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('aaoifiRequirements.fas11.title')}</h3>
                <p>
                  {t('aaoifiRequirements.fas11.intro')}
                </p>
                <ul>
                  {fas11Items.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('aaoifiRequirements.shariah40.title')}</h3>
                <p>
                  {t('aaoifiRequirements.shariah40.intro')}
                </p>
                <ul>
                  {shariah40Requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>

                {/* Best Practices */}
                <h2 id="disclosure-best-practices" className="font-bold text-xl pt-4">{t('bestPractices.title')}</h2>
                <p>
                  {t('bestPractices.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('bestPractices.proactiveCommunication.title')}</h3>
                <ul>
                  {proactiveCommunicationItems.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('bestPractices.plainLanguage.title')}</h3>
                <p>
                  {t('bestPractices.plainLanguage.intro')}
                </p>
                <div className="not-prose my-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-2xl">
                  <p className="text-tikari-sage italic">
                    {t('bestPractices.plainLanguage.badExample')}
                  </p>
                </div>

                <p>
                  {t('bestPractices.plainLanguage.goodIntro')}
                </p>
                <div className="not-prose my-6 p-4 bg-green-50 border-l-4 border-green-600 rounded-r-2xl">
                  <p className="text-tikari-sage">
                    {t('bestPractices.plainLanguage.goodExample')}
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">{t('bestPractices.visualAids.title')}</h3>
                <p>
                  {t('bestPractices.visualAids.intro')}
                </p>

                <div className="not-prose my-8 p-6 bg-tikari-gold/10 border-2 border-tikari-gold/30 rounded-2xl">
                  <h4 className="text-lg font-bold text-tikari-green-dark mb-4">{t('bestPractices.visualAids.exampleTitle')}</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-tikari-green-dark">{t('bestPractices.visualAids.customerShare')}</span>
                        <span className="text-sm font-mono font-bold">70%</span>
                      </div>
                      <div className="w-full bg-tikari-cream h-8 rounded overflow-hidden">
                        <div className="bg-tikari-green-dark h-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-tikari-sage">{t('bestPractices.visualAids.bankShare')}</span>
                        <span className="text-sm font-mono">30%</span>
                      </div>
                      <div className="w-full bg-tikari-cream h-8 rounded overflow-hidden">
                        <div className="bg-tikari-gold h-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    {t('bestPractices.visualAids.exampleNote')}
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">{t('bestPractices.comparativeContext.title')}</h3>
                <p>
                  {t('bestPractices.comparativeContext.intro')}
                </p>
                <ul>
                  {comparativeContextItems.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>
                <p>
                  {t('bestPractices.comparativeContext.clarification')}
                </p>

                {/* Calculation Examples */}
                <h2 id="calculation-examples" className="font-bold text-xl pt-4">{t('calculationExamples.title')}</h2>
                <p>
                  {t('calculationExamples.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('calculationExamples.scenario1.title')}</h3>
                <div className="not-prose my-6 p-6 bg-tikari-cream rounded-2xl">
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">{t('calculationExamples.scenario1.setupLabel')}</strong> {t('calculationExamples.scenario1.setupDetail')}
                  </p>
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">{t('calculationExamples.scenario1.performanceLabel')}</strong> {t('calculationExamples.scenario1.performanceDetail')}
                  </p>
                  <div className="space-y-2 text-tikari-sage">
                    <div className="flex justify-between py-2 border-b border-tikari-green/20">
                      <span>{t('calculationExamples.scenario1.totalProfitLabel')}</span>
                      <span className="font-mono">{t('calculationExamples.scenario1.totalProfitValue')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-tikari-green/20">
                      <span className="font-semibold">{t('calculationExamples.scenario1.customerShareLabel')}</span>
                      <span className="font-mono font-semibold text-tikari-green-dark">{t('calculationExamples.scenario1.customerShareValue')}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>{t('calculationExamples.scenario1.bankShareLabel')}</span>
                      <span className="font-mono">{t('calculationExamples.scenario1.bankShareValue')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t-2 border-tikari-green-dark mt-2 pt-2">
                      <span className="font-bold text-tikari-green-dark">{t('calculationExamples.scenario1.accountBalanceLabel')}</span>
                      <span className="font-mono font-bold text-tikari-green-dark">{t('calculationExamples.scenario1.accountBalanceValue')}</span>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    {t('calculationExamples.scenario1.effectiveReturn')}
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">{t('calculationExamples.scenario2.title')}</h3>
                <div className="not-prose my-6 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-2xl">
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">{t('calculationExamples.scenario2.setupLabel')}</strong> {t('calculationExamples.scenario2.setupDetail')}
                  </p>
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">{t('calculationExamples.scenario2.performanceLabel')}</strong> {t('calculationExamples.scenario2.performanceDetail')}
                  </p>
                  <div className="space-y-2 text-tikari-sage">
                    <div className="flex justify-between py-2 border-b border-red-300">
                      <span>{t('calculationExamples.scenario2.totalLossLabel')}</span>
                      <span className="font-mono">{t('calculationExamples.scenario2.totalLossValue')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-red-300">
                      <span className="font-semibold">{t('calculationExamples.scenario2.customerBearsLabel')}</span>
                      <span className="font-mono font-semibold text-red-600">{t('calculationExamples.scenario2.customerBearsValue')}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>{t('calculationExamples.scenario2.bankBearsLabel')}</span>
                      <span className="font-mono">{t('calculationExamples.scenario2.bankBearsValue')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t-2 border-red-600 mt-2 pt-2">
                      <span className="font-bold text-tikari-green-dark">{t('calculationExamples.scenario2.accountBalanceLabel')}</span>
                      <span className="font-mono font-bold text-red-600">{t('calculationExamples.scenario2.accountBalanceValue')}</span>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    <strong>{t('calculationExamples.scenario2.keyPrincipleLabel')}</strong> {t('calculationExamples.scenario2.keyPrincipleText')}
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">{t('calculationExamples.scenario3.title')}</h3>
                <p>
                  {t('calculationExamples.scenario3.intro')}
                </p>
                <div className="not-prose my-6">
                  <div className="overflow-x-auto rounded-2xl">
                    <table className="w-full border-1 border-tikari-green/20 rounded-2xl">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold">{t('calculationExamples.scenario3.tableHeaders.profitLevel')}</th>
                          <th className="px-6 py-4 text-left font-bold">{t('calculationExamples.scenario3.tableHeaders.customerShare')}</th>
                          <th className="px-6 py-4 text-left font-bold">{t('calculationExamples.scenario3.tableHeaders.bankShare')}</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        {tieredPSRRows.map((row, idx) => (
                          <tr key={idx} className={`${idx < tieredPSRRows.length - 1 ? 'border-b border-tikari-green/20' : ''} ${row.isStriped ? 'bg-tikari-cream/30' : ''}`}>
                            <td className="px-6 py-4">{row.level}</td>
                            <td className="px-6 py-4 font-semibold">{row.customer}</td>
                            <td className="px-6 py-4">{row.bank}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    {t('calculationExamples.scenario3.note')}
                  </p>
                </div>

                {/* Common Mistakes */}
                <h2 id="common-mistakes" className="font-bold text-xl pt-4">{t('commonMistakes.title')}</h2>
                <p>
                  {t('commonMistakes.intro')}
                </p>

                <div className="not-prose my-8">
                  {commonMistakesList.map((item, idx) => (
                    <div key={idx} className="mb-6 p-6 bg-white border-1 border-tikari-green/20 rounded-2xl">
                      <div className="flex items-start gap-4 mb-4">
                        <Warning className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" weight="bold" />
                        <h4 className="text-lg font-bold text-tikari-green-dark">{item.mistake}</h4>
                      </div>
                      <p className="text-tikari-sage mb-3 pl-10">
                        <strong>{t('commonMistakes.whyWrongLabel')}</strong> {item.why}
                      </p>
                      <p className="text-tikari-sage pl-10">
                        <strong className="text-green-700">{t('commonMistakes.howToFixLabel')}</strong> {item.fix}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Regulatory Context */}
                <h2 id="regulatory-context" className="font-bold text-xl pt-4">{t('regulatoryContext.title')}</h2>
                <p>
                  {t('regulatoryContext.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('regulatoryContext.dualCompliance.title')}</h3>
                <ul>
                  {dualComplianceItems.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('regulatoryContext.languageAdaptations.title')}</h3>
                <p>
                  {t('regulatoryContext.languageAdaptations.intro')}
                </p>
                <ul>
                  {languageAdaptationItems.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('regulatoryContext.reportingRequirements.title')}</h3>
                <p>
                  {t('regulatoryContext.reportingRequirements.intro')}
                </p>
                <ul>
                  {reportingRequirementItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {/* Customer Education */}
                <h2 id="customer-education" className="font-bold text-xl pt-4">{t('customerEducation.title')}</h2>
                <p>
                  {t('customerEducation.intro')}
                </p>

                <h3 className="font-bold text-lg pt-2">{t('customerEducation.workshops.title')}</h3>
                <p>
                  {t('customerEducation.workshops.intro')}
                </p>
                <ul>
                  {workshopItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('customerEducation.digitalTools.title')}</h3>
                <p>
                  {t('customerEducation.digitalTools.intro')}
                </p>
                <ul>
                  {digitalToolItems.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg pt-2">{t('customerEducation.quarterlyUpdates.title')}</h3>
                <p>
                  {t('customerEducation.quarterlyUpdates.intro')}
                </p>
                <ul>
                  {quarterlyUpdateItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="not-prose my-12 p-8 bg-tikari-gold/10 border-l-4 border-tikari-gold rounded-r-2xl">
                  <div className="flex items-start gap-4">
                    <ChartLineUp className="h-8 w-8 text-tikari-green-dark flex-shrink-0 mt-1" weight="bold" />
                    <div>
                      <h4 className="text-xl font-bold text-tikari-green-dark mb-3">{t('cta.title')}</h4>
                      <p className="text-tikari-sage text-base leading-relaxed mb-4">
                        {t('cta.description')}
                      </p>
                      <Button
                        variant="primary"
                        size="lg"
                        href="/demo"
                      >
                        {t('cta.button')}
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
