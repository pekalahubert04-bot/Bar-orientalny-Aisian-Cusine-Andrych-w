import React from "react";
import { Phone, BookOpen, MapPin } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-stone-950/90 backdrop-blur-md border-t border-stone-850 px-4 py-3 flex gap-3 shadow-lg">
      <a
        href="tel:+48789999661"
        id="floating-call-btn"
        className="flex-1 flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold py-3 px-4 rounded-xl text-xs shadow-md tracking-wider active:scale-95 transition-all"
      >
        <Phone size={14} fill="currentColor" />
        <span>Zadzwoń</span>
      </a>
      <a
        href="#menu"
        id="floating-menu-btn"
        className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-stone-100 font-extrabold py-3 px-4 rounded-xl text-xs shadow-md tracking-wider active:scale-95 transition-all"
      >
        <BookOpen size={14} />
        <span>Menu</span>
      </a>
      <a
        href="#kontakt"
        id="floating-map-btn"
        className="px-4 bg-stone-900 border border-stone-800 text-stone-400 rounded-xl flex items-center justify-center active:scale-95 transition-all"
        aria-label="Mapa"
      >
        <MapPin size={16} />
      </a>
    </div>
  );
}
