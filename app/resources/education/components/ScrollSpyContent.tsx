'use client';

import { useEffect, useState, ReactNode } from "react";

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface ScrollSpyContentProps {
  tableOfContents: TableOfContentsItem[];
  children: ReactNode;
}

export default function ScrollSpyContent({ tableOfContents, children }: ScrollSpyContentProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      }
    );

    // Observe all sections
    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-12">
      {/* Table of Contents - Sticky */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <h3 className="text-sm font-bold text-tikari-green-dark mb-4 uppercase tracking-wide">
            On This Page
          </h3>
          <nav className="space-y-1">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-sm transition-all py-2 border-l-2 pl-3 ${
                  activeSection === item.id
                    ? 'border-tikari-gold text-tikari-green-dark font-semibold'
                    : 'border-transparent text-tikari-sage hover:text-tikari-green-dark hover:border-tikari-green/30'
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Article Content */}
      {children}
    </div>
  );
}
