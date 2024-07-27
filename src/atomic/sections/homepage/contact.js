import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Container from "../../partials/container"
import SectionTitle from "../../atoms/section-title";
import ContentCenter from "../../partials/content-center"
import Form from "../../organisms/form"
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import Shapes from "../../../images/shapes-3.inline.svg"
import Icon from "../../atoms/icon";
import PhoneSVG from "../../../images/phone.inline.svg";

const Contact = styled.section`
padding: 48px 0;
position: relative;

@media (min-width: 769px) {
  padding: 104px 0;
}
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
      display: none !important;
      overflow: visible !important;
      padding-top: 140%;

      @media (min-width: 769px) {
        display: block !important;
      }

      picture {
        &::before {
          content: '';
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
        border-radius: 10px;
      }

      &::before {
        content: '';
        display: block;
        height: 94px;
        width: 70%;
        background-color: ${color.secondary};
        box-shadow: 0px 10px 20px rgba(90, 116, 203, 0.2);
        border-radius: 10px;
        position: absolute;
        top: -10px;
        right: -10px;
        z-index: -1;
      }
    }
  }
`

const Box = styled.div`
  display: block;
  height: 144px;
  width: 100%;
  background-color: rgba(90, 116, 203, 0.9);
  box-shadow: 0px 10px 20px rgba(90, 116, 203, 0.2);
  border-radius: 10px;
  bottom: -10px;
  left: -10px;
  z-index: 1;
  padding: 20px;
  margin-bottom: 48px;
  
  @media (min-width: 769px) {
    position: absolute;
    width: auto;
    margin-bottom: 0;
  }

  span, a {
    display: flex;
    color: ${color.white};
  }

  & > span {
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  a {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    text-decoration: none;

    span {
      margin-right: 10px;
    }
  }

  svg {
    path {
      fill: ${color.white};
    }
  }
`;

const ShapesBackground = styled.div`
  position: absolute;
  width: 58%;
  top: 20%;
  right: 0;
  transform: translateY(-50%);
  overflow: hidden;
  opacity: .3;
  z-index: -1;
`;

const ContactSection = ({ className, data }) => (
  <Contact id="kontakt" className={className}>
    <Container>
      <Content>
        <FlexBox className="content-left" width="100%" widthMD="49.6%" pr="0" prMD="123">
          <div style={{position: "relative", width: "100%"}}>
            <Img fixed={data.kontaktZdjecie.localFile.childImageSharp.fluid} />
            <Box>
              <span>Rejestracja telefoniczna</span>
              <a href="tel:48914045888" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                <Icon icon={<PhoneSVG />} size="20" mr="10" />+ 48 91  404 58 88
              </a>
              <a href="tel:724100548" style={{display: "flex", alignItems: "center"}}>
                <Icon icon={<PhoneSVG />} size="20" mr="10" />
                + 48 724 100 548
              </a>
            </Box>
          </div>
        </FlexBox>
        <FlexBox className="content-right" direction="column" width="100%" widthMD="50.4%">
          <SectionTitle title="FORMULARZ KONTAKTOWY" mr="auto" mb="28" underline />
          <Form />
          </FlexBox>
      </Content>
    </Container>
    <ShapesBackground>
      <Shapes />
    </ShapesBackground>
  </Contact>
)

export default ContactSection
