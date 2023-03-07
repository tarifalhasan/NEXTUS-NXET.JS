import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MobileMenu from '../Header/MobileMenu';
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <MobileMenu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
