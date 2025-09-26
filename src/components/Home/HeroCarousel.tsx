// components/HeroCarousel.tsx
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// استفاده از تصاویر از پوشه public
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
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);

  // محاسبه شمارش معکوس تا پایان ماه
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

  const counter = [
    { type: "روز", value: days },
    { type: "ساعت", value: hours },
    { type: "دقیقه", value: minutes },
    { type: "ثانیه", value: seconds },
  ];

  return (
    <div
      dir="rtl"
      className="flex flex-col md:flex-row w-full gap-4 my-10 bg-gradient-to-r from-[#ededed] via-orange-100 to-pink-100 py-6 px-4 md:px-10"
    >
      {/* سمت چپ: متن و شمارنده */}
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

      {/* سمت راست: کاروسل */}
      <div className="w-full md:w-6/10 flex flex-col items-center justify-center md:items-end mt-6 md:mt-0">
        <div className="relative w-full max-w-[900px] h-[300px] md:h-[350px] lg:h-[400px]">
          {/* تصویر اصلی */}
          <div className="absolute  left-0 top-0 w-full max-w-[300px] md:max-w-[300px] h-full overflow-hidden md:mx-0 text-black">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={slides[0].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 100) prevSlide();
                  else if (info.offset.x < -100) nextSlide();
                }}
              >
                <img
                  src={slides[0].image}
                  alt={slides[0].title}
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white p-2 md:p-4 shadow rounded">
                  <p className="text-xs md:text-sm">
                    0{slides[0].id} — {slides[0].title}
                  </p>
                  <h2 className="text-lg md:text-2xl font-semibold ">
                    {slides[0].discount}
                  </h2>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* تصاویر کوچک: ریسپانسیو مثل نسخه قبلی */}
          <div className=" sm:flex flex-col mx-auto lg:flex-row gap-2 lg:gap-4 absolute left-[320px] top-0">
            {slides.slice(1).map((slide) => (
              <div
                key={slide.id}
                className="w-[120px] lg:w-[180px] h-[160px] lg:h-[250px] opacity-60 duration-300"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* دکمه Prev/Next: ریسپانسیو */}
        <div className="flex mx-auto gap-2 md:gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="bg-white text-black rounded-full p-2 md:p-3 shadow hover:bg-gray-100 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-black rounded-full p-2 md:p-3 shadow hover:bg-gray-100 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
