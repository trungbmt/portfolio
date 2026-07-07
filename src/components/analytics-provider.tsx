"use client";

import { useEffect } from "react";
import { Li2Analytics } from "@li2/analytics";

const analytics = new Li2Analytics({
  publishableKey: "li2_pk_99c77832_f1f24eb488e15653a7f706fe276dfe53",
});

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    analytics.start();
    return () => analytics.destroy();
  }, []);

  return <>{children}</>;
}
