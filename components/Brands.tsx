// components/Brands.tsx
import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "CHANEL", src: "/images/brands/chanel.png" },
    { name: "LOUIS VUITTON", src: "/images/brands/louis-vuitton.png" },
    { name: "PRADA", src: "/images/brands/prada.png" },
    { name: "Calvin Klein", src: "/images/brands/calvin-klein.png" },
    { name: "DENIM", src: "/images/brands/denim.png" },
  ];

  return (
    <section className="w-full py-6 bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-16">
        {brands.map((brand) => (
          <div key={brand.name} className=" flex items-center justify-center">
            <Image
              src={brand.src}
              alt={brand.name}
              width={170}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
