import React from "react"
import styled from "styled-components"

const SVG = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.size ? props.size : (props.height ? props.height : "24"))}px;
  width: ${props => (props.size ? props.size : (props.width ? props.width : "24"))}px;
  min-height: ${props => (props.size ? props.size : (props.height ? props.height : "24"))}px;
  min-width: ${props => (props.size ? props.size : (props.width ? props.width : "24"))}px;
  max-height: ${props => (props.size ? props.size : (props.height ? props.height : "24"))}px;
  max-width: ${props => (props.size ? props.size : (props.width ? props.width : "24"))}px;
  margin-right: ${props => (props.mr ? `${props.mr}px` : "")};
  margin-bottom: ${props => (props.mb ? `${props.mb}px` : "")};

  svg {
      height: 100%;
      width: 100%;

      path {
          fill: ${props => (props.color ? props.color : "")};
      }
  }
`

const Icon = ({ icon, size, height, width, color, mr, mb }) => (
<SVG size={size} height={height} width={width} color={color} mr={mr} mb={mb}>
    {icon ? icon : null}
</SVG>
) 

export default Icon
