import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export function BigBadge({
  className,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean; color?: string }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none",
        "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        "text-md glow-sm gap-2 rounded-md border-2 bg-neutral-700/10 px-2.5 py-1.5 font-semibold [&>svg]:size-5",
        className,
      )}
      {...props}
    />
  );
}
