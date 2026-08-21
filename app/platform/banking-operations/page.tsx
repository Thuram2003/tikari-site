"use client";

import { 
  ArrowRight, 
  UserCircle,
  Bank,
  Users,
  CashRegister,
  ArrowsLeftRight,
  MapPin,
  CheckCircle,
  IdentificationCard,
  Fingerprint,
  ChartLineUp,
  Handshake,
  Coins,
  ShieldCheck
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function BankingOperationsPage() {
  const sections = [
    {
      id: "kyc",
      title: "Customer Onboarding & KYC",
      subtitle: "Three-tier identity verification with Cameroon national standards",
      icon: UserCircle,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/muslim-woman.jpg",
      features: [
        {
          title: "Three-tier KYC",
          description: "Tier 1: basic identification; Tier 2: CNI-verified; Tier 3: full passport + proof of address",
          icon: IdentificationCard
        },
        {
          title: "CNI Verification",
          description: "Real-time verification against national identity database for Cameroon citizens",
          icon: ShieldCheck
        },
        {
          title: "Passport Verification",
          description: "International passport verification for foreign nationals and diaspora customers",
          icon: IdentificationCard
        },
        {
          title: "Biometric Capture",
          description: "Fingerprint and facial recognition support for enhanced security and customer deduplication",
          icon: Fingerprint
        },
        {
          title: "KYC Upgrade Workflow",
          description: "Seamless tier upgrade process with maker-checker approval for compliance",
          icon: CheckCircle
        },
        {
          title: "Customer Deduplication",
          description: "Automated duplicate detection on onboarding using CNI, phone, and biometric data",
          icon: Users
        }
      ]
    },
    {
      id: "accounts",
      title: "Account Management",
      subtitle: "Shariah-compliant savings and investment accounts",
      icon: Bank,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/personOffice.jpg",
      features: [
        {
          title: "Wadiah Yad Dhamanah",
          description: "Safe custody demand deposit accounts with full capital guarantee",
          icon: Bank
        },
        {
          title: "Mudarabah Investment Accounts",
          description: "Profit-sharing investment accounts with transparent pool distribution",
          icon: ChartLineUp
        },
        {
          title: "Youth & Minor Savings",
          description: "Dedicated accounts for young savers with parental mandate management",
          icon: Users
        },
        {
          title: "Joint Accounts",
          description: "Multi-signatory accounts with flexible operation rules and mandate controls",
          icon: Handshake
        },
        {
          title: "Dormancy Detection",
          description: "Automated flagging and reactivation workflow for inactive accounts",
          icon: CheckCircle
        },
        {
          title: "Mandate Management",
          description: "Digital signatory management with specimen signature and approval matrix",
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "njangi",
      title: "Njangi & Group Banking",
      subtitle: "Digitized Tontine operations for rotating savings groups",
      icon: Users,
      color: "bg-gradient-to-br from-tikari-sage to-tikari-green/40",
      image: "/women-market.jpg",
      features: [
        {
          title: "Group Constitution",
          description: "Register groups with member details, rotation schedule, and contribution rules",
          icon: Users
        },
        {
          title: "Rotating Savings Cycles",
          description: "Automated cycle management with rotation tracking and disbursement scheduling",
          icon: ArrowsLeftRight
        },
        {
          title: "Automatic Disbursement",
          description: "Auto-credit to rotation recipient on cycle completion with full audit trail",
          icon: Coins
        },
        {
          title: "Variable & Fixed Contributions",
          description: "Support for both fixed monthly contributions and variable member deposits",
          icon: ChartLineUp
        },
        {
          title: "Group Loan Facilities",
          description: "Musharakah-structured group financing with collective liability",
          icon: Handshake
        },
        {
          title: "Field Officer Tracking",
          description: "Mobile collection tracking with GPS tagging and real-time reconciliation",
          icon: MapPin
        }
      ]
    },
    {
      id: "teller",
      title: "Teller Operations",
      subtitle: "Branch cash management and over-the-counter transactions",
      icon: CashRegister,
      color: "bg-gradient-to-br from-tikari-cream to-tikari-cream-light",
      image: "/handshake.jpg",
      features: [
        {
          title: "Cash Deposit & Withdrawal",
          description: "Real-time posting with denomination breakdown and receipt printing",
          icon: Coins
        },
        {
          title: "Session Management",
          description: "Teller session open/close with beginning and ending cash counts",
          icon: CashRegister
        },
        {
          title: "Vault Reconciliation",
          description: "End-of-day cash count with variance reporting and supervisor approval",
          icon: CheckCircle
        },
        {
          title: "OTC Transfer Initiation",
          description: "Over-the-counter SYSTAC/SYGMA transfer initiation with real-time confirmation",
          icon: ArrowsLeftRight
        },
        {
          title: "Till Limit Enforcement",
          description: "Automated till limit controls with excess cash vault deposit workflow",
          icon: ShieldCheck
        },
        {
          title: "Maker-Checker Controls",
          description: "Dual authorization for transactions above threshold with supervisor override",
          icon: CheckCircle
        }
      ]
    },
    {
      id: "interbank",
      title: "SYSTAC/SYGMA & Interbank",
      subtitle: "Real-time interbank transfers via BEAC-approved channels",
      icon: ArrowsLeftRight,
      color: "bg-gradient-to-br from-tikari-green to-tikari-green-dark",
      image: "/meeting.jpg",
      features: [
        {
          title: "SYSTAC Real-Time Transfers",
          description: "Direct integration with SYSTAC for instant interbank transfers in FCFA",
          icon: ArrowsLeftRight
        },
        {
          title: "SYGMA Bulk Payments",
          description: "Batch payment processing via SYGMA for salary and supplier payments",
          icon: Coins
        },
        {
          title: "Inward Credit Posting",
          description: "Automated posting of incoming transfers with instant customer notification",
          icon: CheckCircle
        },
        {
          title: "Return Handling",
          description: "Automated return processing with customer notification and reversal workflow",
          icon: ArrowsLeftRight
        },
        {
          title: "BEAC Interbank Channels",
          description: "Support for all BEAC-approved interbank settlement channels",
          icon: Bank
        },
        {
          title: "Transaction Limit Controls",
          description: "Per-tier customer limits aligned with COBAC prudential guidelines",
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "agent",
      title: "Agent & Field Banking",
      subtitle: "Branchless banking through verified agent networks",
      icon: MapPin,
      color: "bg-gradient-to-br from-tikari-gold to-tikari-gold/80",
      image: "/woman-market.jpg",
      features: [
        {
          title: "Agent Onboarding & KYC",
          description: "Comprehensive agent verification with CNI, trade license, and location checks",
          icon: UserCircle
        },
        {
          title: "Agent Web Portal",
          description: "Browser-based portal for cash-in, cash-out, and balance inquiry operations",
          icon: ShieldCheck
        },
        {
          title: "Offline Transaction Queue",
          description: "Queue transactions locally during network outages with auto-sync on reconnection",
          icon: CheckCircle
        },
        {
          title: "Geo-Tagged Collections",
          description: "GPS-stamped field collections with location-based audit trail",
          icon: MapPin
        },
        {
          title: "Cash Reconciliation",
          description: "Real-time agent float tracking with settlement and rebalancing workflows",
          icon: Coins
        },
        {
          title: "Commission Ledger",
          description: "Automated commission calculation and posting to agent accounts in FCFA",
          icon: ChartLineUp
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
              Banking Operations
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl">
              End-to-end banking operations from customer onboarding to interbank transfers. Built for Cameroon's regulatory environment with CNI/Passport verification, Njangi group banking, and SYSTAC/SYGMA integration.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="relative">
        {sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          const Icon = section.icon;
          
          // Different background colors for each section like main page
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
            See Banking Operations in Action
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI handles customer onboarding, Njangi operations, and interbank transfers for Cameroon's Islamic banking sector.
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
