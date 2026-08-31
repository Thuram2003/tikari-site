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
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function MicrofinanceSolutionsPage() {
  const t = useTranslations("solutions.microfinance");
  const licenceCategories = [
    {
      title: t("licenceCategories.unit.title"),
      capital: t("licenceCategories.unit.capital"),
      description: t("licenceCategories.unit.description"),
      icon: MapPin,
      features: [
        t("licenceCategories.unit.features.0"),
        t("licenceCategories.unit.features.1"),
        t("licenceCategories.unit.features.2"),
        t("licenceCategories.unit.features.3"),
        t("licenceCategories.unit.features.4")
      ],
      color: "bg-tikari-green-dark"
    },
    {
      title: t("licenceCategories.state.title"),
      capital: t("licenceCategories.state.capital"),
      description: t("licenceCategories.state.description"),
      icon: BuildingOffice,
      features: [
        t("licenceCategories.state.features.0"),
        t("licenceCategories.state.features.1"),
        t("licenceCategories.state.features.2"),
        t("licenceCategories.state.features.3"),
        t("licenceCategories.state.features.4")
      ],
      color: "bg-tikari-gold"
    },
    {
      title: t("licenceCategories.national.title"),
      capital: t("licenceCategories.national.capital"),
      description: t("licenceCategories.national.description"),
      icon: Bank,
      features: [
        t("licenceCategories.national.features.0"),
        t("licenceCategories.national.features.1"),
        t("licenceCategories.national.features.2"),
        t("licenceCategories.national.features.3"),
        t("licenceCategories.national.features.4")
      ],
      color: "bg-tikari-green"
    }
  ];

  const regulatoryReturns = [
    { code: t("regulatoryReturns.items.0.code"), name: t("regulatoryReturns.items.0.name") },
    { code: t("regulatoryReturns.items.1.code"), name: t("regulatoryReturns.items.1.name") },
    { code: t("regulatoryReturns.items.2.code"), name: t("regulatoryReturns.items.2.name") },
    { code: t("regulatoryReturns.items.3.code"), name: t("regulatoryReturns.items.3.name") },
    { code: t("regulatoryReturns.items.4.code"), name: t("regulatoryReturns.items.4.name") },
    { code: t("regulatoryReturns.items.5.code"), name: t("regulatoryReturns.items.5.name") },
    { code: t("regulatoryReturns.items.6.code"), name: t("regulatoryReturns.items.6.name") },
    { code: t("regulatoryReturns.items.7.code"), name: t("regulatoryReturns.items.7.name") },
    { code: t("regulatoryReturns.items.8.code"), name: t("regulatoryReturns.items.8.name") },
    { code: t("regulatoryReturns.items.9.code"), name: t("regulatoryReturns.items.9.name") },
    { code: t("regulatoryReturns.items.10.code"), name: t("regulatoryReturns.items.10.name") },
    { code: t("regulatoryReturns.items.11.code"), name: t("regulatoryReturns.items.11.name") }
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

      {/* All Licence Categories Section */}
      <section className="py-16 lg:py-24 px-6 bg-gradient-to-br from-tikari-cream/30 via-white to-tikari-cream/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-tikari-green/10 text-tikari-green-dark rounded-full text-sm font-semibold">
                <Bank className="h-4 w-4" weight="bold" />
                Licence Tiers
              </span>
            </div>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-4 leading-[1.15] tracking-tight text-tikari-green-dark">
              {t("licenceTiers.title")}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {licenceCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-tikari-green/10 hover:border-tikari-green/30 hover:-translate-y-2"
                >
                  {/* Header with Gradient */}
                  <div className={`${category.color} text-white p-8 relative overflow-hidden`}>
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="h-8 w-8" weight="bold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                          <p className="text-sm text-white/80 font-semibold bg-white/10 px-3 py-1 rounded-2xl inline-block">
                            {category.capital}
                          </p>
                        </div>
                      </div>
                      <p className="text-[15px] text-white/90 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Features with improved spacing */}
                  <div className="p-8 bg-gradient-to-b from-transparent to-tikari-cream/10">
                    <div className="space-y-4">
                      {category.features.map((feature, featureIdx) => (
                        <div 
                          key={featureIdx} 
                          className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200"
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            <CheckCircle 
                              className="h-5 w-5 text-tikari-green group-hover/item:scale-110 transition-transform" 
                              weight="bold" 
                            />
                          </div>
                          <span className="text-[14.5px] text-tikari-green-dark/80 leading-relaxed font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Key Features Section */}
      <section className="py-16 lg:py-24 px-6 bg-tikari-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
              {t("keyFeatures.title")}
            </h2>
            <p className="text-[16px] lg:text-[18px] text-white/75 leading-relaxed max-w-3xl mx-auto">
              {t("keyFeatures.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: t("keyFeatures.features.groupBanking.title"),
                description: t("keyFeatures.features.groupBanking.description")
              },
              {
                icon: Coins,
                title: t("keyFeatures.features.multiCurrency.title"),
                description: t("keyFeatures.features.multiCurrency.description")
              },
              {
                icon: Receipt,
                title: t("keyFeatures.features.murabaha.title"),
                description: t("keyFeatures.features.murabaha.description")
              },
              {
                icon: Database,
                title: t("keyFeatures.features.interbank.title"),
                description: t("keyFeatures.features.interbank.description")
              },
              {
                icon: CurrencyCircleDollar,
                title: t("keyFeatures.features.mobileMoney.title"),
                description: t("keyFeatures.features.mobileMoney.description")
              },
              {
                icon: Notebook,
                title: t("keyFeatures.features.eod.title"),
                description: t("keyFeatures.features.eod.description")
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/[0.08] border border-white/[0.12] p-6 hover:bg-white/[0.12] hover:border-white/[0.18] transition-all duration-300 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-tikari-gold/20 border border-tikari-gold/30 flex items-center justify-center mb-4 rounded-full">
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
            <div className="relative h-[450px] lg:h-[600px] overflow-hidden shadow-2xl border border-tikari-green/10 rounded-2xl">
              <Image
                src="/meeting.jpg"
                alt="Multi-branch Islamic banking"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-tikari-green-dark/50 via-tikari-green/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight">
                {t("multiBranch.title")}
              </h2>
              
              <p className="text-[16px] text-tikari-sage leading-relaxed mb-8">
                {t("multiBranch.description")}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  t("multiBranch.features.0"),
                  t("multiBranch.features.1"),
                  t("multiBranch.features.2"),
                  t("multiBranch.features.3"),
                  t("multiBranch.features.4"),
                  t("multiBranch.features.5")
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
            {t("cta.title")}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
            >
              {t("cta.scheduleDemo")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="cream"
              size="lg"
              href="/platform"
            >
              {t("cta.explorePlatform")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
