import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { color } from "./colors"
import Container from "../atomic/partials/container"
import Button from "../atomic/atoms/button"

const CustomHeader = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 23px 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: padding 0.3s ease;

  @media (min-width: 992px) {
    align-items: center;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.alt {
    background-color: ${color.primary};
    border-bottom: 1px solid ${color.primary};
    padding: 5px 0;

    .hamburger span {
      background-color: ${color.white};
    }

    nav {
      top: 60px;
      background-color: ${color.primary};
    }

    .logo {
      color: #fff;
    }

    ul {
      display: flex;

      li {
        
        &:not(:last-child) {
          a {
            color: #fff;
          }
        }

        &:last-child {
          a {
            background-color: ${color.white};
            border: 2px solid ${color.white};
            color: ${color.secondary};

            &:hover {
              background-color: ${color.secondary};
              border: 2px solid ${color.secondary};
              color: ${color.white};
            }
          }
        }
      }
    }
  }

  svg {
    height: 14px;
    margin-right: 8px;

    path {
      fill: ${color.white};
    }
  }
`

const LogoWrapper = styled(Link)`
  width: 100%;
  //position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Barlow, sans-serif;
  color: ${color.primary};
  font-size: 18px;
  line-height: 1;
  font-weight: 700;

  @media (min-width: 576px) {
    max-width: 60px;
  }

  @media (min-width: 1250px) {
    max-width: 80px;
  }

  span {
    font-size: 32px;
  }
`

const Navigation = styled.nav`
  height: 354px;
  position: absolute;
  left: 0;
  right: 0;
  top: 75px;
  background-color: ${color.white};
  transition: height 0.3s ease;
  overflow: hidden;

  @media (min-width: 1250px) {
    position: static;
    background-color: transparent;
    background-image: none;
    height: auto;
    overflow: visible;
  }

  &.hidden {
    height: 0px;

    @media (min-width: 1250px) {
      height: auto;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  list-style: none;
  padding: 32px 15px;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 992px) {
    max-width: 900px;
  }

  @media (min-width: 1250px) {
    max-width: 1220px;
    flex-direction: row;
    padding: 0;
  }


  

  li {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0;

    @media (min-width: 1250px) {
      width: auto;
    }
  }

  li:not(:last-child) {
    margin-bottom: 16px;

    a {
      font-family: Barlow, sans-serif;
      color: ${color.primary};
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      text-decoration: none;
      transition: color 0.3s ease;
      position: relative;

      &::before {
        content: "";
        width: 0%;
        border-bottom: 1px solid #fff;
        transition: width 0.3s ease;
        position: absolute;
        bottom: -8px;
      }

      &:hover {
        color: ${color.secondary};
        &::before {
          
          width: 100%;
        }
      }
    }

    @media (min-width: 1250px) {
      margin-right: 40px;
      margin-bottom: 0;
    }
  }
  
  li:last-child {
    margin-top: 16px;

    @media (min-width: 1250px) {
      margin-top: 0;
      margin-left: 24px;
    }
  }
`

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 45px;
  padding: 5px;
  position: relative;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 1;

  @media (min-width: 1250px) {
    display: none;
  }

  &:focus {
    outline-color: #fff;
  }

  span {
    display: block;
    height: 6px;
    width: 35px;
    background-color: ${color.primary};
    border-radius: 2px;
    position: relative;
    transition: background-color 0.3s ease;
  }

  // &:hover {
  //   span {
  //     background-color: ${color.secondary};
  //   }
  // }

  &.active {
    justify-content: center;
    padding: 2px;

    span {
      position: absolute;
      transition: transform 0.3s ease;

      &:nth-child(1) {
        top: calc(50% - 3px);
        transform: rotate(45deg);
        transform-origin: center;
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        bottom: calc(50% - 3px);
        transform: rotate(-45deg);
        transform-origin: center;
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false)

  useEffect(() => {
    const hero = document.querySelector(".top-overlay")
    const header = document.querySelector(".header")

    if (hero) {
      const heroSize = hero.offsetHeight / 10

      if (document.documentElement.scrollTop > heroSize) {
        header.classList.add("alt")
      } else {
        header.classList.remove("alt")
      }

      window.onscroll = () => {
        if (document.documentElement.scrollTop > heroSize) {
          header.classList.add("alt")
        } else {
          header.classList.remove("alt")
        }
      }
    } else {
      header.classList.add("alt")
    }
  })

  const handleClick = e => {
    e.target.closest("button").classList.toggle("active")
    setHamburgerIsActive(!hamburgerIsActive)
  }

  const handleMenuItemClick = e => {
    e.target.closest("ul").parentElement.classList.remove("active")
    e.target.closest("ul").parentElement.previousSibling.classList.remove("active")
    setHamburgerIsActive(!hamburgerIsActive)
  }

  return (
    <CustomHeader className="header">
      <Container position="static">
        <LogoWrapper className="logo" to="#home">
          <span>NZOZ</span><br />Chrobry
        </LogoWrapper>
        <Hamburger
        className="hamburger" 
        onClick={e => handleClick(e)}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Navigation className={hamburgerIsActive ? "active" : "hidden"}>
          <NavList>
            <li>
              <Link to="/#home" onClick={e => handleMenuItemClick(e)}>Home</Link>
            </li>
            <li>
              <Link to="/#o-nas" onClick={e => handleMenuItemClick(e)}>O nas</Link>
            </li>
            <li>
              <Link to="/#nasza-kadra" onClick={e => handleMenuItemClick(e)}>Kadra</Link>
            </li>
            <li>
              <Link to="/#dlaczego-my" onClick={e => handleMenuItemClick(e)}>Dlaczego my?</Link>
            </li>
            <li>
              <Link to="/#opieka-nocna-i-swiateczna" onClick={e => handleMenuItemClick(e)}>Opieka świąteczna i nocna</Link>
            </li>
            <li>
              <Link to="/#druki-do-pobrania" onClick={e => handleMenuItemClick(e)}>Do pobrania</Link>
            </li>
            <li>
              <Button
                //theme="primary40" 
                content={{
                  text: "Skontaktuj się",
                  url: "tel:48724100548"
                }}
                p="10px 18px"
                target="_self"
                tel />
            </li>
          </NavList>
        </Navigation>
      </Container>
    </CustomHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
