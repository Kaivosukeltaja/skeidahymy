import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
    <Logo className="header__logo" />
    <div className="header__bar">
      <div className="header__title">Skeidahymy</div>
      <div className="header__title--print">#Skeidahymy-raportti &bull; Skitrapporten</div>
    </div>
  </header>
);
};

export default Header;