import { services_menuItems, whoWeAre_menuItems } from "../../static/header.static";

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
          <div className="flex flex-col gap-y-6 items-start">
            <h3 className="text-2xl font-semibold capitalize text-amber-500">
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
    <a href={link.url} className="text-slate-600 hover:text-amber-500">
      {link.label}
    </a>
  ));
};

const DropMenu = ({ menulist }: { menulist: TDromMenu[] }) => {
  if (!menulist || !Array.isArray(menulist) || !menulist.length) return null;

  return (
    <div className="hidden group-hover:flex absolute top-full right-0 bg-white font-normal rounded-sm p-6 shadow-lg  justify-between lg:w-[60vw]">
      <MenuList list={menulist} />
    </div>
  );
};

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
          <button className="text-white hover:text-amber-400 py-2 relative group">
            Our services
            <DropMenu menulist={services_menuItems} />
          </button>
          <button className="text-white hover:text-amber-400 py-2 px-0 relative group">
            Who we are
            <DropMenu menulist={whoWeAre_menuItems} />
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
