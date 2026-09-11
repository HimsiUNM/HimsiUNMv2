"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Avatar } from "./avatar";
import type { BPIPosition } from "@/lib/data/struktur-organisasi";

interface PositionCardProps {
  data: BPIPosition;
  prominent?: boolean;
  index?: number;
  onSelect?: () => void;
}

export function PositionCard({
  data,
  prominent = false,
  index = 0,
  onSelect,
}: PositionCardProps) {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.();
        }
      }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-shadow duration-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        prominent
          ? "w-36 border-primary/25 p-4 pt-5 sm:w-44 sm:p-5 sm:pt-6"
          : "w-28 border-border p-3 pt-4 sm:w-36 sm:p-4 sm:pt-5"
      )}
    >
      {/* aksen strip di atas card — hanya untuk posisi yang ditonjolkan (Ketua) */}
      {prominent && (
        <span
          className="absolute inset-x-0 top-0 h-1 bg-primary"
          aria-hidden="true"
        />
      )}

      <Avatar
        src={data.image}
        alt={data.name}
        size={prominent ? "lg" : "sm"}
        accent={prominent}
      />

      <p
        className={cn(
          "mt-3 text-center font-semibold leading-tight",
          prominent
            ? "text-sm text-primary sm:text-base"
            : "text-xs text-foreground sm:text-sm"
        )}
      >
        {data.position}
      </p>
      <p className="mt-1 text-center text-xs leading-tight text-muted-foreground sm:text-sm">
        {data.name}
      </p>
    </motion.div>
  );
}