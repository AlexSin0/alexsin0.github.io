import { X } from "lucide-react";
import { useRef } from "react";

export default function Picture({ src }: { src: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div>
      <img
        src={src}
        alt="illustration"
        className="glow-badge max-h-50 cursor-pointer rounded-sm border-2 bg-zinc-400 shadow-zinc-400"
        onClick={() => {
          dialogRef.current?.showModal();
        }}
      />

      <dialog
        ref={dialogRef}
        className="modal-center overflow-visible rounded-sm backdrop:bg-white/30"
      >
        <div className="rounded-sm text-center">
          <img
            src={src}
            alt="illustration"
            className="max-h-[95vh] max-w-[95vw]"
          />
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
