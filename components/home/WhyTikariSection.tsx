import { ArrowRight, BookOpen, Layout, ShieldAlert, Award, Globe2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui";

export default function WhyTikariSection() {
  const pillars = [
    {
      title: "Built from the ledger up",
      desc: "The AAOIFI chart of accounts, deferred Murabaha income recognition (FAS 2), and Mudarabah profit distribution (FAS 3) are not add-ons. They are the foundation. Conventional banking GL assumptions do not exist here.",
      icon: BookOpen
    },
    {
      title: "COBAC-native reporting",
      desc: "Statement of Financial Position, Prudential Returns, Capital Adequacy, Liquidity Ratio, credit bureau submission, and FOGADAC premium calculations. All generated from the live ledger on demand. Not from exports and formulas.",
      icon: Layout
    },
    {
      title: "Shariah Governance workflow",
      desc: "Product submission, Shariah Board review, Fatwa issuance, and compliance tracking. The Fatwa repository is searchable and linked to every active financing product. Dissenting opinions and approval chains are auditable.",
      icon: Award
    },
    {
      title: "Four-eyes on everything",
      desc: "Maker-checker is not a bolt-on permission flag. It is the operating model. Every account opening, financing disbursement, fund transfer, and GL journal entry flows through a structured approval chain with full audit trail.",
      icon: ShieldAlert
    },
    {
      title: "Designed for Cameroon & CEMAC",
      desc: "CNI and Passport verification. BEAC NUBAN standard account numbers. SYSTAC and SYGMA bank transfers. Njangi and Tontine groups. Agent banking. French and English localization. FCFA as the native currency.",
      icon: Globe2
    },
    {
      title: "Migration path from legacy cores",
      desc: "We have helped institutions move from Symphonie, Delta, and legacy systems with zero data loss and no downtime during business hours. We handle the data mapping. Your team handles customer communication.",
      icon: RefreshCw
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 px-6 bg-tikari-green-dark text-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tikari-green opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto space-y-14 lg:space-y-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center px-3.5 py-1.5 bg-tikari-gold/10 border border-tikari-gold/30 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-[0.15em] text-tikari-gold font-semibold">Why TIKARI</span>
          </div>
          <h2 className="text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight">
            Shariah-first. Not Shariah-retrofitted.
          </h2>
          <p className="text-[15px] lg:text-[17px] text-white/75 leading-relaxed max-w-2xl mx-auto">
            The difference between a platform built for non-interest banking and one adapted for it shows up everywhere. In the ledger, in the compliance workflow, and in the audit trail.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-8 lg:p-9 space-y-5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-tikari-gold/[0.08] border border-tikari-gold/[0.15] flex items-center justify-center text-tikari-gold group-hover:bg-tikari-gold/[0.12] group-hover:border-tikari-gold/[0.25] transition-all duration-300">
                <p.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="space-y-3">
                <h3 className="text-[17px] font-bold text-white leading-snug tracking-tight">{p.title}</h3>
                <p className="text-[14px] text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Section - Redesigned */}
        <div className="max-w-6xl mx-auto pt-6">
          <div className="bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-sm border border-tikari-gold/[0.15] p-10 lg:p-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
              <div className="space-y-3">
                <span className="text-[10px] text-white/45 uppercase tracking-[0.12em] block font-semibold">
                  EOD Batch Target
                </span>
                <p className="text-[2.75rem] lg:text-5xl font-bold text-tikari-gold font-mono tracking-tight leading-none">
                  &lt;10m
                </p>
                <p className="text-[11px] text-white/50 leading-snug pt-1">
                  GL close, profit recognition, dormancy checks
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] text-white/45 uppercase tracking-[0.12em] block font-semibold">
                  Functional Modules
                </span>
                <p className="text-[2.75rem] lg:text-5xl font-bold text-tikari-gold font-mono tracking-tight leading-none">
                  70+
                </p>
                <p className="text-[11px] text-white/50 leading-snug pt-1">
                  From KYC to Zakat calculation
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] text-white/45 uppercase tracking-[0.12em] block font-semibold">
                  COBAC Returns
                </span>
                <p className="text-[2.75rem] lg:text-5xl font-bold text-tikari-gold font-mono tracking-tight leading-none">
                  12
                </p>
                <p className="text-[11px] text-white/50 leading-snug pt-1">
                  Generated directly from the GL
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] text-white/45 uppercase tracking-[0.12em] block font-semibold">
                  Financing Types
                </span>
                <p className="text-[2.75rem] lg:text-5xl font-bold text-tikari-gold font-mono tracking-tight leading-none">
                  6
                </p>
                <p className="text-[11px] text-white/50 leading-snug pt-1">
                  Murabaha, Mudarabah, Musharakah, Ijara, Salam, Istisna
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
