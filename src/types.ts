export interface MenuItem {
  id: number;
  name: string;
  price: number;
  vegetarian?: boolean;
  spicy?: number; // spicy level (0-3)
  hot?: boolean; // hot platter (false or true)
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  desc?: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  stars: number;
  text: string;
  date: string;
  source: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  desc: string;
}
