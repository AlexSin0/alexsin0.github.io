import { Card } from "@/components/ui/card";
import { Star, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function ProjectCard({
  title,
  isStarred,
  className,
  ...props
}: React.ComponentProps<"div"> & { title: string; isStarred?: boolean }) {
  return (
    <Card className="block w-full rounded-2xl border-white/20 bg-gradient-to-b from-black/80 from-10% to-black/30 p-8 backdrop-blur-sm">
      <div className="flex justify-between">
        <div className="text-3xl">{title}</div>
        {isStarred && <Starred />}
      </div>
      <div {...props} />
    </Card>
  );
}

export function ProjectContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="mx-4 mt-3 mb-5 flex items-center gap-6 text-justify font-normal">
      <div className="flex flex-col gap-4" {...props}></div>
    </div>
  );
}

export function ProjectBadges({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className="flex flex-wrap justify-center gap-8" {...props} />;
}

export function ProjectTech({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="-mt-2 flex items-center justify-start gap-1" {...props} />
  );
}

export function Starred() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Star className="glow-badge size-6 fill-amber-300 stroke-2 text-amber-300 shadow-amber-300" />
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>I really like this project :)</p>
      </TooltipContent>
    </Tooltip>
  );
}
