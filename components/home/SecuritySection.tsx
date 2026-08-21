import { Eye, ShieldCheck, Lock, UserCheck, AlertTriangle, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function SecuritySection() {
  const securityItems = [
    {
      title: "Four-eyes principle",
      desc: "Every financial operation goes through maker-checker approval. No single user can initiate and approve the same transaction, reducing operational and compliance risks under COBAC supervision.",
      icon: UserCheck
    },
    {
      title: "Immutable audit trail",
      desc: "Every user action modifying data is logged with timestamp, user ID, IP address, and complete before and after state. Instantly exportable for COBAC regulatory audits and internal Shariah Board reviews.",
      icon: ShieldCheck
    },
    {
      title: "Granular RBAC",
      desc: "14 pre-built banking roles including System Admin, Branch Manager, Credit Officer, Shariah Compliance Officer, Internal Shariah Auditor, ACE Member, Teller, and Agent Banking Representative with customizable permission controls.",
      icon: Lock
    },
    {
      title: "Sensitive data controls",
      desc: "CNI (Carte Nationale d'Identité), Passport, and account details are masked by default. Reveal operations require specific privileges, are logged to audit trails, and auto-hide after 30 seconds.",
      icon: Eye
    },
    {
      title: "AML/CFT monitoring",
      desc: "Real-time transaction compliance rules for velocity, amount anomaly, structuring, dormant account activity, PEP screening, and sanctions lists in accordance with CEMAC directives and GABAC recommendations.",
      icon: AlertTriangle
    },
    {
      title: "Regulatory compliance posture",
      desc: "Capital adequacy ratio metrics, liquidity ratio alerts, large exposure tracking, FOGADAC premium submissions, and COBAC prudential return logs visible in real time to authorized compliance officers.",
      icon: BarChart3
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 px-6 bg-white border-b border-tikari-green/10">
      <div className="max-w-7xl mx-auto space-y-14 lg:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center px-3.5 py-1.5 bg-tikari-gold/10 border border-tikari-gold/30">
            <span className="text-[11px] uppercase tracking-[0.15em] text-tikari-gold-dark font-semibold">Security & Control</span>
          </div>
          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-tikari-green-dark leading-[1.15] tracking-tight">
            Audit-ready from day one
          </h2>
          <p className="text-[15px] lg:text-[17px] text-tikari-sage leading-relaxed max-w-2xl mx-auto">
            Protect your institution with comprehensive, banking-grade security and Shariah-compliant audit trails designed to withstand strict COBAC regulatory review.
          </p>
        </div>

        {/* Image and Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[520px] order-2 lg:order-1">
            <div className="absolute inset-0 bg-tikari-green/5"></div>
            <Image
              src="/bnw-muslim.jpg"
              alt="COBAC compliance and regulatory audit readiness"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tikari-green-dark/90 to-transparent p-6">
              <p className="text-sm text-white/90 leading-relaxed">
                COBAC-compliant audit trails and Shariah Board governance workflows built into every transaction
              </p>
            </div>
          </div>

          {/* Security Items */}
          <div className="grid gap-5 order-1 lg:order-2">
            {securityItems.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 lg:p-7 bg-tikari-cream-light/50 border border-tikari-green/[0.08] hover:border-tikari-green/[0.15] hover:bg-white transition-all duration-300 flex gap-5 group"
              >
                <div className="w-12 h-12 bg-tikari-green/[0.08] border border-tikari-green/[0.12] flex items-center justify-center text-tikari-green shrink-0 group-hover:bg-tikari-green/[0.12] group-hover:border-tikari-green/[0.2] transition-all duration-300">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[16px] font-bold text-tikari-green-dark leading-snug">{item.title}</h3>
                  <p className="text-[13px] text-tikari-sage leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
