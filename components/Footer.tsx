"use client";

import Link from "next/link";
import Image from "next/image";
import { Handshake, ShieldCheck, Heart } from "@phosphor-icons/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tikari-cream border-t-2 border-tikari-green/20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Column */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.svg"
              alt="TIKARI Logo"
              width={40}
              height={49}
              className="object-contain max-h-12"
            />
          </Link>
          <p className="text-xs text-tikari-green-dark/75 leading-relaxed">
            Faith-based financial infrastructure and non-interest banking solutions. Engineered to honor your values with complete AAOIFI-compliant ledger visibility.
          </p>
          <div className="text-[10px] uppercase font-bold tracking-wider text-tikari-green bg-tikari-sage-light inline-block px-2.5 py-1 rounded-lg">
            CBN Licensed · NDIC Insured
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-tikari-green-dark mb-4">
            Products
          </h4>
          <ul className="space-y-2 text-xs text-tikari-green-dark/80 font-semibold">
            <li><Link href="/platform#murabaha" className="hover:text-tikari-gold transition-colors">Murabaha Financing</Link></li>
            <li><Link href="/platform#mudarabah" className="hover:text-tikari-gold transition-colors">Mudarabah Pools</Link></li>
            <li><Link href="/platform#zakat" className="hover:text-tikari-gold transition-colors">Zakat Calculations</Link></li>
            <li><Link href="/platform#esusu" className="hover:text-tikari-gold transition-colors">Rotative Esusu Ledger</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-tikari-green-dark mb-4">
            Resources
          </h4>
          <ul className="space-y-2 text-xs text-tikari-green-dark/80 font-semibold">
            <li><Link href="/resources#education" className="hover:text-tikari-gold transition-colors">Shariah Finance 101</Link></li>
            <li><Link href="/resources#compliance" className="hover:text-tikari-gold transition-colors">CBN NIFI Guidelines</Link></li>
            <li><Link href="/resources#tools" className="hover:text-tikari-gold transition-colors">Yield Estimators</Link></li>
            <li><Link href="/company#scholars" className="hover:text-tikari-gold transition-colors">Scholar Credentials</Link></li>
          </ul>
        </div>

        {/* Regulatory Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-tikari-green-dark mb-4">
            Shariah Assurance
          </h4>
          <div className="p-4 border border-tikari-green-dark/10 bg-white shadow-soft rounded-2xl">
            <div className="flex items-center gap-2 text-tikari-green mb-1">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">100% Board Certified</span>
            </div>
            <p className="text-[10px] text-tikari-green-dark/70 leading-relaxed">
              Every deposit, financing arrangement, and investment pool is audited and approved by our independent Shariah Supervisory Board.
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-tikari-green/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-tikari-green-dark/70 font-semibold gap-4">
        <div>
          © {currentYear} TIKARI Finance. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Designed with honor and clarity</span>
          <Heart className="h-3.5 w-3.5 text-tikari-gold fill-current" />
        </div>
      </div>
    </footer>
  );
}
