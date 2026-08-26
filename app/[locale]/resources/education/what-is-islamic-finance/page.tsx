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

export const metadata: Metadata = {
  title: "What is Islamic Finance? Complete Guide for CEMAC | TIKARI",
  description: "Comprehensive introduction to Islamic finance principles, Shariah-compliant banking, and how it works in Central Africa. Learn about riba prohibition, profit-sharing, and ethical investing.",
  keywords: [
    "Islamic finance",
    "Shariah banking",
    "Islamic banking principles",
    "halal finance",
    "riba prohibition",
    "profit sharing",
    "CEMAC Islamic banking",
    "Central Africa Islamic finance",
    "ethical banking",
    "Shariah compliance"
  ],
  openGraph: {
    title: "What is Islamic Finance? Complete Guide for CEMAC",
    description: "Learn the foundations of Islamic finance: core principles, products, and how Shariah-compliant banking works in Central Africa.",
    type: "article",
    publishedTime: "2024-01-15T00:00:00.000Z",
    authors: ["TIKARI Shariah Team"],
  },
  alternates: {
    canonical: "/resources/education/what-is-islamic-finance"
  }
};

export default function WhatIsIslamicFinancePage() {
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "core-principles", title: "Core Principles" },
    { id: "prohibition-of-riba", title: "Prohibition of Riba (Interest)" },
    { id: "risk-sharing", title: "Risk-Sharing & Profit-Loss Sharing" },
    { id: "asset-backed", title: "Asset-Backed Transactions" },
    { id: "ethical-investment", title: "Ethical Investment Screens" },
    { id: "common-products", title: "Common Islamic Products" },
    { id: "cemac-context", title: "Islamic Finance in CEMAC" },
    { id: "getting-started", title: "Getting Started" },
  ];

  const relatedArticles = [
    {
      title: "Understanding Murabaha Financing",
      description: "Step-by-step breakdown of cost-plus sale financing",
      href: "/resources/education/understanding-murabaha",
      duration: "12 min read"
    },
    {
      title: "Profit-Sharing Ratio Disclosure",
      description: "How to properly disclose PSR to customers",
      href: "/resources/education/profit-sharing-ratio",
      duration: "8 min read"
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
              Beginner
            </span>
            <span className="text-white/70 text-sm">15 min read</span>
            <span className="text-white/70 text-sm">Updated Aug 2026</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            What is Islamic Finance?
          </h1>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl">
            A comprehensive introduction to Shariah-compliant banking, core principles, and how Islamic finance operates in the CEMAC region.
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
                    Islamic finance is a financial system based on principles derived from Islamic law (Shariah), which prohibits interest (riba) and promotes ethical, asset-backed transactions with risk-sharing mechanisms.
                  </p>

                  <p>
                    Unlike conventional banking, which relies heavily on interest-based lending and debt instruments, Islamic finance emphasizes partnerships, trade, and shared accountability between financial institutions and their customers. This approach aligns financial activities with Islamic ethical and moral values, ensuring that all transactions are transparent, fair, and beneficial to society.
                  </p>

                  <p>
                    In the <strong>CEMAC (Central African Economic and Monetary Community)</strong> region, Islamic finance is growing rapidly as institutions seek alternatives to conventional banking that better serve Muslim populations while remaining compliant with regional regulations like <strong>COBAC microfinance directives</strong> and <strong>OHADA accounting standards</strong>.
                  </p>
                </div>

                {/* Core Principles */}
                <h2 id="core-principles" className="font-bold text-xl pt-4">Core Principles of Islamic Finance</h2>
                <p>
                  Islamic finance is built on five fundamental principles that distinguish it from conventional financial systems:
                </p>

                <div className="not-prose my-12 grid gap-6 md:grid-cols-2">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Prohibition of Riba (Interest)",
                      description: "All forms of interest whether fixed or variable are strictly prohibited. Money must not generate money on its own."
                    },
                    {
                      icon: Users,
                      title: "Risk-Sharing",
                      description: "Profits and losses must be shared between parties. No party bears all the risk alone."
                    },
                    {
                      icon: Coins,
                      title: "Asset-Backed Transactions",
                      description: "Every financial transaction must be backed by a tangible asset or service. Speculation is discouraged."
                    },
                    {
                      icon: CheckCircle,
                      title: "Ethical Investment",
                      description: "Investments in prohibited sectors (alcohol, gambling, pork, weapons) are not allowed."
                    },
                    {
                      icon: ChartLineUp,
                      title: "Transparency",
                      description: "All contracts must be clear, unambiguous, and free from uncertainty (gharar)."
                    }
                  ].map((principle, idx) => {
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
                <h2 id="prohibition-of-riba" className="font-bold text-xl pt-2">Prohibition of Riba (Interest)</h2>
                <p>
                  The most fundamental principle in Islamic finance is the <strong>prohibition of riba</strong>, commonly translated as "interest" or "usury." In the Islamic tradition, riba represents any guaranteed increase on a loan or debt, regardless of the percentage.
                </p>

                <h3 className="font-bold text-lg pt-2">Why is Interest Prohibited?</h3>
                <p>
                  Islamic scholars argue that interest-based lending creates an unjust economic system where:
                </p>
                <ul>
                  <li><strong>Risk is unbalanced:</strong> The lender receives guaranteed returns without bearing any risk, while the borrower assumes all the risk.</li>
                  <li><strong>Exploitation occurs:</strong> Interest compounds over time, potentially trapping borrowers in cycles of debt.</li>
                  <li><strong>Money becomes a commodity:</strong> Interest allows money to generate more money without productive economic activity.</li>
                  <li><strong>Social inequality grows:</strong> Wealth concentrates among lenders while borrowers struggle with debt burdens.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">What Replaces Interest?</h3>
                <p>
                  Instead of interest, Islamic finance uses <strong>profit-sharing arrangements</strong> where returns are tied to the performance of actual business activities or investments. For example:
                </p>
                <ul>
                  <li><strong>Murabaha (cost-plus sale):</strong> The bank purchases an asset and resells it to the customer at a marked-up price, disclosed upfront.</li>
                  <li><strong>Mudarabah (profit-sharing):</strong> The bank provides capital, and the entrepreneur provides expertise. Profits are shared according to a pre-agreed ratio.</li>
                  <li><strong>Musharakah (partnership):</strong> Both parties contribute capital and share profits and losses proportionally.</li>
                </ul>

                {/* Risk-Sharing */}
                <h2 id="risk-sharing" className="font-bold text-xl pt-4">Risk-Sharing & Profit-Loss Sharing</h2>
                <p>
                  Islamic finance promotes <strong>shared accountability</strong>. Both the financial institution and the customer must participate in the risks and rewards of a transaction.
                </p>

                <p>
                  This principle ensures:
                </p>
                <ul>
                  <li><strong>Fairness:</strong> No party can earn a return without accepting some level of risk.</li>
                  <li><strong>Economic stability:</strong> Risk-sharing discourages excessive leverage and speculative bubbles.</li>
                  <li><strong>Alignment of interests:</strong> The bank and the customer work together toward mutual success rather than being adversaries.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Practical Example: Mudarabah Investment Account</h3>
                <p>
                  A customer deposits 10 million FCFA into a <strong>Mudarabah savings account</strong>. The bank (acting as mudarib or fund manager) invests this capital in Shariah-compliant ventures.
                </p>
                <ul>
                  <li>If the investments generate a profit of 500,000 FCFA, the profit is split according to a <strong>Profit-Sharing Ratio (PSR)</strong>say 60% to the customer and 40% to the bank.</li>
                  <li>If the investments result in a loss due to market conditions (not negligence), the customer bears the loss on capital, and the bank loses its time and effort.</li>
                </ul>
                <p>
                  This is fundamentally different from conventional savings accounts, where the bank guarantees a fixed interest rate regardless of its investment performance.
                </p>

                {/* Asset-Backed */}
                <h2 id="asset-backed" className="font-bold text-xl pt-4">Asset-Backed Transactions</h2>
                <p>
                  Every Islamic financial transaction must be backed by a <strong>tangible asset, service, or economic activity</strong>. This principle ensures that financial transactions contribute to real economic growth rather than speculative bubbles.
                </p>

                <h3 className="font-bold text-lg pt-2">Why Asset-Backing Matters</h3>
                <ul>
                  <li><strong>Prevents speculation:</strong> Money cannot be lent for its own sake. It must be tied to something productive.</li>
                  <li><strong>Reduces systemic risk:</strong> Asset-backed finance is more stable than derivative-heavy conventional finance.</li>
                  <li><strong>Encourages productive investment:</strong> Capital flows to sectors that generate real goods and services.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Examples of Asset-Backed Products</h3>
                <ul>
                  <li><strong>Murabaha for equipment purchase:</strong> A microfinance institution buys a sewing machine for a tailor and sells it to them at cost + markup.</li>
                  <li><strong>Ijara for vehicle leasing:</strong> The bank owns the vehicle and leases it to the customer, who eventually purchases it.</li>
                  <li><strong>Salam for agricultural financing:</strong> The bank pre-purchases a farmer's crop at a discounted price, providing immediate capital.</li>
                </ul>

                {/* Ethical Investment */}
                <h2 id="ethical-investment" className="font-bold text-xl pt-4">Ethical Investment Screens</h2>
                <p>
                  Islamic finance institutions are prohibited from investing in sectors that are <strong>haram (forbidden)</strong> under Shariah. This creates an ethical investment framework that excludes:
                </p>
                <ul>
                  <li><strong>Alcohol production and distribution</strong></li>
                  <li><strong>Gambling and casinos</strong></li>
                  <li><strong>Pork and pork-related products</strong></li>
                  <li><strong>Conventional interest-based banking</strong></li>
                  <li><strong>Weapons and defense manufacturing</strong></li>
                  <li><strong>Tobacco production</strong></li>
                  <li><strong>Pornography and adult entertainment</strong></li>
                </ul>

                <p>
                  Beyond sector exclusions, Islamic finance also emphasizes <strong>positive social impact</strong>, encouraging investments in:
                </p>
                <ul>
                  <li>Healthcare and education</li>
                  <li>Infrastructure development</li>
                  <li>Small business empowerment</li>
                  <li>Agricultural productivity</li>
                  <li>Renewable energy and sustainability</li>
                </ul>

                {/* Common Products */}
                <h2 id="common-products" className="font-bold text-xl pt-4">Common Islamic Finance Products</h2>
                <p>
                  Islamic finance offers a wide range of products that mirror conventional banking services while remaining Shariah-compliant:
                </p>

                <div className="not-prose my-12">
                  <div className="overflow-x-auto rounded-2xl border border-tikari-green/20">
                    <table className="w-full">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold">Product</th>
                          <th className="px-6 py-4 text-left font-bold">Structure</th>
                          <th className="px-6 py-4 text-left font-bold">Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Murabaha</td>
                          <td className="px-6 py-4">Cost-plus sale</td>
                          <td className="px-6 py-4">Asset financing (equipment, inventory)</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Mudarabah</td>
                          <td className="px-6 py-4">Profit-sharing partnership</td>
                          <td className="px-6 py-4">Investment accounts, venture capital</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Musharakah</td>
                          <td className="px-6 py-4">Joint partnership</td>
                          <td className="px-6 py-4">Business financing, project funding</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Ijara</td>
                          <td className="px-6 py-4">Leasing</td>
                          <td className="px-6 py-4">Vehicle leasing, equipment rental</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Salam</td>
                          <td className="px-6 py-4">Forward purchase</td>
                          <td className="px-6 py-4">Agricultural financing</td>
                        </tr>
                        <tr className="bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Qard Hassan</td>
                          <td className="px-6 py-4">Benevolent loan</td>
                          <td className="px-6 py-4">Emergency assistance, social welfare</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CEMAC Context */}
                <h2 id="cemac-context" className="font-bold text-xl pt-4">Islamic Finance in CEMAC</h2>
                <p>
                  The <strong>CEMAC region</strong> (Cameroon, Central African Republic, Chad, Republic of Congo, Equatorial Guinea, and Gabon) presents unique opportunities and challenges for Islamic finance:
                </p>

                <h3 className="font-bold text-lg pt-2">Regulatory Framework</h3>
                <ul>
                  <li><strong>COBAC oversight:</strong> The Central African Banking Commission regulates microfinance institutions, including those offering Islamic products.</li>
                  <li><strong>OHADA accounting:</strong> CEMAC member states follow OHADA (Organisation for the Harmonisation of Business Law in Africa) accounting standards, which must be reconciled with AAOIFI Islamic accounting standards.</li>
                  <li><strong>BEAC monetary policy:</strong> The Bank of Central African States controls monetary policy and FCFA currency issuance.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Market Opportunities</h3>
                <ul>
                  <li><strong>Large Muslim population:</strong> Significant demand for Shariah-compliant financial services, especially in Chad, northern Cameroon, and parts of CAR.</li>
                  <li><strong>SME financing gap:</strong> Islamic finance products like Murabaha and Musharakah can address the capital needs of small businesses.</li>
                  <li><strong>Agricultural sector:</strong> Salam and Mudarabah structures are well-suited for agricultural financing, a major economic sector in CEMAC.</li>
                  <li><strong>Regional integration:</strong> CEMAC's common currency (FCFA) and regulatory harmonization facilitate cross-border Islamic banking.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Challenges</h3>
                <ul>
                  <li><strong>Regulatory clarity:</strong> Some CEMAC countries lack specific Islamic banking regulations, requiring institutions to navigate general banking laws.</li>
                  <li><strong>Shariah expertise:</strong> Limited availability of qualified Shariah scholars and auditors in the region.</li>
                  <li><strong>Customer education:</strong> Many potential customers are unfamiliar with Islamic finance structures and terminology.</li>
                  <li><strong>Dual compliance:</strong> Institutions must satisfy both Islamic requirements (AAOIFI, Shariah boards) and CEMAC regulations (COBAC, OHADA).</li>
                </ul>

                {/* Getting Started */}
                <h2 id="getting-started" className="font-bold text-xl pt-4">Getting Started with Islamic Finance</h2>
                <p>
                  Whether you're a financial institution looking to offer Islamic products or a customer seeking Shariah-compliant services, here are the first steps:
                </p>

                <h3 className="font-bold text-lg pt-2">For Financial Institutions</h3>
                <ul>
                  <li><strong>Establish a Shariah Supervisory Board (ACE):</strong> Form a committee of qualified Islamic scholars to review and approve products.</li>
                  <li><strong>Adopt Islamic accounting standards:</strong> Implement AAOIFI standards alongside OHADA requirements.</li>
                  <li><strong>Train staff:</strong> Educate employees on Islamic finance principles, products, and terminology.</li>
                  <li><strong>Develop compliant products:</strong> Start with simple structures like Murabaha before expanding to complex partnerships.</li>
                  <li><strong>Obtain regulatory approval:</strong> Work with COBAC to ensure compliance with microfinance regulations.</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">For Customers</h3>
                <ul>
                  <li><strong>Understand the products:</strong> Learn how Islamic finance products differ from conventional banking.</li>
                  <li><strong>Ask questions:</strong> Don't hesitate to seek clarification on profit-sharing ratios, contract terms, and Shariah compliance.</li>
                  <li><strong>Review documentation:</strong> Ensure all contracts are clear and transparent.</li>
                  <li><strong>Work with certified institutions:</strong> Choose financial institutions with recognized Shariah boards and COBAC licensing.</li>
                </ul>

                <div className="not-prose my-16 p-8 bg-tikari-gold/10 border-l-4 border-tikari-gold rounded-r-2xl">
                  <div className="flex items-start gap-5">
                    <BookOpen className="h-8 w-8 text-tikari-green-dark flex-shrink-0 mt-1" weight="bold" />
                    <div>
                      <h4 className="text-xl font-bold text-tikari-green-dark mb-3">
                        Need Implementation Support?
                      </h4>
                      <p className="text-tikari-sage text-base leading-relaxed mb-6">
                        TIKARI provides comprehensive onboarding, Shariah governance setup, and staff training for financial institutions entering the Islamic finance market.
                      </p>
                      <Button
                        variant="primary"
                        size="lg"
                        href="/demo"
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