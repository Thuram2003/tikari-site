"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, MapPin, Phone, Envelope } from "@phosphor-icons/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tikari-green-dark border-t border-tikari-gold/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="TIKARI Logo"
                width={48}
                height={58}
                className="object-contain max-h-14"
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              Cameroon's first faith-based non-interest banking platform. Complete AAOIFI-compliant financial infrastructure engineered for Islamic banking, microfinance, and traditional savings systems.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="text-xs font-bold tracking-wider text-tikari-gold bg-tikari-gold/10 px-3 py-1.5 border border-tikari-gold/30">
                BEAC Compliant
              </div>
              <div className="text-xs font-bold tracking-wider text-tikari-gold bg-tikari-gold/10 px-3 py-1.5 border border-tikari-gold/30">
                CEMAC Region
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-5 w-5 text-tikari-gold flex-shrink-0 mt-0.5" weight="fill" />
                <span>Douala, Cameroon</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-5 w-5 text-tikari-gold flex-shrink-0" weight="fill" />
                <span>+237 677 777 777</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Envelope className="h-5 w-5 text-tikari-gold flex-shrink-0" weight="fill" />
                <span>info@tikari.cm</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/platform#murabaha" className="hover:text-tikari-gold transition-colors">Murabaha Financing</Link></li>
              <li><Link href="/platform#mudarabah" className="hover:text-tikari-gold transition-colors">Mudarabah Pools</Link></li>
              <li><Link href="/platform#zakat" className="hover:text-tikari-gold transition-colors">Zakat Calculator</Link></li>
              <li><Link href="/platform#esusu" className="hover:text-tikari-gold transition-colors">Digital Tontine</Link></li>
              <li><Link href="/platform#njangi" className="hover:text-tikari-gold transition-colors">Njangi Groups</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-tikari-gold transition-colors">About TIKARI</Link></li>
              <li><Link href="/company#scholars" className="hover:text-tikari-gold transition-colors">Shariah Board</Link></li>
              <li><Link href="/company#partners" className="hover:text-tikari-gold transition-colors">Bank Partners</Link></li>
              <li><Link href="/careers" className="hover:text-tikari-gold transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-tikari-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/resources#education" className="hover:text-tikari-gold transition-colors">Islamic Finance Guide</Link></li>
              <li><Link href="/resources#regulations" className="hover:text-tikari-gold transition-colors">BEAC Regulations</Link></li>
              <li><Link href="/resources#calculators" className="hover:text-tikari-gold transition-colors">Financial Calculators</Link></li>
              <li><Link href="/faq" className="hover:text-tikari-gold transition-colors">FAQ</Link></li>
              <li><Link href="/help" className="hover:text-tikari-gold transition-colors">Help Center</Link></li>
            </ul>
          </div>

        </div>

        {/* Shariah Assurance Banner */}
        <div className="mb-12 p-6 bg-white/5 border border-tikari-gold/20">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-tikari-gold flex-shrink-0 mt-1" weight="fill" />
            <div>
              <h5 className="text-sm font-bold text-white mb-2">100% Shariah Compliant and BEAC Approved</h5>
              <p className="text-sm text-white/70 leading-relaxed">
                All financial products are certified by our independent Shariah Supervisory Board and operate in full compliance with BEAC (Banque des États de l'Afrique Centrale) regulations governing the CEMAC region.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/60">
            © {currentYear} TIKARI Finance, Cameroon. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-tikari-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-tikari-gold transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-tikari-gold transition-colors">Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
