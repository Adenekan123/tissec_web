import { Link } from "react-router-dom";
import { IHomeBannerContent } from "../../static/home.static";

export const StaticBanner = ({ content, image='/images/home-bg-n.jpg' }: { content: IHomeBannerContent,image?:string }) => {
  const { heading, description, url } = content;
  return (
    <div className={`bg-[url(${image})]  bg-cover bg-right h-[70vh] relative pt-12 md:pt-32 px-4 md:px-72`}>
      <div className="flex justify-between gap-x-72 items-center">
        <div className="flex flex-col gap-y-4 md:gap-y-8  xl:pl-24 relative z-10 md:basis-5/12 ">
          <h2 className="text-2xl lg:text-4xl capitalize  w-3/4">{heading}</h2>
          <p className="text-sm lg:text-xl">{description}</p>
        </div>
        <div className="md:basis-3/12 relative z-10 pt-12">
          <div className="text-center">
            <Link
              to={url}
              className=" d-inline-block bg-blue-900 text-white  capitalize py-3  lg:py-5 px-6 lg:px-6 text-xs lg:text-sm font-bold"
            >
              Get in touch
            </Link>
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
