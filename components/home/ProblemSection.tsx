import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-6 bg-tikari-cream/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-white border border-tikari-green/10">
                <span className="text-xs uppercase tracking-widest text-tikari-sage font-bold">Why existing systems fail</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-tikari-green-dark leading-tight">
                Conventional cores<br/>weren't built for this
              </h2>
              
              <p className="text-lg lg:text-xl text-tikari-sage leading-relaxed max-w-2xl">
                Symphonie, Delta, Temenos T24. These platforms were engineered for interest-based banking and retrofitted with Islamic product modules as an afterthought.
              </p>
            </div>

            {/* Problem Cards */}
            <div className="space-y-6">
              
              <div className="bg-white border-l-4 border-tikari-sage/30 p-6 space-y-2">
                <h3 className="text-base font-bold text-tikari-green-dark">Income recognition mislabeled</h3>
                <p className="text-sm text-tikari-sage">
                  Legacy platforms label Murabaha profit as "interest income" in reports and general ledgers. Your Shariah board sees it. Your auditors flag it.
                </p>
              </div>

              <div className="bg-white border-l-4 border-tikari-sage/30 p-6 space-y-2">
                <h3 className="text-base font-bold text-tikari-green-dark">COBAC reporting is manual chaos</h3>
                <p className="text-sm text-tikari-sage">
                  COBAC and BEAC returns compiled by hand from dozens of separate exports and spreadsheets. Every quarter feels like an audit crisis.
                </p>
              </div>

              <div className="bg-white border-l-4 border-tikari-sage/30 p-6 space-y-2">
                <h3 className="text-base font-bold text-tikari-green-dark">Shariah governance lives outside the system</h3>
                <p className="text-sm text-tikari-sage">
                  Advisory board approvals tracked in email threads and paper files instead of the core system. No audit trail. No version control.
                </p>
              </div>

              <div className="bg-white border-l-4 border-tikari-sage/30 p-6 space-y-2">
                <h3 className="text-base font-bold text-tikari-green-dark">End-of-day takes hours</h3>
                <p className="text-sm text-tikari-sage">
                  EOD takes 2 to 3 hours and still leaves items unreconciled across multiple spreadsheets. Operations staff work late every single day.
                </p>
              </div>

            </div>

            {/* TIKARI Difference */}
            <div className="bg-tikari-sage-light border-l-4 border-tikari-green p-8 space-y-4">
              <h3 className="text-xl font-bold text-tikari-green-dark">TIKARI is different</h3>
              <p className="text-base text-tikari-green-dark leading-relaxed">
                The ledger is built on AAOIFI financial accounting standards from the ground up. Every product type (Wadiah, Mudarabah, Musharakah, Ijara) has its own GL logic, profit-sharing mechanics, and Shariah validation flow.
              </p>
              <p className="text-base text-tikari-green-dark leading-relaxed">
                Your Shariah Advisory Board and your compliance team are first-class users in the system, not an afterthought. BEAC reporting is automatic. EOD closes in under 10 minutes.
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-4">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden border border-tikari-green/10 bg-white">
                <Image
                  src="/compliance.jpg"
                  alt="Cameroon Islamic Banking Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-tikari-sage leading-relaxed">
                Islamic banking operations in Cameroon require systems designed for CEMAC regulatory compliance and Shariah principles from day one.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


