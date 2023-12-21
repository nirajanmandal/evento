import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link
          href={previousPath}
          className="text-white flex items-center rounded-md gap-x-2 px-5 py-3 text-sm bg-white/5 opacity-75 hover:opacity-100 transition"
        >
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link
          href={nextPath}
          className="text-white flex items-center rounded-md gap-x-2 px-5 py-3 text-sm bg-white/5 opacity-75 hover:opacity-100 transition"
        >
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
