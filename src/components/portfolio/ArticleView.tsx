"use client";

import { motion } from "framer-motion";
import type { Post, Strings } from "@/lib/content";

interface ArticleViewProps {
  post: Post;
  more: (Post & { onOpen: () => void })[];
  t: Strings;
  onClose: () => void;
}

export default function ArticleView({ post, more, t, onClose }: ArticleViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[120] bg-bg text-text overflow-y-auto"
    >
      <div className="sticky top-0 z-[5] backdrop-blur-md border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)]">
        <div className="max-w-[760px] mx-auto flex items-center justify-between px-[clamp(20px,5vw,40px)] py-4">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2.5 bg-transparent border-none text-text font-sans text-[14.5px] font-semibold cursor-pointer px-1 py-1.5 whitespace-nowrap"
          >
            <span className="text-lg text-accent">←</span> {t.artBack}
          </button>
          <span className="font-serif text-[17px]">Pham Duc Trung</span>
        </div>
      </div>

      <article className="max-w-[720px] mx-auto px-[clamp(20px,5vw,40px)] pb-16 pt-[clamp(36px,6vw,68px)]">
        <div className="flex items-center gap-3.5 mb-[22px] font-mono text-xs text-muted">
          <span className="tracking-[0.08em] uppercase text-accent2 border border-line rounded-md px-[9px] py-1">
            {post.tag}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.read}</span>
        </div>
        <h1 className="font-serif font-medium text-[clamp(32px,5.4vw,52px)] leading-[1.08] tracking-[-0.018em] mb-[22px] mt-0">
          {post.title}
        </h1>
        <p className="text-[clamp(17px,2.2vw,21px)] leading-[1.55] text-muted font-serif italic mb-[26px] mt-0">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 pt-[18px] border-t border-line">
          <div
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-serif text-[#FFFCF6] text-base"
            style={{ background: "linear-gradient(150deg,#E7D3C0,#C2410C)" }}
          >
            P
          </div>
          <div className="text-sm leading-[1.35]">
            <div className="font-semibold whitespace-nowrap">{t.artBy}</div>
            <div className="text-muted text-[13px]">Ho Chi Minh City</div>
          </div>
        </div>

        <div
          className="rounded-[18px] my-8 mb-3 shadow-[0_26px_50px_-28px_var(--shadow)]"
          style={{ height: "clamp(180px,32vw,300px)", background: post.cover }}
        />

        <div className="mt-5">
          {post.body.map((b, i) => {
            if (b.kind === "p") {
              return (
                <p key={i} className="font-serif text-[clamp(18px,2.3vw,20px)] leading-[1.72] text-text mb-6 mt-0">
                  {b.text}
                </p>
              );
            }
            if (b.kind === "h") {
              return (
                <h2
                  key={i}
                  className="font-serif font-semibold text-[clamp(24px,3.4vw,30px)] leading-[1.2] tracking-[-0.01em] mt-[38px] mb-4"
                >
                  {b.text}
                </h2>
              );
            }
            if (b.kind === "code") {
              return (
                <pre
                  key={i}
                  className="bg-[#1A130D] text-[#F0E6D8] border border-line rounded-2xl px-6 py-[22px] overflow-x-auto font-mono text-[13.5px] leading-[1.65] mb-7 mt-0"
                >
                  {b.text}
                </pre>
              );
            }
            return (
              <blockquote
                key={i}
                className="font-serif italic text-[clamp(21px,3vw,26px)] leading-[1.4] text-text border-l-[3px] border-accent my-1.5 mb-[30px] pl-[26px] py-1.5"
              >
                {b.text}
              </blockquote>
            );
          })}
        </div>

        <div className="mt-3.5 pt-[34px] border-t border-line flex items-center gap-4 flex-wrap">
          <a
            href="mailto:trungpd.workspace@gmail.com"
            className="bg-text text-invert no-underline rounded-full px-7 py-3.5 font-semibold text-[15px]"
          >
            {t.artCta}
          </a>
          <a
            href="https://github.com/trungbmt"
            target="_blank"
            rel="noopener"
            className="text-muted no-underline text-[14.5px] border-b border-line pb-0.5"
          >
            GitHub ↗
          </a>
        </div>

        <div className="mt-14">
          <div className="font-mono text-xs tracking-[0.12em] uppercase text-muted mb-3.5">
            {t.artMore}
          </div>
          {more.map((m) => (
            <button
              key={m.id}
              onClick={m.onOpen}
              className="w-full text-left no-underline text-text flex items-center justify-between gap-[18px] px-1.5 py-5 border-t border-line cursor-pointer hover:bg-bg2 transition-colors"
            >
              <span className="font-serif text-[clamp(18px,2.4vw,22px)] leading-[1.3]">{m.title}</span>
              <span className="text-accent text-xl">→</span>
            </button>
          ))}
        </div>
      </article>
    </motion.div>
  );
}
