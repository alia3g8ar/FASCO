"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// images
const i1 = "/assets/arrivals/Images-1.png";
const i2 = "/assets/arrivals/Images-2.png";
const i3 = "/assets/arrivals/Images-3.png";
const i4 = "/assets/arrivals/Images-4.png";
const i5 = "/assets/arrivals/Images-5.png";
const i6 = "/assets/arrivals/Images.png";

interface Option {
  title: string;
}

interface Product {
  img: string;
  productName: string;
  price: string;
  reviews: string;
  brand: string;
  soldOut: boolean;
}

const NewArrivals: React.FC = () => {
  const [activeOption, setActiveOption] = useState(0);

  const options: Option[] = [
    { title: "مد مردانه" },
    { title: "مد زنانه" },
    { title: "اکسسوری مردانه" },
    { title: "اکسسوری زنانه" },
    { title: "تخفیف ویژه" },
  ];

  const products: Product[] = [
    {
      img: i1,
      productName: "لباس براق",
      price: "۹۵۵,۰۰۰ تومان",
      reviews: "(۴.۱k)",
      brand: "تینکو",
      soldOut: true,
    },
    {
      img: i2,
      productName: "لباس بلند",
      price: "۱,۲۰۰,۰۰۰ تومان",
      reviews: "(۳.۸k)",
      brand: "تینکو",
      soldOut: false,
    },
    {
      img: i3,
      productName: "ژاکت کامل",
      price: "۷۰۲,۰۰۰ تومان",
      reviews: "(۲.۳k)",
      brand: "تینکو",
      soldOut: false,
    },
    {
      img: i4,
      productName: "لباس سفید",
      price: "۸۸۴,۰۰۰ تومان",
      reviews: "(۵.۰k)",
      brand: "تینکو",
      soldOut: true,
    },
    {
      img: i5,
      productName: "لباس رنگارنگ",
      price: "۱,۱۰۰,۰۰۰ تومان",
      reviews: "(۳.۱k)",
      brand: "تینکو",
      soldOut: false,
    },
    {
      img: i6,
      productName: "پیراهن سفید",
      price: "۶۰۰,۰۰۰ تومان",
      reviews: "(۴.۹k)",
      brand: "تینکو",
      soldOut: false,
    },
  ];

  return (
    <section className="my-16">
      <div className="container mx-auto gap-6 px-4 text-black">
        <div className="flex flex-col items-center justify-center">
          <div
            className="font-volkhov
          text-[35px]
          sm:text-[46px] text-[#484848]"
          >
            جدیدترین محصولات
          </div>
          <p
            className="text-[13px]
          sm:text-[16px] text-center text-[#8A8A8A] max-w-[600px]"
          >
            جدیدترین و بهترین محصولات فشن را در اینجا کشف کنید. کیفیت بالا و
            طراحی مدرن در انتظار شماست.
          </p>

          <div className="flex flex-row flex-wrap justify-start lg:justify-between text-[#8A8A8A] my-4">
            {options.map((item, index) => (
              <button
                key={index}
                className={`${activeOption === index ? "bg-black " : ""}
                text-[13px]
                px-[30px] py-3 xl:text-[16px] rounded-lg cursor-pointer duration-300 `}
                onClick={() => setActiveOption(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* content */}
          <div className="flex flex-wrap pt-4 flex-row justify-center gap-[30px]">
            {products.map((item, index) => (
              <div
                key={index}
                className="duration-300
                w-[200px]
                min-[815px]:w-[330px] flex flex-col shadow-2xl items-center px-4 py-6 rounded-lg"
              >
                <Image
                  src={item.img}
                  alt={item.productName}
                  width={350}
                  height={240}
                  className="object-cover"
                />

                <div className="flex flex-row justify-between w-full mt-3">
                  <div className="flex flex-col">
                    <h1 className="text-[13px] min-[815px]:text-[16px]">
                      {item.productName}
                    </h1>
                    <p
                      className="
                    text-[8px]
                    min-[815px]:text-[10px] text-[#8A8A8A]"
                    >
                      {item.brand}
                    </p>
                  </div>
                  <div className="text-yellow-300 flex flex-row max-[815px]:w-[50px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>

                <div
                  className="
                text-[9px]
                min-[815px]:text-[12px] w-full mt-4"
                >
                  {item.reviews} نظر مشتریان
                </div>

                <div className="w-full flex flex-row justify-between mt-4 items-center">
                  <div
                    className={`
                  text-[10px]
                  min-[815px]:text-[12px] 
            ${item.soldOut ? "text-red-500 " : "text-green-500"}`}
                  >
                    {item.soldOut ? "تقریباً تمام شده" : "موجود است"}
                  </div>
                  <div
                    className="
                  text-[15px]
                  min-[815px]:text-[20px]"
                  >
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="w-[150px] mt-10 py-2 text-white bg-black rounded-lg cursor-pointer
            text-[13px]
            min-[815px]:text-[16px]
            "
          >
            مشاهده بیشتر
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
