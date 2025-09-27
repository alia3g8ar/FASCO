// components/HeroCarousel.tsx
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// تصاویر از public
const w1 = "/assets/deals/w1.png";
const w2 = "/assets/deals/w2.png";
const w3 = "/assets/deals/w3.png";

interface Slide {
  id: number;
  image: string;
  title: string;
  discount: string;
}

const initialSlides: Slide[] = [
  { id: 1, image: w1, title: "حراج بهاره", discount: "۳۰٪ تخفیف" },
  { id: 2, image: w2, title: "مجموعه تابستانه", discount: "جدید" },
  { id: 3, image: w3, title: "حال و هوای پاییزی", discount: "تا ۵۰٪" },
];

export default function HeroCarousel() {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [direction, setDirection] = useState<number>(0);

  const nextSlide = () => {
    setDirection(1);
    setSlides((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const prevSlide = () => {
    setDirection(-1);
    setSlides((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  const [counter, setCounter] = useState([
    { type: "روز", value: 0 },
    { type: "ساعت", value: 0 },
    { type: "دقیقه", value: 0 },
    { type: "ثانیه", value: 0 },
  ]);

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const endOfMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59
      );
      const timeDiff = endOfMonth.getTime() - now.getTime();

      const days = Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
      const hours = Math.max(
        0,
        Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = Math.max(
        0,
        Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = Math.max(0, Math.floor((timeDiff % (1000 * 60)) / 1000));

      setCounter([
        { type: "روز", value: days },
        { type: "ساعت", value: hours },
        { type: "دقیقه", value: minutes },
        { type: "ثانیه", value: seconds },
      ]);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      dir="rtl"
      className="flex flex-col md:flex-row w-full gap-4 my-10 py-6 px-4 md:px-10"
    >
      {/* متن سمت چپ */}
      <div className="w-full md:w-4/10 flex flex-col items-center md:items-start">
        <h1 className="font-volkhov text-[#484848] text-2xl md:text-3xl lg:text-4xl">
          تخفیف‌های ماه
        </h1>
        <p className="text-[#8A8A8A] mt-4 text-sm md:text-base w-full max-w-[350px] text-center md:text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
        </p>
        <button className="w-40 md:w-48 py-2 bg-black text-white rounded-lg mt-4 md:mt-6 text-sm md:text-base">
          خرید کنید
        </button>
        <div className="font-semibold text-lg md:text-xl lg:text-2xl mt-8 md:mt-10 text-[#484848] text-center md:text-left">
          عجله کنید، قبل از اینکه دیر شود!
        </div>
        <div className="flex gap-2 md:gap-4 mt-4 justify-center md:justify-start flex-row-reverse">
          {counter.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-black drop-shadow-xl rounded-lg flex items-center justify-center text-base md:text-lg">
                {item.value < 10 ? `0${item.value}` : item.value}
              </div>
              <div className="text-xs md:text-sm text-black">{item.type}</div>
            </div>
          ))}
        </div>
      </div>

      {/* کاروسل سمت راست */}
      <div className="w-full md:w-6/10 flex flex-col items-center justify-center mt-6 md:mt-0 text-black">
        <div className="relative w-full max-w-[900px] h-[300px] md:h-[350px] lg:h-[450px] flex">
          {/* تصاویر کوچک (الان سمت چپ) */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-[40%] justify-center items-center">
            {slides.slice(1).map((slide) => (
              <div
                key={slide.id}
                className="w-[120px] lg:w-[180px] h-[160px] lg:h-[250px] opacity-60 hover:opacity-100 transition duration-300"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={180}
                  height={250}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>

          {/* دکمه‌ها وسط بین تصاویر */}
          <div className="flex flex-col justify-center items-center px-2">
            <button
              onClick={prevSlide}
              className="bg-white text-black rounded-full p-2 shadow hover:bg-gray-100 mb-4"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-black rounded-full p-2 shadow hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* تصویر اصلی (الان سمت راست) */}
          <div className="relative w-[60%] h-full overflow-hidden rounded shadow">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={slides[0].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full"
              >
                <Image
                  src={slides[0].image}
                  alt={slides[0].title}
                  fill
                  className="object-cove"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-white p-3 md:p-4 shadow rounded">
                  <p className="text-xs md:text-sm">
                    0{slides[0].id} — {slides[0].title}
                  </p>
                  <h2 className="text-lg md:text-2xl font-semibold">
                    {slides[0].discount}
                  </h2>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
