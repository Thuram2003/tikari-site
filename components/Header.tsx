"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import {
  Handshake,
  Coins,
  Notebook,
  ShieldCheck,
  ChartLineUp,
  Users,
  UserGear,
  BuildingOffice,
  GraduationCap,
  BookOpen,
  Question,
  Bookmark,
  UserList,
  Certificate,
  MapPin,
} from "@phosphor-icons/react";
import MegaMenu from "./MegaMenu";
import { Button } from "@/components/ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const platformTabs = [
    { id: "financing", label: "Islamic Financing" },
    { id: "operations", label: "Banking Operations" },
    { id: "compliance", label: "Compliance & Shariah" },
    { id: "security", label: "Security & Safety" },
  ];

  const platformItems = {
    financing: [
      { name: "Murabaha", desc: "Cost-plus contract markup financing.", href: "/platform#murabaha", icon: Coins },
      { name: "Mudarabah", desc: "Partnership venture profit-sharing ratios.", href: "/platform#mudarabah", icon: Handshake },
      { name: "Musharakah", desc: "Joint corporate equity investment pools.", href: "/platform#musharakah", icon: ChartLineUp },
      { name: "Ijara", desc: "Shariah-compliant operational leasing structures.", href: "/platform#ijara", icon: Notebook },
    ],
    operations: [
      { name: "Wadiah Accounts", desc: "Safe custody savings deposit management.", href: "/platform#wadiah", icon: Coins },
      { name: "Esusu / Ajo Groups", desc: "Digital rotation contributions ledger.", href: "/platform#esusu", icon: Users },
      { name: "Agent Banking", desc: "Decentralized branchless agency module.", href: "/platform#agent", icon: UserGear },
    ],
    compliance: [
      { name: "Fatwa Repository", desc: "Official Shariah Board fatwas.", href: "/platform#fatwa", icon: GraduationCap },
      { name: "Four-Eyes Principle", desc: "Dual audit approval maker-checker pipelines.", href: "/platform#foureyes", icon: ShieldCheck },
    ],
    security: [
      { name: "Data Masking", desc: "Biometric layers and ID masking.", href: "/platform#security", icon: ShieldCheck },
    ],
  };

  const solutionItems = [
    { name: "For Individuals", desc: "Wadiah + Mudarabah savings without Riba.", href: "/solution#individuals", icon: Users },
    { name: "For Businesses & SMEs", desc: "Murabaha inventory & working capital.", href: "/solution#smes", icon: BuildingOffice },
    { name: "For Cooperatives", desc: "Digital group savings and rotative ledger.", href: "/solution#cooperatives", icon: Handshake },
    { name: "For Institutions", desc: "Migration services to native AAOIFI cores.", href: "/solution#institutions", icon: Certificate },
  ];

  const resourceItems = [
    { name: "Shariah Finance 101", desc: "Guides to Murabaha, AAOIFI, and Islamic principles.", href: "/resources#education", icon: GraduationCap },
    { name: "Regulatory Updates", desc: "BEAC regulations & compliance standards.", href: "/resources#compliance", icon: Bookmark },
    { name: "Live Calculators", desc: "Estimator tools for Murabaha and Zakat.", href: "/resources#tools", icon: BookOpen },
    { name: "Help Center", desc: "Tutorials, FAQs, and KYC step-by-step guides.", href: "/resources#faq", icon: Question },
  ];

  const companyItems = [
    { name: "About TIKARI", desc: "Our mission, vision, and the legend of the camel.", href: "/company#about", icon: Bookmark },
    { name: "Shariah Board", desc: "Credentials of our verifying Islamic scholars.", href: "/company#scholars", icon: UserList },
    { name: "Leadership", desc: "The executives backing our core compliance system.", href: "/company#team", icon: Users },
    { name: "Contact & Offices", desc: "Reach us in our headquarters.", href: "/company#contact", icon: MapPin },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-tikari-green/10"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center group relative z-10">
          <Image
            src="/logo.svg"
            alt="TIKARI Logo"
            width={40}
            height={49}
            className="object-contain max-h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <MegaMenu
            label="Platform"
            scrolled={scrolled}
            tabs={platformTabs}
            items={platformItems}
            featuredItem={{
              badge: "Native Ledger",
              title: "AAOIFI Core Banking Engine",
              desc: "Engineered from the ground up for strict, zero-interest financial operations.",
              href: "/platform",
            }}
          />
          <MegaMenu
            label="Solution"
            scrolled={scrolled}
            items={solutionItems}
            featuredItem={{
              badge: "SME Support",
              title: "Halal Working Capital",
              desc: "Get Shariah-compliant inventory financing within 48 hours.",
              href: "/solution",
            }}
          />
          <MegaMenu
            label="Resources"
            scrolled={scrolled}
            items={resourceItems}
            featuredItem={{
              badge: "Live Tool",
              title: "Murabaha Calculator",
              desc: "Calculate cost markups and installment schedules dynamically.",
              href: "/resources#tools",
            }}
          />
          <MegaMenu
            label="Company"
            scrolled={scrolled}
            items={companyItems}
            featuredItem={{
              badge: "Trust Board",
              title: "Scholar Verified",
              desc: "Learn about the independent scholars supervising our ledger code.",
              href: "/company#scholars",
            }}
          />
        </nav>

        {/* Right Actions */}
        <div>
          <Button
            variant="secondary"
            size="sm"
            href="/demo"
            className="uppercase tracking-wider"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </header>
  );
}