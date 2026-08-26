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

export const metadata: Metadata = {
  title: "AAOIFI vs OHADA Accounting Standards Guide | TIKARI",
  description: "Comprehensive guide to reconciling AAOIFI Islamic accounting standards with CEMAC OHADA requirements. Learn dual compliance strategies for Islamic finance in Central Africa.",
  keywords: [
    "AAOIFI standards",
    "OHADA accounting",
    "Islamic accounting",
    "CEMAC compliance",
    "dual compliance",
    "Islamic financial reporting",
    "AAOIFI vs OHADA",
    "Central Africa Islamic finance",
    "Shariah accounting",
    "chart of accounts"
  ],
  openGraph: {
    title: "AAOIFI vs OHADA: Accounting Standards Reconciliation Guide",
    description: "Learn how to reconcile AAOIFI Islamic accounting standards with CEMAC OHADA requirements for dual compliance.",
    type: "article",
    publishedTime: "2024-02-01T00:00:00.000Z",
    authors: ["TIKARI Shariah Team"],
  },
  alternates: {
    canonical: "/resources/education/aaoifi-vs-ohada"
  }
};

export default function AAOIFIvsOHADAPage() {
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "aaoifi-overview", title: "What is AAOIFI?" },
    { id: "ohada-overview", title: "What is OHADA?" },
    { id: "key-differences", title: "Key Differences" },
    { id: "chart-of-accounts", title: "Chart of Accounts Mapping" },
    { id: "financial-statements", title: "Financial Statement Requirements" },
    { id: "dual-compliance", title: "Dual Compliance Strategy" },
    { id: "practical-implementation", title: "Practical Implementation" },
    { id: "software-solutions", title: "Technology Solutions" },
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
      title: "Profit-Sharing Ratio Disclosure",
      description: "How to properly disclose PSR to customers",
      href: "/resources/education/profit-sharing-ratio",
      duration: "8 min read"
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
              Advanced
            </span>
            <span className="text-white/70 text-sm">15 min read</span>
            <span className="text-white/70 text-sm">Updated Aug 2026</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            AAOIFI vs OHADA Standards
          </h1>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl">
            Reconciling AAOIFI Islamic accounting standards with CEMAC OHADA requirements: a comprehensive dual compliance guide for financial institutions.
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
                    Islamic financial institutions operating in CEMAC face a unique challenge: they must comply with both AAOIFI Islamic accounting standards and OHADA regional accounting regulations. This dual compliance framework requires careful reconciliation to satisfy Shariah boards, regulators, and stakeholders.
                  </p>

                  <p>
                    This article provides a comprehensive guide to understanding the differences between these two frameworks and implementing practical strategies to meet both sets of requirements simultaneously.
                  </p>

                  <div className="not-prose my-8 p-6 bg-tikari-gold/10 border-l-4 border-tikari-gold rounded-r-2xl">
                    <h4 className="text-lg font-bold text-tikari-green-dark mb-3">Why This Matters</h4>
                    <ul className="space-y-2 text-tikari-sage">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                        <span><strong>Regulatory compliance:</strong> COBAC requires OHADA-compliant reporting</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                        <span><strong>Shariah compliance:</strong> Islamic operations demand AAOIFI standards</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                        <span><strong>Stakeholder confidence:</strong> Transparent reporting builds trust with investors and customers</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-tikari-green-dark flex-shrink-0 mt-0.5" weight="bold" />
                        <span><strong>Operational efficiency:</strong> Proper mapping prevents duplicate work and errors</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* AAOIFI Overview */}
                <h2 id="aaoifi-overview" className="font-bold text-xl pt-4">What is AAOIFI?</h2>
                <p>
                  The <strong>Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI)</strong> is an international Islamic finance standard-setting body established in 1990 in Bahrain.
                </p>

                <h3 className="pt-2 font-bold text-lg">Scope of AAOIFI Standards</h3>
                <p>
                  AAOIFI issues standards across four domains:
                </p>
                <ul>
                  <li><strong>Financial Accounting Standards (FAS):</strong> 30+ standards covering Islamic transaction recognition, measurement, and disclosure</li>
                  <li><strong>Shariah Standards (SS):</strong> Guidelines on Islamic product structures and contracts</li>
                  <li><strong>Governance Standards (GS):</strong> Corporate governance and Shariah board requirements</li>
                  <li><strong>Audit Standards (AS):</strong> Auditing procedures specific to Islamic institutions</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Key AAOIFI Principles</h3>
                <ul>
                  <li><strong>Substance over form:</strong> Economic reality takes precedence over legal form</li>
                  <li><strong>Shariah compliance:</strong> All transactions must align with Islamic law</li>
                  <li><strong>Transparency:</strong> Full disclosure of profit-sharing ratios, investment risks, and Shariah approval</li>
                  <li><strong>Stakeholder protection:</strong> Special attention to Investment Account Holders (IAH) rights</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Adoption Status</h3>
                <p>
                  AAOIFI standards are <strong>mandatory</strong> in Bahrain, Jordan, Lebanon, Qatar, Sudan, and Syria. They are <strong>recommended or partially adopted</strong> in over 45 countries, including many African nations developing Islamic finance sectors.
                </p>

                {/* OHADA Overview */}
                <h2 id="ohada-overview" className="font-bold text-xl pt-4">What is OHADA?</h2>
                <p>
                  The <strong>Organisation pour l'Harmonisation en Afrique du Droit des Affaires (OHADA)</strong> is a system harmonizing business law across 17 West and Central African countries, including all six CEMAC member states.
                </p>

                <h3 className="font-bold text-lg pt-2">OHADA Accounting Framework</h3>
                <p>
                  OHADA's <strong>Uniform Act on Accounting and Financial Reporting</strong> standardizes:
                </p>
                <ul>
                  <li><strong>Chart of accounts (SYSCOHADA):</strong> Standardized account numbering system</li>
                  <li><strong>Financial statement formats:</strong> Balance sheet, income statement, cash flow statement, and notes</li>
                  <li><strong>Accounting principles:</strong> Accrual basis, going concern, consistency, prudence</li>
                  <li><strong>Disclosure requirements:</strong> Detailed notes to financial statements</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">OHADA Key Features</h3>
                <ul>
                  <li><strong>Francophone focus:</strong> All documentation is in French</li>
                  <li><strong>Class-based chart of accounts:</strong> 8 account classes (1-8)</li>
                  <li><strong>SME-friendly:</strong> Simplified reporting for small enterprises</li>
                  <li><strong>Legal enforceability:</strong> OHADA rulings supersede national laws</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">CEMAC Application</h3>
                <p>
                  In CEMAC countries (Cameroon, CAR, Chad, Congo, Equatorial Guinea, Gabon), <strong>COBAC</strong> (the banking regulator) requires all financial institutions to:
                </p>
                <ul>
                  <li>Use SYSCOHADA chart of accounts</li>
                  <li>Submit quarterly financial statements in OHADA format</li>
                  <li>Comply with OHADA accounting principles</li>
                  <li>Obtain OHADA-compliant audits</li>
                </ul>

                <h2 id="key-differences" className="font-bold text-xl pt-4">Key Differences Between AAOIFI and OHADA</h2>
                <p>
                  While both frameworks aim for transparency and consistency, they differ significantly:
                </p>

                <div className="not-prose my-8">
                  <div className="overflow-x-auto rounded-2xl">
                    <table className="w-full border-1 border-tikari-green/20 text-sm">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold">Aspect</th>
                          <th className="px-4 py-3 text-left font-bold">AAOIFI</th>
                          <th className="px-4 py-3 text-left font-bold">OHADA</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        <tr className="border-b border-tikari-green/20">
                          <td className="px-4 py-3 font-semibold text-tikari-green-dark">Purpose</td>
                          <td className="px-4 py-3">Islamic finance-specific standards</td>
                          <td className="px-4 py-3">General business accounting harmonization</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20 bg-tikari-cream/30">
                          <td className="px-4 py-3 font-semibold text-tikari-green-dark">Geographic scope</td>
                          <td className="px-4 py-3">Global (45+ countries)</td>
                          <td className="px-4 py-3">Regional (17 African countries)</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20">
                          <td className="px-4 py-3 font-semibold text-tikari-green-dark">Language</td>
                          <td className="px-4 py-3">Arabic & English</td>
                          <td className="px-4 py-3">French</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20 bg-tikari-cream/30">
                          <td className="px-4 py-3 font-semibold text-tikari-green-dark">Chart of accounts</td>
                          <td className="px-4 py-3">Flexible, product-specific</td>
                          <td className="px-4 py-3">Standardized (SYSCOHADA)</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20">
                          <td className="px-4 py-3 font-semibold text-tikari-green-dark">Investment accounts</td>
                          <td className="px-4 py-3">Off-balance sheet (FAS 6)</td>
                          <td className="px-4 py-3">On-balance sheet as deposits</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20 bg-tikari-cream/30">
                          <td className="px-4 py-3 font-semibold text-tikari-green-dark">Profit distribution</td>
                          <td className="px-4 py-3">PSR-based, disclosed separately</td>
                          <td className="px-4 py-3">Interest expense classification</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20">
                          <td className="px-4 py-3 font-semibold text-tikari-green-dark">Zakat</td>
                          <td className="px-4 py-3">Recognized and disclosed (FAS 9)</td>
                          <td className="px-4 py-3">Not addressed</td>
                        </tr>
                        <tr className="bg-tikari-cream/30">
                          <td className="px-4 py-3 font-semibold text-tikari-green-dark">Shariah compliance</td>
                          <td className="px-4 py-3">Core requirement</td>
                          <td className="px-4 py-3">Not addressed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Chart of Accounts Mapping */}
                <h2 id="chart-of-accounts" className="font-bold text-xl pt-4">Chart of Accounts Mapping</h2>
                <p>
                  One of the most critical reconciliation tasks is mapping Islamic finance transactions to OHADA's SYSCOHADA chart of accounts:
                </p>

                <h3 className="font-bold text-lg pt-2">SYSCOHADA Structure</h3>
                <p>
                  OHADA uses an 8-class chart of accounts:
                </p>
                <ul>
                  <li><strong>Class 1:</strong> Capital accounts (equity, reserves)</li>
                  <li><strong>Class 2:</strong> Fixed assets (immobilizations)</li>
                  <li><strong>Class 3:</strong> Inventory</li>
                  <li><strong>Class 4:</strong> Third-party accounts (receivables, payables)</li>
                  <li><strong>Class 5:</strong> Financial accounts (cash, bank)</li>
                  <li><strong>Class 6:</strong> Expenses</li>
                  <li><strong>Class 7:</strong> Revenue</li>
                  <li><strong>Class 8:</strong> Off-balance sheet items</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Mapping Islamic Products to SYSCOHADA</h3>

                <div className="not-prose my-8">
                  <div className="space-y-6">
                    <div className="p-6 bg-white border-1 border-tikari-green/20 rounded-2xl">
                      <h4 className="text-lg font-bold text-tikari-green-dark mb-4">Murabaha Receivables</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                          <span className="text-tikari-sage">AAOIFI Treatment:</span>
                          <span className="font-mono text-tikari-green-dark">Murabaha Receivables (FAS 2)</span>
                        </div>
                        <div className="flex items-center justify-center py-2">
                          <ArrowsLeftRight className="h-6 w-6 text-tikari-gold" weight="bold" />
                        </div>
                        <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                          <span className="text-tikari-sage">OHADA Mapping:</span>
                          <span className="font-mono text-tikari-green-dark">Class 4 - Account 411X (Customers)</span>
                        </div>
                      </div>
                      <p className="text-sm text-tikari-sage mt-4 italic">
                        Record Murabaha receivables under customer accounts, with subledger detail indicating Islamic product type.
                      </p>
                    </div>

                    <div className="p-6 bg-white border-1 border-tikari-green/20 rounded-2xl">
                      <h4 className="text-lg font-bold text-tikari-green-dark mb-4">Mudarabah Investment Accounts</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                          <span className="text-tikari-sage">AAOIFI Treatment:</span>
                          <span className="font-mono text-tikari-green-dark">Off-balance sheet (FAS 6)</span>
                        </div>
                        <div className="flex items-center justify-center py-2">
                          <ArrowsLeftRight className="h-6 w-6 text-tikari-gold" weight="bold" />
                        </div>
                        <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                          <span className="text-tikari-sage">OHADA Mapping:</span>
                          <span className="font-mono text-tikari-green-dark">Class 1 - Account 161X (Deposits/Liabilities)</span>
                        </div>
                      </div>
                      <p className="text-sm text-tikari-sage mt-4 italic">
                        OHADA requires on-balance sheet treatment, but notes can clarify the Mudarabah nature and PSR arrangement.
                      </p>
                    </div>

                    <div className="p-6 bg-white border-1 border-tikari-green/20 rounded-2xl">
                      <h4 className="text-lg font-bold text-tikari-green-dark mb-4">Profit Distribution to IAH</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                          <span className="text-tikari-sage">AAOIFI Treatment:</span>
                          <span className="font-mono text-tikari-green-dark">Separate line item (not expense)</span>
                        </div>
                        <div className="flex items-center justify-center py-2">
                          <ArrowsLeftRight className="h-6 w-6 text-tikari-gold" weight="bold" />
                        </div>
                        <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                          <span className="text-tikari-sage">OHADA Mapping:</span>
                          <span className="font-mono text-tikari-green-dark">Class 6 - Account 671X (Interest/Charges)</span>
                        </div>
                      </div>
                      <p className="text-sm text-tikari-sage mt-4 italic">
                        While economically profit-sharing, OHADA treats it as interest expense. Detailed notes must clarify the Shariah-compliant nature.
                      </p>
                    </div>

                    <div className="p-6 bg-white border-1 border-tikari-green/20 rounded-2xl">
                      <h4 className="text-lg font-bold text-tikari-green-dark mb-4">Zakat</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                          <span className="text-tikari-sage">AAOIFI Treatment:</span>
                          <span className="font-mono text-tikari-green-dark">Disclosed separately (FAS 9)</span>
                        </div>
                        <div className="flex items-center justify-center py-2">
                          <ArrowsLeftRight className="h-6 w-6 text-tikari-gold" weight="bold" />
                        </div>
                        <div className="flex justify-between items-center p-3 bg-tikari-cream/40">
                          <span className="text-tikari-sage">OHADA Mapping:</span>
                          <span className="font-mono text-tikari-green-dark">Class 6 - Account 6583 (Charitable Donations)</span>
                        </div>
                      </div>
                      <p className="text-sm text-tikari-sage mt-4 italic">
                        Zakat is treated as a charitable expense. If the institution facilitates Zakat payment for customers, use Class 4 (payables).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Financial Statements */}
                <h2 id="financial-statements" className="font-bold text-xl pt-4">Financial Statement Requirements</h2>
                <p>
                  Both AAOIFI and OHADA mandate specific financial statement formats:
                </p>

                <h3 className="font-bold text-lg pt-2">AAOIFI Required Statements</h3>
                <ul>
                  <li><strong>Statement of Financial Position (Balance Sheet)</strong></li>
                  <li><strong>Statement of Income:</strong> Separates shareholder income from IAH income</li>
                  <li><strong>Statement of Cash Flows</strong></li>
                  <li><strong>Statement of Changes in Equity</strong></li>
                  <li><strong>Statement of Changes in Restricted Investments:</strong> For Mudarabah accounts</li>
                  <li><strong>Statement of Sources and Uses of Zakat and Charity Funds</strong></li>
                  <li><strong>Notes to Financial Statements:</strong> Including PSR disclosures and Shariah board report</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">OHADA Required Statements</h3>
                <ul>
                  <li><strong>Balance Sheet (Bilan):</strong> Standardized format</li>
                  <li><strong>Income Statement (Compte de Résultat):</strong> Detailed revenue and expense breakdown</li>
                  <li><strong>Cash Flow Statement (Tableau de Flux de Trésorerie)</strong></li>
                  <li><strong>Notes (Annexe):</strong> Accounting policies and detailed disclosures</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Reconciliation Approach</h3>
                <p>
                  A practical dual-reporting strategy:
                </p>
                <ol>
                  <li><strong>Maintain books in AAOIFI format:</strong> This ensures Shariah compliance and provides detailed Islamic finance tracking</li>
                  <li><strong>Create OHADA mapping rules:</strong> Define how each AAOIFI account maps to SYSCOHADA</li>
                  <li><strong>Generate OHADA statements:</strong> Use mapping rules to produce regulatory-compliant reports</li>
                  <li><strong>Supplement with notes:</strong> Provide extensive footnotes explaining Islamic finance structures within OHADA reports</li>
                </ol>

                {/* Dual Compliance */}
                <h2 id="dual-compliance" className="font-bold text-xl pt-4">Dual Compliance Strategy</h2>
                <p>
                  Implementing both frameworks simultaneously requires a systematic approach:
                </p>

                <h3 className="font-bold text-lg pt-2">Step 1: Establish Parallel Chart of Accounts</h3>
                <p>
                  Create a dual chart of accounts where each AAOIFI account has a corresponding SYSCOHADA code:
                </p>

                <div className="not-prose my-6">
                  <div className="overflow-x-auto rounded-2xl">
                    <table className="w-full border-1 border-tikari-green/20 text-sm rounded-2xl">
                      <thead className="bg-tikari-green-dark text-white">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold">Islamic Product</th>
                          <th className="px-4 py-3 text-left font-bold">AAOIFI Account</th>
                          <th className="px-4 py-3 text-left font-bold">SYSCOHADA Code</th>
                        </tr>
                      </thead>
                      <tbody className="text-tikari-sage">
                        <tr className="border-b border-tikari-green/20">
                          <td className="px-4 py-3">Murabaha Receivables</td>
                          <td className="px-4 py-3 font-mono text-xs">120-001</td>
                          <td className="px-4 py-3 font-mono text-xs">4111</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20 bg-tikari-cream/30">
                          <td className="px-4 py-3">Mudarabah Deposits</td>
                          <td className="px-4 py-3 font-mono text-xs">Off-BS</td>
                          <td className="px-4 py-3 font-mono text-xs">1611</td>
                        </tr>
                        <tr className="border-b border-tikari-green/20">
                          <td className="px-4 py-3">Musharakah Investments</td>
                          <td className="px-4 py-3 font-mono text-xs">130-002</td>
                          <td className="px-4 py-3 font-mono text-xs">2613</td>
                        </tr>
                        <tr className="bg-tikari-cream/30">
                          <td className="px-4 py-3">Ijara Assets (Leased)</td>
                          <td className="px-4 py-3 font-mono text-xs">140-003</td>
                          <td className="px-4 py-3 font-mono text-xs">2441</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h3 className="font-bold text-lg pt-2">Step 2: Implement Subledgers</h3>
                <p>
                  Use subledgers to capture Islamic-specific details while maintaining OHADA compliance:
                </p>
                <ul>
                  <li><strong>Customer subledger:</strong> Track Murabaha contract details (cost, markup, installment schedule)</li>
                  <li><strong>Investment account subledger:</strong> Record PSR, profit allocation, and IAH balances</li>
                  <li><strong>Shariah compliance subledger:</strong> Document Shariah board approvals and audit findings</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">Step 3: Quarterly Reconciliation Process</h3>
                <p>
                  Establish a quarterly workflow:
                </p>
                <ol>
                  <li><strong>Close books in AAOIFI format</strong></li>
                  <li><strong>Run automated mapping:</strong> Convert AAOIFI balances to SYSCOHADA accounts</li>
                  <li><strong>Generate OHADA statements:</strong> Produce balance sheet, income statement, and notes</li>
                  <li><strong>Perform variance analysis:</strong> Verify that AAOIFI and OHADA reports reconcile</li>
                  <li><strong>Submit to COBAC:</strong> File OHADA-compliant reports with the regulator</li>
                  <li><strong>Prepare AAOIFI report for Shariah board:</strong> Provide Islamic finance-specific analysis</li>
                </ol>

                <h3 className="font-bold text-lg pt-2">Step 4: Disclosure Notes</h3>
                <p>
                  Use OHADA financial statement notes (Annexe) to bridge the gap:
                </p>
                <ul>
                  <li><strong>Note 1 - Accounting policies:</strong> Explain that the institution operates under dual compliance (AAOIFI + OHADA)</li>
                  <li><strong>Note 2 - Islamic products:</strong> Define Murabaha, Mudarabah, Musharakah, and their economic substance</li>
                  <li><strong>Note 3 - Investment accounts:</strong> Disclose PSR, profit distribution methodology, and IAH rights</li>
                  <li><strong>Note 4 - Shariah compliance:</strong> Reference Shariah board composition and approval process</li>
                  <li><strong>Note 5 - Zakat:</strong> Explain Zakat calculation and distribution if applicable</li>
                </ul>

                {/* Practical Implementation */}
                <h2 id="practical-implementation" className="font-bold text-xl pt-4">Practical Implementation Tips</h2>
                <p>
                  Based on real-world experience from CEMAC Islamic finance institutions:
                </p>

                <h3 className="font-bold text-lg pt-2">1. Start with Core Products</h3>
                <p>
                  Don't try to map every Islamic product at once. Begin with:
                </p>
                <ul>
                  <li>Murabaha (easiest to map to conventional loan accounting)</li>
                  <li>Mudarabah investment accounts (similar to term deposits)</li>
                  <li>Qard Hassan (benevolent loans, straightforward)</li>
                </ul>
                <p>
                  Add complex products (Musharakah, Ijara, Salam) gradually as you refine your mapping rules.
                </p>

                <h3 className="font-bold text-lg pt-2">2. Engage Both AAOIFI and OHADA Experts</h3>
                <ul>
                  <li><strong>Hire an AAOIFI-certified accountant:</strong> Ensure someone on your team understands Islamic finance accounting principles</li>
                  <li><strong>Consult OHADA practitioners:</strong> Work with accountants experienced in CEMAC regulatory reporting</li>
                  <li><strong>Coordinate with Shariah board:</strong> Ensure accounting treatments align with Shariah interpretations</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">3. Build Audit Trails</h3>
                <p>
                  Maintain comprehensive documentation for every mapping decision:
                </p>
                <ul>
                  <li>Why a particular AAOIFI account maps to a specific SYSCOHADA code</li>
                  <li>How profit distribution is classified (expense vs. equity allocation)</li>
                  <li>Rationale for off-balance sheet vs. on-balance sheet treatment</li>
                </ul>
                <p>
                  This documentation protects against regulatory scrutiny and simplifies annual audits.
                </p>

                <h3 className="font-bold text-lg pt-2">4. Leverage Technology (see next section)</h3>
                <p>
                  Manual dual compliance is error-prone and time-consuming. Modern software solutions automate mapping and reconciliation.
                </p>

                {/* Software Solutions */}
                <h2 id="software-solutions" className="font-bold text-xl pt-4">Technology Solutions for Dual Compliance</h2>
                <p>
                  Manual accounting is not feasible for dual compliance at scale. Specialized software addresses this challenge:
                </p>

                <h3 className="font-bold text-lg pt-2">Requirements for Dual Compliance Software</h3>
                <ul>
                  <li><strong>Dual chart of accounts:</strong> Native support for both AAOIFI and SYSCOHADA</li>
                  <li><strong>Automated mapping rules:</strong> Configure once, apply automatically</li>
                  <li><strong>Parallel reporting:</strong> Generate both AAOIFI and OHADA statements from the same data</li>
                  <li><strong>Subledger management:</strong> Track Islamic product details within OHADA accounts</li>
                  <li><strong>Reconciliation tools:</strong> Verify that AAOIFI and OHADA reports balance</li>
                  <li><strong>Multilingual support:</strong> Arabic, French, and English interfaces</li>
                  <li><strong>Audit trail:</strong> Complete transaction history for regulatory review</li>
                </ul>

                <h3 className="font-bold text-lg pt-2">TIKARI's Dual Compliance Features</h3>
                <p>
                  TIKARI is purpose-built for Islamic finance in CEMAC:
                </p>

                <div className="not-prose my-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: FileText,
                        title: "Pre-Mapped Chart of Accounts",
                        description: "AAOIFI accounts pre-mapped to SYSCOHADA codes, customizable for your institution"
                      },
                      {
                        icon: ArrowsLeftRight,
                        title: "Automated Reconciliation",
                        description: "Real-time variance analysis between AAOIFI and OHADA reports"
                      },
                      {
                        icon: Globe,
                        title: "Bilingual Reporting",
                        description: "Generate statements in both French (for COBAC) and English (for stakeholders)"
                      },
                      {
                        icon: Bank,
                        title: "COBAC Submission-Ready",
                        description: "Export reports in formats required by CEMAC banking regulator"
                      }
                    ].map((feature, idx) => {
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
                      <h4 className="text-xl font-bold text-tikari-green-dark mb-3">Simplify Dual Compliance with TIKARI</h4>
                      <p className="text-tikari-sage text-base leading-relaxed mb-4">
                        Stop juggling spreadsheets and manual mappings. TIKARI automates AAOIFI-to-OHADA reconciliation, generates both statement formats, and keeps you compliant with COBAC and Shariah requirements.
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
