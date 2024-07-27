import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import Icon from "../atoms/icon"
import Whitebox from "../atoms/white-box"
import Text from "../atoms/text"
import { color } from "../../components/colors"

const Employer = styled(Whitebox)`
  position: relative;
  overflow: hidden;

    &::before {
      content: '';
      width: 160%;
      height: 70%;
      position: absolute;
      top: -34%;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${color.primaryLight3};
      border-radius: 50%;
    }

    i, p {
      position: relative;
    }
`

const Card = ({ data, icon }) => (
  <Employer flex column center maxWidth="260" p="20px 5px" m="15px">
    <Icon icon={icon} size="40" mb="30"/>
    <Text font="Barlow" size="20" center weight="600">{parse(data.kadraKategoriaImie)}</Text>
    {data.kadraKategoriaStanowisko ? <Text font="Barlow" interline="20" center mb="20">{parse(data.kadraKategoriaStanowisko)}</Text> : null}
    {data.kadraKategoriaOpis ? <Text center={true}>{parse(data.kadraKategoriaOpis)}</Text> : null}
  </Employer>
)

export default Card
