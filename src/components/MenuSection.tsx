import React, { useState, useMemo, useRef, useEffect } from "react";
import { menuCategories } from "../data/menuData";
import { MenuItem } from "../types";
import { Search, Flame, Leaf, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import appetizerSajgonki from "../assets/images/appetizer_sajgonki_1780923714886.png";
import chefPhoHero from "../assets/images/chef_pho_hero_1780923698337.png";
import steamingRamen from "../assets/images/steaming_ramen_1780923733158.png";
import thaiCoconutCurry from "../assets/images/thai_coconut_curry_1780923751793.png";

export default function MenuSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("przystawki");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [vegetarianOnly, setVegetarianFilter] = useState<boolean>(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === "#menu") {
        setIsExpanded(true);
      }
    };

    // Check on initial load
    handleHashCheck();

    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  // Asset mappings for selected headers
  const categoryImages: Record<string, string> = {
    przystawki: appetizerSajgonki,
    zupy: chefPhoHero,
    udon: steamingRamen,
    curry: thaiCoconutCurry,
  };

  const handleCategoryClick = (catId: string, idx: number) => {
    setActiveCategory(catId);
    setSearchQuery(""); // Clear search to show the category contents
    if (categoriesRef.current) {
      const parent = categoriesRef.current;
      const child = parent.children[idx] as HTMLElement;
      if (child) {
        parent.scrollTo({
          left: child.offsetLeft - parent.clientWidth / 2 + child.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  // Filtered menu items based on selected tab, search and diet filters
  const processedMenu = useMemo(() => {
    // If there is a search query, search globally, otherwise filter by active category
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const results: { categoryName: string; items: MenuItem[] }[] = [];

      menuCategories.forEach((cat) => {
        const matchingItems = cat.items.filter((item) => {
          const matchName = item.name.toLowerCase().includes(q);
          const matchNum = item.id.toString() === q || item.id.toString().includes(q);
          const matchWege = vegetarianOnly ? item.vegetarian === true : true;
          return (matchName || matchNum) && matchWege;
        });

        if (matchingItems.length > 0) {
          results.push({ categoryName: cat.name, items: matchingItems });
        }
      });
      return { isSearch: true, results };
    } else {
      const currentCategory = menuCategories.find((c) => c.id === activeCategory);
      if (!currentCategory) return { isSearch: false, category: null };

      const filteredItems = currentCategory.items.filter((item) => {
        if (vegetarianOnly) return item.vegetarian === true;
        return true;
      });

      return {
        isSearch: false,
        category: {
          ...currentCategory,
          items: filteredItems,
        },
      };
    }
  }, [activeCategory, searchQuery, vegetarianOnly]);

  const activeCategoryDetails = useMemo(() => {
    return menuCategories.find((c) => c.id === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="py-20 bg-stone-900 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-emerald-400">Co jemy?</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 mt-2 font-bold tracking-tight">
            Pełne <span className="text-amber-400 italic">Menu</span>
          </h2>
          <p className="text-stone-400 text-sm mt-3">
            Wszystkie danie przygotowujemy ze świeżych składników na Państwa zamówienie. Ryż w daniach można zastąpić innymi dodatkami.
          </p>
        </div>

        {!isExpanded ? (
          <div className="space-y-10 animate-fade-in">
            {/* Elegant Specialties teaser Header */}
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold px-3 py-1 rounded-full bg-amber-950/20 border border-amber-900/30">
                ⭐ Polecane Specjały Szefa Kuchni
              </span>
            </div>

            {/* Teaser Bestsellers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="border border-stone-850/60 bg-stone-950 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group transition-colors hover:border-emerald-850/30">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-amber-500/85">Chrupiący Bestseller</span>
                  <h4 className="font-serif text-base text-stone-200 mt-1 font-bold">Nem sajgonki z krewetkami (5 szt.)</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed max-w-sm">Tradycyjny chrupiący papier ryżowy z nadzieniem krewetkowo-warzywnym.</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="font-mono font-bold text-amber-400 text-base block">15.00 zł</span>
                </div>
              </div>

              <div className="border border-stone-850/60 bg-stone-950 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group transition-colors hover:border-emerald-850/30">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400">Esencjonalna Zupa</span>
                  <h4 className="font-serif text-base text-stone-200 mt-1 font-bold">Tradycyjna Zupa PHO z kurczakiem</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed max-w-sm">Słynny wietnamski esencjonalny bulion z makaronem ryżowym i kolendrą.</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="font-mono font-bold text-amber-400 text-base block">28.00 zł</span>
                </div>
              </div>

              <div className="border border-stone-850/60 bg-stone-950 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group transition-colors hover:border-emerald-850/30">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-amber-500/85">Ulubione Danie Główne</span>
                  <h4 className="font-serif text-base text-stone-200 mt-1 font-bold">Chrupiący filet w sosie teriyaki</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed max-w-sm">Złocisty, chrupiący kurczak podawany z ryżem, surówką i sosem słodko-słonym.</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="font-mono font-bold text-amber-400 text-base block">30.00 zł</span>
                </div>
              </div>

              <div className="border border-stone-850/60 bg-stone-950 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group transition-colors hover:border-emerald-850/30">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400">Aromatyczne Curry</span>
                  <h4 className="font-serif text-base text-stone-200 mt-1 font-bold">Tajskie curry z kurczakiem (Mleko kokosowe)</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed max-w-sm">Wyraziste rozgrzewające curry gotowane z warzywami i świeżą bazylią.</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="font-mono font-bold text-amber-400 text-base block">30.00 zł</span>
                </div>
              </div>
            </div>

            {/* Invite block and expansion button */}
            <div className="text-center bg-stone-950/40 p-6 sm:p-8 rounded-2xl border border-stone-850/80 max-w-3xl mx-auto backdrop-blur-sm shadow-xl">
              <p className="text-stone-400 text-xs sm:text-sm mb-6 leading-relaxed max-w-xl mx-auto">
                Nasza pełna karta zawiera ponad <strong>140 tradycyjnych i autentycznych pozycji</strong> kuchni wietnamskiej, tajskiej oraz chińskiej – w tym dania z kurczaka, wołowiny, wieprzowiny, kaczki, ryb, krewetek oraz bogaty wybór dań wegetariańskich z tofu oraz grubego makaronu Udon.
              </p>
              <button
                onClick={() => {
                  setIsExpanded(true);
                  setTimeout(() => {
                    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-sans font-extrabold px-8 py-4.5 rounded-full shadow-lg shadow-amber-950/20 flex items-center justify-center gap-3 group transition-transform duration-200 hover:scale-[1.02] text-sm tracking-wide cursor-pointer mx-auto"
              >
                <span>Zobacz pełne menu / Przejdź do menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Filter controls + Search Bar */}
            <div className="bg-stone-950 border border-stone-850 rounded-2xl p-4 sm:p-6 mb-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between shadow-lg">
              {/* Smart Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
                <input
                  type="text"
                  placeholder="Wpisz nazwę lub numer dania (np. PHO, 14)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-full py-2.5 pl-12 pr-4 text-stone-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs font-semibold"
                  >
                    Wyczyść
                  </button>
                )}
              </div>

              {/* Toggle Filters */}
              <div className="flex flex-wrap gap-2 items-center">
                <button
                  onClick={() => setVegetarianFilter(!vegetarianOnly)}
                  className={`flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-full border transition-all ${
                    vegetarianOnly
                      ? "bg-emerald-800/30 border-emerald-500/50 text-emerald-400"
                      : "bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700"
                  }`}
                >
                  <Leaf size={14} />
                  <span>Wegetariańskie 🌱</span>
                </button>
              </div>
            </div>

            {/* Categories Horizontal scrolling container */}
            <div className="relative mb-10 pb-2">
              <div
                ref={categoriesRef}
                className="flex gap-2 overflow-x-auto scrollbar-none pb-2 scroll-smooth select-none"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {menuCategories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id, idx)}
                    className={`flex-none px-5 py-3 rounded-full text-xs font-bold tracking-wide font-sans cursor-pointer transition-all duration-200 border ${
                      activeCategory === cat.id && searchQuery === ""
                        ? "bg-emerald-800 border-emerald-700 text-stone-100 shadow-md shadow-emerald-950/20"
                        : "bg-stone-950 border-stone-850/60 text-stone-400 hover:text-stone-200 hover:border-stone-800"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              {/* Fading overlay indicators for horizontal scroll */}
              <div className="absolute right-0 top-0 bottom-3 w-12 bg-gradient-to-l from-stone-900 to-transparent pointer-events-none md:hidden" />
              <div className="absolute left-0 top-0 bottom-3 w-12 bg-gradient-to-r from-stone-900 to-transparent pointer-events-none md:hidden" />
            </div>

            {/* Info label about replacement */}
            <div className="bg-stone-950/50 border border-stone-850/50 rounded-xl p-3.5 text-xs text-stone-400 mb-8 flex items-start gap-2.5">
              <span className="text-amber-500 font-bold shrink-0">🔄</span>
              <p>
                Możliwość modyfikacji każdego dania! Zamiast ryżu białego możesz zamówić: <strong>ryż smażony, makaron smażony, makaron sojowy lub frytki</strong> za dopłatą <strong>+5,00 zł</strong> (+3,00 zł dla dań z tofu). Ogólna waga gotowego dania z dodatkami to około <strong>800g</strong>.
              </p>
            </div>

            {/* Dynamic Menu Panels */}
            <AnimatePresence mode="wait">
              {processedMenu.isSearch ? (
                /* Search results view */
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  <div className="text-stone-400 text-sm mb-4">
                    Wyniki wyszukiwania dla frazy: <span className="text-amber-400 font-semibold italic">"{searchQuery}"</span>
                  </div>
                  {processedMenu.results.length === 0 ? (
                    <div className="text-center py-16 bg-stone-950/30 border border-dashed border-stone-800 rounded-2xl">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="text-stone-300 font-bold text-lg mb-2">Brak wyników</h3>
                      <p className="text-stone-500 text-sm max-w-sm mx-auto">Nie znaleźliśmy dań odpowiadających Twoim kryteriom. Spróbuj wpisać inną frazę lub nazwę główną składnika.</p>
                    </div>
                  ) : (
                    processedMenu.results.map((res) => (
                      <div key={res.categoryName} className="space-y-4">
                        <h3 className="font-serif text-lg sm:text-xl text-stone-300 border-b border-stone-850 pb-2">{res.categoryName}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {res.items.map((item) => (
                            <MenuItemCard key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </motion.div>
              ) : (
                /* Standard category tab view */
                processedMenu.category && (
                  <motion.div
                    key={processedMenu.category.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Category Header Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-stone-950 border border-stone-850 rounded-2xl p-6 mb-8 items-center overflow-hidden">
                      <div className="lg:col-span-8 space-y-2">
                        <h3 className="font-serif text-2xl sm:text-3xl text-stone-100 font-bold">
                          {processedMenu.category.name}
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed max-w-2xl">
                          {processedMenu.category.desc || "Najlepsze pozycje o unikalnej recepturze, łączące tradycyjne azjatyckie składniki."}
                        </p>
                      </div>
                      {/* Category Image Mapping */}
                      {categoryImages[processedMenu.category.id] && (
                        <div className="lg:col-span-4 h-32 lg:h-36 w-full rounded-xl overflow-hidden shadow-inner border border-stone-850">
                          <img
                            src={categoryImages[processedMenu.category.id]}
                            alt={processedMenu.category.name}
                            className="w-full h-full object-cover filter brightness-95"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>

                    {/* Items Grid */}
                    {processedMenu.category.items.length === 0 ? (
                      <div className="text-center py-16 bg-stone-950/30 border border-dashed border-stone-800 rounded-2xl">
                        <div className="text-4xl mb-4">🍃</div>
                        <p className="text-stone-500 text-sm">Brak dań spełniających wybrane filtry dietetyczne w tej kategorii.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {processedMenu.category.items.map((item) => (
                          <MenuItemCard key={item.id} item={item} />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )
              )}
            </AnimatePresence>
            
            {/* Added collapse button at the very bottom when expanded */}
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-stone-950 hover:bg-stone-850 text-stone-400 hover:text-stone-200 border border-stone-850 text-xs font-bold py-2.5 px-6 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Collapse / Ukryj pełne menu 🔼</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// Subcomponent for Dish item card
function MenuItemCard({ item }: { item: MenuItem; key?: React.Key }) {
  return (
    <div className="group relative flex justify-between items-center bg-stone-950 border border-stone-850 hover:border-emerald-800/40 p-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md select-none touch-manipulation">
      <div className="flex-1 pr-4">
        {/* Name and Number */}
        <h4 className="text-stone-200 text-sm sm:text-base font-bold group-hover:text-stone-50 transition-colors duration-150">
          <span className="text-amber-500 tabular-nums">{item.id}.</span> {item.name}
        </h4>
        
        {/* Icons/Badges list */}
        <div className="flex flex-wrap gap-1.5 mt-1.5 min-h-[1.25rem]">
          {item.vegetarian && (
            <span className="inline-flex items-center gap-1 bg-emerald-950/60 border border-emerald-900/50 text-emerald-400 text-[9px] font-semibold px-2 py-0.5 rounded-full">
              <Leaf size={10} />
              <span>Wege 🌱</span>
            </span>
          )}
          {item.spicy && item.spicy > 0 && (
            <span className="inline-flex items-center gap-0.5 bg-red-950/60 border border-red-900/30 text-red-500 text-[9px] font-semibold px-2 py-0.5 rounded-full">
              <span>Moc:</span>
              {Array.from({ length: item.spicy }).map((_, i) => (
                <span key={i}>🌶</span>
              ))}
            </span>
          )}
          {item.hot && (
            <span className="inline-flex items-center gap-1 bg-amber-950/60 border border-amber-900/30 text-amber-500 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              <Flame size={10} />
              <span>Gorący półmisek 🔥</span>
            </span>
          )}
        </div>
      </div>

      {/* Price tag with action phone trigger */}
      <div className="text-right shrink-0">
        <div className="text-amber-400 font-mono font-bold text-sm sm:text-base sm:group-hover:text-amber-300 transition-colors">
          {item.price.toFixed(2)} zł
        </div>
        <a
          href="tel:+48789999661"
          className="inline-flex items-center gap-1 text-[10px] font-bold text-stone-500 hover:text-stone-300 mt-1 cursor-pointer transition-colors opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span>Zamów 📞</span>
        </a>
      </div>
    </div>
  );
}
