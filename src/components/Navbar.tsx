import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Zamów & Odbiór", href: "#dostawa" },
    { name: "O nas", href: "#o-nas" },
    { name: "Opinie", href: "#opinie" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-stone-900/95 backdrop-blur-md border-b border-stone-850 shadow-md py-3"
            : "bg-gradient-to-b from-stone-950/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex flex-col text-decoration-none group">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-amber-500 transition-colors duration-200 group-hover:text-amber-400">
                Bar Orientalny
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-stone-400 font-sans font-semibold">
                Kuchnia Vietnam &amp; Asian Cuisine
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-300 hover:text-emerald-400 text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+48789999661"
                className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-stone-100 text-xs lg:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-transform duration-200 active:scale-95"
              >
                <Phone size={14} />
                <span>789 999 661</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                id="mobile-menu-btn"
                onClick={toggleMenu}
                aria-label="Menu"
                className="text-stone-300 hover:text-amber-400 p-2 rounded-lg transition-colors focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-stone-950 border-l border-stone-850 p-6 z-50 md:hidden flex flex-col justify-between shadow-2xl"
            >
              <div className="mt-8">
                <div className="flex items-center justify-between pb-6 border-b border-stone-850">
                  <span className="font-serif text-amber-500 font-bold text-lg">Menu</span>
                  <button
                    onClick={toggleMenu}
                    className="p-1 rounded-full bg-stone-900 border border-stone-800 text-stone-400"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex flex-col space-y-3 mt-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-stone-300 hover:text-emerald-400 text-base font-medium py-2 border-b border-stone-900"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom */}
              <div className="mt-auto border-t border-stone-850 pt-6">
                <div className="flex items-center gap-3 text-stone-400 text-xs mb-4">
                  <MapPin size={16} className="text-amber-500 shrink-0" />
                  <span>Krakowska 37, Andrychów</span>
                </div>
                <div className="flex items-center gap-3 text-stone-400 text-xs mb-6">
                  <Clock size={16} className="text-amber-500 shrink-0" />
                  <span>Pon–Sob: 10:00–21:30</span>
                </div>
                <a
                  href="tel:+48789999661"
                  className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-stone-100 font-bold p-3 rounded-xl w-full shadow-lg transition-transform active:scale-98"
                >
                  <Phone size={16} />
                  <span>Zadzwoń i zamów</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
