import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import TMDBLogo from "../../images/tmdb_logo.svg";
import GMDB from "../../images/gmdb.png";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.css';
import "./navbar.css";

const Header = ({searchTerm}) => {
  const [navbarBg, setNavbarBg] = useState(false);

  const changeNavbarBg = () => {
      if(window.scrollY >= 120) {
        setNavbarBg(true);
      }else {
          setNavbarBg(false)
      }
  }
  const currentLocation = useLocation();
  console.log(currentLocation)
  
  useEffect(() => {
      window.addEventListener("scroll", changeNavbarBg);
  }, [changeNavbarBg, searchTerm])

  return (
      <Wrapper searchTerm={searchTerm} location={useLocation} navbarBg={navbarBg} className={(currentLocation.pathname === "/") ? `navbar ${navbarBg && "active"}` :`navBgDark ${navbarBg && "active"}`}>
          <Content>
              <Link to="/"><LogoImg src={GMDB} alt="rmdb-logo" /></Link>
              <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
          </Content>
      </Wrapper>
  )
}

export default Header