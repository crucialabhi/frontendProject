import { useState } from "react";
import { ServiceModal } from "./detailsServiceModal";
import aluminiumImg from "../../assets/aluminiumSection.png";
import GlassDesigning from "../../assets/GlassDesigning.png";
import GlassFoasting from "../../assets/GlassFoasting.png";
import GlassFoastinging from "../../assets/GlassFoastinging.png";
import WindowMakingg from "../../assets/WindowMakingg.png";




const services = [
  {
    title: "Aluminium Sections",
    brief: "Premium aluminium frames engineered for durability and modern aesthetics.",
    detail:
      "Our aluminium sections are designed for strength, versatility, and a sleek finish—perfect for modern construction. Available in various profiles, they are corrosion-resistant and suitable for both indoor and outdoor applications.\n\n**Benefits:**\n- Lightweight yet robust\n- Sleek, modern look\n- Low maintenance\n\n**Use Cases:**\n- Stylish window and door frames\n- Office partition frameworks\n- Contemporary architecture",
    image: aluminiumImg,
  },
  {
    title: "Window Making",
    brief: "Bespoke windows crafted for elegance, efficiency, and security.",
    detail:
      "We create customized windows that blend beauty with function. From energy-saving glass to stylish aluminium framing, our designs enhance both comfort and property value.\n\n**Benefits:**\n- Improves property appearance\n- Reduces noise and heat\n- Enhances safety\n\n**Use Cases:**\n- Luxury homes\n- Retail spaces\n- Office buildings",
    image: WindowMakingg,
  },
  {
    title: "Glass Partitioning",
    brief: "Seamless glass partitions to define space with style.",
    detail:
      "Transform open areas into structured spaces without compromising natural light. Our glass partitions offer a minimalist and elegant solution for workspaces and interiors.\n\n**Benefits:**\n- Enhances open visibility\n- Easy to maintain\n- Professional look\n\n**Use Cases:**\n- Modern offices\n- Lounges and cafes\n- Showrooms",
    image: GlassFoastinging,
  },
  {
    title: "Glass Foasting",
    brief: "Stylish frosted glass that ensures privacy while glowing with light.",
    detail:
      "Frosted glass (foasting) is ideal for privacy with style. Available in custom patterns, it diffuses light beautifully while keeping spaces confidential and elegant.\n\n**Benefits:**\n- Adds privacy with design\n- Softens harsh lighting\n- Great for branding\n\n**Use Cases:**\n- Meeting rooms\n- Bathroom glass\n- Front offices",
    image:GlassFoasting,
  },
  {
    title: "Glass Designing",
    brief: "Exquisite glass art that elevates any space.",
    detail:
      "Unleash creativity with our custom glass designs—etched, stained, and laser-patterned. Ideal for making a statement or enhancing interior appeal.\n\n**Benefits:**\n- Custom-designed visuals\n- Long-lasting prints\n- Adds luxury to décor\n\n**Use Cases:**\n- Designer entrances\n- Lobby centerpieces\n- Feature walls",
    image: GlassDesigning,
  },
];


export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

 return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-[#16364D] mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-[#16364D] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-[1.01]"
            onClick={() => setSelectedService(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg mb-4 h-40 w-full object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#16364D]">{service.title}</h3>
            <p className="text-gray-700">{service.brief}</p>
          </div>
        ))}
      </div>
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
