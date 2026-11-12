"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import type { Project, Strings } from "@/lib/content";

export type CatFilter = "All" | "Platform" | "Web App";

interface WorkProps {
  t: Strings;
  filter: CatFilter;
  onSetFilter: (filter: CatFilter) => void;
  projects: Project[];
  onOpen: (id: string) => void;
  lang: "en" | "vi";
}

const CAT_KEYS: CatFilter[] = ["All", "Platform", "Web App"];

export default function Work({ t, filter, onSetFilter, projects, onOpen, lang }: WorkProps) {
  const router = useRouter();
  const catLabels =
    lang === "en" ? ["All", "Platform", "Web App"] : ["Tất cả", "Nền tảng", "Ứng dụng web"];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section
      id="work"
      className="bg-bg2 border-t border-line transition-colors duration-[400ms]"
      style={{ scrollMarginTop: 72 }}
    >
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-9">
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-muted mb-3.5">
              {t.workLabel}
            </div>
            <h2 className="font-serif font-normal text-[clamp(30px,4.4vw,46px)] leading-[1.05] tracking-[-0.015em] m-0">
              {t.workTitle}
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {CAT_KEYS.map((key, i) => {
              const active = key === filter;
              return (
                <button
                  key={key}
                  onClick={() => onSetFilter(key)}
                  className={`font-mono text-[12.5px] cursor-pointer px-4 py-2.5 rounded-full tracking-[0.02em] transition-colors border ${
                    active
                      ? "border-text bg-text text-invert"
                      : "border-line bg-transparent text-muted"
                  }`}
                >
                  {catLabels[i]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-[22px]" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))" }}>
          {filtered.map((p) => {
            const isLi2 = p.id === "li2";
            return (
              <motion.button
                key={p.id}
                onClick={() => {
                  if (isLi2) {
                    router.push("/work/li2");
                  } else {
                    onOpen(p.id);
                  }
                }}
                whileHover={{ y: -5, boxShadow: "0 26px 50px -26px var(--shadow)" }}
                className="text-left bg-surface border border-line rounded-[18px] overflow-hidden cursor-pointer flex flex-col group relative"
              >
                <div
                  className="h-[175px] relative flex items-end p-[18px] overflow-hidden"
                  style={{ background: p.coverImage ? "#1c1917" : p.cover }}
                >
                  {p.coverImage && (
                    <>
                      <img
                        src={p.coverImage}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    </>
                  )}
                  <span className="font-mono text-[11px] tracking-[0.1em] text-white/90 absolute top-4 left-[18px] z-10 drop-shadow-sm">
                    {p.tag}
                  </span>
                  {isLi2 && (
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white border border-white/25 absolute top-4 right-[18px] backdrop-blur-md z-10 shadow-sm">
                      {lang === "vi" ? "Kiến trúc Hệ thống ↗" : "System Arch ↗"}
                    </span>
                  )}
                  <span className="font-serif text-[34px] text-[#FFFCF6] relative z-10 drop-shadow-sm">{p.name}</span>
                </div>
                <div className="p-[22px] flex flex-col gap-3.5 flex-1">
                  <p className="text-[15px] leading-[1.55] text-muted m-0">{p.tagline}</p>
                  <div className="flex gap-[7px] flex-wrap">
                    {p.stackTop.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] text-accent2 border border-line rounded-md px-2 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-1.5 text-sm font-semibold text-accent flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    {isLi2
                      ? lang === "vi"
                        ? "Xem Kiến trúc Hệ thống ↗"
                        : "Explore System Architecture ↗"
                      : t.viewCase}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
