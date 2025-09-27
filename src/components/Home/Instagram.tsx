import ig1 from "../../../public/assets/Contact/ig/ig1.png";
import ig2 from "../../../public/assets/Contact/ig/ig2.png";
import ig3 from "../../../public/assets/Contact/ig/ig3.png";
import ig4 from "../../../public/assets/Contact/ig/ig4.png";
import ig5 from "../../../public/assets/Contact/ig/ig5.png";
import ig6 from "../../../public/assets/Contact/ig/ig6.png";
import ig7 from "../../../public/assets/Contact/ig/ig7.png";
import Image, { StaticImageData } from "next/image";

const Instagram: React.FC = () => {
  const igProps: StaticImageData[] = [ig1, ig2, ig3, ig4, ig5, ig6, ig7];

  return (
    <div className="flex flex-col items-center ju pt-[50px] px-4 md:px-0">
      <div className="duration-300 text-[#484848] font-volkhov text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center">
        ما را در اینستاگرام دنبال کنید
      </div>
      <p
        className="text-center duration-300 
        w-full
        text-[12px] sm:text-[13px] md:w-[600px] md:text-[14px] lg:text-[16px]
        text-[#8A8A8A] mt-3"
      >
        لورم ایپسوم متن ساختگی است که برای پر کردن فضای طراحی استفاده می‌شود.
        این متن به عنوان نمونه محتوای فارسی در طراحی به کار می‌رود.
      </p>
      <div
        className="flex justify-center flex-wrap
       items-center py-[50px] gap-4 overflow-x-auto"
      >
        {igProps.map((item, index) => (
          <div
            key={index}
            className="shadow-lg flex-shrink-0 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[170px]"
          >
            <Image
              src={item}
              alt={`اینستاگرام ${index + 1}`}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
