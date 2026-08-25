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

export const metadata: Metadata = {
  title: "Understanding Murabaha Financing: Complete Guide | TIKARI",
  description: "Step-by-step guide to Murabaha (cost-plus sale) financing in Islamic banking. Learn contract structure, pricing, documentation, and CEMAC compliance requirements.",
  keywords: [
    "Murabaha financing",
    "cost plus financing",
    "Islamic asset financing",
    "Shariah compliant loans",
    "Murabaha contract",
    "Islamic trade financing",
    "CEMAC Islamic banking",
    "halal business financing",
    "Murabaha pricing",
    "Shariah contract structure"
  ],
  openGraph: {
    title: "Understanding Murabaha Financing: Complete Guide for CEMAC",
    description: "Comprehensive breakdown of Murabaha contracts, pricing mechanisms, and how cost-plus sale financing works in Islamic banking.",
    type: "article",
    publishedTime: "2024-01-20T00:00:00.000Z",
    authors: ["TIKARI Shariah Team"],
  },
  alternates: {
    canonical: "/resources/education/understanding-murabaha"
  }
};

export default function UnderstandingMurabahaPage() {
  const tableOfContents = [
    { id: "introduction", title: "What is Murabaha?" },
    { id: "how-it-works", title: "How Murabaha Works" },
    { id: "step-by-step", title: "Transaction Flow" },
    { id: "pricing", title: "Pricing & Markup" },
    { id: "documentation", title: "Required Documentation" },
    { id: "vs-conventional", title: "Murabaha vs Conventional Loan" },
    { id: "use-cases", title: "Common Use Cases" },
    { id: "compliance", title: "CEMAC Compliance" },
    { id: "risks", title: "Risks & Mitigation" },
  ];

  const relatedArticles = [
    {
      title: "What is Islamic Finance?",
      description: "Introduction to Shariah-compliant banking principles",
      href: "/resources/education/what-is-islamic-finance",
      duration: "15 min read"
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
            <span className="text-white/70 text-sm">12 min read</span>
            <span className="text-white/70 text-sm">Updated Aug 2026</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            Understanding Murabaha Financing
          </h1>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl">
            A step-by-step breakdown of how cost-plus sale financing works in Islamic banking, from contract structure to pricing mechanisms.
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
                    Murabaha (also spelled Murabahah) is the most widely used Islamic financing structure, accounting for approximately 70% of all Islamic banking transactions worldwide. It's a cost-plus sale arrangement where the bank purchases an asset and resells it to the customer at a disclosed markup.
                  </p>

                  <p>
                    The term "Murabaha" comes from the Arabic word <em>ribh</em> (profit), and literally means "a sale on mutually agreed profit." Unlike conventional interest-based loans, Murabaha is a <strong>trade transaction</strong> involving the purchase and sale of a tangible asset not the lending of money.
                  </p>

                  <p>
                    In the <strong>CEMAC region</strong>, Murabaha is particularly popular for:
                  </p>
                  <ul>
                    <li>Working capital financing (inventory, raw materials)</li>
                    <li>Equipment acquisition (machinery, vehicles, technology)</li>
                    <li>Trade finance (import/export transactions)</li>
                    <li>Asset-backed business expansion</li>
                  </ul>
                </div>

                {/* How It Works */}
                <h2 id="how-it-works" className="font-bold text-xl pt-4">How Murabaha Works</h2>
                <p>
                  Murabaha transforms what would be a conventional loan into a <strong>Shariah-compliant sale transaction</strong>. Here's the fundamental structure:
                </p>

                <div className="not-prose my-12 p-7 bg-tikari-cream/40 border-l-4 border-tikari-green">
                  <h4 className="text-lg font-bold text-tikari-green-dark mb-5">The Murabaha Framework</h4>
                  <ol className="space-y-4 text-tikari-sage">
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">1.</span>
                      <span><strong>Customer identifies a need:</strong> The customer wants to acquire an asset (e.g., a delivery truck) but lacks immediate capital.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">2.</span>
                      <span><strong>Promise to purchase:</strong> The customer promises to buy the asset from the bank once the bank acquires it (this promise is binding in most jurisdictions).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">3.</span>
                      <span><strong>Bank purchases the asset:</strong> The bank buys the asset from a supplier using its own funds.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">4.</span>
                      <span><strong>Bank takes ownership:</strong> The asset is legally owned by the bank, even if briefly.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">5.</span>
                      <span><strong>Bank sells to customer:</strong> The bank resells the asset to the customer at <strong>cost + markup</strong>, fully disclosed.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-tikari-green-dark flex-shrink-0">6.</span>
                      <span><strong>Deferred payment:</strong> The customer pays the total price in installments over an agreed period.</span>
                    </li>
                  </ol>
                </div>

                <p>
                  The key distinction from a conventional loan is that the bank <strong>owns the asset</strong> before selling it, making this a genuine trade transaction rather than a debt instrument with interest.
                </p>

                {/* Step-by-Step */}
                <h2 id="step-by-step" className="font-bold text-xl pt-4">Murabaha Transaction Flow</h2>
                <p>
                  Let's walk through a concrete example: a microenterprise in Douala, Cameroon, needs a 5 million FCFA sewing machine to expand production.
                </p>

                <div className="not-prose my-10">
                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1: Customer Application",
                        description: "The tailor approaches an Islamic microfinance institution (MFI) and requests Murabaha financing for a specific sewing machine model from a local supplier.",
                        actors: "Customer → Bank"
                      },
                      {
                        step: "Step 2: Promise to Purchase",
                        description: "The customer signs a binding promise to purchase the sewing machine once the bank acquires it. This promise includes the agreed markup percentage (e.g., 15% over 24 months).",
                        actors: "Customer ↔ Bank"
                      },
                      {
                        step: "Step 3: Bank Purchases Asset",
                        description: "The bank buys the sewing machine directly from the supplier for 5 million FCFA. The bank pays cash and obtains full legal ownership.",
                        actors: "Bank → Supplier"
                      },
                      {
                        step: "Step 4: Ownership Transfer",
                        description: "The bank takes delivery of the sewing machine. Even if this ownership is brief, it's legally documented (purchase invoice, ownership certificate).",
                        actors: "Supplier → Bank"
                      },
                      {
                        step: "Step 5: Sale to Customer",
                        description: "The bank sells the sewing machine to the customer for 5,750,000 FCFA (5M cost + 750K markup = 15% profit). The contract specifies 24 monthly installments of 239,583 FCFA.",
                        actors: "Bank → Customer"
                      },
                      {
                        step: "Step 6: Installment Payments",
                        description: "The customer pays 239,583 FCFA monthly for 24 months. The total price is fixed and cannot change (unlike variable-rate conventional loans).",
                        actors: "Customer → Bank"
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-5 p-6 bg-white border border-tikari-green/15 rounded-none"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-tikari-gold flex items-center justify-center text-tikari-green-dark font-bold text-sm">
                            {idx + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <h4 className="text-lg font-bold text-tikari-green-dark">
                              {item.step}
                            </h4>
                            <span className="text-xs text-tikari-sage bg-tikari-cream/60 px-3 py-1 rounded-full whitespace-nowrap">
                              {item.actors}
                            </span>
                          </div>
                          <p className="text-tikari-sage leading-relaxed m-0">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <h2 id="pricing" className="font-bold text-xl pt-4">Pricing & Markup Calculation</h2>
                <p>
                  One of the most important aspects of Murabaha is <strong>transparent pricing</strong>. The bank must disclose:
                </p>
                <ul>
                  <li>The original cost of the asset</li>
                  <li>The markup (profit margin)</li>
                  <li>The total selling price</li>
                  <li>The installment schedule</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">How Markup is Determined</h3>
                <p>
                  While the markup percentage is not technically "interest," it serves a similar economic function. Islamic scholars permit profit on trade transactions, and banks consider several factors when setting the markup:
                </p>

                <ul>
                  <li><strong>Market rates:</strong> Competitive pricing compared to conventional financing options</li>
                  <li><strong>Risk assessment:</strong> Customer creditworthiness and asset quality</li>
                  <li><strong>Financing period:</strong> Longer terms typically command higher markups</li>
                  <li><strong>Asset type:</strong> Liquid assets (easily resold) may have lower markups</li>
                  <li><strong>Administrative costs:</strong> Operational expenses of executing the transaction</li>
                </ul>

                <div className="not-prose my-8 p-6 bg-tikari-gold/10 border border-tikari-gold/30 rounded-none">
                  <h4 className="text-lg font-bold text-tikari-green-dark mb-2 flex items-center gap-2">
                    <Calculator className="h-6 w-6" weight="bold" />
                    Murabaha Pricing Example
                  </h4>
                  <div className="space-y-1 text-tikari-sage">
                    <div className="flex justify-between py-3 border-b border-tikari-green/15">
                      <span className="font-semibold">Asset Cost Price:</span>
                      <span className="font-mono">5,000,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-tikari-green/15">
                      <span className="font-semibold">Markup (15% over 24 months):</span>
                      <span className="font-mono">750,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-3 border-b-2 border-tikari-green-dark">
                      <span className="font-bold text-tikari-green-dark">Total Selling Price:</span>
                      <span className="font-mono font-bold text-tikari-green-dark">5,750,000 FCFA</span>
                    </div>
                    <div className="flex justify-between py-3 mt-2">
                      <span className="font-semibold">Monthly Installment (24 months):</span>
                      <span className="font-mono">239,583 FCFA</span>
                    </div>
                  </div>
                  <p className="text-sm text-tikari-sage mt-5 italic">
                    Note: The total price is fixed at contract signing. Unlike conventional loans with variable interest rates, Murabaha prices cannot change.
                  </p>
                </div>

                <h3 className="font-bold text-lg pt-2">Fixed vs Variable Pricing</h3>
                <p>
                  A critical Shariah requirement: once the Murabaha contract is signed, the <strong>price is immutable</strong>. This differs significantly from conventional loans where interest rates can fluctuate.
                </p>

                <ul>
                  <li><strong>Conventional loan:</strong> Principal + variable interest rate (can increase/decrease)</li>
                  <li><strong>Murabaha:</strong> Fixed selling price (cost + markup), disclosed upfront and unchangeable</li>
                </ul>

                {/* Documentation */}
                <h2 id="documentation" className="font-bold text-xl pt-4">Required Documentation</h2>
                <p>
                  Proper Murabaha execution requires comprehensive documentation to ensure Shariah compliance and legal enforceability:
                </p>

                <h3 className="font-bold text-lg pt-2">Customer-Side Documents</h3>
                <ul>
                  <li><strong>Murabaha financing application:</strong> Details of the asset needed and financing amount</li>
                  <li><strong>Promise to purchase (wa'ad):</strong> Binding commitment to buy the asset once the bank acquires it</li>
                  <li><strong>Agency agreement (optional):</strong> In some cases, the customer acts as the bank's agent to purchase the asset on the bank's behalf</li>
                  <li><strong>Murabaha sale contract:</strong> The final sale agreement specifying cost, markup, total price, and payment terms</li>
                  <li><strong>Collateral documentation:</strong> Security agreements, guarantees, or asset pledges</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Bank-Side Documents</h3>
                <ul>
                  <li><strong>Purchase invoice from supplier:</strong> Proof that the bank acquired the asset</li>
                  <li><strong>Ownership certificate:</strong> Evidence that the bank legally owned the asset before reselling it</li>
                  <li><strong>Shariah board approval:</strong> Confirmation that the product structure complies with Islamic law</li>
                  <li><strong>COBAC compliance checklist:</strong> Verification that the transaction meets CEMAC microfinance regulations</li>
                  <li><strong>Internal risk assessment:</strong> Credit evaluation and approval documentation</li>
                </ul>

                <div className="not-prose my-12 p-7 bg-tikari-cream/40 border-l-4 border-tikari-gold rounded-none">
                  <div className="flex items-start gap-5">
                    <FileText className="h-7 w-7 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                    <div>
                      <h4 className="text-lg font-bold text-tikari-green-dark mb-2">
                        Documentation Best Practice
                      </h4>
                      <p className="text-tikari-sage leading-relaxed m-0">
                        Many Islamic finance institutions streamline the process by creating a <strong>Master Murabaha Framework Agreement</strong> that covers general terms, then use simple purchase orders for individual transactions. This reduces paperwork while maintaining Shariah compliance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Murabaha vs Conventional */}
                <h2 id="vs-conventional" className="font-bold text-xl pt-4">Murabaha vs Conventional Loan</h2>
                <p>
                  While Murabaha and conventional loans may appear similar economically, they differ fundamentally in structure and philosophy:
                </p>

                <div className="not-prose my-12">
                  <div className="overflow-x-auto border border-tikari-green/15">
                    <table className="w-full">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold">Aspect</th>
                          <th className="px-6 py-4 text-left font-bold">Murabaha</th>
                          <th className="px-6 py-4 text-left font-bold">Conventional Loan</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Nature</td>
                          <td className="px-6 py-4">Sale transaction (trade)</td>
                          <td className="px-6 py-4">Debt instrument (lending)</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Asset ownership</td>
                          <td className="px-6 py-4">Bank owns asset before selling</td>
                          <td className="px-6 py-4">Bank never owns the asset</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Return structure</td>
                          <td className="px-6 py-4">Profit on sale (markup)</td>
                          <td className="px-6 py-4">Interest on loan (riba)</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Price fixation</td>
                          <td className="px-6 py-4">Fixed at contract signing</td>
                          <td className="px-6 py-4">Can vary (variable rates)</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Late payment penalty</td>
                          <td className="px-6 py-4">Charity/fixed penalty (not profit)</td>
                          <td className="px-6 py-4">Additional interest charges</td>
                        </tr>
                        <tr className="border-b border-tikari-green/15 bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Early settlement</td>
                          <td className="px-6 py-4">Bank may offer rebate (optional)</td>
                          <td className="px-6 py-4">Often prepayment penalties</td>
                        </tr>
                        <tr className="bg-tikari-cream/30">
                          <td className="px-6 py-4 font-semibold text-tikari-green-dark">Shariah compliance</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600" weight="bold" />
                              Halal
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-2">
                              <XCircle className="h-5 w-5 text-red-600" weight="bold" />
                              Contains riba
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Use Cases */}
                <h2 id="use-cases" className="font-bold text-xl pt-4">Common Use Cases in CEMAC</h2>
                <p>
                  Murabaha is versatile and can be applied to various financing needs across the CEMAC region:
                </p>

                <h3 className="font-bold text-lg pt-2">1. Working Capital Financing</h3>
                <p>
                  <strong>Example:</strong> A textile trader in N'Djamena, Chad, needs 20 million FCFA to purchase fabric inventory from Cameroon.
                </p>
                <ul>
                  <li>The bank purchases the fabric from the Cameroonian supplier</li>
                  <li>The bank sells the fabric to the trader at cost + 12% markup</li>
                  <li>The trader pays in 6 monthly installments as they sell the fabric to retailers</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">2. Equipment Acquisition</h3>
                <p>
                  <strong>Example:</strong> A construction company in Libreville, Gabon, needs a cement mixer worth 8 million FCFA.
                </p>
                <ul>
                  <li>The bank buys the cement mixer from the equipment supplier</li>
                  <li>The bank sells it to the company at cost + 18% markup over 36 months</li>
                  <li>The company makes monthly payments of 275,000 FCFA</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">3. Vehicle Financing</h3>
                <p>
                  <strong>Example:</strong> A delivery service in Bangui, CAR, needs three motorcycles totaling 6 million FCFA.
                </p>
                <ul>
                  <li>The bank purchases the motorcycles from a local dealer</li>
                  <li>The bank resells them at cost + 20% markup over 18 months</li>
                  <li>Monthly installments of 400,000 FCFA</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">4. Import Finance</h3>
                <p>
                  <strong>Example:</strong> An electronics retailer in Yaoundé, Cameroon, wants to import smartphones worth 50 million FCFA from Dubai.
                </p>
                <ul>
                  <li>The bank purchases the smartphones on behalf of the retailer</li>
                  <li>The bank sells them to the retailer at cost + 10% markup</li>
                  <li>Payment in 4 quarterly installments of 13.75 million FCFA</li>
                </ul>

                {/* CEMAC Compliance */}
                <h2 id="compliance" className="font-bold text-xl pt-4">CEMAC Regulatory Compliance</h2>
                <p>
                  Islamic finance institutions operating in CEMAC must navigate both <strong>Shariah requirements</strong> and <strong>regional regulations</strong>:
                </p>

                <h3 className="font-bold text-lg pt-2">COBAC Requirements</h3>
                <ul>
                  <li><strong>Licensing:</strong> Must obtain authorization as a microfinance institution (Établissement de Microfinance)</li>
                  <li><strong>Capital adequacy:</strong> Minimum capital requirements vary by COBAC category (1st, 2nd, or 3rd category)</li>
                  <li><strong>Reporting:</strong> Regular financial statements and prudential ratios</li>
                  <li><strong>Asset classification:</strong> Murabaha receivables must be classified and provisioned per COBAC standards</li>
                  <li><strong>Maximum financing limits:</strong> Caps on exposure to individual clients</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">OHADA Accounting Treatment</h3>
                <ul>
                  <li><strong>Asset recognition:</strong> The bank must record the asset on its balance sheet when purchased</li>
                  <li><strong>Revenue recognition:</strong> Markup can be recognized over the financing period (accrual basis) or at sale (cash basis), depending on accounting policy</li>
                  <li><strong>Disclosure requirements:</strong> Notes must explain the nature of Murabaha transactions</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Shariah Governance</h3>
                <ul>
                  <li><strong>ACE (Audit Committee for Ethics):</strong> Establish a Shariah supervisory board to approve product structures</li>
                  <li><strong>Pre-transaction review:</strong> Each Murabaha contract should be reviewed for Shariah compliance</li>
                  <li><strong>Annual Shariah audit:</strong> Independent review of all Islamic transactions</li>
                  <li><strong>Fatwa documentation:</strong> Written Shariah opinions justifying product structures</li>
                </ul>

                {/* Risks */}
                <h2 id="risks" className="font-bold text-xl pt-4">Risks & Mitigation Strategies</h2>
                <p>
                  While Murabaha is relatively straightforward, several risks require careful management:
                </p>

                <h3 className="font-bold text-lg pt-2">1. Commodity Risk</h3>
                <p>
                  <strong>Risk:</strong> The bank briefly owns the asset before selling it to the customer. If the asset is damaged, lost, or devalues during this period, the bank bears the loss.
                </p>
                <p>
                  <strong>Mitigation:</strong>
                </p>
                <ul>
                  <li>Minimize the ownership period (ideally same-day transaction)</li>
                  <li>Obtain insurance on the asset during ownership</li>
                  <li>Conduct thorough asset inspections before purchase</li>
                  <li>Use agency agreements where the customer acts as the bank's purchasing agent</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">2. Credit Risk</h3>
                <p>
                  <strong>Risk:</strong> The customer may default on installment payments.
                </p>
                <p>
                  <strong>Mitigation:</strong>
                </p>
                <ul>
                  <li>Comprehensive credit assessments before financing</li>
                  <li>Collateral requirements (asset pledge, guarantees)</li>
                  <li>Diversification across multiple customers and sectors</li>
                  <li>Regular monitoring of customer financial health</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">3. Shariah Non-Compliance Risk</h3>
                <p>
                  <strong>Risk:</strong> Improper documentation or execution could render the transaction non-Shariah compliant.
                </p>
                <p>
                  <strong>Mitigation:</strong>
                </p>
                <ul>
                  <li>Engage qualified Shariah advisors</li>
                  <li>Implement standardized contract templates</li>
                  <li>Train staff on Shariah requirements</li>
                  <li>Conduct regular internal Shariah audits</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">4. Legal Risk</h3>
                <p>
                  <strong>Risk:</strong> CEMAC legal systems may not fully recognize Islamic finance structures, complicating enforcement.
                </p>
                <p>
                  <strong>Mitigation:</strong>
                </p>
                <ul>
                  <li>Work with legal experts familiar with both OHADA law and Islamic finance</li>
                  <li>Obtain COBAC clarifications on Islamic product treatment</li>
                  <li>Use clear, legally enforceable contract language</li>
                  <li>Maintain thorough documentation for all transactions</li>
                </ul>

                <div className="not-prose my-16 p-8 bg-tikari-gold/10 border-l-4 border-tikari-gold rounded-r-lg">
                  <div className="flex items-start gap-5">
                    <Handshake className="h-8 w-8 text-tikari-green-dark flex-shrink-0 mt-1" weight="bold" />
                    <div>
                      <h4 className="text-xl font-bold text-tikari-green-dark mb-3">
                        Implement Murabaha with TIKARI
                      </h4>
                      <p className="text-tikari-sage text-base leading-relaxed mb-6">
                        TIKARI's platform includes pre-built Murabaha workflows, automated documentation, Shariah compliance checks, and COBAC-compliant reporting all tailored for CEMAC institutions.
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