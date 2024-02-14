import { useCallback, useState } from "react";
import { whatWeDoContents } from "../../../static/home.static";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { HiOutlineArrowRight } from "react-icons/hi";

export type IWhatWeDo = "testing" | "detect" | "advise";
export type TWhatwedo = {
  description: string;
  heading: string;
  icon: IconType;
  url: string;
};

const WhatWeDoItem = ({ items }: { items: TWhatwedo[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {items.map((item) => {
        const { heading, description, url, icon: Icon } = item;

        return (
          <Link
            to={url}
            className="card p-8 flex flex-col items-center gap-y-6 hover:bg-white hover:shadow-sm  rounded-sm text-center"
          >
            <span className="d-inline-block p-3 bg-amber-500 rounded-md text-white">
              <Icon size={48} />
            </span>

            <h4 className="text-xl capitalize">{heading}</h4>
            <p>{description}</p>
          </Link>
        );
      })}
    </div>
  );
};

const WhatWeDo = () => {
  const [tab, setTab] = useState<IWhatWeDo>("testing");

  const styleActive = useCallback(
    (v: string) => {
      return tab === v
        ? "text-amber-400 font-semibold before:border-b-[3px]"
        : "";
    },
    [tab]
  );

  return (
    <div className=" lg:px-24 md:-mt-[300px] relative z-10 text-center">
      <div className="flex flex-col gap-y-12  bg-slate-100 px-4 md:px-10">
        <div className="flex flex-col gap-y-12 pt-20 border-b ">
          <h2 className="text-3xl font-semibold">What we do</h2>
          <div className="flex justify-center items-center">
            <button
              onClick={() => setTab("testing")}
              className={`grow capitalize ${styleActive(
                "testing"
              )} relative  pb-4 md:text-2xl  before:block before:absolute before:hover:border-b-[3px] before:bottom-0 before:w-full  before:border-amber-400 inline-flex justify-center gap-x-2 items-center`}
            >
              <HiOutlineArrowRight />
              <span>test</span>
            </button>
            <button
              onClick={() => setTab("detect")}
              className={`grow capitalize ${styleActive(
                "detect"
              )} relative pb-4 md:text-2xl  before:block before:absolute before:hover:border-b-[3px] before:bottom-0 before:w-full  before:border-amber-400 inline-flex justify-center gap-x-4 items-center`}
            >
              <HiOutlineArrowRight />
              <span>detect & respond</span>
            </button>
            <button
              onClick={() => setTab("advise")}
              className={`grow capitalize ${styleActive(
                "advise"
              )} relative pb-4 md:text-2xl   before:block before:absolute before:hover:border-b-[3px] before:bottom-0 before:w-full  before:border-amber-400 inline-flex justify-center gap-x-4 items-center`}
            >
              <HiOutlineArrowRight />
              <span>advise</span>
            </button>
          </div>
        </div>

        {whatWeDoContents.map((content) => {
          const { testing, detect, advise } = content;
          return (
            <>
              <div
                className={`pb-12 ${tab !== "testing" ? "hidden" : "block"}`}
              >
                <WhatWeDoItem items={testing} />
              </div>
              <div className={`pb-12 ${tab !== "detect" ? "hidden" : "block"}`}>
                <WhatWeDoItem items={detect} />
              </div>
              <div className={`pb-12 ${tab !== "advise" ? "hidden" : "block"}`}>
                <WhatWeDoItem items={advise} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
