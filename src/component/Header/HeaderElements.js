import styled from 'styled-components';
import { Link } from 'react-router-dom';


const themeColor = "#ff1493";


export const HeaderContainer = styled.div`
  display: flex;
  justifycontent: flex-start;
  background-color: #000;
  padding: 0 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  @media (max-width: 930px) {
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    padding: 0 calc((100vw - 1440px) / 2 + 10px);
  }
`

export const HeaderIcon = styled.img`
  width: 40px;
  height: 45px;
  @media (max-width: 930px) {
    margin: 0 auto;
  }
`

export const HeaderNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  @media (max-width: 930px) {
    position: fixed;
    top: 45px;
    left: ${({isOpen}) => (isOpen ? '0' : '-1000px')};
    height: 100vh;
    transition: all .3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`



export const Bar = styled.span`
  @media (max-width: 930px) {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all .1s ease-in-out;
    background-color: #fff;
    display: block;

    &:nth-child(2) {
      opacity: ${({isOpen}) => (isOpen ? '0' : '1')};
    }
    &:nth-child(1) {
      transform: ${({isOpen}) => (isOpen ? 'translateY(8px) rotate(45deg)' : '')};
    }
    &:nth-child(3) {
      transform: ${({isOpen}) => (isOpen ? 'translateY(-8px) rotate(-45deg)' : '')};
    }
  }
`
export const HeaderBars = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  margin: auto 0;
  color: #fff;
  cursor: pointer;
  display: none;
  @media (max-width: 930px) {
    display: block;
    &:hover ${Bar} {
      background-color: ${themeColor};
    }
  }
`

export const HeaderNavbarSns = styled.div`
  margin: 20px 0;
  display: none;
  @media (max-width: 930px) {
    display: block;
  }
`

export const SnsIconLink = styled.a`
  font-size: 24px;
  margin: 0 10px;
  color: ${themeColor};
  transition: all .2s ease-in-out;
  &:hover {
    color: #fd77be;
  }
`

export const HeaderNavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 930px) {
    flex-direction: column;
    width: 300px;
  }
  @media (max-width: 425px) {
    width: 100vw;
  }
`

export const HeaderNavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: block;
  width: 100%;
  padding: 0 10px;
  font-weight: bold;
  &:hover {
    color: ${themeColor};
    background-color: rgba(255, 255, 255, .1);
  }
  
`

export const HeaderNavbarItem = styled.li`
  font-size: .9rem;
  line-height: 45px;
  @media (max-width: 930px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, .4);
  }
`

