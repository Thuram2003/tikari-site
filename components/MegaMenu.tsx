"use client";

import { useState, useRef, useEffect, type ElementType } from "react";
import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react";

interface MegaMenuItem {
  name: string;
  desc: string;
  href: string;
  icon: ElementType;
}

interface MegaMenuTab {
  id: string;
  label: string;
}

interface MegaMenuProps {
  label: string;
  tabs?: MegaMenuTab[];
  items: Record<string, MegaMenuItem[]> | MegaMenuItem[];
  featuredItem?: {
    title: string;
    desc: string;
    badge: string;
    href: string;
    image?: string;
  };
}

export default function MegaMenu({ label, tabs, items, featuredItem }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs && tabs.length > 0 ? tabs[0].id : "");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const hasSidebar = !!tabs && tabs.length > 0;

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
  };

  const getActiveItems = (): MegaMenuItem[] => {
    if (hasSidebar && typeof items === "object" && !Array.isArray(items)) {
      return items[activeTab] || [];
    }
    return Array.isArray(items) ? items : [];
  };

  const activeItems = getActiveItems();

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-tikari-green-dark hover:text-tikari-gold transition-colors py-5 cursor-pointer">
        {label}
        <CaretDown className={`h-3 w-3 text-tikari-sage transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="fixed left-1/2 -translate-x-1/2 top-16 z-50 w-[min(960px,calc(100vw-2rem))] bg-white border border-tikari-green/10 rounded-xl shadow-premium flex max-h-[calc(100vh-5rem)] overflow-hidden"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* Tabs Sidebar (Platform navigation) */}
          {hasSidebar && tabs && (
            <div className="w-[220px] bg-tikari-cream/20 border-r border-tikari-green/10 p-4 space-y-1 shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onMouseEnter={() => handleTabChange(tab.id)}
                  className={`w-full text-left px-3 py-2.5 text-[11px] font-bold tracking-wider uppercase rounded-xl transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-tikari-green/10 text-tikari-green font-extrabold border-l-4 border-tikari-gold"
                      : "text-tikari-green-dark/75 hover:bg-tikari-green/5 hover:text-tikari-green"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Grid Content */}
          <div className="flex-1 p-6 overflow-y-auto bg-white">
            <div className="grid grid-cols-2 gap-4">
              {activeItems.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="group p-3 rounded-xl border border-transparent hover:border-tikari-gold/30 hover:bg-tikari-cream/10 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-2 rounded-lg bg-tikari-sage-light text-tikari-green group-hover:bg-tikari-gold group-hover:text-white transition-colors shrink-0">
                        <ItemIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[12px] font-bold text-tikari-green-dark group-hover:text-tikari-green transition-colors mb-0.5 uppercase tracking-wider">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-tikari-green-dark/70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Featured Side Panel (Pinpoint style sidebar) */}
          {featuredItem && (
            <div className="w-[280px] bg-tikari-cream/40 border-l border-tikari-green/10 p-6 flex flex-col justify-between shrink-0">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[9px] font-extrabold tracking-widest uppercase bg-tikari-gold text-white rounded-none mb-3">
                  {featuredItem.badge}
                </span>
                <h4 className="text-xs font-bold text-tikari-green-dark mb-2 uppercase tracking-wide leading-tight font-serif">
                  {featuredItem.title}
                </h4>
                <p className="text-[11px] text-tikari-green-dark/80 leading-relaxed mb-4">
                  {featuredItem.desc}
                </p>
              </div>
              <Link
                href={featuredItem.href}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white bg-tikari-green rounded-none hover:bg-tikari-green-light transition-all"
              >
                Learn More →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
