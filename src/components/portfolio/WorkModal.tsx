"use client";

import { motion } from "framer-motion";
import type { Project, Strings } from "@/lib/content";

interface WorkModalProps {
  project: Project;
  t: Strings;
  onClose: () => void;
}

export default function WorkModal({ project, t, onClose }: WorkModalProps) {
  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-[rgba(20,12,6,0.55)] backdrop-blur-md flex items-start justify-center overflow-y-auto px-4"
      style={{ paddingTop: "clamp(16px,4vw,56px)", paddingBottom: "clamp(16px,4vw,56px)" }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
        className="bg-bg text-text w-full rounded-[22px] overflow-hidden shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] my-auto"
        style={{ maxWidth: 820 }}
      >
        <div
          className="h-[200px] relative flex items-end p-[26px]"
          style={{ background: project.cover }}
        >
          <button
            onClick={onClose}
            className="absolute top-[18px] right-[18px] w-[38px] h-[38px] rounded-full border-none bg-black/25 text-white text-lg cursor-pointer flex items-center justify-center"
          >
            ✕
          </button>
          <span className="font-mono text-[11.5px] tracking-[0.1em] text-white/85 absolute top-6 left-[26px]">
            {project.tag}
          </span>
          <div>
            <div className="font-serif text-[44px] text-[#FFFCF6] leading-none">{project.name}</div>
            <div className="text-[15px] text-white/90 mt-1.5">{project.tagline}</div>
          </div>
        </div>
        <div className="p-[clamp(24px,4vw,40px)]">
          <div className="grid grid-cols-3 gap-[18px] border-b border-line pb-6 mb-7">
            <div>
              <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-[7px]">
                {t.mRole}
              </div>
              <div className="text-[15px] font-semibold">{project.role}</div>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-[7px]">
                {t.mTime}
              </div>
              <div className="text-[15px] font-semibold">{project.year}</div>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-[7px]">
                {t.mStack}
              </div>
              <div className="text-[15px] font-semibold">{project.stackLine}</div>
            </div>
          </div>

          {project.sections.map((sec) => (
            <div key={sec.label} className="mb-[26px]">
              <div className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-accent mb-2.5">
                {sec.label}
              </div>
              <p className="text-[16.5px] leading-[1.7] text-text m-0">{sec.body}</p>
            </div>
          ))}

          {project.hasHighlights && project.highlights && (
            <div className="mb-7">
              <div className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-accent mb-3.5">
                {t.builtLabel}
              </div>
              <div className="flex flex-col gap-0.5">
                {project.highlights.map((h) => (
                  <div
                    key={h.t}
                    className="grid gap-[18px] py-3.5 border-t border-line items-baseline"
                    style={{ gridTemplateColumns: "200px 1fr" }}
                  >
                    <div className="text-[15.5px] font-semibold text-text">{h.t}</div>
                    <div className="text-[14.5px] leading-[1.55] text-muted">{h.d}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-bg2 border border-line rounded-2xl p-[22px] grid grid-cols-3 gap-[18px] mt-1.5">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <div className="font-serif text-[30px] text-accent leading-none">{m.value}</div>
                <div className="text-[13.5px] text-muted mt-1.5 leading-[1.4]">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex gap-3.5 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener"
                className="bg-text text-invert no-underline rounded-full px-[26px] py-2 font-semibold text-[15px]"
              >
                {t.mVisit}
              </a>
            )}
            <button
              onClick={onClose}
              className="bg-transparent border border-line text-text rounded-full px-[26px] py-2 font-semibold text-[15px] cursor-pointer"
            >
              {t.mClose}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
