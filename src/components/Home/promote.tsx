// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Left Image */}
        <div className="hidden relative w-full h-[300px] md:h-[730px] rounded-lg overflow-hidden bg-[#E0E0E0] md:flex items-end justify-center">
          <Image
            src="/assets/promote/man2.png"
            alt="Left Model"
            width={400}
            height={600}
            className="object-contain object-bottom scale-90 md:scale-100"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col gap-6 items-center justify-between">
          {/* Top Image */}
          <div className="relative w-full max-w-[370px] h-[120px] md:h-[150px] rounded-lg overflow-hidden bg-[#E0E0E0]">
            <Image
              src="/assets/promote/grouptop.png"
              alt="Top Models"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-center px-2">
            <h2 className="text-3xl md:text-6xl lg:text-[80px] font-extrabold tracking-wide text-[#484848] leading-none">
              ULTIMATE
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-[155px] font-extrabold text-gray-800 leading-none">
              SALE
            </h1>
            <p className="text-lg md:text-xl lg:text-[30px] text-gray-500 mt-2">
              NEW COLLECTION
            </p>
            <Link
              href="/shop"
              className="mt-6 w-[160px] md:w-[207px] h-[48px] md:h-[56px] bg-black text-white px-6 py-2 rounded-lg text-base font-medium hover:scale-105 transition flex items-center justify-center mx-auto"
            >
              SHOP NOW
            </Link>
          </div>

          {/* Bottom Image */}
          <div className="relative w-full max-w-[370px] h-[120px] md:h-[150px] rounded-lg overflow-hidden bg-[#E0E0E0]">
            <Image
              src="/assets/promote/groupbot.png"
              alt="Bottom Models"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden  relative w-full h-[300px] md:h-[730px] rounded-lg overflow-hidden bg-[#E0E0E0] md:flex items-end justify-center">
          <Image
            src="/assets/promote/man.png"
            alt="Right Model"
            fill
            className="object-contain object-bottom scale-90 md:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
