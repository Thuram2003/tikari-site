import { ShieldCheck, Bank, CheckCircle, Lock, Globe, ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr";

export default function TrustBar() {
  const frameworks = [
    {
      title: "COBAC EMF Guidelines",
      desc: "Commission Bancaire de l'Afrique Centrale microfinance rules",
      icon: Bank
    },
    {
      title: "AAOIFI & OHADA",
      desc: "AAOIFI FAS-compliant general ledger integrated with OHADA",
      icon: CheckCircle
    },
    {
      title: "COBAC Prudential Rules",
      desc: "Capital, liquidity, and PAR thresholds monitoring",
      icon: ShieldCheck
    },
    {
      title: "FOGADAC Framework",
      desc: "Deposit insurance returns and reporting rules",
      icon: Lock
    },
    {
      title: "GIMAC & SYSTAC",
      desc: "Real-time interbank and mobile money transfers",
      icon: ArrowsLeftRight
    },
    {
      title: "Shariah Governance",
      desc: "Advisory Committee of Experts (ACE) and Fatwa oversight",
      icon: Globe
    }
  ];

  return (
    <section className="w-full bg-[#E8EFEA] border-y border-tikari-green/10 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl font-bold text-tikari-green-dark">Built to support</h3>
          <p className="text-sm text-tikari-sage">Aligned with Cameroon and the CEMAC non-interest banking framework</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {frameworks.map((item, idx) => (
            <div key={idx} className="p-6 bg-white border border-tikari-green/10 rounded-none flex items-start gap-4">
              <item.icon className="h-8 w-8 text-tikari-gold shrink-0 mt-1" weight="fill" />
              <div>
                <p className="text-sm font-bold text-tikari-green-dark">{item.title}</p>
                <p className="text-xs text-tikari-sage leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

