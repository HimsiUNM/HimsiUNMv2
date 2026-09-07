"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardView({ initialData }: { initialData: any[] }) {
  const [rows, setRows] = useState(initialData);

  useEffect(() => {
    const channel = supabase
      .channel("realtime:pendaftaran")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "pendaftaran" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setRows((prev) => [payload.new, ...prev]);
          } else if (payload.eventType === "UPDATE") {
            setRows((prev) =>
              prev.map((r) => (r.id === payload.new.id ? payload.new : r))
            );
          } else if (payload.eventType === "DELETE") {
            setRows((prev) => prev.filter((r) => r.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (!rows.length) {
    return <p className="text-center py-10">No data yet.</p>;
  }

  // Automatically render all columns in a table
  const columns = Object.keys(rows[0]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Pendaftaran Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-4 py-2 text-left font-medium border-b">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col} className="px-4 py-2 text-sm">
                    {String(row[col] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
