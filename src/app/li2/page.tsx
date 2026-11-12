import Li2ArchitecturePage from "@/app/work/li2/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Li2.ai — System Architecture & Engineering Breakdown",
  description:
    "Comprehensive system architecture breakdown of Li2.ai: sub-10ms Go gateway, multi-tenant RBAC, 6 weighted queues, monthly range partitioned PostgreSQL.",
};

export default function Page() {
  return <Li2ArchitecturePage />;
}
