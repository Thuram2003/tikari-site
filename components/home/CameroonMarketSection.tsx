import Image from "next/image";
import { Globe, Bank, Buildings, Clock } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui";

export default function CameroonMarketSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-tikari-green-dark">
              Designed for Cameroon and CEMAC markets
            </h2>
            <p className="text-lg text-tikari-sage leading-relaxed">
              TIKARI is not a global platform retrofitted for Africa. It is built from day one for the Central African Economic and Monetary Community, with XAF as the native currency and BEAC COBAC compliance baked into every workflow.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tikari-gold/20 flex items-center justify-center shrink-0">
                  <Globe className="h-6 w-6 text-tikari-gold" weight="duotone" />
                </div>
                <div>
                  <h4 className="font-bold text-tikari-green-dark mb-1">Native XAF Currency</h4>
                  <p className="text-sm text-tikari-sage">All accounting, reporting, and compliance in Central African Francs with no conversion headaches.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tikari-gold/20 flex items-center justify-center shrink-0">
                  <Bank className="h-6 w-6 text-tikari-gold" weight="duotone" />
                </div>
                <div>
                  <h4 className="font-bold text-tikari-green-dark mb-1">BEAC and COBAC Reporting</h4>
                  <p className="text-sm text-tikari-sage">Prudential returns, capital adequacy, liquidity ratios generated directly from your live ledger.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tikari-gold/20 flex items-center justify-center shrink-0">
                  <Buildings className="h-6 w-6 text-tikari-gold" weight="duotone" />
                </div>
                <div>
                  <h4 className="font-bold text-tikari-green-dark mb-1">Multi-Branch Operations</h4>
                  <p className="text-sm text-tikari-sage">Douala, Yaounde, Garoua, Bafoussam. Manage multiple branches with centralized oversight and local permissions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tikari-gold/20 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-tikari-gold" weight="duotone" />
                </div>
                <div>
                  <h4 className="font-bold text-tikari-green-dark mb-1">End of Day in Minutes</h4>
                  <p className="text-sm text-tikari-sage">Automated EOD batch processing: GL close, profit recognition, dormancy checks under 10 minutes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[600px] overflow-hidden shadow-2xl">
            <Image
              src="/women-smile.jpg"
              alt="Cameroon Islamic Banking"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/60 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 space-y-4">
              <Card className="bg-white/95 backdrop-blur-sm p-6 border-none">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-tikari-gold/20 flex items-center justify-center shrink-0">
                    <span className="text-3xl font-bold text-tikari-gold">0%</span>
                  </div>
                  <div>
                    <p className="font-bold text-tikari-green-dark">Zero Interest Ever</p>
                    <p className="text-xs text-tikari-sage">Every transaction is Riba-free and auditable to the source asset</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
