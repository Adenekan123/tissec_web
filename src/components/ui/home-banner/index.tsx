import { Link } from "react-router-dom";
import { IHomeBannerContent } from "../../../static/home.static";

export const HomeBaner = ({ content }: { content: IHomeBannerContent }) => {
  const { heading, description, quote, url } = content;
  return (
    <div className="flex justify-between items-center px-8 py-20 w-9/12 relative">
      <div className="content flex flex-col gap-y-14 basis-4/12">
        <h2 className="text-4xl capitalize">{heading}</h2>
        <p className="text-xl">{description}</p>
        <div className="pt-3">
          <Link
            to={url}
            className="bg-blue-900 text-white  capitalize py-5 px-8 text-sm font-bold"
          >
            Find Out More
          </Link>
        </div>
      </div>
      <div className="quote basis-3/12 relative">
        <div className="absolute -top-14 -left-16 -z-10">
          <img src="/images/Banner-Speech-Marks.png" alt="" />
        </div>
        <p className="text-center text-xl text-ellipsis italic text-white font-bold">{quote}</p>
      </div>
    </div>
  );
};
