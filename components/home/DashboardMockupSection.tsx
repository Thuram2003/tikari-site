import { Check, Clock, User, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function DashboardMockupSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-tikari-green-dark text-white border-b border-tikari-green/20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-tikari-gold font-bold">Real-time Operations</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Designed for non-interest management
          </h2>
          <p className="text-lg text-tikari-cream/80 leading-relaxed">
            Get instant visibility into your Shariah assets, liquidity ratios, and maker-checker approval pipelines from a single professional dashboard.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-[#0B1E13] border border-tikari-gold/20 shadow-2xl p-6 md:p-8 rounded-none max-w-6xl mx-auto">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-tikari-green/30 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-none"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-none"></div>
              <div className="w-3 h-3 bg-green-500 rounded-none"></div>
              <span className="text-xs text-tikari-sage ml-2 font-mono">app.tikari.cm/dashboard</span>
            </div>
            <div className="text-sm font-semibold text-tikari-gold bg-tikari-green-dark px-3 py-1 border border-tikari-gold/20 rounded-none">
              Executive Dashboard
            </div>
          </div>

          {/* Top Level Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Stat 1 */}
            <div className="bg-[#0D2818] border border-tikari-green/40 p-5 rounded-none space-y-2">
              <span className="text-xs text-tikari-sage uppercase tracking-wider font-semibold block">Total AUM</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">FCFA 4.82B</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-400">
                <ArrowUpRight className="h-3 w-3" />
                <span>12.4% this quarter</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#0D2818] border border-tikari-green/40 p-5 rounded-none space-y-2">
              <span className="text-xs text-tikari-sage uppercase tracking-wider font-semibold block">Active Customers</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">18,304</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-400">
                <ArrowUpRight className="h-3 w-3" />
                <span>847 this month</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#0D2818] border border-tikari-green/40 p-5 rounded-none space-y-2">
              <span className="text-xs text-tikari-sage uppercase tracking-wider font-semibold block">PAR &gt; 30 Days</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">2.1%</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-tikari-gold">
                <ArrowDownRight className="h-3 w-3" />
                <span>down from 3.8%</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-[#0D2818] border border-tikari-green/40 p-5 rounded-none space-y-2">
              <span className="text-xs text-tikari-sage uppercase tracking-wider block font-semibold">Mudarabah Pool Return</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-tikari-gold">8.4%</span>
              </div>
              <span className="text-[10px] text-tikari-sage/70 block">Indicative, not guaranteed</span>
            </div>
          </div>

          {/* Central Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Financing Portfolio & PAR Trend */}
            <div className="lg:col-span-8 space-y-8">
              {/* Portfolio Mix */}
              <div className="bg-[#0D2818] border border-tikari-green/40 p-6 rounded-none">
                <h4 className="text-sm font-bold text-tikari-gold uppercase tracking-wider mb-4">Financing Portfolio Breakdown</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border-l-2 border-tikari-gold pl-3 py-1">
                    <span className="text-xs text-tikari-sage block">Murabaha</span>
                    <span className="text-xl font-bold">52%</span>
                  </div>
                  <div className="border-l-2 border-[#8EA89D] pl-3 py-1">
                    <span className="text-xs text-tikari-sage block">Mudarabah</span>
                    <span className="text-xl font-bold">22%</span>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3 py-1">
                    <span className="text-xs text-tikari-sage block">Musharakah</span>
                    <span className="text-xl font-bold">14%</span>
                  </div>
                  <div className="border-l-2 border-[#FAF9F6]/30 pl-3 py-1">
                    <span className="text-xs text-tikari-sage block">Ijara</span>
                    <span className="text-xl font-bold">12%</span>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="flex h-3 mt-6 bg-tikari-green-dark border border-tikari-green/30 rounded-none overflow-hidden">
                  <div style={{ width: '52%' }} className="bg-tikari-gold" />
                  <div style={{ width: '22%' }} className="bg-[#8EA89D]" />
                  <div style={{ width: '14%' }} className="bg-emerald-500" />
                  <div style={{ width: '12%' }} className="bg-[#FAF9F6]/20" />
                </div>
              </div>

              {/* PAR Trend Visual */}
              <div className="bg-[#0D2818] border border-tikari-green/40 p-6 rounded-none">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-tikari-gold uppercase tracking-wider">PAR Trend past 6 months</h4>
                  <span className="text-xs text-emerald-400 font-semibold">PAR &gt;30 days improving: from 4.8% to 2.1%</span>
                </div>
                {/* Visual Chart Bars */}
                <div className="flex justify-between items-end h-32 pt-4 px-2">
                  {[
                    { m: "Jan", val: 4.8 },
                    { m: "Feb", val: 4.2 },
                    { m: "Mar", val: 3.8 },
                    { m: "Apr", val: 3.1 },
                    { m: "May", val: 2.5 },
                    { m: "Jun", val: 2.1 }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 w-12">
                      <div className="w-8 bg-tikari-green border border-tikari-gold/20 flex items-end justify-center text-[10px] font-mono text-tikari-gold" style={{ height: `${item.val * 20}px` }}>
                        <span className="pb-1">{item.val}%</span>
                      </div>
                      <span className="text-xs text-tikari-sage">{item.m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Checker Panel (Pending Approvals) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#0D2818] border border-tikari-green/40 p-6 rounded-none h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-tikari-green/30 mb-4">
                    <h4 className="text-sm font-bold text-tikari-gold uppercase tracking-wider">Pending Approvals</h4>
                    <span className="bg-tikari-gold/20 text-tikari-gold text-xs font-bold px-2 py-0.5 border border-tikari-gold/30">7</span>
                  </div>

                  <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="p-3 bg-[#0B1E13] border border-tikari-green/40 rounded-none flex items-start gap-3">
                      <Clock className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-white">Murabaha disbursement</p>
                        <p className="text-xs text-tikari-gold font-mono">FCFA 2,450,000</p>
                        <p className="text-[10px] text-tikari-sage">Checker: A. Danladi</p>
                      </div>
                      <span className="ml-auto text-[10px] bg-tikari-gold/10 text-tikari-gold border border-tikari-gold/20 px-1.5 py-0.5 rounded-none font-semibold">Pending</span>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3 bg-[#0B1E13] border border-tikari-green/40 rounded-none flex items-start gap-3">
                      <User className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-white">Account opening</p>
                        <p className="text-xs text-tikari-gold font-mono">New Tier 2</p>
                        <p className="text-[10px] text-tikari-sage">Checker: F. Abubakar</p>
                      </div>
                      <span className="ml-auto text-[10px] bg-tikari-gold/10 text-tikari-gold border border-tikari-gold/20 px-1.5 py-0.5 rounded-none font-semibold">Pending</span>
                    </div>

                    {/* Item 3 */}
                    <div className="p-3 bg-[#0B1E13] border border-tikari-green/40 rounded-none flex items-start gap-3">
                      <Clock className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-white">BEAC transfer</p>
                        <p className="text-xs text-tikari-gold font-mono">FCFA 850,000</p>
                        <p className="text-[10px] text-tikari-sage">Checker: Z. Yusuf</p>
                      </div>
                      <span className="ml-auto text-[10px] bg-tikari-gold/10 text-tikari-gold border border-tikari-gold/20 px-1.5 py-0.5 rounded-none font-semibold">Pending</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-tikari-gold hover:bg-tikari-gold-dark text-tikari-green-dark py-2.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all">
                    Go to Verification Center
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
