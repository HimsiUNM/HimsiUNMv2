import { OrganizationChartSection } from "@/components/organisasi/organization-chart";
import { PageHeader } from "@/components/organisasi/pageheader";

export default function StrukturOrganisasiPage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <PageHeader />

        {/* Bagan struktur organisasi */}
        <div className="mt-16 sm:mt-20">
          <OrganizationChartSection />
        </div>
      </div>
    </main>
  );
}