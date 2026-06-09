import React from "react";
import { Phone, CheckCircle, Truck, ShoppingBag, MapPin, Heart } from "lucide-react";

export default function DeliverySection() {
  const options = [
    {
      icon: "🛵",
      title: "Dostawa do domu",
      desc: "Smaczne, gorące dania dowozimy prosto pod Twoje drzwi. Obsługujemy cały Andrychów oraz okoliczne miejscowości.",
      tag: "Nowość",
      isGold: false,
    },
    {
      icon: "📞",
      title: "Zamów przez telefon",
      desc: "Zadzwoń pod numer 789 999 661, złóż zamówienie, a nasz uśmiechnięty kurier dostarczy je ekspresowo.",
      tag: "Najszybciej",
      isGold: true,
    },
    {
      icon: "🥡",
      title: "Na wynos",
      desc: "Zadzwoń, zamów i odbierz gorący posiłek osobiście przy ul. Krakowskiej 37. Dbamy o to, by wszystko było na czas.",
      tag: "Wygodnie",
      isGold: false,
    },
    {
      icon: "🪑",
      title: "Na miejscu",
      desc: "Zapraszamy do naszej klimatycznej sali przy ul. Krakowskiej 37. Czekają na Ciebie wygodne stoliki i orientalna atmosfera.",
      tag: "Gościnnie",
      isGold: false,
    },
  ];

  return (
    <section id="dostawa" className="py-20 bg-stone-950 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-emerald-400">Zamów wygodnie</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 mt-2 font-bold tracking-tight">
            Dostawa <span className="text-amber-400 italic">&amp; Odbiór</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Bar Orientalny wprowadził dostawę do domu! Teraz możesz cieszyć się rozgrzewającymi zupami PHO, aromatycznymi ramenami i chrupiącymi daniami bez wychodzenia z domu.
          </p>
        </div>

        {/* Option cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {options.map((opt) => (
            <div
              key={opt.title}
              className="bg-stone-900 border border-stone-850 p-6 rounded-2xl flex flex-col justify-between hover:border-stone-800 transition-all duration-200 select-none shadow-md"
            >
              <div>
                <div className="text-4xl mb-4">{opt.icon}</div>
                <h3 className="text-stone-150 font-bold text-base mb-2">{opt.title}</h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6">{opt.desc}</p>
              </div>

              {/* Tag style */}
              <div>
                <span
                  className={`inline-block text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                    opt.isGold
                      ? "bg-amber-400/10 border border-amber-500/30 text-amber-500"
                      : "bg-stone-950 border border-stone-850 text-stone-500"
                  }`}
                >
                  {opt.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions info panel */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-stone-900/40 border border-stone-850/60 rounded-xl">
          <div className="flex items-center gap-3">
            <span className="text-xl">🛵</span>
            <div className="text-stone-300 text-xs sm:text-sm">
              Dowozimy na terenie całego <strong>Andrychowa i okolicznych miejscowości</strong>. Spytaj o strefę dostaw podczas rozmowy!
            </div>
          </div>
          <a
            href="tel:+48789999661"
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-stone-100 text-xs sm:text-sm font-bold py-2.5 px-5 rounded-full shadow-md transition-transform duration-150 active:scale-95 shrink-0"
          >
            <Phone size={14} />
            <span>Zadzwoń i zamów: 789 999 661</span>
          </a>
        </div>

      </div>
    </section>
  );
}
