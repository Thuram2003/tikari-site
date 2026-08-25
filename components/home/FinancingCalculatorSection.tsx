"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export default function FinancingCalculatorSection() {
  const t = useTranslations("home.calculator");
  
  const [assetCost, setAssetCost] = useState(3500000);
  const [markupRate, setMarkupRate] = useState(12.5);
  const [tenor, setTenor] = useState(24);

  const totalMarkup = assetCost * (markupRate / 100) * (tenor / 12);
  const totalSellingPrice = assetCost + totalMarkup;
  const monthlyInstalment = totalSellingPrice / tenor;

  return (
    <section className="w-full bg-tikari-green-dark text-white">
      
      {/* Islamic Financing Section */}
      <div className="w-full py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Single Hero Image */}
          <div className="mb-16">
            <div className="relative h-[450px] lg:h-[600px] w-full overflow-hidden">
              <Image
                src="/muslim-meeting.jpg"
                alt={t("financing.imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="inline-flex items-center px-3 py-1 bg-white/5 border border-white/10">
                  <span className="text-xs uppercase tracking-widest text-white/60 font-medium">{t("financing.badge")}</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                  {t("financing.title")}
                </h2>
                
                <p className="text-base lg:text-lg text-white/60 leading-relaxed">
                  {t("financing.subtitle")}
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  t("financing.features.0"),
                  t("financing.features.1"),
                  t("financing.features.2"),
                  t("financing.features.3"),
                  t("financing.features.4")
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button variant="secondary" href="/platform/financing">
                  {t("financing.button")}
                </Button>
              </div>
            </div>

            {/* Right: Interactive Calculator */}
            <div className="bg-white/[0.02] border border-white/10 p-8 lg:p-10">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">{t("calculator.title")}</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-medium px-2.5 py-1 border border-emerald-500/20">
                  {t("calculator.live")}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs text-white/50 block mb-3">{t("calculator.assetCost")}</label>
                  <input
                    type="range"
                    min="1000000"
                    max="10000000"
                    step="100000"
                    value={assetCost}
                    onChange={(e) => setAssetCost(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 appearance-none cursor-pointer"
                  />
                  <div className="text-lg font-bold text-white font-mono mt-3">
                    FCFA {assetCost.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 block mb-2">{t("calculator.markupRate")}</label>
                    <input
                      type="number"
                      min="5"
                      max="25"
                      step="0.5"
                      value={markupRate}
                      onChange={(e) => setMarkupRate(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50 block mb-2">{t("calculator.tenor")}</label>
                    <input
                      type="number"
                      min="6"
                      max="60"
                      step="6"
                      value={tenor}
                      onChange={(e) => setTenor(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white font-mono"
                    />
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">{t("calculator.totalSellingPrice")}</span>
                    <span className="text-white font-mono">FCFA {Math.round(totalSellingPrice).toLocaleString()}</span>
                  </div>
                  <div className="bg-tikari-gold/10 border border-tikari-gold/20 p-4">
                    <span className="text-xs text-tikari-gold/80 block mb-1.5">{t("calculator.monthlyInstalment")}</span>
                    <span className="text-2xl font-bold text-white font-mono">FCFA {Math.round(monthlyInstalment).toLocaleString()}</span>
                  </div>
                </div>

                <div className="text-xs text-white/40 pt-4 border-t border-white/5">
                  {t("calculator.fatwaRef")}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* COBAC Reporting Section */}
      <div className="w-full py-24 lg:py-32 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: GL Table */}
            <div className="bg-white/[0.02] border border-white/10 p-8 lg:p-10">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">{t("trialBalance.title")}</span>
                <span className="text-xs text-white/40 font-mono">{t("trialBalance.date")}</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50 font-medium uppercase tracking-wider">
                      <th className="py-2.5 font-normal">{t("trialBalance.account")}</th>
                      <th className="py-2.5 text-right font-normal">{t("trialBalance.debit")}</th>
                      <th className="py-2.5 text-right font-normal">{t("trialBalance.credit")}</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 font-sans text-white/80">{t("trialBalance.rows.cashAtTill")}</td>
                      <td className="py-2.5 text-right">84.2M</td>
                      <td className="py-2.5 text-right text-white/20">0</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 font-sans text-white/80">{t("trialBalance.rows.murabahaFinancing")}</td>
                      <td className="py-2.5 text-right">1,240.5M</td>
                      <td className="py-2.5 text-right text-white/20">0</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 font-sans text-white/80">{t("trialBalance.rows.ijaraAssets")}</td>
                      <td className="py-2.5 text-right">620.0M</td>
                      <td className="py-2.5 text-right text-white/20">0</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 font-sans text-white/80">{t("trialBalance.rows.wadiahDeposits")}</td>
                      <td className="py-2.5 text-right text-white/20">0</td>
                      <td className="py-2.5 text-right">1,450.0M</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 font-sans text-white/80">{t("trialBalance.rows.mudarabahDeposits")}</td>
                      <td className="py-2.5 text-right text-white/20">0</td>
                      <td className="py-2.5 text-right">380.0M</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2.5 font-sans text-white/80">{t("trialBalance.rows.markupIncome")}</td>
                      <td className="py-2.5 text-right text-white/20">0</td>
                      <td className="py-2.5 text-right">114.7M</td>
                    </tr>
                    <tr className="text-white">
                      <td className="py-3 font-sans font-medium">{t("trialBalance.total")}</td>
                      <td className="py-3 text-right font-medium">1,944.7M</td>
                      <td className="py-3 text-right font-medium">1,944.7M</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 text-emerald-400 text-xs flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>{t("trialBalance.balanced")}</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="inline-flex items-center px-3 py-1 bg-white/5 border border-white/10">
                  <span className="text-xs uppercase tracking-widest text-white/60 font-medium">{t("compliance.badge")}</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                  {t("compliance.title")}
                </h2>
                
                <p className="text-base lg:text-lg text-white/60 leading-relaxed">
                  {t("compliance.subtitle")}
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  t("compliance.features.0"),
                  t("compliance.features.1"),
                  t("compliance.features.2"),
                  t("compliance.features.3"),
                  t("compliance.features.4"),
                  t("compliance.features.5")
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="h-5 w-5 text-tikari-gold shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button variant="secondary" href="/platform/compliance">
                  {t("compliance.button")}
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
