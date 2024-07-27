import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"
import parse from "html-react-parser"
import Container from "../../partials/container";
import { color } from "../../../components/colors"
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import PhoneSVG from "../../../images/phone.inline.svg";

const Top = styled.section`
  width: 100%;
  position: relative;

  .custom-bg {
    padding-top: 97px;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    
    .gatsby-image-wrapper {
      display: block !important;
      width: 100%;
      height: 100%;

      // img {
      //   object-position: center right !important;
      // }
    }
  }
`

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 97px;

  .top-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  &.form-overlay {
    padding: 100px 0 60px;
    position: static;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 100px;
  
  @media (min-width: 769px) {
    padding: 150px 0 100px;
  }
`;

const Title = styled.h1`
  color: ${color.primary};
  font-family: Barlow, sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  max-width: 835px;

  @media (min-width: 576px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (min-width: 769px) {
    font-size: 60px;
    line-height: 72px;
  }

  span {
    color: ${color.secondary};
  }
`

const Subtitle = styled.p`
  color: ${color.primary};
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 40px;
  max-width: 630px;

  span {
    font-weight: bold;
  }
`

const Whitebox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 30px rgba(90, 116, 203, 0.1);
  padding: 10px 20px;
  margin-right: auto;

  span, a {
    display: flex;
    color: ${color.primary};
  }

  & > span {
    font-size: 22px;
    line-height: 26px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  a {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    text-decoration: none;

    span {
      margin-right: 10px;
    }
  }
`;

const HomepageTopSection = ({ data }) => (
<Top id="home">
  <div className="custom-bg">
    <Img fixed={data.zdjecieGlowneObraz.localFile.childImageSharp.fluid} />
  </div>
<Overlay className="top-overlay">
  <Container className="top-content">
    <Content>
      <Title>{parse("Niepubliczny Zakład<br> Opieki Zdrowotnej <span>CHROBRY</span>")}</Title>
      <Subtitle>{parse("Troska o zdrowie <span>każdego pacjenta.</span>")}</Subtitle>
      <Button 
        content={{
          text: "Elektroniczna rejestracja",
          url:
            "https://lekarzebezkolejki.pl/NiepublicznyZakladOpiekiZdrowotnejChrobryGryfino?ls=pediatra",
        }}
        margin="0 auto 70px 0"
        arrow
        tel
      />
      <Whitebox>
        <span>Rejestracja telefoniczna</span>
        <a href="tel:48914045888" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
          <Icon icon={<PhoneSVG />} size="20" mr="10" />+ 48 91  404 58 88
        </a>
        <a href="tel:724100548" style={{display: "flex", alignItems: "center"}}>
          <Icon icon={<PhoneSVG />} size="20" mr="10" />
          + 48 724 100 548
        </a>
      </Whitebox>
    </Content>
  </Container>
</Overlay>
</Top>
)
export default HomepageTopSection