import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
