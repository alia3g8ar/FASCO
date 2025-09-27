"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

// تصویر
import img1 from "../../../public/assets/woman/image.png";

const WomanCollection: React.FC = () => {
  return (
    <section className="bg-[#eeeeee] py-5 sm:py-0">
      <div className="flex flex-col sm:flex-row sm:h-[538px] relative justify-between">
        {/* بک‌گراند مورب */}
        <div className="hidden sm:flex absolute top-0 left-[55%] w-[30%] h-full bg-[#DADADA] transform -skew-x-[15deg] origin-top-left" />

        {/* سمت راست - متن */}
        <div className="w-full sm:w-[45%] h-full flex items-center justify-start bg-[#DADADA] z-10">
          <div className="px-6 sm:px-10 py-6 sm:py-10 text-right">
            <p className="text-lg sm:text-xl text-[#767676] cursor-pointer hover:underline">
              مجموعه زنانه
            </p>

            <h1 className="text-[24px] sm:text-[35px] lg:text-[42px] font-bold mb-4 mt-6 sm:mt-12 text-[#484848] font-volkhov">
              پیکی بلایندرز
            </h1>

            <p className="underline mb-4 cursor-pointer text-[#484848]">
              توضیحات
            </p>

            <p className="text-gray-700 mb-4 xl:w-[500px] md:w-3/4 w-full duration-300 line-clamp-4 leading-relaxed text-sm sm:text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. سکلیریسکه درویس اولتراسیز
              سولیسیتودین علیکوم سم. لورم ایپسوم متن ساختگی از صنعت چاپ.
            </p>

            {/* انتخاب سایز */}
            <div className="mb-6 flex flex-row gap-3 items-center justify-end">
              <span className="text-gray-700 text-sm sm:text-base">سایز:</span>
              <button className="border border-black bg-black text-white rounded-full px-4 sm:px-6 py-1 text-xs sm:text-sm">
                M
              </button>
            </div>

            {/* قیمت */}
            <p className="text-[18px] sm:text-2xl font-bold mb-6 text-[#484848]">
              ۱,۲۰۰,۰۰۰ تومان
            </p>

            {/* دکمه خرید */}
            <button
              className="bg-black text-white px-8 sm:px-20 py-2 rounded cursor-pointer 
              text-sm sm:text-base hover:bg-gray-800 transition"
            >
              خرید کنید
            </button>
          </div>
        </div>

        {/* سمت چپ - تصویر */}
        <div className="w-full sm:w-[50%] flex justify-center sm:overflow-hidden mt-6 sm:mt-0">
          <div className="relative w-full h-[300px] sm:h-full overflow-hidden">
            <Image
              src={img1 as StaticImageData}
              alt="مجموعه زنانه"
              className="object-contain" // تغییر از cover به contain
              priority
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomanCollection;
