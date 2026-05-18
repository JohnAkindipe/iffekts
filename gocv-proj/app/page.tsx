"use client";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Box 1: fully visible on load, holds, then gently fades out
  const box1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.20, 1], [1, 1, 0, 0]);
  // Box 2: fades in slowly, holds, then fades out slowly
  const box2Opacity = useTransform(scrollYProgress, [0.25, 0.38, 0.50, 0.66], [0, 1, 1, 0]);
  // Box 3: fades in slowly and stays
  const box3Opacity = useTransform(scrollYProgress, [0.70, 0.75, 1], [0, 1, 1]);

  // Scroll hint: visible always except at the very bottom
  const scrollHintOpacity = useTransform(scrollYProgress, (v) => (v >= 0.999 ? 0 : 1));

  const opacities = [box1Opacity, box2Opacity, box3Opacity];

  return (
    <div className="relative h-[500vh] bg-[#f0e9d8]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {[1, 2, 3].map((n, i) => (
          <motion.div
            key={n}
            style={{ opacity: opacities[i] }}
            className="absolute"
          >
            <div
              className="w-80 max-[360px]:w-[250px] h-64 bg-white rounded-2xl flex items-center justify-center text-8xl font-bold text-[#f5824a]"
              style={{ boxShadow: "6px 6px 0px #f5824a" }}
            >
              {n}
            </div>
          </motion.div>
        ))}

        {/* Scroll hint — midway between the box and the viewport bottom */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-[1%] flex flex-col items-center gap-2 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="down-arrow-div w-10 h-10 rounded-full border-2 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="grey"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="6 13 12 19 18 13" />
            </svg>
          </motion.div>
          <span
            className="scroll-text text-sm text-[#4B2E2B]"
            style={{ fontFamily: "var(--font-borel)" }}
          >
            scroll
          </span>
        </motion.div>
      </div>
    </div>
  );
}


