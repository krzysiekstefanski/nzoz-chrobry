import React from "react"
import styled from "styled-components"
import { color } from "../components/colors"

const Wrapper = styled.footer`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  //align-items: center;
  height: 40px;
  background-color: ${color.primary};
`

const Copyright = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: ${color.white};
`

const Author = styled.a`
  color: ${color.white};
  text-decoration: none;
  transition: color 0.3s ease;
`

const Footer = () => {
  return (
    <Wrapper>
      <Copyright align={"center"} p={"0 0 15px"}>
      Copyright © {new Date().getFullYear()} by NZOZ Chrobry. Wszelkie prawa zastrzeżone. Realizacja:
         {` `}
        <Author
          href="https://www.facebook.com/webscris"
          target="_blank"
          rel="noreferrer"
        >
          Cris
        </Author>
      </Copyright>
    </Wrapper>
  )
}

export default Footer
