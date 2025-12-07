import { X } from "lucide-react";
import { useRef } from "react";
import { ReadMore } from "./project-cards/Badges";

export default function TextModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div>
      <button onClick={() => dialogRef.current?.showModal()}>
        <ReadMore />
      </button>

      <dialog
        ref={dialogRef}
        className="modal-center overflow-clip rounded-sm backdrop:bg-white/30"
      >
        <div className="h-[100vh] overflow-scroll rounded-sm text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aut
            dolore ipsum, perferendis, recusandae nisi porro animi similique rem
            repellendus veritatis excepturi ipsa aliquid beatae iusto
            perspiciatis vero asperiores nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            suscipit quos at dolor atque magni accusantium voluptate architecto
            consequuntur nihil sed repellat sapiente voluptas debitis, quae,
            dolore alias autem labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aut
            dolore ipsum, perferendis, recusandae nisi porro animi similique rem
            repellendus veritatis excepturi ipsa aliquid beatae iusto
            perspiciatis vero asperiores nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            suscipit quos at dolor atque magni accusantium voluptate architecto
            consequuntur nihil sed repellat sapiente voluptas debitis, quae,
            dolore alias autem labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aut
            dolore ipsum, perferendis, recusandae nisi porro animi similique rem
            repellendus veritatis excepturi ipsa aliquid beatae iusto
            perspiciatis vero asperiores nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            suscipit quos at dolor atque magni accusantium voluptate architecto
            consequuntur nihil sed repellat sapiente voluptas debitis, quae,
            dolore alias autem labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aut
            dolore ipsum, perferendis, recusandae nisi porro animi similique rem
            repellendus veritatis excepturi ipsa aliquid beatae iusto
            perspiciatis vero asperiores nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            suscipit quos at dolor atque magni accusantium voluptate architecto
            consequuntur nihil sed repellat sapiente voluptas debitis, quae,
            dolore alias autem labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aut
            dolore ipsum, perferendis, recusandae nisi porro animi similique rem
            repellendus veritatis excepturi ipsa aliquid beatae iusto
            perspiciatis vero asperiores nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            suscipit quos at dolor atque magni accusantium voluptate architecto
            consequuntur nihil sed repellat sapiente voluptas debitis, quae,
            dolore alias autem labore.
          </p>
        </div>
        <button
          className="absolute -top-4 -right-4 z-1 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 shadow"
          onClick={() => {
            dialogRef.current?.close();
          }}
        >
          <X className="h-6 w-6 text-neutral-800" />
          <span className="sr-only">Close</span>
        </button>
      </dialog>
    </div>
  );
}
