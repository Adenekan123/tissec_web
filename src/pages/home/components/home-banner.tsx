import { Link } from "react-router-dom";
import { IHomeBannerContent } from "../../../static/home.static";

export const HomeBaner = ({ content }: { content: IHomeBannerContent }) => {
  const { heading, description, quote, url } = content;
  return (
    <div className="bg-white/80 md:bg-transparent relative md:pt-48 flex">
      <div className="flex justify-between gap-x-10  flex-col md:flex-row md:gap-y-48 h-[70vh]">
        <div className="flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-14 basis-4/12 w-8/12 pl-6 xl:pl-24 z-10 ">
          <h2 className="text-2xl lg:text-4xl capitalize">{heading}</h2>
          <p className="text-sm lg:text-xl">{description}</p>
          <div className="pt-4">
            <Link
              to={url}
              className="bg-blue-900 text-white  capitalize py-3  lg:py-5 px-6 lg:px-6 text-xs lg:text-sm font-bold"
            >
              Find Out More
            </Link>
          </div>
        </div>
        <div className="quote md:basis-6/12 w-8/12 relative z-10 flex md:items-start mb-auto self-end md:self-start mt-auto md:mt-28 md:pl-24 ">
          <div className="relative ">
            <div className="absolute -top-14 md:-left-16 ">
              <img
                src="/images/Banner-Speech-Marks.png"
                alt=""
                className="w-20 lg:w-auto"
              />
            </div>
            <p className="text-center text-xs lg:text-xl italic text-white font-bold relative z-10 md:w-5/12">
              {quote ? quote : null}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full">
          <img
            src="/images/Top-slash-of-page-slider1.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
