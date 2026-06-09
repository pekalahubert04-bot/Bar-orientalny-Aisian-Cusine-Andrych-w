import React, { useState } from "react";
import { Laptop, Send, Sparkles, Check, ArrowRight, RotateCcw } from "lucide-react";

export default function SandboxPage() {
  const [counter, setCounter] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setFormSent(true);
      setTimeout(() => setFormSent(false), 5000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased pb-20 selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Header */}
      <header className="border-b border-slate-805/50 bg-slate-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="p-2 bg-indigo-600 rounded-lg text-white">
              <Laptop className="w-5 h-5" />
            </span>
            <span className="font-bold tracking-tight text-white text-lg">Hubert Sandbox v1.0</span>
          </div>
          <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Online &amp; Gotowa do testów
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-505/10 text-indigo-400 rounded-full border border-indigo-500/20 text-xs font-medium mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          Strona Testowa dla Google Search Console
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Moja Pierwsza <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Strona Testowa</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Ta witryna powstała wyłącznie w celach testowych. Możesz jej użyć do weryfikacji w Google Search Console, zbadania szybkości ładowania w PageSpeed Insights lub przetestowania indeksowania linków.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => setCounter(c => c + 1)}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 flex items-center gap-2"
          >
            Przetestuj interakcję (Kliknięcia: {counter})
          </button>
          {counter > 0 && (
            <button 
              onClick={() => setCounter(0)}
              className="p-3 bg-slate-800 hover:bg-slate-705 text-slate-400 hover:text-white transition rounded-xl"
              title="Resetuj licznik"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          )}
        </div>
      </section>

      {/* Main Sandbox Grid */}
      <main className="px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* Card 1: SEO i Wyszukiwarki */}
        <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Jak sprawdzić tę stronę w Google?</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Po opublikowaniu zmian z tym motywem, Twoja domena Vercel będzie zawierać tę uproszczoną stronę. Możesz teraz pójść do Google Search Console i zgłosić ten adres URL do indeksowania bez obaw o oficjalną treść restauracji.
            </p>
          </div>
          <ul className="space-y-2.5 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="p-0.5 bg-emerald-500/20 text-emerald-400 rounded-full mt-0.5"><Check className="w-3.5 h-3.5" /></span>
              <span><strong>Metatagi:</strong> Posiada tagi meta description i title.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="p-0.5 bg-emerald-500/20 text-emerald-400 rounded-full mt-0.5"><Check className="w-3.5 h-3.5" /></span>
              <span><strong>Szybka jak błyskawica:</strong> Zbudowana na lekkim szablonie React.</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Interaktywny Formularz */}
        <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Zapisz się do Newslettera Testowego</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Wpisz swój adres e-mail poniżej, aby zasymulować zapis do bazy danych. Formularz działa wyłącznie po stronie przeglądarki.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="twój@email.com"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl text-sm transition flex items-center justify-center gap-2"
            >
              {formSent ? "Zapisano pomyślnie!" : "Wyślij zgłoszenie testowe"}
              <Send className="w-4 h-4" />
            </button>

            {formSent && (
              <p className="text-emerald-400 text-xs text-center animate-pulse">
                Sukces! Formularz został pomyślnie przetworzony.
              </p>
            )}
          </form>
        </div>

      </main>

      {/* Footer info block */}
      <footer className="mt-20 text-center text-slate-500 text-xs px-6">
        <p>© 2026 Hubert Sandbox. Wszystkie prawa zastrzeżone.</p>
        <p className="mt-1">Ta strona powstała jako tymczasowy plac zabaw przed uruchomieniem pełnego serwisu.</p>
      </footer>
    </div>
  );
}
