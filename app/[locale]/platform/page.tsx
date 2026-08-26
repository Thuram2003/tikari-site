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
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export default function PlatformPage() {
  const t = useTranslations("platform.main");
  
  const modules = [
    {
      category: t("modules.bankingOperations.category"),
      description: t("modules.bankingOperations.description"),
      icon: Users,
      features: [
        t("modules.bankingOperations.features.0"),
        t("modules.bankingOperations.features.1"),
        t("modules.bankingOperations.features.2"),
        t("modules.bankingOperations.features.3"),
        t("modules.bankingOperations.features.4")
      ],
      explore: t("modules.bankingOperations.explore"),
      exploreLink: "/platform/banking-operations"
    },
    {
      category: t("modules.financing.category"),
      description: t("modules.financing.description"),
      icon: Coins,
      features: [
        t("modules.financing.features.0"),
        t("modules.financing.features.1"),
        t("modules.financing.features.2"),
        t("modules.financing.features.3"),
        t("modules.financing.features.4")
      ],
      explore: t("modules.financing.explore"),
      exploreLink: "/platform/financing"
    },
    {
      category: t("modules.compliance.category"),
      description: t("modules.compliance.description"),
      icon: ShieldCheck,
      features: [
        t("modules.compliance.features.0"),
        t("modules.compliance.features.1"),
        t("modules.compliance.features.2"),
        t("modules.compliance.features.3"),
        t("modules.compliance.features.4")
      ],
      explore: t("modules.compliance.explore"),
      exploreLink: "/platform/compliance"
    },
    {
      category: t("modules.glReporting.category"),
      description: t("modules.glReporting.description"),
      icon: ChartLineUp,
      features: [
        t("modules.glReporting.features.0"),
        t("modules.glReporting.features.1"),
        t("modules.glReporting.features.2"),
        t("modules.glReporting.features.3"),
        t("modules.glReporting.features.4")
      ],
      explore: t("modules.glReporting.explore"),
      exploreLink: "/platform/gl-reporting"
    },
    {
      category: t("modules.agentBanking.category"),
      description: t("modules.agentBanking.description"),
      icon: UserGear,
      features: [
        t("modules.agentBanking.features.0"),
        t("modules.agentBanking.features.1"),
        t("modules.agentBanking.features.2"),
        t("modules.agentBanking.features.3"),
        t("modules.agentBanking.features.4")
      ],
      explore: t("modules.agentBanking.explore"),
      exploreLink: "/platform/agent-banking"
    },
    {
      category: t("modules.administration.category"),
      description: t("modules.administration.description"),
      icon: Notebook,
      features: [
        t("modules.administration.features.0"),
        t("modules.administration.features.1"),
        t("modules.administration.features.2"),
        t("modules.administration.features.3"),
        t("modules.administration.features.4")
      ],
      explore: t("modules.administration.explore"),
      exploreLink: "/platform/administration"
    }
  ];

  const integrations = [
    {
      name: t("integrations.items.systac.name"),
      description: t("integrations.items.systac.description"),
      icon: Globe
    },
    {
      name: t("integrations.items.cobac.name"),
      description: t("integrations.items.cobac.description"),
      icon: ChartLineUp
    },
    {
      name: t("integrations.items.cni.name"),
      description: t("integrations.items.cni.description"),
      icon: ShieldCheck
    },
    {
      name: t("integrations.items.fogadac.name"),
      description: t("integrations.items.fogadac.description"),
      icon: CheckCircle
    },
    {
      name: t("integrations.items.gabac.name"),
      description: t("integrations.items.gabac.description"),
      icon: Notebook
    },
    {
      name: t("integrations.items.beac.name"),
      description: t("integrations.items.beac.description"),
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
            <h1 className="text-4xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/80 leading-relaxed mb-8 max-w-3xl">
              {t("hero.subtitle")}
            </p>
            <Button
              variant="secondary"
              size="lg"
              href="/demo"
              className="group"
            >
              {t("hero.scheduleDemo")}
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
                <div className="w-16 h-16 bg-tikari-gold/10 border border-tikari-gold/20 flex items-center justify-center text-tikari-gold rounded-full">
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
                    <span>{module.explore}</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {t("integrations.title")}
            </h2>
            <p className="text-[15px] lg:text-[17px] text-white/75 leading-relaxed">
              {t("integrations.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-6 lg:p-7 space-y-4 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group rounded-2xl"
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
            >
              {t("integrations.seeDemo")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
