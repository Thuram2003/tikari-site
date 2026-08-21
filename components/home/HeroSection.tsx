import Image from "next/image";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/women-market.jpg"
          alt="Islamic Banking in Cameroon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-tikari-green-dark/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Banking without interest. Compliance without doubt.
          </h1>
          
          <p className="text-xl text-tikari-cream/90 max-w-3xl mx-auto leading-relaxed">
            The only core platform built for non-interest microfinance in the CEMAC zone. From Murabaha disbursements to COBAC-ready GL reconciliation your auditors at MINFI and your Shariah board get the same answer.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              variant="secondary" 
              size="lg" 
              href="/demo"
              className="rounded-none font-medium"
            >
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
              <span className="text-tikari-cream/80">BEAC Licensed</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
              <span className="text-tikari-cream/80">COBAC Compliant</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
              <span className="text-tikari-cream/80">AAOIFI & OHADA Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

