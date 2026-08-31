"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe, Check, CaretDown } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";
import { GB, FR } from 'country-flag-icons/react/3x2';

const languages = [
  { code: "en", name: "English", nativeName: "English", Flag: GB },
  { code: "fr", name: "Français", nativeName: "Français", Flag: FR },
];

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export default function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const CurrentFlag = currentLanguage?.Flag;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
          scrolled
            ? "text-tikari-green-dark hover:bg-tikari-green/10"
            : "text-white hover:bg-white/20"
        } ${isOpen ? 'ring-2 ring-tikari-green/20' : ''}`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        {CurrentFlag ? (
          <div className="w-5 h-4 rounded overflow-hidden shadow-sm">
            <CurrentFlag className="w-full h-full object-cover" />
          </div>
        ) : (
          <Globe className="h-5 w-5" weight="bold" />
        )}
        <span className="hidden sm:inline-block text-sm font-medium uppercase">
          {currentLanguage?.code}
        </span>
        <CaretDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          weight="bold" 
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div 
            className="fixed inset-0 z-40 lg:hidden" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-tikari-green/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-2 space-y-1">
              {languages.map((lang) => {
                const LangFlag = lang.Flag;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150 ${
                      locale === lang.code
                        ? "bg-tikari-green/10 text-tikari-green-dark font-semibold shadow-sm"
                        : "text-tikari-sage hover:bg-tikari-green/5 hover:text-tikari-green-dark"
                    }`}
                  >
                    <div className="w-6 h-5 rounded overflow-hidden shadow-sm flex-shrink-0">
                      <LangFlag className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{lang.nativeName}</div>
                      <div className="text-xs opacity-70">{lang.name}</div>
                    </div>
                    {locale === lang.code && (
                      <Check className="h-5 w-5 text-tikari-green flex-shrink-0" weight="bold" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
