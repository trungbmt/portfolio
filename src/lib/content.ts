export type Lang = "en" | "vi";

export interface Strings {
  navWork: string;
  navAbout: string;
  navExp: string;
  navWriting: string;
  navEmail: string;
  heroKicker: string;
  heroPre: string;
  heroAccent: string;
  heroPost: string;
  heroLeadA: string;
  heroLeadStrong: string;
  heroLeadB: string;
  heroCta: string;
  heroSecondary: string;
  portrait: string;
  aboutLabel: string;
  aboutLede: string;
  aboutBody: string;
  workLabel: string;
  workTitle: string;
  viewCase: string;
  stackLabel: string;
  expLabel: string;
  eduLabel: string;
  writingLabel: string;
  writingTitle: string;
  contactLabel: string;
  contactPre: string;
  contactAccent: string;
  contactPost: string;
  contactBody: string;
  resume: string;
  footer: string;
  mRole: string;
  mTime: string;
  mStack: string;
  mVisit: string;
  mClose: string;
  builtLabel: string;
  artBack: string;
  artBy: string;
  artMore: string;
  artCta: string;
}

const STR: Record<Lang, Strings> = {
  en: {
    navWork: "Work",
    navAbout: "About",
    navExp: "Experience",
    navWriting: "Writing",
    navEmail: "Email me",
    heroKicker: "Full-stack developer · Ho Chi Minh City · 3+ yrs",
    heroPre: "I build ",
    heroAccent: "products, not just features",
    heroPost: ".",
    heroLeadA: "Full-stack developer with ",
    heroLeadStrong: "3+ years of experience",
    heroLeadB:
      " — I can handle API, UI, and database, all the way to CI/CD and deployment (DevOps).",
    heroCta: "Email me",
    heroSecondary: "Selected work ↓",
    portrait: "PORTRAIT",
    aboutLabel: "(01) About",
    aboutLede:
      "I like understanding a product from the ground up — not just writing code, but knowing why it needs to be built that way.",
    aboutBody:
      "Over the past three-plus years, I've built full-stack for real products — analytics tools, dashboards, and a shared design system. What I like most is watching a feature go from the first line of code to the moment a real user clicks it.",
    workLabel: "(02) Selected work",
    workTitle: "A few things I’ve built.",
    viewCase: "View case study →",
    stackLabel: "(03) Stack",
    expLabel: "(04) Experience",
    eduLabel: "(05) Education",
    writingLabel: "(06) Writing",
    writingTitle: "Notes from the build.",
    contactLabel: "(07) Contact",
    contactPre: "Let's build something ",
    contactAccent: "good",
    contactPost: " together.",
    contactBody:
      "Looking for a full-time role where I can build across the stack and grow with a strong team. The fastest way to reach me is email — I usually reply within a day.",
    resume: "Resume (PDF)",
    footer: "© 2026 · Ho Chi Minh City",
    mRole: "Role",
    mTime: "Timeline",
    mStack: "Stack",
    mVisit: "Visit live ↗",
    mClose: "Close",
    builtLabel: "What I built",
    artBack: "All writing",
    artBy: "Written by Pham Duc Trung",
    artMore: "Keep reading",
    artCta: "Enjoyed this? Email me",
  },
  vi: {
    navWork: "Dự án",
    navAbout: "Giới thiệu",
    navExp: "Kinh nghiệm",
    navWriting: "Bài viết",
    navEmail: "Gửi email",
    heroKicker: "Lập trình viên full-stack · TP. Hồ Chí Minh · 3+ năm",
    heroPre: "Tôi build ",
    heroAccent: "sản phẩm, không chỉ tính năng",
    heroPost: ".",
    heroLeadA: "Full-stack developer với ",
    heroLeadStrong: "hơn 3 năm kinh nghiệm",
    heroLeadB:
      " — có thể đảm nhận API, giao diện, cơ sở dữ liệu, cho tới CI/CD và triển khai hệ thống (DevOps).",
    heroCta: "Gửi email",
    heroSecondary: "Dự án nổi bật ↓",
    portrait: "ẢNH CHÂN DUNG",
    aboutLabel: "(01) Giới thiệu",
    aboutLede:
      "Tôi thích hiểu một sản phẩm từ gốc — không chỉ viết code, mà biết vì sao nó cần được xây như vậy.",
    aboutBody:
      "Hơn ba năm qua, tôi làm full-stack cho các sản phẩm dùng thật — công cụ phân tích, dashboard, và một design system dùng chung. Tôi thích nhất là được thấy một tính năng đi từ dòng code đầu tiên đến lúc người dùng thật sự bấm vào nó.",
    workLabel: "(02) Dự án nổi bật",
    workTitle: "Một vài thứ tôi đã xây.",
    viewCase: "Xem chi tiết →",
    stackLabel: "(03) Công nghệ",
    expLabel: "(04) Kinh nghiệm",
    eduLabel: "(05) Học vấn",
    writingLabel: "(06) Bài viết",
    writingTitle: "Ghi chép trong quá trình xây dựng.",
    contactLabel: "(07) Liên hệ",
    contactPre: "Cùng nhau tạo ra điều gì đó ",
    contactAccent: "thật tốt",
    contactPost: ".",
    contactBody:
      "Đang tìm một vị trí toàn thời gian nơi tôi có thể làm việc trên toàn stack và phát triển cùng một đội ngũ tốt. Cách nhanh nhất để liên hệ là email — tôi thường phản hồi trong vòng một ngày.",
    resume: "CV (PDF)",
    footer: "© 2026 · TP. Hồ Chí Minh",
    mRole: "Vai trò",
    mTime: "Thời gian",
    mStack: "Công nghệ",
    mVisit: "Xem trực tiếp ↗",
    mClose: "Đóng",
    builtLabel: "Những gì tôi đã làm",
    artBack: "Tất cả bài viết",
    artBy: "Viết bởi Phạm Đức Trung",
    artMore: "Đọc tiếp",
    artCta: "Thấy hữu ích? Email cho tôi",
  },
};

export function getStrings(lang: Lang): Strings {
  return STR[lang];
}

export interface AboutFact {
  k: string;
  v: string;
  s: string;
}

const ABOUT_FACTS: Record<Lang, AboutFact[]> = {
  en: [
    { k: "Most recent", v: "FiveTech", s: "Full-stack developer · Middle" },
    { k: "Focus", v: "Full-stack", s: "Web apps, front to back" },
    { k: "Status", v: "Open to roles", s: "Full-time" },
  ],
  vi: [
    { k: "Gần đây nhất", v: "FiveTech", s: "Lập trình viên full-stack · Middle" },
    { k: "Lĩnh vực", v: "Full-stack", s: "Ứng dụng web, từ đầu đến cuối" },
    { k: "Trạng thái", v: "Sẵn sàng nhận việc", s: "Toàn thời gian" },
  ],
};

export function getAboutFacts(lang: Lang): AboutFact[] {
  return ABOUT_FACTS[lang];
}

interface LocalizedText {
  en: string;
  vi: string;
}

export interface ProjectSection {
  label: string;
  body: string;
}

export interface ProjectHighlight {
  t: string;
  d: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

interface ProjectRaw {
  id: string;
  cat: string;
  cover: string;
  name: string;
  stackTop: string[];
  stackLine: string;
  tag: LocalizedText;
  role: LocalizedText;
  year: LocalizedText;
  tagline: LocalizedText;
  liveUrl?: string;
  sections: Record<Lang, ProjectSection[]>;
  highlights?: Record<Lang, ProjectHighlight[]>;
  metrics: Record<Lang, ProjectMetric[]>;
}

export interface Project {
  id: string;
  cat: string;
  cover: string;
  name: string;
  stackTop: string[];
  stackLine: string;
  tag: string;
  role: string;
  year: string;
  tagline: string;
  liveUrl: string | null;
  sections: ProjectSection[];
  metrics: ProjectMetric[];
  highlights: ProjectHighlight[] | null;
  hasHighlights: boolean;
}

const PROJECTS_RAW: ProjectRaw[] = [
  {
    id: "li2",
    cat: "Platform",
    cover: "linear-gradient(135deg,#E0623B,#C2410C)",
    name: "Li2.ai",
    stackTop: ["React", "Node.js", "ClickHouse"],
    stackLine: "React · Node · ClickHouse",
    tag: { en: "01 · PLATFORM", vi: "01 · NỀN TẢNG" },
    role: { en: "Full-stack developer", vi: "Lập trình viên full-stack" },
    year: { en: "2024 — 2026", vi: "2024 — 2026" },
    tagline: {
      en: "The link attribution & behavior analytics platform I work on full-stack — from data layer to UI.",
      vi: "Nền tảng quy kết liên kết & phân tích hành vi tôi làm full-stack — từ tầng dữ liệu đến giao diện.",
    },
    liveUrl: "https://li2.ai",
    sections: {
      en: [
        {
          label: "Overview",
          body: "Li2.ai helps teams understand where their traffic comes from and what people do once they arrive. I work across the whole product — backend services, the data pipeline, the public-facing app, and the integrations around it.",
        },
        {
          label: "My role",
          body: "As a full-stack developer I move between the API, the event pipeline, and the React front-end. Depending on the week that means a new dashboard view, a faster query path, an SDK change, or a fix deep in the data layer.",
        },
        {
          label: "Approach",
          body: "I try to keep the system legible as it grows: clear service boundaries, sensible data models, and front-end code that stays simple even as features pile on. The goal is a platform that feels fast and obvious to the people using it.",
        },
      ],
      vi: [
        {
          label: "Tổng quan",
          body: "Li2.ai giúp các đội hiểu được nguồn truy cập đến từ đâu và người dùng làm gì sau khi vào trang. Tôi làm việc trên toàn bộ sản phẩm — dịch vụ backend, pipeline dữ liệu, ứng dụng cho người dùng và các tích hợp xung quanh.",
        },
        {
          label: "Vai trò của tôi",
          body: "Là lập trình viên full-stack, tôi luân chuyển giữa API, pipeline sự kiện và front-end React. Tùy tuần, đó có thể là một màn hình dashboard mới, một đường truy vấn nhanh hơn, một thay đổi cho SDK, hay một bản sửa lỗi sâu trong tầng dữ liệu.",
        },
        {
          label: "Cách tiếp cận",
          body: "Tôi cố giữ hệ thống dễ hiểu khi nó lớn lên: ranh giới dịch vụ rõ ràng, mô hình dữ liệu hợp lý, và mã front-end vẫn gọn dù tính năng ngày càng nhiều. Mục tiêu là một nền tảng nhanh và rõ ràng với người dùng.",
        },
      ],
    },
    highlights: {
      en: [
        { t: "Core App & Dashboard", d: "Most of the product’s day-to-day modules and screens — built and owned end to end." },
        { t: "Tracking SDK", d: "Lightweight JS SDK customers embed to capture events & attribution." },
        { t: "Public Integration API", d: "REST API + OpenAPI docs for sending data in and pulling analytics out." },
        { t: "AI Script Generator", d: "Collects a customer’s site data to generate a tracking script that auto-captures the relevant events." },
        { t: "WordPress Plugin", d: "No-code install so WordPress site owners can onboard in a few clicks." },
        { t: "Background Workers", d: "Job workers that process and roll up incoming events asynchronously off the request path." },
        { t: "Real-time Notifications", d: "A Server-Sent Events module that pushes live notifications to the dashboard." },
        { t: "Roles & Permissions (RBAC)", d: "A dynamic role system where an org owner creates roles, picks permissions, and assigns them to members." },
        { t: "Data & Infrastructure", d: "Database schema, indexing, Redis caching, and infrastructure design." },
      ],
      vi: [
        { t: "Lõi App & Dashboard", d: "Phần lớn các module và màn hình hằng ngày của sản phẩm — tự xây và đảm nhận từ đầu đến cuối." },
        { t: "SDK Tracking", d: "SDK JavaScript nhẹ để khách hàng gắn lên web, thu sự kiện & quy kết." },
        { t: "API tích hợp công khai", d: "API REST + tài liệu OpenAPI để gửi dữ liệu vào và lấy số liệu ra." },
        { t: "Trình tạo mã AI", d: "Thu thập dữ liệu trang của khách hàng để tạo mã tracking tự động bắt các sự kiện phù hợp." },
        { t: "Plugin WordPress", d: "Cài không cần code, chủ website WordPress lên sóng trong vài cú nhấp." },
        { t: "Worker nền", d: "Các worker xử lý và tổng hợp sự kiện đến một cách bất đồng bộ, ngoài đường request." },
        { t: "Thông báo thời gian thực", d: "Module Server-Sent Events đẩy thông báo trực tiếp lên dashboard." },
        { t: "Phân quyền (RBAC)", d: "Hệ thống vai trò động: chủ tổ chức tạo vai trò, chọn quyền và gán cho thành viên." },
        { t: "Dữ liệu & Hạ tầng", d: "Thiết kế schema, lập chỉ mục, cache Redis và hạ tầng." },
      ],
    },
    metrics: {
      en: [
        { value: "Full-stack", label: "API, data layer & front-end" },
        { value: "Live", label: "In production with real customers" },
        { value: "Multi-part", label: "SDK, API, AI & integrations" },
      ],
      vi: [
        { value: "Full-stack", label: "API, tầng dữ liệu & front-end" },
        { value: "Đang chạy", label: "Vận hành thực tế với khách hàng" },
        { value: "Đa phần", label: "SDK, API, AI & tích hợp" },
      ],
    },
  },
  {
    id: "proj2",
    cat: "Web App",
    cover: "linear-gradient(135deg,#E8A24A,#C97B2C)",
    name: "Business Report App",
    stackTop: ["NestJS", "React", "MongoDB"],
    stackLine: "NestJS · React · MongoDB",
    tag: { en: "02 · WEB APP", vi: "02 · ỨNG DỤNG WEB" },
    role: { en: "Full-stack developer", vi: "Lập trình viên full-stack" },
    year: { en: "2023 — 2024", vi: "2023 — 2024" },
    tagline: {
      en: "An Excel-like reporting platform for business data — spreadsheet grids, manual entry, and configurable dashboards.",
      vi: "Nền tảng báo cáo kiểu Excel cho dữ liệu doanh nghiệp — bảng tính, nhập liệu thủ công và dashboard tuỳ chỉnh.",
    },
    sections: {
      en: [
        {
          label: "Overview",
          body: "An Excel-like reporting workspace for business data — spreadsheet-style grids, manual data entry, external data sources, and internal setup forms, built for teams that think in spreadsheets but need something more structured.",
        },
        {
          label: "My role",
          body: "I built the app full-stack with NestJS and React, and created a reusable Ant Design component library — tables, cells, inputs — that powers the grid UI across the whole product.",
        },
        {
          label: "Approach",
          body: "The hardest part was making a spreadsheet-like grid feel native in the browser while staying fast with real data. I shipped a dynamic statistics module with configurable charts and tables, plus middleware for per-project permissions.",
        },
      ],
      vi: [
        {
          label: "Tổng quan",
          body: "Một không gian báo cáo kiểu Excel cho dữ liệu doanh nghiệp — bảng tính, nhập liệu thủ công, nguồn dữ liệu ngoài và các form cấu hình nội bộ, dành cho các đội quen làm việc với spreadsheet nhưng cần thứ gì đó có cấu trúc hơn.",
        },
        {
          label: "Vai trò của tôi",
          body: "Tôi xây dựng ứng dụng full-stack với NestJS và React, và tạo một thư viện component Ant Design dùng lại được — bảng, ô, input — chạy xuyên suốt phần UI dạng lưới của cả sản phẩm.",
        },
        {
          label: "Cách tiếp cận",
          body: "Phần khó nhất là làm cho một lưới kiểu spreadsheet cảm giác tự nhiên trên trình duyệt mà vẫn nhanh với dữ liệu thật. Tôi xây một module thống kê động với biểu đồ và bảng tuỳ chỉnh, cùng middleware phân quyền theo từng dự án.",
        },
      ],
    },
    metrics: {
      en: [
        { value: "Excel-like", label: "Spreadsheet grids & manual entry" },
        { value: "Reusable UI kit", label: "Ant Design component library" },
        { value: "Configurable", label: "Dynamic stats, charts & tables" },
      ],
      vi: [
        { value: "Kiểu Excel", label: "Bảng tính & nhập liệu thủ công" },
        { value: "Bộ UI dùng lại", label: "Thư viện component Ant Design" },
        { value: "Tuỳ chỉnh", label: "Thống kê, biểu đồ & bảng động" },
      ],
    },
  },
  {
    id: "proj3",
    cat: "Web App",
    cover: "linear-gradient(135deg,#D8A98C,#9A6A4E)",
    name: "168 LiveChat",
    stackTop: ["Node.js", "Socket.IO", "React"],
    stackLine: "Node.js · Socket.IO · React",
    tag: { en: "03 · WEB APP", vi: "03 · ỨNG DỤNG WEB" },
    role: { en: "Full-stack developer", vi: "Lập trình viên full-stack" },
    year: { en: "2022 — 2023", vi: "2022 — 2023" },
    tagline: {
      en: "An embeddable real-time chat widget for customer websites, backed by microservices.",
      vi: "Widget chat trực tiếp có thể nhúng cho website khách hàng, vận hành bởi các microservice.",
    },
    sections: {
      en: [
        {
          label: "Overview",
          body: "168 LiveChat is an embeddable real-time chat widget that businesses drop into their own websites to talk to visitors live.",
        },
        {
          label: "My role",
          body: "I built the widget and the real-time messaging layer with Socket.IO, and developed microservices that handle account plans separately so the main server stays fast under load.",
        },
        {
          label: "Approach",
          body: "Real-time chat at scale comes down to isolating the hot path. I kept the widget itself lightweight, moved account/plan logic into its own service, and used RabbitMQ to keep everything decoupled and resilient.",
        },
      ],
      vi: [
        {
          label: "Tổng quan",
          body: "168 LiveChat là widget chat trực tiếp có thể nhúng, giúp doanh nghiệp trò chuyện trực tiếp với khách truy cập ngay trên website của họ.",
        },
        {
          label: "Vai trò của tôi",
          body: "Tôi xây dựng widget và tầng nhắn tin thời gian thực bằng Socket.IO, đồng thời phát triển các microservice xử lý gói tài khoản riêng để server chính luôn nhanh dưới tải lớn.",
        },
        {
          label: "Cách tiếp cận",
          body: "Chat thời gian thực ở quy mô lớn nằm ở việc tách được đường xử lý nóng. Tôi giữ widget thật nhẹ, chuyển logic tài khoản/gói dịch vụ sang service riêng, và dùng RabbitMQ để mọi thứ tách rời và bền vững.",
        },
      ],
    },
    metrics: {
      en: [
        { value: "Real-time", label: "Socket.IO powered chat widget" },
        { value: "Embeddable", label: "Drop-in widget for any website" },
        { value: "Microservices", label: "Account plans offloaded from main server" },
      ],
      vi: [
        { value: "Thời gian thực", label: "Widget chat chạy trên Socket.IO" },
        { value: "Nhúng được", label: "Widget cắm vào mọi website" },
        { value: "Microservice", label: "Tách gói tài khoản khỏi server chính" },
      ],
    },
  },
];

export function getProjects(lang: Lang): Project[] {
  return PROJECTS_RAW.map((p) => ({
    id: p.id,
    cat: p.cat,
    cover: p.cover,
    name: p.name,
    stackTop: p.stackTop,
    stackLine: p.stackLine,
    tag: p.tag[lang],
    role: p.role[lang],
    year: p.year[lang],
    tagline: p.tagline[lang],
    liveUrl: p.liveUrl ?? null,
    sections: p.sections[lang],
    metrics: p.metrics[lang],
    highlights: p.highlights ? p.highlights[lang] : null,
    hasHighlights: !!p.highlights,
  }));
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export function getSkills(lang: Lang): SkillGroup[] {
  return [
    { label: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion", "Vite"] },
    { label: "Backend", items: ["Node.js", "Postgres", "ClickHouse", "Redis", "GraphQL", "REST"] },
    {
      label: lang === "en" ? "Infra & tools" : "Hạ tầng & công cụ",
      items: ["AWS", "Docker", "CI/CD", "Vercel", "Git", "Storybook"],
    },
  ];
}

export interface ExperienceItem {
  years: string;
  role: string;
  note: string;
  company: string;
  desc: string;
}

export function getExperience(lang: Lang): ExperienceItem[] {
  return lang === "en"
    ? [
        {
          years: "10/2024 — 05/2026",
          role: "Full-stack Web Developer · Middle",
          note: "",
          company: "FiveTech Technology Co., Ltd",
          desc: "Full-stack across the product — including Li2.ai, where I built the tracking SDK, the public integration API, an AI tracking-script generator, a WordPress plugin, and the database, caching, and infrastructure underneath.",
        },
        {
          years: "01/2023 — 10/2024",
          role: "Freelance Web Developer",
          note: "",
          company: "Independent",
          desc: "Worked with a range of clients, building and shipping web projects end to end across the front-end and back-end.",
        },
        {
          years: "01/2022 — 01/2023",
          role: "Full-stack Web Developer · Junior",
          note: "(Remote)",
          company: "Cong Nghe Van Thong JSC",
          desc: "Built and maintained web applications end to end, working across the front-end and back-end on production features for the team.",
        },
      ]
    : [
        {
          years: "10/2024 — 05/2026",
          role: "Lập trình viên Web full-stack · Middle",
          note: "",
          company: "Công ty TNHH Công nghệ FiveTech",
          desc: "Làm full-stack trên toàn sản phẩm — bao gồm Li2.ai, nơi tôi xây SDK tracking, API tích hợp công khai, tính năng AI tạo mã tracking, plugin WordPress, cùng cơ sở dữ liệu, cache và hạ tầng bên dưới.",
        },
        {
          years: "01/2023 — 10/2024",
          role: "Lập trình viên Web tự do",
          note: "",
          company: "Làm tự do",
          desc: "Làm việc với nhiều khách hàng, xây dựng và hoàn thiện nhiều dự án web từ đầu đến cuối, trên cả front-end lẫn back-end.",
        },
        {
          years: "01/2022 — 01/2023",
          role: "Lập trình viên Web full-stack · Junior",
          note: "(Remote)",
          company: "Công ty CP Công nghệ Vạn Thông",
          desc: "Xây dựng và bảo trì các ứng dụng web từ đầu đến cuối, làm việc trên cả front-end lẫn back-end cho các tính năng chạy thực tế của đội.",
        },
      ];
}

export interface EducationItem {
  years: string;
  role: string;
  company: string;
  desc: string;
}

export function getEducation(lang: Lang): EducationItem[] {
  return lang === "en"
    ? [
        {
          years: "08/2019 — 12/2023",
          role: "Bachelor of Engineering, Information Technology",
          company: "Vietnam – Korea University of Information & Communication Technology (The University of Da Nang)",
          desc: "Da Nang, Vietnam · GPA 3.5/4.0",
        },
      ]
    : [
        {
          years: "08/2019 — 12/2023",
          role: "Kỹ sư Công nghệ Thông tin",
          company: "Trường ĐH Công nghệ Thông tin & Truyền thông Việt – Hàn (Đại học Đà Nẵng)",
          desc: "Đà Nẵng, Việt Nam · GPA 3.5/4.0",
        },
      ];
}

export interface PostBlock {
  kind: "p" | "h" | "code" | "quote";
  text: string;
}

export interface Post {
  id: string;
  date: string;
  tag: string;
  cover: string;
  title: string;
  excerpt: string;
  read: string;
  body: PostBlock[];
}

const POSTS: Record<Lang, Post[]> = {
  en: [
    {
      id: "fingerprint",
      date: "Jun 2026",
      tag: "Identity",
      cover: "linear-gradient(135deg,#B5654A,#7C3F2E)",
      title: "Fingerprinting: following a click across two domains",
      excerpt:
        "When the short link lives on one domain and the app on another, cookies fall apart. Here is how a device fingerprint stitches the journey back together.",
      read: "7 min",
      body: [
        { kind: "p", text: "Here is a problem that looks simple until you try to solve it. A customer puts our short link on go.their-brand.com and their actual app on app.their-brand.com. Someone clicks the link, lands on the app a moment later, signs up. We want to connect that click to that signup — but the two events happen on two different domains, and that is exactly where the usual toolkit gives up." },
        { kind: "h", text: "Why cookies can’t cross the gap" },
        { kind: "p", text: "A cookie is scoped to the domain that set it. The identifier we drop when someone clicks the link on go.their-brand.com is simply invisible to app.their-brand.com — different origin, different cookie jar. Third-party cookies, which used to paper over this, are being walled off by every major browser. So to link the click to the session, we need a signal that does not depend on shared storage at all." },
        { kind: "h", text: "Deriving an identity from the device" },
        { kind: "p", text: "Instead of storing an ID on the device, we derive one from it. The idea is to collect a handful of stable, individually-unremarkable signals — user agent, language, timezone, screen geometry, platform, and the network IP — and hash them together into a compact device key. No single value identifies anyone; the combination is distinctive enough to recognise the same device twice in a short window." },
        { kind: "code", text: "function deviceKey() {\n  const signals = [\n    navigator.userAgent,\n    navigator.language,\n    Intl.DateTimeFormat().resolvedOptions().timeZone,\n    screen.width + 'x' + screen.height,\n    navigator.platform,\n  ];\n  return hash(signals.join('|')); // IP is added server-side\n}" },
        { kind: "p", text: "The IP is deliberately joined on the server, not the client — the browser never sees it, and it gives the match an extra dimension without shipping anything sensitive to the page." },
        { kind: "h", text: "Matching, not identifying" },
        { kind: "p", text: "This is the part people get wrong. A fingerprint is not a persistent identity — it is a probabilistic match. When a click on domain A and a session on domain B share the same device key and IP within a short time window, we link them with a confidence score. Outside that window, or when signals disagree, we let the match go rather than guess. It stitches one journey back together; it is not a way to follow someone around forever." },
        { kind: "quote", text: "A fingerprint doesn’t tell you who someone is — only that two events probably came from the same device." },
        { kind: "h", text: "Keeping it honest" },
        { kind: "p", text: "Because this is powerful, the constraints matter as much as the code. The device key is hashed, short-lived, and used only to bridge a click to the session that immediately follows it. No names, no emails, nothing that identifies a real person is ever part of the fingerprint. Get the attribution, then let the signal expire — the goal is to measure a journey, not to build a dossier." },
      ],
    },
    {
      id: "sdk",
      date: "May 2026",
      tag: "SDK",
      cover: "linear-gradient(135deg,#E0623B,#C2410C)",
      title: "Designing a tracking SDK that stays under 10KB",
      excerpt:
        "How I kept the Li2 browser SDK tiny and resilient — lazy-loading heavy features, and never losing events even when a visitor navigates away mid-send.",
      read: "8 min",
      body: [
        { kind: "p", text: "A tracking SDK runs on every page of every customer who installs it. That makes it the single most performance-sensitive piece of code I work on: if it is slow, every one of their visitors pays the cost, and they will rip it out. The goal for the Li2 browser SDK was simple to say and hard to do — collect rich behavioural data while staying under 10KB gzipped and never blocking the host page." },
        { kind: "h", text: "Every kilobyte is a negotiation" },
        { kind: "p", text: "I started from the assumption that the core has to stay tiny. The base SDK carries no framework and no utility bloat — just a single global with a tiny queue, so a page can start recording events before the SDK has even finished downloading. Heavier capabilities like session recording do lean on a purpose-built library, but that code is lazy-loaded: it only downloads when a customer actually turns that feature on, so the vast majority of pages never pay for what they do not use." },
        { kind: "code", text: "// Installed inline, runs before the SDK loads\nwindow.li2 = window.li2 || function(){\n  (window.li2.q = window.li2.q || []).push(arguments);\n};\nli2('init', 'pk_live_...');\nli2('track', 'signup_started');" },
        { kind: "p", text: "When the real SDK arrives it drains that queue and replays everything in order. The customer never has to think about load timing — they just call li2() whenever they want." },
        { kind: "h", text: "Batching beats chattiness" },
        { kind: "p", text: "Sending one request per event is death by a thousand cuts. Instead, events accumulate in a buffer and flush on a short timer, when the buffer fills, or when the page is about to unload. The unload case is the tricky one — a normal fetch gets cancelled when the tab closes, so I use the Beacon API, which the browser promises to deliver even after the page is gone." },
        { kind: "code", text: "function flush() {\n  if (!buffer.length) return;\n  const blob = new Blob([JSON.stringify(buffer)], { type: 'application/json' });\n  navigator.sendBeacon('/collect', blob);\n  buffer = [];\n}\naddEventListener('visibilitychange', () => {\n  if (document.visibilityState === 'hidden') flush();\n});" },
        { kind: "quote", text: "The SDK should be invisible. The day a customer notices it is the day something went wrong." },
        { kind: "h", text: "Surviving the page that leaves" },
        { kind: "p", text: "The hardest bug I chased was data vanishing when someone clicked a link mid-session. The buffer flushes on unload, but a large batch — especially with session-recording data attached — can blow past the Beacon size limit and get silently dropped, and the page is already navigating away, so there is no second chance. My fix has three parts: split the payload into chunks small enough to fit sendBeacon comfortably, hand each chunk to the Beacon API on the way out, and write anything still unsent into localStorage. The next page the SDK loads checks that store first and replays whatever the previous page could not deliver." },
        { kind: "code", text: "function persist() {\n  if (buffer.length)\n    localStorage.setItem('li2.pending', JSON.stringify(buffer));\n}\naddEventListener('pagehide', persist);\n\n// On the next load, replay what the last page couldn't send\nconst pending = localStorage.getItem('li2.pending');\nif (pending) {\n  navigator.sendBeacon('/collect', pending);\n  localStorage.removeItem('li2.pending');\n}" },
        { kind: "h", text: "Failing quietly" },
        { kind: "p", text: "Networks are hostile. Requests time out, ad-blockers swallow them, users go through tunnels. The SDK treats delivery as best-effort with bounded retries and a capped buffer, so a flaky connection can never grow memory without limit or throw an error into the host application. If the worst happens, it drops data silently rather than breaking the page it lives on." },
        { kind: "p", text: "That last principle is the whole philosophy in one line: the host page always wins. Analytics is never worth a broken checkout." },
      ],
    },
    {
      id: "ai",
      date: "Mar 2026",
      tag: "AI",
      cover: "linear-gradient(135deg,#E8A24A,#C97B2C)",
      title: "Letting an LLM write your tracking scripts (safely)",
      excerpt:
        "Auto-generating valid tracking code from a plain-English goal — the prompt design, guardrails, and validation that keep the output trustworthy.",
      read: "7 min",
      body: [
        { kind: "p", text: "Setting up tracking is the part everyone postpones. You know you want to measure \"how many people start the signup form\", but turning that into selectors and event calls is fiddly, error-prone work. The AI feature I built for Li2 collapses that gap: you describe the goal in plain language and it generates the tracking script for you." },
        { kind: "h", text: "The model proposes, the system disposes" },
        { kind: "p", text: "The important design decision was to never trust the model output blindly. The LLM is good at turning intent into a draft, but it will happily invent a selector that does not exist on your page or emit code that almost parses. So the model never produces code that runs directly — it produces a structured plan that a deterministic generator turns into the final script." },
        { kind: "code", text: "// The model returns JSON, not JavaScript\n{\n  \"event\": \"signup_started\",\n  \"trigger\": { \"type\": \"click\", \"selector\": \"#signup-cta\" },\n  \"properties\": { \"plan\": \"data-plan\" }\n}" },
        { kind: "p", text: "That JSON is validated against a schema before anything else happens. If the model hallucinates a field or a malformed selector, validation rejects it and we ask again — the user never sees broken output." },
        { kind: "h", text: "Grounding the prompt in the real page" },
        { kind: "p", text: "A model guessing at selectors in a vacuum is useless. Before generating, the system gives the model a condensed snapshot of the actual DOM — interactive elements, their stable attributes, and nearby text — so its suggestions point at things that genuinely exist. Grounding turned the feature from a party trick into something people actually ship." },
        { kind: "quote", text: "Treat the model as a fast intern with no memory: helpful, occasionally confidently wrong, and always worth checking." },
        { kind: "h", text: "A preview before it goes live" },
        { kind: "p", text: "Even validated, generated code gets a dry run. The user sees exactly which element will be tracked, highlighted on their own page, and confirms before anything is saved. The AI removes the tedium; the human keeps the final say." },
      ],
    },
    {
      id: "infra",
      date: "Jan 2026",
      tag: "Infra",
      cover: "linear-gradient(135deg,#D8A98C,#9A6A4E)",
      title: "Postgres, indexes & Redis: making analytics queries fast",
      excerpt:
        "The schema, indexing, and caching choices behind sub-second dashboards over millions of events.",
      read: "6 min",
      body: [
        { kind: "p", text: "Analytics dashboards live or die on latency. Nobody waits ten seconds for a chart. The challenge is that the queries behind them aggregate over millions of rows, and the data keeps growing. Here is how I keep Li2 dashboards feeling instant." },
        { kind: "h", text: "Model for the questions you ask" },
        { kind: "p", text: "Raw events are append-only and never updated, which makes them cheap to write but expensive to read in aggregate. So I separate the write path from the read path: events land in a lean table optimised for ingestion, and background jobs roll them up into pre-aggregated tables shaped exactly like the questions the dashboard asks — counts per day, per source, per funnel step." },
        { kind: "h", text: "Indexes are a promise about access patterns" },
        { kind: "p", text: "An index only helps if it matches how you actually filter. Almost every dashboard query is scoped by project and a time range, so a composite index on those columns does the heavy lifting. Partial indexes trim the cost further for the handful of hot queries that dominate traffic." },
        { kind: "code", text: "CREATE INDEX idx_events_project_time\n  ON events (project_id, created_at DESC);\n\n-- Hot path: only index live, non-bot traffic\nCREATE INDEX idx_events_active\n  ON events (project_id, created_at DESC)\n  WHERE is_bot = false;" },
        { kind: "quote", text: "The fastest query is the one you never run. Cache the answer, not just the data." },
        { kind: "h", text: "Redis for the last mile" },
        { kind: "p", text: "Even a fast query is wasteful if a hundred people load the same dashboard a second. Redis caches the computed results with a short TTL, so repeated views are served from memory while the underlying numbers stay fresh enough to trust. The result is dashboards that respond in well under a second, even as the event count climbs into the millions." },
      ],
    },
  ],
  vi: [
    {
      id: "fingerprint",
      date: "Th6 2026",
      tag: "Identity",
      cover: "linear-gradient(135deg,#B5654A,#7C3F2E)",
      title: "Fingerprint: lần theo một cú click qua hai tên miền",
      excerpt:
        "Khi short link nằm ở một tên miền còn ứng dụng ở tên miền khác, cookie bó tay. Đây là cách dấu vân thiết bị nối lại cả hành trình.",
      read: "7 phút",
      body: [
        { kind: "p", text: "Có một bài toán trông đơn giản cho tới khi bắt tay vào giải. Khách hàng đặt short link trên go.brand.com còn ứng dụng thật ở app.brand.com. Ai đó bấm link, một lát sau vào ứng dụng rồi đăng ký. Chúng tôi muốn nối cú click đó với lần đăng ký đó — nhưng hai sự kiện xảy ra trên hai tên miền khác nhau, và đó chính là chỗ bộ công cụ thông thường chịu thua." },
        { kind: "h", text: "Vì sao cookie không băng qua được" },
        { kind: "p", text: "Cookie bị bó theo tên miền đã tạo ra nó. Cái định danh chúng tôi gắn khi ai đó bấm link trên go.brand.com đơn giản là vô hình với app.brand.com — khác origin, khác hũ cookie. Cookie bên thứ ba, thứ trước đây vá tạm chỗ này, đang bị mọi trình duyệt lớn chặn dần. Nên để nối cú click với phiên, chúng tôi cần một tín hiệu hoàn toàn không dựa vào bộ nhớ chung." },
        { kind: "h", text: "Suy ra định danh từ chính thiết bị" },
        { kind: "p", text: "Thay vì lưu một ID lên thiết bị, chúng tôi suy ra nó từ thiết bị. Ý tưởng là thu một nắm tín hiệu ổn định và từng cái thì chẳng đặc biệt — user agent, ngôn ngữ, múi giờ, kích thước màn hình, nền tảng, và IP mạng — rồi băm chúng lại thành một khóa thiết bị gọn. Không giá trị đơn lẻ nào định danh được ai; nhưng tổ hợp lại đủ đặc trưng để nhận ra cùng một thiết bị hai lần trong một khoảng thời gian ngắn." },
        { kind: "code", text: "function deviceKey() {\n  const signals = [\n    navigator.userAgent,\n    navigator.language,\n    Intl.DateTimeFormat().resolvedOptions().timeZone,\n    screen.width + 'x' + screen.height,\n    navigator.platform,\n  ];\n  return hash(signals.join('|')); // IP được ghép ở phía server\n}" },
        { kind: "p", text: "IP được cố ý ghép ở phía server chứ không phải ở client — trình duyệt không bao giờ thấy nó, mà vẫn cho phép việc khớp có thêm một chiều mà không gửi gì nhạy cảm ra trang." },
        { kind: "h", text: "Khớp, không phải định danh" },
        { kind: "p", text: "Đây là chỗ nhiều người hiểu sai. Dấu vân không phải một định danh lâu dài — nó là một phép khớp xác suất. Khi một cú click trên tên miền A và một phiên trên tên miền B có cùng khóa thiết bị và IP trong một cửa sổ thời gian ngắn, chúng tôi nối chúng với một điểm tin cậy. Ngoài cửa sổ đó, hoặc khi tín hiệu lệch nhau, chúng tôi bỏ qua phép khớp thay vì đoán bừa. Nó nối lại một hành trình; nó không phải cách để bám theo ai đó mãi mãi." },
        { kind: "quote", text: "Dấu vân không cho bạn biết ai đó là ai — chỉ cho biết hai sự kiện nhiều khả năng đến từ cùng một thiết bị." },
        { kind: "h", text: "Giữ mọi thứ tử tế" },
        { kind: "p", text: "Vì đây là thứ có sức mạnh, các ràng buộc quan trọng không kém phần code. Khóa thiết bị được băm, sống ngắn, và chỉ dùng để bắc cầu một cú click với phiên ngay sau đó. Không tên, không email, không thứ gì định danh một con người thật nằm trong dấu vân. Lấy được quy kết rồi thì cho tín hiệu hết hạn — mục tiêu là đo một hành trình, không phải lập hồ sơ." },
      ],
    },
    {
      id: "sdk",
      date: "Th5 2026",
      tag: "SDK",
      cover: "linear-gradient(135deg,#E0623B,#C2410C)",
      title: "Thiết kế SDK tracking gọn dưới 10KB",
      excerpt:
        "Cách tôi giữ SDK trình duyệt của Li2 thật nhẹ và bền — tải lười các tính năng nặng, và không mất sự kiện ngay cả khi khách rời trang giữa chừng.",
      read: "8 phút",
      body: [
        { kind: "p", text: "Một SDK tracking chạy trên mọi trang của mọi khách hàng cài nó. Điều đó khiến nó là đoạn mã nhạy cảm nhất về hiệu năng mà tôi làm: nếu nó chậm, mọi khách truy cập của họ đều phải gánh, và họ sẽ gỡ nó ra. Mục tiêu cho SDK trình duyệt của Li2 dễ nói nhưng khó làm — thu thập dữ liệu hành vi phong phú mà vẫn dưới 10KB sau khi nén, và không bao giờ chặn trang chủ." },
        { kind: "h", text: "Mỗi kilobyte là một cuộc thương lượng" },
        { kind: "p", text: "Tôi bắt đầu với nguyên tắc: phần lõi phải thật nhỏ. SDK lõi không kèm framework, không thư viện tiện ích thừa — chỉ là một biến toàn cục với một hàng đợi nhỏ, để trang có thể bắt đầu ghi sự kiện trước cả khi SDK tải xong. Những tính năng nặng hơn như ghi lại phiên (session recording) có dùng một thư viện riêng, nhưng phần mã đó được tải lười (lazy-load): chỉ tải khi khách hàng thực sự bật tính năng đó lên, nên phần lớn các trang không bao giờ phải gánh những gì chúng không dùng." },
        { kind: "code", text: "// Nhúng inline, chạy trước khi SDK tải xong\nwindow.li2 = window.li2 || function(){\n  (window.li2.q = window.li2.q || []).push(arguments);\n};\nli2('init', 'pk_live_...');\nli2('track', 'signup_started');" },
        { kind: "p", text: "Khi SDK thật tải về, nó rút hàng đợi đó ra và phát lại mọi thứ theo đúng thứ tự. Khách hàng không cần bận tâm thời điểm tải — họ chỉ gọi li2() bất cứ khi nào muốn." },
        { kind: "h", text: "Gom nhóm thắng việc gửi lắt nhắt" },
        { kind: "p", text: "Gửi một request cho mỗi sự kiện là chết dần chết mòn. Thay vào đó, sự kiện được tích vào bộ đệm và đẩy đi theo bộ hẹn giờ ngắn, khi bộ đệm đầy, hoặc khi trang sắp đóng. Trường hợp đóng trang là khó nhất — fetch thường bị huỷ khi tab đóng, nên tôi dùng Beacon API mà trình duyệt cam kết gửi đi kể cả khi trang đã biến mất." },
        { kind: "code", text: "function flush() {\n  if (!buffer.length) return;\n  const blob = new Blob([JSON.stringify(buffer)], { type: 'application/json' });\n  navigator.sendBeacon('/collect', blob);\n  buffer = [];\n}\naddEventListener('visibilitychange', () => {\n  if (document.visibilityState === 'hidden') flush();\n});" },
        { kind: "quote", text: "SDK nên vô hình. Ngày khách hàng nhận ra nó là ngày có gì đó đã sai." },
        { kind: "h", text: "Sống sót khi trang bị rời đi" },
        { kind: "p", text: "Bug khó nhất tôi từng truy là dữ liệu biến mất khi ai đó bấm vào một liên kết giữa phiên. Bộ đệm được đẩy đi khi trang đóng, nhưng một lô lớn — nhất là khi kèm dữ liệu session recording — có thể vượt giới hạn dung lượng của Beacon và bị bỏ lặng lẽ, mà trang thì đã chuyển đi rồi nên không có cơ hội thứ hai. Cách xử lý của tôi gồm ba phần: cắt payload thành các chunk đủ nhỏ để vừa sendBeacon, đưa từng chunk cho Beacon API trên đường thoát, và ghi phần chưa gửi được vào localStorage. Trang tiếp theo mà SDK tải lên sẽ kiểm tra kho đó trước và phát lại những gì trang trước chưa kịp gửi." },
        { kind: "code", text: "function persist() {\n  if (buffer.length)\n    localStorage.setItem('li2.pending', JSON.stringify(buffer));\n}\naddEventListener('pagehide', persist);\n\n// Lần tải sau, phát lại những gì trang trước chưa gửi được\nconst pending = localStorage.getItem('li2.pending');\nif (pending) {\n  navigator.sendBeacon('/collect', pending);\n  localStorage.removeItem('li2.pending');\n}" },
        { kind: "h", text: "Thất bại một cách lặng lẽ" },
        { kind: "p", text: "Mạng thì khắc nghiệt. Request bị timeout, trình chặn quảng cáo nuốt mất, người dùng đi qua hầm. SDK coi việc gửi là cố gắng tối đa với số lần thử lại có giới hạn và bộ đệm có trần, để kết nối chập chờn không bao giờ làm bộ nhớ phình vô hạn hay ném lỗi vào ứng dụng chủ. Nếu điều tệ nhất xảy ra, nó âm thầm bỏ dữ liệu thay vì làm hỏng trang nơi nó sống." },
        { kind: "p", text: "Nguyên tắc cuối cùng đó chính là toàn bộ triết lý gói trong một câu: trang chủ luôn thắng. Phân tích không bao giờ đáng để đánh đổi một luồng thanh toán bị hỏng." },
      ],
    },
    {
      id: "ai",
      date: "Th3 2026",
      tag: "AI",
      cover: "linear-gradient(135deg,#E8A24A,#C97B2C)",
      title: "Để LLM viết mã tracking cho bạn (một cách an toàn)",
      excerpt:
        "Tự sinh mã tracking hợp lệ từ một mục tiêu bằng ngôn ngữ tự nhiên — thiết kế prompt, lan can an toàn và bước kiểm tra để kết quả đáng tin.",
      read: "7 phút",
      body: [
        { kind: "p", text: "Cài đặt tracking là phần ai cũng trì hoãn. Bạn biết mình muốn đo \"bao nhiêu người bắt đầu điền form đăng ký\", nhưng biến nó thành selector và lời gọi sự kiện là việc tỉ mẩn và dễ sai. Tính năng AI tôi xây cho Li2 xoá đi khoảng cách đó: bạn mô tả mục tiêu bằng ngôn ngữ tự nhiên và nó sinh ra mã tracking cho bạn." },
        { kind: "h", text: "Mô hình đề xuất, hệ thống quyết định" },
        { kind: "p", text: "Quyết định thiết kế quan trọng là không bao giờ tin tưởng mù quáng kết quả của mô hình. LLM giỏi biến ý định thành bản nháp, nhưng nó cũng sẵn sàng bịa ra một selector không tồn tại trên trang của bạn hoặc sinh ra mã gần như parse được. Vậy nên mô hình không bao giờ tạo ra mã chạy trực tiếp — nó tạo ra một kế hoạch có cấu trúc để một bộ sinh mã tất định biến thành script cuối cùng." },
        { kind: "code", text: "// Mô hình trả về JSON, không phải JavaScript\n{\n  \"event\": \"signup_started\",\n  \"trigger\": { \"type\": \"click\", \"selector\": \"#signup-cta\" },\n  \"properties\": { \"plan\": \"data-plan\" }\n}" },
        { kind: "p", text: "JSON đó được kiểm tra theo một schema trước khi bất cứ điều gì khác xảy ra. Nếu mô hình tưởng tượng ra một trường hay một selector dị dạng, bước kiểm tra sẽ từ chối và ta hỏi lại — người dùng không bao giờ thấy kết quả hỏng." },
        { kind: "h", text: "Neo prompt vào trang thật" },
        { kind: "p", text: "Một mô hình đoán selector trong chân không thì vô dụng. Trước khi sinh mã, hệ thống đưa cho mô hình một bản chụp cô đọng của DOM thật — các phần tử tương tác, thuộc tính ổn định của chúng, và văn bản xung quanh — để các gợi ý trỏ vào những thứ thực sự tồn tại. Việc neo này biến tính năng từ trò vui thành thứ người ta thật sự dùng được." },
        { kind: "quote", text: "Hãy coi mô hình như một thực tập sinh nhanh nhẹn nhưng không có trí nhớ: hữu ích, đôi khi sai một cách tự tin, và luôn đáng để kiểm lại." },
        { kind: "h", text: "Xem trước trước khi chạy thật" },
        { kind: "p", text: "Dù đã được kiểm tra, mã sinh ra vẫn được chạy thử. Người dùng thấy chính xác phần tử nào sẽ được theo dõi, được làm nổi bật ngay trên trang của họ, và xác nhận trước khi lưu. AI bỏ đi sự tẻ nhạt; con người giữ quyền quyết định cuối cùng." },
      ],
    },
    {
      id: "infra",
      date: "Th1 2026",
      tag: "Infra",
      cover: "linear-gradient(135deg,#D8A98C,#9A6A4E)",
      title: "Postgres, index & Redis: tăng tốc truy vấn phân tích",
      excerpt:
        "Những lựa chọn về schema, lập chỉ mục và cache đứng sau các dashboard phản hồi dưới một giây trên hàng triệu sự kiện.",
      read: "6 phút",
      body: [
        { kind: "p", text: "Dashboard phân tích sống hay chết nhờ độ trễ. Không ai chờ mười giây để xem một biểu đồ. Thử thách là các truy vấn phía sau phải tổng hợp trên hàng triệu dòng, và dữ liệu cứ tăng lên. Đây là cách tôi giữ cho dashboard của Li2 luôn cảm giác tức thì." },
        { kind: "h", text: "Mô hình hoá theo câu hỏi bạn sẽ hỏi" },
        { kind: "p", text: "Sự kiện thô chỉ ghi thêm và không bao giờ cập nhật, nên ghi rất rẻ nhưng đọc tổng hợp lại đắt. Vì vậy tôi tách đường ghi khỏi đường đọc: sự kiện rơi vào một bảng tinh gọn tối ưu cho việc nạp, và các job nền cuộn chúng lại thành các bảng tổng hợp sẵn có hình dạng đúng như câu hỏi của dashboard — đếm theo ngày, theo nguồn, theo bước phễu." },
        { kind: "h", text: "Index là một lời hứa về cách truy cập" },
        { kind: "p", text: "Một index chỉ giúp ích nếu nó khớp với cách bạn thực sự lọc. Gần như mọi truy vấn dashboard đều giới hạn theo dự án và một khoảng thời gian, nên một composite index trên các cột đó gánh phần nặng nhất. Partial index cắt giảm chi phí thêm nữa cho một nhúm truy vấn nóng chiếm phần lớn lưu lượng." },
        { kind: "code", text: "CREATE INDEX idx_events_project_time\n  ON events (project_id, created_at DESC);\n\n-- Đường nóng: chỉ index lưu lượng thật, không phải bot\nCREATE INDEX idx_events_active\n  ON events (project_id, created_at DESC)\n  WHERE is_bot = false;" },
        { kind: "quote", text: "Truy vấn nhanh nhất là truy vấn bạn không bao giờ phải chạy. Hãy cache câu trả lời, không chỉ dữ liệu." },
        { kind: "h", text: "Redis cho chặng cuối" },
        { kind: "p", text: "Ngay cả truy vấn nhanh cũng lãng phí nếu một trăm người mở cùng một dashboard trong một giây. Redis cache kết quả đã tính với TTL ngắn, để các lượt xem lặp lại được phục vụ từ bộ nhớ trong khi con số bên dưới vẫn đủ mới để tin. Kết quả là các dashboard phản hồi dưới một giây, ngay cả khi số sự kiện leo lên hàng triệu." },
      ],
    },
  ],
};

export function getPosts(lang: Lang): Post[] {
  return POSTS[lang];
}
