import React from "react"
import styled from "styled-components"
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import Container from "../../partials/container";
import Button from "../../atoms/button";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.primary};
  padding: 50px 0;
`

const ListBox = styled.div`
  @media (min-width: 769px) {
  }

  &:not(:nth-last-child(1)) {
    padding-bottom: 25px;
  }

  @media (min-width: 992px) {
    &:not(:nth-last-child(1)) {
      padding-bottom: 0;
    }
  }
`

const List = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;

  ul {
    list-style: none;

    li {
      color: ${color.white};

      span {
        font-weight: 600;
      }
    }
  }
`

const ListItem = styled.div`
  a, p {
    display: block;
    color: ${color.white};
  }

  a {
    font-weight: 600;
    text-decoration: none;
  }

  .tel, .mail {
    text-decoration: none;
    color: ${color.secondary};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
const LogoWrapper = styled.a`
  display: block;
  width: 100%;
  //position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Barlow, sans-serif;
  color: ${color.white};
  font-size: 26px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 20px;

  @media (min-width: 576px) {
    max-width: 60px;
  }

  @media (min-width: 1250px) {
    max-width: 80px;
  }

  span {
    font-size: 46px;
  }
`

const NameWrapper = styled.h2`
  max-width: 318px;
  font-family: Barlow, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: ${color.white};
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FlexBox
          direction={"column"}
          directionLG={"row"}
          justify={"space-between"}
        >
          <ListBox>
            <List>
              <LogoWrapper className="logo" to="#home">
                <span>NZOZ</span><br />Chrobry
              </LogoWrapper>

                <NameWrapper>Niepubliczny Zakład Opieki Zdrowotnej CHROBRY</NameWrapper>
                <ul>
                  <li>ul. Bolesława Chrobrego 52</li>
                  <li>74-100 Gryfino</li>
                  <li><span>Czynny od godz 8:00 do 18:00</span></li>
                </ul>
            </List>
          </ListBox>
          <ListBox>
            <List>
              <ListItem>
                <a href="#home">HOME</a>
              </ListItem>
              <ListItem>
                <a href="#o-nas">O NAS</a>
              </ListItem>
              <ListItem>
                <a href="#nasza-kadra">KADRA</a>
              </ListItem>
              <ListItem>
                <a href="#dlaczego-my">DOŚWIADCZENIE</a>
              </ListItem>
              <ListItem>
                <a href="#opieka-nocna-i-swiateczna">OPIEKA NOCNA I ŚWIĄTECZNA</a>
              </ListItem>
              <ListItem>
                <a href="#druki-do-pobrania">DO POBRANIA</a>
              </ListItem>
            </List>
          </ListBox>
          <ListBox>
            <List>
              <ListItem style={{marginBottom: "24px"}}>
                <p>Rejestracja telefoniczna</p>
                <a href="tel:48914045888">+ 48 91  404 58 88</a>
                <a href="tel:724100548">+ 48 724 100 548</a>
              </ListItem>
              <ListItem>
                <p>Mail</p>
                <a href="mailto:nzozchrobry@wp.pl">nzozchrobry@wp.pl</a>
                <a href="mailto:chrobry_123@wp.pl">chrobry_123@wp.pl</a>
              </ListItem>
            </List>
          </ListBox>
        </FlexBox>
      </Container>
    </Wrapper>
  )
}

export default Footer
