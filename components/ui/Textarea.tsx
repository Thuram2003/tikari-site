import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full px-4 py-3 bg-white border border-[#1B4332]/10 text-[#0D2818] text-sm placeholder:text-[#8EA89D] focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-[#1B4332] focus:bg-white transition-all disabled:cursor-not-allowed disabled:opacity-50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
