import Link from "next/link";
import styled from "styled-components";

// Icons
import { BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsCalendarPlus } from "react-icons/bs";

export const Nav = styled.nav`
  background: #fff;
  height: 4rem;
  display: flex;
  padding: 0 0.3rem;
  z-index: 10;
  /* Third Nav */
  justify-content: flex-start;
  border-bottom: solid 1px #e4e5ed;
`;

export const NavLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 400;
  color: #696c80;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  gap: 5rem;
  &.active,
  &:hover {
    color: #009ab2;
  }
  &:nth-last-of-type(2) {
    margin-left: 4rem;
  }

  img {
    padding-left: 0.7rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #697191;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
export const ContentIcon = styled.div`
  display: grid;
  place-items: center;
  padding: 0.5rem;
  border-radius: 100%;
  background: #009ab2;
`;

export const User = styled(BiUser)`
  color: #fff;
  font-size: 1.8rem;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: -24px;
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #009ab2;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.015em;
    line-height: 20px;
  }
`;

export const ArrowDonw = styled(MdKeyboardArrowDown)`
  display: block;
  font-size: 1.8rem;
`;

export const ContainerMain = styled.div`
  display: flex;
  height: calc(100vh - 4.2rem);
  width: 100%;
`;

export const Aside = styled.aside`
  border-right: 1px solid #e4e5ed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 11.563rem;
  padding: 0 0.5rem;

  hr {
    width: 100%;
    background-color: #e4e5ed;
    height: 0.1rem;
    border: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ContentLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem auto 2rem 0;
  padding: 1rem 0 0 0.2rem;
`;

export const AsideLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  padding: 0 0.4rem;
`;

export const HomeIcon = styled(HiOutlineHome)`
  color: #9094a7;
  font-size: 1.6rem;
`;
export const NewCitaIcon = styled(AiOutlinePlusCircle)`
  color: #9094a7;
  font-size: 1.6rem;
`;
export const CitaIcon = styled(BsCalendarPlus)`
  color: #9094a7;
  font-size: 1.6rem;
`;
export const TextLink = styled.p`
  color: #000;
  padding: 0;
  margin: 0;
  font-size: 1rem;
`;

export const ContentContact = styled.div`
  padding: 1rem 0;
  max-width: 10.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  span {
    color: #9194a7;
    font-size: 0.75rem;
    letter-spacing: 0.015em;
    line-height: 18px;
    margin-bottom: 8px;
  }
  a {
    color: #009ab2;
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.015em;
    text-decoration: none;
  }
`;

export const ContentFooterLinks = styled.footer`
  display: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #e4e5ed;
    position: fixed;
    bottom: 0;
    padding-top: 7px;
    background: #fff;
  }
`;

export const FooterLink = styled.div`

  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .3rem;
  height: 4rem;
  width: 67px;

  p{
    padding: 0;
    margin: 0;
    font-size: .75rem;
    color: #9094a7;
  }
  svg{
    font-size: 1.4rem;
  }
`;
