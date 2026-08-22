"use client";

import { 
  ArrowRight, 
  ChartBar,
  ListNumbers,
  BookOpen,
  Receipt,
  FileText,
  ChartLineUp,
  Bank,
  Coins,
  Calculator,
  Calendar,
  PresentationChart,
  Scales,
  CheckCircle,
  TrendUp,
  CurrencyCircleDollar,
  Notebook,
  ClipboardText,
  Archive
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function GLReportingPage() {
  const sections = [
    {
      id: "chart-of-accounts",
      title: "Chart of Accounts & GL Structure",
      subtitle: "COBAC-compliant account structure with Islamic banking extensions",
      icon: ListNumbers,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/personOffice.jpg",
      features: [
        {
          title: "COBAC Standard COA",
          description: "Pre-configured chart aligned with COBAC prudential framework for CEMAC member states",
          icon: ListNumbers
        },
        {
          title: "Islamic Account Extensions",
          description: "Dedicated GL codes for Murabaha, Mudarabah, Musharakah, Ijara, Salam, and Istisna products",
          icon: Bank
        },
        {
          title: "Multi-Currency Support",
          description: "Primary FCFA accounting with multi-currency foreign transaction and revaluation capabilities",
          icon: CurrencyCircleDollar
        },
        {
          title: "Account Hierarchies",
          description: "Five-level account hierarchy from main category to sub-subsidiary ledgers with rollup logic",
          icon: ChartLineUp
        },
        {
          title: "Profit & Loss Pools",
          description: "Separate GL pools for restricted and unrestricted Mudarabah investment accounts",
          icon: Coins
        },
        {
          title: "Custom Account Creation",
          description: "Flexible account creation with mandatory approval workflow and audit trail",
          icon: CheckCircle
        }
      ]
    },
    {
      id: "journal-entries",
      title: "Journal Entries & Posting",
      subtitle: "Automated and manual journal posting with approval controls",
      icon: BookOpen,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/meeting.jpg",
      features: [
        {
          title: "Automated GL Posting",
          description: "Real-time GL updates from financing disbursement, deposits, withdrawals, and profit distribution",
          icon: CheckCircle
        },
        {
          title: "Manual Journal Entry",
          description: "User-defined journal entries with multi-line support, narration, and supporting document attachment",
          icon: Notebook
        },
        {
          title: "Maker-Checker Approval",
          description: "Mandatory dual authorization for manual entries above threshold with rejection workflow",
          icon: Scales
        },
        {
          title: "Recurring Journals",
          description: "Scheduled monthly entries for rent, depreciation, and accruals with automatic posting",
          icon: Calendar
        },
        {
          title: "Reversal Journals",
          description: "One-click reversal of posted entries with original reference linkage and audit documentation",
          icon: Archive
        },
        {
          title: "Batch Posting",
          description: "Bulk upload of multiple journal entries via CSV with validation and error reporting",
          icon: ClipboardText
        }
      ]
    },
    {
      id: "financial-statements",
      title: "Financial Statements & Reports",
      subtitle: "AAOIFI-compliant Islamic banking financial statements",
      icon: PresentationChart,
      color: "bg-tikari-green-dark text-white",
      image: "/bnw-muslim.jpg",
      features: [
        {
          title: "Statement of Financial Position",
          description: "AAOIFI FAS-compliant balance sheet with Islamic financing assets and investment account liabilities",
          icon: FileText
        },
        {
          title: "Income Statement",
          description: "Shariah-compliant profit & loss with income from financing, investment profit, and fee income breakdown",
          icon: ChartLineUp
        },
        {
          title: "Cash Flow Statement",
          description: "Operating, investing, and financing activities per AAOIFI FAS with Zakah disclosure",
          icon: CurrencyCircleDollar
        },
        {
          title: "Statement of Changes in Equity",
          description: "Capital movements including paid-in capital, retained earnings, and profit equalization reserves",
          icon: TrendUp
        },
        {
          title: "Notes to Financial Statements",
          description: "Comprehensive footnotes covering accounting policies, Shariah compliance, and risk disclosures",
          icon: ClipboardText
        },
        {
          title: "Comparative Statements",
          description: "Side-by-side current and prior period statements with variance analysis",
          icon: ChartBar
        }
      ]
    },
    {
      id: "ifrs-aaoifi",
      title: "IFRS & AAOIFI Compliance",
      subtitle: "Dual reporting framework for international and Islamic standards",
      icon: CheckCircle,
      color: "bg-white",
      image: "/handshake.jpg",
      features: [
        {
          title: "IFRS 9 Financial Instruments",
          description: "Classification and measurement of Islamic financing assets with expected credit loss provisioning",
          icon: Bank
        },
        {
          title: "AAOIFI FAS Mapping",
          description: "Automated mapping between IFRS and AAOIFI FAS with reconciliation reports",
          icon: Scales
        },
        {
          title: "Fair Value Measurement",
          description: "Sukuk and equity investment fair valuation per IFRS 13 with Level 1/2/3 hierarchy disclosure",
          icon: TrendUp
        },
        {
          title: "Revenue Recognition",
          description: "IFRS 15 compliant revenue from contracts with Shariah-compliant service fee recognition",
          icon: Receipt
        },
        {
          title: "Lease Accounting (IFRS 16)",
          description: "Right-of-use asset recognition for operating leases with Ijara accounting alignment",
          icon: FileText
        },
        {
          title: "Disclosure Checklists",
          description: "Built-in checklists ensuring all IFRS and AAOIFI required disclosures are complete",
          icon: CheckCircle
        }
      ]
    },
    {
      id: "profit-distribution",
      title: "Profit Distribution & Allocation",
      subtitle: "Automated profit-sharing calculation for investment accounts",
      icon: Coins,
      color: "bg-tikari-sage-light/40",
      image: "/money.jpg",
      features: [
        {
          title: "Profit Pool Calculation",
          description: "Daily profit accumulation per investment pool with weightage by average balance",
          icon: Calculator
        },
        {
          title: "Mudarib Share Allocation",
          description: "Automated calculation of bank's Mudarib share based on pre-agreed profit-sharing ratios",
          icon: Scales
        },
        {
          title: "Investor Profit Distribution",
          description: "Pro-rata profit distribution to investment account holders based on daily average balance",
          icon: Coins
        },
        {
          title: "Profit Equalization Reserve",
          description: "PER allocation to smooth profit volatility and protect investor returns over time",
          icon: Bank
        },
        {
          title: "Investment Risk Reserve",
          description: "IRR set-aside from Mudarib share to cover potential investment losses",
          icon: CheckCircle
        },
        {
          title: "Distribution Reports",
          description: "Monthly investor statements showing daily balance, profit rate, and credited profit in FCFA",
          icon: ClipboardText
        }
      ]
    },
    {
      id: "regulatory-reporting",
      title: "Regulatory Reporting & Analytics",
      subtitle: "COBAC prudential returns and management analytics",
      icon: ChartBar,
      color: "bg-tikari-gold/8",
      image: "/muslim-woman.jpg",
      features: [
        {
          title: "COBAC Prudential Returns",
          description: "Automated generation of monthly, quarterly, and annual COBAC regulatory filings",
          icon: FileText
        },
        {
          title: "Trial Balance Export",
          description: "Period-end trial balance with opening, movement, and closing balances in FCFA",
          icon: ListNumbers
        },
        {
          title: "General Ledger Inquiry",
          description: "Drill-down from GL summary to transaction detail with filter by date, account, and branch",
          icon: BookOpen
        },
        {
          title: "Budget vs Actual Analysis",
          description: "Variance reporting comparing actual results against approved annual budget",
          icon: ChartBar
        },
        {
          title: "Branch P&L Statements",
          description: "Profitability analysis by branch with cost allocation and contribution margin",
          icon: Bank
        },
        {
          title: "Management Dashboards",
          description: "Real-time KPIs including ROA, ROE, cost-to-income ratio, and financing-to-deposit ratio",
          icon: PresentationChart
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-tikari-green-dark text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-tikari-green/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
              GL & Financial Reporting
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl">
              Complete general ledger and financial reporting suite with COBAC-compliant chart of accounts, AAOIFI Islamic banking standards, automated profit distribution, and full CEMAC regulatory reporting in FCFA.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="relative">
        {sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          const Icon = section.icon;
          
          // Different background colors for each section
          const getBgClass = () => {
            switch(idx) {
              case 0: return 'bg-white';
              case 1: return 'bg-tikari-cream/30';
              case 2: return 'bg-tikari-green-dark text-white'; // Green section
              case 3: return 'bg-white';
              case 4: return 'bg-tikari-sage-light/40';
              case 5: return 'bg-tikari-gold/8';
              default: return 'bg-white';
            }
          };
          
          return (
            <section 
              key={section.id} 
              id={section.id}
              className={`relative py-16 lg:py-24 px-6 ${getBgClass()}`}
            >
              <div className="max-w-7xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Content Column */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    {/* Icon & Title */}
                    <div className="mb-8 space-y-5">
                      <div className={`w-16 h-16 ${section.color} text-white flex items-center justify-center shadow-lg border border-white/20`}>
                        <Icon className="h-8 w-8" weight="bold" />
                      </div>
                      
                      <div>
                        <h2 className={`text-3xl lg:text-[2.75rem] font-bold mb-3 leading-[1.15] tracking-tight ${idx === 2 ? 'text-white' : 'text-tikari-green-dark'}`}>
                          {section.title}
                        </h2>
                        <p className={`text-[16px] lg:text-[17px] leading-relaxed ${idx === 2 ? 'text-white/85' : 'text-tikari-sage'}`}>
                          {section.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      {section.features.map((feature, featureIdx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div 
                            key={featureIdx}
                            className={`${idx === 2 ? 'bg-white/[0.08] border-white/[0.12] hover:bg-white/[0.12] hover:border-white/[0.18]' : 'bg-white border-tikari-green/10 hover:border-tikari-green/20'} border p-6 hover:shadow-lg transition-all duration-300 group`}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`w-9 h-9 ${idx === 2 ? 'bg-tikari-gold/20 border-tikari-gold/30' : 'bg-tikari-gold/10 border-tikari-gold/20'} border flex items-center justify-center flex-shrink-0 group-hover:bg-tikari-gold/20 group-hover:border-tikari-gold/30 transition-all`}>
                                <FeatureIcon className="h-5 w-5 text-tikari-gold" weight="bold" />
                              </div>
                              <h3 className={`text-[15px] lg:text-[16px] font-bold leading-snug ${idx === 2 ? 'text-white' : 'text-tikari-green-dark'}`}>
                                {feature.title}
                              </h3>
                            </div>
                            <p className={`text-[13px] lg:text-[14px] leading-relaxed pl-12 ${idx === 2 ? 'text-white/75' : 'text-tikari-sage'}`}>
                              {feature.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`relative ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="relative h-[450px] lg:h-[650px] overflow-hidden shadow-2xl border border-tikari-green/10">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                      />
                      {/* Gradient Overlay - Different for each section */}
                      <div className={`absolute inset-0 ${
                        idx === 0 ? 'bg-gradient-to-tr from-tikari-green-dark/50 via-tikari-green/30 to-transparent' :
                        idx === 1 ? 'bg-gradient-to-tl from-tikari-gold/40 via-transparent to-transparent' :
                        idx === 2 ? 'bg-gradient-to-br from-tikari-sage/50 via-tikari-green/20 to-transparent' :
                        idx === 3 ? 'bg-gradient-to-bl from-tikari-cream/60 via-transparent to-tikari-gold/20' :
                        idx === 4 ? 'bg-gradient-to-tr from-tikari-green/50 via-tikari-green-dark/30 to-transparent' :
                        'bg-gradient-to-tl from-tikari-gold/50 via-tikari-gold/30 to-transparent'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tikari-gold via-tikari-gold/90 to-tikari-gold/80 text-tikari-green-dark py-20 lg:py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tikari-green/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
            See Financial Reporting in Action
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI handles COBAC chart of accounts, AAOIFI financial statements, profit distribution, and regulatory reporting for Cameroon's Islamic banking sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="/platform"
              className="group bg-white/90 text-tikari-green-dark hover:bg-white border-2 border-tikari-green-dark/20 rounded-none"
            >
              Explore Other Modules
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
