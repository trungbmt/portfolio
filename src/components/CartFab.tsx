"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { type Lang, LANG_STORAGE_KEY, LANG_CHANGE_EVENT, getCartStrings } from "@/lib/content";

const STORAGE_KEY = "pdt-cart";

export default function CartFab() {
  const [inCart, setInCart] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setInCart(localStorage.getItem(STORAGE_KEY) === "1");
    const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (savedLang === "en" || savedLang === "vi") setLang(savedLang);
    setMounted(true);

    function handleLangChange(e: Event) {
      const next = (e as CustomEvent<Lang>).detail;
      if (next === "en" || next === "vi") setLang(next);
    }
    window.addEventListener(LANG_CHANGE_EVENT, handleLangChange);
    return () => window.removeEventListener(LANG_CHANGE_EVENT, handleLangChange);
  }, []);

  if (!mounted || pathname === "/checkout") return null;

  const t = getCartStrings(lang);

  function handleClick() {
    if (!inCart) {
      localStorage.setItem(STORAGE_KEY, "1");
      setInCart(true);
    } else {
      router.push("/checkout");
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[200] flex items-center gap-2 rounded-full border border-[#33271b] bg-[#F59E0B] px-5 py-3 font-sans text-sm font-bold text-[#17120E] shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={inCart ? "checkout" : "add"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="flex items-center gap-2"
        >
          🛒 {inCart ? t.checkout : t.addToCart}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
