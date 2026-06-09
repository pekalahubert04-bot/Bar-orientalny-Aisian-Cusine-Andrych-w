import React from "react";
import { ArrowRight, Star, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import chefPhoHero from "../assets/images/chef_pho_hero_1780923698337.png";
import appetizerSajgonki from "../assets/images/appetizer_sajgonki_1780923714886.png";
import thaiCoconutCurry from "../assets/images/thai_coconut_curry_1780923751793.png";

export default function AboutSection() {
  const highlights = [
    { text: "Autentyczne receptury", icon: "🍜" },
    { text: "Świeże, lokalne składniki", icon: "🌿" },
    { text: "Szerokie opcje wegetariańskie", icon: "🥬" },
    { text: "Szybka dostawa w Andrychowie", icon: "🛵" },
    { text: "Najlepsze opinie w regionie", icon: "⭐" },
  ];

  return (
    <section id="o-nas" className="py-20 bg-stone-950 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: About Text & details */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-emerald-400">O nas</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 font-bold tracking-tight leading-tight">
              Autentyczne smaki <br />
              <span className="text-amber-400 italic">Azji w Andrychowie</span>
            </h2>
            
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Jesteśmy klimatycznym barem orientalnym przy <strong>ul. Krakowskiej 37 w Andrychowie</strong>, gdzie każdego dnia dzielimy się pasją do kulinarnego bogactwa Wietnamu oraz krajów Azji Południowo-Wschodniej. Naszą misją jest serwowanie wyśmienitego jedzenia, przygotowywanego według tradycyjnych przepisów rodzinnych z użyciem świeżych składników i charakterystycznych, aromatycznych ziół.
            </p>

            <p className="text-stone-400 text-sm leading-relaxed">
              Nasz azjatycki szef kuchni dba o każdy detal. Od rano gotującego się, esencjonalnego wywaru na tradycyjną wietnamską zupę PHO, przez chrupiące złociste sajgonki z papieru ryżowego, po kremowe curry z mleka kokosowego. Oferujemy obfite, sycące porcje i unikalną atmosferę.
            </p>

            {/* highlights pills grid */}
            <div className="flex flex-wrap gap-2 pt-2">
              {highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-stone-900 border border-stone-850 text-stone-300 text-xs font-semibold py-1.5 px-3.5 rounded-full"
                >
                  <span>{h.icon}</span>
                  <span>{h.text}</span>
                </span>
              ))}
            </div>

            {/* Call to actions in description */}
            <div className="flex items-center gap-4 pt-4">
              <a href="tel:+48789999661" className="btn btn-sm bg-emerald-700 hover:bg-emerald-600 text-stone-100 font-bold px-5 py-3 rounded-full flex items-center gap-1.5 text-xs shadow-md">
                <span>📞 Rezerwuj stolik</span>
              </a>
              <a
                href="https://www.facebook.com/p/Bar-Orientalny-Kuchnia-Vietnam-Asian-Cuisine-2-61579680067129/"
                target="_blank"
                rel="noreferrer"
                className="text-stone-300 hover:text-emerald-400 text-xs font-bold flex items-center gap-1"
              >
                <span>Śledź nas na Facebooku</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: Premium Styled Photo Bento Grid using generated images */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-3 md:gap-4 relative">
            <div className="absolute -inset-4 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

            {/* Pho Hero picture (Large top span) */}
            <div className="col-span-12 rounded-2xl overflow-hidden shadow-xl border border-stone-850 h-52 sm:h-64 relative group">
              <img
                src={chefPhoHero}
                alt="Wietnamskie Pho"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-stone-100 font-serif text-sm sm:text-base font-bold">Nasza popisowa zupa PHO</span>
              </div>
            </div>

            {/* Sajgonki (Left bottom) */}
            <div className="col-span-6 rounded-2xl overflow-hidden shadow-lg border border-stone-850 h-36 sm:h-44 relative group">
              <img
                src={appetizerSajgonki}
                alt="Wietnamskie Sajgonki Nem"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <span className="text-stone-100 font-sans text-xs font-bold">Chrupiące sajgonki nem</span>
              </div>
            </div>

            {/* Thai Curry (Right bottom) */}
            <div className="col-span-6 rounded-2xl overflow-hidden shadow-lg border border-stone-850 h-36 sm:h-44 relative group">
              <img
                src={thaiCoconutCurry}
                alt="Pyszne Curry z Mlekiem Kokosowym"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <span className="text-stone-100 font-sans text-xs font-bold">Curry tajskie</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
