import type { Strings } from "@/lib/content";

export default function Footer({ t }: { t: Strings }) {
  return (
    <footer className="bg-bg border-t border-line">
      <div className="max-w-[1180px] mx-auto flex justify-between items-center flex-wrap gap-3 px-[clamp(20px,5vw,48px)] py-7">
        <span className="font-serif text-[17px]">Pham Duc Trung</span>
        <span className="font-mono text-xs text-muted">{t.footer}</span>
      </div>
    </footer>
  );
}
