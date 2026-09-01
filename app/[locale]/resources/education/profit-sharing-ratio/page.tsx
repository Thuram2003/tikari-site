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

                  <p dangerouslySetInnerHTML={{ __html: t.markup('introduction.paragraph1') }} />

                  <p>
                    {t('introduction.paragraph2')}
                  </p>
                  <ul>
                    <li><strong>60%</strong> {t('introduction.example.customer')}</li>
                    <li><strong>40%</strong> {t('introduction.example.bank')}</li>
                  </ul>

                  <p dangerouslySetInnerHTML={{ __html: t.markup('introduction.paragraph3') }} />
                </div>

                {/* Why It Matters */}
                <h2 id="why-matters" className="font-bold text-xl pt-4">{t('whyMatters.title')}</h2>
                <p>
                  {t('whyMatters.intro')}
                </p>

                <div className="not-prose my-8 grid gap-4">
                  {[
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
                  ].map((item, idx) => {
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
                <h2 id="aaoifi-requirements" className="font-bold text-xl pt-4">AAOIFI Disclosure Requirements</h2>
                <p>
                  The <strong>Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI)</strong> has established clear guidelines for PSR disclosure:
                </p>

                <h3 className="font-bold text-lg pt-2">FAS 6: Equity of Investment Account Holders</h3>
                <p>
                  AAOIFI Financial Accounting Standard No. 6 requires:
                </p>
                <ul>
                  <li><strong>Pre-contractual disclosure:</strong> The PSR must be communicated to customers <em>before</em> they open an investment account.</li>
                  <li><strong>Written documentation:</strong> The PSR must appear in the account opening agreement.</li>
                  <li><strong>Profit calculation methodology:</strong> Banks must explain how profits are calculated and allocated.</li>
                  <li><strong>Loss-bearing disclosure:</strong> Customers must be informed that losses (if any) are borne entirely by them, while the bank loses only its time and effort.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">FAS 11: Provisions and Reserves</h3>
                <p>
                  This standard addresses how banks handle <strong>Profit Equalization Reserves (PER)</strong> and <strong>Investment Risk Reserves (IRR)</strong>:
                </p>
                <ul>
                  <li><strong>PER:</strong> Amounts set aside to smooth profit distribution across periods (disclosed separately)</li>
                  <li><strong>IRR:</strong> Reserves to cover potential investment losses (also disclosed separately)</li>
                  <li><strong>Transparency requirement:</strong> Customers must understand how reserves impact their actual profit share</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Shariah Standard No. 40: Mudarabah</h3>
                <p>
                  AAOIFI's Shariah standards mandate:
                </p>
                <ul>
                  <li>The PSR must be expressed as a <strong>percentage of profits</strong>, not a fixed amount</li>
                  <li>Both parties must agree to the PSR at the contract's inception</li>
                  <li>The PSR can be tiered (different ratios for different profit levels) if clearly disclosed</li>
                  <li>Any changes to the PSR require customer consent and cannot apply retroactively</li>
                </ul>

                {/* Best Practices */}
                <h2 id="disclosure-best-practices" className="font-bold text-xl pt-4">Disclosure Best Practices</h2>
                <p>
                  Beyond meeting minimum AAOIFI requirements, Islamic financial institutions should adopt these best practices:
                </p>

                <h3 className="font-bold text-lg pt-2">1. Proactive Communication</h3>
                <ul>
                  <li><strong>Marketing materials:</strong> Include PSR ranges in brochures, websites, and advertisements</li>
                  <li><strong>Account opening:</strong> Highlight the PSR prominently in the application form</li>
                  <li><strong>Welcome kits:</strong> Provide a one-page PSR explainer to new customers</li>
                  <li><strong>Quarterly statements:</strong> Recap the PSR and show actual profit allocation</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">2. Plain Language</h3>
                <p>
                  Avoid jargon. Instead of:
                </p>
                <div className="not-prose my-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-2xl">
                  <p className="text-tikari-sage italic">
                    "The mudarib shall retain 35% of realized profits from the commingled investment pool, subject to PER and IRR appropriations as determined by the ACE."
                  </p>
                </div>

                <p>
                  Use clear language:
                </p>
                <div className="not-prose my-6 p-4 bg-green-50 border-l-4 border-green-600 rounded-r-2xl">
                  <p className="text-tikari-sage">
                    "When your investment earns a profit, you receive 65% and the bank receives 35%. Any profits set aside for reserves will be explained in your quarterly statement."
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">3. Visual Aids</h3>
                <p>
                  Use charts, infographics, and examples to illustrate PSR:
                </p>

                <div className="not-prose my-8 p-6 bg-tikari-gold/10 border-2 border-tikari-gold/30 rounded-2xl">
                  <h4 className="text-lg font-bold text-tikari-green-dark mb-4">Example PSR Illustration</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-tikari-green-dark">Your Share (Customer)</span>
                        <span className="text-sm font-mono font-bold">70%</span>
                      </div>
                      <div className="w-full bg-tikari-cream h-8 rounded overflow-hidden">
                        <div className="bg-tikari-green-dark h-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-tikari-sage">Bank Share</span>
                        <span className="text-sm font-mono">30%</span>
                      </div>
                      <div className="w-full bg-tikari-cream h-8 rounded overflow-hidden">
                        <div className="bg-tikari-gold h-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    If the bank earns 1,000,000 units in profit from your investment, you receive 700,000 units and the bank receives 300,000 units.
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">4. Comparative Context</h3>
                <p>
                  Help customers understand PSR by comparing it to conventional interest:
                </p>
                <ul>
                  <li><strong>Conventional savings account:</strong> 2% fixed interest (guaranteed, regardless of bank performance)</li>
                  <li><strong>Islamic Mudarabah account:</strong> 70% of profits (variable, based on actual investment returns)</li>
                </ul>
                <p>
                  Clarify that if the bank earns higher returns in Islamic investing, the customer's PSR-based returns may exceed conventional interest but there's also downside risk.
                </p>

                {/* Calculation Examples */}
                <h2 id="calculation-examples" className="font-bold text-xl pt-4">PSR Calculation Examples</h2>
                <p>
                  Let's walk through practical scenarios to demonstrate how PSR works:
                </p>

                <h3 className="font-bold text-lg pt-2">Scenario 1: Simple Profit Distribution</h3>
                <div className="not-prose my-6 p-6 bg-tikari-cream rounded-2xl">
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">Setup:</strong> A customer deposits 10,000,000 units into a Mudarabah investment account with a PSR of 60:40 (60% customer, 40% bank).
                  </p>
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">Performance:</strong> The bank invests the funds and earns 800,000 units in profit over the year.
                  </p>
                  <div className="space-y-2 text-tikari-sage">
                    <div className="flex justify-between py-2 border-b border-tikari-green/20">
                      <span>Total Profit:</span>
                      <span className="font-mono">800,000 units</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-tikari-green/20">
                      <span className="font-semibold">Customer Share (60%):</span>
                      <span className="font-mono font-semibold text-tikari-green-dark">480,000 units</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Bank Share (40%):</span>
                      <span className="font-mono">320,000 units</span>
                    </div>
                    <div className="flex justify-between py-2 border-t-2 border-tikari-green-dark mt-2 pt-2">
                      <span className="font-bold text-tikari-green-dark">Customer Account Balance:</span>
                      <span className="font-mono font-bold text-tikari-green-dark">10,480,000 units</span>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    Effective return for the customer: 4.8% (480K profit ÷ 10M deposit)
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">Scenario 2: Loss Scenario</h3>
                <div className="not-prose my-6 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-2xl">
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">Setup:</strong> Same customer, same 10,000,000 units deposit, PSR 60:40.
                  </p>
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">Performance:</strong> The bank's investments perform poorly, resulting in a 300,000 units loss.
                  </p>
                  <div className="space-y-2 text-tikari-sage">
                    <div className="flex justify-between py-2 border-b border-red-300">
                      <span>Total Loss:</span>
                      <span className="font-mono">-300,000 units</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-red-300">
                      <span className="font-semibold">Customer Bears Loss (100%):</span>
                      <span className="font-mono font-semibold text-red-600">-300,000 units</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Bank Bears Loss:</span>
                      <span className="font-mono">0 units (loses time/effort)</span>
                    </div>
                    <div className="flex justify-between py-2 border-t-2 border-red-600 mt-2 pt-2">
                      <span className="font-bold text-tikari-green-dark">Customer Account Balance:</span>
                      <span className="font-mono font-bold text-red-600">9,700,000 units</span>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    <strong>Key principle:</strong> In Mudarabah, capital losses are borne entirely by the capital provider (customer), while the fund manager (bank) loses only its time and effort unless the loss resulted from negligence or breach of contract.
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">Scenario 3: Tiered PSR</h3>
                <p>
                  Some banks use <strong>tiered PSR structures</strong> to incentivize higher performance:
                </p>
                <div className="not-prose my-6">
                  <div className="overflow-x-auto rounded-2xl">
                    <table className="w-full border-1 border-tikari-green/20 rounded-2xl">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold">Profit Level (Annual)</th>
                          <th className="px-6 py-4 text-left font-bold">Customer Share</th>
                          <th className="px-6 py-4 text-left font-bold">Bank Share</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        <tr className="border-b border-tikari-green/20">
                          <td className="px-6 py-4">0% - 3%</td>
                          <td className="px-6 py-4 font-semibold">70%</td>
                          <td className="px-6 py-4">30%</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20 bg-tikari-cream/30">
                          <td className="px-6 py-4">3.01% - 6%</td>
                          <td className="px-6 py-4 font-semibold">65%</td>
                          <td className="px-6 py-4">35%</td>
                        </tr>
                        <tr className="bg-tikari-cream/30">
                          <td className="px-6 py-4">Above 6%</td>
                          <td className="px-6 py-4 font-semibold">60%</td>
                          <td className="px-6 py-4">40%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    This structure rewards the bank for generating higher returns while still ensuring customers receive the majority of profits at all levels.
                  </p>
                </div>

                {/* Common Mistakes */}
                <h2 id="common-mistakes" className="font-bold text-xl pt-4">Common PSR Disclosure Mistakes</h2>
                <p>
                  Avoid these frequent errors that can lead to Shariah non-compliance or customer confusion:
                </p>

                <div className="not-prose my-8">
                  {[
                    {
                      mistake: "Using Fixed Amounts Instead of Percentages",
                      why: "PSR must be expressed as a percentage of profits, not a fixed currency amount. Saying \"the bank gets 100,000 units\" violates Mudarabah principles.",
                      fix: "Always use percentages: \"the bank receives 30% of profits.\""
                    },
                    {
                      mistake: "Hidden or Buried Disclosure",
                      why: "Putting PSR in fine print or deep in contract appendices undermines transparency.",
                      fix: "Feature PSR prominently on page 1 of account agreements and marketing materials."
                    },
                    {
                      mistake: "Ambiguous Loss-Sharing Terms",
                      why: "Failing to clarify that customers bear capital losses (while banks bear effort losses) creates false expectations.",
                      fix: "Explicitly state: \"You receive [X]% of profits. In case of losses, your capital may decrease, but the bank does not receive any profit.\""
                    },
                    {
                      mistake: "Comparing PSR Directly to Interest Rates",
                      why: "Saying \"Our 60% PSR is like 4% interest\" is misleading because PSR returns vary based on performance.",
                      fix: "Provide historical examples: \"Over the past year, our 60% PSR resulted in an average return of 4.2%, compared to 3.5% conventional interest.\""
                    },
                    {
                      mistake: "Changing PSR Without Customer Consent",
                      why: "Unilateral changes to PSR violate the mutuality principle of Islamic contracts.",
                      fix: "Any PSR adjustments require written customer agreement and cannot apply to existing deposits retroactively."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="mb-6 p-6 bg-white border-1 border-tikari-green/20 rounded-2xl">
                      <div className="flex items-start gap-4 mb-4">
                        <Warning className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" weight="bold" />
                        <h4 className="text-lg font-bold text-tikari-green-dark">{item.mistake}</h4>
                      </div>
                      <p className="text-tikari-sage mb-3 pl-10">
                        <strong>Why it's wrong:</strong> {item.why}
                      </p>
                      <p className="text-tikari-sage pl-10">
                        <strong className="text-green-700">How to fix:</strong> {item.fix}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Regulatory Context */}
                <h2 id="regulatory-context" className="font-bold text-xl pt-4">Regulatory Compliance & PSR</h2>
                <p>
                  Disclosure requirements for Profit-Sharing Ratios must satisfy both regional business standards and local central bank guidelines.
                </p>

                <h3 className="font-bold text-lg pt-2">Dual Compliance Strategy</h3>
                <ul>
                  <li><strong>AAOIFI for Shariah:</strong> Follow FAS 6 and FAS 11 standards for pre-contractual and financial statement disclosure of PSR.</li>
                  <li><strong>Central Bank Supervision:</strong> Report Mudarabah accounts properly to central banks (e.g. as "investment deposits" under CBN guidelines in Nigeria or "participation accounts" under COBAC in Central Africa).</li>
                  <li><strong>OHADA Chart of Accounts:</strong> In OHADA-zone countries (West and Central Africa), map the dual-ledger structures carefully to reflect investment pool returns.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Language & Regional Adaptations</h3>
                <p>
                  Depending on the jurisdiction, documentation must align with official languages and terminology:
                </p>
                <ul>
                  <li><strong>Francophone Regions (CEMAC, WAEMU):</strong> Translate key terms accurately in French, e.g., <em>Ratio de Partage des Bénéfices (RPB)</em> for PSR.</li>
                  <li><strong>Anglophone Regions (Nigeria):</strong> Use terms standardized by local non-interest banking circulars.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Regulatory Reporting Requirements</h3>
                <p>
                  Quarterly reports submitted to central banks should generally disclose:
                </p>
                <ul>
                  <li>Total Mudarabah investment pool balances</li>
                  <li>Aggregate PSR ranges across account types</li>
                  <li>Actual profit/loss allocation paid out to depositors</li>
                  <li>Reserves (PER/IRR) held on behalf of investment account holders</li>
                </ul>

                {/* Customer Education */}
                <h2 id="customer-education" className="font-bold text-xl pt-4">Customer Education Strategies</h2>
                <p>
                  Beyond disclosure, proactive education helps customers understand and appreciate PSR:
                </p>

                <h3 className="font-bold text-lg pt-2">1. Onboarding Workshops</h3>
                <p>
                  Host monthly sessions at branch locations explaining:
                </p>
                <ul>
                  <li>How Mudarabah accounts differ from conventional savings</li>
                  <li>Why PSR fluctuates based on investment performance</li>
                  <li>How to read quarterly profit distribution statements</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">2. Digital Tools</h3>
                <p>
                  Develop online resources:
                </p>
                <ul>
                  <li><strong>PSR calculator:</strong> Customers input their deposit amount and estimated return to see projected profit splits</li>
                  <li><strong>Video explainers:</strong> 2-3 minute animations demonstrating PSR concepts</li>
                  <li><strong>FAQ section:</strong> Address common questions like "Can PSR change?" and "What if the bank loses money?"</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">3. Quarterly Updates</h3>
                <p>
                  Send personalized statements showing:
                </p>
                <ul>
                  <li>Opening balance</li>
                  <li>Total profits earned by the bank from customer's investment</li>
                  <li>PSR split (percentage and currency amount)</li>
                  <li>Customer's profit credited to account</li>
                  <li>Closing balance</li>
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
