"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  /** dipakai untuk card yang lebih prominent (mis. Ketua) */
  accent?: boolean;
}

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "h-12 w-12 text-xs sm:h-14 sm:w-14 sm:text-sm",
  md: "h-14 w-14 text-sm sm:h-16 sm:w-16 sm:text-base",
  lg: "h-16 w-16 text-base sm:h-20 sm:w-20 sm:text-lg",
};

export function Avatar({ src, alt, size = "md", accent = false }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-2",
        accent ? "ring-primary/30" : "ring-border",
        sizeClasses[size]
      )}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="96px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className={cn(
            "flex h-full w-full items-center justify-center font-semibold",
            accent ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
          )}
        >
          {getInitials(alt)}
        </div>
      )}
    </div>
  );
}