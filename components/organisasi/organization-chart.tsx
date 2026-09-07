"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { bpi, departments } from "@/lib/data/struktur-organisasi";
import { PositionCard } from "./position-card";
import { DepartmentCard } from "./department-card";
import { StemDown, TreeBranch, TreeHub, VerticalStack } from "./tree-connectors";
import { PersonModal, type PersonDetail } from "./person-modal";

export function OrganizationChart() {
  const [selected, setSelected] = useState<PersonDetail | null>(null);

  // Tier BPI: Ketua sendiri di atas, Wakil Ketua sendiri di bawahnya,
  // lalu Sekretaris 1&2 + Bendahara 1&2 sejajar di level berikutnya.
  // Sekretaris 1 tetap TIDAK jadi bawahan Sekretaris 2 (begitu juga
  // Bendahara) — keduanya cuma berbagi level/tier yang sama.
  const [ketua, wakilKetua, ...staffPositions] = bpi;

  return (
    <div className="w-full">
      {/* ============ DESKTOP / TABLET: bagan bertingkat dengan connector ============ */}
      <div className="hidden md:block">
        {/* overflow-x-auto berjaga-jaga di tablet bila baris 4 card tidak muat */}
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
                      email: ketua.email,
                      instagram: ketua.instagram,
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
                      email: wakilKetua.email,
                      instagram: wakilKetua.instagram,
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
                      email: item.email,
                      instagram: item.instagram,
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
                      email: dept.email,
                      instagram: dept.instagram,
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
          <TreeHub label="Badan Pengurus Inti (BPI)" />
          <StemDown heightClass="h-6" />

          <VerticalStack>
            {bpi.map((item, i) => (
              <PositionCard
                key={item.position}
                data={item}
                prominent={item.prominent}
                index={i}
                onSelect={() =>
                  setSelected({
                    name: item.name,
                    role: item.position,
                    group: "BPI",
                    image: item.image,
                    bio: item.bio,
                    email: item.email,
                    instagram: item.instagram,
                  })
                }
              />
            ))}
          </VerticalStack>

          <StemDown heightClass="h-8" />
          <TreeHub label="Departemen" />
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
                    email: dept.email,
                    instagram: dept.instagram,
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