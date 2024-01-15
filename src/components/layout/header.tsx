export const Header = () => {
  return (
    <div className="px-4 md:px-24 py-4 absolute left-0 w-full z-20">
      <header className="flex items-center space-x-32 justify-between w-full ">
        <div>
          <img
            className="w-32"
            src={"/images/FalanxCyber_Yellow_RGB_HighRes_Wavenet-2.png"}
            alt=""
          />
        </div>
        <div className="flex gap-x-8 text-lg font-semibold justify-end">
          <button className="text-white hover:text-amber-400 py-2 ">
            Our services
          </button>
          <button className="text-white hover:text-amber-400 py-2 px-0">
            Who we are
          </button>
          <a
            href=""
            className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white py-2 px-4 block"
          >
            Contact us
          </a>
        </div>
      </header>
    </div>
  );
};
