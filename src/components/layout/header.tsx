import { useState } from "react";
import {
  services_menuItems,
  whoWeAre_menuItems,
} from "../../static/header.static";
import { BiChevronDown } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

type TDromMenu = {
  title: string;
  links: { label: string; url: string }[];
};

const MenuList = ({ list }: { list: TDromMenu[] }) => {
  return (
    <>
      {list.map((menu) => {
        const { title, links } = menu;
        return (
          <div className="flex flex-col gap-y-2 lg:gap-y-6 items-start mb-8">
            <h3 className=" text-lg lg:text-2xl font-semibold capitalize text-amber-500">
              {title}
            </h3>
            <div className="flex flex-col gap-y-3 items-start">
              <MenuLinks links={links} />
            </div>
          </div>
        );
      })}
    </>
  );
};

const MenuLinks = ({ links }: { links: { label: string; url: string }[] }) => {
  return links.map((link) => (
    <a
      href={link.url}
      className="text-white lg:text-slate-600 hover:text-amber-500"
    >
      {link.label}
    </a>
  ));
};

const DropMenu = ({
  menulist,
  show,
}: {
  menulist: TDromMenu[];
  show?: boolean;
}) => {
  if (!menulist || !Array.isArray(menulist) || !menulist.length) return null;

  return (
    <div
      className={`${
        show
          ? "max-h-[200vh]  p-3 overflow-hidden"
          : "max-h-0 lg:max-h-[initial] overflow-hidden overflow-y-auto"
      } lg:hidden lg:group-hover:flex relative lg:absolute lg:top-full right-0 lg:bg-white font-normal rounded-sm lg:p-6 shadow-lg  justify-between lg:w-[60vw]`}
    >
      <MenuList list={menulist} />
    </div>
  );
};

export const Header = () => {
  const [toggler, setToggler] = useState({
    menu: false,
    services: false,
    who_we_are: false,
  });
  return (
    <div className="px-4 md:px-24 py-4 absolute left-0 w-full z-20">
      <header className="flex items-center space-x-32 justify-between w-full ">
        <Link to={"/"}>
          <img
            className="w-32"
            src={"/images/FalanxCyber_Yellow_RGB_HighRes_Wavenet-2.png"}
            alt=""
          />
        </Link>
        <div
          className={`flex flex-col lg:flex-row lg:gap-x-8 text-lg font-semibold lg:justify-end fixed lg:relative top-0 right-0 h-screen overflow-hidden overflow-y-auto lg:overflow-visible lg:h-[auto] w-8/12 lg:w-auto bg-blue-950 lg:bg-transparent px-6 pb-12 lg:p-0 transition-transform ${
            !toggler.menu
              ? "translate-x-full lg:translate-x-0"
              : "translate-x-0 p-6 pt-24"
          }`}
        >
          <button
            onClick={() =>
              setToggler((prev) => ({ ...prev, services: !prev.services }))
            }
            className="text-white hover:text-amber-400 py-2 relative group text-left"
          >
            <div className="flex gap-x-8 items-center">
              <span>Our services</span>
              <span className="lg:hidden">
                <BiChevronDown size={24} />
              </span>
            </div>
            <DropMenu menulist={services_menuItems} show={toggler.services} />
          </button>
          <button
            onClick={() =>
              setToggler((prev) => ({
                ...prev,
                who_we_are: !prev.who_we_are,
              }))
            }
            className="text-white hover:text-amber-400 py-2 px-0 relative group text-left"
          >
            <div className="flex gap-x-8 items-center">
              <span>Who we are</span>
              <span className="lg:hidden">
                <BiChevronDown size={24} />
              </span>
            </div>
            <DropMenu menulist={whoWeAre_menuItems} show={toggler.who_we_are} />
          </button>
          <a
            href=""
            className="border-2 mt-4 lg:mt-0 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white py-2 px-4 block"
          >
            Contact us
          </a>
        </div>
        <button
          className="text-white relative z-30 lg:hidden"
          onClick={() => setToggler((prev) => ({ ...prev, menu: !prev.menu }))}
        >
          {!toggler.menu ? <HiMenuAlt2 size={32} /> : <CgClose size={32} />}
        </button>
      </header>
    </div>
  );
};
