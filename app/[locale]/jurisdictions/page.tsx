"use client";

import { 
  Globe, 
  ShieldCheck, 
  Bank, 
  Handshake, 
  ArrowRight,
  BookmarkSimple,
  Briefcase
} from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function JurisdictionsPage() {
  const t = useTranslations("jurisdictions");

  const regions = [
    {
      key: "cemac",
      icon: Bank,
      badge: "Central Africa",
      color: "border-tikari-green/20"
    },
    {
      key: "nigeria",
      icon: Handshake,
      badge: "West Africa",
      color: "border-tikari-gold/30"
    },
    {
      key: "waemu",
      icon: Globe,
      badge: "West Africa (Francophone)",
      color: "border-tikari-green/20"
    },
    {
      key: "eastafrica",
      icon: ShieldCheck,
      badge: "East Africa",
      color: "border-tikari-sage/30"
    }
  ];

  const standards = [
    {
      key: "aaoifi",
      icon: BookmarkSimple
    },
    {
      key: "ohada",
      icon: Briefcase
    },
    {
      key: "shariah",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-tikari-green-dark text-white py-24 lg:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark via-tikari-green to-tikari-green-dark opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tikari-gold/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center px-3.5 py-1.5 bg-tikari-gold/10 border border-tikari-gold/30 backdrop-blur-sm rounded-full">
            <span className="text-[11px] uppercase tracking-[0.15em] text-tikari-gold font-semibold">
              Global Compliance
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            {t("title")}
          </h1>
          
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 px-6 max-w-7xl mx-auto">
        <p className="text-center text-tikari-sage text-base lg:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          {t("intro")}
        </p>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {regions.map((reg, idx) => {
            const Icon = reg.icon;
            return (
              <div 
                key={idx}
                className={`bg-tikari-cream-light/40 border ${reg.color} p-8 lg:p-10 rounded-2xl flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-tikari-green/5 flex items-center justify-center text-tikari-green group-hover:bg-tikari-green group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold text-tikari-gold uppercase tracking-wider bg-tikari-gold/10 px-3 py-1 border border-tikari-gold/20 rounded-full">
                      {reg.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-tikari-green-dark">
                    {t(`regions.${reg.key}.title`)}
                  </h3>
                  
                  <p className="text-sm text-tikari-sage leading-relaxed">
                    {t(`regions.${reg.key}.desc`)}
                  </p>
                </div>

                <div className="pt-4 flex items-center text-tikari-green group-hover:text-tikari-gold font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Standards Section */}
      <section className="bg-tikari-green-dark py-20 lg:py-28 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-tikari-green opacity-20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold">
              {t("coreStandards.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/[0.04] border border-white/[0.08] p-8 space-y-4 rounded-xl flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-tikari-gold/[0.08] border border-tikari-gold/[0.15] flex items-center justify-center text-tikari-gold">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {t(`coreStandards.${std.key}.title`)}
                    </h3>
                    <p className="text-xs text-white/75 leading-relaxed">
                      {t(`coreStandards.${std.key}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-tikari-green-dark leading-tight">
          {t("cta.title")}
        </h2>
        <p className="text-base lg:text-lg text-tikari-sage leading-relaxed max-w-2xl mx-auto">
          {t("cta.desc")}
        </p>
        <div className="pt-4">
          <Button 
            variant="secondary" 
            size="lg" 
            href="/demo" 
            className="uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>{t("cta.button")}</span>
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
}
