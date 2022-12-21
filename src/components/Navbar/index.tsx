import React from "react";
import {
  ArrowDonw,
  Aside,
  AsideLink,
  Bars,
  CitaIcon,
  ContainerMain,
  ContentContact,
  ContentFooterLinks,
  ContentIcon,
  ContentLinks,
  FooterLink,
  HomeIcon,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
  NewCitaIcon,
  TextLink,
  User,
} from "./NavbarElements";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink href="/">
          <Image src="images/logo-auna.svg" alt="logo"/>
          <Bars />
        </NavLink>
        <NavMenu>
          <NavLink href="/">Programas Auna</NavLink>
          <NavLink href="/">Laboratorio</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink href="/">
            <ContentIcon>
              <User />
            </ContentIcon>
            <p>Jose Espinoza</p>
            <ArrowDonw />
          </NavBtnLink>
        </NavBtn>
      </Nav>
      <ContainerMain>
        <Aside>
          <ContentLinks>
            <AsideLink href="/">
              <HomeIcon />
              <TextLink>Inicio</TextLink>
            </AsideLink>
            <AsideLink href="/">
              <NewCitaIcon />
              <TextLink>Nueva Cita</TextLink>
            </AsideLink>
            <AsideLink href="/">
              <CitaIcon />
              <TextLink>Mis citas</TextLink>
            </AsideLink>
          </ContentLinks>
          <hr />
          <ContentContact>
            <span>¿Tienes alguna duda o inconveniente? Contáctanos a:</span>
            <a href="#!">contacto@auna-digital.pe</a>
            <a href="#!">Whatsapp Auna</a>
          </ContentContact>
        </Aside>

        <ContentFooterLinks>
          <FooterLink>
            <HomeIcon />
            <p>Inicio</p>
          </FooterLink>
          <FooterLink>
            <NewCitaIcon />
            <p>Nueva Cita</p>
          </FooterLink>
          <FooterLink>
            <CitaIcon />
            <p>Mis citas</p>
          </FooterLink>
        </ContentFooterLinks>
      </ContainerMain>
    </>
  );
};

export default Navbar;
