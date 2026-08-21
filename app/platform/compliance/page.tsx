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

export default function CompliancePage() {
  const sections = [
    {
      id: "shariah-board",
      title: "Shariah Supervisory Board (SSB)",
      subtitle: "Independent Shariah governance with fatwa management and audit oversight",
      icon: Scales,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/muslim-meeting.jpg",
      features: [
        {
          title: "SSB Composition & Registration",
          description: "Multi-scholar board with COBAC registration, qualification tracking, and term management",
          icon: Certificate
        },
        {
          title: "Fatwa Issuance Workflow",
          description: "Structured fatwa request, deliberation, and approval process with digital signature and archiving",
          icon: Gavel
        },
        {
          title: "Product Approval Process",
          description: "Pre-launch Shariah compliance review for all new products with detailed product specification documents",
          icon: CheckCircle
        },
        {
          title: "Quarterly SSB Reports",
          description: "Automated quarterly compliance reports to SSB with transaction sampling and exception alerts",
          icon: FileText
        },
        {
          title: "Annual Shariah Audit",
          description: "Year-end comprehensive audit of all transactions, contracts, and profit distribution mechanisms",
          icon: MagnifyingGlass
        },
        {
          title: "Fatwa Database",
          description: "Searchable repository of all fatwas issued with cross-references to AAOIFI standards",
          icon: Books
        }
      ]
    },
    {
      id: "internal-shariah-audit",
      title: "Internal Shariah Audit",
      subtitle: "Continuous monitoring and testing of Shariah compliance across all operations",
      icon: MagnifyingGlass,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/compliance.jpg",
      features: [
        {
          title: "Transaction Sampling",
          description: "Statistical sampling of financing contracts, deposits, and treasury transactions for compliance review",
          icon: ListChecks
        },
        {
          title: "Contract Review Engine",
          description: "Automated validation of contract terms against Shariah principles and SSB-approved templates",
          icon: FileText
        },
        {
          title: "Prohibited Revenue Detection",
          description: "Real-time flagging of interest-based income, speculative trades, and haram sector exposure",
          icon: Warning
        },
        {
          title: "Audit Trail Tracking",
          description: "Immutable audit log of all transactions with user actions, timestamps, and approval chains",
          icon: Clock
        },
        {
          title: "Non-Compliance Reporting",
          description: "Exception reporting with root cause analysis, remediation plans, and escalation to SSB",
          icon: ClipboardText
        },
        {
          title: "Purification Calculation",
          description: "Automated calculation of non-Shariah-compliant income for charity distribution",
          icon: ShieldCheck
        }
      ]
    },
    {
      id: "cobac-compliance",
      title: "COBAC Regulatory Compliance",
      subtitle: "Full adherence to CEMAC prudential norms and COBAC reporting requirements",
      icon: Bank,
      color: "bg-tikari-green-dark text-white",
      image: "/bnw-muslim.jpg",
      features: [
        {
          title: "Capital Adequacy Monitoring",
          description: "Real-time CAR calculation with Tier 1/Tier 2 capital tracking and COBAC minimum ratio enforcement",
          icon: ChartBar
        },
        {
          title: "Liquidity Ratios (LCR & NSFR)",
          description: "Daily liquidity coverage ratio and net stable funding ratio monitoring with buffer alerts",
          icon: Bank
        },
        {
          title: "Large Exposure Limits",
          description: "Automatic tracking of single-borrower and group exposure against COBAC concentration limits",
          icon: Warning
        },
        {
          title: "COBAC Return Filing",
          description: "Automated generation of monthly, quarterly, and annual regulatory returns to BEAC",
          icon: FileText
        },
        {
          title: "Provisioning & NPL Classification",
          description: "COBAC-compliant loan classification (Pass, Special Mention, Substandard, Doubtful, Loss) with provision calculation",
          icon: Scales
        },
        {
          title: "Governance & Risk Reports",
          description: "Board-level risk reports covering credit, market, operational, and Shariah non-compliance risks",
          icon: ClipboardText
        }
      ]
    },
    {
      id: "aml-cft",
      title: "AML/CFT & GABAC Compliance",
      subtitle: "Anti-money laundering and counter-terrorism financing controls",
      icon: ShieldCheck,
      color: "bg-white",
      image: "/people.jpg",
      features: [
        {
          title: "Customer Due Diligence (CDD)",
          description: "Enhanced due diligence for high-risk customers with PEP screening and beneficial ownership identification",
          icon: UserCheck
        },
        {
          title: "Transaction Monitoring",
          description: "Real-time screening of transactions against FCFA thresholds with suspicious activity flagging",
          icon: Eye
        },
        {
          title: "GABAC Sanctions Screening",
          description: "Automated screening against CEMAC-wide sanctions lists and UN consolidated terrorism list",
          icon: Warning
        },
        {
          title: "Suspicious Transaction Reports",
          description: "STR filing workflow with case management and secure submission to ANIF Cameroon",
          icon: FileText
        },
        {
          title: "Wire Transfer Monitoring",
          description: "Cross-border transfer screening with originator and beneficiary information validation",
          icon: Bank
        },
        {
          title: "AML Risk Scoring",
          description: "Customer risk rating based on occupation, transaction patterns, geography, and product usage",
          icon: ChartBar
        }
      ]
    },
    {
      id: "document-management",
      title: "Contract & Document Management",
      subtitle: "Digital repository for all Islamic finance contracts and compliance documents",
      icon: FolderOpen,
      color: "bg-tikari-sage-light/40",
      image: "/handshake.jpg",
      features: [
        {
          title: "Digital Contract Vault",
          description: "Secure storage of all financing contracts with version control and e-signature integration",
          icon: FolderOpen
        },
        {
          title: "Template Library",
          description: "SSB-approved contract templates for Murabaha, Ijara, Mudarabah, and Musharakah with variable fields",
          icon: FileText
        },
        {
          title: "Customer Consent Records",
          description: "Digital archiving of customer consent forms, disclosures, and acknowledgments per COBAC requirements",
          icon: Certificate
        },
        {
          title: "Compliance Document Tracking",
          description: "Centralized tracking of licenses, board resolutions, SSB fatwas, and regulatory approvals",
          icon: ListChecks
        },
        {
          title: "Retention Policy Automation",
          description: "Automated enforcement of 10-year document retention policy with secure archival and deletion",
          icon: Clock
        },
        {
          title: "Audit Trail Retrieval",
          description: "Quick retrieval of contract history and amendment trail for internal audits and COBAC inspections",
          icon: MagnifyingGlass
        }
      ]
    },
    {
      id: "reporting-analytics",
      title: "Compliance Reporting & Analytics",
      subtitle: "Real-time dashboards and regulatory report generation",
      icon: ChartBar,
      color: "bg-tikari-gold/8",
      image: "/meeting.jpg",
      features: [
        {
          title: "Real-Time Compliance Dashboard",
          description: "Executive dashboard with CAR, LCR, NPL ratio, Shariah compliance score, and red-flag alerts",
          icon: ChartBar
        },
        {
          title: "AAOIFI Financial Statements",
          description: "Automated generation of AAOIFI-compliant financial statements with profit equalization reserve disclosure",
          icon: FileText
        },
        {
          title: "COBAC Return Generator",
          description: "One-click generation of all required COBAC regulatory returns with pre-validation checks",
          icon: Bank
        },
        {
          title: "SSB Annual Report",
          description: "End-of-year Shariah compliance report with statistics on product volumes, exceptions, and purification",
          icon: Books
        },
        {
          title: "Trend Analysis",
          description: "Historical trend charts for key ratios, non-compliance events, and risk metrics",
          icon: ChartBar
        },
        {
          title: "Custom Report Builder",
          description: "Ad-hoc report builder for internal audits, COBAC queries, and management information requests",
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
              Compliance & Shariah Governance
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl">
              Independent Shariah Supervisory Board oversight, COBAC regulatory compliance, GABAC AML/CFT controls, and AAOIFI reporting standards. Built for Cameroon's Islamic banking regulatory environment.
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
            See Compliance Operations in Action
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI manages Shariah Supervisory Board operations, COBAC regulatory compliance, and GABAC AML/CFT controls for Cameroon's Islamic banking environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/demo"
              className="group bg-tikari-green-dark text-white hover:bg-tikari-green rounded-none"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="/platform"
              className="group bg-white/90 text-tikari-green-dark hover:bg-white border-2 border-tikari-green-dark/20 rounded-none"
            >
              Explore Other Modules
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
