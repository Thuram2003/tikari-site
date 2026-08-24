"use client";

import { 
  ArrowRight,
  CheckCircle,
  BuildingOffice,
  MapPin,
  Users,
  Coins,
  ChartLineUp,
  ShieldCheck,
  FileText,
  Calendar,
  ClipboardText,
  Bank,
  Receipt,
  CurrencyCircleDollar,
  Handshake,
  Notebook,
  Database
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function MicrofinanceSolutionsPage() {
  const licenceCategories = [
    {
      title: "Unit MFB",
      capital: "200M FCFA+ min. capital",
      description: "A single-branch non-interest MFB serving a local government or community. TIKARI provides the full platform — no feature restrictions for smaller institutions.",
      icon: MapPin,
      features: [
        "Single-branch teller operations",
        "Njangi group banking",
        "Murabaha and Mudarabah products",
        "COBAC Unit MFB returns",
        "Under-10-minute EOD close"
      ],
      color: "bg-tikari-green-dark"
    },
    {
      title: "State MFB",
      capital: "1B FCFA+ min. capital",
      description: "Multi-branch operations across a region. TIKARI handles inter-branch reconciliation, agent banking networks, and the higher reporting obligations of regional-tier MFBs.",
      icon: BuildingOffice,
      features: [
        "Multi-branch operations",
        "Inter-branch GL consolidation",
        "Agent banking with geo-tracking",
        "Regional MFB COBAC returns",
        "Expanded product range"
      ],
      color: "bg-tikari-gold"
    },
    {
      title: "National MFB",
      capital: "5B FCFA+ min. capital",
      description: "Nation-wide operations with higher capital, broader product range, and more complex COBAC reporting. TIKARI scales to national tier without requiring additional modules or licences.",
      icon: Bank,
      features: [
        "Nationwide branch network",
        "Full Islamic product suite",
        "All COBAC returns",
        "Sukuk and Takaful structures",
        "Group/holding company reporting"
      ],
      color: "bg-tikari-green"
    }
  ];

  const cobacReturns = [
    { code: "MFB-001", name: "Statement of Financial Position" },
    { code: "MFB-002", name: "Statement of Income" },
    { code: "MFB-003", name: "Capital Adequacy Ratio" },
    { code: "MFB-004", name: "Liquidity Ratio" },
    { code: "MFB-005", name: "Portfolio at Risk" },
    { code: "MFB-006", name: "Profit-Sharing Ratios" },
    { code: "MFB-007", name: "Mudarabah Pool Report" },
    { code: "MFB-008", name: "Large Exposures" },
    { code: "MFB-009", name: "Foreign Currency Exposure" },
    { code: "AML/CFT", name: "GABAC AML/CFT Reporting" },
    { code: "BEAC-01", name: "BEAC Interbank Reporting" },
    { code: "TAX-01", name: "FCFA Tax Compliance Filing" }
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
              Solutions for Microfinance Banks
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-4">
              Built for COBAC-licensed non-interest MFBs.
            </p>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              Whether you hold a Unit, Regional, or National MFB licence, TIKARI gives you a core that satisfies the COBAC examiner, your Shariah Supervisory Board, and your operations team from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/demo"
                className="group bg-tikari-gold text-tikari-green-dark hover:bg-tikari-gold/90 rounded-none"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                href="/platform"
                className="group bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 rounded-none"
              >
                See the Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Licence Categories Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              The right fit at every licence tier
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {licenceCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-tikari-green/20 hover:border-tikari-green hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className={`${category.color} text-white p-8`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white/20 border border-white/30 flex items-center justify-center">
                        <Icon className="h-7 w-7" weight="bold" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-sm text-white/75 mt-1">{category.capital}</p>
                      </div>
                    </div>
                    <p className="text-[15px] text-white/85 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="p-8 space-y-3">
                    {category.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-tikari-green flex-shrink-0 mt-0.5" weight="bold" />
                        <span className="text-[14px] text-tikari-sage leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COBAC Compliance Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight text-tikari-green-dark">
                Your next COBAC examination should be uneventful
              </h2>
              
              <div className="space-y-4 text-[15px] lg:text-[16px] text-tikari-sage leading-relaxed">
                <p>
                  TIKARI generates all 12 COBAC prudential returns directly from live GL data. Your compliance team is not manually exporting spreadsheets and reformatting at month-end.
                </p>
                <p>
                  The platform also maintains a complete, immutable audit trail and Fatwa repository. When an examiner asks to see the Shariah approval for your Musharakah product — it is searchable and printable in under a minute.
                </p>
              </div>

              <Button
                variant="secondary"
                size="lg"
                href="/platform/compliance"
                className="group mt-8 bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
              >
                See the compliance features
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
            </div>

            {/* Returns Grid */}
            <div className="grid grid-cols-2 gap-4">
              {cobacReturns.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-tikari-green/10 p-5 hover:border-tikari-green/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-tikari-green/10 border border-tikari-green/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-4 w-4 text-tikari-green-dark" weight="bold" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-tikari-green-dark mb-1">{item.code}</div>
                      <div className="text-[13px] text-tikari-sage leading-snug">{item.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
              Everything you need for Islamic microfinance
            </h2>
            <p className="text-[16px] lg:text-[18px] text-white/75 leading-relaxed max-w-3xl mx-auto">
              From CNI verification to Njangi group ledgers, TIKARI handles the unique requirements of Cameroon's Islamic banking sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Njangi Group Banking",
                description: "Digital rotative ledgers with automated profit distribution and COBAC group exposure tracking."
              },
              {
                icon: Coins,
                title: "FCFA Native Accounting",
                description: "Primary currency in FCFA with BEAC exchange rate sync for foreign currency transactions."
              },
              {
                icon: Receipt,
                title: "Murabaha Auto-Calculation",
                description: "Configure markup rates, installment schedules, and early settlement rebates per Shariah guidelines."
              },
              {
                icon: Database,
                title: "SYSTAC/SYGMA Integration",
                description: "Real-time interbank transfers via Cameroon's SYSTAC infrastructure with GL auto-posting."
              },
              {
                icon: CurrencyCircleDollar,
                title: "MTN & Orange Money",
                description: "Direct integration with mobile money operators for agent cash-in/cash-out operations."
              },
              {
                icon: Notebook,
                title: "10-Minute EOD Close",
                description: "Automated end-of-day processes including profit accrual, dormancy marking, and trial balance generation."
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/[0.08] border border-white/[0.12] p-6 hover:bg-white/[0.12] hover:border-white/[0.18] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-tikari-gold/20 border border-tikari-gold/30 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-tikari-gold" weight="bold" />
                  </div>
                  <h3 className="text-[17px] font-bold mb-2">{feature.title}</h3>
                  <p className="text-[14px] text-white/75 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multi-Branch Support Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-[450px] lg:h-[600px] overflow-hidden shadow-2xl border border-tikari-green/10">
              <Image
                src="/meeting.jpg"
                alt="Multi-branch Islamic banking"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark/50 via-tikari-green/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
                Scale from one branch to nationwide
              </h2>
              
              <p className="text-[16px] text-tikari-sage leading-relaxed mb-8">
                TIKARI supports branch hierarchies from head office to regional hubs to individual branches. Inter-branch GL postings are automated, and you can set lending limits, cash holding thresholds, and approval workflows per branch.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Branch registration with COBAC codes",
                  "Inter-branch fund transfers",
                  "Centralized treasury allocation",
                  "Branch performance dashboards",
                  "Agent network geo-tracking",
                  "Commission ledger per branch"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-green flex-shrink-0 mt-0.5" weight="bold" />
                    <span className="text-[14px] text-tikari-sage leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
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
            Ready to launch your Islamic microfinance bank?
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI handles COBAC compliance, Shariah governance, and multi-branch operations for Cameroon's Islamic banking sector.
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
              Explore the Platform
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
