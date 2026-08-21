import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button, Card } from "@/components/ui";

export default function PlatformOverviewSection() {
  const modules = [
    {
      title: "Banking Operations",
      desc: "Customer and KYC, Wadiah accounts, Njangi/Tontine groups, teller operations, interbank transfers, and agent float.",
      link: "/platform/operations",
      image: "/women-market.jpg"
    },
    {
      title: "Islamic Financing",
      desc: "Murabaha, Mudarabah, Musharakah, Ijara, Sukuk, and Takaful, with built-in maker-checker and profit-sharing mechanics.",
      link: "/platform/financing",
      image: "/handshake.jpg"
    },
    {
      title: "Compliance & Shariah",
      desc: "AML/CFT screening, COBAC returns, AAOIFI GL, ACE meeting management, Fatwa repository, and sanctions/PEP checks.",
      link: "/platform/compliance",
      image: "/compliance.jpg"
    },
    {
      title: "General Ledger & Reporting",
      desc: "Trial balance, income statement, COBAC balance sheet, prudential classification, capital adequacy, all from one ledger.",
      link: "/platform",
      image: "/personOffice.jpg"
    },
    {
      title: "Agent Banking",
      desc: "Agent onboarding, float management, commission calculation, and cash-in/cash-out with real-time float adjustment.",
      link: "/platform/agent",
      image: "/mulsimwoman.jpg"
    },
    {
      title: "Administration & EOD",
      desc: "User and role management, RBAC, full audit trail, automated end-of-day batch, month-end, and year-end close.",
      link: "/platform",
      image: "/meeting.jpg"
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">The Platform</span>
          <h2 className="text-4xl md:text-5xl font-bold text-tikari-green-dark">
            One core. Every module a bank needs.
          </h2>
          <p className="text-lg text-tikari-sage leading-relaxed">
            TIKARI covers the full lifecycle of a non-interest bank, from customer onboarding and KYC through to COBAC returns and year-end Zakat calculation. Everything talks to the same GL, the same audit trail, and the same maker-checker engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((mod, idx) => (
            <Card key={idx} className="border-tikari-green/20 overflow-hidden hover:shadow-xl transition-all rounded-none flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/80 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-tikari-green-dark">{mod.title}</h3>
                  <p className="text-sm text-tikari-sage leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  href={mod.link} 
                  className="rounded-none text-tikari-green p-0 hover:bg-transparent font-bold flex items-center gap-1"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
