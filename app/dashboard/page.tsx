import { supabase } from "@/lib/supabaseClient";
import DashboardView from "./DashboardView";

export default async function DashboardPage() {
  const { data, error } = await supabase
    .from("pendaftar_himsi")
    .select("*")

  if (error) {
    console.error("Error fetching data:", error.message);
    return <p>Failed to load data.</p>;
  }

  return <DashboardView initialData={data || []} />;
}
