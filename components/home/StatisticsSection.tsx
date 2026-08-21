export default function StatisticsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-tikari-green-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-5xl font-bold text-tikari-gold">10min</p>
            <p className="text-sm uppercase tracking-wider text-tikari-cream/70">EOD Batch Time</p>
            <p className="text-xs text-tikari-cream/50">GL close and reconciliation</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-tikari-gold">70+</p>
            <p className="text-sm uppercase tracking-wider text-tikari-cream/70">Functional Modules</p>
            <p className="text-xs text-tikari-cream/50">From KYC to Zakat calculation</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-tikari-gold">100%</p>
            <p className="text-sm uppercase tracking-wider text-tikari-cream/70">AAOIFI Compliant</p>
            <p className="text-xs text-tikari-cream/50">All accounting standards</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-tikari-gold">6</p>
            <p className="text-sm uppercase tracking-wider text-tikari-cream/70">Islamic Products</p>
            <p className="text-xs text-tikari-cream/50">Complete Shariah suite</p>
          </div>
        </div>
      </div>
    </section>
  );
}
