"use client";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="https://x.com/Siddanttt"
          className="mb-7 text-xl font-medium text-black dark:text-white"
        >
          Sidhant,21
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.1}
        >
          Design Engineer and Frontend developer.
        </TextEffect>
      </div>
    </header>
  );
}
