import type { AboutFact, Strings } from "@/lib/content";

interface AboutProps {
  t: Strings;
  facts: AboutFact[];
}

export default function About({ t, facts }: AboutProps) {
  return (
    <section id="about" className="border-t border-line" style={{ scrollMarginTop: 72 }}>
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-[clamp(28px,4vw,56px)] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-muted">
          {t.aboutLabel}
        </div>
        <div>
          <p className="font-serif text-[clamp(22px,3vw,30px)] leading-[1.4] tracking-[-0.01em] mb-6 mt-0">
            {t.aboutLede}
          </p>
          <p className="text-[16.5px] leading-[1.7] text-muted mb-9 max-w-[640px]">
            {t.aboutBody}
          </p>
          <div className="grid grid-cols-3 gap-5 border-t border-line pt-7">
            {facts.map((f) => (
              <div key={f.k}>
                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mb-2">
                  {f.k}
                </div>
                <div className="text-base font-semibold">{f.v}</div>
                <div className="text-sm text-muted">{f.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
