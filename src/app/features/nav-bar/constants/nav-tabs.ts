export const navTabs = [
  {
    url: "/tours",
    translateKey: "tours_tours",
    canActive: "ROLE_VISITOR"
  },
  {
    url: "/guides",
    translateKey: "guide_guides",
    canActive: "ROLE_ADMIN"
  },
  {
    url: "/exhibits",
    translateKey: "exhibits_naming",
    canActive: null
  },
  {
    url: "/visitors",
    translateKey: "visitor_visitors",
    canActive: "ROLE_GUIDE"
  },
  {
    url: "/about",
    translateKey: "navbar_aboutUs",
    canActive: null
  }
];
