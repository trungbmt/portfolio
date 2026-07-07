import type { SkillGroup, Strings } from "@/lib/content";

interface SkillsProps {
  t: Strings;
  skills: SkillGroup[];
}

export default function Skills({ t, skills }: SkillsProps) {
  return (
    <section id="skills" className="border-t border-line">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-[clamp(28px,4vw,56px)] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-muted">
          {t.stackLabel}
        </div>
        <div className="flex flex-col gap-[30px]">
          {skills.map((group) => (
            <div
              key={group.label}
              className="grid gap-5 items-start border-b border-line pb-7"
              style={{ gridTemplateColumns: "180px 1fr" }}
            >
              <div className="font-serif text-[22px]">{group.label}</div>
              <div className="flex gap-2.5 flex-wrap">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[14.5px] font-medium text-text bg-bg2 border border-line rounded-full px-[15px] py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
