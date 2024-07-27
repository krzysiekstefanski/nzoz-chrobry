import React from "react"
import styled from "styled-components"
import { color } from "../../../components/colors"
import Container from "../../partials/container"
import SectionTitle from "../../atoms/section-title";
import Heading from "../../atoms/heading";
import Text from "../../atoms/text";
import Whitebox from "../../atoms/white-box";
import { FlexBox } from "../../../components/flexbox";
import Shapes from "../../../images/shapes-6.inline.svg"

const NightShift = styled.section`
padding: 48px 0;
position: relative;

@media (min-width: 769px) {
  padding: 104px 0;
}
`

const Box = styled.div`
  background-color: ${color.primaryLight};
  background: linear-gradient(0deg, rgba(90, 116, 203, 0.8), rgba(90, 116, 203, 0.8)), url(.jpg);
  border-radius: 10px;
  padding: 15px;
  
  @media (min-width: 769px) {
    padding: 50px;
  }
`;

const ShapesBackground = styled.div`
  position: absolute;
  width: 100%;
  top: 29%;
  left: 0;
  transform: translateY(-50%);
  overflow: hidden;
  opacity: .3;
  z-index: -1;

  svg {
    transform: translateX(-5%);
  }
`;

const ShapesBackground2 = styled.div`
  position: absolute;
  width: 19%;
  bottom: -129%;
  right: 0;
  transform: translateY(-50%);
  overflow: hidden;
  opacity: .3;
  z-index: -1;
`;

const NightShiftSection = ({ className }) => (
  <NightShift id="opieka-nocna-i-swiateczna" className={className}>
    <Container noPadding> 
      <Box>
        <SectionTitle title="Nocna I świąteczna opieka zdrowotna" color={color.white} mb="10" />
        <Text color={color.white} mb="50">
          Oświadczenie o upoważnieniu/odmowie upoważnienia dla osoby bliskiej do informacji  o stanie zdrowia i udzielanych swiadczeniach zdrowotnych oraz dokumentacji medycznejOświadczenie o upoważnieniu/odmowie upoważnienia dla osoby bliskiej do informacji o stanie zdrowia i udzielanych swiadczeniach zdrowotnych oraz dokumentacji medycznejOświadczenie o upoważnieniu/odmowie upoważnienia dla osoby bliskiej do informacjio stanie zdrowia i udzielanych swiadczeniach zdrowotnych oraz dokumentacji medycznejOświadczenie o upoważnieniu/odmowie upoważnienia dla osoby bliskiej do informacji o stanie zdrowia i udzielanych swiadczeniach zdrowotnych oraz dokumentacji medycznejOświadczenie o upoważnieniu/odmowie upoważnienia dla osoby bliskiej do informacji o stanie zdrowia i udzielanych swiadczeniach zdrowotnych oraz dokumentacji medycznejOświadczenie o upoważnieniu/odmowie upoważnienia dla osoby bliskiej do informacji o stanie zdrowia i udzielanych swiadczeniach zdrowotnych oraz dokumentacji medycznej
        </Text>
        <Whitebox p="20px">
          <Text font="Barlow" size="20" interline="24" weight="500">Najbliższe miejsca</Text>
          <FlexBox column directionMD="row" justify="space-between" p="20px 26px 0">
            <FlexBox column width="100%" widthMD="30%" maxWidthMD="253" mb="20" mbMD="0">
              <Text font="Barlow" size="20" interline="24" weight="600" mb="10">Szpital Powiatowy w Gryfinie ul. Niepodległości 39</Text>
              <Text>Lekarz: <a href="tel:48519096702">+48 519 096 702</a></Text>
              <Text mbMD="32">Pielęgniarka: <a href="tel:48519096703">+48 519 096 703</a></Text>
            </FlexBox>
            <FlexBox column width="100%" widthMD="30%" maxWidthMD="253" mb="20" mbMD="0">
              <Text font="Barlow" size="20" interline="24" weight="600" mb="10">Chojna w ramach umowy ze Szpitalem w Dębnie ul. Polna 3A </Text>
              <Text><a href="tel:48914612855">+48 914 612 855</a></Text>
            </FlexBox>
            <FlexBox column width="100%" widthMD="30%" maxWidthMD="253">
              <Text font="Barlow" size="20" interline="24" weight="600" mb="10">Szpital Powiatowy w Dębnie ul. Kosciuszki 58 budynek A I piętro </Text>
              <Text><a href="tel:48957602063">+48 957 602 063,</a> wew. 207, 239</Text>
            </FlexBox>
          </FlexBox>
        </Whitebox>
      </Box>
    </Container>
    <ShapesBackground>
      <Shapes />
    </ShapesBackground>
    <ShapesBackground2>
      <Shapes />
    </ShapesBackground2>
  </NightShift>
)

export default NightShiftSection
