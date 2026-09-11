"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  History,
  Target,
  Image as ImageIcon,
  Network,
  LayoutGrid,
  BookOpen,
  MessageSquare,
  Newspaper,
  Megaphone,
  Calendar,
  ShieldQuestion,
} from "lucide-react";
import Image from "next/image";

interface NavGrandchild {
  href: string;
  label: string;
}

interface NavChild {
  href: string;
  label: string;
  description: string;
  icon: React.ElementType;
  children?: NavGrandchild[];
}

interface NavLink {
  href: string;
  label: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Beranda" },

  // 1. TENTANG KAMI (Identitas)
  {
    href: "/tentang",
    label: "Tentang Kami",
    children: [
      {
        href: "/tentang/sejarah",
        label: "Sejarah HIMSI",
        description: "Perjalanan berdirinya himpunan",
        icon: History,
      },
      {
        href: "/tentang/visi-misi",
        label: "Visi & Misi",
        description: "Arah dan tujuan organisasi",
        icon: Target,
      },
      {
        href: "/tentang/filosofi-logo",
        label: "Filosofi Logo",
        description: "Makna di balik lambang HIMSI",
        icon: ImageIcon,
      },
    ],
  },

  // 2. KEPENGURUSAN (Operasional & SDM)
  {
    href: "/kepengurusan",
    label: "Kepengurusan",
    children: [
      {
        href: "/kepengurusan/struktur-organisasi",
        label: "Struktur Organisasi",
        description: "Susunan pengurus periode ini",
        icon: Network,
      },
      {
        href: "/kepengurusan/divisi",
        label: "Divisi & Departemen",
        description: "Bidang kerja tiap divisi",
        icon: LayoutGrid,
        children: [
          { href: "/kepengurusan/divisi/bikraf", label: "Bikraf" },
          { href: "/kepengurusan/divisi/psdm", label: "PSDM" },
          { href: "/kepengurusan/divisi/humas", label: "Humas" },
          { href: "/kepengurusan/divisi/pubdok", label: "Pubdok" },
          { href: "/kepengurusan/divisi/litbang", label: "Litbang" },
        ],
      },
    ],
  },

  // 3. LAYANAN MAHASISWA
  {
    href: "/layanan",
    label: "Layanan",
    children: [
      {
        href: "/layanan/aspirasi",
        label: "Kotak Aspirasi",
        description: "Sampaikan keluhan dan saranmu",
        icon: MessageSquare,
      },
      {
        href: "https://www.nusamandiri.ac.id/",
        label: "Pusat Bantuan (Advokasi)",
        description: "Informasi UKT, Beasiswa & Bantuan",
        icon: ShieldQuestion,
      },
    ],
  },

  // 4. INFORMASI & MEDIA
  {
    href: "/informasi",
    label: "Informasi",
    children: [
      {
        href: "/informasi/berita",
        label: "Berita",
        description: "Kabar terbaru seputar HIMSI",
        icon: Newspaper,
      },
      {
        href: "/informasi/pengumuman",
        label: "Pengumuman",
        description: "Informasi penting untuk mahasiswa",
        icon: Megaphone,
      },
      {
        href: "/informasi/kegiatan",
        label: "Kegiatan",
        description: "Event mendatang",
        icon: Calendar,
      },
    ],
  },

  // 5. HIMSI STORE
  { href: "https://www.instagram.com/bikraf.co/", label: "HIMSI Store" },

  // 6. KONTAK
  { href: "/#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [desktopSubmenu, setDesktopSubmenu] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  // --- STATE UNTUK SCROLL BEHAVIOR ---
  const [isScrolled, setIsScrolled] = useState(false); // udah discroll dari top atau belum (buat shrink + bg)
  const [isHidden, setIsHidden] = useState(false); // navbar disembunyikan atau nggak
  const lastScrollY = useRef(0);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // shrink + background muncul begitu scroll > 20px dari top
      setIsScrolled(currentScrollY > 20);

      // tentuin arah scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // scroll ke bawah & udah lewat 100px -> sembunyikan
        setIsHidden(true);
        setDesktopDropdown(null);
        setDesktopSubmenu(null);
        setMobileDropdown(null);
        setMobileSubmenu(null);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        // scroll ke atas -> munculin lagi
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdown(null);
        setDesktopSubmenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopDropdown(null);
        setDesktopSubmenu(null);
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    setDesktopDropdown(null);
    setDesktopSubmenu(null);
    setMobileDropdown(null);
    setMobileSubmenu(null);
    setIsOpen(false);
  }, [pathname]);

  const isExternal = (href: string) => href.startsWith("http");

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isParentActive = (link: NavLink) =>
    isActive(link.href) || (link.children?.some((c) => isActive(c.href)) ?? false);

  const isChildActive = (child: NavChild) =>
    isActive(child.href) || (child.children?.some((g) => isActive(g.href)) ?? false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2 group">
            <div
              className={`rounded-lg overflow-hidden group-hover:ring-primary/40 transition-all duration-300 ${
                isScrolled ? "w-8 h-8 md:w-9 md:h-9" : "w-10 h-10 md:w-12 md:h-12"
              }`}
            >
              <Image
                src="/logohimsi2.png"
                alt="Logo HIMSI Nusa Mandiri"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                HIMSI
              </span>
              <span className="text-xs text-gray-500">Nusa Mandiri</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5 xl:gap-1" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative">
                  <button
                    onClick={() =>
                      setDesktopDropdown(desktopDropdown === link.href ? null : link.href)
                    }
                    className={`relative flex items-center gap-1 px-2.5 xl:px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                      isParentActive(link)
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    aria-expanded={desktopDropdown === link.href}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        desktopDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                    {isParentActive(link) && (
                      <span className="absolute -bottom-[9px] left-2.5 right-2.5 h-0.5 bg-primary rounded-full" />
                    )}
                  </button>

                  {desktopDropdown === link.href && (
                    <div className="absolute left-0 top-full mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-1 zoom-in-95 duration-150">
                      {link.children.map((child) => {
                        const Icon = child.icon;
                        const active = isChildActive(child);
                        const hasSub = !!child.children?.length;
                        const subOpen = desktopSubmenu === child.href;

                        if (!hasSub) {
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              {...(isExternal(child.href)
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                              aria-current={active ? "page" : undefined}
                              className={`flex items-start gap-3 px-4 py-2.5 transition-colors ${
                                active
                                  ? "bg-primary/5 text-primary"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                              }`}
                              onClick={() => setDesktopDropdown(null)}
                            >
                              <Icon
                                size={18}
                                className={`mt-0.5 shrink-0 ${
                                  active ? "text-primary" : "text-gray-400"
                                }`}
                              />
                              <span className="flex flex-col">
                                <span className="text-sm font-medium">{child.label}</span>
                                <span className="text-xs text-gray-500">
                                  {child.description}
                                </span>
                              </span>
                            </Link>
                          );
                        }

                        return (
                          <div key={child.href}>
                            <button
                              onClick={() =>
                                setDesktopSubmenu(subOpen ? null : child.href)
                              }
                              aria-expanded={subOpen}
                              className={`w-full flex items-start gap-3 px-4 py-2.5 transition-colors ${
                                active
                                  ? "bg-primary/5 text-primary"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                              }`}
                            >
                              <Icon
                                size={18}
                                className={`mt-0.5 shrink-0 ${
                                  active ? "text-primary" : "text-gray-400"
                                }`}
                              />
                              <span className="flex flex-col flex-1 text-left">
                                <span className="text-sm font-medium">{child.label}</span>
                                <span className="text-xs text-gray-500">
                                  {child.description}
                                </span>
                              </span>
                              <ChevronRight
                                size={16}
                                className={`mt-1 shrink-0 transition-transform duration-200 ${
                                  subOpen ? "rotate-90" : ""
                                } ${active ? "text-primary" : "text-gray-400"}`}
                              />
                            </button>

                            {subOpen && (
                              <div className="ml-4 pl-4 border-l-2 border-gray-100 py-1 space-y-0.5">
                                {child.children!.map((grand) => {
                                  const gActive = isActive(grand.href);
                                  return (
                                    <Link
                                      key={grand.href}
                                      href={grand.href}
                                      {...(isExternal(grand.href)
                                        ? { target: "_blank", rel: "noopener noreferrer" }
                                        : {})}
                                      aria-current={gActive ? "page" : undefined}
                                      className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                                        gActive
                                          ? "text-primary bg-primary/5 font-medium"
                                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                      }`}
                                      onClick={() => {
                                        setDesktopDropdown(null);
                                        setDesktopSubmenu(null);
                                      }}
                                    >
                                      {grand.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(isExternal(link.href)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative px-2.5 xl:px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-[9px] left-2.5 right-2.5 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA Button + Mobile Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/pendaftaran"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              Gabung Sekarang
              <ArrowRight size={15} />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-gray-100 pt-3 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === link.href ? null : link.href)
                    }
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isParentActive(link)
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                    aria-expanded={mobileDropdown === link.href}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdown === link.href && (
                    <div className="pl-4 mt-1 space-y-0.5 border-l-2 border-gray-100 ml-3">
                      {link.children.map((child) => {
                        const Icon = child.icon;
                        const active = isChildActive(child);
                        const hasSub = !!child.children?.length;
                        const subOpen = mobileSubmenu === child.href;

                        if (!hasSub) {
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              {...(isExternal(child.href)
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                              aria-current={active ? "page" : undefined}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                                active
                                  ? "text-primary bg-primary/5 font-medium"
                                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdown(null);
                              }}
                            >
                              <Icon size={16} className={active ? "text-primary" : "text-gray-400"} />
                              {child.label}
                            </Link>
                          );
                        }

                        return (
                          <div key={child.href}>
                            <button
                              onClick={() =>
                                setMobileSubmenu(subOpen ? null : child.href)
                              }
                              aria-expanded={subOpen}
                              className={`w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                                active
                                  ? "text-primary bg-primary/5 font-medium"
                                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
                              }`}
                            >
                              <span className="flex items-center gap-2.5">
                                <Icon size={16} className={active ? "text-primary" : "text-gray-400"} />
                                {child.label}
                              </span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${
                                  subOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            {subOpen && (
                              <div className="pl-4 mt-1 space-y-0.5 border-l-2 border-gray-100 ml-3">
                                {child.children!.map((grand) => {
                                  const gActive = isActive(grand.href);
                                  return (
                                    <Link
                                      key={grand.href}
                                      href={grand.href}
                                      {...(isExternal(grand.href)
                                        ? { target: "_blank", rel: "noopener noreferrer" }
                                        : {})}
                                      aria-current={gActive ? "page" : undefined}
                                      className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                                        gActive
                                          ? "text-primary bg-primary/5 font-medium"
                                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                      }`}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setMobileDropdown(null);
                                        setMobileSubmenu(null);
                                      }}
                                    >
                                      {grand.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(isExternal(link.href)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/5"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              href="/pendaftaran"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 mt-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg transition-shadow"
            >
              Gabung Sekarang
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}