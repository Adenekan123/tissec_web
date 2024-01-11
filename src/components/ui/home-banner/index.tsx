import { Link } from "react-router-dom";
import { IHomeBannerContent } from "../../../static/home.static";

export const HomeBaner = ({ content }: { content: IHomeBannerContent }) => {
  const { heading, description, quote, url } = content;
  return (
    <div className="flex  md:h-auto justify-between md:items-center xl:w-9/12 w-full  px-0 lg:px-8 py-20  sm:bg-none bg-white/80 md:bg-transparent bg-[url('/images/Top-slash-of-page-slider1.png')] bg-cover bg-center lg:bg-none  flex-col md:flex-row gap-y-48 md:gap-y-12">
      <div className="flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-14 basis-5/12 w-8/12  mdw-auto pl-6 xl:pl-20">
        <h2 className="text-2xl lg:text-4xl capitalize">{heading}</h2>
        <p className="text-sm lg:text-xl">{description}</p>
        <div className="pt-3">
          <Link
            to={url}
            className="bg-blue-900 text-white  capitalize py-3  lg:py-5 px-6 lg:px-6 text-xs lg:text-sm font-bold"
          >
            Find Out More
          </Link>
        </div>
      </div>
      <div className=" quote md:basis-6/12 xl:basis-3/12 w-8/12 md:w-auto ml-auto relative pr-16  md:pr-6 xl:pr-20">
        <div className="absolute -top-14 md:-left-16 ">
          <img src="/images/Banner-Speech-Marks.png" alt="" className="w-20 lg:w-auto" />
        </div>
        <p className="text-center text-xs lg:text-xl italic text-white font-bold relative z-10">{quote}</p>
      </div>
    </div>
  );
};
