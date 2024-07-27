import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { color } from "../../components/colors"

const Title = styled.h3`
  font-family: Barlow, sans-serif;
  font-size: 26px;
  line-height: 31px;
  color: ${props => (props.color ? props.color : `${color.primary}`)};
  text-align: ${props => (props.center ? "center" : props.align ? props.align : "")};
  text-transform: uppercase;
  padding-bottom: ${props => (props.pb ? (props.pb === "auto" ? "auto" : `${props.pb}px`) : "")};
  margin-right: ${props => (props.mr ? (props.mr === "auto" ? "auto" : `${props.mr}px`) : "")};
  margin-bottom: ${props => (props.mb ? (props.mb === "auto" ? "auto" : `${props.mb}px`) : "")};
  position: relative;

  @media (min-width: 769px) {
    padding-bottom: ${props => (props.pbLG ? (props.pbLG === "auto" ? "auto" : `${props.pbLG}px`) : "")};
    margin-bottom: ${props => (props.mbMD ? (props.mbMD === "auto" ? "auto" : `${props.mbMD}px`) : "")};
  }
`;

const Heading = ({ text, children, color, center, align, pb, pbLG, mr, mb, mbMD, underline }) => (
  <Title color={color} center={center} align={align} pb={pb} pbLG={pbLG} mr={mr} mb={mb} mbMD={mbMD} underline={underline}>
    {text ? parse(text) : null}
    {children}
  </Title>
)

export default Heading
