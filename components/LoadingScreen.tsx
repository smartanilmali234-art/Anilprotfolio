"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setShow(false), 1100);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bgDeep"
        >
          <div className="space-y-5 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primaryCyan/25 bg-primaryCyan/10 shadow-[0_0_80px_rgba(0,212,255,0.18)]">
              <div className="h-10 w-10 rounded-full border-4 border-primaryCyan border-t-transparent animate-spin" />
            </div>
            <div className="space-y-2">
              <p className="font-heading text-2xl font-bold text-white">Initializing AI Portfolio</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-textMuted">
                Loading neural interface
              </p>
            </div>
            <div className="mx-auto h-1.5 w-64 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.05, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-primaryCyan via-secondaryPurple to-accentPink"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
