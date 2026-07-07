"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Lang, Strings } from "@/lib/content";

interface NavProps {
  t: Strings;
  lang: Lang;
  onSetLang: (lang: Lang) => void;
  dark: boolean;
  onToggleTheme: () => void;
}

export default function Nav({ t, lang, onSetLang, dark, onToggleTheme }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links: [string, string][] = [
    ["#work", t.navWork],
    ["#about", t.navAbout],
    ["#experience", t.navExp],
    ["#writing", t.navWriting],
  ];

  const segBase =
    "font-mono text-xs px-3 py-1.5 border-none cursor-pointer transition-colors";

  const langSwitch = (
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
  );

  const themeToggle = (
    <motion.button
      onClick={onToggleTheme}
      whileHover={{ rotate: 15 }}
      aria-label="Toggle theme"
      className="w-[38px] h-[38px] rounded-[10px] border border-line bg-surface text-text cursor-pointer text-base flex items-center justify-center shrink-0"
    >
      {dark ? "☀" : "☾"}
    </motion.button>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-line bg-[color-mix(in_srgb,var(--bg)_86%,transparent)]">
      <div className="max-w-[1180px] mx-auto flex items-center justify-between gap-4 px-[clamp(20px,5vw,48px)] py-4">
        <a
          href="#top"
          className="font-serif text-[21px] font-medium text-text no-underline tracking-[-0.01em] whitespace-nowrap"
        >
          Pham Duc Trung
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
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
          {langSwitch}
          {themeToggle}
          <a
            href="#contact"
            className="bg-text text-invert no-underline text-[14.5px] font-semibold px-5 py-2.5 rounded-full whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            {t.navEmail}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {themeToggle}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="w-[38px] h-[38px] rounded-[10px] border border-line bg-surface text-text cursor-pointer text-base flex items-center justify-center shrink-0"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-line"
          >
            <div className="px-[clamp(20px,5vw,48px)] py-4 flex flex-col gap-1">
              {links.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text no-underline text-[15px] font-medium px-2 py-2.5 rounded-lg hover:bg-bg2 transition-colors"
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-3 mt-2">
                {langSwitch}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center bg-text text-invert no-underline text-[14.5px] font-semibold px-5 py-2.5 rounded-full whitespace-nowrap"
                >
                  {t.navEmail}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
