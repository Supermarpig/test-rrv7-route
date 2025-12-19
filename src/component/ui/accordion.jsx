import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border border-gray-200 rounded-lg overflow-hidden bg-white", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, isOpen, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between p-4 font-medium transition-all hover:bg-gray-50",
        isOpen && "bg-gray-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="p-4 pt-0 border-t border-gray-200 bg-gray-50">
        {children}
      </div>
    </div>
  )
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

