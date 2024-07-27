import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../../partials/container"
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import SectionTitle from "../../atoms/section-title"
import Text from "../../atoms/text"
import Button from "../../atoms/button"
import parse from "html-react-parser"
import Shapes from "../../../images/shapes-1.inline.svg"
//import { Parallax, Background } from "react-parallax"

const About = styled.section`
  width: 100%;
  position: relative;
  padding: 48px 0;

  @media (min-width: 769px) {
    padding: 104px 0 200px;
  }
`

const ShapesBackground = styled.div`
  position: absolute;
  width: 60%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  overflow: hidden;
  opacity: 0.3;
  z-index: -1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .content-left {
    .gatsby-image-wrapper {
      overflow: visible !important;
      display: none !important;

      @media (min-width: 769px) {
        display: block !important;
      }

      picture {
        &::before {
          content: "";
          display: block;
          background-color: ${color.white};
          border-radius: 10px;
          filter: drop-shadow(0px 5px 30px rgba(90, 116, 203, 0.1));
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -2;
        }
      }

      img {
        object-position: 77% center !important;
        border-radius: 10px;
      }

      &::before {
        content: "";
        display: block;
        height: 94px;
        width: 70%;
        background-color: ${color.primaryLight};
        box-shadow: 0px 10px 20px rgba(90, 116, 203, 0.2);
        border-radius: 10px;
        position: absolute;
        top: -10px;
        right: -10px;
        z-index: -1;
      }

      &::after {
        content: "";
        display: block;
        height: 94px;
        width: 70%;
        background-color: ${color.secondary};
        box-shadow: 0px 10px 20px rgba(90, 116, 203, 0.2);
        border-radius: 10px;
        position: absolute;
        bottom: -10px;
        left: -10px;
        z-index: -1;
      }
    }
  }
`

const HomepageAboutSection = ({ data }) => (
  <About id="o-nas">
    <ShapesBackground>
      <Shapes />
    </ShapesBackground>
    <Container>
      <Content>
        <FlexBox className="content-left" width="100%" widthMD="49.6%" pr="123">
          <Img fixed={data.oNasZdjecie.localFile.childImageSharp.fluid} />
        </FlexBox>
        <FlexBox
          className="content-right"
          direction="column"
          width="100%"
          widthMD="50.4%"
        >
          <SectionTitle title={data.oNasTytul} mr="auto" mb="28" underline />
          <Text text={data.oNasTekst} size="20" interline="30" />
        </FlexBox>
      </Content>
    </Container>
  </About>
)
export default HomepageAboutSection
