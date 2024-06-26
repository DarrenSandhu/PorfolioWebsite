import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";


const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  background-color: ${({ color }) => color};
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${(props) => (props.color ? props.color : 'grey')};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = ({user}) => {
  let location = useLocation();
  const isErrorPage = location.pathname === "/404"; 

  return (
    <FooterContainer color={isErrorPage ? "black" : "white"}>
      <FooterWrapper>
          <Logo>Darren Sandhu</Logo>
          <Nav>
          <NavLink as={Link} to='/' color={isErrorPage ? "white" : "grey"}>About</NavLink>
          <NavLink as={Link} to="/projects" color={isErrorPage ? "white" : "grey"}>Projects</NavLink>
          <NavLink as={Link} to="/contact" color={isErrorPage ? "white" : "grey"}>Contact</NavLink>
          <NavLink as={Link} to="/resume" color={isErrorPage ? "white" : "grey"}>Resume</NavLink>
          </Nav>
          <SocialMediaIcons>
          <SocialMediaIcon href={user.github} target="display">
              <IoLogoGithub />
          </SocialMediaIcon>
          </SocialMediaIcons>
          <Copyright>&copy; 2024 Darren Sandhu. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;