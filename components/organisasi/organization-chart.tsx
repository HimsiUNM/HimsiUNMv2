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
    instagram: "@keitakoh",
    instagramUrl: "https://instagram.com/keitakoh",
    image: "/images/bpi/ketua.jpg",
    bio: "Ketua Badan Pengurus Inti",
    prominent: true,
  },
  {
    position: "Wakil Ketua",
    name: "Fadila Hairinnisa",
    instagram: "@fadila.hn",
    instagramUrl: "https://instagram.com/fadila.hn",
    image: "/images/bpi/wakil-ketua.jpg",
    bio: "Wakil Ketua Badan Pengurus Inti",
  },
  {
    position: "Sekretaris 1",
    name: "Ayudhina Nilamsari",
    instagram: "@ayy_din7",
    instagramUrl: "https://instagram.com/ayy_din7",
    image: "/images/bpi/sekretaris-1.jpg",
    bio: "Sekretaris 1 Badan Pengurus Inti",
  },
  {
    position: "Sekretaris 2",
    name: "Syabina 'Afiifah",
    instagram: "@syabiinnaa",
    instagramUrl: "https://instagram.com/syabiinnaa",
    image: "/images/bpi/sekretaris-2.jpg",
    bio: "Sekretaris 2 Badan Pengurus Inti",
  },
  {
    position: "Bendahara 1",
    name: "Keysha Naya Nasyira",
    instagram: "@kyshna_",
    instagramUrl: "https://instagram.com/kyshna_",
    image: "/images/bpi/bendahara-1.jpg",
    bio: "Bendahara 1 Badan Pengurus Inti",
  },
  {
    position: "Bendahara 2",
    name: "Daffa Isra Rabbani",
    instagram: "@dapaaaisra_",
    instagramUrl: "https://instagram.com/dapaaaisra_",
    image: "/images/bpi/bendahara-2.jpg",
    bio: "Bendahara 2 Badan Pengurus Inti",
  },
];

// Data Departemen
export const departments = [
  {
    name: "PSDM",
    description: "Kepala Departemen PSDM",
    leader: "Akhdan Faqih Athallah",
    instagram: "@hyy_adan",
    instagramUrl: "https://instagram.com/hyy_adan",
    image: "/images/departments/psdm.jpg",
    bio: "Kepala Departemen Pengembangan Sumber Daya Manusia",
  },
  {
    name: "Bikraf",
    description: "Kepala Departemen Bikraf",
    leader: "Ayu Febriyanti",
    instagram: "@aeenll",
    instagramUrl: "https://instagram.com/pisces_girl_27",
    image: "/images/departments/bikraf.jpg",
    bio: "Kepala Departemen Bisnis Kreatif",
  },
  {
    name: "Litbang",
    description: "Kepala Departemen Litbang",
    leader: "Rizqi Fauzi",
    instagram: "@rizqifau__",
    instagramUrl: "https://instagram.com/rizqifau__",
    image: "/images/departments/litbang.jpg",
    bio: "Kepala Departemen Penelitian dan Pengembangan",
  },
  {
    name: "Humas",
    description: "Kepala Departemen Humas",
    leader: "Karlos Nanriano S",
    instagram: "@karlosns_",
    instagramUrl: "https://instagram.com/karlosns_",
    image: "/images/departments/humas.jpg",
    bio: "Kepala Departemen Hubungan Masyarakat",
  },
  {
    name: "Pubdoc",
    description: "Kepala Departemen Pubdoc",
    leader: "Farhan Naufal Idris",
    instagram: "@hannnaufl",
    instagramUrl: "https://instagram.com/hannnaufl",
    image: "/images/departments/pubdoc.jpg",
    bio: "Kepala Departemen Publikasi dan Dokumentasi",
  },
];

export function OrganizationChart() {
  const [selected, setSelected] = useState<(PersonDetail & { instagramUrl?: string }) | null>(
    null,
  );

  // Tier BPI: Ketua sendiri di atas, Wakil Ketua sendiri di bawahnya,
  // lalu Sekretaris 1&2 + Bendahara 1&2 sejajar di level berikutnya.
  const [ketua, wakilKetua, ...staffPositions] = bpi;

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
                  onSelect={() =>
                    setSelected({
                      name: ketua.name,
                      role: ketua.position,
                      group: "BPI",
                      image: ketua.image,
                      bio: ketua.bio,
                      instagram: ketua.instagram,
                      instagramUrl: ketua.instagramUrl,
                    })
                  }
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
                  onSelect={() =>
                    setSelected({
                      name: wakilKetua.name,
                      role: wakilKetua.position,
                      group: "BPI",
                      image: wakilKetua.image,
                      bio: wakilKetua.bio,
                      instagram: wakilKetua.instagram,
                      instagramUrl: wakilKetua.instagramUrl,
                    })
                  }
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
                  onSelect={() =>
                    setSelected({
                      name: item.name,
                      role: item.position,
                      group: "BPI",
                      image: item.image,
                      bio: item.bio,
                      instagram: item.instagram,
                      instagramUrl: item.instagramUrl,
                    })
                  }
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
                  onSelect={() =>
                    setSelected({
                      name: dept.leader,
                      role: `Kepala Departemen ${dept.name}`,
                      group: dept.name,
                      image: dept.image,
                      bio: dept.bio,
                      instagram: dept.instagram,
                      instagramUrl: dept.instagramUrl,
                    })
                  }
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
                onSelect={() =>
                  setSelected({
                    name: ketua.name,
                    role: ketua.position,
                    group: "BPI",
                    image: ketua.image,
                    bio: ketua.bio,
                    instagram: ketua.instagram,
                    instagramUrl: ketua.instagramUrl,
                  })
                }
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
                onSelect={() =>
                  setSelected({
                    name: wakilKetua.name,
                    role: wakilKetua.position,
                    group: "BPI",
                    image: wakilKetua.image,
                    bio: wakilKetua.bio,
                    instagram: wakilKetua.instagram,
                    instagramUrl: wakilKetua.instagramUrl,
                  })
                }
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
                onSelect={() =>
                  setSelected({
                    name: item.name,
                    role: item.position,
                    group: "BPI",
                    image: item.image,
                    bio: item.bio,
                    instagram: item.instagram,
                    instagramUrl: item.instagramUrl,
                  })
                }
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
                onSelect={() =>
                  setSelected({
                    name: dept.leader,
                    role: `Kepala Departemen ${dept.name}`,
                    group: dept.name,
                    image: dept.image,
                    bio: dept.bio,
                    instagram: dept.instagram,
                    instagramUrl: dept.instagramUrl,
                  })
                }
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