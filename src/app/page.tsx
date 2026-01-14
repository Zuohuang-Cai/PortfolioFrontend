"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DesktopHome = dynamic(() => import("@/components/home/DesktopHome"), {
  ssr: false
});

const MobileHome = dynamic(() => import("@/components/home/MobileHome"), {
  ssr: false
});

const MOBILE_BREAKPOINT = 768;

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // 初始加载时显示空白，避免闪烁
  if (isMobile === null) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  return isMobile ? <MobileHome /> : <DesktopHome />;
}
