import React, { useState, useEffect } from "react";
import { heroSlides } from "../data/menuData";
import { Phone, ArrowRight, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const selectSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div id="hero" className="relative min-h-[92svh] md:min-h-screen flex flex-col justify-end overflow-hidden pt-16 select-none bg-stone-950">
      {/* Slideshow background image block */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroSlides[current].image}
              alt={heroSlides[current].title}
              className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Warm vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-stone-950/20 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 md:pb-24 pt-20">
        <div className="max-w-2xl text-left">
          {/* Glassmorphic Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-stone-900/80 backdrop-blur-md border border-stone-800 text-stone-200 text-xs font-bold tracking-wide py-1.5 px-3.5 rounded-full mb-6 shadow-md"
          >
            <span className="text-amber-500">⭐ 4.8 / 5</span>
            <span className="text-stone-500">&#8226;</span>
            <span>64 opinie na Google Maps</span>
          </motion.div>

          {/* Slider Headers and Sub-headings with synchronized transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              <h2 className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-emerald-400">
                {heroSlides[current].subTitle}
              </h2>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-50 leading-[1.08] font-bold tracking-tight">
                {heroSlides[current].title.split(" ")[0]}{" "}
                <span className="text-amber-400 italic font-semibold">
                  {heroSlides[current].title.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                {heroSlides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8"
          >
            <a href="#menu" id="hero-menu-cta" className="btn bg-emerald-700 hover:bg-emerald-600 text-stone-100 font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform duration-200 active:scale-98">
              <span>🥢 Zobacz menu</span>
              <ArrowRight size={16} />
            </a>
            <a href="tel:+48789999661" id="hero-phone-cta" className="btn bg-stone-900/90 hover:bg-stone-800 text-amber-500 border border-amber-500/20 font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform duration-200 active:scale-98">
              <Phone size={16} />
              <span>Zadzwoń i zamów: 789 999 661</span>
            </a>
          </motion.div>

          {/* Delivery & Address Quick indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 text-xs sm:text-sm text-stone-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">📍</span>
              <span>ul. Krakowska 37, Andrychów</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">🕙</span>
              <span>Dziś otwarte do 21:30</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">🛵</span>
              <span>Szybka dostawa do domu</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dots Indicator bars */}
      <div className="absolute right-4 bottom-8 md:right-8 md:bottom-12 z-20 flex gap-2">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => selectSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="group relative h-1.5 focus:outline-none transition-all duration-300"
            style={{ width: current === idx ? "2.5rem" : "1rem" }}
          >
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                current === idx ? "bg-amber-400" : "bg-stone-600 group-hover:bg-stone-400"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
