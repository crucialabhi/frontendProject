import { useEffect, useState } from "react";
import HeroSection from "./heroSection";

const object = [
  {
    id: 1,
    title: "Welcome to Shama Glass Art",
    description: "Explore our exquisite collection of handcrafted glass art pieces.",
    imageUrl:
      "https://imgs.search.brave.com/VG1xcfOAdIpCTY1BaasYLrbT8kcJJm572R8-hR4xRb8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWlzd2luZG93cy5j/b20vYWlzd2luZG93/c2Ntcy91cGxvYWRz/L2Jsb2cvYmxvZ190/aHVtYl8xNzQ1NTcy/MTYyLmpwZw",
  },
  {
    id: 2,
    title: "Timeless Glass Creations",
    description: "Each piece tells a story crafted in vibrant colors and form.",
    imageUrl: "https://imgs.search.brave.com/ulqqza4Ej8BtQfcdQmCldvhY7zlKkzEZskh0RxYnYIY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU4LzQ4/L2JhLzU4NDhiYTYz/MjQzM2ZlODQ3NTVj/MzY2NjhiZDYzZTJm/LmpwZw",
  },
  {
    id: 3,
    title: "Elegant Glass Sculptures",
    description: "Perfect for home decor or gifting with artistic flair.",
    imageUrl: "https://source.unsplash.com/800x600/?glass,handmade",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % object.length);
    }, 10000); // change every 1 second

    return () => clearInterval(intervalId); // clean up on unmount
  }, []);

  const currentItem = object[index];

  return (
    <div>
      <HeroSection
        title={currentItem.title}
        description={currentItem.description}
        imageUrl={currentItem.imageUrl}
      />
    </div>
  );
};

export default Home;
