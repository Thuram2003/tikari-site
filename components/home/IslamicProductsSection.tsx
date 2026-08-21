import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button, Card } from "@/components/ui";

export default function IslamicProductsSection() {
  const products = [
    {
      title: "Murabaha Financing",
      description: "Transparent cost-plus trade financing. Track asset cost, markup, and deferred income per AAOIFI FAS 2 with full audit trail.",
      image: "/handshake.jpg",
      badge: "Cost-Plus"
    },
    {
      title: "Mudarabah Pools",
      description: "Pure profit-sharing investment accounts. Complete allocation transparency, real asset performance tracking, no guaranteed returns.",
      image: "/money.jpg",
      badge: "Profit-Sharing"
    },
    {
      title: "Musharakah Partnership",
      description: "Joint venture and diminishing partnership. Automatic buyout schedules with rental adjustment as ownership transfers.",
      image: "/personOffice.jpg",
      badge: "Partnership"
    },
    {
      title: "Ijara Leasing",
      description: "Asset leasing with option to purchase. Track rental income, asset depreciation, and end-of-lease ownership transfer.",
      image: "/compliance.jpg",
      badge: "Leasing"
    },
    {
      title: "Wadiah Accounts",
      description: "Safekeeping deposit accounts for current and savings. No guaranteed returns, optional gift distributions at bank discretion.",
      image: "/mulsimwoman.jpg",
      badge: "Safekeeping"
    },
    {
      title: "Automated Zakat",
      description: "Automatic zakat calculation directly through institutional account balances. Compliant with regulatory standards and fatwa rules.",
      image: "/women-market.jpg",
      badge: "Compliance"
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-tikari-cream-light">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-tikari-green-dark">
            From Murabaha to Musharakah with built-in Shariah compliance
          </h2>
          <p className="text-lg text-tikari-sage">
            Each financing type has the right mechanics built in. Track cost price, markup, deferred income, profit-sharing ratios, and buyout schedules all AAOIFI FAS-compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="border-tikari-green/20 overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tikari-green-dark/90 to-transparent" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-tikari-green-dark">{product.title}</h3>
                <p className="text-sm text-tikari-sage leading-relaxed">
                  {product.description}
                </p>
                <Button variant="ghost" size="sm" href="/platform" className="w-full">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
