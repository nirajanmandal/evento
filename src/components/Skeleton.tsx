import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: React.ReactNode;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[550px] rounded-md bg-white/5",
        className
      )}
    />
  );
}
