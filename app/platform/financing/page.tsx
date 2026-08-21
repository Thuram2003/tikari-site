"use client";

import { 
  ArrowRight, 
  Storefront,
  Handshake,
  ChartLineUp,
  Buildings,
  Package,
  Hammer,
  Coins,
  ShieldCheck,
  FileText,
  TrendUp,
  Bank,
  CurrencyCircleDollar,
  Receipt,
  CheckCircle,
  Scales,
  ClipboardText
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function FinancingPage() {
  const sections = [
    {
      id: "murabaha",
      title: "Murabaha (Cost-Plus Financing)",
      subtitle: "Asset purchase financing with transparent markup disclosure",
      icon: Storefront,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/personOffice.jpg",
      features: [
        {
          title: "Asset Procurement Workflow",
          description: "Bank purchases asset from supplier on behalf of customer with full procurement documentation",
          icon: Package
        },
        {
          title: "Transparent Markup Calculation",
          description: "Clear disclosure of cost price, markup percentage, and total selling price in FCFA",
          icon: Receipt
        },
        {
          title: "Deferred Payment Structure",
          description: "Flexible installment schedules with equal or reducing payments over contract term",
          icon: ChartLineUp
        },
        {
          title: "GL Split Posting",
          description: "Separate GL accounts for asset cost, markup income, and receivable with AAOIFI-compliant structure",
          icon: Bank
        },
        {
          title: "Supplier Integration",
          description: "Direct supplier payment with three-party contract documentation and delivery verification",
          icon: Handshake
        },
        {
          title: "Shariah Validation",
          description: "Automated compliance checks ensuring asset ownership transfer and markup reasonability",
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "mudarabah",
      title: "Mudarabah (Profit-Sharing Partnership)",
      subtitle: "Investment partnership with capital provider and entrepreneur",
      icon: Handshake,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/muslim-meeting.jpg",
      features: [
        {
          title: "Partnership Constitution",
          description: "Define capital provider (Rabb-ul-Maal) and entrepreneur (Mudarib) with clear profit-sharing ratio",
          icon: FileText
        },
        {
          title: "Capital Deployment Tracking",
          description: "Monitor fund utilization with milestone-based disbursement and activity reporting",
          icon: TrendUp
        },
        {
          title: "Profit Distribution Logic",
          description: "Automated profit calculation and distribution based on pre-agreed ratio at contract maturity",
          icon: ChartLineUp
        },
        {
          title: "Loss Allocation Rules",
          description: "Capital loss borne by bank (Rabb-ul-Maal) unless due to Mudarib negligence or misconduct",
          icon: Scales
        },
        {
          title: "Periodic Reporting",
          description: "Quarterly financial statements from Mudarib with audited final accounts at contract end",
          icon: ClipboardText
        },
        {
          title: "Investment Pool Ledgers",
          description: "Separate GL pools for restricted and unrestricted Mudarabah with investor profit allocation",
          icon: Bank
        }
      ]
    },
    {
      id: "musharakah",
      title: "Musharakah (Joint Venture Financing)",
      subtitle: "Equity partnership with shared capital and management",
      icon: ChartLineUp,
      color: "bg-tikari-green-dark text-white",
      image: "/meeting.jpg",
      features: [
        {
          title: "Joint Capital Contribution",
          description: "Multi-party capital injection with percentage ownership and voting rights per partner",
          icon: CurrencyCircleDollar
        },
        {
          title: "Diminishing Musharakah",
          description: "Progressive ownership transfer as customer buys out bank's equity stake over time",
          icon: TrendUp
        },
        {
          title: "Profit & Loss Sharing",
          description: "Profit distribution by agreement; loss allocation strictly in proportion to capital contribution",
          icon: Scales
        },
        {
          title: "Management Rights",
          description: "Partner participation in business decisions with veto rights on major financial commitments",
          icon: Handshake
        },
        {
          title: "Exit Strategy Workflow",
          description: "Pre-defined exit mechanisms including buyout, dissolution, or third-party sale with valuation rules",
          icon: CheckCircle
        },
        {
          title: "Equity Ledger Tracking",
          description: "Real-time tracking of each partner's equity balance, profit share, and capital calls",
          icon: Bank
        }
      ]
    },
    {
      id: "ijara",
      title: "Ijara (Shariah-Compliant Leasing)",
      subtitle: "Asset leasing with transfer or return options at term end",
      icon: Buildings,
      color: "bg-white",
      image: "/handshake.jpg",
      features: [
        {
          title: "Operating & Finance Lease",
          description: "Support for Ijara (operating lease) and Ijara Muntahia Bittamleek (lease-to-own) structures",
          icon: Buildings
        },
        {
          title: "Asset Registration",
          description: "Bank ownership registration with depreciation schedule and residual value tracking",
          icon: FileText
        },
        {
          title: "Rental Calculation Engine",
          description: "Fixed or variable rental with market-linked indexation and scheduled rental reviews",
          icon: Receipt
        },
        {
          title: "Maintenance Obligations",
          description: "Clear allocation of maintenance costs between lessor (bank) and lessee (customer) in contract",
          icon: CheckCircle
        },
        {
          title: "Early Termination Handling",
          description: "Penalty-free termination with fair asset valuation and refund of advance rentals",
          icon: Scales
        },
        {
          title: "Purchase Option at Maturity",
          description: "End-of-term purchase at market value or pre-agreed nominal price for Muntahia Bittamleek",
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "salam-istisna",
      title: "Salam & Istisna (Forward Contracts)",
      subtitle: "Agricultural advance purchase and manufacturing project finance",
      icon: Package,
      color: "bg-tikari-sage-light/40",
      image: "/women-market.jpg",
      features: [
        {
          title: "Salam (Agricultural Finance)",
          description: "Advance payment for future crop delivery with quality and quantity specifications",
          icon: Package
        },
        {
          title: "Istisna (Manufacturing Finance)",
          description: "Progress-based financing for asset construction with milestone delivery and inspection",
          icon: Hammer
        },
        {
          title: "Commodity Specification",
          description: "Detailed description of deliverable goods including grade, quantity, delivery date, and location",
          icon: FileText
        },
        {
          title: "Parallel Salam/Istisna",
          description: "Back-to-back contracts with onward sale to third party for bank risk mitigation",
          icon: Handshake
        },
        {
          title: "Delivery & Inspection Workflow",
          description: "Multi-stage delivery verification with quality checks and acceptance documentation",
          icon: CheckCircle
        },
        {
          title: "Inventory & Receivables GL",
          description: "Pre-delivery inventory tracking and post-delivery receivable recognition per AAOIFI FAS",
          icon: Bank
        }
      ]
    },
    {
      id: "treasury",
      title: "Treasury & Liquidity Management",
      subtitle: "Shariah-compliant liquidity and interbank operations",
      icon: Bank,
      color: "bg-tikari-gold/8",
      image: "/money.jpg",
      features: [
        {
          title: "Sukuk Portfolio Management",
          description: "Track sovereign and corporate Sukuk holdings with coupon accrual and maturity management",
          icon: Receipt
        },
        {
          title: "Commodity Murabaha (Tawarruq)",
          description: "Short-term liquidity through commodity trading with Shariah-compliant metal brokers",
          icon: Coins
        },
        {
          title: "Interbank Wakala Placements",
          description: "Place surplus funds with Islamic banks as agent with agreed profit-sharing ratio",
          icon: Handshake
        },
        {
          title: "COBAC Reserve Compliance",
          description: "Automated reserve calculation and placement with BEAC per COBAC liquidity ratios",
          icon: ShieldCheck
        },
        {
          title: "Profit Rate Risk Hedging",
          description: "Shariah-compliant hedging instruments for benchmark rate exposure management",
          icon: ChartLineUp
        },
        {
          title: "Liquidity Coverage Ratio",
          description: "Real-time LCR monitoring with HQLA classification and inflow/outflow projections",
          icon: TrendUp
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
              Islamic Financing & Treasury
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl">
              Native support for all six Shariah-compliant financing structures with dedicated GL logic, profit-sharing mechanics, and Shariah validation workflows. Built for COBAC returns and AAOIFI standards in FCFA.
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
            See Shariah Financing in Action
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI handles Murabaha, Mudarabah, Musharakah, Ijara, Salam, and Istisna financing with full AAOIFI compliance.
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
