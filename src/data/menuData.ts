import { MenuCategory, Review, HeroSlide } from "../types";
import chefPhoHero from "../assets/images/chef_pho_hero_1780923698337.png";
import steamingRamen from "../assets/images/steaming_ramen_1780923733158.png";
import appetizerSajgonki from "../assets/images/appetizer_sajgonki_1780923714886.png";
import thaiCoconutCurry from "../assets/images/thai_coconut_curry_1780923751793.png";

export const heroSlides: HeroSlide[] = [
  {
    id: 0,
    image: chefPhoHero,
    title: "Tradycyjna Zupa Pho",
    subTitle: "Kuchnia Wietnamska",
    desc: "Aromatyczny, wielogodzinny wywar z anyżem, cynamonem i kardamonem, serwowany ze świeżą kolendrą, dymką i plasterkami delikatnego mięsa.",
  },
  {
    id: 1,
    image: steamingRamen,
    title: "Gorący Ramen",
    subTitle: "Kuchnia Azjatycka",
    desc: "Nasz bogaty i głęboki wywar podawany ze sprężystym makaronem, pieczonym boczkiem chasiu, jajkiem marynowanym i świeżymi ziołami.",
  },
  {
    id: 2,
    image: appetizerSajgonki,
    title: "Chrupiące Sajgonki Nem",
    subTitle: "Ręcznie Robione",
    desc: "Tradycyjne wietnamskie sajgonki z nadzieniem wieprzowo-warzywnym lub krewetkowym, owinięte w chrupiący papier ryżowy, uzupełnione sosami.",
  },
  {
    id: 3,
    image: thaiCoconutCurry,
    title: "Tajskie Curry",
    subTitle: "Mleko Kokosowe",
    desc: "Wyraziste i aromatyczne sosy curry (czerwone, zielone, żółte, fioletowe) duszone z warzywami, tofu lub mięsem i świeżą bazylią.",
  }
];

export const googleReviews: Review[] = [
  {
    id: "rev-1",
    author: "Katarzyna Lachendro",
    stars: 5,
    text: "Jedzenie pyszne - autentyczne smaki kuchni azjatyckiej, świeże składniki i niesamowity aromat zup. Bardzo polecam, na pewno wrócimy!",
    date: "2 dni temu",
    source: "Google Maps"
  },
  {
    id: "rev-2",
    author: "Mefuu Klama",
    stars: 5,
    text: "Wszystko w jak najlepszym porządku. Jedzenie dotarło gorące i doskonale doprawione. Gorąco polecam każdemu fanowi azjatyckich smaków!!!",
    date: "2 dni temu",
    source: "Google Maps"
  },
  {
    id: "rev-3",
    author: "anonim an",
    stars: 5,
    text: "Gorąco polecam — duże porcje, konkurencyjne ceny i niesamowicie dobre jedzenie! Obsługa bardzo miła i pomocna.",
    date: "9 godzin temu",
    source: "Google Maps"
  },
  {
    id: "rev-4",
    author: "Tomasz W.",
    stars: 5,
    text: "Najlepszy kurczak w cieście w okolicy. Sos teriyaki idealnie zbalansowany, a chrupkość fileta utrzymuje się nawet przy dostawie. Sztos!",
    date: "1 tydzień temu",
    source: "Google Maps"
  },
  {
    id: "rev-5",
    author: "Ania M.",
    stars: 5,
    text: "Duży plus za szerokie menu wegetariańskie z Tofu. Tom kha z tofu to mistrzostwo świata, kokosowo-kwaśny smak wyśmienity.",
    date: "2 tygodnie temu",
    source: "Google Maps"
  }
];

export const menuCategories: MenuCategory[] = [
  {
    id: "przystawki",
    name: "🥟 Przystawki",
    icon: "Dumpling",
    desc: "Chrupiące sajgonki wietnamskie (nem) przygotowywane na bazie tradycyjnego farszu.",
    items: [
      { id: 1, name: "Nem sajgonki mini me-ge (10 szt.)", price: 15 },
      { id: 2, name: "Nem sajgonki z krewetkami (5 szt.)", price: 15 },
      { id: 3, name: "NEM sajgonki z surówką", price: 15 },
      { id: 4, name: "Nem sajgonki z ryżem i surówką", price: 17 },
      { id: 5, name: "Nem sajgonki z ryżem smażonym", price: 20 },
      { id: 6, name: "Nem sajgonki z frytkami", price: 20 },
      { id: 7, name: "Nem sajgonki z makaronem chińskim", price: 20 }
    ]
  },
  {
    id: "zupy",
    name: "🍜 Zupy & PHO",
    icon: "Soup",
    desc: "Aromatyczne wywary, tradycyjne wietnamskie PHO oraz sycące azjatyckie Rameny (Porcje 500ml - 1L).",
    items: [
      { id: 8, name: "Rosół z mak. sojowym i kurczakiem (500ml)", price: 16 },
      { id: 9, name: "Po chińsku (500ml)", price: 16 },
      { id: 10, name: "Tom kha z kurczakiem i mlekiem kokosowym (500ml)", price: 18 },
      { id: 11, name: "Tom kha z krewetkami i mlekiem kokosowym (500ml)", price: 20 },
      { id: 12, name: "Tom yum z kurczakiem i mlekiem kokosowym (500ml)", price: 18 },
      { id: 13, name: "Tom yum z krewetkami i mlekiem kokosowym (500ml)", price: 20 },
      { id: 14, name: "PHO z kurczakiem (1L)", price: 28 },
      { id: 15, name: "PHO z wołowiną (1L)", price: 30 },
      { id: 16, name: "Ramen z kurczakiem (1L)", price: 30 },
      { id: 17, name: "Ramen z wołowiną (1L)", price: 32 }
    ]
  },
  {
    id: "kurczak",
    name: "🍗 Kurczak",
    icon: "Chicken",
    desc: "Dania z kurczakiem podawane w zestawie z ryżem i surówką (ok. 800g).",
    items: [
      { id: 18, name: "Kurczak z warzywami", price: 29 },
      { id: 19, name: "Kurczak w 5-ciu smakach", price: 29 },
      { id: 20, name: "Kurczak pikantny", price: 29, spicy: 1 },
      { id: 21, name: "Kurczak słodko-kwaśny", price: 29 },
      { id: 22, name: "Kurczak z limonkami", price: 29, spicy: 1 },
      { id: 23, name: "Kurczak w sosie tajskim", price: 29 },
      { id: 24, name: "Kurczak w sosie teriyaki", price: 30 },
      { id: 25, name: "Kurczak orientalny", price: 30 },
      { id: 26, name: "Kurczak po seczuańsku", price: 29 },
      { id: 27, name: "Kurczak w sosie czosnkowo-maślanym", price: 31 },
      { id: 28, name: "Kurczak po chińsku", price: 29 },
      { id: 29, name: "Kurczak LUK LAK", price: 32 },
      { id: 30, name: "Kurczak na gorącym półmisku", price: 32, hot: true }
    ]
  },
  {
    id: "filet",
    name: "🍖 Filet chrupiący",
    icon: "Bone",
    desc: "Chrupiący filet z kurczaka lub kurczak w cieście, podawany z ryżem i surówką (ok. 800g).",
    items: [
      { id: 31, name: "Filet z warzywami", price: 30 },
      { id: 32, name: "Filet w 5-ciu smakach", price: 30 },
      { id: 33, name: "Filet w sosie teriyaki", price: 30 },
      { id: 34, name: "Filet pikantny", price: 30, spicy: 1 },
      { id: 35, name: "Filet słodko-kwaśny", price: 30 },
      { id: 36, name: "Filet w sosie curry", price: 32 }
    ]
  },
  {
    id: "udko",
    name: "🦵 Udko",
    icon: "Drumstick",
    desc: "Soczyste porcje z udka kurczaka z ryżem i domową surówką (ok. 800g).",
    items: [
      { id: 37, name: "Udko z warzywami", price: 29 },
      { id: 38, name: "Udko w 5-ciu smakach", price: 29 },
      { id: 39, name: "Udko pikantne", price: 29, spicy: 1 },
      { id: 40, name: "Udko w sosie teriyaki", price: 29 },
      { id: 41, name: "Udko słodko-kwaśne", price: 29 },
      { id: 42, name: "Udko po chińsku", price: 25 },
      { id: 43, name: "Udko na gorącym półmisku", price: 29, hot: true }
    ]
  },
  {
    id: "wieprz",
    name: "🥩 Wieprzowina",
    icon: "Ham",
    desc: "Klasyczne, pożywne dania wieprzowe w unikalnych orientalnych aranżacjach (z ryżem i surówką, ok. 800g).",
    items: [
      { id: 44, name: "Wieprzowina z warzywami", price: 29 },
      { id: 45, name: "Wieprzowina w 5-ciu smakach", price: 29 },
      { id: 46, name: "Wieprzowina pikantna", price: 29, spicy: 1 },
      { id: 47, name: "Wieprzowina w sosie teriyaki", price: 30 },
      { id: 48, name: "Wieprzowina słodko-kwaśna", price: 29 },
      { id: 49, name: "Wieprzowina po chińsku", price: 29 },
      { id: 50, name: "Wieprzowina orientalna", price: 30 },
      { id: 51, name: "Wieprzowina po tajlandzku", price: 29 },
      { id: 52, name: "Wieprzowina po seczuańsku", price: 29 },
      { id: 53, name: "Wieprzowina w sosie czosnkowo-maślanym", price: 31 },
      { id: 54, name: "Wieprzowina na gorącym półmisku", price: 32, hot: true }
    ]
  },
  {
    id: "wolowina",
    name: "🥩 Wołowina",
    icon: "Steak",
    desc: "Wysokiej jakości, krucha wołowina duszona z warzywami lub w pikantnych sosach (z ryżem i surówką, ok. 800g).",
    items: [
      { id: 55, name: "Wołowina z warzywami", price: 35 },
      { id: 56, name: "Wołowina w 5-ciu smakach", price: 35 },
      { id: 57, name: "Wołowina pikantna", price: 35, spicy: 1 },
      { id: 58, name: "Wołowina w sosie teriyaki", price: 37 },
      { id: 59, name: "Wołowina słodko-kwaśna", price: 33 },
      { id: 60, name: "Wołowina po chińsku", price: 35 },
      { id: 61, name: "Wołowina orientalna", price: 35 },
      { id: 62, name: "Wołowina po tajlandzku", price: 36 },
      { id: 63, name: "Wołowina po seczuańsku", price: 35 },
      { id: 64, name: "Wołowina w sosie czosnkowo-maślanym", price: 37 },
      { id: 65, name: "Wołowina LUK LAK", price: 40 },
      { id: 66, name: "Wołowina na gorącym półmisku", price: 38, hot: true }
    ]
  },
  {
    id: "kaczka",
    name: "🦆 Kaczka",
    icon: "Duck",
    desc: "Chrupiąca i soczysta kaczka w stylu orientalnym, podawana z ryżem i surówką (ok. 800g).",
    items: [
      { id: 67, name: "Kaczka z warzywami", price: 38 },
      { id: 68, name: "Kaczka w 5-ciu smakach", price: 38 },
      { id: 69, name: "Kaczka pikantna", price: 38, spicy: 1 },
      { id: 70, name: "Kaczka w sosie teriyaki", price: 40 },
      { id: 71, name: "Kaczka słodko-kwaśna", price: 38 },
      { id: 72, name: "Kaczka po chińsku", price: 38 },
      { id: 73, name: "Kaczka na gorącym półmisku", price: 40, hot: true }
    ]
  },
  {
    id: "krewetki",
    name: "🦐 Krewetki",
    icon: "Shrimp",
    desc: "Wyśmienite, duże krewetki tygrysie (zestaw 6 sztuk) w sosach lub chrupiącym cieście.",
    items: [
      { id: 74, name: "Krewetki z warzywami", price: 35 },
      { id: 75, name: "Krewetki w 5-ciu smakach", price: 35 },
      { id: 76, name: "Krewetki pikantne", price: 35, spicy: 1 },
      { id: 77, name: "Krewetki w sosie teriyaki", price: 37 },
      { id: 78, name: "Krewetki słodko-kwaśne", price: 35 },
      { id: 79, name: "Krewetki po tajlandzku", price: 35 },
      { id: 80, name: "Krewetki orientalne", price: 35 },
      { id: 81, name: "Krewetki w sosie czosnkowo-maślanym", price: 38 },
      { id: 82, name: "Krewetki chrupiące", price: 36 },
      { id: 83, name: "Krewetki na gorącym półmisku", price: 38, hot: true }
    ]
  },
  {
    id: "ryba",
    name: "🐟 Ryba",
    icon: "Fish",
    desc: "Chrupiące kawałki ryby w sosach do wyboru z ryżem i surówką (ok. 800g).",
    items: [
      { id: 84, name: "Ryba z warzywami", price: 29 },
      { id: 85, name: "Ryba w 5-ciu smakach", price: 29 },
      { id: 86, name: "Ryba pikantna", price: 29, spicy: 1 },
      { id: 87, name: "Ryba w sosie teriyaki", price: 29 },
      { id: 88, name: "Ryba słodko-kwaśna", price: 29 },
      { id: 89, name: "Ryba na gorącym półmisku", price: 32, hot: true }
    ]
  },
  {
    id: "golonka",
    name: "🍖 Golonka",
    icon: "Bone",
    desc: "Tradycyjna, delikatna golonka w azjatyckiej marynacie, przyprawach i sosach (ok. 800g).",
    items: [
      { id: 90, name: "Golonka z warzywami", price: 29 },
      { id: 91, name: "Golonka w 5-ciu smakach", price: 29 },
      { id: 92, name: "Golonka pikantna", price: 29, spicy: 1 },
      { id: 93, name: "Golonka słodko-kwaśna", price: 29 },
      { id: 94, name: "Golonka orientalna", price: 29 },
      { id: 95, name: "Golonka w sosie czosnkowo-maślanym", price: 31 },
      { id: 96, name: "Golonka po tajlandzku", price: 30 },
      { id: 97, name: "Golonka po seczuańsku", price: 29 }
    ]
  },
  {
    id: "tofu",
    name: "🌱 Tofu",
    icon: "Salad",
    desc: "W 100% roślinne i bogate w białko propozycje z tofu dla osób unikających mięsa.",
    items: [
      { id: 98, name: "Tofu z warzywami", price: 25, vegetarian: true },
      { id: 99, name: "Tofu w 5-ciu smakach", price: 25, vegetarian: true },
      { id: 100, name: "Tofu w sosie teriyaki", price: 25, vegetarian: true },
      { id: 101, name: "Tofu słodko-kwaśne", price: 25, vegetarian: true },
      { id: 102, name: "Tofu orientalne", price: 25, vegetarian: true },
      { id: 103, name: "Tofu pikantne", price: 25, vegetarian: true, spicy: 1 },
      { id: 104, name: "Tofu po chińsku", price: 25, vegetarian: true }
    ]
  },
  {
    id: "udon",
    name: "🍝 Udon",
    icon: "Spaghetti",
    desc: "Gruby japoński makaron pszenny z woka, podsmażony z sosem sojowym, warzywami i wybranym dodatkiem.",
    items: [
      { id: 132, name: "Udon z warzywami", price: 25, vegetarian: true },
      { id: 133, name: "Udon z tofu", price: 27, vegetarian: true },
      { id: 134, name: "Udon z kurczakiem", price: 30 },
      { id: 135, name: "Udon z wieprzowiną", price: 30 },
      { id: 136, name: "Udon z wołowiną", price: 30 },
      { id: 137, name: "Udon z krewetkami", price: 36 }
    ]
  },
  {
    id: "curry",
    name: "🍛 Curry tajskie",
    icon: "Curry",
    desc: "Tradycyjne autentyczne curry tajskie z warzywami i mlekiem kokosowym. Wybierz kolor: Czerwone, Zielone, Żółte lub Fioletowe.",
    items: [
      { id: 138, name: "Curry z warzywami", price: 25, vegetarian: true, spicy: 1 },
      { id: 139, name: "Curry z tofu", price: 28, vegetarian: true, spicy: 2 },
      { id: 140, name: "Curry z kurczakiem", price: 30, spicy: 2 },
      { id: 141, name: "Curry z wieprzowiną", price: 30, spicy: 2 },
      { id: 142, name: "Curry z wołowiną", price: 36, spicy: 3 },
      { id: 143, name: "Curry z krewetkami", price: 36, spicy: 2 },
      { id: 144, name: "Curry z kaczką", price: 40, spicy: 3 }
    ]
  }
];
