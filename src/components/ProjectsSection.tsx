"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = items.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px", // 👈 提早觸發
      }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-6 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#171717]"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-6">
          專案 <span className="text-teal-500">Projects</span>
        </h2>
        <p className="text-lg text-gray-300 mb-6 md:mb-3">
          Petopia 寵物平台是我近期進修課程中與團隊夥伴共同完成的專題作品，
          我主要負責
          <span className="text-teal-500 font-semibold mx-1">
            首頁、會員系統以及餐廳訂位功能
          </span>
          。<br />在電商網站與線上客服系統兩個專案中，
          我則專注於
          <span className="text-teal-500 font-semibold mx-1">
            介面規劃、視覺設計與前端靜態頁面實作
          </span>
          。
        </p>

        <ul className="list-disc text-gray-400 mb-6 ps-4">
          <li>
            寵物平台：負責會員系統與餐廳訂位模組（專案目前僅於本地端測試，尚未正式佈署）。
          </li>
          <li>
            電商網站：負責全站介面規劃與設計，並以 Bootstrap
            框架手刻切版完成頁面。
          </li>
          <li>
            客服系統：規劃即時聊天與報表功能頁面，採用 Bootstrap
            進行切版，並使用 DataTables 套件呈現報表資料。
          </li>
        </ul>

        <div ref={containerRef} className="grid sm:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40, visibility: "hidden" }}
              animate={
                visibleIndexes.includes(i)
                  ? { opacity: 1, y: 0, visibility: "visible" }
                  : {}
              }
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.15, // stagger
              }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
