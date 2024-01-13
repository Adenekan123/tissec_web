import { useState } from "react";
import { whatWeDoContents } from "../../../static/home.static";
import { Link } from "react-router-dom";

export type IWhatWeDo = "testing" | "detect" | "advise";
export type TWhatwedo = {
  description: string;
  heading: string;
  icon: string;
  url: string;
};

const WhatWeDoItem = ({ items }: { items: TWhatwedo[] }) => {
  return (
    <div className="grid grid-cols-3 px-20 border">
      {items.map((item) => {
        const { heading, description, url } = item;

        return (
          <Link
            to={url}
            className="card p-8 flex flex-col items-center gap-y-6 hover:bg-white hover:shadow-lg rounded-sm text-center"
          >
            {/* //logo */}
            <h4 className="text-xl capitalize font-semibold">{heading}</h4>
            <p>{description}</p>
          </Link>
        );
      })}
    </div>
  );
};

const WhatWeDo = () => {
  const [tab, setTab] = useState<IWhatWeDo>("testing");

  return (
    <div className="px-6 lg:px-24 md:-mt-[300px] relative z-10 pb-96">
      <div className="flex flex-col gap-y-12  bg-slate-100">
        <div className="flex flex-col gap-y-12 pt-20 border-b">
          <h2 className="text-3xl font-semibold text-center">What we do</h2>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setTab("testing")}
              className="grow text-orange-400 capitalize font-semibold relative before:block before:absolute before:hover:border-b-2 before:bottom-0 before:w-full  before:border-orange-400 pb-4 text-2xl"
            >
              test
            </button>
            <button
              onClick={() => setTab("detect")}
              className="grow text-orange-400 capitalize font-semibold relative before:block before:absolute before:hover:border-b-2 before:bottom-0 before:w-full  before:border-orange-400 pb-4 text-2xl"
            >
              detect & respond
            </button>
            <button
              onClick={() => setTab("advise")}
              className="grow text-orange-400 capitalize font-semibold relative before:block before:absolute before:hover:border-b-2 before:bottom-0 before:w-full  before:border-orange-400 pb-4 text-2xl"
            >
              advise
            </button>
          </div>
        </div>

        {whatWeDoContents.map((content) => {
          const { testing, detect, advise } = content;
          return (
            <>
              <div className={`${tab !== "testing" ? "hidden" : "block"}`}>
                <WhatWeDoItem items={testing} />
              </div>
              <div className={`${tab !== "detect" ? "hidden" : "block"}`}>
                <WhatWeDoItem items={detect} />
              </div>
              <div className={`${tab !== "advise" ? "hidden" : "block"}`}>
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
