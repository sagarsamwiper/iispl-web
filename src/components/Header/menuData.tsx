import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Solutions",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
    // {
    //   id: 4,
    //   title: "Achivements",
    //   newTab: false,
    //   submenu: [
    //     {
    //       id: 41,
    //       title: "Vision Mission",
    //       path: "/vision",
    //       newTab: false,
    //     },
    //   ],
    // },
];
export default menuData;
