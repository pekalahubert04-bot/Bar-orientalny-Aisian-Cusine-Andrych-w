import React from "react";
import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-850 py-16 text-xs sm:text-sm text-stone-400 select-none pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo brand col */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <div className="font-serif text-lg font-bold text-amber-500">Bar Orientalny</div>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 font-sans font-bold mt-1">Kuchnia Vietnam &amp; Asian Cuisine</p>
            </div>
            <p className="max-w-md text-stone-400 leading-relaxed text-xs">
              Zapraszamy na najlepsze, autentyczne smaki Azji w Andrychowie. Serwujemy aromatyczne PHO, rameny, chrupiące sajgonki oraz curry tajskie z mlekiem kokosowym. Szybka dostawa w Andrychowie i okolicach.
            </p>
            <div className="pt-2">
              <a href="tel:+48789999661" className="inline-flex items-center gap-1.5 bg-emerald-800/10 border border-emerald-800/40 hover:bg-emerald-800/20 text-emerald-400 font-bold py-2 px-4 rounded-full transition-colors leading-none">
                <span>📞 Rezerwuj i zamów: 789 999 661</span>
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Skocz do sekcji</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Strona Główna</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Nasze Menu</a></li>
              <li><a href="#dostawa" className="hover:text-amber-400 transition-colors">Dostawa &amp; Odbiór</a></li>
              <li><a href="#o-nas" className="hover:text-amber-400 transition-colors">O Nas</a></li>
              <li><a href="#opinie" className="hover:text-amber-400 transition-colors">Opinie Gości</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Social media</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.facebook.com/p/Bar-Orientalny-Kuchnia-Vietnam-Asian-Cuisine-2-61579680067129/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Facebook fanpage
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Krakowska+37+Andrychow"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Profil Google Maps
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* copyright section */}
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-stone-500 font-medium">
          <span>&copy; 2026 Bar Orientalny – Kuchnia Vietnam &amp; Asian Cuisine · Andrychów, ul. Krakowska 37</span>
          <span>Wszelkie prawa zastrzeżone</span>
        </div>
      </div>
    </footer>
  );
}
