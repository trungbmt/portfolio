import type { EducationItem, Strings } from "@/lib/content";

interface EducationProps {
  t: Strings;
  education: EducationItem[];
}

export default function Education({ t, education }: EducationProps) {
  return (
    <section id="education" className="border-t border-line" style={{ scrollMarginTop: 72 }}>
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-[clamp(28px,4vw,56px)] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-muted">
          {t.eduLabel}
        </div>
        <div>
          {education.map((ed, i) => (
            <div
              key={i}
              className="grid gap-6 py-7 border-t border-line"
              style={{ gridTemplateColumns: "140px 1fr" }}
            >
              <div className="font-mono text-[13px] text-muted pt-1">{ed.years}</div>
              <div>
                <div className="text-[19px] font-semibold mb-1">{ed.role}</div>
                <div className="text-[15px] text-accent mb-3">{ed.company}</div>
                <p className="text-[15.5px] leading-[1.65] text-muted m-0 max-w-[560px]">{ed.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
