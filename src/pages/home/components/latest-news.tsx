import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="bg-blue-950 text-white px-4 py-24 flex flex-col gap-y-6">
      <div className="md:w-8/12 mx-auto flex flex-col gap-y-20">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl">Latest news</h2>
          <button className="text-white px-6 py-3 border-2 border-white hover:bg-amber-400 hover:text-white hover:border-blue-950">
            View all
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <Link to={"#"} className="flex flex-col gap-y-6 group">
            <img
              src="/images/Partners-Slider-5.png"
              alt=""
              className=" h-44 w-full object-cover bg-white group-hover:-translate-y-1 transition-all"
            />
            <p className="text-lg font-semibold hover:text-amber-400">
              Wavenet acquires Falanx Cyber
            </p>
            <small className="text-sm">1 month ago</small>
          </Link>
          <Link to={"#"} className="flex flex-col gap-y-6 group">
            <img
              src="/images/Partners-Slider-5.png"
              alt=""
              className="h-44 w-full object-cover bg-white group-hover:-translate-y-1 transition-all"
            />
            <p className="text-lg font-semibold hover:text-amber-400">
              Wavenet acquires Falanx Cyber
            </p>
            <small className="text-sm">2 months ago</small>
          </Link>
          <Link to={"#"} className="flex flex-col gap-y-6 group">
            <img
              src="/images/Partners-Slider-5.png"
              alt=""
              className="h-44 w-full object-cover bg-white group-hover:-translate-y-1 transition-all"
            />
            <p className="text-lg font-semibold hover:text-amber-400">
              Wavenet acquires Falanx Cyber
            </p>
            <small className="text-sm">3 months ago</small>
          </Link>
          <Link to={"#"} className="flex flex-col gap-y-6 group">
            <img
              src="/images/Partners-Slider-5.png"
              alt=""
              className="h-44 w-full object-cover bg-white group-hover:-translate-y-1 transition-all"
            />
            <p className="text-lg font-semibold hover:text-amber-400">
              Wavenet acquires Falanx Cyber
            </p>
            <small className="text-sm">3 month ago</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
