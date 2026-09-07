"use client";

import { motion } from "framer-motion";
import { Avatar } from "./avatar";
import type { Department } from "@/lib/data/struktur-organisasi";

interface DepartmentCardProps {
  data: Department;
  index?: number;
  onSelect?: () => void;
}

export function DepartmentCard({ data, index = 0, onSelect }: DepartmentCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97 }}
      className="flex w-32 cursor-pointer flex-col items-center rounded-2xl border border-border bg-card p-3 pt-4 text-center text-card-foreground shadow-sm transition-shadow duration-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-40 sm:p-4 sm:pt-5"
    >
      <Avatar src={data.image} alt={data.name} size="sm" />

      <p className="mt-3 text-xs font-semibold leading-tight text-primary sm:text-sm">
        {data.name}
      </p>
      <p className="mt-1 text-xs leading-tight text-card-foreground sm:text-sm">
        {data.leader}
      </p>
      <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground sm:text-xs">
        {data.description}
      </p>
    </motion.button>
  );
}