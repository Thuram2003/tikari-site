"use client";

import { 
  ArrowRight, 
  Users, 
  Coins, 
  ShieldCheck, 
  ChartLineUp,
  UserGear,
  Notebook,
  CheckCircle,
  Globe,
  Clock
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function PlatformPage() {
  const modules = [
    {
      category: "Banking Operations",
      description: "Customer onboarding with CNI/Passport verification, tiered KYC (Tier 1-3), account management, Njangi group banking, teller operations, SYSTAC/SYGMA payment gateway, and agent banking.",
      icon: Users,
      features: [
        "CNI/Passport biometric verification",
        "Njangi & Tontine group cycles",
        "SYSTAC/SYGMA real-time transfers",
        "Agent & field officer portal",
        "Multi-branch teller operations"
      ],
      exploreLink: "/platform/banking-operations"
    },
    {
      category: "Islamic Financing & Treasury",
      description: "Native support for all six Shariah-compliant financing structures. Each product has its own GL logic, profit-sharing mechanics, and Shariah validation workflow. Not a loan with a renamed field.",
      icon: Coins,
      features: [
        "Murabaha (cost-plus sale)",
        "Mudarabah (profit-sharing)",
        "Musharakah (partnership)",
        "Ijara (leasing)",
        "Salam & Istisna (forward contracts)"
      ],
      exploreLink: "/platform/financing"
    },
    {
      category: "Compliance & Shariah Governance",
      description: "The ACE (Audit & Compliance Executives) and Shariah Supervisory Board are first-class users. Fatwa repository, product screening, AML/CFT transaction monitoring, and all COBAC prudential returns generated from the GL directly.",
      icon: ShieldCheck,
      features: [
        "Fatwa repository & product approval",
        "ACE dashboard & audit trail",
        "AML/CFT transaction screening (GABAC)",
        "12 COBAC returns (auto-generated)",
        "AAOIFI FAS compliance tagging"
      ],
      exploreLink: "/platform/compliance"
    },
    {
      category: "GL & Financial Reporting",
      description: "A true double-entry general ledger built on AAOIFI financial accounting standards. Chart of accounts pre-configured for non-interest banks. Trial balance, income statement, and balance sheet in real time.",
      icon: ChartLineUp,
      features: [
        "AAOIFI-configured chart of accounts",
        "Real-time trial balance",
        "Deferred income schedules (FAS 2, 3)",
        "Profit pool distribution (Mudarabah)",
        "Under-10-minute EOD close"
      ],
      exploreLink: "/platform/gl-reporting"
    },
    {
      category: "Agent & Field Banking",
      description: "Extend your reach without building branches in Douala, Yaoundé, or Bafoussam. Agent portal with offline-capable transaction posting, geo-tagging, and real-time reconciliation back to the core. Full audit trail for every agent action.",
      icon: UserGear,
      features: [
        "Agent onboarding & CNI KYC",
        "Offline transaction queueing",
        "Geo-tagged field collections",
        "Cash-in / cash-out reconciliation",
        "Agent commission ledger (FCFA)"
      ],
      exploreLink: "/platform/agent-banking"
    },
    {
      category: "Administration & EOD Processes",
      description: "System administration, user and role management (RBAC), scheduled jobs, end-of-day batch processing, backup and disaster recovery, and COBAC regulatory reporting scheduler.",
      icon: Notebook,
      features: [
        "Role-based access (RBAC)",
        "Four-eyes maker-checker approval",
        "Automated EOD batch run",
        "Audit log (immutable)",
        "Backup & DR scheduler"
      ],
      exploreLink: "/platform/administration"
    }
  ];

  const integrations = [
    {
      name: "SYSTAC / SYGMA",
      description: "Real-time interbank transfers",
      icon: Globe
    },
    {
      name: "COBAC Reporting API",
      description: "12 prudential returns",
      icon: ChartLineUp
    },
    {
      name: "CNI / Passport",
      description: "Identity verification",
      icon: ShieldCheck
    },
    {
      name: "FOGADAC",
      description: "Deposit insurance reporting",
      icon: CheckCircle
    },
    {
      name: "GABAC",
      description: "STR / CTR filing (AML/CFT)",
      icon: Notebook
    },
    {
      name: "BEAC",
      description: "Central bank compliance",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-tikari-green-dark text-white py-16 lg:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-tikari-green opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tikari-gold/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3.5 py-1.5 bg-tikari-gold/10 border border-tikari-gold/30 backdrop-blur-sm mb-6">
              <span className="text-[11px] uppercase tracking-[0.15em] text-tikari-gold font-semibold">ALL MODULES</span>
            </div>
            <h1 className="text-4xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6">
              Everything in a single tenancy
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/80 leading-relaxed mb-8 max-w-3xl">
              No bolt-on modules. No per-feature licenses. Every capability below is included in the TIKARI platform, engineered for Cameroon's Islamic banking and microfinance sector.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="group"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          {modules.map((module, idx) => (
            <div 
              key={idx} 
              className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start border-b border-tikari-green/10 pb-16 lg:pb-24 last:border-b-0"
            >
              {/* Left Column - Icon & Category */}
              <div className="lg:col-span-2 space-y-6">
                <div className="w-16 h-16 bg-tikari-gold/10 border border-tikari-gold/20 flex items-center justify-center text-tikari-gold">
                  <module.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-tikari-green-dark mb-4 leading-tight">
                    {module.category}
                  </h2>
                  <p className="text-[15px] text-tikari-sage leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>

              {/* Right Column - Features List */}
              <div className="lg:col-span-3 space-y-4">
                <ul className="space-y-3.5">
                  {module.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3 group">
                      <CheckCircle 
                        className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" 
                        weight="fill" 
                      />
                      <span className="text-[15px] text-tikari-green-dark leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link
                    href={module.exploreLink}
                    className="inline-flex items-center gap-2 text-tikari-green font-semibold text-[15px] hover:gap-3 transition-all group"
                  >
                    <span>Explore {module.category}</span>
                    <ArrowRight 
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                      weight="bold" 
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-green-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-tikari-green opacity-20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 bg-tikari-gold/10 border border-tikari-gold/30 backdrop-blur-sm mb-6">
              <span className="text-[11px] uppercase tracking-[0.15em] text-tikari-gold font-semibold">INTEGRATIONS</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Wired into the Cameroonian financial infrastructure
            </h2>
            <p className="text-[15px] lg:text-[17px] text-white/75 leading-relaxed">
              TIKARI connects natively to SYSTAC/SYGMA for real-time payments, the COBAC reporting API, CNI/Passport identity verification, FOGADAC reporting, and GABAC AML/CFT filing. No middleware required.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-6 lg:p-7 space-y-4 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-tikari-gold/[0.08] border border-tikari-gold/[0.15] flex items-center justify-center text-tikari-gold group-hover:bg-tikari-gold/[0.12] group-hover:border-tikari-gold/[0.25] transition-all duration-300">
                  <integration.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white mb-2 leading-snug">
                    {integration.name}
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <Button
              variant="secondary"
              size="lg"
              href="/demo"
              className="group bg-white text-tikari-green-dark hover:bg-tikari-cream-light"
            >
              See it in a demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
