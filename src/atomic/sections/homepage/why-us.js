import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image";
import Container from "../../partials/container";
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import SectionTitle from "../../atoms/section-title";
import Text from "../../atoms/text";
import Button from "../../atoms/button"
import parse from "html-react-parser"
import ExperianceCard from "../../organisms/experiance-card"
import Shapes from "../../../images/shapes-2.inline.svg"
//import { Parallax, Background } from "react-parallax"

const WhyUs = styled.section`
  width: 100%;
  position: relative;
  padding: 48px 0 0;

  @media (min-width: 769px) {
    padding: 104px 0 0;
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
    display: flex;
    flex-direction: column;
  }

  .content-left {
    .gatsby-image-wrapper {
      min-height: 320px;
    }

    img {
      height: auto !important;
      object-fit: contain !important;
      z-index: -2;
    }
  }
`

const ShapesBackground = styled.div`
  position: absolute;
  width: 100%;
  top: 2%;
  left: 0;
  transform: translateY(-50%);
  overflow: hidden;
  opacity: .3;
  z-index: -1;

  svg {
    transform: translateX(-10%);
  }
`;


const HomepageWhyUsSection = ({ data }) => (
<WhyUs id="dlaczego-my">
  <Container>
    <Content>
      <FlexBox className="content-left" direction="column" width="100%" widthMD="59.1%" prMD="160">
        <SectionTitle title={data.dlaczegomytytul} mr="auto" mb="28" underline />
        <Text text={data.dlaczegomyopis} size="20" interline="30" mb="20" />
        <Img fixed={data.dlaczegomyzdjecie.localFile.childImageSharp.fluid} />
      </FlexBox>
      <FlexBox className="content-right" directionMD="column" justifySM="space-between" justifyMD="center" wrap width="100%" widthMD="40.9%">
        {data.dlaczegomydoswiadczenie.map(doswiadczenie => (
          <ExperianceCard data={doswiadczenie} mb="41"/>
        ))}
      </FlexBox>
    </Content>
  </Container>
  <ShapesBackground>
    <Shapes />
  </ShapesBackground>
</WhyUs>
)
export default HomepageWhyUsSection