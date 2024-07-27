import React from "react"
import styled from "styled-components"
import Card from "../molecules/card";
import DoctorSVG from "../../images/doctor.inline.svg"
import Heading from "../atoms/heading";
import { FlexBox } from "../../components/flexbox";
import { color } from "../../components/colors";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 800px;
  
  @media (min-width: 597px) {
    height: 540px;
  }

  @media (min-width: 887px) {
      height: 288px;
  }

  &.active {
      height: auto;
  }
`

const TeamBoxes = ({ data }) => (
    <Wrapper>
        {data.kadraKategoria.map(kategoria => (
            <FlexBox direction="column" center width="100%" maxWidth="1740" m="0 auto 85px">
                <Heading center color={color.white} mb="20">{kategoria.kadraKategoriaNazwa}</Heading>
                <FlexBox justify="center" align="stretch" wrap width="100%">
                    {kategoria.kadraKategoriaOsoba.map((osoba) => (
                        <Card data={osoba} icon={<DoctorSVG />}/>
                    ))}
                </FlexBox>
            </FlexBox>
        ))}
    </Wrapper>
)

export default TeamBoxes
