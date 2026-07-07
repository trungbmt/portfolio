import type { Post, Strings } from "@/lib/content";

interface WritingProps {
  t: Strings;
  posts: Post[];
  onOpen: (id: string) => void;
}

export default function Writing({ t, posts, onOpen }: WritingProps) {
  return (
    <section id="writing" className="border-t border-line" style={{ scrollMarginTop: 72 }}>
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-muted mb-3.5">
          {t.writingLabel}
        </div>
        <h2 className="font-serif font-normal text-[clamp(30px,4.4vw,46px)] leading-[1.05] tracking-[-0.015em] mb-9 mt-0">
          {t.writingTitle}
        </h2>
        <div className="flex flex-col">
          {posts.map((post) => (
            <button
              key={post.id}
              onClick={() => onOpen(post.id)}
              className="text-left grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] gap-3 sm:gap-6 items-start px-2 py-[26px] border-t border-line cursor-pointer transition-[padding,background-color] duration-200 sm:hover:px-[18px] hover:bg-bg2"
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2.5">
                <span className="font-mono text-[12.5px] text-muted">{post.date}</span>
                <span className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-accent2 border border-line rounded-md px-[7px] py-[3px] self-start">
                  {post.tag}
                </span>
              </div>
              <div>
                <span className="font-serif text-[clamp(19px,2.4vw,25px)] leading-[1.3] block">
                  {post.title}
                </span>
                <p className="text-[14.5px] leading-[1.55] text-muted mt-2 mb-0 sm:max-w-[580px]">
                  {post.excerpt}
                </p>
              </div>
              <span className="text-[13px] text-muted flex items-center gap-3.5 whitespace-nowrap sm:pt-1">
                {post.read} <span className="text-accent text-lg">→</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
