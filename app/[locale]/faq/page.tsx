import { Info, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "Is TIKARI fully compliant with COBAC regulations?",
      a: "Yes. TIKARI is designed specifically to comply with the Central African Banking Commission (COBAC) regulatory framework for institutions (EMFs) in the CEMAC zone, including capital adequacy, liquidity ratios, and prudential returns."
    },
    {
      q: "How does TIKARI handle AAOIFI and OHADA accounting standards?",
      a: "TIKARI features a dual-compliant general ledger. All non-interest assets (like Murabaha, Mudarabah, Musharakah) are tracked per AAOIFI financial accounting standards, while seamlessly generating reports that comply with OHADA accounting requirements."
    },
    {
      q: "What legacy banking systems can TIKARI migrate from?",
      a: "We provide structured, audit-ready migration pathways with zero data loss from legacy core banking platforms, on-premise ERPs, and custom spreadsheet solutions across West and Central Africa."
    },
    {
      q: "How does the maker-checker engine enforce Shariah governance?",
      a: "Every transaction, account opening, and disbursement flows through a mandatory four-eyes verification pipeline. A transaction initiated by an operator must be approved by a authorized checker, with automatic validation checks against active Fatwas."
    },
    {
      q: "Is the currency restricted to Central African Francs (FCFA)?",
      a: "No. While FCFA (XAF) is the native operational currency for CEMAC-based installations, TIKARI's multi-currency ledger supports transactions and asset tracking in Naira (NGN), USD, EUR, and other regional currencies."
    },
    {
      q: "How long does the implementation and go-live process take?",
      a: "A typical migration and implementation cycle takes between 60 to 90 days. This includes account data mapping, a parallel run phase where both systems run simultaneously, staff training, and the final go-live switch."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white min-h-screen font-sans">
      
      {/* Header Banner */}
      <section className="bg-tikari-green-dark text-white pt-32 pb-16 px-6 md:px-12 border-b border-tikari-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="text-sm text-tikari-cream/80">Get answers to technical, regulatory, and Shariah compliance questions about TIKARI.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 bg-tikari-cream-light border border-tikari-green/10 rounded-md shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-tikari-green-dark">{faq.q}</h3>
              </div>
              <p className="text-sm text-tikari-sage leading-relaxed pl-8">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-tikari-green-dark text-white rounded-md border border-tikari-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Info className="h-6 w-6 text-tikari-gold shrink-0" />
            <div>
              <p className="text-sm font-bold">Have more specific questions?</p>
              <p className="text-xs text-tikari-cream/70">Connect with our support team or request a live platform demo walkthrough.</p>
            </div>
          </div>
          <a 
            href="/demo" 
            className="bg-tikari-gold hover:bg-tikari-gold-dark text-tikari-green-dark px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md shrink-0 transition-all text-center"
          >
            Request a Demo
          </a>
        </div>
      </main>

    </div>
  );
}
