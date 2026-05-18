"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-white border-b-2 border-b-[#F5824A]">
      <Link href="/" className="text-xl font-bold tracking-tight">iffekt</Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="#" className="hover:text-green-600 transition-colors" style={{ fontFamily: "var(--font-borel)" }}>deepdive</Link>
        {pathname !== "/live-effects" && (
          <Link href="/live-effects" className="hover:text-green-600 transition-colors" style={{ fontFamily: "var(--font-borel)" }}>live effects</Link>
        )}
      </div>
    </nav>
  );
}
