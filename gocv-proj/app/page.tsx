"use client";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Box 1: fully visible on load, holds, then gently fades out
  const box1Opacity = useTransform(scrollYProgress, [0, 0, 0.2, 0.33], [1, 1, 1, 0]);
  // Box 2: fades in slowly, holds, then fades out slowly
  const box2Opacity = useTransform(scrollYProgress, [0.25, 0.38, 0.55, 0.66], [0, 1, 1, 0]);
  // Box 3: fades in slowly and stays
  const box3Opacity = useTransform(scrollYProgress, [0.58, 0.75, 1], [0, 1, 1]);

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
              className="w-80 h-64 bg-white rounded-2xl flex items-center justify-center text-8xl font-bold text-[#f5824a]"
              style={{ boxShadow: "6px 6px 0px #f5824a" }}
            >
              {n}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


