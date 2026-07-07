"use client";

import { motion } from "framer-motion";
import type { Strings } from "@/lib/content";

export default function Contact({ t }: { t: Strings }) {
  return (
    <section
      id="contact"
      className="bg-text text-invert transition-colors duration-[400ms]"
      style={{ scrollMarginTop: 72 }}
    >
      <div className="max-w-[1180px] mx-auto text-center px-[clamp(20px,5vw,48px)]" style={{ padding: "clamp(56px,9vw,120px) clamp(20px,5vw,48px)" }}>
        <div className="font-mono text-[12.5px] tracking-[0.16em] uppercase text-accent mb-6">
          {t.contactLabel}
        </div>
        <h2 className="font-serif font-normal text-[clamp(38px,7vw,82px)] leading-none tracking-[-0.02em] mb-7 mt-0">
          {t.contactPre}
          <em className="text-accent">{t.contactAccent}</em>
          {t.contactPost}
        </h2>
        <p className="text-[clamp(16px,2vw,19px)] leading-[1.6] max-w-[480px] mx-auto mb-10 text-[color-mix(in_srgb,var(--invert)_72%,transparent)]">
          {t.contactBody}
        </p>
        <motion.a
          href="mailto:trungpd.workspace@gmail.com"
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-3 bg-accent text-[#FFFCF6] no-underline rounded-full px-9 py-[18px] font-semibold text-[17px]"
        >
          trungpd.workspace@gmail.com →
        </motion.a>
        <div className="mt-10 flex gap-6 justify-center text-[14.5px]">
          <a
            href="https://github.com/trungbmt"
            target="_blank"
            rel="noopener"
            className="no-underline pb-0.5 text-[color-mix(in_srgb,var(--invert)_72%,transparent)] border-b border-[color-mix(in_srgb,var(--invert)_40%,transparent)]"
          >
            GitHub
          </a>
          <a
            href="#top"
            className="no-underline pb-0.5 text-[color-mix(in_srgb,var(--invert)_72%,transparent)] border-b border-[color-mix(in_srgb,var(--invert)_40%,transparent)]"
          >
            LinkedIn
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noopener"
            className="no-underline pb-0.5 text-[color-mix(in_srgb,var(--invert)_72%,transparent)] border-b border-[color-mix(in_srgb,var(--invert)_40%,transparent)]"
          >
            {t.resume}
          </a>
        </div>
      </div>
    </section>
  );
}
