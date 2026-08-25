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
import { useTranslations } from "next-intl";

export default function AgentBankingPage() {
  const t = useTranslations("platform.agentBanking");
  const sections = [
    {
      id: "agent-network",
      title: t("sections.agentNetwork.title"),
      subtitle: t("sections.agentNetwork.subtitle"),
      icon: Storefront,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/woman-market.jpg",
      features: [
        {
          title: t("sections.agentNetwork.features.recruitment.title"),
          description: t("sections.agentNetwork.features.recruitment.description"),
          icon: UserCircle
        },
        {
          title: t("sections.agentNetwork.features.categorization.title"),
          description: t("sections.agentNetwork.features.categorization.description"),
          icon: Users
        },
        {
          title: t("sections.agentNetwork.features.geoLocation.title"),
          description: t("sections.agentNetwork.features.geoLocation.description"),
          icon: MapPin
        },
        {
          title: t("sections.agentNetwork.features.deviceRegistration.title"),
          description: t("sections.agentNetwork.features.deviceRegistration.description"),
          icon: DeviceMobile
        },
        {
          title: t("sections.agentNetwork.features.floatAuthorization.title"),
          description: t("sections.agentNetwork.features.floatAuthorization.description"),
          icon: CurrencyCircleDollar
        },
        {
          title: t("sections.agentNetwork.features.performanceMonitoring.title"),
          description: t("sections.agentNetwork.features.performanceMonitoring.description"),
          icon: ChartLineUp
        }
      ]
    },
    {
      id: "mobile-money",
      title: t("sections.mobileMoney.title"),
      subtitle: t("sections.mobileMoney.subtitle"),
      icon: DeviceMobile,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/people.jpg",
      features: [
        {
          title: t("sections.mobileMoney.features.mtnApi.title"),
          description: t("sections.mobileMoney.features.mtnApi.description"),
          icon: DeviceMobile
        },
        {
          title: t("sections.mobileMoney.features.orangeApi.title"),
          description: t("sections.mobileMoney.features.orangeApi.description"),
          icon: Wallet
        },
        {
          title: t("sections.mobileMoney.features.reconciliation.title"),
          description: t("sections.mobileMoney.features.reconciliation.description"),
          icon: Receipt
        },
        {
          title: t("sections.mobileMoney.features.beacCompliance.title"),
          description: t("sections.mobileMoney.features.beacCompliance.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.mobileMoney.features.interoperability.title"),
          description: t("sections.mobileMoney.features.interoperability.description"),
          icon: WifiHigh
        },
        {
          title: t("sections.mobileMoney.features.walletLinking.title"),
          description: t("sections.mobileMoney.features.walletLinking.description"),
          icon: Bank
        }
      ]
    },
    {
      id: "field-operations",
      title: t("sections.fieldOperations.title"),
      subtitle: t("sections.fieldOperations.subtitle"),
      icon: MapPin,
      color: "bg-tikari-green-dark text-white",
      image: "/women-market.jpg",
      features: [
        {
          title: t("sections.fieldOperations.features.offlineMode.title"),
          description: t("sections.fieldOperations.features.offlineMode.description"),
          icon: WifiHigh
        },
        {
          title: t("sections.fieldOperations.features.gpsTagged.title"),
          description: t("sections.fieldOperations.features.gpsTagged.description"),
          icon: MapPin
        },
        {
          title: t("sections.fieldOperations.features.visitTracking.title"),
          description: t("sections.fieldOperations.features.visitTracking.description"),
          icon: ClipboardText
        },
        {
          title: t("sections.fieldOperations.features.biometric.title"),
          description: t("sections.fieldOperations.features.biometric.description"),
          icon: Fingerprint
        },
        {
          title: t("sections.fieldOperations.features.njangiCollections.title"),
          description: t("sections.fieldOperations.features.njangiCollections.description"),
          icon: Users
        },
        {
          title: t("sections.fieldOperations.features.fieldCash.title"),
          description: t("sections.fieldOperations.features.fieldCash.description"),
          icon: Coins
        }
      ]
    },
    {
      id: "cash-in-cash-out",
      title: t("sections.cashInOut.title"),
      subtitle: t("sections.cashInOut.subtitle"),
      icon: Coins,
      color: "bg-white",
      image: "/handshake.jpg",
      features: [
        {
          title: t("sections.cashInOut.features.cashIn.title"),
          description: t("sections.cashInOut.features.cashIn.description"),
          icon: Coins
        },
        {
          title: t("sections.cashInOut.features.cashOut.title"),
          description: t("sections.cashInOut.features.cashOut.description"),
          icon: Wallet
        },
        {
          title: t("sections.cashInOut.features.floatManagement.title"),
          description: t("sections.cashInOut.features.floatManagement.description"),
          icon: Bank
        },
        {
          title: t("sections.cashInOut.features.limits.title"),
          description: t("sections.cashInOut.features.limits.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.cashInOut.features.receipt.title"),
          description: t("sections.cashInOut.features.receipt.description"),
          icon: Receipt
        },
        {
          title: t("sections.cashInOut.features.reversal.title"),
          description: t("sections.cashInOut.features.reversal.description"),
          icon: FileText
        }
      ]
    },
    {
      id: "commission-management",
      title: t("sections.commissionManagement.title"),
      subtitle: t("sections.commissionManagement.subtitle"),
      icon: ChartLineUp,
      color: "bg-tikari-sage-light/40",
      image: "/money.jpg",
      features: [
        {
          title: t("sections.commissionManagement.features.tiered.title"),
          description: t("sections.commissionManagement.features.tiered.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.commissionManagement.features.realTimeAccrual.title"),
          description: t("sections.commissionManagement.features.realTimeAccrual.description"),
          icon: Coins
        },
        {
          title: t("sections.commissionManagement.features.monthlyPayout.title"),
          description: t("sections.commissionManagement.features.monthlyPayout.description"),
          icon: Calendar
        },
        {
          title: t("sections.commissionManagement.features.bonuses.title"),
          description: t("sections.commissionManagement.features.bonuses.description"),
          icon: Receipt
        },
        {
          title: t("sections.commissionManagement.features.deductions.title"),
          description: t("sections.commissionManagement.features.deductions.description"),
          icon: FileText
        },
        {
          title: t("sections.commissionManagement.features.reports.title"),
          description: t("sections.commissionManagement.features.reports.description"),
          icon: ClipboardText
        }
      ]
    },
    {
      id: "regulatory-reporting",
      title: t("sections.regulatoryReporting.title"),
      subtitle: t("sections.regulatoryReporting.subtitle"),
      icon: ShieldCheck,
      color: "bg-tikari-gold/8",
      image: "/compliance.jpg",
      features: [
        {
          title: t("sections.regulatoryReporting.features.cobacNorms.title"),
          description: t("sections.regulatoryReporting.features.cobacNorms.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.regulatoryReporting.features.amlScreening.title"),
          description: t("sections.regulatoryReporting.features.amlScreening.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.regulatoryReporting.features.beacReturns.title"),
          description: t("sections.regulatoryReporting.features.beacReturns.description"),
          icon: Bank
        },
        {
          title: t("sections.regulatoryReporting.features.activityReports.title"),
          description: t("sections.regulatoryReporting.features.activityReports.description"),
          icon: ClipboardText
        },
        {
          title: t("sections.regulatoryReporting.features.complaints.title"),
          description: t("sections.regulatoryReporting.features.complaints.description"),
          icon: FileText
        },
        {
          title: t("sections.regulatoryReporting.features.expansionAnalysis.title"),
          description: t("sections.regulatoryReporting.features.expansionAnalysis.description"),
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
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-md"
            >
              {t("cta.scheduleDemo")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="/platform"
              className="group bg-white/90 text-tikari-green-dark hover:bg-white border-2 border-tikari-green-dark/20 rounded-md"
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
