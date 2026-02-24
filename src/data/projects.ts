import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "esg",
    title: "ESG 永續績效指標監測系統",
    summary: "整合企業永續指標的數位化申報平台。涵蓋環境、社會與公司治理數據監測，透過標準化流程與異常預警機制，大幅提升大型企業的合規管理效率。",
    tech: ["Figma", "UI/UX Design"],
    thumbnailUrl: "/thumbnails/esg.jpg",
    demoUrl: "https://www.figma.com/proto/T5BaQFN81YO1eZKRdVhRQG/ESG?page-id=1%3A2&node-id=80-8203&p=f&viewport=979%2C248%2C0.23&t=jemwbmexVodghxik-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    slug: "transismart",
    title: "TransiSmart 智慧轉運全方位門戶",
    summary: "專為全球轉運監控打造的 B2B 智慧物流門戶。整合即時貨件追蹤、自動化流程與大數據分析，透過標準化架構與異常預警機制，協助企業精準掌握跨境運輸動態並極大化物流效率。",
    tech: ["Figma", "UI/UX Design"],
    thumbnailUrl: "/thumbnails/transismart.jpg",
    demoUrl: "https://www.figma.com/proto/Rwri9icmdcfXNG4DPFzYLc/TransiSmart?page-id=0%3A1&node-id=189-7456&p=f&viewport=294%2C209%2C0.38&t=otM5KfbTjpiaFWyS-1&scaling=contain&content-scaling=fixed",
  },
  {
    slug: "petopia",
    title: "Petopia 寵物平台",
    summary: "一個以「寵物為家人」理念打造的一站式平台",
    tech: ["Next.js", "Tailwind CSS", "Express", "Prisma ORM", "MySQL"],
    thumbnailUrl: "/thumbnails/petopia.jpg",
    repoUrl: "https://github.com/twjamespeng/mfee65-pet",
    pdfUrl: "https://twjamespeng.github.io/portfolio/petopia.pdf",
  },
  {
    slug: "vivatv",
    title: "電商網站",
    summary: "提供多樣化產品與會員系統的電商平台。",
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnailUrl: "/thumbnails/viva-home.jpg",
    demoUrl: "https://twjamespeng.github.io/viva-home-demo/",
    repoUrl: "https://github.com/twjamespeng/viva-home-demo",
  },
  {
    slug: "vivatv-customer-support",
    title: "線上客服系統",
    summary: "提供即時聊天與報表分析的客服系統。",
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnailUrl: "/thumbnails/viva-cs.jpg",
    demoUrl: "https://twjamespeng.github.io/customer-support-demo/",
    repoUrl: "https://github.com/twjamespeng/customer-support-demo",
  },
];
