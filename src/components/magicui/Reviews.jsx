import React from "react";
import { Cn } from "../magicui/lib/Utils";
import Marquee from "./ui-components/MarqueeScroll";


const reviews = [
  {
    name: "Marc",
    username: "@Marc",
    body: "Awaken m'a complètement transformée. L'énergie ici est incroyable. Merci !",
    img: "./assets/pic/pic1.jpg",
  },
  {
    name: "Christelle",
    username: "@Christelle",
    body: "Une expérience revitalisante à chaque séance. Je recommande vivement Awaken.",
    img: "./assets/pic/pic2.jpg",
  },
  {
    name: "Sophie",
    username: "@sophie_relax",
    body: "Le meilleur endroit pour se reconnecter avec soi-même. Atmosphère apaisante garantie.",
    img: "./assets/pic/pic3.jpg",
  },
  {
    name: "Fatou",
    username: "@Fatounelle",
    body: "Un studio de yoga exceptionnel. Les instructeurs sont très professionnels et attentionnés.",
    img: "./assets/pic/pic4.jpg",
  },
  {
    name: "Arnaud",
    username: "@Arnaud_Tengue",
    body: "Depuis que j'ai découvert Awaken, je me sens plus en paix et équilibrée.",
    img: "./assets/pic/pic5.jpg",
  },
  {
    name: "Amina",
    username: "@Amina_237",
    body: "Chaque session chez Awaken est une nouvelle découverte. Je suis fan !",
    img: "./assets/pic/pic6.jpg",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={Cn(
        "relative lg:w-[25vw] h-fit  w-[300px] cursor-pointer overflow-hidden rounded-3xl border p-10 border-gray-950/[.1] bg-white shadow-xl hover:bg-purple-200 hover:-translate-y-2 ease-in transition-all",

      )}
    >
      <div className="flex flex-row items-center gap-4 mb-8">
        <img className="rounded-full w-[60px] h-[60px] object-cover "  alt="" src={img} />
        <div className="flex flex-col ">
          <figcaption className="text-lg font-bold dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xl">{body}</blockquote>
    </figure>
  );
};

 function MarqueeDemo() {
  return (
    <div className="relative flex h-[auto] w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
   </div>
  );
}

export default MarqueeDemo;