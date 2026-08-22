"use client";

import { 
  ArrowRight, 
  MapPin,
  UserCircle,
  DeviceMobile,
  Coins,
  Receipt,
  ChartLineUp,
  Bank,
  CheckCircle,
  ShieldCheck,
  Users,
  WifiHigh,
  Wallet,
  CurrencyCircleDollar,
  Storefront,
  FileText,
  ClipboardText,
  Fingerprint,
  Calendar
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function AgentBankingPage() {
  const sections = [
    {
      id: "agent-network",
      title: "Agent Network Management",
      subtitle: "Recruit, onboard, and manage branchless banking agents across Cameroon",
      icon: Storefront,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/woman-market.jpg",
      features: [
        {
          title: "Agent Recruitment & KYC",
          description: "Comprehensive agent onboarding with CNI verification, trade license checks, and business location validation",
          icon: UserCircle
        },
        {
          title: "Agent Categorization",
          description: "Multi-tier agent structure from kiosk agents to super-agents with cascading commission and float management",
          icon: Users
        },
        {
          title: "Geo-Location Tagging",
          description: "GPS-based agent location tracking with coverage area mapping for branch expansion planning",
          icon: MapPin
        },
        {
          title: "Device Registration",
          description: "Register agent POS terminals and mobile devices with IMEI tracking and device lock/unlock controls",
          icon: DeviceMobile
        },
        {
          title: "Float Authorization",
          description: "Set agent cash and e-money float limits with dynamic limit adjustment based on transaction volume",
          icon: CurrencyCircleDollar
        },
        {
          title: "Performance Monitoring",
          description: "Real-time dashboards tracking agent transaction volumes, success rates, and customer complaints",
          icon: ChartLineUp
        }
      ]
    },
    {
      id: "mobile-money",
      title: "Mobile Money Integration",
      subtitle: "MTN Mobile Money and Orange Money interoperability for deposits and withdrawals",
      icon: DeviceMobile,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/people.jpg",
      features: [
        {
          title: "MTN Mobile Money API",
          description: "Direct integration with MTN MoMo for account-to-wallet transfers and wallet-to-account deposits",
          icon: DeviceMobile
        },
        {
          title: "Orange Money API",
          description: "Real-time Orange Money integration for cash-in and cash-out transactions in FCFA",
          icon: Wallet
        },
        {
          title: "Transaction Reconciliation",
          description: "Automated matching of mobile money transactions with agent float and customer account updates",
          icon: Receipt
        },
        {
          title: "BEAC E-Money Compliance",
          description: "Full compliance with BEAC electronic money regulations for mobile money partnerships",
          icon: ShieldCheck
        },
        {
          title: "Interoperability Support",
          description: "Cross-network transfers between MTN and Orange Money via BEAC interoperability switch",
          icon: WifiHigh
        },
        {
          title: "Wallet Linking",
          description: "Link customer bank accounts to mobile money wallets for seamless fund transfers",
          icon: Bank
        }
      ]
    },
    {
      id: "field-operations",
      title: "Field Operations & Collections",
      subtitle: "Mobile-first field banking with offline transaction capability",
      icon: MapPin,
      color: "bg-tikari-green-dark text-white",
      image: "/women-market.jpg",
      features: [
        {
          title: "Offline Transaction Mode",
          description: "Queue transactions locally during network outages with automatic sync when connectivity returns",
          icon: WifiHigh
        },
        {
          title: "GPS-Tagged Collections",
          description: "Every field transaction stamped with GPS coordinates and timestamp for audit trail",
          icon: MapPin
        },
        {
          title: "Customer Visit Tracking",
          description: "Field officer route planning with scheduled customer visits and visit completion tracking",
          icon: ClipboardText
        },
        {
          title: "Biometric Authentication",
          description: "Fingerprint capture for customer identification and transaction authorization in the field",
          icon: Fingerprint
        },
        {
          title: "Njangi Group Collections",
          description: "Mobile collection interface for Njangi group contributions with group member attendance tracking",
          icon: Users
        },
        {
          title: "Field Cash Management",
          description: "Track field officer cash holdings with beginning/ending cash counts and vault deposit workflows",
          icon: Coins
        }
      ]
    },
    {
      id: "cash-in-cash-out",
      title: "Cash-In / Cash-Out Operations",
      subtitle: "Agent-facilitated deposit and withdrawal transactions",
      icon: Coins,
      color: "bg-white",
      image: "/handshake.jpg",
      features: [
        {
          title: "Customer Deposit (Cash-In)",
          description: "Agents accept cash deposits and credit customer accounts in real-time with SMS confirmation",
          icon: Coins
        },
        {
          title: "Customer Withdrawal (Cash-Out)",
          description: "Agent-facilitated withdrawals with OTP verification and daily customer withdrawal limits",
          icon: Wallet
        },
        {
          title: "Agent Float Management",
          description: "Real-time tracking of agent cash position with low-balance alerts and float rebalancing",
          icon: Bank
        },
        {
          title: "Transaction Limits",
          description: "Per-transaction and daily limits for cash-in/cash-out based on agent tier and customer KYC level",
          icon: ShieldCheck
        },
        {
          title: "Receipt Generation",
          description: "Instant digital and SMS receipt for every transaction with transaction ID and agent details",
          icon: Receipt
        },
        {
          title: "Reversal Workflow",
          description: "Agent-initiated reversal requests with supervisor approval and customer notification",
          icon: FileText
        }
      ]
    },
    {
      id: "commission-management",
      title: "Commission & Incentive Management",
      subtitle: "Automated agent commission calculation and payout in FCFA",
      icon: ChartLineUp,
      color: "bg-tikari-sage-light/40",
      image: "/money.jpg",
      features: [
        {
          title: "Tiered Commission Structure",
          description: "Define commission rates by transaction type, value bands, and agent performance tiers",
          icon: ChartLineUp
        },
        {
          title: "Real-Time Accrual",
          description: "Commission earned accrued instantly on transaction completion with running balance visibility",
          icon: Coins
        },
        {
          title: "Monthly Payout Cycle",
          description: "Automated monthly commission payout to agent accounts with detailed commission statement",
          icon: Calendar
        },
        {
          title: "Performance Bonuses",
          description: "Volume-based incentives for agents exceeding monthly transaction or customer acquisition targets",
          icon: Receipt
        },
        {
          title: "Commission Deductions",
          description: "Automatic deduction for chargebacks, reversals, and penalty fees from commission balance",
          icon: FileText
        },
        {
          title: "Commission Reports",
          description: "Agent-level and network-wide commission analytics with trend analysis and forecasting",
          icon: ClipboardText
        }
      ]
    },
    {
      id: "regulatory-reporting",
      title: "Agent Banking Compliance & Reporting",
      subtitle: "COBAC agent banking regulations and BEAC reporting",
      icon: ShieldCheck,
      color: "bg-tikari-gold/8",
      image: "/compliance.jpg",
      features: [
        {
          title: "COBAC Agent Banking Norms",
          description: "Full compliance with COBAC regulations on agent banking and branchless banking operations",
          icon: ShieldCheck
        },
        {
          title: "Agent AML/CFT Screening",
          description: "Continuous monitoring of agent transactions for suspicious patterns and GABAC compliance",
          icon: CheckCircle
        },
        {
          title: "BEAC E-Money Returns",
          description: "Automated submission of electronic money transaction reports to BEAC per regulatory schedule",
          icon: Bank
        },
        {
          title: "Agent Activity Reports",
          description: "Daily, weekly, and monthly agent activity summaries for internal audit and COBAC inspection",
          icon: ClipboardText
        },
        {
          title: "Customer Complaint Tracking",
          description: "Centralized complaint logging with agent investigation workflow and resolution SLA tracking",
          icon: FileText
        },
        {
          title: "Geographic Expansion Analysis",
          description: "Coverage maps showing agent density and underserved areas for strategic network expansion",
          icon: MapPin
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
              Agent & Field Banking
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl">
              Comprehensive branchless banking platform with agent network management, MTN Mobile Money and Orange Money integration, field operations, and COBAC agent banking compliance for Cameroon's financial inclusion.
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
            See Agent Banking in Action
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI manages agent networks, MTN/Orange Money integration, field operations, and COBAC agent banking compliance for Cameroon's branchless banking needs.
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
