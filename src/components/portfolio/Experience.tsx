import type { ExperienceItem, Strings } from "@/lib/content";

interface ExperienceProps {
  t: Strings;
  experience: ExperienceItem[];
}

export default function Experience({ t, experience }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="bg-bg2 border-t border-line transition-colors duration-[400ms]"
      style={{ scrollMarginTop: 72 }}
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-[clamp(28px,4vw,56px)] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-muted">
          {t.expLabel}
        </div>
        <div>
          {experience.map((job, i) => (
            <div
              key={i}
              className="grid gap-6 py-7 border-t border-line"
              style={{ gridTemplateColumns: "140px 1fr" }}
            >
              <div className="font-mono text-[13px] text-muted pt-1">{job.years}</div>
              <div>
                <div className="text-[19px] font-semibold mb-1">
                  {job.role} <span className="italic font-normal text-muted">{job.note}</span>
                </div>
                <div className="text-[15px] text-accent mb-3">{job.company}</div>
                <p className="text-[15.5px] leading-[1.65] text-muted m-0 max-w-[560px]">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
