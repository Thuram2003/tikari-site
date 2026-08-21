import Image from "next/image";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui";

export default function CTASection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mulsimwoman.jpg"
          alt="Get Started with TIKARI"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-tikari-green-dark/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to run your bank the way it was meant to be run?
        </h2>
        <p className="text-lg text-tikari-cream/85 max-w-2xl mx-auto leading-relaxed">
          Book a demo and we will walk through the platform live, with your use case in mind. No slide decks. No pricing pressure. Just a look at what running your institution on a proper non-interest core actually feels like.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button 
            variant="secondary" 
            size="lg" 
            href="/demo"
            className="rounded-none font-bold"
          >
            Book a demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            href="/platform"
            className="rounded-none font-bold"
          >
            Explore the platform first
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-tikari-cream/80">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
            <span>No slide decks</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
            <span>45-minute live walkthrough</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-tikari-gold" weight="fill" />
            <span>Tailored to your institution</span>
          </div>
        </div>
      </div>
    </section>
  );
}

