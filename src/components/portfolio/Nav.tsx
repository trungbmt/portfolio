"use client";

import { motion } from "framer-motion";
import type { Lang, Strings } from "@/lib/content";

interface NavProps {
  t: Strings;
  lang: Lang;
  onSetLang: (lang: Lang) => void;
  dark: boolean;
  onToggleTheme: () => void;
}

export default function Nav({ t, lang, onSetLang, dark, onToggleTheme }: NavProps) {
  const links: [string, string][] = [
    ["#work", t.navWork],
    ["#about", t.navAbout],
    ["#experience", t.navExp],
    ["#writing", t.navWriting],
  ];

  const segBase =
    "font-mono text-xs px-3 py-1.5 border-none cursor-pointer transition-colors";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-line bg-[color-mix(in_srgb,var(--bg)_86%,transparent)]">
      <div className="max-w-[1180px] mx-auto flex items-center justify-between gap-4 px-[clamp(20px,5vw,48px)] py-4">
        <a
          href="#top"
          className="font-serif text-[21px] font-medium text-text no-underline tracking-[-0.01em] whitespace-nowrap"
        >
          Pham Duc Trung
        </a>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 mr-1">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-muted no-underline text-[14.5px] font-medium px-[11px] py-2 rounded-lg whitespace-nowrap hover:text-text hover:bg-bg2 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center border border-line rounded-full overflow-hidden">
            <button
              onClick={() => onSetLang("en")}
              className={`${segBase} ${
                lang === "en" ? "bg-text text-invert font-bold" : "bg-transparent text-muted font-normal"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onSetLang("vi")}
              className={`${segBase} ${
                lang === "vi" ? "bg-text text-invert font-bold" : "bg-transparent text-muted font-normal"
              }`}
            >
              VI
            </button>
          </div>
          <motion.button
            onClick={onToggleTheme}
            whileHover={{ rotate: 15 }}
            aria-label="Toggle theme"
            className="w-[38px] h-[38px] rounded-[10px] border border-line bg-surface text-text cursor-pointer text-base flex items-center justify-center"
          >
            {dark ? "☀" : "☾"}
          </motion.button>
          <a
            href="#contact"
            className="bg-text text-invert no-underline text-[14.5px] font-semibold px-5 py-2.5 rounded-full whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            {t.navEmail}
          </a>
        </div>
      </div>
    </nav>
  );
}
