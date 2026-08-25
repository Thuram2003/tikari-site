"use client";

import { 
  ArrowRight, 
  ChartBar,
  ListNumbers,
  BookOpen,
  Receipt,
  FileText,
  ChartLineUp,
  Bank,
  Coins,
  Calculator,
  Calendar,
  PresentationChart,
  Scales,
  CheckCircle,
  TrendUp,
  CurrencyCircleDollar,
  Notebook,
  ClipboardText,
  Archive
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function GLReportingPage() {
  const t = useTranslations("platform.glReporting");
  const sections = [
    {
      id: "chart-of-accounts",
      title: t("sections.chartOfAccounts.title"),
      subtitle: t("sections.chartOfAccounts.subtitle"),
      icon: ListNumbers,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/personOffice.jpg",
      features: [
        {
          title: t("sections.chartOfAccounts.features.cobacCoa.title"),
          description: t("sections.chartOfAccounts.features.cobacCoa.description"),
          icon: ListNumbers
        },
        {
          title: t("sections.chartOfAccounts.features.islamicExtensions.title"),
          description: t("sections.chartOfAccounts.features.islamicExtensions.description"),
          icon: Bank
        },
        {
          title: t("sections.chartOfAccounts.features.multiCurrency.title"),
          description: t("sections.chartOfAccounts.features.multiCurrency.description"),
          icon: CurrencyCircleDollar
        },
        {
          title: t("sections.chartOfAccounts.features.hierarchies.title"),
          description: t("sections.chartOfAccounts.features.hierarchies.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.chartOfAccounts.features.profitPools.title"),
          description: t("sections.chartOfAccounts.features.profitPools.description"),
          icon: Coins
        },
        {
          title: t("sections.chartOfAccounts.features.customCreation.title"),
          description: t("sections.chartOfAccounts.features.customCreation.description"),
          icon: CheckCircle
        }
      ]
    },
    {
      id: "journal-entries",
      title: t("sections.journalEntries.title"),
      subtitle: t("sections.journalEntries.subtitle"),
      icon: BookOpen,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/meeting.jpg",
      features: [
        {
          title: t("sections.journalEntries.features.automatedPosting.title"),
          description: t("sections.journalEntries.features.automatedPosting.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.journalEntries.features.manualEntry.title"),
          description: t("sections.journalEntries.features.manualEntry.description"),
          icon: Notebook
        },
        {
          title: t("sections.journalEntries.features.makerChecker.title"),
          description: t("sections.journalEntries.features.makerChecker.description"),
          icon: Scales
        },
        {
          title: t("sections.journalEntries.features.recurring.title"),
          description: t("sections.journalEntries.features.recurring.description"),
          icon: Calendar
        },
        {
          title: t("sections.journalEntries.features.reversal.title"),
          description: t("sections.journalEntries.features.reversal.description"),
          icon: Archive
        },
        {
          title: t("sections.journalEntries.features.batchPosting.title"),
          description: t("sections.journalEntries.features.batchPosting.description"),
          icon: ClipboardText
        }
      ]
    },
    {
      id: "financial-statements",
      title: t("sections.financialStatements.title"),
      subtitle: t("sections.financialStatements.subtitle"),
      icon: PresentationChart,
      color: "bg-tikari-green-dark text-white",
      image: "/bnw-muslim.jpg",
      features: [
        {
          title: t("sections.financialStatements.features.position.title"),
          description: t("sections.financialStatements.features.position.description"),
          icon: FileText
        },
        {
          title: t("sections.financialStatements.features.income.title"),
          description: t("sections.financialStatements.features.income.description"),
          icon: ChartLineUp
        },
        {
          title: t("sections.financialStatements.features.cashFlow.title"),
          description: t("sections.financialStatements.features.cashFlow.description"),
          icon: CurrencyCircleDollar
        },
        {
          title: t("sections.financialStatements.features.equity.title"),
          description: t("sections.financialStatements.features.equity.description"),
          icon: TrendUp
        },
        {
          title: t("sections.financialStatements.features.notes.title"),
          description: t("sections.financialStatements.features.notes.description"),
          icon: ClipboardText
        },
        {
          title: t("sections.financialStatements.features.comparative.title"),
          description: t("sections.financialStatements.features.comparative.description"),
          icon: ChartBar
        }
      ]
    },
    {
      id: "ifrs-aaoifi",
      title: t("sections.ifrsAaoifi.title"),
      subtitle: t("sections.ifrsAaoifi.subtitle"),
      icon: CheckCircle,
      color: "bg-white",
      image: "/handshake.jpg",
      features: [
        {
          title: t("sections.ifrsAaoifi.features.ifrs9.title"),
          description: t("sections.ifrsAaoifi.features.ifrs9.description"),
          icon: Bank
        },
        {
          title: t("sections.ifrsAaoifi.features.aaoifiMapping.title"),
          description: t("sections.ifrsAaoifi.features.aaoifiMapping.description"),
          icon: Scales
        },
        {
          title: t("sections.ifrsAaoifi.features.fairValue.title"),
          description: t("sections.ifrsAaoifi.features.fairValue.description"),
          icon: TrendUp
        },
        {
          title: t("sections.ifrsAaoifi.features.revenue.title"),
          description: t("sections.ifrsAaoifi.features.revenue.description"),
          icon: Receipt
        },
        {
          title: t("sections.ifrsAaoifi.features.leaseAccounting.title"),
          description: t("sections.ifrsAaoifi.features.leaseAccounting.description"),
          icon: FileText
        },
        {
          title: t("sections.ifrsAaoifi.features.checklists.title"),
          description: t("sections.ifrsAaoifi.features.checklists.description"),
          icon: CheckCircle
        }
      ]
    },
    {
      id: "profit-distribution",
      title: t("sections.profitDistribution.title"),
      subtitle: t("sections.profitDistribution.subtitle"),
      icon: Coins,
      color: "bg-tikari-sage-light/40",
      image: "/money.jpg",
      features: [
        {
          title: t("sections.profitDistribution.features.poolCalculation.title"),
          description: t("sections.profitDistribution.features.poolCalculation.description"),
          icon: Calculator
        },
        {
          title: t("sections.profitDistribution.features.mudaribShare.title"),
          description: t("sections.profitDistribution.features.mudaribShare.description"),
          icon: Scales
        },
        {
          title: t("sections.profitDistribution.features.investorDistribution.title"),
          description: t("sections.profitDistribution.features.investorDistribution.description"),
          icon: Coins
        },
        {
          title: t("sections.profitDistribution.features.per.title"),
          description: t("sections.profitDistribution.features.per.description"),
          icon: Bank
        },
        {
          title: t("sections.profitDistribution.features.irr.title"),
          description: t("sections.profitDistribution.features.irr.description"),
          icon: CheckCircle
        },
        {
          title: t("sections.profitDistribution.features.reports.title"),
          description: t("sections.profitDistribution.features.reports.description"),
          icon: ClipboardText
        }
      ]
    },
    {
      id: "regulatory-reporting",
      title: t("sections.regulatoryReporting.title"),
      subtitle: t("sections.regulatoryReporting.subtitle"),
      icon: ChartBar,
      color: "bg-tikari-gold/8",
      image: "/muslim-woman.jpg",
      features: [
        {
          title: t("sections.regulatoryReporting.features.cobacReturns.title"),
          description: t("sections.regulatoryReporting.features.cobacReturns.description"),
          icon: FileText
        },
        {
          title: t("sections.regulatoryReporting.features.trialBalance.title"),
          description: t("sections.regulatoryReporting.features.trialBalance.description"),
          icon: ListNumbers
        },
        {
          title: t("sections.regulatoryReporting.features.glInquiry.title"),
          description: t("sections.regulatoryReporting.features.glInquiry.description"),
          icon: BookOpen
        },
        {
          title: t("sections.regulatoryReporting.features.budgetAnalysis.title"),
          description: t("sections.regulatoryReporting.features.budgetAnalysis.description"),
          icon: ChartBar
        },
        {
          title: t("sections.regulatoryReporting.features.branchPl.title"),
          description: t("sections.regulatoryReporting.features.branchPl.description"),
          icon: Bank
        },
        {
          title: t("sections.regulatoryReporting.features.dashboards.title"),
          description: t("sections.regulatoryReporting.features.dashboards.description"),
          icon: PresentationChart
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
