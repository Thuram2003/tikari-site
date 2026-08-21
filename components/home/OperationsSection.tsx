import { Check } from "lucide-react";
import { Button } from "@/components/ui";

export default function OperationsSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-6 bg-tikari-cream-light border-b border-tikari-green/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center px-3 py-1.5 bg-tikari-gold/10 border border-tikari-gold/20">
                <span className="text-xs uppercase tracking-widest text-tikari-gold-dark font-medium">Banking Operations</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-tikari-green-dark leading-tight">
                Run Njangi groups, agent float, and interbank transfers in one system
              </h2>
              
              <p className="text-base lg:text-lg text-tikari-green-dark/70 leading-relaxed">
                Cameroon non-interest banking is not just Murabaha. It includes Njangi rotating savings groups, community agent networks, and mobile-first customers with Tier 1 CNI or Passport accounts. TIKARI was designed for this reality, not adapted for it.
              </p>
            </div>

            <ul className="space-y-3.5 pt-2">
              {[
                "Njangi group management with rotation tracker and contribution status",
                "Wadiah safekeeping savings with current, target, and group accounts",
                "KYC Tier 1/2/3 with inline ID verification via BEAC/GIMAC API",
                "Interbank transfers with name enquiry before authorisation",
                "Agent banking with onboarding, float, and commission settlement",
                "Teller module for cash deposit, withdrawal, and EOD reconciliation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-tikari-green-dark/80">
                  <Check className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button variant="primary" href="/platform/operations">
                See Banking Operations
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Njangi Group Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white border border-tikari-green/10 p-8 shadow-glow space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between pb-5 border-b border-tikari-green/10">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-tikari-green-dark">Njangi Group</h4>
                  <p className="text-xs text-tikari-green-dark/60">Al-Baraka Njangi Circle</p>
                  <p className="text-xs text-tikari-green-dark/50">Cycle 7 of 12</p>
                </div>
                <span className="bg-emerald-500/10 text-emerald-700 text-xs font-medium px-3 py-1.5 border border-emerald-500/20">
                  ACTIVE
                </span>
              </div>

              {/* Progress Card */}
              <div className="bg-tikari-cream-light border border-tikari-green/5 p-5 space-y-3">
                <span className="text-[10px] text-tikari-green-dark/60 uppercase tracking-widest block font-medium">
                  Contribution Collection This Cycle
                </span>
                <p className="text-sm font-medium text-tikari-green-dark">
                  9 of 12 members contributed
                </p>
                <p className="text-lg font-bold text-tikari-green-dark">
                  FCFA 450,000 collected
                </p>
                <div className="w-full bg-tikari-green/10 h-2 overflow-hidden">
                  <div className="bg-tikari-gold h-full transition-all duration-300" style={{ width: '75%' }}></div>
                </div>
              </div>

              {/* Payout Card */}
              <div className="bg-tikari-gold/5 border border-tikari-gold/20 p-5 space-y-2">
                <span className="text-[10px] text-tikari-gold-dark uppercase tracking-widest block font-medium">
                  Current Recipient
                </span>
                <p className="text-base font-bold text-tikari-green-dark">
                  Aminatou Njoya
                </p>
                <p className="text-xs text-tikari-green-dark/60">
                  Member #7
                </p>
                <p className="text-sm text-tikari-gold-dark font-medium pt-1">
                  FCFA 600,000 to disburse on 15 June 2026
                </p>
              </div>

              {/* Members Grid */}
              <div className="space-y-3">
                <span className="text-[10px] text-tikari-green-dark/60 uppercase tracking-widest block font-medium">
                  Contribution Status
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { name: "Aisha Mahamat", status: true },
                    { name: "Fatima Bello", status: true },
                    { name: "Zainab Ousman", status: true },
                    { name: "Marie Tchouta", status: false },
                    { name: "Aminatou Njoya", status: true },
                    { name: "Kadija Issa", status: true },
                    { name: "Florence Ebong", status: true },
                    { name: "Hawa Moussa", status: true },
                    { name: "Cecile Ndam", status: false },
                    { name: "Rachelle Fotso", status: true },
                    { name: "Safiya Abba", status: true },
                    { name: "Grace Tanyi", status: false },
                  ].map((member, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-2 p-3 border text-xs transition-colors ${
                        member.status 
                          ? "bg-tikari-cream-light border-tikari-green/10" 
                          : "bg-red-50/50 border-red-200/30"
                      }`}
                    >
                      <span className={`text-sm font-bold ${member.status ? "text-emerald-600" : "text-red-500"}`}>
                        {member.status ? "✓" : "✗"}
                      </span>
                      <span className="text-tikari-green-dark font-medium truncate">
                        {member.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
