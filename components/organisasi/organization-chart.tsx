"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PositionCard } from "./position-card";
import { DepartmentCard } from "./department-card";
import { StemDown, TreeBranch, VerticalStack } from "./tree-connectors";
import { PersonModal, type PersonDetail } from "./person-modal";

// Data BPI Inti
export const bpi = [
  {
    position: "Ketua",
    name: "Kezia Tamariska Kohandi",
    angkatan: "2024",
    tanggalLahir: "20/09/1997",
    instagram: "@keitakoh",
    instagramUrl: "https://instagram.com/keitakoh",
    image: "/bpi/7.png",
    bio: "Ketua Badan Pengurus Inti",
    prominent: true,
  },
  {
    position: "Wakil Ketua",
    name: "Fadila Hairinnisa",
    angkatan: "2024",
    tanggalLahir: "11/05/2006",
    instagram: "@fadila.hn",
    instagramUrl: "https://instagram.com/fadila.hn",
    image: "/bpi/9.png",
    bio: "Wakil Ketua Badan Pengurus Inti",
  },
  {
    position: "Sekretaris 1",
    name: "Ayudhina Nilamsari",
    angkatan: "2025",
    tanggalLahir: "5/20/2007",
    instagram: "@ayy_din7",
    instagramUrl: "https://instagram.com/ayy_din7",
    image: "/bpi/12.png",
    bio: "Sekretaris 1 Badan Pengurus Inti",
  },
  {
    position: "Sekretaris 2",
    name: "Syabina 'Afiifah",
    angkatan: "2025",
    tanggalLahir: "4/22/2006",
    instagram: "@syabiinnaa",
    instagramUrl: "https://instagram.com/syabiinnaa",
    image: "/bpi/14.png",
    bio: "Sekretaris 2 Badan Pengurus Inti",
  },
  {
    position: "Bendahara 1",
    name: "Keysha Naya Nasyira",
    angkatan: "2025",
    tanggalLahir: "6/8/2006",
    instagram: "@kyshna_",
    instagramUrl: "https://instagram.com/kyshna_",
    image: "/bpi/16.png",
    bio: "Bendahara 1 Badan Pengurus Inti",
  },
  {
    position: "Bendahara 2",
    name: "Daffa Isra Rabbani",
    angkatan: "2025",
    tanggalLahir: "8/14/2007",
    instagram: "@dapaaaisra_",
    instagramUrl: "https://instagram.com/dapaaaisra_",
    image: "/bpi/18.png",
    bio: "Bendahara 2 Badan Pengurus Inti",
  },
];

// Data Departemen
export const departments = [
  {
    name: "PSDM",
    description: "Kepala Departemen PSDM",
    leader: "Akhdan Faqih Athallah",
    angkatan: "2024",
    tanggalLahir: "4/11/2006",
    instagram: "@hyy_adan",
    instagramUrl: "https://instagram.com/hyy_adan",
    image: "/psdm/35.png",
    bio: "Kepala Departemen Pengembangan Sumber Daya Manusia",
  },
  {
    name: "Bikraf",
    description: "Kepala Departemen Bikraf",
    leader: "Ayu Febriyanti",
    angkatan: "2024",
    tanggalLahir: "2/27/2005",
    instagram: "@pisces_girl_27",
    instagramUrl: "https://instagram.com/pisces_girl_27",
    image: "/bikraf/76.png",
    bio: "Kepala Departemen Bisnis Kreatif",
  },
  {
    name: "Litbang",
    description: "Kepala Departemen Litbang",
    leader: "Rizqi Fauzi",
    angkatan: "2024",
    tanggalLahir: "28/03/2006",
    instagram: "@rizqifau__",
    instagramUrl: "https://instagram.com/rizqifau__",
    image: "/litbang/67.png",
    bio: "Kepala Departemen Penelitian dan Pengembangan",
  },
  {
    name: "Humas",
    description: "Kepala Departemen Humas",
    leader: "Karlos Nanriano S",
    angkatan: "2024",
    tanggalLahir: "6/30/2006",
    instagram: "@karlosns_",
    instagramUrl: "https://instagram.com/karlosns_",
    image: "/humas/52.png",
    bio: "Kepala Departemen Hubungan Masyarakat",
  },
  {
    name: "Pubdoc",
    description: "Kepala Departemen Pubdoc",
    leader: "Farhan Naufal Idris",
    angkatan: "2024",
    tanggalLahir: "3/13/2006",
    instagram: "@hannnaufl",
    instagramUrl: "https://instagram.com/hannnaufl",
    image: "/pubdok/21.png",
    bio: "Kepala Departemen Publikasi dan Dokumentasi",
  },
];

// Helper: bangun PersonDetail dari data BPI atau Departemen
function toPersonDetail(
  entry:
    | (typeof bpi)[number]
    | ((typeof departments)[number] & { position?: never }),
  overrides: Partial<PersonDetail> = {},
): PersonDetail {
  const isBpiEntry = "position" in entry;

  return {
    name: isBpiEntry ? entry.name : entry.leader,
    role: isBpiEntry ? entry.position ?? "" : "",
    image: entry.image,
    bio: entry.bio,
    instagram: entry.instagram,
    instagramUrl: entry.instagramUrl,
    angkatan: entry.angkatan,
    tanggalLahir: entry.tanggalLahir,
    ...overrides,
  };
}

export function OrganizationChart() {
  const [selected, setSelected] = useState<PersonDetail | null>(null);

  // Tier BPI: Ketua sendiri di atas, Wakil Ketua sendiri di bawahnya,
  // lalu Sekretaris 1&2 + Bendahara 1&2 sejajar di level berikutnya.
  const [ketua, wakilKetua, ...staffPositions] = bpi;

  const selectBpi = (item: (typeof bpi)[number]) =>
    setSelected(toPersonDetail(item, { group: "BPI" }));

  const selectDepartment = (dept: (typeof departments)[number]) =>
    setSelected(
      toPersonDetail(dept, {
        role: `Kepala Departemen ${dept.name}`,
        group: dept.name,
      }),
    );

  return (
    <div className="w-full">
      {/* ============ DESKTOP / TABLET: bagan bertingkat dengan connector ============ */}
      <div className="hidden md:block">
        <div className="w-full overflow-x-auto pb-4">
          <div className="mx-auto flex min-w-fit flex-col items-center">
            {/* Tier 1: Ketua sendiri */}
            <TreeBranch>
              {[
                <PositionCard
                  key={ketua.position}
                  data={ketua}
                  prominent={ketua.prominent}
                  index={0}
                  onSelect={() => selectBpi(ketua)}
                />,
              ]}
            </TreeBranch>

            {/* Tier 2: Wakil Ketua sendiri, di bawah Ketua */}
            <TreeBranch>
              {[
                <PositionCard
                  key={wakilKetua.position}
                  data={wakilKetua}
                  index={1}
                  onSelect={() => selectBpi(wakilKetua)}
                />,
              ]}
            </TreeBranch>

            {/* Tier 3: Sekretaris 1&2 dan Bendahara 1&2 — sejajar satu sama lain */}
            <TreeBranch>
              {staffPositions.map((item, i) => (
                <PositionCard
                  key={item.position}
                  data={item}
                  index={i + 2}
                  onSelect={() => selectBpi(item)}
                />
              ))}
            </TreeBranch>

            {/* Turun ke level Departemen */}
            <StemDown heightClass="h-10" />

            <TreeBranch>
              {departments.map((dept, i) => (
                <DepartmentCard
                  key={dept.name}
                  data={dept}
                  index={i}
                  onSelect={() => selectDepartment(dept)}
                />
              ))}
            </TreeBranch>
          </div>
        </div>
      </div>

      {/* ============ MOBILE: tree vertikal, satu kolom ============ */}
      <div className="md:hidden">
        <div className="flex flex-col items-center">
          {/* Tier 1: Ketua sendiri */}
          <StemDown heightClass="h-6" />
          <VerticalStack>
            {[
              <PositionCard
                key={ketua.position}
                data={ketua}
                prominent={ketua.prominent}
                index={0}
                onSelect={() => selectBpi(ketua)}
              />,
            ]}
          </VerticalStack>

          {/* Tier 2: Wakil Ketua sendiri, di bawah Ketua */}
          <StemDown heightClass="h-6" />
          <VerticalStack>
            {[
              <PositionCard
                key={wakilKetua.position}
                data={wakilKetua}
                index={1}
                onSelect={() => selectBpi(wakilKetua)}
              />,
            ]}
          </VerticalStack>

          {/* Tier 3: Sekretaris 1&2 dan Bendahara 1&2 — sejajar satu sama lain */}
          <StemDown heightClass="h-6" />
          <VerticalStack>
            {staffPositions.map((item, i) => (
              <PositionCard
                key={item.position}
                data={item}
                index={i + 2}
                onSelect={() => selectBpi(item)}
              />
            ))}
          </VerticalStack>

          {/* Turun ke level Departemen */}
          <StemDown heightClass="h-8" />
          <StemDown heightClass="h-6" />

          <VerticalStack>
            {departments.map((dept, i) => (
              <DepartmentCard
                key={dept.name}
                data={dept}
                index={i}
                onSelect={() => selectDepartment(dept)}
              />
            ))}
          </VerticalStack>
        </div>
      </div>

      <PersonModal person={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export function OrganizationChartSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <OrganizationChart />
    </motion.section>
  );
}