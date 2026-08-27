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
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function CooperativesWindowsPage() {
  const t = useTranslations("solutions.cooperatives");
  const supportTypes = [
    {
      title: t("supportTypes.rotatingGroups.title"),
      description: t("supportTypes.rotatingGroups.description"),
      icon: UsersFour,
      image: "/women-market.jpg",
      color: "bg-tikari-green-dark"
    },
    {
      title: t("supportTypes.mudarabah.title"),
      description: t("supportTypes.mudarabah.description"),
      icon: Coins,
      image: "/money.jpg",
      color: "bg-tikari-gold"
    },
    {
      title: t("supportTypes.qardHasan.title"),
      description: t("supportTypes.qardHasan.description"),
      icon: CirclesFour,
      image: "/handshake.jpg",
      color: "bg-tikari-green"
    },
    {
      title: t("supportTypes.islamicWindow.title"),
      description: t("supportTypes.islamicWindow.description"),
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
              {t("hero.title")}
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl mb-8">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/demo"
              >
                {t("hero.cta.demo")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
              
              <Button
                variant="cream"
                size="lg"
                href="/platform"
              >
                {t("hero.cta.platform")}
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
              {t("whatWeSupport.title")}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage max-w-3xl mx-auto">
              {t("whatWeSupport.subtitle")}
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
                  <div className={`relative h-[450px] lg:h-[550px] overflow-hidden shadow-2xl border border-tikari-green/10 rounded-2xl ${isEven ? '' : 'lg:order-2'}`}>
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
                      <div className={`w-14 h-14 ${type.color} text-white flex items-center justify-center rounded-xl`}>
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
              {t("keyFeatures.title")}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-tikari-sage leading-relaxed max-w-3xl mx-auto">
              {t("keyFeatures.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ArrowsClockwise,
                title: t("keyFeatures.features.rotation.title"),
                description: t("keyFeatures.features.rotation.description")
              },
              {
                icon: Coins,
                title: t("keyFeatures.features.profitPool.title"),
                description: t("keyFeatures.features.profitPool.description")
              },
              {
                icon: Receipt,
                title: t("keyFeatures.features.zeroInterest.title"),
                description: t("keyFeatures.features.zeroInterest.description")
              },
              {
                icon: ShieldCheck,
                title: t("keyFeatures.features.eligibility.title"),
                description: t("keyFeatures.features.eligibility.description")
              },
              {
                icon: ListChecks,
                title: t("keyFeatures.features.dividend.title"),
                description: t("keyFeatures.features.dividend.description")
              },
              {
                icon: Bank,
                title: t("keyFeatures.features.dualLedger.title"),
                description: t("keyFeatures.features.dualLedger.description")
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-tikari-green/10 p-6 hover:border-tikari-green/30 hover:shadow-lg transition-all duration-300 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-tikari-green/10 border border-tikari-green/20 flex items-center justify-center mb-4 rounded-full">
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
                {t("compliance.title")}
              </h2>
              
              <p className="text-[16px] text-white/85 leading-relaxed mb-6">
                {t("compliance.description1")}
              </p>

              <p className="text-[16px] text-white/85 leading-relaxed mb-8">
                {t("compliance.description2")}
              </p>

              <div className="space-y-3">
                {[
                  t("compliance.items.0"),
                  t("compliance.items.1"),
                  t("compliance.items.2"),
                  t("compliance.items.3"),
                  t("compliance.items.4"),
                  t("compliance.items.5")
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="bold" />
                    <span className="text-[15px] text-white/85 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[600px] overflow-hidden shadow-2xl border border-white/10 rounded-2xl">
              <Image
                src="/compliance.jpg"
                alt="Regulatory compliance and reporting"
                fill
                className="object-cover rounded-2xl"
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
            {t("cta.title")}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
            >
              {t("cta.buttons.demo")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="cream"
              size="lg"
              href="/platform"
            >
              {t("cta.buttons.platform")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
