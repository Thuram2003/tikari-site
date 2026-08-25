"use client";

import { 
  ArrowRight,
  CheckCircle,
  UsersFour,
  Coins,
  CirclesFour,
  Bank,
  ArrowsClockwise,
  Receipt,
  ListChecks,
  ShieldCheck
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function CooperativesWindowsPage() {
  const supportTypes = [
    {
      title: "Rotating Njangi Groups",
      description: "Structured group savings cycles with member contribution tracking, rotation schedules, automatic disbursement to the designated recipient, and full audit trail. Supports both fixed-amount and variable-contribution groups.",
      icon: UsersFour,
      image: "/women-market.jpg",
      color: "bg-tikari-green-dark"
    },
    {
      title: "Mudarabah Savings Pools",
      description: "Aggregate member deposits into an investment pool. The platform calculates profit distribution at period-end based on actual investment returns, not a predetermined rate. PSR disclosure per member agreement.",
      icon: Coins,
      image: "/money.jpg",
      color: "bg-tikari-gold"
    },
    {
      title: "Qard Hasan (Benevolent Loans)",
      description: "Interest-free loans to members with no markup. Admin fees only, capped per Shariah approval. Repayment schedule tracking, member eligibility rules, and GL posting to the correct AAOIFI-aligned account.",
      icon: CirclesFour,
      image: "/handshake.jpg",
      color: "bg-tikari-green"
    },
    {
      title: "Islamic Window Ring-Fencing",
      description: "For conventional institutions operating an Islamic window: completely segregated GL, separate profit pool, dedicated product catalogue, and ring-fenced reporting. Mixed reports available showing consolidated and window-only views.",
      icon: Bank,
      image: "/meeting.jpg",
      color: "bg-tikari-sage"
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
              Cooperatives & Islamic Windows
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-4">
              Non-interest banking beyond the MFB licence.
            </p>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              Cooperative thrifts, Njangi groups, and Islamic window operations have unique structures that don't fit a conventional core. TIKARI is designed to handle them properly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/demo"
                className="group bg-tikari-gold text-tikari-green-dark hover:bg-tikari-gold/90 rounded-md"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                href="/platform"
                className="group bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 rounded-md"
              >
                See the Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Support Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              What We Support
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage max-w-3xl mx-auto">
              From simple Njangi to full Shariah window operations.
            </p>
          </div>

          <div className="space-y-24">
            {supportTypes.map((type, idx) => {
              const Icon = type.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={idx}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div className={`relative h-[450px] lg:h-[550px] overflow-hidden shadow-2xl border border-tikari-green/10 ${isEven ? '' : 'lg:order-2'}`}>
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className={`absolute inset-0 ${
                      idx === 0 ? 'bg-gradient-to-br from-tikari-green-dark/50 via-tikari-green/30 to-transparent' :
                      idx === 1 ? 'bg-gradient-to-tl from-tikari-gold/40 via-transparent to-transparent' :
                      idx === 2 ? 'bg-gradient-to-tr from-tikari-green/50 via-tikari-green-dark/30 to-transparent' :
                      'bg-gradient-to-bl from-tikari-sage/50 via-transparent to-tikari-gold/20'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 ${type.color} text-white flex items-center justify-center`}>
                        <Icon className="h-7 w-7" weight="bold" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-tikari-green-dark">
                        {type.title}
                      </h3>
                    </div>
                    
                    <p className="text-[16px] text-tikari-sage leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight text-tikari-green-dark">
              Built for Cameroon's cooperative sector
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage leading-relaxed max-w-3xl mx-auto">
              From traditional Njangi cycles to modern Islamic finance structures, TIKARI handles the full spectrum of non-interest cooperative banking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ArrowsClockwise,
                title: "Automated Rotation Cycles",
                description: "Track member turns, calculate contributions, and trigger automatic disbursements based on rotation schedule."
              },
              {
                icon: Coins,
                title: "Profit Pool Calculation",
                description: "Real-time profit accrual with weighted average distribution based on member deposit balances and duration."
              },
              {
                icon: Receipt,
                title: "Zero-Interest Accounting",
                description: "AAOIFI-compliant GL structures for Qard Hasan with admin fee tracking and proper expense allocation."
              },
              {
                icon: ShieldCheck,
                title: "Member Eligibility Rules",
                description: "Configure lending limits, contribution requirements, and waiting periods per cooperative bylaws."
              },
              {
                icon: ListChecks,
                title: "Dividend Distribution",
                description: "Automated end-of-period dividend calculation with member-specific profit sharing ratios."
              },
              {
                icon: Bank,
                title: "Dual Ledger System",
                description: "Complete separation between conventional and Islamic operations for financial institutions running both."
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-tikari-green/10 p-6 hover:border-tikari-green/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-tikari-green/10 border border-tikari-green/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-tikari-green-dark" weight="bold" />
                  </div>
                  <h3 className="text-[17px] font-bold mb-2 text-tikari-green-dark">{feature.title}</h3>
                  <p className="text-[14px] text-tikari-sage leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COBAC Compliance Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
                COBAC compliance for cooperative structures
              </h2>
              
              <p className="text-[16px] text-white/85 leading-relaxed mb-6">
                TIKARI generates all required COBAC returns for cooperative financial institutions, including specialized reports for Njangi group operations and profit-sharing investment pools.
              </p>

              <p className="text-[16px] text-white/85 leading-relaxed mb-8">
                For Islamic windows, the platform maintains complete audit trails showing the segregation between conventional and Islamic operations, satisfying both COBAC examiners and Shariah Supervisory Boards.
              </p>

              <div className="space-y-3">
                {[
                  "Member contribution and withdrawal records",
                  "Njangi rotation schedule and turn history",
                  "Profit pool performance and distribution",
                  "Qard Hasan loan portfolio tracking",
                  "Islamic window segregation reports",
                  "Shariah compliance audit trail"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="bold" />
                    <span className="text-[15px] text-white/85 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[600px] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/compliance.jpg"
                alt="COBAC compliance and reporting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark/50 via-tikari-green/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-tikari-gold via-tikari-gold/90 to-tikari-gold/80 text-tikari-green-dark py-20 lg:py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tikari-green/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
            Ready to digitize your cooperative operations?
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI handles Njangi groups, Mudarabah pools, Qard Hasan lending, and Islamic window operations for Cameroon's cooperative sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-md"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="/platform"
              className="group bg-white/90 text-tikari-green-dark hover:bg-white border-2 border-tikari-green-dark/20 rounded-md"
            >
              Explore the Platform
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
