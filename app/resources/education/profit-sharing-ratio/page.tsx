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

export const metadata: Metadata = {
  title: "Profit-Sharing Ratio (PSR) Disclosure Guide | TIKARI",
  description: "Complete guide to properly disclosing Profit-Sharing Ratios (PSR) in Mudarabah accounts. Learn AAOIFI requirements, transparency best practices, and CEMAC compliance.",
  keywords: [
    "profit sharing ratio",
    "PSR disclosure",
    "Mudarabah accounts",
    "Islamic investment accounts",
    "Shariah profit distribution",
    "AAOIFI standards",
    "transparent banking",
    "Islamic finance disclosure",
    "CEMAC Islamic banking",
    "customer transparency"
  ],
  openGraph: {
    title: "Profit-Sharing Ratio Disclosure: Complete Guide for CEMAC",
    description: "Learn how to properly disclose PSR to customers in Mudarabah investment accounts while meeting Shariah and regulatory requirements.",
    type: "article",
    publishedTime: "2024-01-25T00:00:00.000Z",
    authors: ["TIKARI Shariah Team"],
  },
  alternates: {
    canonical: "/resources/education/profit-sharing-ratio"
  }
};

export default function ProfitSharingRatioPage() {
  const tableOfContents = [
    { id: "introduction", title: "What is PSR?" },
    { id: "why-matters", title: "Why PSR Disclosure Matters" },
    { id: "aaoifi-requirements", title: "AAOIFI Requirements" },
    { id: "disclosure-best-practices", title: "Disclosure Best Practices" },
    { id: "calculation-examples", title: "Calculation Examples" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "cemac-context", title: "CEMAC Compliance" },
    { id: "customer-education", title: "Customer Education" },
  ];

  const relatedArticles = [
    {
      title: "What is Islamic Finance?",
      description: "Introduction to Shariah-compliant banking principles",
      href: "/resources/education/what-is-islamic-finance",
      duration: "15 min read"
    },
    {
      title: "Understanding Murabaha Financing",
      description: "Step-by-step breakdown of cost-plus sale financing",
      href: "/resources/education/understanding-murabaha",
      duration: "12 min read"
    },
    {
      title: "AAOIFI vs OHADA Standards",
      description: "Reconciling Islamic accounting with CEMAC standards",
      href: "/resources/education/aaoifi-vs-ohada",
      duration: "15 min read"
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
            Back
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="bg-tikari-gold/20 text-tikari-gold px-3 py-1 rounded-full text-xs font-semibold border border-tikari-gold/30">
              Intermediate
            </span>
            <span className="text-white/70 text-sm">8 min read</span>
            <span className="text-white/70 text-sm">Updated Aug 2026</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            Profit-Sharing Ratio Disclosure
          </h1>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl">
            How to properly disclose Profit-Sharing Ratios (PSR) to customers in Mudarabah investment accounts while meeting Shariah and regulatory requirements.
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
                    The Profit-Sharing Ratio (PSR) is the predetermined percentage split of profits earned from Mudarabah investment accounts the most common Islamic alternative to conventional interest-bearing savings accounts.
                  </p>

                  <p>
                    In a <strong>Mudarabah arrangement</strong>, the customer (rab al-mal, or capital provider) deposits funds into an investment account, and the bank (mudarib, or fund manager) invests those funds in Shariah-compliant ventures. When profits are generated, they are distributed according to the PSR agreed upon at the start of the relationship.
                  </p>

                  <p>
                    For example, a PSR of <strong>60:40</strong> means:
                  </p>
                  <ul>
                    <li><strong>60%</strong> of profits go to the customer (depositor)</li>
                    <li><strong>40%</strong> of profits go to the bank (investment manager)</li>
                  </ul>

                  <p>
                    Unlike conventional interest rates, which are fixed and guaranteed, PSR-based returns <strong>fluctuate based on actual investment performance</strong>. This aligns with Islamic principles of risk-sharing and profit-loss distribution.
                  </p>
                </div>

                {/* Why It Matters */}
                <h2 id="why-matters" className="font-bold text-xl pt-4">Why PSR Disclosure Matters</h2>
                <p>
                  Transparent disclosure of Profit-Sharing Ratios is critical for several reasons:
                </p>

                <div className="not-prose my-8 grid gap-4">
                  {[
                    {
                      icon: Scales,
                      title: "Shariah Compliance",
                      description: "Islamic law requires full transparency in contracts. Hidden terms or ambiguity (gharar) render a contract invalid."
                    },
                    {
                      icon: CheckCircle,
                      title: "Customer Trust",
                      description: "Clear PSR disclosure builds confidence that the bank is operating ethically and sharing profits fairly."
                    },
                    {
                      icon: FileText,
                      title: "Regulatory Compliance",
                      description: "AAOIFI standards (FAS 6, FAS 11) mandate explicit PSR disclosure in financial statements and customer-facing materials."
                    },
                    {
                      icon: ChartLineUp,
                      title: "Informed Decision-Making",
                      description: "Customers need to understand how returns are calculated to compare Islamic investment accounts with conventional alternatives."
                    }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-4 p-6 bg-tikari-cream/40 border-l-4 border-tikari-gold">
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
                <div className="not-prose my-6 p-4 bg-red-50 border-l-4 border-red-400">
                  <p className="text-tikari-sage italic">
                    "The mudarib shall retain 35% of realized profits from the commingled investment pool, subject to PER and IRR appropriations as determined by the ACE."
                  </p>
                </div>

                <p>
                  Use clear language:
                </p>
                <div className="not-prose my-6 p-4 bg-green-50 border-l-4 border-green-600">
                  <p className="text-tikari-sage">
                    "When your investment earns a profit, you receive 65% and the bank receives 35%. Any profits set aside for reserves will be explained in your quarterly statement."
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">3. Visual Aids</h3>
                <p>
                  Use charts, infographics, and examples to illustrate PSR:
                </p>

                <div className="not-prose my-8 p-6 bg-tikari-gold/10 border-2 border-tikari-gold/30">
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
                    If the bank earns 1,000,000 FCFA in profit from your investment, you receive 700,000 FCFA and the bank receives 300,000 FCFA.
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
                <div className="not-prose my-6 p-6 bg-tikari-cream/40">
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">Setup:</strong> A customer deposits 10,000,000 FCFA into a Mudarabah investment account with a PSR of 60:40 (60% customer, 40% bank).
                  </p>
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">Performance:</strong> The bank invests the funds and earns 800,000 FCFA in profit over the year.
                  </p>
                  <div className="space-y-2 text-tikari-sage">
                    <div className="flex justify-between py-2 border-b border-tikari-green/20">
                      <span>Total Profit:</span>
                      <span className="font-mono">800,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-tikari-green/20">
                      <span className="font-semibold">Customer Share (60%):</span>
                      <span className="font-mono font-semibold text-tikari-green-dark">480,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-tikari-green/20">
                      <span>Bank Share (40%):</span>
                      <span className="font-mono">320,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-2 border-t-2 border-tikari-green-dark mt-2 pt-2">
                      <span className="font-bold text-tikari-green-dark">Customer Account Balance:</span>
                      <span className="font-mono font-bold text-tikari-green-dark">10,480,000 FCFA</span>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-4 italic">
                    Effective return for the customer: 4.8% (480K profit ÷ 10M deposit)
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">Scenario 2: Loss Scenario</h3>
                <div className="not-prose my-6 p-6 bg-red-50 border-l-4 border-red-400">
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">Setup:</strong> Same customer, same 10,000,000 FCFA deposit, PSR 60:40.
                  </p>
                  <p className="text-tikari-sage mb-4">
                    <strong className="text-tikari-green-dark">Performance:</strong> The bank's investments perform poorly, resulting in a 300,000 FCFA loss.
                  </p>
                  <div className="space-y-2 text-tikari-sage">
                    <div className="flex justify-between py-2 border-b border-red-300">
                      <span>Total Loss:</span>
                      <span className="font-mono">-300,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-red-300">
                      <span className="font-semibold">Customer Bears Loss (100%):</span>
                      <span className="font-mono font-semibold text-red-600">-300,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-red-300">
                      <span>Bank Bears Loss:</span>
                      <span className="font-mono">0 FCFA (loses time/effort)</span>
                    </div>
                    <div className="flex justify-between py-2 border-t-2 border-red-600 mt-2 pt-2">
                      <span className="font-bold text-tikari-green-dark">Customer Account Balance:</span>
                      <span className="font-mono font-bold text-red-600">9,700,000 FCFA</span>
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
                  <div className="overflow-x-auto">
                    <table className="w-full border-2 border-tikari-green/20">
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
                      why: "PSR must be expressed as a percentage of profits, not a fixed FCFA amount. Saying \"the bank gets 100,000 FCFA\" violates Mudarabah principles.",
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
                    <div key={idx} className="mb-6 p-6 bg-white border-2 border-tikari-green/20">
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

                {/* CEMAC Context */}
                <h2 id="cemac-context" className="font-bold text-xl pt-4">PSR Disclosure in CEMAC</h2>
                <p>
                  CEMAC countries follow <strong>OHADA accounting standards</strong>, which don't explicitly address Islamic finance. Institutions must therefore:
                </p>

                <h3 className="font-bold text-lg pt-2">Dual Compliance Strategy</h3>
                <ul>
                  <li><strong>AAOIFI for Shariah:</strong> Follow FAS 6 and FAS 11 for PSR disclosure</li>
                  <li><strong>OHADA for Reporting:</strong> Map Islamic accounts to OHADA chart of accounts</li>
                  <li><strong>COBAC for Supervision:</strong> Report Mudarabah accounts as "investment deposits" or "participation accounts"</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Language Considerations</h3>
                <p>
                  CEMAC is primarily Francophone. Ensure PSR documentation is available in French:
                </p>
                <ul>
                  <li><strong>Profit-Sharing Ratio:</strong> <em>Ratio de Partage des Bénéfices (RPB)</em></li>
                  <li><strong>Mudarabah:</strong> <em>Contrat de Partenariat Financier Mudarabah</em></li>
                  <li><strong>Capital Provider:</strong> <em>Rab al-Mal (Apporteur de Capital)</em></li>
                  <li><strong>Fund Manager:</strong> <em>Mudarib (Gestionnaire des Fonds)</em></li>
                </ul>

                <h3 className="font-bold text-lg pt-2">COBAC Reporting</h3>
                <p>
                  Quarterly financial statements submitted to COBAC should include:
                </p>
                <ul>
                  <li>Total Mudarabah investment account balances</li>
                  <li>Aggregate PSR ranges across account types</li>
                  <li>Profit/loss allocation to investment account holders</li>
                  <li>Reserves (PER/IRR) held on behalf of customers</li>
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
                  <li>PSR split (percentage and FCFA amount)</li>
                  <li>Customer's profit credited to account</li>
                  <li>Closing balance</li>
                </ul>

                <div className="not-prose my-12 p-8 bg-tikari-gold/10 border-l-4 border-tikari-gold">
                  <div className="flex items-start gap-4">
                    <ChartLineUp className="h-8 w-8 text-tikari-green-dark flex-shrink-0 mt-1" weight="bold" />
                    <div>
                      <h4 className="text-xl font-bold text-tikari-green-dark mb-3">Automate PSR Disclosure with TIKARI</h4>
                      <p className="text-tikari-sage text-base leading-relaxed mb-4">
                        TIKARI's platform automatically generates Shariah-compliant PSR disclosures, quarterly profit allocation reports, and customer-facing statements all tailored to AAOIFI and CEMAC requirements.
                      </p>
                      <Button
                        variant="secondary"
                        size="lg"
                        href="/demo"
                        className="bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
                      >
                        Book a Demo
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
          <h2 className="text-3xl font-bold text-tikari-green-dark mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, idx) => (
              <Link
                key={idx}
                href={article.href}
                className="block bg-white border-2 border-tikari-green/20 hover:border-tikari-gold hover:shadow-xl transition-all duration-300 group p-6"
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
