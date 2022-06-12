type Theme = {
  [key: string]: string;
};

export type ThemeNames = "light" | "dark" | "blue";

type Themes = {
  list: ThemeNames[];
  light: Theme;
  dark: Theme;
  blue: Theme;
  universal: Theme;
};

export const themes: Themes = {
  list: ["light", "dark", "blue"],
  light: {
    background: "229, 229, 229",
    link: "rgb(0, 112, 231)",
    linkHover: "rgb(227, 249, 255)",
    linkText: "var(--link)",
    dropShadow: "rgb(136, 136, 136)",
    headerOpacity: "0.8",
    headers: "rgb(0, 0, 0)",
    text: "rgb(42, 42, 42)",
    altText: "rgb(245, 245, 245)",
    article: "rgb(255, 255, 255)",
    GitHub: "rgb(13, 13, 13)",
    LinkedIn: "rgb(0, 0, 0)",
    ratingOn: "rgb(200, 125, 0)",
    ratingOff: "rgb(232, 232, 232)",
    menu: "var(--link)",
    menuHover: "rgb(15, 76, 117)",
    menuText: "rgb(255, 255, 255)",
    loading: "rgba(255, 255, 255, 0.7)"
  },
  dark: {
    background: "32, 33, 37",
    link: "rgb(0, 171, 154)",
    linkHover: "rgb(var(--background))",
    linkText: "var(--link)",
    dropShadow: "rgb(24, 24, 24)",
    headerOpacity: "0",
    headers: "rgb(189, 250, 225)",
    text: "rgb(245, 245, 245)",
    altText: "rgb(42, 42, 42)",
    article: "rgb(47, 47, 47)",
    GitHub: "rgb(255, 255, 255)",
    LinkedIn: "rgb(255, 255, 255)",
    ratingOn: "rgb(255, 200, 0)",
    ratingOff: "rgb(32, 32, 32)",
    menu: "var(--link)",
    menuHover: "hwb(180 0% 67%)",
    menuText: "rgb(255, 255, 255)",
    loading: "rgba(255, 255, 255, 0.2)"
  },
  blue: {
    background: "32, 64, 103",
    link: "rgb(23, 180, 247)",
    linkHover: "rgb(var(--background))",
    linkText: "var(--link)",
    dropShadow: "rgb(24, 24, 24)",
    headerOpacity: "0",
    headers: "rgb(187, 225, 250)",
    text: "rgb(245, 245, 245)",
    altText: "rgb(42, 42, 42)",
    article: "rgb(41, 62, 86)",
    GitHub: "rgb(255, 255, 255)",
    LinkedIn: "rgb(255, 255, 255)",
    ratingOn: "rgb(255, 200, 0)",
    ratingOff: "rgb(16, 40, 72)",
    menu: "rgb(8, 158, 222)",
    menuHover: "rgb(35, 66, 135)",
    menuText: "rgb(255, 255, 255)",
    loading: "rgba(255, 255, 255, 0.2)"
  },
  universal: {
    darkBackground: "rgb(34, 38, 41)",
    blogHeaderShade: "rgb(24, 24, 24)",
    blogHeaderText: "rgb(245, 245, 245)",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowHover: "rgba(0, 0, 0, 0.4)",
    PayPal1: "rgb(0, 48, 135)",
    PayPal2: "rgb(0, 156, 222)",
    Stripe: "rgb(0, 123, 255)"
    // @mixin universal-theme {
    //   @supports (not (backdrop-filter: blur(0px))) {
    //     --headerOpacity: 0.9 !important;
    //   }
    // }
  }
};

export const sm = (styles: string) => {
  return `
    @media (max-width: 640px) {
      ${styles}
    }
  `;
};

export const md = (styles: string) => {
  return `
    @media (max-width: 768px) {
      ${styles}
    }
  `;
};

export const lg = (styles: string) => {
  return `
    @media (max-width: 1024px) {
      ${styles}
    }
  `;
};

export const xl = (styles: string) => {
  return `
    @media (max-width: 1280px) {
      ${styles}
    }
  `;
};

export const xxl = (styles: string) => {
  return `
    @media (max-width: 1600px) {
      ${styles}
    }
  `;
};
