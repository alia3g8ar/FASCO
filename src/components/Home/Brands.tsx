import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "CHANEL", src: "/assets/logo/chanel.png" },
    { name: "LOUIS VUITTON", src: "/assets/logo/louis_vuitton.png" },
    { name: "PRADA", src: "/assets/logo/prada.png" },
    { name: "Calvin Klein", src: "/assets/logo/calvin_klein.png" },
    { name: "DENIM", src: "/assets/logo/denim.png" },
  ];

  return (
    <section className="w-full py-14 bg-white">
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
