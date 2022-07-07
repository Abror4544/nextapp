import { FC, ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
