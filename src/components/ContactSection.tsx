import React, { useMemo } from "react";
import { Phone, MapPin, Clock, Facebook, Navigation, Star } from "lucide-react";

export default function ContactSection() {
  const openingHours = [
    { day: "Poniedziałek", time: "10:00–21:30" },
    { day: "Wtorek", time: "10:00–21:30" },
    { day: "Środa", time: "10:00–21:30" },
    { day: "Czwartek", time: "10:00–21:30" },
    { day: "Piątek", time: "10:00–21:30" },
    { day: "Sobota", time: "10:00–21:30" },
    { day: "Niedziela", time: "11:00–21:30" },
  ];

  // Dynamic status detector
  const currentStatus = useMemo(() => {
    try {
      const now = new Date();
      const localTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Warsaw" }));
      const currentDayIdx = localTime.getDay(); // 0 is Sunday, 1 is Monday ...
      const currentHour = localTime.getHours();
      const currentMinute = localTime.getMinutes();
      const currentTimeDecimal = currentHour + currentMinute / 60;

      // Pon-Sob: 10:00 - 21:30, Ndz: 11:00 - 21:30
      const isOpenToday = currentDayIdx === 0 
        ? (currentTimeDecimal >= 11 && currentTimeDecimal < 21.5) 
        : (currentTimeDecimal >= 10 && currentTimeDecimal < 21.5);

      return {
        open: isOpenToday,
        text: isOpenToday ? "Otwarte teraz" : "Zamknięte",
        colorClass: isOpenToday ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400" : "bg-red-500/15 border-red-500/30 text-red-400",
        dayIdx: currentDayIdx === 0 ? 6 : currentDayIdx - 1 // convert Sunday to index 6, Monday to 0
      };
    } catch (e) {
      return { open: true, text: "Zapraszamy", colorClass: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400", dayIdx: -1 };
    }
  }, []);

  return (
    <section id="kontakt" className="py-20 bg-stone-950 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-emerald-400">Gdzie jesteśmy?</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 mt-2 font-bold tracking-tight">
            Kontakt &amp; <span className="text-amber-400 italic">Dojazd</span>
          </h2>
          <p className="text-stone-400 text-sm mt-3">
            Odwiedź nas i zjedz na miejscu w klimatycznej sali przy ul. Krakowskiej 37 w Andrychowie. Zamówienia przyjmujemy również pod numerem telefonu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left panel: Interactive Google Map Wrap */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-850 h-80 sm:h-96 w-full shadow-lg relative bg-stone-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.5!2d19.3459!3d49.8553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471685aab2766227%3A0xee8fbac0dbf7a59b!2sKrakowska%2037%2C%2034-120%20Andrych%C3%B3w!5e0!3m2!1spl!2spl!4v1234567890"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-none filter contrast-105 saturate-95 grayscale-20"
                title="Bar Orientalny Andrychów mapa dojazdu"
              />
            </div>
            
            {/* Nav and Actions triggers beneath map */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Krakowska+37+Andrych%C3%B3w"
                target="_blank"
                rel="noreferrer"
                className="btn bg-stone-900 border border-stone-800 text-stone-300 font-bold px-5 py-3 rounded-full text-xs inline-flex items-center gap-2 hover:border-stone-700 shadow-md"
              >
                <Navigation size={14} className="text-amber-500" />
                <span>Wyznacz trasę w nawigacji</span>
              </a>
              <a
                href="tel:+48789999661"
                className="btn bg-emerald-800/10 border border-emerald-800/40 text-emerald-400 font-bold px-5 py-3 rounded-full text-xs inline-flex items-center gap-2 hover:bg-emerald-800/20 shadow-md"
              >
                <Phone size={14} />
                <span>Zadzwoń do nas</span>
              </a>
            </div>
          </div>

          {/* Right panel: Details list and highlighted business status */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Contact quick blocks */}
            <div className="bg-stone-900/60 border border-stone-850/60 p-5 rounded-2xl flex items-start gap-4">
              <span className="p-2.5 rounded-xl bg-stone-950 border border-stone-850 text-amber-500">📍</span>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Adres</h4>
                <div className="text-stone-100 font-bold text-sm mt-1">ul. Krakowska 37<br />34-120 Andrychów</div>
              </div>
            </div>

            <div className="bg-stone-900/60 border border-stone-850/60 p-5 rounded-2xl flex items-start gap-4">
              <span className="p-2.5 rounded-xl bg-stone-950 border border-stone-850 text-amber-500">📞</span>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Zamówienia telefoniczne</h4>
                <div className="text-stone-100 font-bold text-base sm:text-lg mt-1 group">
                  <a href="tel:+48789999661" className="hover:text-amber-400 transition-colors">
                    789 999 661
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours list inside styled block */}
            <div className="bg-stone-900/60 border border-stone-850/60 p-5 rounded-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-stone-850">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-stone-950 border border-stone-850 text-amber-500">🕙</span>
                  <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">Godziny pracy</h4>
                </div>
                {/* Micro active state pill wrapper */}
                <span className={`inline-flex items-center border text-[10px] font-bold px-2.5 py-0.5 rounded-full ${currentStatus.colorClass}`}>
                  {currentStatus.text}
                </span>
              </div>

              {/* Day listings */}
              <div className="mt-4 space-y-2">
                {openingHours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center text-xs py-1.5 px-3 rounded-lg ${
                      currentStatus.dayIdx === i
                        ? "bg-emerald-800/10 border border-emerald-500/20 text-emerald-400 font-bold"
                        : "text-stone-300"
                    }`}
                  >
                    <span>{h.day}</span>
                    <span className={currentStatus.dayIdx === i ? "text-emerald-400" : "text-stone-100 font-semibold"}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social channels card */}
            <div className="bg-stone-900/60 border border-stone-850/60 p-5 rounded-2xl flex items-center justify-between">
              <span className="text-xs font-bold text-stone-400">Dołącz do nas w mediach:</span>
              <a
                href="https://www.facebook.com/p/Bar-Orientalny-Kuchnia-Vietnam-Asian-Cuisine-2-61579680067129/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#6ba3f5] hover:bg-[#1877f2]/20 text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-sm"
              >
                <Facebook size={12} fill="currentColor" />
                <span>Facebook</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
