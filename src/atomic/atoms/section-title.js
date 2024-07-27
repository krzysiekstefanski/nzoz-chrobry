import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { color } from "../../components/colors"

const Heading = styled.h2`
  font-family: Barlow, sans-serif;
  font-size: 46px;
  line-height: 55px;
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

  ${props => props.underline ? `
    &::before {
      content: '';
      display: block;
      bottom: -9px;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background-color: ${color.third};
      position: absolute;
    }
  ` : ""}
  
`;

const SectionTitle = ({ title, children, color, center, align, pb, pbLG, mr, mb, mbMD, underline }) => (
  <Heading color={color} center={center} align={align} pb={pb} pbLG={pbLG} mr={mr} mb={mb} mbMD={mbMD} underline={underline}>
    {title ? parse(title) : null}
    {children}
  </Heading>
)

export default SectionTitle
