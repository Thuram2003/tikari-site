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

export default function AdministrationPage() {
  const sections = [
    {
      id: "user-management",
      title: "User & Role Management",
      subtitle: "Hierarchical user access control with role-based permissions",
      icon: Users,
      color: "bg-gradient-to-br from-tikari-green-dark to-tikari-green",
      image: "/people.jpg",
      features: [
        {
          title: "User Creation & Profiles",
          description: "Create staff users with personal details, contact information, and employment status tracking",
          icon: UserGear
        },
        {
          title: "Role-Based Access Control",
          description: "Pre-defined roles (Teller, Branch Manager, Shariah Officer, Auditor) with granular permissions",
          icon: ShieldCheck
        },
        {
          title: "Branch & Department Assignment",
          description: "Assign users to specific branches and departments with multi-branch access for supervisors",
          icon: Buildings
        },
        {
          title: "Password Policy Enforcement",
          description: "Configurable password complexity, expiration, and lockout policies per COBAC security guidelines",
          icon: Lock
        },
        {
          title: "Session Management",
          description: "Active session monitoring with idle timeout, forced logout, and concurrent session limits",
          icon: Clock
        },
        {
          title: "Audit Trail Logging",
          description: "Complete user activity log including login/logout, transactions, and configuration changes",
          icon: ClipboardText
        }
      ]
    },
    {
      id: "system-configuration",
      title: "System Configuration & Parameters",
      subtitle: "Core system settings for Islamic banking operations",
      icon: GearSix,
      color: "bg-gradient-to-br from-tikari-gold/90 to-tikari-gold/70",
      image: "/personOffice.jpg",
      features: [
        {
          title: "Working Days Calendar",
          description: "Configure bank working days, public holidays in Cameroon, and weekend days for transaction processing",
          icon: CalendarCheck
        },
        {
          title: "Transaction Limits",
          description: "Set daily transaction limits by customer tier, product type, and channel (branch, agent, mobile)",
          icon: ShieldCheck
        },
        {
          title: "Profit Rate Configuration",
          description: "Maintain profit rate benchmarks for Murabaha, Mudarabah, and Ijara products with historical tracking",
          icon: ChartLineUp
        },
        {
          title: "Currency & Exchange Rates",
          description: "Primary FCFA accounting with foreign currency support and BEAC exchange rate synchronization",
          icon: CurrencyCircleDollar
        },
        {
          title: "Fee & Charge Templates",
          description: "Configure bank fees for account maintenance, transfers, SMS alerts, and Shariah-compliant service charges",
          icon: Receipt
        },
        {
          title: "Notification Templates",
          description: "SMS and email templates for transaction alerts, payment reminders, and Shariah compliance notices",
          icon: ClipboardText
        }
      ]
    },
    {
      id: "branch-management",
      title: "Branch & Network Management",
      subtitle: "Multi-branch setup with centralized control and local autonomy",
      icon: Buildings,
      color: "bg-tikari-green-dark text-white",
      image: "/meeting.jpg",
      features: [
        {
          title: "Branch Registration",
          description: "Register branches with full address, BEAC interbank codes, and COBAC branch registration numbers",
          icon: Buildings
        },
        {
          title: "Branch Hierarchies",
          description: "Define head office, regional offices, and branch structure with reporting relationships",
          icon: ListChecks
        },
        {
          title: "Branch-Level Limits",
          description: "Set lending limits, cash holding limits, and approval thresholds per branch",
          icon: ShieldCheck
        },
        {
          title: "Inter-Branch Accounting",
          description: "Automated inter-branch GL postings for fund transfers and central treasury allocation",
          icon: ArrowsClockwise
        },
        {
          title: "Branch Performance Tracking",
          description: "Compare branch performance on deposits, financing disbursements, and profitability metrics",
          icon: ChartLineUp
        },
        {
          title: "Branch Activation/Suspension",
          description: "Activate new branches and temporarily suspend branches for maintenance or regulatory issues",
          icon: CheckCircle
        }
      ]
    },
    {
      id: "eod-processes",
      title: "End-of-Day (EOD) Processes",
      subtitle: "Automated batch processes for daily close and account updates",
      icon: CalendarCheck,
      color: "bg-white",
      image: "/bnw-muslim.jpg",
      features: [
        {
          title: "EOTI (End of Transaction Input)",
          description: "Mark end of customer-facing transactions with final batch cutoff time and transaction freeze",
          icon: Clock
        },
        {
          title: "Profit Accrual Calculation",
          description: "Daily profit accrual for Mudarabah investment accounts with pool-wise profit allocation",
          icon: Calculator
        },
        {
          title: "Markup Income Recognition",
          description: "Accrue Murabaha and Ijara markup income with effective interest rate method",
          icon: ChartLineUp
        },
        {
          title: "Account Maintenance Charges",
          description: "Auto-debit monthly account maintenance fees from customer accounts per product terms",
          icon: Receipt
        },
        {
          title: "Dormancy Marking",
          description: "Automated flagging of accounts with no transactions beyond dormancy threshold period",
          icon: Warning
        },
        {
          title: "EOFI (End of Financial Input)",
          description: "Complete day-end with trial balance generation, backup, and open next business day",
          icon: CheckCircle
        }
      ]
    },
    {
      id: "backup-archival",
      title: "Backup & Data Archival",
      subtitle: "Automated backup and regulatory data retention compliance",
      icon: Database,
      color: "bg-tikari-sage-light/40",
      image: "/handshake.jpg",
      features: [
        {
          title: "Automated Daily Backup",
          description: "Scheduled full and incremental database backups with encryption and remote storage",
          icon: HardDrives
        },
        {
          title: "Transaction Archival",
          description: "Move closed transactions older than 2 years to archival storage while maintaining query access",
          icon: FileArchive
        },
        {
          title: "Disaster Recovery Plan",
          description: "Documented DR procedures with backup restoration testing and recovery time objectives (RTO)",
          icon: ArrowsClockwise
        },
        {
          title: "10-Year Retention Policy",
          description: "COBAC-mandated 10-year retention of all customer records, contracts, and financial statements",
          icon: CalendarCheck
        },
        {
          title: "Backup Verification",
          description: "Automated backup integrity checks with monthly test restorations to verify recoverability",
          icon: CheckCircle
        },
        {
          title: "Audit Log Archival",
          description: "Secure long-term storage of audit logs for internal audits and COBAC inspections",
          icon: ClipboardText
        }
      ]
    },
    {
      id: "monitoring-alerts",
      title: "System Monitoring & Alerts",
      subtitle: "Real-time system health monitoring and proactive alerting",
      icon: ChartLineUp,
      color: "bg-tikari-gold/8",
      image: "/compliance.jpg",
      features: [
        {
          title: "System Performance Metrics",
          description: "Monitor CPU, memory, disk usage, and database performance with threshold-based alerts",
          icon: ChartLineUp
        },
        {
          title: "Transaction Volume Monitoring",
          description: "Track hourly transaction volumes with anomaly detection for unusual spikes or drops",
          icon: ListChecks
        },
        {
          title: "Failed Transaction Alerts",
          description: "Real-time notifications for failed transactions, timeout errors, and integration failures",
          icon: Warning
        },
        {
          title: "EOD Process Monitoring",
          description: "Dashboard showing EOD batch job status, completion time, and exception handling",
          icon: CalendarCheck
        },
        {
          title: "License & Certificate Expiry",
          description: "Proactive alerts for expiring SSL certificates, software licenses, and COBAC approvals",
          icon: Clock
        },
        {
          title: "User Activity Anomalies",
          description: "Detect unusual user behavior including off-hours access, excessive failed logins, and privilege misuse",
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
              Administration & EOD Processes
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/85 leading-relaxed max-w-3xl">
              Complete system administration with user management, branch setup, end-of-day batch processes, automated backups, and real-time monitoring. Built for COBAC compliance and multi-branch Islamic banking operations in FCFA.
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
            See Administration in Action
          </h2>
          <p className="text-[16px] lg:text-[18px] text-tikari-green-dark/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TIKARI handles user management, system configuration, EOD batch processes, and multi-branch administration for Cameroon's Islamic banking operations.
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
