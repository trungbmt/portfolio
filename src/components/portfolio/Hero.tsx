"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Strings } from "@/lib/content";

export default function Hero({ t }: { t: Strings }) {
  return (
    <header
      id="top"
      className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,48px)] pt-[clamp(48px,8vw,104px)] pb-[clamp(40px,6vw,72px)]"
      style={{ scrollMarginTop: 80 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-[clamp(32px,5vw,64px)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="font-mono text-[12.5px] tracking-[0.16em] uppercase text-accent mb-[26px] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#3FB950] shadow-[0_0_0_4px_color-mix(in_srgb,#3FB950_25%,transparent)]" />
            {t.heroKicker}
          </div>
          <h1 className="font-serif font-normal text-[clamp(40px,6.4vw,76px)] leading-[1.02] tracking-[-0.018em] mb-[26px] mt-0">
            {t.heroPre}
            <em className="text-accent">{t.heroAccent}</em>
            {t.heroPost}
          </h1>
          <p className="text-[clamp(16px,2vw,19px)] leading-[1.6] text-muted max-w-[480px] mb-[34px]">
            {t.heroLeadA}
            <strong className="text-text font-semibold">{t.heroLeadStrong}</strong>
            {t.heroLeadB}
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              className="bg-text text-invert no-underline rounded-full px-[30px] py-[15px] font-semibold text-[15.5px]"
            >
              {t.heroCta}
            </motion.a>
            <a
              href="#work"
              className="text-[15.5px] text-text no-underline border-b border-text pb-[3px]"
            >
              {t.heroSecondary}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="aspect-[4/5] w-full rounded-[18px] relative flex items-center justify-center p-8 shadow-[0_30px_60px_-28px_var(--shadow)]"
          style={{ background: "linear-gradient(155deg,#E7D3C0,#D8A98C 55%,#C2410C)" }}
        >
          <span className="font-mono text-[11px] tracking-[0.12em] text-[#7A4A30] absolute top-5 left-6">
            [ {t.portrait} ]
          </span>
          <div className="relative w-full max-w-[160px] aspect-[4/5]">
            <Image
              src="/headshot.jpg"
              alt="Pham Duc Trung"
              fill
              priority
              sizes="160px"
              className="object-contain rounded-[12px] shadow-[0_14px_28px_-12px_rgba(0,0,0,0.45)]"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
