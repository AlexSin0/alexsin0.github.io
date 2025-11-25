import { cn } from "@/lib/utils";

export function SmallBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="badge"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none",
        "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground flex align-middle",
        "font- text-md opacity- m-1 font-normal [&>svg]:mr-2 [&>svg]:size-[24px]",
        className,
      )}
      {...props}
    />
  );
}
