interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeroSection = ({ title, description, imageUrl }: HeroSectionProps) => {
  return (
    <div className="container mx-auto flex flex-col md:mt-5  md:flex-row items-center justify-center gap-12 ">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={imageUrl}
          alt="Glass Art"
          className="w-[280px] sm:w-[300px] md:w-[380px] lg:w-[420px] h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-500  transition">
          Services
        </button>
      </div>
    </div>
  );
};
export default HeroSection;

<section className="w-full min-h-screen flex items-center justify-center bg-gray-50 ">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="https://imgs.search.brave.com/VG1xcfOAdIpCTY1BaasYLrbT8kcJJm572R8-hR4xRb8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWlzd2luZG93cy5j/b20vYWlzd2luZG93/c2Ntcy91cGxvYWRz/L2Jsb2cvYmxvZ190/aHVtYl8xNzQ1NTcy/MTYyLmpwZw"
        alt="Glass Art"
        className="w-[80%] max-w-md rounded-lg shadow-lg"
      />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to Shama Glass Art
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Explore our exquisite collection of handcrafted glass art pieces.
      </p>
      <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Shop Now
      </button>
    </div>
  </div>
</section>;
