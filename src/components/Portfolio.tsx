"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  type Lang,
  LANG_STORAGE_KEY,
  LANG_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  THEME_CHANGE_EVENT,
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
  const [lang, setLangState] = useState<Lang>("en");
  const [filter, setFilter] = useState<CatFilter>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = openId || openPostId ? "hidden" : "";
  }, [openId, openPostId]);

  useEffect(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "vi") setLangState(saved);

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light") {
      setDark(false);
    } else if (savedTheme === "dark") {
      setDark(true);
    }

    const handleThemeEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail === "light") setDark(false);
      else if (customEvent.detail === "dark") setDark(true);
    };

    const handleLangEvent = (e: Event) => {
      const customEvent = e as CustomEvent<Lang>;
      if (customEvent.detail === "en" || customEvent.detail === "vi") {
        setLangState(customEvent.detail);
      }
    };

    window.addEventListener(THEME_CHANGE_EVENT, handleThemeEvent);
    window.addEventListener(LANG_CHANGE_EVENT, handleLangEvent);

    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, handleThemeEvent);
      window.removeEventListener(LANG_CHANGE_EVENT, handleLangEvent);
    };
  }, []);

  function toggleTheme() {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
      window.dispatchEvent(
        new CustomEvent(THEME_CHANGE_EVENT, { detail: next ? "dark" : "light" })
      );
      return next;
    });
  }

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem(LANG_STORAGE_KEY, next);
    window.dispatchEvent(new CustomEvent(LANG_CHANGE_EVENT, { detail: next }));
  }

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
        onToggleTheme={toggleTheme}
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
