"use client";

import { 
  ArrowRight, 
  UserCircle,
  Bank,
  Users,
  CashRegister,
  ArrowsLeftRight,
  MapPin,
  CheckCircle,
  IdentificationCard,
  Fingerprint,
  ChartLineUp,
  Handshake,
  Coins,
  ShieldCheck
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export default function BankingOperationsPage() {
  const t = useTranslations("platform.bankingOperations");
  
  const sections = [
    {
      id: "kyc",
      title: t("sections.kyc.title"),
      subtitle: t("sections.kyc.subtitle"),
      icon: UserCircle,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/muslim-woman.jpg",
      features: [
        {
          title: t("sections.kyc.features.threeTierKyc.title"),
          description: t("sections.kyc.features.threeTierKyc.description"),
          icon: IdentificationCard
        },
        {
          title: t("sections.kyc.features.cniVerification.title"),
          description: t("sections.kyc.features.cniVerification.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.kyc.features.passportVerification.title"),
          description: t("sections.kyc.features.passportVerification.description"),
          icon: IdentificationCard
        },
        {
          title: t("sections.kyc.features.biometricCapture.title"),
          description: t("sections.kyc.features.biometricCapture.description"),
          icon: Fingerprint
        },
        {
          title: t("sections.kyc.features.kycUpgrade.title"),
          description: t("sections.kyc.features.kycUpgrade.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.kyc.features.deduplication.title"),
          description: t("sections.kyc.features.deduplication.description"),
          icon: Users
        }
      ]
    },
    {
      id: "accounts",
      title: t("sections.accounts.title"),
      subtitle: t("sections.accounts.subtitle"),
      icon: Bank,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/personOffice.jpg",
      features: [
        {
          title: t("sections.accounts.features.wadiah.title"),
          description: t("sections.accounts.features.wadiah.description"),
          icon: Bank
        },
        {
          title: t("sections.accounts.features.mudarabah.title"),
          description: t("sections.accounts.features.mudarabah.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.accounts.features.youth.title"),
          description: t("sections.accounts.features.youth.description"),
          icon: Users
        },
        {
          title: t("sections.accounts.features.joint.title"),
          description: t("sections.accounts.features.joint.description"),
          icon: Handshake
        },
        {
          title: t("sections.accounts.features.dormancy.title"),
          description: t("sections.accounts.features.dormancy.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.accounts.features.mandate.title"),
          description: t("sections.accounts.features.mandate.description"),
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "njangi",
      title: t("sections.njangi.title"),
      subtitle: t("sections.njangi.subtitle"),
      icon: Users,
      color: "bg-gradient-to-br from-tikari-sage to-tikari-green/40",
      image: "/women-market.jpg",
      features: [
        {
          title: t("sections.njangi.features.constitution.title"),
          description: t("sections.njangi.features.constitution.description"),
          icon: Users
        },
        {
          title: t("sections.njangi.features.rotation.title"),
          description: t("sections.njangi.features.rotation.description"),
          icon: ArrowsLeftRight
        },
        {
          title: t("sections.njangi.features.disbursement.title"),
          description: t("sections.njangi.features.disbursement.description"),
          icon: Coins
        },
        {
          title: t("sections.njangi.features.contributions.title"),
          description: t("sections.njangi.features.contributions.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.njangi.features.groupLoan.title"),
          description: t("sections.njangi.features.groupLoan.description"),
          icon: Handshake
        },
        {
          title: t("sections.njangi.features.fieldTracking.title"),
          description: t("sections.njangi.features.fieldTracking.description"),
          icon: MapPin
        }
      ]
    },
    {
      id: "teller",
      title: t("sections.teller.title"),
      subtitle: t("sections.teller.subtitle"),
      icon: CashRegister,
      color: "bg-gradient-to-br from-tikari-cream to-tikari-cream-light",
      image: "/handshake.jpg",
      features: [
        {
          title: t("sections.teller.features.cashOps.title"),
          description: t("sections.teller.features.cashOps.description"),
          icon: Coins
        },
        {
          title: t("sections.teller.features.session.title"),
          description: t("sections.teller.features.session.description"),
          icon: CashRegister
        },
        {
          title: t("sections.teller.features.vault.title"),
          description: t("sections.teller.features.vault.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.teller.features.otc.title"),
          description: t("sections.teller.features.otc.description"),
          icon: ArrowsLeftRight
        },
        {
          title: t("sections.teller.features.tillLimit.title"),
          description: t("sections.teller.features.tillLimit.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.teller.features.makerChecker.title"),
          description: t("sections.teller.features.makerChecker.description"),
          icon: CheckCircle
        }
      ]
    },
    {
      id: "interbank",
      title: t("sections.interbank.title"),
      subtitle: t("sections.interbank.subtitle"),
      icon: ArrowsLeftRight,
      color: "bg-gradient-to-br from-tikari-green to-tikari-green-dark",
      image: "/meeting.jpg",
      features: [
        {
          title: t("sections.interbank.features.systac.title"),
          description: t("sections.interbank.features.systac.description"),
          icon: ArrowsLeftRight
        },
        {
          title: t("sections.interbank.features.sygma.title"),
          description: t("sections.interbank.features.sygma.description"),
          icon: Coins
        },
        {
          title: t("sections.interbank.features.inward.title"),
          description: t("sections.interbank.features.inward.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.interbank.features.returns.title"),
          description: t("sections.interbank.features.returns.description"),
          icon: ArrowsLeftRight
        },
        {
          title: t("sections.interbank.features.beac.title"),
          description: t("sections.interbank.features.beac.description"),
          icon: Bank
        },
        {
          title: t("sections.interbank.features.limits.title"),
          description: t("sections.interbank.features.limits.description"),
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "agent",
      title: t("sections.agent.title"),
      subtitle: t("sections.agent.subtitle"),
      icon: MapPin,
      color: "bg-gradient-to-br from-tikari-gold to-tikari-gold/80",
      image: "/woman-market.jpg",
      features: [
        {
          title: t("sections.agent.features.onboarding.title"),
          description: t("sections.agent.features.onboarding.description"),
          icon: UserCircle
        },
        {
          title: t("sections.agent.features.portal.title"),
          description: t("sections.agent.features.portal.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.agent.features.offline.title"),
          description: t("sections.agent.features.offline.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.agent.features.geoTagged.title"),
          description: t("sections.agent.features.geoTagged.description"),
          icon: MapPin
        },
        {
          title: t("sections.agent.features.reconciliation.title"),
          description: t("sections.agent.features.reconciliation.description"),
          icon: Coins
        },
        {
          title: t("sections.agent.features.commission.title"),
          description: t("sections.agent.features.commission.description"),
          icon: ChartLineUp
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
          
          // Different background colors for each section like main page
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
