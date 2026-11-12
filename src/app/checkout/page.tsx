"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Lang, LANG_STORAGE_KEY, getCheckoutStrings } from "@/lib/content";

export default function CheckoutPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [note, setNote] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    const resolved: Lang = saved === "vi" ? "vi" : "en";
    setLang(resolved);
    setNote(getCheckoutStrings(resolved).defaultNote);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = getCheckoutStrings(lang);

  const mailtoHref = `mailto:trungpd.workspace@gmail.com?subject=${encodeURIComponent(
    t.emailSubject
  )}&body=${encodeURIComponent(note)}`;

  return (
    <div id="pdt-root" data-theme="dark" className="min-h-screen bg-bg text-text font-sans">
      <div className="max-w-[720px] mx-auto px-6 py-14">
        <Link
          href="/"
          className="text-muted no-underline text-sm hover:text-text transition-colors"
        >
          {t.continueShopping}
        </Link>

        <div className="mt-8 flex flex-col sm:flex-row gap-7 items-start">
          <div className="relative w-full sm:w-[160px] aspect-[4/5] rounded-xl overflow-hidden shrink-0 shadow-[0_20px_40px_-20px_var(--shadow)]">
            <Image src="/headshot.jpg" alt="Pham Duc Trung" fill className="object-cover" />
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-2">
              {t.inCart}
            </div>
            <h1 className="font-serif text-[28px] leading-tight m-0 mb-2">{t.productTitle}</h1>
            <div className="text-accent text-sm mb-3">{t.rating}</div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="line-through text-muted text-sm">{t.priceOld}</span>
              <span className="text-2xl font-bold text-accent">{t.priceNew}</span>
            </div>
            <ul className="text-sm text-muted space-y-1.5 list-disc pl-5">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <label className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted block mb-2">
            {t.noteLabel}
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={7}
            className="w-full rounded-xl border border-line bg-surface text-text text-sm p-4 leading-relaxed focus:outline-none focus:ring-2 focus:ring-accent"
          />

          {!confirmed ? (
            <motion.button
              onClick={() => setConfirmed(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 bg-text text-invert rounded-full px-7 py-3 font-semibold text-[15px] cursor-pointer"
            >
              {t.confirmButton}
            </motion.button>
          ) : (
            <motion.a
              href={mailtoHref}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              className="mt-5 inline-flex items-center gap-2 bg-accent text-[#17120E] no-underline rounded-full px-7 py-3 font-semibold text-[15px]"
            >
              {t.emailButton}
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
}
