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
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export default function FinancingPage() {
  const t = useTranslations("platform.financing");
  
  const sections = [
    {
      id: "murabaha",
      title: t("sections.murabaha.title"),
      subtitle: t("sections.murabaha.subtitle"),
      icon: Storefront,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/personOffice.jpg",
      features: [
        {
          title: t("sections.murabaha.features.assetProcurement.title"),
          description: t("sections.murabaha.features.assetProcurement.description"),
          icon: Package
        },
        {
          title: t("sections.murabaha.features.transparentMarkup.title"),
          description: t("sections.murabaha.features.transparentMarkup.description"),
          icon: Receipt
        },
        {
          title: t("sections.murabaha.features.deferredPayment.title"),
          description: t("sections.murabaha.features.deferredPayment.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.murabaha.features.glSplit.title"),
          description: t("sections.murabaha.features.glSplit.description"),
          icon: Bank
        },
        {
          title: t("sections.murabaha.features.supplierIntegration.title"),
          description: t("sections.murabaha.features.supplierIntegration.description"),
          icon: Handshake
        },
        {
          title: t("sections.murabaha.features.shariahValidation.title"),
          description: t("sections.murabaha.features.shariahValidation.description"),
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "mudarabah",
      title: t("sections.mudarabah.title"),
      subtitle: t("sections.mudarabah.subtitle"),
      icon: Handshake,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/muslim-meeting.jpg",
      features: [
        {
          title: t("sections.mudarabah.features.partnershipConstitution.title"),
          description: t("sections.mudarabah.features.partnershipConstitution.description"),
          icon: FileText
        },
        {
          title: t("sections.mudarabah.features.capitalDeployment.title"),
          description: t("sections.mudarabah.features.capitalDeployment.description"),
          icon: TrendUp
        },
        {
          title: t("sections.mudarabah.features.profitDistribution.title"),
          description: t("sections.mudarabah.features.profitDistribution.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.mudarabah.features.lossAllocation.title"),
          description: t("sections.mudarabah.features.lossAllocation.description"),
          icon: Scales
        },
        {
          title: t("sections.mudarabah.features.periodicReporting.title"),
          description: t("sections.mudarabah.features.periodicReporting.description"),
          icon: ClipboardText
        },
        {
          title: t("sections.mudarabah.features.investmentPool.title"),
          description: t("sections.mudarabah.features.investmentPool.description"),
          icon: Bank
        }
      ]
    },
    {
      id: "musharakah",
      title: t("sections.musharakah.title"),
      subtitle: t("sections.musharakah.subtitle"),
      icon: ChartLineUp,
      color: "bg-tikari-green-dark text-white",
      image: "/meeting.jpg",
      features: [
        {
          title: t("sections.musharakah.features.jointCapital.title"),
          description: t("sections.musharakah.features.jointCapital.description"),
          icon: CurrencyCircleDollar
        },
        {
          title: t("sections.musharakah.features.diminishing.title"),
          description: t("sections.musharakah.features.diminishing.description"),
          icon: TrendUp
        },
        {
          title: t("sections.musharakah.features.profitLossSharing.title"),
          description: t("sections.musharakah.features.profitLossSharing.description"),
          icon: Scales
        },
        {
          title: t("sections.musharakah.features.managementRights.title"),
          description: t("sections.musharakah.features.managementRights.description"),
          icon: Handshake
        },
        {
          title: t("sections.musharakah.features.exitStrategy.title"),
          description: t("sections.musharakah.features.exitStrategy.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.musharakah.features.equityLedger.title"),
          description: t("sections.musharakah.features.equityLedger.description"),
          icon: Bank
        }
      ]
    },
    {
      id: "ijara",
      title: t("sections.ijara.title"),
      subtitle: t("sections.ijara.subtitle"),
      icon: Buildings,
      color: "bg-tikari-gold/60",
      image: "/handshake.jpg",
      features: [
        {
          title: t("sections.ijara.features.operatingFinance.title"),
          description: t("sections.ijara.features.operatingFinance.description"),
          icon: Buildings
        },
        {
          title: t("sections.ijara.features.assetRegistration.title"),
          description: t("sections.ijara.features.assetRegistration.description"),
          icon: FileText
        },
        {
          title: t("sections.ijara.features.rentalCalculation.title"),
          description: t("sections.ijara.features.rentalCalculation.description"),
          icon: Receipt
        },
        {
          title: t("sections.ijara.features.maintenanceObligations.title"),
          description: t("sections.ijara.features.maintenanceObligations.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.ijara.features.earlyTermination.title"),
          description: t("sections.ijara.features.earlyTermination.description"),
          icon: Scales
        },
        {
          title: t("sections.ijara.features.purchaseOption.title"),
          description: t("sections.ijara.features.purchaseOption.description"),
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "salam-istisna",
      title: t("sections.salamIstisna.title"),
      subtitle: t("sections.salamIstisna.subtitle"),
      icon: Package,
      color: "bg-tikari-sage",
      image: "/women-market.jpg",
      features: [
        {
          title: t("sections.salamIstisna.features.salam.title"),
          description: t("sections.salamIstisna.features.salam.description"),
          icon: Package
        },
        {
          title: t("sections.salamIstisna.features.istisna.title"),
          description: t("sections.salamIstisna.features.istisna.description"),
          icon: Hammer
        },
        {
          title: t("sections.salamIstisna.features.commoditySpec.title"),
          description: t("sections.salamIstisna.features.commoditySpec.description"),
          icon: FileText
        },
        {
          title: t("sections.salamIstisna.features.parallel.title"),
          description: t("sections.salamIstisna.features.parallel.description"),
          icon: Handshake
        },
        {
          title: t("sections.salamIstisna.features.deliveryInspection.title"),
          description: t("sections.salamIstisna.features.deliveryInspection.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.salamIstisna.features.inventoryReceivables.title"),
          description: t("sections.salamIstisna.features.inventoryReceivables.description"),
          icon: Bank
        }
      ]
    },
    {
      id: "treasury",
      title: t("sections.treasury.title"),
      subtitle: t("sections.treasury.subtitle"),
      icon: Bank,
      color: "bg-tikari-gold/30",
      image: "/money.jpg",
      features: [
        {
          title: t("sections.treasury.features.sukukPortfolio.title"),
          description: t("sections.treasury.features.sukukPortfolio.description"),
          icon: Receipt
        },
        {
          title: t("sections.treasury.features.commodityMurabaha.title"),
          description: t("sections.treasury.features.commodityMurabaha.description"),
          icon: Coins
        },
        {
          title: t("sections.treasury.features.interbankWakala.title"),
          description: t("sections.treasury.features.interbankWakala.description"),
          icon: Handshake
        },
        {
          title: t("sections.treasury.features.centralBankReserve.title"),
          description: t("sections.treasury.features.centralBankReserve.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.treasury.features.profitRateRisk.title"),
          description: t("sections.treasury.features.profitRateRisk.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.treasury.features.liquidityCoverage.title"),
          description: t("sections.treasury.features.liquidityCoverage.description"),
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
              {t("hero.title")}
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl">
              {t("hero.subtitle")}
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
                      <div className={`w-16 h-16 ${section.color} text-white flex items-center justify-center shadow-lg border border-white/20 rounded-full`}>
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
                            className={`${idx === 2 ? 'bg-white/[0.08] border-white/[0.12] hover:bg-white/[0.12] hover:border-white/[0.18]' : 'bg-white border-tikari-green/10 hover:border-tikari-green/20'} border p-6 hover:shadow-lg transition-all duration-300 group rounded-2xl`}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`w-9 h-9 ${idx === 2 ? 'bg-tikari-gold/20 border-tikari-gold/30' : 'bg-tikari-gold/10 border-tikari-gold/20'} border flex items-center justify-center flex-shrink-0 group-hover:bg-tikari-gold/20 group-hover:border-tikari-gold/30 transition-all rounded-full`}>
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
                    <div className="relative h-[450px] lg:h-[650px] overflow-hidden shadow-2xl border border-tikari-green/10 rounded-2xl">
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
              {t("cta.exploreModules")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
