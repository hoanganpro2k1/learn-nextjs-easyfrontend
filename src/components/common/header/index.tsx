import React from 'react'
import HeaderMobile from './header-mobile'
import HeaderDesktop from './header-desktop';

const Header: React.FC = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default Header;
