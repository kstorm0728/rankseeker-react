import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderIcon,
  HeaderNavbar,
  HeaderBars,
  Bar,
  HeaderNavbarSns,
  SnsIconLink,
  HeaderNavbarList,
  HeaderNavbarLink,
  HeaderNavbarItem,
} from './HeaderElements';
import rankseekerIcon from '../../Images/Other/rankseeker_icon.png';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


function Header() {
  const navbarItems = [
    '大会', 'ランキング', 'プロ選手', '用品', 'ボウリング場', 'ニュース', '動画', 'ブログ', 'ショップ', 'Shelf', 'サイトマップ'
  ]

  const [isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <HeaderContainer isOpen={isOpen} >
        <HeaderIcon src={rankseekerIcon} />
        <HeaderBars onClick={toggle} >
          <Bar isOpen={isOpen} />
          <Bar isOpen={isOpen} />
          <Bar isOpen={isOpen} />
        </HeaderBars>
        <HeaderNavbar isOpen={isOpen} >
          <HeaderNavbarSns>
            <SnsIconLink href='/' aria-label='Facebook'>
              <FaFacebook />
            </SnsIconLink>
            <SnsIconLink href='/' aria-label='Instagram'>
              <FaInstagram />
            </SnsIconLink>
            <SnsIconLink href='/' aria-label='Youtube'>
              <FaYoutube />
            </SnsIconLink>
            <SnsIconLink href='/' aria-label='Twitter'>
              <FaTwitter />
            </SnsIconLink>
          </HeaderNavbarSns>
          <HeaderNavbarList>
            {navbarItems.map((navbarItem, index) => {
              return (
                <HeaderNavbarItem key={index}>
                  <HeaderNavbarLink>
                  {navbarItem}
                  </HeaderNavbarLink>
                </HeaderNavbarItem>
              )
            })}
          </HeaderNavbarList>
        </HeaderNavbar>
      </HeaderContainer>
    </>
  )
}

export default Header
