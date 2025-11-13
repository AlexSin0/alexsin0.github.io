import { cn } from "@/lib/utils";

export function BigBadge({
  className,
  color,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean; color?: string }) {
  return (
    <div
      data-slot="badge"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none",
        "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:ring-[3px]",
        "text-md glow-badge cursor-pointer gap-2 rounded-md border-2 bg-neutral-700/10 px-2.5 py-1.5 font-semibold [&>svg]:size-5",
        className,
      )}
      {...props}
    />
  );
}
