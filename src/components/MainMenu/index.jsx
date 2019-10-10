import React from 'react';
import Logo from './Logo';
import Menu from './Menu/Menu';
import BottomMenu from './BottomMenu/BottomMenu';

const MainMenu = () => {
  return (
    <React.Fragment>
      <Logo />
      <Menu />
      <BottomMenu />
    </React.Fragment>
  );
}

export default MainMenu;