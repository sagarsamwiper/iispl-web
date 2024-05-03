import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "IISPL offers Advanced Banking Technology",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "",
      image: "/images/blog/author-01.png",
      designation: "",
    },
    tags: ["Core banking"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: " DBTL - Direct Benefit Transfer of LPG to Bank Accounts",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Core Banking"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: " APBS – Aadhaar Payment Bridge System",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["NACH Products"],
    publishDate: "2024",
  },
];
export default blogData;
