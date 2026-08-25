"use client";

import { 
  ArrowRight, 
  ShieldCheck,
  Scales,
  FileText,
  ClipboardText,
  MagnifyingGlass,
  Certificate,
  ChartBar,
  FolderOpen,
  UserCheck,
  Bank,
  Warning,
  CheckCircle,
  Clock,
  ListChecks,
  Stamp,
  Eye,
  Books,
  Gavel
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function CompliancePage() {
  const t = useTranslations("platform.compliance");
  const sections = [
    {
      id: "shariah-board",
      title: t("sections.shariahBoard.title"),
      subtitle: t("sections.shariahBoard.subtitle"),
      icon: Scales,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/muslim-meeting.jpg",
      features: [
        {
          title: t("sections.shariahBoard.features.composition.title"),
          description: t("sections.shariahBoard.features.composition.description"),
          icon: Certificate
        },
        {
          title: t("sections.shariahBoard.features.fatwaWorkflow.title"),
          description: t("sections.shariahBoard.features.fatwaWorkflow.description"),
          icon: Gavel
        },
        {
          title: t("sections.shariahBoard.features.productApproval.title"),
          description: t("sections.shariahBoard.features.productApproval.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.shariahBoard.features.quarterlyReports.title"),
          description: t("sections.shariahBoard.features.quarterlyReports.description"),
          icon: FileText
        },
        {
          title: t("sections.shariahBoard.features.annualAudit.title"),
          description: t("sections.shariahBoard.features.annualAudit.description"),
          icon: MagnifyingGlass
        },
        {
          title: t("sections.shariahBoard.features.fatwaDatabase.title"),
          description: t("sections.shariahBoard.features.fatwaDatabase.description"),
          icon: Books
        }
      ]
    },
    {
      id: "internal-shariah-audit",
      title: t("sections.internalAudit.title"),
      subtitle: t("sections.internalAudit.subtitle"),
      icon: MagnifyingGlass,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/compliance.jpg",
      features: [
        {
          title: t("sections.internalAudit.features.sampling.title"),
          description: t("sections.internalAudit.features.sampling.description"),
          icon: ListChecks
        },
        {
          title: t("sections.internalAudit.features.contractReview.title"),
          description: t("sections.internalAudit.features.contractReview.description"),
          icon: FileText
        },
        {
          title: t("sections.internalAudit.features.prohibitedRevenue.title"),
          description: t("sections.internalAudit.features.prohibitedRevenue.description"),
          icon: Warning
        },
        {
          title: t("sections.internalAudit.features.auditTrail.title"),
          description: t("sections.internalAudit.features.auditTrail.description"),
          icon: Clock
        },
        {
          title: t("sections.internalAudit.features.nonCompliance.title"),
          description: t("sections.internalAudit.features.nonCompliance.description"),
          icon: ClipboardText
        },
        {
          title: t("sections.internalAudit.features.purification.title"),
          description: t("sections.internalAudit.features.purification.description"),
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "cobac-compliance",
      title: t("sections.cobacCompliance.title"),
      subtitle: t("sections.cobacCompliance.subtitle"),
      icon: Bank,
      color: "bg-tikari-green-dark text-white",
      image: "/bnw-muslim.jpg",
      features: [
        {
          title: t("sections.cobacCompliance.features.capitalAdequacy.title"),
          description: t("sections.cobacCompliance.features.capitalAdequacy.description"),
          icon: ChartBar
        },
        {
          title: t("sections.cobacCompliance.features.liquidityRatios.title"),
          description: t("sections.cobacCompliance.features.liquidityRatios.description"),
          icon: Bank
        },
        {
          title: t("sections.cobacCompliance.features.largeExposure.title"),
          description: t("sections.cobacCompliance.features.largeExposure.description"),
          icon: Warning
        },
        {
          title: t("sections.cobacCompliance.features.returnFiling.title"),
          description: t("sections.cobacCompliance.features.returnFiling.description"),
          icon: FileText
        },
        {
          title: t("sections.cobacCompliance.features.provisioning.title"),
          description: t("sections.cobacCompliance.features.provisioning.description"),
          icon: Scales
        },
        {
          title: t("sections.cobacCompliance.features.riskReports.title"),
          description: t("sections.cobacCompliance.features.riskReports.description"),
          icon: ClipboardText
        }
      ]
    },
    {
      id: "aml-cft",
      title: t("sections.amlCft.title"),
      subtitle: t("sections.amlCft.subtitle"),
      icon: ShieldCheck,
      color: "bg-white",
      image: "/people.jpg",
      features: [
        {
          title: t("sections.amlCft.features.cdd.title"),
          description: t("sections.amlCft.features.cdd.description"),
          icon: UserCheck
        },
        {
          title: t("sections.amlCft.features.transactionMonitoring.title"),
          description: t("sections.amlCft.features.transactionMonitoring.description"),
          icon: Eye
        },
        {
          title: t("sections.amlCft.features.sanctionsScreening.title"),
          description: t("sections.amlCft.features.sanctionsScreening.description"),
          icon: Warning
        },
        {
          title: t("sections.amlCft.features.str.title"),
          description: t("sections.amlCft.features.str.description"),
          icon: FileText
        },
        {
          title: t("sections.amlCft.features.wireTransfer.title"),
          description: t("sections.amlCft.features.wireTransfer.description"),
          icon: Bank
        },
        {
          title: t("sections.amlCft.features.riskScoring.title"),
          description: t("sections.amlCft.features.riskScoring.description"),
          icon: ChartBar
        }
      ]
    },
    {
      id: "document-management",
      title: t("sections.documentManagement.title"),
      subtitle: t("sections.documentManagement.subtitle"),
      icon: FolderOpen,
      color: "bg-tikari-sage-light/40",
      image: "/handshake.jpg",
      features: [
        {
          title: t("sections.documentManagement.features.digitalVault.title"),
          description: t("sections.documentManagement.features.digitalVault.description"),
          icon: FolderOpen
        },
        {
          title: t("sections.documentManagement.features.templateLibrary.title"),
          description: t("sections.documentManagement.features.templateLibrary.description"),
          icon: FileText
        },
        {
          title: t("sections.documentManagement.features.consentRecords.title"),
          description: t("sections.documentManagement.features.consentRecords.description"),
          icon: Certificate
        },
        {
          title: t("sections.documentManagement.features.complianceTracking.title"),
          description: t("sections.documentManagement.features.complianceTracking.description"),
          icon: ListChecks
        },
        {
          title: t("sections.documentManagement.features.retentionPolicy.title"),
          description: t("sections.documentManagement.features.retentionPolicy.description"),
          icon: Clock
        },
        {
          title: t("sections.documentManagement.features.auditRetrieval.title"),
          description: t("sections.documentManagement.features.auditRetrieval.description"),
          icon: MagnifyingGlass
        }
      ]
    },
    {
      id: "reporting-analytics",
      title: t("sections.reportingAnalytics.title"),
      subtitle: t("sections.reportingAnalytics.subtitle"),
      icon: ChartBar,
      color: "bg-tikari-gold/8",
      image: "/meeting.jpg",
      features: [
        {
          title: t("sections.reportingAnalytics.features.dashboard.title"),
          description: t("sections.reportingAnalytics.features.dashboard.description"),
          icon: ChartBar
        },
        {
          title: t("sections.reportingAnalytics.features.aaoifiStatements.title"),
          description: t("sections.reportingAnalytics.features.aaoifiStatements.description"),
          icon: FileText
        },
        {
          title: t("sections.reportingAnalytics.features.cobacGenerator.title"),
          description: t("sections.reportingAnalytics.features.cobacGenerator.description"),
          icon: Bank
        },
        {
          title: t("sections.reportingAnalytics.features.ssbReport.title"),
          description: t("sections.reportingAnalytics.features.ssbReport.description"),
          icon: Books
        },
        {
          title: t("sections.reportingAnalytics.features.trendAnalysis.title"),
          description: t("sections.reportingAnalytics.features.trendAnalysis.description"),
          icon: ChartBar
        },
        {
          title: t("sections.reportingAnalytics.features.customBuilder.title"),
          description: t("sections.reportingAnalytics.features.customBuilder.description"),
          icon: ClipboardText
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
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
            >
              {t("cta.scheduleDemo")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="/platform"
              className="group bg-white/90 text-tikari-green-dark hover:bg-white border-2 border-tikari-green-dark/20 rounded-none"
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
