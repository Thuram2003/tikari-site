"use client";

import { 
  ArrowRight, 
  Users,
  GearSix,
  Buildings,
  CalendarCheck,
  Database,
  ChartLineUp,
  ShieldCheck,
  UserGear,
  Lock,
  Clock,
  FileArchive,
  Warning,
  CheckCircle,
  ListChecks,
  ClipboardText,
  HardDrives,
  ArrowsClockwise,
  CurrencyCircleDollar,
  Receipt,
  Calculator
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function AdministrationPage() {
  const t = useTranslations("platform.administration");
  const sections = [
    {
      id: "user-management",
      title: t("sections.userManagement.title"),
      subtitle: t("sections.userManagement.subtitle"),
      icon: Users,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/consulting-team.jpg",
      features: [
        {
          title: t("sections.userManagement.features.userCreation.title"),
          description: t("sections.userManagement.features.userCreation.description"),
          icon: UserGear
        },
        {
          title: t("sections.userManagement.features.rbac.title"),
          description: t("sections.userManagement.features.rbac.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.userManagement.features.branchAssignment.title"),
          description: t("sections.userManagement.features.branchAssignment.description"),
          icon: Buildings
        },
        {
          title: t("sections.userManagement.features.passwordPolicy.title"),
          description: t("sections.userManagement.features.passwordPolicy.description"),
          icon: Lock
        },
        {
          title: t("sections.userManagement.features.sessionManagement.title"),
          description: t("sections.userManagement.features.sessionManagement.description"),
          icon: Clock
        },
        {
          title: t("sections.userManagement.features.auditTrail.title"),
          description: t("sections.userManagement.features.auditTrail.description"),
          icon: ClipboardText
        }
      ]
    },
    {
      id: "system-configuration",
      title: t("sections.systemConfiguration.title"),
      subtitle: t("sections.systemConfiguration.subtitle"),
      icon: GearSix,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/woman-office.jpg",
      features: [
        {
          title: t("sections.systemConfiguration.features.workingDays.title"),
          description: t("sections.systemConfiguration.features.workingDays.description"),
          icon: CalendarCheck
        },
        {
          title: t("sections.systemConfiguration.features.transactionLimits.title"),
          description: t("sections.systemConfiguration.features.transactionLimits.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.systemConfiguration.features.profitRates.title"),
          description: t("sections.systemConfiguration.features.profitRates.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.systemConfiguration.features.currency.title"),
          description: t("sections.systemConfiguration.features.currency.description"),
          icon: CurrencyCircleDollar
        },
        {
          title: t("sections.systemConfiguration.features.fees.title"),
          description: t("sections.systemConfiguration.features.fees.description"),
          icon: Receipt
        },
        {
          title: t("sections.systemConfiguration.features.notifications.title"),
          description: t("sections.systemConfiguration.features.notifications.description"),
          icon: ClipboardText
        }
      ]
    },
    {
      id: "branch-management",
      title: t("sections.branchManagement.title"),
      subtitle: t("sections.branchManagement.subtitle"),
      icon: Buildings,
      color: "bg-tikari-green-dark text-white",
      image: "/people-smiling-papers.jpeg",
      features: [
        {
          title: t("sections.branchManagement.features.registration.title"),
          description: t("sections.branchManagement.features.registration.description"),
          icon: Buildings
        },
        {
          title: t("sections.branchManagement.features.hierarchies.title"),
          description: t("sections.branchManagement.features.hierarchies.description"),
          icon: ListChecks
        },
        {
          title: t("sections.branchManagement.features.branchLimits.title"),
          description: t("sections.branchManagement.features.branchLimits.description"),
          icon: ShieldCheck
        },
        {
          title: t("sections.branchManagement.features.interBranch.title"),
          description: t("sections.branchManagement.features.interBranch.description"),
          icon: ArrowsClockwise
        },
        {
          title: t("sections.branchManagement.features.performance.title"),
          description: t("sections.branchManagement.features.performance.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.branchManagement.features.activation.title"),
          description: t("sections.branchManagement.features.activation.description"),
          icon: CheckCircle
        }
      ]
    },
    {
      id: "eod-processes",
      title: t("sections.eodProcesses.title"),
      subtitle: t("sections.eodProcesses.subtitle"),
      icon: CalendarCheck,
      color: "bg-tikari-gold/90",
      image: "/muslim-man.jpg",
      features: [
        {
          title: t("sections.eodProcesses.features.eoti.title"),
          description: t("sections.eodProcesses.features.eoti.description"),
          icon: Clock
        },
        {
          title: t("sections.eodProcesses.features.profitAccrual.title"),
          description: t("sections.eodProcesses.features.profitAccrual.description"),
          icon: Calculator
        },
        {
          title: t("sections.eodProcesses.features.markupIncome.title"),
          description: t("sections.eodProcesses.features.markupIncome.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.eodProcesses.features.maintenance.title"),
          description: t("sections.eodProcesses.features.maintenance.description"),
          icon: Receipt
        },
        {
          title: t("sections.eodProcesses.features.dormancy.title"),
          description: t("sections.eodProcesses.features.dormancy.description"),
          icon: Warning
        },
        {
          title: t("sections.eodProcesses.features.eofi.title"),
          description: t("sections.eodProcesses.features.eofi.description"),
          icon: CheckCircle
        }
      ]
    },
    {
      id: "backup-archival",
      title: t("sections.backupArchival.title"),
      subtitle: t("sections.backupArchival.subtitle"),
      icon: Database,
      color: "bg-tikari-sage",
      image: "/personOffice.jpg",
      features: [
        {
          title: t("sections.backupArchival.features.dailyBackup.title"),
          description: t("sections.backupArchival.features.dailyBackup.description"),
          icon: HardDrives
        },
        {
          title: t("sections.backupArchival.features.archival.title"),
          description: t("sections.backupArchival.features.archival.description"),
          icon: FileArchive
        },
        {
          title: t("sections.backupArchival.features.disasterRecovery.title"),
          description: t("sections.backupArchival.features.disasterRecovery.description"),
          icon: ArrowsClockwise
        },
        {
          title: t("sections.backupArchival.features.retention.title"),
          description: t("sections.backupArchival.features.retention.description"),
          icon: CalendarCheck
        },
        {
          title: t("sections.backupArchival.features.verification.title"),
          description: t("sections.backupArchival.features.verification.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.backupArchival.features.auditLogArchival.title"),
          description: t("sections.backupArchival.features.auditLogArchival.description"),
          icon: ClipboardText
        }
      ]
    },
    {
      id: "monitoring-alerts",
      title: t("sections.monitoringAlerts.title"),
      subtitle: t("sections.monitoringAlerts.subtitle"),
      icon: ChartLineUp,
      color: "bg-tikari-gold/40",
      image: "/smiling-looking-phone.webp",
      features: [
        {
          title: t("sections.monitoringAlerts.features.performance.title"),
          description: t("sections.monitoringAlerts.features.performance.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.monitoringAlerts.features.volumeMonitoring.title"),
          description: t("sections.monitoringAlerts.features.volumeMonitoring.description"),
          icon: ListChecks
        },
        {
          title: t("sections.monitoringAlerts.features.failedTransactions.title"),
          description: t("sections.monitoringAlerts.features.failedTransactions.description"),
          icon: Warning
        },
        {
          title: t("sections.monitoringAlerts.features.eodMonitoring.title"),
          description: t("sections.monitoringAlerts.features.eodMonitoring.description"),
          icon: CalendarCheck
        },
        {
          title: t("sections.monitoringAlerts.features.licenseExpiry.title"),
          description: t("sections.monitoringAlerts.features.licenseExpiry.description"),
          icon: Clock
        },
        {
          title: t("sections.monitoringAlerts.features.anomalies.title"),
          description: t("sections.monitoringAlerts.features.anomalies.description"),
          icon: ShieldCheck
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
                              <h3 className={`text-[17px] lg:text-[18px] font-bold leading-snug ${idx === 2 ? 'text-white' : 'text-tikari-green-dark'}`}>
                                {feature.title}
                              </h3>
                            </div>
                            <p className={`text-sm leading-relaxed pl-12 ${idx === 2 ? 'text-white/75' : 'text-tikari-sage'}`}>
                              {feature.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`relative ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="relative h-[450px] lg:h-[650px] overflow-hidden shadow-2xl border border-tikari-green/10 rounded-2xl ">
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
