import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Star, X } from "lucide-react";
import {
  DownloadableDemo,
  LaravelBadge,
  OnlineDemo,
  ReactBadge,
  SourceCode,
  UnderDevelopment,
} from "./Badges";

export function ProjectCard() {
  return (
    <Card className="mx-12 block w-full max-w-2xl rounded-2xl border-white/20 bg-gradient-to-b from-black/80 from-10% to-black/30 p-8 backdrop-blur-sm">
      <div className="">
        <div className="flex justify-between">
          <div className="text-3xl">Republic Courses </div>
          <Star className="size-6 fill-amber-300 stroke-2 text-amber-300" />
        </div>
        <div className="-mt-1 flex items-center justify-start gap-1">
          <LaravelBadge />
          <X strokeWidth={2} size={16} />
          <ReactBadge />
        </div>
      </div>
      <div className="mx-4 mt-3 mb-5 flex flex-col gap-4 text-justify font-normal">
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          doloremque alias aspernatur? Consectetur repudiandae excepturi ab
          blanditiis ut, accusamus quod, est veniam, nulla rem in ex quia quam
          non eius!
        </div>
        <div className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam in
          iusto, saepe voluptatibus deserunt ipsa commodi, fugit corporis ut
          culpa, quaerat quibusdam? Qui aperiam laboriosam asperiores dolor
          alias facilis tenetur. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Praesentium est beatae magni nesciunt, ducimus
          perferendis quae optio ea inventore reprehenderit minima repudiandae.
          Iste recusandae rerum nihil assumenda ut, exercitationem quo.
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <OnlineDemo />
        <SourceCode />
        {/* <UnderDevelopment /> */}
        {/* <DownloadableDemo /> */}
      </div>
    </Card>
  );
}
