"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LANG_STORAGE_KEY,
  LANG_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  THEME_CHANGE_EVENT,
} from "@/lib/content";
import {
  ArrowLeft,
  X,
  CheckCircle2,
  Sparkles,
  Radio,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Move,
  Award,
  Camera,
  MousePointerClick,
  Scan,
  Maximize2,
  ExternalLink,
  Link2,
  Eye,
  TrendingUp,
  Compass,
} from "lucide-react";

// Types for all 11 system blocks
type SystemBlockId =
  | "client-sdk"
  | "portal-user"
  | "portal-admin"
  | "casdoor-auth"
  | "edge-gateway"
  | "backend-core"
  | "rbac-engine"
  | "plan-engine"
  | "redis-broker"
  | "worker-tasks"
  | "db-storage";

interface SystemBlockInfo {
  id: SystemBlockId;
  nameVi: string;
  nameEn: string;
  categoryVi: string;
  categoryEn: string;
  techStack: string[];
  shortDescVi: string;
  shortDescEn: string;
  color: string;
  accentBg: string;
  roleSummaryVi: string;
  roleSummaryEn: string;
  myWorkVi: string[];
  myWorkEn: string[];
  businessImpactVi: string;
  businessImpactEn: string;
  screenshots?: {
    url: string;
    captionVi: string;
    captionEn: string;
    badge: string;
  }[];
}

const SYSTEM_BLOCKS: Record<SystemBlockId, SystemBlockInfo> = {
  // 1. Client SDK
  "client-sdk": {
    id: "client-sdk",
    nameVi: "Client Analytics SDK",
    nameEn: "Client Analytics SDK",
    categoryVi: "Browser Telemetry & Fingerprint",
    categoryEn: "Browser Telemetry & Fingerprint",
    techStack: [
      "TypeScript SDK",
      "Canvas & WebGL Fingerprint",
      "rrweb Session Recording",
      "Visual Tagger Overlay",
      "MurmurHash3",
    ],
    shortDescVi:
      "SDK thu thập dữ liệu phía client: tính toán fingerprint phần cứng/canvas, ghi hình phiên DOM, theo dõi click/scroll/form và hiển thị overlay gắn thẻ sự kiện trực tiếp trên UI.",
    shortDescEn:
      "Client telemetry SDK: hardware & canvas fingerprinting, rrweb DOM session recording, click/scroll/form tracking, and in-browser visual event tagger overlay.",
    color: "#0284C7",
    accentBg: "rgba(2, 132, 199, 0.08)",
    roleSummaryVi:
      "Tầng thu thập dữ liệu đầu cuối chạy trực tiếp trong trình duyệt khách hàng. Đảm nhiệm các tác vụ kỹ thuật chuyên sâu: Thu thập tín hiệu phần cứng & Canvas để sinh Fingerprint client-side (sau đó backend kết hợp IP, User-Agent, TLS để băm thành Composite ID duy nhất), ghi hình biến đổi DOM (Session Recording), theo dõi hành vi vi mô (click, scroll, form submit), và kích hoạt thanh công cụ Toolbar / Visual Overlay trực tiếp trên trang khách hàng để gắn thẻ sự kiện (Event Tagging) không cần viết code.",
    roleSummaryEn:
      "Client-side telemetry SDK running directly in end-user browsers. Powers advanced client capabilities: Hardware & Canvas device fingerprinting (later hashed with IP, User-Agent, and TLS on the backend into a persistent Composite ID), DOM mutation session recording (rrweb), micro-interaction tracking (click, scroll, form fill/submit), and interactive in-browser Visual Overlay / Toolbar for zero-code event tagging directly on host websites.",
    myWorkVi: [
      "Thiết kế kiến trúc 2-Tier Fingerprinting: Tầng client thu thập Canvas sub-pixel rendering (MurmurHash3), WebGL GPU vendor, Screen geometry, AudioContext, System fonts và Timezone; tầng Go Backend kết hợp thêm IP, User-Agent và TLS JA3 để tạo Composite Fingerprint duy nhất (nhận diện chính xác 100% người dùng kể cả khi xoá cookie hoặc Safari ITP chặn).",
      "Xây dựng module Session Recording: Bắt tuần tự các biến đổi DOM (DOM Mutations), vị trí con trỏ chuột và sự kiện click/scroll, nén thành các payload chunk gửi định kỳ về backend phục vụ tua lại video phiên người dùng.",
      "Phát triển bộ theo dõi tương tác vi mô (Micro-Interaction Tracking): Tự động ghi nhận Click, Cuộn trang (Scroll depth %), Điền form (Form fill) và Gửi biểu mẫu (Form submit) với thuật toán nhận diện thao tác bức xúc (Rage Click Detection).",
      "Xây dựng Toolbar UI & Visual Tagger Overlay: Khởi tạo an toàn qua URL token (?li2_tagger=true), hiển thị thanh công cụ nổi, tự động vẽ khung viền (bounding box) và tooltip định danh thẻ (<button> 'Order' #submit) khi di chuột để người dùng click và gắn thẻ Event Rule ngay trên giao diện.",
      "Cơ chế hàng đợi offline & chống nghẽn mạng: Bộ đệm batching gửi dữ liệu theo nhịp (beaconing / sendBeacon), lưu LocalStorage dự phòng khi rớt mạng.",
    ],
    myWorkEn: [
      "Engineered 2-Tier Fingerprinting pipeline: Client collects Canvas sub-pixel rendering (MurmurHash3), WebGL vendor, Screen geometry, AudioContext, System fonts, and Timezone; Go Backend enriches with IP Geo, User-Agent, and TLS JA3 to forge persistent Composite Fingerprint (resolving visitor journeys across cookie resets and Safari ITP blocks).",
      "Implemented high-fidelity Session Recording: Serializing DOM mutations, cursor vectors, and click/scroll events into lightweight compressed payload chunks for seamless video replay.",
      "Developed micro-interaction tracking suite: Automated tracking for clicks, scroll depth percentages, form fill/submit cycles, and sliding-window rage click detection.",
      "Engineered In-Browser Toolbar UI & Visual Tagger Overlay: Activated via secure URL token (?li2_tagger=true), rendering floating toolbar, real-time element hover bounding boxes with DOM selector tooltips (<button> 'Order' #submit) for zero-code event tagging directly on host websites.",
      "Resilient telemetry transport: Batched beaconing via navigator.sendBeacon with LocalStorage offline fallback queuing during network drops.",
    ],
    businessImpactVi:
      "Nhận diện chính xác danh tính người dùng xuyên suốt các chiến dịch quảng cáo và cho phép đội ngũ marketing tự gắn thẻ sự kiện mà không cần nhờ đến lập trình viên can thiệp mã nguồn.",
    businessImpactEn:
      "Guarantees accurate cross-campaign attribution identity even without third-party cookies, empowering marketing teams to tag events visually without engineering dependencies.",
    screenshots: [
      {
        url: "/images/li2-heatmap.png",
        badge: "Visual Tagger & Heatmap",
        captionVi: "Bản đồ nhiệt Heatmap & lớp phủ phân tích click trực tiếp trên website máy chủ",
        captionEn: "Live Heatmap & Click Overlay deployed directly on host customer website",
      },
      {
        url: "/images/li2-session-replay.png",
        badge: "Session Recording Player",
        captionVi: "Trình phát video Session Replay tua lại hành trình chuột, click và cuộn trang của người dùng",
        captionEn: "High-fidelity Session Replay player reconstructing user mouse trajectories, clicks, and scrolls",
      },
    ],
  },

  // 2. User Portal (Full-stack Next.js with RBAC & Direct DB access)
  "portal-user": {
    id: "portal-user",
    nameVi: "User Portal (Full-stack Next.js)",
    nameEn: "User Portal (Full-stack Next.js)",
    categoryVi: "Customer Full-stack App",
    categoryEn: "Customer Full-stack App",
    techStack: ["Next.js Full-stack", "React", "Server Actions", "@xyflow/react", "Direct DB Client"],
    shortDescVi:
      "Ứng dụng Full-stack cho khách hàng: có backend riêng kết nối trực tiếp cơ sở dữ liệu (SSR), phân quyền RBAC đa tầng, tạo phễu trực quan và phát lại phiên.",
    shortDescEn:
      "Customer full-stack SaaS application: features Next.js backend with direct database connectivity (SSR), multi-layer RBAC, visual funnels, and session replay.",
    color: "#2563EB",
    accentBg: "rgba(37, 99, 235, 0.08)",
    roleSummaryVi:
      "Ứng dụng Full-stack Next.js tích hợp sẵn lớp backend riêng. Sử dụng Server Components và Server Actions kết nối trực tiếp Database để render SSR nhanh chóng, đồng thời kiểm soát phân quyền RBAC trực tiếp từ giao diện đến server-side.",
    roleSummaryEn:
      "A full-stack Next.js application with an integrated backend layer. Leverages Server Components & Server Actions for direct database queries and fast SSR, while enforcing end-to-end RBAC from UI to server.",
    myWorkVi: [
      "Xây dựng ứng dụng Full-stack trên Next.js với backend tích hợp: Kết nối trực tiếp cơ sở dữ liệu để Server-Side Rendering (SSR) các màn hình báo cáo phức tạp mà không cần qua proxy trung gian.",
      "Tích hợp hệ thống phân quyền RBAC đa tầng: Route Guards trên middleware Next.js, bảo vệ Server Actions và ẩn/hiện linh hoạt các tính năng trên UI dựa theo vai trò (Owner, Admin, Member).",
      "Tích hợp thư viện sơ đồ khối trực quan (@xyflow/react) giúp người dùng tự dựng phễu phân tích chuyển đổi đa điểm chạm.",
      "Xây dựng trình phát video Session Replay tương tác, đồng bộ giữa thao tác chuột, bàn phím và các sự cố trải nghiệm người dùng.",
      "Tối ưu hóa quản lý trạng thái và bộ nhớ đệm giao diện với TanStack Query cho trải nghiệm phản hồi tức thì.",
    ],
    myWorkEn: [
      "Developed full-stack Next.js application with integrated backend: Direct database querying via Server Components & SSR for instant dashboard loading without API hops.",
      "Implemented multi-layer RBAC: Next.js middleware route guarding, Server Action permission checks, and role-based UI component gating (Owner, Admin, Member).",
      "Integrated visual node graphs (@xyflow/react) enabling users to construct and visualize multi-touch attribution funnels.",
      "Engineered interactive Session Replay player synchronized with cursor trajectories, clicks, and UX friction points.",
      "Optimized client state caching and real-time updates using TanStack Query for instantaneous UI responsiveness.",
    ],
    businessImpactVi:
      "Tăng tốc độ hiển thị trang nhờ SSR trực tiếp từ database, đồng thời đảm bảo bảo mật chặt chẽ nhờ cơ chế phân quyền kép (Frontend UI + Next.js Server).",
    businessImpactEn:
      "Dramatically accelerates page load via direct database SSR while enforcing bulletproof security through dual-layer RBAC (client UI + server actions).",
    screenshots: [
      {
        url: "/images/li2-analytics-mockup.png",
        badge: "Next.js SSR Analytics",
        captionVi: "Bảng phân tích toàn diện đa chiều kết nối trực tiếp database qua Next.js Server Components",
        captionEn: "Comprehensive analytics console queried directly from database via Next.js Server Components",
      },
      {
        url: "/images/li2-dashboard.png",
        badge: "Real-time Metrics Dashboard",
        captionVi: "Giao diện quản trị số liệu lượt click, link chuyển hướng và tỉ lệ tương tác theo thời gian thực",
        captionEn: "Real-time metrics dashboard tracking link performance, redirect speed, and customer engagement",
      },
      {
        url: "/images/li2-session-replay.png",
        badge: "Session Replay Console",
        captionVi: "Trình quản lý & xem lại video các phiên tương tác của khách hàng với timeline chi tiết",
        captionEn: "Customer session replay management console with event timeline & error tracking",
      },
      {
        url: "/images/li2-funnel-builder.png",
        badge: "Interactive Funnel Builder",
        captionVi: "Trình dựng phễu trực quan giúp khách hàng tự cấu hình và đo lường tỷ lệ rơi rụng qua từng bước",
        captionEn: "Visual node-based funnel builder measuring user progression and drop-off points",
      },
    ],
  },

  // 3. Admin Portal
  "portal-admin": {
    id: "portal-admin",
    nameVi: "Admin Portal",
    nameEn: "Admin Portal",
    categoryVi: "Superadmin Operations Console",
    categoryEn: "Superadmin Operations Console",
    techStack: ["React", "Vite", "Recharts"],
    shortDescVi:
      "Bảng điều khiển quản trị tối cao: quản lý các tổ chức, phân bổ gói cước, cấu hình tên miền tùy chỉnh và giám sát sức khỏe toàn hệ thống.",
    shortDescEn:
      "Operations console for platform admins: tenant workspace management, plan allocation, custom domain provisioning, and system monitoring.",
    color: "#7C3AED",
    accentBg: "rgba(124, 58, 237, 0.08)",
    roleSummaryVi:
      "Môi trường quản trị độc lập dành riêng cho đội ngũ vận hành và kỹ thuật để kiểm soát toàn bộ hạ tầng, tài khoản khách hàng và cấu hình hệ thống.",
    roleSummaryEn:
      "Dedicated operational console enabling platform administrators and DevOps engineers to manage global tenants and monitor system health.",
    myWorkVi: [
      "Xây dựng bảng điều khiển quản trị độc lập với tốc độ tải trang tức thì, tách biệt hoàn toàn khỏi ứng dụng người dùng.",
      "Module quản trị tổ chức: Tra cứu, quản lý trạng thái hoạt động, kích hoạt tính năng và phân bổ gói dịch vụ cho khách hàng.",
      "Module quản lý tên miền: Kiểm tra trạng thái xác thực DNS, tự động cấp phát chứng chỉ bảo mật SSL cho custom domains.",
      "Bảng theo dõi thời gian thực: Giám sát lưu lượng truy cập, tình trạng hoạt động của các hàng đợi và tài nguyên cơ sở dữ liệu.",
    ],
    myWorkEn: [
      "Developed standalone superadmin console providing instant response times, completely decoupled from customer web apps.",
      "Tenant Workspace Management: Status toggles, feature overrides, and subscription plan allocations.",
      "Custom Domain Provisioning: Automated DNS verification, routing health checks, and SSL certificate issuance.",
      "System Observability: Real-time traffic monitoring across background task queues and database resources.",
    ],
    businessImpactVi:
      "Tăng cường tính an toàn nhờ cách ly quyền quản trị tối cao, đồng thời rút ngắn thời gian xử lý sự cố kỹ thuật cho đội ngũ vận hành.",
    businessImpactEn:
      "Enforces strict operational security boundaries while streamlining day-to-day tenant management for devops teams.",
  },

  // 4. Casdoor Auth (SSO)
  "casdoor-auth": {
    id: "casdoor-auth",
    nameVi: "Casdoor Auth (SSO)",
    nameEn: "Casdoor Auth (SSO)",
    categoryVi: "Central Identity Provider",
    categoryEn: "Central Identity Provider",
    techStack: ["Casdoor", "OIDC", "OAuth2", "JWT"],
    shortDescVi:
      "Hệ thống xác thực tập trung: Single Sign-On (SSO), đăng nhập tài khoản xã hội, quản lý người dùng và cấp phát mã phiên JWT an toàn.",
    shortDescEn:
      "Centralized identity provider: Single Sign-On (SSO), social logins, user management, and cryptographically secure JWT issuance.",
    color: "#EA580C",
    accentBg: "rgba(234, 88, 12, 0.08)",
    roleSummaryVi:
      "Đóng vai trò là cổng định danh duy nhất của hệ thống, quản lý bảo mật thông tin đăng nhập và cấp quyền truy cập an toàn cho tất cả các portal.",
    roleSummaryEn:
      "Acts as the unified identity gateway, handling user authentication, credentials security, and secure token issuance across all portals.",
    myWorkVi: [
      "Tích hợp Casdoor làm máy chủ định danh tập trung (Central Identity Provider) cho toàn bộ nền tảng.",
      "Thiết lập luồng đăng nhập một lần (SSO) và đăng nhập nhanh qua Google, GitHub và Email.",
      "Xây dựng cơ chế đồng bộ danh tính người dùng giữa hệ thống xác thực và cơ sở dữ liệu nội bộ.",
      "Triển khai xác thực phiên làm việc an toàn với mã bảo mật JWT (JSON Web Tokens).",
    ],
    myWorkEn: [
      "Integrated Casdoor as the enterprise Single Sign-On and central OIDC Identity Provider.",
      "Configured seamless social authentication flows (Google, GitHub, email verification).",
      "Built user account synchronization pipeline linking identity accounts with internal database profiles.",
      "Implemented cryptographic JWT session token verification across API gateways.",
    ],
    businessImpactVi:
      "Tách biệt việc quản lý tài khoản khỏi mã nguồn nghiệp vụ, nâng cao tiêu chuẩn an toàn bảo mật và mang lại trải nghiệm đăng nhập tiện lợi.",
    businessImpactEn:
      "Decouples credentials management from core business code, boosting system security and simplifying customer onboarding.",
  },

  // 5. Edge & Bot Filter
  "edge-gateway": {
    id: "edge-gateway",
    nameVi: "Edge & Bot Filter",
    nameEn: "Edge & Bot Filter",
    categoryVi: "Edge Security & Routing",
    categoryEn: "Edge Security & Routing",
    techStack: ["Cloudflare Edge", "WAF", "Edge Cache"],
    shortDescVi:
      "Lớp vành đai phân giải short-link toàn cầu, nhận diện và loại bỏ bot crawler độc hại, và phân phối cấu hình động cho script khách hàng.",
    shortDescEn:
      "Global edge perimeter delivering low-latency short-link resolution, bot crawler filtering, and dynamic configuration injection.",
    color: "#059669",
    accentBg: "rgba(5, 150, 105, 0.08)",
    roleSummaryVi:
      "Bảo vệ toàn bộ hệ thống từ biên mạng toàn cầu, đảm bảo lưu lượng truy cập vào backend đều là người dùng thực tế và hợp lệ.",
    roleSummaryEn:
      "Shields core services at the global network perimeter, ensuring incoming backend traffic is legitimate and free of scraper noise.",
    myWorkVi: [
      "Xây dựng logic xử lý tại tầng biên mạng (Cloudflare Edge) để phân phối cấu hình động theo từng website khách hàng.",
      "Triển khai bộ lọc nhận diện bot thông minh: Cho phép bot mạng xã hội (Facebook, Zalo) đọc preview link nhưng chặn bot spam click ảo.",
      "Thiết lập chính sách tường lửa WAF và bộ nhớ đệm cạnh Edge Caching cho các tài nguyên tĩnh.",
    ],
    myWorkEn: [
      "Engineered edge worker logic dynamically injecting configurations per customer domain.",
      "Built intelligent bot classification: Serving rich OpenGraph previews to social crawlers while filtering out fraudulent clicks.",
      "Configured WAF security rules and edge caching optimizing static delivery globally.",
    ],
    businessImpactVi:
      "Bảo vệ độ tin cậy của dữ liệu phân tích chiến dịch, ngăn ngừa chi phí xử lý server không đáng có từ bot spam.",
    businessImpactEn:
      "Preserves analytics integrity and cuts infrastructure spend by eliminating bot pollution before hitting core databases.",
  },

  // 6. Core API Gateway
  "backend-core": {
    id: "backend-core",
    nameVi: "Core API Gateway (li2-be)",
    nameEn: "Core API Gateway (li2-be)",
    categoryVi: "Central Core Microservice",
    categoryEn: "Central Core Microservice",
    techStack: ["Go", "Gin", "Dependency Injection"],
    shortDescVi:
      "Gateway trung tâm xử lý chuyển hướng short-link siêu tốc (<10ms), chuỗi Middleware bảo mật, tính toán quy kết chuyển đổi và điều phối dữ liệu.",
    shortDescEn:
      "Central gateway delivering sub-10ms short-link redirects, security middleware pipeline, attribution resolution, and data routing.",
    color: "#C2410C",
    accentBg: "rgba(194, 65, 12, 0.08)",
    roleSummaryVi:
      "Trái tim của hệ thống backend, chịu trách nhiệm tiếp nhận lưu lượng chuyển hướng short-link, điều phối xác thực, phân quyền và điều hướng tác vụ nặng sang worker.",
    roleSummaryEn:
      "The central engine of the backend architecture, handling all redirect traffic, coordinating authentication, and offloading heavy tasks asynchronously.",
    myWorkVi: [
      "Thiết kế kiến trúc Go dạng Clean Architecture với Dependency Injection, đảm bảo mã nguồn gọn gàng và dễ mở rộng.",
      "Xây dựng chuỗi Middleware hoàn chỉnh: Xác thực người dùng, kiểm tra quyền tổ chức, bảo vệ API Key, giới hạn tần suất (Rate Limiting) và ghi log truy vết.",
      "Tối ưu hóa luồng phân giải short-link kết hợp định vị địa lý cục bộ đạt tốc độ phản hồi chuyển hướng cực nhanh (<10ms).",
      "Triển khai thuật toán 3-Tier Conversion Attribution xác định chính xác nguồn gốc doanh thu và đơn hàng tiếp thị.",
      "Áp dụng nguyên lý xử lý bất đồng bộ (Zero-blocking): Trả kết quả chuyển hướng ngay lập tức và ném tác vụ ghi log sang hàng đợi nền.",
    ],
    myWorkEn: [
      "Architected Go Clean Architecture with Dependency Injection for modularity and high maintainability.",
      "Authored unified middleware pipeline: Token validation, tenant authorization, API Key gating, rate limiting, and structured logging.",
      "Optimized short-link resolution pipeline with in-memory GeoIP achieving sub-10ms redirect response times.",
      "Engineered 3-Tier Conversion Attribution linking revenue and e-commerce conversions directly to original touchpoints.",
      "Implemented zero-blocking async hand-off: Committing instant redirects while dispatching heavy logging to message queues.",
    ],
    businessImpactVi:
      "Mang lại trải nghiệm click mượt mà cho hàng triệu người dùng cuối, đảm bảo hệ thống không bị nghẽn trong các đợt cao điểm chiến dịch.",
    businessImpactEn:
      "Delivers instant redirect performance for millions of users while maintaining resilient throughput during peak campaign traffic.",
    screenshots: [
      {
        url: "/images/li2-attribution-funnel.png",
        badge: "3-Tier Attribution Funnel",
        captionVi: "Giao diện quy kết chuyển đổi & doanh thu đa điểm chạm — liên kết đơn hàng từ webhook về touchpoint gốc",
        captionEn: "Multi-touch attribution funnel linking conversion revenue directly to origin touchpoint links",
      },
      {
        url: "/images/li2-customer-insight.png",
        badge: "Visitor Touchpoint Journey",
        captionVi: "Bản đồ thời gian thực thể hiện toàn bộ các điểm chạm UTM và kênh tiếp thị trước khi chuyển đổi",
        captionEn: "Real-time timeline capturing all UTM touchpoints and campaign channels prior to final conversion",
      },
    ],
  },

  // 7. RBAC & Multi-Tenancy (Enforced in both Next.js and Go Backend)
  "rbac-engine": {
    id: "rbac-engine",
    nameVi: "RBAC & Multi-Tenancy",
    nameEn: "RBAC & Multi-Tenancy",
    categoryVi: "Tenant Authorization Engine",
    categoryEn: "Tenant Authorization Engine",
    techStack: ["Full-stack RBAC", "Scoped Permissions", "Tenant Isolation"],
    shortDescVi:
      "Hệ thống phân quyền đa tổ chức áp dụng xuyên suốt từ Next.js User Portal đến Go Backend: cô lập dữ liệu theo workspace, quản lý vai trò và phân cấp phạm vi quyền.",
    shortDescEn:
      "End-to-end multi-tenant authorization enforced across both Next.js User Portal and Go Backend: workspace isolation, hierarchical roles, and scoped permissions.",
    color: "#D97706",
    accentBg: "rgba(217, 119, 6, 0.08)",
    roleSummaryVi:
      "Hệ thống bảo vệ phân quyền toàn diện, được thực thi đồng bộ ở cả hai tầng: Tầng ứng dụng (Next.js route guards, action validation, UI gating) và Tầng Core API (Go middleware) để đảm bảo cô lập dữ liệu tuyệt đối giữa các tổ chức.",
    roleSummaryEn:
      "Comprehensive authorization layer enforced across both tiers: Application tier (Next.js route guards, server action checks, UI component gating) and API tier (Go middleware) for absolute workspace isolation.",
    myWorkVi: [
      "Thiết kế mô hình Phân Quyền Đa Tổ Chức (Multi-Tenant RBAC) áp dụng nhất quán trên cả User Portal (Next.js) và Core Backend (Go).",
      "Hỗ trợ cơ chế Scoped Roles: Người dùng có thể là 'Owner' ở tổ chức này nhưng là 'Member' có quyền hạn mức ở tổ chức khác.",
      "Kiểm soát quyền chặt chẽ trên Next.js: Route guards bảo vệ màn hình quản trị, Server Actions xác thực quyền trước khi thực hiện thay đổi, và tự động ẩn các nút thao tác ngoài thẩm quyền trên UI.",
      "Kiểm soát quyền trên Go Gateway: Middleware kiểm tra định danh tổ chức và quyền hạn tương ứng trước khi cho phép thực thi API.",
      "Thiết lập cơ chế phân cấp phạm vi: Quyền xem toàn tổ chức (Organization scope) so với quyền chỉ xem tài nguyên cá nhân tự tạo (Self scope).",
    ],
    myWorkEn: [
      "Designed unified Multi-Tenant RBAC architecture enforced coherently across both User Portal (Next.js) and Core Backend (Go).",
      "Implemented Scoped Roles: A user can be an 'Owner' in one workspace while holding restricted 'Member' rights in another.",
      "Enforced Next.js app permissions: Route guards protecting admin screens, server action validations, and role-based UI component visibility.",
      "Enforced Go API gateway permissions: Middleware validating organization context and required permission keys per route.",
      "Enforced hierarchical scope boundaries: Organization-wide administrative visibility versus self-created entity restrictions.",
    ],
    businessImpactVi:
      "Đáp ứng tiêu chuẩn bảo mật doanh nghiệp (Enterprise Security), loại bỏ hoàn toàn nguy cơ truy cập trái phép hoặc rò rỉ dữ liệu giữa các tổ chức.",
    businessImpactEn:
      "Meets enterprise security and compliance standards, preventing unauthorized access or data contamination between tenant workspaces.",
  },

  // 8. Plan & Quotas
  "plan-engine": {
    id: "plan-engine",
    nameVi: "Plan & Quota Engine",
    nameEn: "Plan & Quota Engine",
    categoryVi: "Subscription & Limits Engine",
    categoryEn: "Subscription & Limits Engine",
    techStack: ["Go Service", "Automated Cron", "Quota Enforcement"],
    shortDescVi:
      "Quản lý các cấp gói cước (Free, Pro, Enterprise), kiểm soát hạn mức lưu lượng, số lượng link, thời gian lưu trữ và tự động reset chu kỳ hàng tháng.",
    shortDescEn:
      "Subscription plan management (Free, Pro, Enterprise), enforcing monthly traffic quotas, link limits, and automated billing cycle resets.",
    color: "#E11D48",
    accentBg: "rgba(225, 29, 72, 0.08)",
    roleSummaryVi:
      "Bộ máy quản trị chính sách kinh doanh và hạn mức tài nguyên, bảo vệ hạ tầng khỏi việc bị khai thác quá mức và thúc đẩy nâng cấp gói dịch vụ.",
    roleSummaryEn:
      "The business policy and usage throttling engine, safeguarding infrastructure against overuse while driving subscription upgrades.",
    myWorkVi: [
      "Thiết kế cấu trúc quản lý gói dịch vụ linh hoạt, định nghĩa rõ ràng các hạn mức: lượt truy cập, số liên kết, thành viên và thời gian lưu trữ.",
      "Xây dựng dịch vụ kiểm duyệt hạn mức tự động: Chặn thao tác tạo tài nguyên trước khi người dùng vượt quá ngưỡng cho phép của gói cước.",
      "Triển khai cronjob tự động thiết lập lại hạn mức (Quota Reset) vào ngày đầu mỗi chu kỳ thanh toán hàng tháng.",
      "Liên kết gói dịch vụ với chính sách lưu trữ dữ liệu (Data Retention): Tự động dọn dẹp dữ liệu cũ tương ứng với thời hạn của từng gói.",
    ],
    myWorkEn: [
      "Designed flexible subscription plan schema governing traffic allowances, link caps, team seats, and data retention windows.",
      "Engineered automated quota enforcer services intercepting resource creation before tenants exceed plan limits.",
      "Implemented scheduled background cronjobs resetting monthly consumption quotas on the first day of each billing cycle.",
      "Linked subscription tiers to data retention lifecycle policies, automatically pruning expired telemetry.",
    ],
    businessImpactVi:
      "Hỗ trợ mô hình kinh doanh SaaS vững chắc, tạo động lực chuyển đổi từ gói dùng thử sang các gói trả phí doanh nghiệp.",
    businessImpactEn:
      "Powers sustainable SaaS monetization, creating frictionless conversion funnels from trial tiers to enterprise plans.",
    screenshots: [
      {
        url: "/images/li2-plan-quotas.png",
        badge: "Plan & Quota Management",
        captionVi: "Giao diện quản lý hạn mức tài nguyên, gói cước Free / Pro / Enterprise và chu kỳ reset tự động",
        captionEn: "Subscription tier management, quota tracking for Free/Pro/Enterprise, and monthly billing resets",
      },
    ],
  },

  // 9. Redis Broker & Cache
  "redis-broker": {
    id: "redis-broker",
    nameVi: "Redis Broker & Cache",
    nameEn: "Redis Broker & Cache",
    categoryVi: "In-Memory Message Broker",
    categoryEn: "In-Memory Message Broker",
    techStack: ["Redis", "Distributed Locks", "In-Memory Caching"],
    shortDescVi:
      "Hạ tầng hàng đợi trung chuyển cho Asynq, khóa phân tán chống trùng lặp chuyển đổi (Idempotency) và bộ nhớ đệm định danh thiết bị.",
    shortDescEn:
      "In-memory task broker for Asynq, distributed deduplication locks, and high-speed temporary device identity cache.",
    color: "#DC2626",
    accentBg: "rgba(220, 38, 38, 0.08)",
    roleSummaryVi:
      "Tầng đệm trung gian tốc độ cao giúp hấp thụ các đợt tăng đột biến lưu lượng (Traffic Spikes) và bảo vệ cơ sở dữ liệu chính khỏi bị quá tải.",
    roleSummaryEn:
      "The high-speed buffer layer absorbing sudden traffic surges and shielding relational databases from saturation.",
    myWorkVi: [
      "Cấu hình Redis làm message broker trung chuyển tác vụ giữa API Gateway và Background Worker.",
      "Triển khai khóa phân tán (Distributed Lock) với cơ chế tự động hết hạn, đảm bảo mỗi sự kiện đơn hàng/doanh thu chỉ được ghi nhận đúng một lần.",
      "Xây dựng bộ nhớ tạm khôi phục danh tính người dùng trong 24 giờ khi trình duyệt chặn cookie theo dõi.",
      "Ứng dụng bộ đếm trong bộ nhớ để cung cấp số liệu click và lượt truy cập theo thời gian thực (Real-time Analytics).",
    ],
    myWorkEn: [
      "Configured Redis as the high-throughput task broker connecting API gateways with background consumers.",
      "Implemented distributed locks with automated TTL, guaranteeing conversion webhooks are processed strictly once.",
      "Engineered 24-hour device identity cache resolving visitor journeys when third-party cookies are blocked.",
      "Utilized in-memory atomic counters powering instant, real-time live click stats on customer dashboards.",
    ],
    businessImpactVi:
      "Đảm bảo số liệu doanh thu quy kết luôn chính xác 100%, không bị tính trùng lặp khi đối tác gửi lại thông báo nhiều lần.",
    businessImpactEn:
      "Guarantees accurate attribution revenue by eliminating duplicate conversion recordings during network webhook retries.",
  },

  // 10. Background Worker
  "worker-tasks": {
    id: "worker-tasks",
    nameVi: "Background Worker (li2-worker)",
    nameEn: "Background Worker (li2-worker)",
    categoryVi: "Asynchronous Worker Engine",
    categoryEn: "Asynchronous Worker Engine",
    techStack: ["Go", "Asynq", "Weighted Queues", "Cron Scheduler"],
    shortDescVi:
      "Worker bất đồng bộ xử lý các hàng đợi có phân cấp trọng số, thuật toán nhận diện Rage Click, cronjob bảo trì hệ thống và cảnh báo lỗi tức thì.",
    shortDescEn:
      "Asynchronous worker running weighted queues, sliding-window rage click detection, automated system maintenance, and real-time alerts.",
    color: "#4338CA",
    accentBg: "rgba(67, 56, 202, 0.08)",
    roleSummaryVi:
      "Cỗ máy xử lý ngầm toàn bộ các tác vụ tính toán nặng, tổng hợp báo cáo và bảo trì định kỳ, tách biệt hoàn toàn khỏi đường truyền của người dùng.",
    roleSummaryEn:
      "The background computation workhorse processing heavy analytics, report aggregations, and automated system maintenance out-of-band.",
    myWorkVi: [
      "Xây dựng hệ thống hàng đợi phân cấp theo trọng số ưu tiên: Tác vụ quy kết và thanh toán được ưu tiên xử lý trước telemetry thông thường.",
      "Thiết kế thuật toán nhận diện hành vi ức chế (Rage Click Detection): Sử dụng cơ chế cửa sổ trượt (Sliding Window) để phát hiện thao tác nhấp chuột liên tục bất thường.",
      "Triển khai cronjob tự động bảo trì cơ sở dữ liệu: Tự động khởi tạo trước các bảng phân vùng dữ liệu cho các tháng tiếp theo.",
      "Tích hợp bot cảnh báo thời gian thực: Tự động đẩy thông báo lỗi kỹ thuật và sự kiện quan trọng trực tiếp vào kênh chat vận hành.",
      "Xây dựng pipeline tổng hợp dữ liệu phễu chuyển đổi và báo cáo hiệu suất chạy nền.",
    ],
    myWorkEn: [
      "Engineered multi-tier weighted priority queues: Prioritizing attribution and billing webhooks over bulk click telemetry.",
      "Designed algorithmic Rage Click Detection using temporal sliding windows to flag user frustration and broken UI elements.",
      "Implemented automated database maintenance cronjobs pre-generating monthly partition tables.",
      "Integrated operational alert bot streaming critical system exceptions directly to engineering channels.",
      "Built background batch pipelines calculating conversion funnel rollups and periodic performance digests.",
    ],
    businessImpactVi:
      "Giúp hệ thống vận hành ổn định 24/7 mà không cần can thiệp thủ công, đồng thời cung cấp góc nhìn sâu sắc về các điểm nghẽn trải nghiệm người dùng.",
    businessImpactEn:
      "Keeps the platform running autonomously 24/7 with zero manual maintenance while uncovering critical product UX roadblocks.",
  },

  // 11. Database & Storage
  "db-storage": {
    id: "db-storage",
    nameVi: "Database & Object Storage",
    nameEn: "Database & Object Storage",
    categoryVi: "Scalable Data & Blob Storage",
    categoryEn: "Scalable Data & Blob Storage",
    techStack: ["PostgreSQL", "Table Partitioning", "S3 / Cloudflare R2"],
    shortDescVi:
      "Cơ sở dữ liệu phân vùng theo tháng cho dữ liệu tải lớn, hỗ trợ truy vấn trực tiếp từ Next.js User Portal, chính sách tự động xóa dữ liệu cũ và lưu trữ video replay.",
    shortDescEn:
      "Monthly partitioned relational database queried directly by Next.js User Portal (SSR) and Go core, with automated retention pruning and video replay blob storage.",
    color: "#15803D",
    accentBg: "rgba(21, 128, 61, 0.08)",
    roleSummaryVi:
      "Tầng lưu trữ dữ liệu cốt lõi, được tối ưu hóa cho bài toán dữ liệu lớn với hàng chục triệu bản ghi tương tác. Phục vụ truy vấn trực tiếp từ Next.js Server Components cho báo cáo người dùng và Go Gateway cho tác vụ lõi.",
    roleSummaryEn:
      "The foundational data persistence layer, architected to scale smoothly across tens of millions of telemetry records and video payload chunks. Directly queried by Next.js Server Components for fast SSR analytics.",
    myWorkVi: [
      "Thiết kế cấu trúc Phân Vùng Bảng Theo Tháng (Monthly Table Partitioning) cho các bảng dữ liệu tương tác có dung lượng khổng lồ.",
      "Hỗ trợ kết nối trực tiếp từ Next.js backend (User Portal) để thực hiện Server-Side Rendering (SSR) nhanh chóng, không bị độ trễ proxy.",
      "Tận dụng cơ chế Partition Pruning giúp truy vấn phân tích chỉ quét đúng bảng con của tháng cần tìm, duy trì tốc độ phản hồi siêu nhanh dưới 5ms.",
      "Thiết lập chính sách dọn dẹp dữ liệu cũ (Data Retention) tự động: Xóa các bảng phân vùng hết hạn nhanh chóng mà không gây khóa cơ sở dữ liệu.",
      "Xây dựng cơ chế tải trực tiếp các đoạn video ghi hình phiên (Session Chunks) lên bộ lưu trữ đám mây S3/R2 bằng Presigned URL.",
    ],
    myWorkEn: [
      "Architected Monthly Range Partitioning for heavy interaction tables handling multi-million record telemetry streams.",
      "Enabled direct querying from Next.js backend (User Portal) for fast Server-Side Rendering (SSR) without intermediary proxy hops.",
      "Leveraged Partition Pruning ensuring analytical queries scan only relevant monthly sub-tables, maintaining sub-5ms response times.",
      "Configured automated data retention pruning: Dropping expired partitions instantaneously without triggering table locking.",
      "Engineered direct-to-cloud session recording storage streaming video chunks to S3/R2 via presigned URLs.",
    ],
    businessImpactVi:
      "Giải quyết triệt để vấn đề phình to dữ liệu (Database Bloat), duy trì tốc độ truy vấn ổn định và tối ưu chi phí lưu trữ đám mây.",
    businessImpactEn:
      "Solves long-term database bloat, keeping query latencies lightning-fast while optimizing cloud storage expenditures.",
  },
};

export default function Li2ArchitecturePage() {
  const [lang, setLang] = useState<"vi" | "en">("en");
  const [dark, setDark] = useState(true);
  const [selectedBlockId, setSelectedBlockId] = useState<SystemBlockId | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
    caption: string;
  } | null>(null);

  // Close modal or lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (selectedBlockId) {
          setSelectedBlockId(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, selectedBlockId]);

  // Zoom & Pan interactive states (mặc định zoom 85%)
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const boardRef = useRef<HTMLDivElement>(null);

  // Sync theme & language with localStorage and global events
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light") {
      setDark(false);
    } else if (savedTheme === "dark") {
      setDark(true);
    }

    const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (savedLang === "en" || savedLang === "vi") {
      setLang(savedLang);
    }

    const handleThemeEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail === "light") setDark(false);
      else if (customEvent.detail === "dark") setDark(true);
    };

    const handleLangEvent = (e: Event) => {
      const customEvent = e as CustomEvent<"vi" | "en">;
      if (customEvent.detail === "en" || customEvent.detail === "vi") {
        setLang(customEvent.detail);
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

  function handleSetLang(newLang: "vi" | "en") {
    setLang(newLang);
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    window.dispatchEvent(new CustomEvent(LANG_CHANGE_EVENT, { detail: newLang }));
  }

  // Zoom helpers
  const handleZoomIn = () => setZoom((z) => Math.min(Number((z + 0.15).toFixed(2)), 2.2));
  const handleZoomOut = () => setZoom((z) => Math.max(Number((z - 0.15).toFixed(2)), 0.65));
  const handleResetZoom = () => {
    setZoom(0.85);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag when left click and not clicking on interactive SVG node
    if ((e.target as HTMLElement).closest(".cursor-pointer")) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const activeBlock = selectedBlockId ? SYSTEM_BLOCKS[selectedBlockId] : null;

  return (
    <div
      id="pdt-root"
      data-theme={dark ? "dark" : "light"}
      className="bg-bg text-text font-sans min-h-screen transition-colors duration-300 relative selection:bg-accent/20 selection:text-accent"
    >
      {/* Background blueprint subtle grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `radial-gradient(var(--line) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-8 py-3.5">
          <div className="flex items-center gap-3">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-muted hover:text-text font-mono text-xs px-3 py-1.5 rounded-full border border-line bg-surface hover:bg-bg2 transition-all no-underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "vi" ? "Về Portfolio" : "Back to Portfolio"}</span>
            </Link>

            <span className="hidden sm:inline-block text-muted/40 font-mono text-xs">/</span>

            <div className="hidden sm:flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase text-accent tracking-wider">
                Li2.ai
              </span>
              <span className="text-muted text-xs">•</span>
              <span className="text-muted text-xs">
                {lang === "vi" ? "Kiến Trúc Kỹ Thuật" : "Architecture Showcase"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Lang switch */}
            <div className="flex items-center border border-line rounded-full overflow-hidden bg-surface">
              <button
                onClick={() => handleSetLang("vi")}
                className={`font-mono text-xs px-2.5 py-1 border-none cursor-pointer transition-colors ${
                  lang === "vi" ? "bg-text text-invert font-bold" : "text-muted hover:text-text"
                }`}
              >
                VI
              </button>
              <button
                onClick={() => handleSetLang("en")}
                className={`font-mono text-xs px-2.5 py-1 border-none cursor-pointer transition-colors ${
                  lang === "en" ? "bg-text text-invert font-bold" : "text-muted hover:text-text"
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full border border-line bg-surface text-text cursor-pointer flex items-center justify-center text-sm hover:scale-105 transition-all"
              aria-label="Toggle theme"
            >
              {dark ? "☀" : "☾"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-12 relative z-10 space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-semibold tracking-wider uppercase">
            <Radio className="w-3.5 h-3.5 animate-pulse text-accent" />
            <span>
              {lang === "vi"
                ? "Tổng Quan Kiến Trúc Hệ Thống"
                : "System Architecture & Engineering Overview"}
            </span>
          </div>

          <h1 className="font-serif text-[clamp(28px,4.5vw,46px)] leading-[1.1] font-normal tracking-tight m-0 text-text">
            {lang === "vi"
              ? "Hệ Thống Li2.ai — Những Gì Tôi Đã Xây Dựng"
              : "Li2.ai Architecture — Engineering Showcase"}
          </h1>

          <p className="text-muted text-[15.5px] sm:text-[17px] leading-relaxed max-w-3xl m-0">
            {lang === "vi"
              ? "Bản đồ các khối kiến trúc chính: từ User Portal Full-stack Next.js kết nối trực tiếp database (SSR), phân quyền RBAC đa tầng, xác thực Casdoor SSO, đến Go API Gateway siêu tốc và cơ sở dữ liệu phân vùng theo tháng."
              : "High-level map of Li2.ai system architecture: full-stack Next.js User Portal with direct DB SSR, multi-layer RBAC, Casdoor SSO, low-latency Go gateway, and monthly partitioned database storage."}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11.5px] text-muted">
            <span className="text-accent font-semibold">
              {lang === "vi" ? "Vai trò kỹ thuật:" : "Engineering Role:"}
            </span>
            <span className="text-text font-semibold">Phạm Đức Trung</span>
            <span>•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface border border-line">Full-stack Next.js</span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface border border-line">Go / Gin Gateway</span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface border border-line">Multi-Tenant RBAC</span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface border border-line">Redis / Asynq</span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface border border-line">Casdoor SSO</span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface border border-line">PostgreSQL Partitioned</span>
          </div>
        </div>

        {/* Core Product Capabilities Section */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-line pb-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 font-mono text-xs px-2.5 py-0.5 rounded-full border border-line bg-surface text-muted uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-accent" />
                <span>{lang === "vi" ? "Chức Năng Cốt Lõi" : "Core Platform Capabilities"}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal m-0 text-text">
                {lang === "vi"
                  ? "Nền Tảng Quản Lý Liên Kết & Phân Tích Hành Vi Chuyên Sâu"
                  : "Enterprise Link Infrastructure & Behavioral Intelligence"}
              </h2>
            </div>
            <p className="text-muted text-xs font-mono max-w-md m-0 leading-relaxed sm:text-right">
              {lang === "vi"
                ? "Kết hợp hạ tầng điều hướng siêu tốc, gắn thẻ không cần code và quy kết chuyển đổi đa kênh."
                : "Combining sub-10ms routing, zero-code tracking overlays, and multi-touch revenue attribution."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* 1. Smart Link & Dynamic QR */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-line hover:border-accent/40 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    Traffic Orchestration
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-normal text-text m-0 group-hover:text-accent transition-colors">
                    {lang === "vi" ? "Rút Gọn & Điều Hướng Thông Minh" : "Smart Link & Dynamic QR Engine"}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mt-1.5 m-0">
                    {lang === "vi"
                      ? "Điều phối lưu lượng truy cập tốc độ cao (<10ms) với tên miền riêng (Branded Custom Domain), cá nhân hóa hành trình theo thiết bị và định vị địa lý."
                      : "Ultra-fast (<10ms) routing with custom branded domains, personalized visitor journeys, and dynamic QR management."}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-line/60 font-sans text-xs text-text">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Rút gọn link siêu tốc kết hợp Branded Custom Domain tăng độ tin cậy và CTR"
                      : "Sub-10ms short links with branded custom domains boosting brand trust & CTR"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Smart Targeting: Phân nhánh URL theo hệ điều hành (iOS/Android) & Vị trí GeoIP"
                      : "Smart Targeting: Dynamic routing branches by device OS & GeoIP country/region"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Mã QR động tùy biến màu sắc, logo thương hiệu và cập nhật URL đích tức thì"
                      : "Dynamic QR codes with custom styling, logos, and instantaneous URL redirects"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "A/B Testing phân phối trang đích & mật khẩu bảo vệ liên kết nhạy cảm"
                      : "Destination A/B testing & password protection for sensitive or internal links"}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Visual Event Tagger */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-line hover:border-accent/40 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <Scan className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Zero-Code Tracking
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-normal text-text m-0 group-hover:text-accent transition-colors">
                    {lang === "vi" ? "In-Browser Visual Event Tagger" : "In-Browser Visual Event Tagger"}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mt-1.5 m-0">
                    {lang === "vi"
                      ? "Nhúng thanh Toolbar nổi trực tiếp trên website khách hàng qua URL token an toàn, cho phép marketer tự gắn thẻ đo lường chỉ với thao tác click."
                      : "Secure in-browser floating overlay activated via URL token, empowering marketing teams to tag tracking rules visually without code."}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-line/60 font-sans text-xs text-text">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Kích hoạt an toàn qua URL token (?li2_tagger=true) được mã hóa theo phiên"
                      : "Secure activation via encrypted session URL token (?li2_tagger=true)"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Tự động vẽ bounding box & tooltip định danh phần tử DOM khi rê chuột"
                      : "Real-time DOM element hover highlight with selector tooltips & class hierarchy"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Gắn thẻ sự kiện Click, Điền form (Form Fill), Submit và Visibility trong 1 chạm"
                      : "Single-click rule creation for Click, Form Fill/Submit, and Element Visibility"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Đồng bộ tức thì với Go API Gateway mà không cần chỉnh sửa mã nguồn trang web"
                      : "Instant rule synchronization with Go API Gateway without codebase modifications"}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Behavior Analytics & Session Replay */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-line hover:border-accent/40 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    UX & Telemetry
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-normal text-text m-0 group-hover:text-accent transition-colors">
                    {lang === "vi" ? "Phân Tích Hành Vi & Session Replay" : "Behavior Analytics & Session Replay"}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mt-1.5 m-0">
                    {lang === "vi"
                      ? "Thấu hiểu trọn vẹn trải nghiệm người dùng từ bản đồ nhiệt tương tác (Heatmap) đến video tua lại từng thao tác chuột (Session Replay)."
                      : "Holistic visibility into visitor interactions from click density heatmaps to full video session replays."}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-line/60 font-sans text-xs text-text">
                <div className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Bản đồ nhiệt Click Map & Scroll Depth phủ trực quan trên layout website"
                      : "Live Click Map & Scroll Depth heatmaps rendered directly over host websites"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Trình phát Session Replay tái hiện chính xác thao tác chuột và lỗi giao diện"
                      : "High-fidelity Session Replay reconstructing cursor vectors and UI friction points"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Rage Click Detection: Nhận diện thao tác ức chế bằng thuật toán Sliding Window"
                      : "Algorithmic Rage Click Detection flagging user frustration via sliding windows"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Báo cáo chuyển đổi phễu (Funnel drop-off) tối ưu hóa tỷ lệ hoàn tất đơn hàng"
                      : "Visual funnel progression analytics pinpointing user drop-offs and checkout bottlenecks"}
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Multi-Touch Conversion Attribution */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-line hover:border-accent/40 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    Revenue Attribution
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-normal text-text m-0 group-hover:text-accent transition-colors">
                    {lang === "vi" ? "Quy Kết Chuyển Đổi & Doanh Thu" : "Multi-Touch Conversion Attribution"}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mt-1.5 m-0">
                    {lang === "vi"
                      ? "Đo lường chính xác hiệu quả từng đồng ngân sách marketing bằng thuật toán 3-Tier Attribution và nhận diện danh tính thiết bị 2 tầng."
                      : "Accurate marketing ROI measurement powered by 3-Tier Attribution models and 2-Tier persistent device identity."}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-line/60 font-sans text-xs text-text">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "2-Tier Composite Fingerprint: Nhận diện khách dù xóa cookie hay Safari ITP chặn"
                      : "2-Tier Composite Fingerprint resolving identity across cookie purges and Safari ITP"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Thuật toán 3-Tier: Liên kết doanh thu webhook (Shopify, Stripe) về touchpoint gốc"
                      : "3-Tier Attribution: Linking e-commerce webhooks to original marketing touchpoints"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Customer Journey Timeline: Trực quan hóa mọi điểm chạm trước khi mua hàng"
                      : "Customer Journey Timeline mapping all touches before conversion"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">•</span>
                  <span>
                    {lang === "vi"
                      ? "Bộ đệm Redis & khóa phân tán chống trùng lặp doanh thu tuyệt đối (Idempotency)"
                      : "Redis distributed locks eliminating duplicate conversion webhook records (Idempotency)"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Level System Architecture Diagram (Interactive Zoom & Pan SVG Board) */}
        <section className="bg-surface border border-line rounded-3xl p-4 sm:p-6 shadow-[0_30px_70px_-30px_var(--shadow)] relative overflow-hidden">
          {/* Header & Controls Bar */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3 border-b border-line pb-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted mb-1">
                {lang === "vi" ? "Sơ Đồ Kết Nối Các Khối" : "Interactive Topology Map"}
              </div>
              <h2 className="font-serif text-2xl font-normal m-0 text-text">
                {lang === "vi" ? "Các Khối Hệ Thống & Luồng Dữ Liệu" : "System Blocks & Data Flow"}
              </h2>
            </div>

            {/* Interactive Zoom & Reset Controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-line rounded-xl bg-bg2 p-1 gap-1 text-muted">
                <button
                  onClick={handleZoomIn}
                  title={lang === "vi" ? "Phóng to" : "Zoom in"}
                  className="w-7 h-7 rounded-lg hover:bg-surface hover:text-text cursor-pointer flex items-center justify-center transition-colors border-none"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleZoomOut}
                  title={lang === "vi" ? "Thu nhỏ" : "Zoom out"}
                  className="w-7 h-7 rounded-lg hover:bg-surface hover:text-text cursor-pointer flex items-center justify-center transition-colors border-none"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleResetZoom}
                  title={lang === "vi" ? "Khôi phục góc nhìn" : "Reset view"}
                  className="w-7 h-7 rounded-lg hover:bg-surface hover:text-text cursor-pointer flex items-center justify-center transition-colors border-none"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-[11px] px-2 font-semibold text-text select-none">
                  {Math.round(zoom * 100)}%
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-muted bg-bg2 px-3 py-1.5 rounded-xl border border-line">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>
                  {lang === "vi" ? "Nhấp khối để xem chi tiết" : "Click block for specs"}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Canvas Viewport */}
          <div
            ref={boardRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`w-full overflow-hidden rounded-2xl bg-bg2/40 border border-line/60 select-none relative ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ height: "660px" }}
          >
            {/* Visual subtle coordinate helper */}
            <div className="absolute bottom-3 right-3 font-mono text-[10px] text-muted/60 pointer-events-none z-10 flex items-center gap-1.5">
              <Move className="w-3 h-3" />
              <span>{lang === "vi" ? "Kéo chuột để di chuyển • Nhấp khối để xem chi tiết" : "Drag to pan • Click block to inspect"}</span>
            </div>

            {/* Transformable Canvas Group */}
            <div
              className="w-full h-full flex items-center justify-center origin-center"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transition: isDragging ? "none" : "transform 0.15s ease-out",
              }}
            >
              <svg
                viewBox="0 0 1200 780"
                className="w-[1160px] h-[750px] shrink-0"
                style={{ overflow: "visible" }}
              >
                <defs>
                  {/* Arrow markers */}
                  <marker
                    id="arrow-accent"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <polygon points="0 1, 8 4, 0 7" fill="var(--accent)" />
                  </marker>
                  <marker
                    id="arrow-muted"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <polygon points="0 1, 8 4, 0 7" fill="var(--muted)" />
                  </marker>
                  <marker
                    id="arrow-blue"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <polygon points="0 1, 8 4, 0 7" fill="#2563EB" />
                  </marker>
                  <marker
                    id="arrow-orange"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <polygon points="0 1, 8 4, 0 7" fill="#EA580C" />
                  </marker>
                </defs>

                {/* ================= CONNECTION PATHS (GENEROUS SPACING, ZERO OVERLAP) ================= */}

                {/* 1. Client SDK -> Edge Gateway (Clean vertical) */}
                <path
                  d="M 130 135 L 130 220"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                  markerEnd="url(#arrow-accent)"
                />
                <text x="140" y="180" textAnchor="start" className="text-[10px] font-mono fill-muted">
                  {lang === "vi" ? "Thu thập Telemetry" : "Telemetry Ingest"}
                </text>

                {/* 2. Edge Gateway -> Core Backend (Clean horizontal) */}
                <path
                  d="M 235 265 L 450 265"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  fill="none"
                  markerEnd="url(#arrow-accent)"
                />
                <text x="340" y="255" textAnchor="middle" className="text-[10.5px] font-mono fill-muted">
                  {lang === "vi" ? "Lưu lượng đã lọc" : "Filtered Traffic"}
                </text>

                {/* 3. User Portal -> Core Backend */}
                <path
                  d="M 460 135 L 510 220"
                  stroke="var(--line)"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#arrow-muted)"
                />

                {/* 4. Admin Portal -> Core Backend */}
                <path
                  d="M 700 135 L 630 220"
                  stroke="var(--line)"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#arrow-muted)"
                />

                {/* 5. User Portal -> DIRECT DATABASE ACCESS (Next.js SSR Backend) */}
                <path
                  d="M 350 135 C 350 320, 350 510, 420 620"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeDasharray="6 3"
                  fill="none"
                  markerEnd="url(#arrow-blue)"
                />
                <text x="335" y="380" textAnchor="middle" className="text-[10.5px] font-mono font-bold fill-[#2563EB]">
                  {lang === "vi" ? "Next.js SSR kết nối DB trực tiếp" : "Next.js SSR Direct DB"}
                </text>

                {/* 6. User Portal -> RBAC Engine (Next.js Role-based UI & Actions) */}
                <path
                  d="M 530 85 C 720 85, 820 150, 890 220"
                  stroke="#D97706"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                  markerEnd="url(#arrow-muted)"
                />
                <text x="730" y="120" textAnchor="middle" className="text-[10px] font-mono font-medium fill-[#D97706]">
                  {lang === "vi" ? "Phân quyền Next.js Route & Action" : "Next.js Route & Action RBAC"}
                </text>

                {/* 7. Casdoor Auth -> User Portal & Admin Portal & Core Backend */}
                <path
                  d="M 960 70 L 810 70"
                  stroke="#EA580C"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  fill="none"
                  markerEnd="url(#arrow-orange)"
                />
                <path
                  d="M 960 55 L 540 55"
                  stroke="#EA580C"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  fill="none"
                  markerEnd="url(#arrow-orange)"
                />
                <path
                  d="M 1030 115 C 1030 160, 850 180, 680 235"
                  stroke="#EA580C"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  fill="none"
                  markerEnd="url(#arrow-orange)"
                />
                <text x="890" y="45" textAnchor="middle" className="text-[10px] font-mono font-semibold fill-[#EA580C]">
                  {lang === "vi" ? "Casdoor SSO & Xác thực JWT" : "Casdoor SSO & JWT Verify"}
                </text>

                {/* 8. Core Backend -> RBAC Engine */}
                <path
                  d="M 680 265 L 860 265"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrow-accent)"
                />
                <text x="770" y="255" textAnchor="middle" className="text-[10px] font-mono fill-muted">
                  {lang === "vi" ? "Bảo vệ quyền API" : "API Scoped Guards"}
                </text>

                {/* 9. Core Backend -> Plan Engine */}
                <path
                  d="M 470 315 L 210 420"
                  stroke="var(--line)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrow-muted)"
                />
                <text x="310" y="380" textAnchor="middle" className="text-[10px] font-mono fill-muted">
                  {lang === "vi" ? "Kiểm duyệt hạn mức" : "Quota Gating"}
                </text>

                {/* 10. Core Backend -> Redis Broker */}
                <path
                  d="M 565 315 L 565 420"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  fill="none"
                  markerEnd="url(#arrow-accent)"
                />
                <text x="575" y="375" textAnchor="start" className="text-[10px] font-mono fill-muted">
                  {lang === "vi" ? "Gửi tác vụ & Khóa phân tán" : "Task Dispatch & Lock"}
                </text>

                {/* 11. Redis Broker -> Background Worker */}
                <path
                  d="M 670 470 L 860 470"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  fill="none"
                  markerEnd="url(#arrow-accent)"
                />
                <text x="765" y="460" textAnchor="middle" className="text-[10px] font-mono fill-muted">
                  {lang === "vi" ? "Hàng đợi ưu tiên bất đồng bộ" : "Async Priority Queues"}
                </text>

                {/* 12. Background Worker -> Database Storage */}
                <path
                  d="M 910 515 L 780 620"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrow-accent)"
                />
                <text x="890" y="580" textAnchor="middle" className="text-[10px] font-mono fill-muted">
                  {lang === "vi" ? "Ghi lô & Bảo trì dữ liệu" : "Batch Insert & Maintenance"}
                </text>

                {/* 13. Core Backend -> Database Storage */}
                <path
                  d="M 565 315 L 565 620"
                  stroke="var(--line)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                  markerEnd="url(#arrow-muted)"
                />
                <text x="575" y="560" textAnchor="start" className="text-[10px] font-mono fill-muted">
                  {lang === "vi" ? "Truy vấn SQL nòng cốt" : "Core SQL Queries"}
                </text>

                {/* ================= TIER 1: CLIENTS & CASDOOR SSO (TOP ROW) ================= */}

                {/* 1. Client SDK */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("client-sdk")}>
                  <rect
                    x="25"
                    y="40"
                    width="210"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "client-sdk" ? "#0284C7" : "var(--line)"}
                    strokeWidth={selectedBlockId === "client-sdk" ? "3" : "1.5"}
                    className="transition-all hover:stroke-[#0284C7] filter drop-shadow-sm"
                  />
                  <rect x="40" y="55" width="26" height="26" rx="8" fill="rgba(2, 132, 199, 0.15)" />
                  <text x="53" y="73" textAnchor="middle" fill="#0284C7" className="text-sm font-bold">
                    ⊞
                  </text>
                  <text x="75" y="65" className="text-[13px] font-bold fill-text">
                    Client Analytics SDK
                  </text>
                  <text x="75" y="78" className="text-[10.5px] font-mono fill-muted">
                    JavaScript / Telemetry
                  </text>
                  <text x="40" y="105" className="text-[10px] fill-muted">
                    {lang === "vi" ? "Thu thập sự kiện • Ghi hình phiên" : "Event Capture • Session Recording"}
                  </text>
                  <text x="40" y="122" className="text-[9.5px] font-mono font-semibold fill-[#0284C7]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* 2. User Portal (Full-stack Next.js) */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("portal-user")}>
                  <rect
                    x="320"
                    y="40"
                    width="220"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "portal-user" ? "#2563EB" : "#2563EB"}
                    strokeWidth={selectedBlockId === "portal-user" ? "3" : "2"}
                    className="transition-all hover:stroke-[#2563EB] filter drop-shadow-sm"
                  />
                  <rect x="335" y="55" width="26" height="26" rx="8" fill="rgba(37, 99, 235, 0.15)" />
                  <text x="348" y="73" textAnchor="middle" fill="#2563EB" className="text-sm font-bold">
                    ⊡
                  </text>
                  <text x="370" y="65" className="text-[13px] font-bold fill-text">
                    User Portal (Next.js)
                  </text>
                  <text x="370" y="78" className="text-[10.5px] font-mono font-semibold fill-[#2563EB]">
                    Full-stack • Direct DB • RBAC
                  </text>
                  <text x="335" y="105" className="text-[10px] fill-muted">
                    {lang === "vi" ? "Phân tích SSR • Trực quan hóa phễu • Replay" : "SSR Analytics • Visual Funnels • Replay"}
                  </text>
                  <text x="335" y="122" className="text-[9.5px] font-mono font-bold fill-[#2563EB]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* 3. Admin Portal */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("portal-admin")}>
                  <rect
                    x="590"
                    y="40"
                    width="220"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "portal-admin" ? "#7C3AED" : "var(--line)"}
                    strokeWidth={selectedBlockId === "portal-admin" ? "3" : "1.5"}
                    className="transition-all hover:stroke-[#7C3AED] filter drop-shadow-sm"
                  />
                  <rect x="605" y="55" width="26" height="26" rx="8" fill="rgba(124, 58, 237, 0.15)" />
                  <text x="618" y="73" textAnchor="middle" fill="#7C3AED" className="text-sm font-bold">
                    🛡
                  </text>
                  <text x="640" y="65" className="text-[13px] font-bold fill-text">
                    Admin Portal
                  </text>
                  <text x="640" y="78" className="text-[10.5px] font-mono fill-muted">
                    {lang === "vi" ? "React / Bảng điều khiển quản trị" : "React / Operations Console"}
                  </text>
                  <text x="605" y="105" className="text-[10px] fill-muted">
                    {lang === "vi" ? "Quản trị tổ chức • Đo lường hệ thống" : "Tenant Control • System Metrics"}
                  </text>
                  <text x="605" y="122" className="text-[9.5px] font-mono font-semibold fill-[#7C3AED]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* 4. Casdoor Auth (SSO - POSITIONED ELEVATED ON TOP RIGHT) */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("casdoor-auth")}>
                  <rect
                    x="960"
                    y="25"
                    width="215"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "casdoor-auth" ? "#EA580C" : "var(--line)"}
                    strokeWidth={selectedBlockId === "casdoor-auth" ? "3" : "2"}
                    className="transition-all hover:stroke-[#EA580C] filter drop-shadow-sm"
                  />
                  <rect x="975" y="40" width="26" height="26" rx="8" fill="rgba(234, 88, 12, 0.15)" />
                  <text x="988" y="58" textAnchor="middle" fill="#EA580C" className="text-sm font-bold">
                    🔑
                  </text>
                  <text x="1010" y="50" className="text-[13px] font-bold fill-text">
                    Casdoor Auth (SSO)
                  </text>
                  <text x="1010" y="63" className="text-[10.5px] font-mono font-semibold fill-[#EA580C]">
                    {lang === "vi" ? "OIDC • Định danh tập trung" : "OIDC • Central Identity"}
                  </text>
                  <text x="975" y="90" className="text-[10px] fill-muted">
                    {lang === "vi" ? "Đăng nhập một lần • Phiên JWT" : "Single Sign-On • JWT Sessions"}
                  </text>
                  <text x="975" y="107" className="text-[9.5px] font-mono font-bold fill-[#EA580C]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* ================= TIER 2: EDGE, CORE & RBAC ================= */}

                {/* 5. Edge & Bot Filter */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("edge-gateway")}>
                  <rect
                    x="25"
                    y="220"
                    width="210"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "edge-gateway" ? "#059669" : "var(--line)"}
                    strokeWidth={selectedBlockId === "edge-gateway" ? "3" : "1.5"}
                    className="transition-all hover:stroke-[#059669] filter drop-shadow-sm"
                  />
                  <rect x="40" y="235" width="26" height="26" rx="8" fill="rgba(5, 150, 105, 0.15)" />
                  <text x="53" y="253" textAnchor="middle" fill="#059669" className="text-sm font-bold">
                    ⚡
                  </text>
                  <text x="75" y="245" className="text-[13px] font-bold fill-text">
                    Edge & Bot Filter
                  </text>
                  <text x="75" y="258" className="text-[10.5px] font-mono fill-muted">
                    Cloudflare Edge Security
                  </text>
                  <text x="40" y="285" className="text-[10px] fill-muted">
                    {lang === "vi" ? "DNS toàn cầu • Chặn crawler & bot" : "Global DNS • Crawler Protection"}
                  </text>
                  <text x="40" y="302" className="text-[9.5px] font-mono font-semibold fill-[#059669]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* 6. Core Gateway (li2-be) - HIGHLIGHT */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("backend-core")}>
                  <rect
                    x="450"
                    y="215"
                    width="230"
                    height="105"
                    rx="18"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "backend-core" ? "#C2410C" : "#C2410C"}
                    strokeWidth={selectedBlockId === "backend-core" ? "3.5" : "2"}
                    className="transition-all filter drop-shadow-md"
                  />
                  <rect x="465" y="230" width="28" height="28" rx="8" fill="rgba(194, 65, 12, 0.2)" />
                  <text x="479" y="249" textAnchor="middle" fill="#C2410C" className="text-base font-bold">
                    ⚙
                  </text>
                  <text x="502" y="242" className="text-[14px] font-bold fill-text">
                    Core API Gateway
                  </text>
                  <text x="502" y="256" className="text-[10.5px] font-mono font-semibold fill-[#C2410C]">
                    {lang === "vi" ? "Go / Gin • Dịch vụ nòng cốt" : "Go / Gin • Central Services"}
                  </text>
                  <text x="465" y="285" className="text-[10.5px] fill-muted">
                    {lang === "vi" ? "Điều hướng <10ms • Quy kết doanh thu" : "Sub-10ms Routing • Attribution Engine"}
                  </text>
                  <text x="465" y="305" className="text-[10px] font-mono font-bold fill-[#C2410C]">
                    {lang === "vi" ? "★ TRUNG TÂM HỆ THỐNG ↗" : "★ CORE GATEWAY ↗"}
                  </text>
                </g>

                {/* 7. RBAC & Multi-Tenancy */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("rbac-engine")}>
                  <rect
                    x="860"
                    y="220"
                    width="230"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "rbac-engine" ? "#D97706" : "var(--line)"}
                    strokeWidth={selectedBlockId === "rbac-engine" ? "3" : "1.5"}
                    className="transition-all hover:stroke-[#D97706] filter drop-shadow-sm"
                  />
                  <rect x="875" y="235" width="26" height="26" rx="8" fill="rgba(217, 119, 6, 0.15)" />
                  <text x="888" y="253" textAnchor="middle" fill="#D97706" className="text-sm font-bold">
                    🔒
                  </text>
                  <text x="910" y="245" className="text-[13px] font-bold fill-text">
                    RBAC & Multi-Tenancy
                  </text>
                  <text x="910" y="258" className="text-[10.5px] font-mono fill-muted">
                    {lang === "vi" ? "Kiểm soát quyền Full-stack" : "Full-stack Access Control"}
                  </text>
                  <text x="875" y="285" className="text-[10px] fill-muted">
                    Next.js Guards • Go API Middleware
                  </text>
                  <text x="875" y="302" className="text-[9.5px] font-mono font-semibold fill-[#D97706]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* ================= TIER 3: PLANNING, BROKER & WORKER ================= */}

                {/* 8. Plan & Quota Engine */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("plan-engine")}>
                  <rect
                    x="25"
                    y="420"
                    width="210"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "plan-engine" ? "#E11D48" : "var(--line)"}
                    strokeWidth={selectedBlockId === "plan-engine" ? "3" : "1.5"}
                    className="transition-all hover:stroke-[#E11D48] filter drop-shadow-sm"
                  />
                  <rect x="40" y="435" width="26" height="26" rx="8" fill="rgba(225, 29, 72, 0.15)" />
                  <text x="53" y="453" textAnchor="middle" fill="#E11D48" className="text-sm font-bold">
                    📊
                  </text>
                  <text x="75" y="445" className="text-[13px] font-bold fill-text">
                    Plan & Quotas
                  </text>
                  <text x="75" y="458" className="text-[10.5px] font-mono fill-muted">
                    {lang === "vi" ? "Hạn mức gói đăng ký" : "Subscription Limits"}
                  </text>
                  <text x="40" y="485" className="text-[10px] fill-muted">
                    Free / Pro / Enterprise Tiers
                  </text>
                  <text x="40" y="502" className="text-[9.5px] font-mono font-semibold fill-[#E11D48]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* 9. Redis Broker & Cache */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("redis-broker")}>
                  <rect
                    x="460"
                    y="420"
                    width="210"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "redis-broker" ? "#DC2626" : "var(--line)"}
                    strokeWidth={selectedBlockId === "redis-broker" ? "3" : "1.5"}
                    className="transition-all hover:stroke-[#DC2626] filter drop-shadow-sm"
                  />
                  <rect x="475" y="435" width="26" height="26" rx="8" fill="rgba(220, 38, 38, 0.15)" />
                  <text x="488" y="453" textAnchor="middle" fill="#DC2626" className="text-sm font-bold">
                    ⚡
                  </text>
                  <text x="510" y="445" className="text-[13px] font-bold fill-text">
                    Redis Broker & Cache
                  </text>
                  <text x="510" y="458" className="text-[10.5px] font-mono fill-muted">
                    {lang === "vi" ? "Hàng đợi tác vụ trong bộ nhớ" : "In-Memory Task Broker"}
                  </text>
                  <text x="475" y="485" className="text-[10px] fill-muted">
                    {lang === "vi" ? "Khóa phân tán • Cache thiết bị" : "Distributed Locks • Identity Cache"}
                  </text>
                  <text x="475" y="502" className="text-[9.5px] font-mono font-semibold fill-[#DC2626]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* 10. Background Worker */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("worker-tasks")}>
                  <rect
                    x="860"
                    y="420"
                    width="230"
                    height="95"
                    rx="16"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "worker-tasks" ? "#4338CA" : "var(--line)"}
                    strokeWidth={selectedBlockId === "worker-tasks" ? "3" : "1.5"}
                    className="transition-all hover:stroke-[#4338CA] filter drop-shadow-sm"
                  />
                  <rect x="875" y="435" width="26" height="26" rx="8" fill="rgba(67, 56, 202, 0.15)" />
                  <text x="888" y="453" textAnchor="middle" fill="#4338CA" className="text-sm font-bold">
                    ⚙
                  </text>
                  <text x="910" y="445" className="text-[13px] font-bold fill-text">
                    Background Worker
                  </text>
                  <text x="910" y="458" className="text-[10.5px] font-mono fill-muted">
                    Go / Asynq Engine
                  </text>
                  <text x="875" y="485" className="text-[10px] fill-muted">
                    {lang === "vi" ? "Hàng đợi ưu tiên • Phát hiện Rage Click" : "Priority Queues • Rage Detection"}
                  </text>
                  <text x="875" y="502" className="text-[9.5px] font-mono font-semibold fill-[#4338CA]">
                    {lang === "vi" ? "CHI TIẾT ↗" : "DETAILS ↗"}
                  </text>
                </g>

                {/* ================= TIER 4: STORAGE ================= */}

                {/* 11. Database & Storage */}
                <g className="cursor-pointer group" onClick={() => setSelectedBlockId("db-storage")}>
                  <rect
                    x="370"
                    y="620"
                    width="440"
                    height="100"
                    rx="18"
                    fill="var(--surface)"
                    stroke={selectedBlockId === "db-storage" ? "#15803D" : "var(--line)"}
                    strokeWidth={selectedBlockId === "db-storage" ? "3" : "1.5"}
                    className="transition-all hover:stroke-[#15803D] filter drop-shadow-sm"
                  />
                  <rect x="388" y="635" width="28" height="28" rx="8" fill="rgba(21, 128, 61, 0.15)" />
                  <text x="402" y="654" textAnchor="middle" fill="#15803D" className="text-base font-bold">
                    🗄
                  </text>
                  <text x="428" y="647" className="text-[14px] font-bold fill-text">
                    Database & Object Storage
                  </text>
                  <text x="428" y="662" className="text-[11px] font-mono fill-muted">
                    PostgreSQL Partitioning • S3 / R2 Storage
                  </text>
                  <text x="388" y="692" className="text-[11px] fill-muted">
                    {lang === "vi"
                      ? "Next.js SSR trực tiếp • Phân vùng theo tháng • Chu kỳ lưu trữ"
                      : "Direct Next.js SSR Access • Monthly Partitioning • Retention Lifecycle"}
                  </text>
                  <text x="388" y="709" className="text-[10px] font-mono font-semibold fill-[#15803D]">
                    {lang === "vi" ? "NHẤP ĐỂ XEM CHI TIẾT ↗" : "CLICK TO INSPECT ↗"}
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </section>
      </main>

      {/* ================= RECRUITER-FOCUSED DETAIL POPUP / MODAL ================= */}
      <AnimatePresence>
        {activeBlock && (
          <div
            className="fixed inset-0 z-50 bg-[rgba(15,10,6,0.65)] backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedBlockId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg text-text w-full max-w-3xl max-h-[90vh] rounded-3xl border border-line shadow-2xl flex flex-col overflow-hidden my-auto"
            >
              {/* Modal Header */}
              <div
                className="p-5 sm:p-7 border-b border-line flex items-start justify-between gap-4"
                style={{ background: `linear-gradient(to right, ${activeBlock.accentBg}, transparent)` }}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider"
                      style={{ background: activeBlock.accentBg, color: activeBlock.color }}
                    >
                      {lang === "vi" ? activeBlock.categoryVi : activeBlock.categoryEn}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal m-0 text-text">
                    {lang === "vi" ? activeBlock.nameVi : activeBlock.nameEn}
                  </h3>

                  {/* Clean Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeBlock.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-2 py-0.5 rounded-md bg-surface border border-line text-text font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBlockId(null)}
                  className="w-9 h-9 rounded-full border border-line bg-surface hover:bg-bg2 text-muted hover:text-text cursor-pointer flex items-center justify-center shrink-0 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-[14.5px]">
                {/* Architectural Role Summary */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-line space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-muted">
                    <Layers className="w-4 h-4 text-muted" />
                    <span>
                      {lang === "vi" ? "Vai Trò Trong Kiến Trúc" : "Architectural Role & Purpose"}
                    </span>
                  </div>
                  <p className="text-text leading-relaxed m-0 text-[15px]">
                    {lang === "vi" ? activeBlock.roleSummaryVi : activeBlock.roleSummaryEn}
                  </p>
                </div>

                {/* What I Built (Những Gì Tôi Đã Làm) */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-accent">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>
                      {lang === "vi"
                        ? "Những Gì Tôi Đã Xây Dựng (Key Contributions)"
                        : "What I Engineered & Delivered"}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-line space-y-2.5">
                    {(lang === "vi" ? activeBlock.myWorkVi : activeBlock.myWorkEn).map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-text leading-relaxed">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business & System Impact */}
                <div className="p-4 sm:p-5 rounded-2xl bg-bg2 border border-line space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-accent2">
                    <Award className="w-4 h-4 text-accent2" />
                    <span>
                      {lang === "vi" ? "Giá Trị Kỹ Thuật Mang Lại" : "Engineering & Business Impact"}
                    </span>
                  </div>
                  <p className="text-text leading-relaxed m-0 text-[14px]">
                    {lang === "vi" ? activeBlock.businessImpactVi : activeBlock.businessImpactEn}
                  </p>
                </div>

                {/* Visual Tagger Overlay In-Action Mockup (for Client SDK) */}
                {activeBlock.id === "client-sdk" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-[#0284C7]">
                        <Scan className="w-4 h-4 text-[#0284C7]" />
                        <span>
                          {lang === "vi"
                            ? "Mô Phỏng Trực Quan: In-Browser Visual Tagger"
                            : "Interactive Simulation: In-Browser Visual Tagger"}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-muted px-2 py-0.5 rounded-full bg-surface border border-line">
                        ?li2_tagger=true
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-line space-y-3.5">
                      <p className="text-xs text-muted leading-relaxed m-0">
                        {lang === "vi"
                          ? "Khi mở website với token ?li2_tagger=true, SDK tự động mount Toolbar nổi. Người dùng di chuột qua bất kỳ phần tử nào để xem khung viền nhận diện (bounding box), selector DOM và nhấp vào để gắn thẻ sự kiện (Event Rule) trực tiếp."
                          : "When activated via ?li2_tagger=true, the SDK mounts an in-browser floating toolbar. Hovering over any element renders an automated bounding box with DOM selector tooltips for instant zero-code event tagging."}
                      </p>

                      {/* Mock browser window */}
                      <div className="rounded-xl border border-line bg-bg overflow-hidden shadow-inner">
                        <div className="px-3 py-2 bg-surface border-b border-line flex items-center justify-between text-[11px] font-mono text-muted">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block" />
                            <span className="ml-2 text-text">https://client-store.com/checkout</span>
                          </div>
                          <span className="text-[10px] text-accent font-semibold">Tagger Mode: Active</span>
                        </div>

                        <div className="p-6 relative bg-bg2/40 flex flex-col items-center justify-center gap-4">
                          {/* Target element being tagged */}
                          <div className="relative group/target cursor-pointer my-2">
                            {/* Tooltip badge */}
                            <div className="absolute -top-7 left-0 bg-[#0284C7] text-white font-mono text-[10px] px-2 py-0.5 rounded shadow-md whitespace-nowrap flex items-center gap-1">
                              <span>&lt;button&gt; &quot;Complete Purchase&quot; #btn-checkout</span>
                            </div>
                            {/* Highlight bounding box */}
                            <div className="px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm shadow-lg ring-4 ring-[#0284C7] ring-offset-2 ring-offset-bg transition-all flex items-center gap-2">
                              <MousePointerClick className="w-4 h-4 text-white animate-bounce" />
                              <span>Complete Purchase — $89.00</span>
                            </div>
                          </div>

                          {/* Floating toolbar pill */}
                          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-surface border border-line shadow-xl font-mono text-[11px] mt-2">
                            <span className="font-bold text-[#0284C7] flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#0284C7]" /> Li2 Toolbar
                            </span>
                            <span className="text-muted/40">|</span>
                            <span className="text-muted">Heatmap</span>
                            <span className="px-2 py-0.5 rounded-full bg-[#0284C7] text-white font-semibold">
                              🎯 Tagger
                            </span>
                            <span className="text-muted">Scroll</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Screenshots / Visual Deliverables */}
                {activeBlock.screenshots && activeBlock.screenshots.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-accent">
                      <Camera className="w-4 h-4 text-accent" />
                      <span>
                        {lang === "vi"
                          ? "Ảnh Chụp Giao Diện Thực Tế (Visual Deliverables)"
                          : "Production Screenshots & Visual Deliverables"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeBlock.screenshots.map((s, idx) => (
                        <div
                          key={idx}
                          onClick={() =>
                            setLightboxImage({
                              url: s.url,
                              title: s.badge,
                              caption: lang === "vi" ? s.captionVi : s.captionEn,
                            })
                          }
                          className="group relative rounded-2xl border border-line bg-surface overflow-hidden flex flex-col hover:border-accent hover:shadow-lg transition-all cursor-zoom-in"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-bg2">
                            <img
                              src={s.url}
                              alt={s.badge}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute top-2.5 left-2.5 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-bg/85 backdrop-blur-md border border-line text-text">
                              {s.badge}
                            </span>
                            {/* Hover zoom indicator overlay */}
                            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1.5 rounded-full bg-bg/95 backdrop-blur-md text-text border border-line shadow-xl">
                                <Maximize2 className="w-3.5 h-3.5 text-accent" />
                                {lang === "vi" ? "Xem cỡ lớn ↗" : "Click to enlarge ↗"}
                              </span>
                            </div>
                          </div>
                          <div className="p-3 bg-surface border-t border-line flex items-center justify-between gap-2">
                            <p className="text-[12px] text-muted m-0 leading-relaxed font-sans line-clamp-2">
                              {lang === "vi" ? s.captionVi : s.captionEn}
                            </p>
                            <Maximize2 className="w-3.5 h-3.5 text-muted shrink-0 group-hover:text-accent transition-colors" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 px-6 border-t border-line bg-surface flex items-center justify-between text-xs text-muted font-mono">
                <span>Li2.ai Architecture Showcase</span>
                <button
                  onClick={() => setSelectedBlockId(null)}
                  className="px-4 py-2 rounded-xl bg-text text-invert font-semibold font-sans cursor-pointer hover:opacity-90 transition-opacity"
                >
                  {lang === "vi" ? "Đóng" : "Close"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= LIGHTBOX IMAGE MODAL (ENLARGED VIEW) ================= */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[60] bg-[rgba(10,8,6,0.85)] backdrop-blur-lg flex items-center justify-center p-3 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-surface border border-line shadow-2xl overflow-hidden"
            >
              {/* Lightbox Header Bar */}
              <div className="px-5 py-3.5 border-b border-line bg-surface/90 backdrop-blur-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 shrink-0">
                    {lightboxImage.title}
                  </span>
                  <span className="text-xs text-muted truncate font-sans">
                    {lightboxImage.caption}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={lightboxImage.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full border border-line bg-surface hover:bg-bg2 text-muted hover:text-text cursor-pointer transition-colors"
                    title={lang === "vi" ? "Mở tab mới" : "Open in new tab"}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="p-1.5 rounded-full border border-line bg-surface hover:bg-bg2 text-muted hover:text-text cursor-pointer transition-colors"
                    title={lang === "vi" ? "Đóng (Esc)" : "Close (Esc)"}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Viewport */}
              <div className="flex-1 overflow-auto bg-black/40 flex items-center justify-center p-2 sm:p-4 min-h-[300px]">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-line/40 select-none"
                />
              </div>

              {/* Lightbox Footer Bar */}
              <div className="px-5 py-2.5 border-t border-line bg-bg2 flex items-center justify-between text-[11px] font-mono text-muted">
                <span>{lightboxImage.caption}</span>
                <span className="hidden sm:inline-block">
                  {lang === "vi" ? "Nhấn Esc hoặc nhấp ra ngoài để đóng" : "Press Esc or click outside to close"}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
