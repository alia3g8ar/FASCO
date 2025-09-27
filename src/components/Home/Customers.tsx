import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

interface Customer {
  id: number;
  name: string;
  img: string;
}

const Customers: React.FC = () => {
  const customers: Customer[] = [
    { id: 1, name: "علی احمدی", img: "/assets/Contact/ic1.png" },
    { id: 2, name: "فاطمه رضایی", img: "/assets/Contact/ic2.png" },
    { id: 3, name: "ثنا حسینی", img: "/assets/Contact/ic3.png" },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" from-[#ededed] bg-gray-100 py-[100px] text-black">
      <div className="flex flex-col">
        <h1
          className="font-volkhov duration-300
          text-[25px]
          sm:text-[40px] text-[#484848] text-center"
        >
          نظرات مشتریان ما
        </h1>
        <p
          className="text-[#8A8A8A] text-center
          text-[13px]
          sm:text-[16px]"
        >
          ببینید مشتریان عزیز ما درباره محصولاتمان چه میگویند
        </p>
        <div className="relative flex items-center justify-center mt-[50px] h-[500px] sm:h-[400px] overflow-hidden">
          {customers.map((item, index) => {
            let offset = index - activeIndex;
            if (offset < -1) offset += customers.length;
            if (offset > 1) offset -= customers.length;
            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            return (
              <div
                key={item.id}
                className={`
                    absolute bg-white
                    w-full flex-col
                    sm:w-[600px] sm:flex-row
                    lg:w-[850px] flex  items-center justify-center px-[50px] sm:gap-[50px] py-[50px] sm:py-0
                    shadow-2xl transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "z-10 sm:h-[300px] lg:h-[400px] scale-100 opacity-100"
                        : ""
                    }
                    ${
                      isLeft
                        ? "z-0 sm:h-[300px] scale-90 opacity-70 -translate-x-[300px]"
                        : ""
                    }
                    ${
                      isRight
                        ? "z-0 sm:h-[300px] scale-90 opacity-70 translate-x-[300px]"
                        : ""
                    }
                    ${
                      !isActive && !isLeft && !isRight
                        ? "opacity-0 scale-90"
                        : ""
                    }
                  `}
              >
                <div className="duration-300 min-w-[150px] lg:min-w-[300px] flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex flex-col">
                  <p
                    className="mt-[20px] duration-300
                    text-[12px]
                    sm:text-[14px]
                    lg:text-[16px]"
                  >
                    &ldquo;از خریدم پشیمان نیستم. میخواهم شخصاً از شما برای
                    محصول فوقالعادهتان تشکر کنم. واقعاً عالی بود!&rdquo;
                  </p>
                  <div className="flex flex-row gap-1 text-yellow-400 mt-[40px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <span className="duration-300 w-[200px] lg:w-[300px] h-[1px] bg-[#484848] mt-[30px]"></span>
                  <h1
                    className="font-volkhov duration-300
                    text-[20px]
                    lg:text-[30px] text-[#484848] mt-[25px]"
                  >
                    {item.name}
                  </h1>
                  <h3
                    className="lg:text-[10px] duration-300
                    text-[9px]
                    text-[#484848]"
                  >
                    مشتری عزیز
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-row items-center justify-center mt-[40px] gap-4">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
          >
            <ChevronRight />
          </button>
          <button
            onClick={handleNext}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
          >
            <ChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;
