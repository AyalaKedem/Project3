export type BranchProp = {
  city: string;
  street: string;
  tel: string;
  opening: {
    all: string;
    fri: string;
    sut: string;
  };
  events: string;
  // id: string;
};

export type BranchesProp = {
  branches: BranchProp[];
};

type CategoryItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  vegan: boolean;
  vegetarian: boolean;
  ordered: boolean;
};

export type MenuItemProp = {
  breakfast: categoryItem[];
  starters: categoryItem[];
  sandwiches: categoryItem[];
  salads: categoryItem[];
  italian: categoryItem[];
  asian: categoryItem[];
  desserts: categoryItem[];
  softDrink: categoryItem[];
  coffee: categoryItem[];
};

export type MainMenuProp = {
  text: string;
  endpoint: string;
  img: string;
};

export type SocialNetArrProp = {
  icon: JSX.Element;
  link: string;
};

export type GiftCard = {
  id: string;
  sum: number;
  to: string;
  congrat: string;
  from: string;
};

type initialStateGift = {
  giftCard: GiftCard[];
};

type initialStateMain = {
  mainMenu: MainMenuProp;
};

type InitialStateType = {
  menuCategory: CategoryItem[];
};

export type SumProp = { prices: CategoryItem[], giftCard:GiftCard[] };
