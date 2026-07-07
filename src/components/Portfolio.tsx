"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  type Lang,
  getStrings,
  getAboutFacts,
  getProjects,
  getSkills,
  getExperience,
  getEducation,
  getPosts,
} from "@/lib/content";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Work, { type CatFilter } from "@/components/portfolio/Work";
import WorkModal from "@/components/portfolio/WorkModal";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Writing from "@/components/portfolio/Writing";
import ArticleView from "@/components/portfolio/ArticleView";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<Lang>("en");
  const [filter, setFilter] = useState<CatFilter>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = openId || openPostId ? "hidden" : "";
  }, [openId, openPostId]);

  const t = getStrings(lang);
  const aboutFacts = getAboutFacts(lang);
  const projects = getProjects(lang);
  const skills = getSkills(lang);
  const experience = getExperience(lang);
  const education = getEducation(lang);
  const posts = getPosts(lang);

  const openProject = projects.find((p) => p.id === openId) ?? null;
  const openPost = posts.find((p) => p.id === openPostId) ?? null;
  const openMore = posts
    .filter((p) => !openPost || p.id !== openPost.id)
    .slice(0, 2)
    .map((p) => ({ ...p, onOpen: () => openPostAndScroll(p.id) }));

  function openPostAndScroll(id: string) {
    setOpenPostId(id);
    window.scrollTo(0, 0);
  }

  return (
    <div
      id="pdt-root"
      data-theme={dark ? "dark" : "light"}
      className="bg-bg text-text font-sans min-h-screen transition-colors duration-[400ms]"
    >
      <Nav
        t={t}
        lang={lang}
        onSetLang={setLang}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      />
      <Hero t={t} />
      <About t={t} facts={aboutFacts} />
      <Work
        t={t}
        filter={filter}
        onSetFilter={setFilter}
        projects={projects}
        onOpen={setOpenId}
        lang={lang}
      />
      <Skills t={t} skills={skills} />
      <Experience t={t} experience={experience} />
      <Education t={t} education={education} />
      <Writing t={t} posts={posts} onOpen={openPostAndScroll} />
      <Contact t={t} />
      <Footer t={t} />

      <AnimatePresence>
        {openProject && <WorkModal project={openProject} t={t} onClose={() => setOpenId(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {openPost && (
          <ArticleView post={openPost} more={openMore} t={t} onClose={() => setOpenPostId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
