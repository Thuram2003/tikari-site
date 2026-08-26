import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            "flex w-full px-4 py-3 pr-10 bg-white border border-[#1B4332]/10 text-[#0D2818] text-sm focus:outline-none focus:ring-1 focus:ring-[#1B4332] focus:border-[#1B4332] focus:bg-white transition-all appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded-2xl",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8EA89D]"
          aria-hidden="true"
        />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
