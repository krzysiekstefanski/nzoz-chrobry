import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { color } from "../../components/colors"

const Paragraph = styled.p`
    font-family: ${props => (props.font ? `${props.font}, sans-serif` : "")};
    font-size: ${props => (props.size ? props.size : `16`)}px;
    line-height: ${props => (props.interline ? props.interline : `24`)}px;
    font-weight: ${props => (props.weight ? props.weight : "")};
    color: ${props => (props.color ? props.color : color.primary)};
    padding-left: ${props => (props.pl ? (props.pl === "auto" ? "auto" : `${props.pl}px`) : "")};
    margin-bottom: ${props => (props.mb ? (props.mb === "auto" ? "auto" : `${props.mb}px`) : "")};
    text-align: ${props => (props.center ? "center" : "")};
    
    @media (min-width: 769px) {
      margin-bottom: ${props => (props.mbMD ? (props.mbMD === "auto" ? "auto" : `${props.mbMD}px`) : "")};
    }

    a {
      display: block;
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${color.secondary};
      }

      @media (min-width: 1250px) {
        display: inline;
      }
    }
`;

const Text = ({ className, text, children, font, size, interline, weight, color, center, pl, mb, mbMD }) => (
  <Paragraph className={className} font={font} size={size} interline={interline} weight={weight} color={color} center={center} pl={pl} mb={mb} mbMD={mbMD}>
    { text ? parse(text) : null }
    { children }
  </Paragraph>
)

export default Text
