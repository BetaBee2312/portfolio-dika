"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TouchEvent, WheelEvent } from "react";

const sections = ["INTRO", "PROJECTS", "JOURNEY", "CONTACT"];

const projects = [
  {
    number: "01",
    category: "MARKETING INVENTORY SYSTEM",
    name: "Gudang Marketing",
    description:
      "A warehouse and marketing inventory management system featuring full CRUD operations, stock allocation, branch handover tracking, and monthly reporting, with Excel export functionality for efficient data management and reporting.",
    stack: ["PHP", "MySQL", "JavaScript", "Excel Export"],
    accent: "#20320e",
    kind: "inventory",
    image: "/images/projects/gudang-marketing.webp",
    imageAlt: "Screenshot aplikasi Gudang Marketing",
  },
  {
    number: "02",
    category: "MARKETING REPORTING",
    name: "Recap Data PPBJ From Google Sheets Via API Integration",
    description:
    "A marketing dashboard for monitoring PPBJ submissions, budget composition, monthly trends, and detailed records, featuring Google API integration, data visualization, and automated reporting to streamline marketing operations.",
    stack: ["Google Sheets", "Google API", "MySQL", "Excel Export"],
    accent: "#334e38",
    kind: "event",
    image: "/images/projects/rekap-ppbj.webp",
    imageAlt: "Screenshot dashboard Rekap PPBJ",
  },
];

const history = [
  {
    period: "EDUCATION",
    title: "SMK LPPM RI",
    detail: "Rekayasa Perangkat Lunak dan Jaringan (RPL)",
    description:
      "Mendapatkan pemahaman mendalam tentang pengembangan perangkat lunak, jaringan komputer, dan praktik terbaik dalam industri teknologi informasi.",
  },
  {
    period: "WORK EXPERIENCE",
    title: "Marketing Administration & IT Support",
    detail: "PT. Griya Pratama",
    description:
      "Menangani aktivitas administrasi dan operasional marketing, pengelolaan data, serta pengembangan solusi digital untuk mendukung efisiensi proses kerja.",
  },
  {
    period: "TECHNICAL JOURNEY",
    title: "Building Through Code",
    detail: "From Learning to Real-World Projects",
    description:
      "Mengembangkan kemampuan pemrograman melalui proyek nyata, mulai dari sistem inventaris berbasis PHP dan MySQL hingga aplikasi modern menggunakan Next.js.",
  },
  {
    period: "CURRENT EDUCATION",
    title: "STMIK Mardira Indonesia",
    detail: "Information Technology (IT)",
    description:
      "Currently pursuing higher education in Information Technology, while continuing to develop practical skills.",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const lastWheel = useRef(0);
  const touchStart = useRef<number | null>(null);

  const changeSection = useCallback((direction: number) => {
    setActive((current) =>
      Math.max(0, Math.min(sections.length - 1, current + direction))
    );
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        changeSection(1);
      } else if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        changeSection(-1);
      } else if (event.key === "Home") {
        setActive(0);
      } else if (event.key === "End") {
        setActive(sections.length - 1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeSection]);

  function handleWheel(event: WheelEvent<HTMLElement>) {
    if (Math.abs(event.deltaY) < 24) return;
    const now = Date.now();
    if (now - lastWheel.current < 850) return;
    lastWheel.current = now;
    changeSection(event.deltaY > 0 ? 1 : -1);
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    touchStart.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    if (touchStart.current === null) return;
    const delta =
      touchStart.current - (event.changedTouches[0]?.clientY ?? touchStart.current);
    if (Math.abs(delta) > 60) changeSection(delta > 0 ? 1 : -1);
    touchStart.current = null;
  }

  return (
    <main
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-dvh w-full overflow-hidden bg-[#fafaf7] font-[family-name:var(--font-body)] text-[#17200f] antialiased selection:bg-[#c9d5bf]"
    >
      {/* Editorial Header */}
      <header className="absolute left-6 right-6 top-5 z-40 flex items-center justify-between text-[11px] font-medium tracking-[0.16em] text-[#17200f] sm:left-12 sm:right-12 sm:top-7 sm:text-xs">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActive(0);
          }}
          className="hover:opacity-70 transition-opacity"
        >
          PORTFOLIO / 2026
        </a>
        <span>
          {String(active + 1).padStart(2, "0")} — {String(sections.length).padStart(2, "0")}
        </span>
      </header>

      {/* Full-page section track */}
      <div
        className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ transform: `translate3d(0, -${active * 100}dvh, 0)` }}
      >
        {/* 01 / INTRO */}
        <section id="top" className="relative h-dvh w-full shrink-0 overflow-hidden bg-white">
          {/* Diagonal Green Polygon */}
          <div
            className="absolute inset-x-0 top-[14%] bottom-[12%] bg-[#20320e]"
            style={{ clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)" }}
          />

          {/* Photo Cutout */}
          <div className="absolute bottom-0 right-[2%] z-20 h-[85%] w-[55%] sm:right-[10%] sm:h-[92%] sm:w-[45%] pointer-events-none">
            <Image
              src="/images/profile.png"
              alt="Andika Pratama"
              fill
              priority
              sizes="(max-width: 768px) 70vw, 45vw"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Content Block */}
          <div className="absolute left-[7%] top-[54%] z-30 w-[80%] max-w-[650px] -translate-y-1/2 sm:left-[10%] sm:w-[50%]">
            <p className="mb-2 text-[10px] font-medium tracking-[0.28em] text-[#d5e0cb] sm:text-xs">
              PERSONAL PORTFOLIO
            </p>
            <h1 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5.5vw,5.5rem)] font-light leading-[0.92] tracking-[-0.04em] text-white">
              ANDIKA<br />PRATAMA
            </h1>
            <p className="max-w-[480px] text-xs leading-5 text-white/90 sm:text-sm sm:leading-7">
              Turning ideas into shipped products. Combining modern tech stacks and smart workflows to build clean, intuitive web apps.
            </p>

            <div className="mt-5 flex items-center gap-3 sm:mt-6">
              <span className="h-px w-8 bg-white/60" />
              <span className="text-[10px] font-medium tracking-[0.22em] text-[#e3ebdb]">
                WEB DEVELOPER
              </span>
            </div>
            <button
              onClick={() => setActive(1)}
              className="mt-6 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-xs font-medium tracking-[0.16em] text-white transition hover:border-white"
            >
              EXPLORE MY WORK ↗
            </button>
          </div>
        </section>

        {/* 02 / PROJECTS */}
        <section id="projects" className="relative h-dvh w-full shrink-0 overflow-hidden bg-[#f7f7f2]">
          <div
            className="absolute inset-x-0 top-[12%] bottom-[12%] bg-[#20320e]"
            style={{ clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)" }}
          />
          <div className="absolute inset-x-[7%] bottom-[16%] top-[16%] z-10 flex flex-col justify-center sm:inset-x-[10%]">
            <div className="mb-6 flex shrink-0 items-end justify-between">
              <div>
                <p className="mb-1 text-[10px] font-medium tracking-[0.25em] text-[#d5e0cb] sm:text-xs">
                  02 / SELECTED WORKS
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-light tracking-[-0.035em] text-white sm:text-5xl">
                  Built with purpose.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group flex flex-col overflow-hidden rounded-sm border border-black/10 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-36 w-full shrink-0 overflow-hidden bg-[#20320e] sm:h-44">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[9px] font-bold tracking-[0.12em] text-[#4a5740]">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-[#5b6850]">{project.number}</span>
                    </div>
                    <h3 className="mb-1 font-[family-name:var(--font-display)] text-base font-medium text-[#17200f]">
                      {project.name}
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-[#3f4a37] line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#20320e]/20 px-2 py-0.5 text-[9px] font-medium text-[#334228]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03 / JOURNEY */}
        <section id="journey" className="relative h-dvh w-full shrink-0 overflow-hidden bg-white">
          <div
            className="absolute inset-x-0 top-[18%] bottom-[14%] bg-[#20320e]"
            style={{ clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 92%)" }}
          />
          <div className="absolute left-[7%] right-[7%] top-[22%] z-10 sm:left-[10%] sm:right-[10%]">
            <p className="mb-1 text-[10px] font-medium tracking-[0.25em] text-[#d5e0cb] sm:text-xs">
              03 / PERSONAL HISTORY
            </p>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-light text-white sm:text-5xl">
              The journey so far.
            </h2>

            <div className="grid grid-cols-1 gap-0 border-t border-white/20 sm:grid-cols-2">
              {history.map((item, index) => (
                <article
                  key={item.period}
                  className={`grid grid-cols-[65px_1fr] gap-3 border-b border-white/20 py-3.5 sm:grid-cols-[80px_1fr] sm:gap-4 sm:py-4 ${
                    index % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"
                  }`}
                >
                  <div className="pt-0.5 text-[9px] font-medium leading-4 tracking-[0.1em] text-[#d5e0cb]">
                    0{index + 1} /<br />{item.period}
                  </div>
                  <div>
                    <h3 className="mb-0.5 font-[family-name:var(--font-display)] text-sm font-medium text-white sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mb-1 text-[10px] font-medium text-[#d5e0cb]">{item.detail}</p>
                    <p className="text-[11px] leading-4 text-white/80 sm:text-xs">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / CONTACT */}
        <section id="contact" className="relative h-dvh w-full shrink-0 overflow-hidden bg-white">
          <div
            className="absolute inset-x-0 top-[12%] bottom-[12%] bg-[#20320e]"
            style={{ clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" }}
          />
          <div className="absolute left-[8%] top-[50%] z-10 w-[84%] -translate-y-1/2 sm:left-[12%] sm:w-[60%]">
            <p className="mb-3 text-[10px] font-medium tracking-[0.25em] text-[#d5e0cb] sm:text-xs">
              04 / THE NEXT CHAPTER
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-light leading-[0.95] text-white sm:text-6xl">
              Let&apos;s build<br />something good.
            </h2>
            <p className="mb-6 max-w-lg text-xs leading-5 text-white/90 sm:text-sm sm:leading-7">
              I&apos;m interested in building useful digital products, learning new technologies, and collaborating on meaningful projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/BetaBee2312"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 bg-white px-5 text-xs font-semibold tracking-wider text-[#20320e] transition hover:bg-[#dfe7d8]"
              >
                GITHUB PROFILE ↗
              </a>
              <button
                onClick={() => setActive(0)}
                className="inline-flex h-10 items-center gap-2 border border-white/60 px-5 text-xs font-medium tracking-wider text-white transition hover:bg-white/10"
              >
                BACK TO TOP ↑
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Clean Bottom Navigation (No Circular Arrow Buttons) */}
      <footer className="absolute bottom-5 left-6 right-6 z-40 flex items-center justify-between sm:bottom-7 sm:left-12 sm:right-12">
        <button
          onClick={() => setActive(0)}
          className="text-[10px] font-medium tracking-[0.16em] text-[#3f4a37] transition hover:text-[#17200f]"
        >
          BACK TO TOP ↑
        </button>

        {/* Minimal Dot Indicators */}
        <nav aria-label="Section dots" className="flex items-center gap-2">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => setActive(index)}
              aria-label={`Go to ${section}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === index ? "w-8 bg-[#20320e]" : "w-2 bg-[#20320e]/30 hover:bg-[#20320e]/60"
              }`}
            />
          ))}
        </nav>
      </footer>
    </main>
  );
}