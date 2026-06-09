import React from "react";
import { googleReviews } from "../data/menuData";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section id="opinie" className="py-20 bg-stone-900 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-emerald-400">Co mówią goście?</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 mt-2 font-bold tracking-tight">
            Opinie <span className="text-amber-400 italic">Klientów</span>
          </h2>
          <p className="text-stone-400 text-sm mt-3">
            Nasi klienci doceniają nas za niepowtarzalny smak, gęste i wyraziste wywary oraz tradycyjne azjatyckie podejście.
          </p>
        </div>

        {/* Global Google Rating Widget */}
        <div className="bg-stone-950 border border-stone-850 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-serif text-6xl text-amber-500 font-extrabold select-none">4.8</span>
            <div>
              <div className="flex gap-1 text-amber-400 text-xl font-bold select-none">★★★★★</div>
              <div className="text-stone-300 text-sm font-semibold mt-1">Średnia ocena na Google Maps</div>
              <div className="text-stone-500 text-xs mt-0.5">Na podstawie 64 autentycznych opinii gości</div>
            </div>
          </div>
          <div>
            <a
              href="https://maps.google.com/?q=Bar+Orientalny+Krakowska+37+Andrychow"
              target="_blank"
              rel="noreferrer"
              className="btn bg-stone-900 hover:bg-stone-850 text-stone-300 hover:text-stone-100 border border-stone-800 hover:border-stone-700 text-xs font-bold py-2.5 px-5 rounded-full inline-flex items-center gap-2 transition-transform duration-150 active:scale-95 shadow-md shadow-black/30"
            >
              <span>🌐 Przeczytaj na Google Maps</span>
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-950 border border-stone-850/60 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-800/20 transition-all duration-200 select-none shadow-sm"
            >
              <div>
                {/* Rating head */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-0.5 text-amber-400 text-sm font-bold">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-500 font-semibold">{rev.date}</span>
                </div>
                {/* Review Text */}
                <p className="text-stone-300 text-sm italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Author and badge */}
              <div className="flex justify-between items-center border-t border-stone-900/60 pt-4 mt-auto">
                <span className="text-xs font-bold text-stone-100 font-sans">{rev.author}</span>
                <span className="text-[10px] uppercase font-bold text-emerald-500/80 tracking-widest">{rev.source}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
