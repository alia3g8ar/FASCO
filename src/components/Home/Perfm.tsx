import React from "react";

// لوگوها
import logo1 from "../../../public/assets/performance/icon1.png";
import logo2 from "../../../public/assets/performance/icon.png";
import logo3 from "../../../public/assets/performance/Vector.png";
import logo4 from "../../../public/assets/performance/suport.png";
import Image, { StaticImageData } from "next/image";

interface PerformanceItem {
  title: string;
  des: string;
  logo: StaticImageData;
}

const Perfm: React.FC = () => {
  const performance: PerformanceItem[] = [
    {
      title: "کیفیت بالا",
      des: "ساخته شده از بهترین متریال‌ها",
      logo: logo1,
    },
    {
      title: "ضمانت محصول",
      des: "بیش از 2 سال",
      logo: logo2,
    },
    {
      title: "ارسال رایگان",
      des: "سفارش بالای 150 دلار",
      logo: logo3,
    },
    {
      title: "پشتیبانی 24/7",
      des: "پشتیبانی اختصاصی",
      logo: logo4,
    },
  ];

  return (
    <div className="duration-300 border-b-bla py-[25px] lg:py-[40px]">
      <div className="container mx-auto gap-6 px-4 text-black">
        <div className="flex flex-wrap sm:flex-row flex-col justify-between gap-4 ">
          {performance.map((item, index) => (
            <div
              key={index}
              className="duration-300 flex flex-row gap-3 items-center"
            >
              <div>
                <Image
                  src={item.logo}
                  alt={item.title}
                  className="w-[30px] sm:w-[25px] lg:w-[35px]"
                />
              </div>
              <div className="flex flex-col text-[#484848]">
                <h1 className="text-[16px] sm:text-[12px] md:text-[15px] font-medium">
                  {item.title}
                </h1>
                <p className="text-[13px] sm:text-[10px] md:text-[12px]">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfm;
