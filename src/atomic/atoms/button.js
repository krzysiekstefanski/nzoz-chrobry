import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { color } from "../../components/colors"
import PropTypes from "prop-types"

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height ? props.height : "auto")};
  width: 100%;
  background-color: ${props =>
    props.theme === "primary40" ||
    props.theme === "primary48" ||
    props.theme === "primary56"
      ? color.white
      : color.secondary};
  //background-image: linear-gradient(90deg, ${color.secondary} 0%, ${color.third} 100%);
  border: 2px solid ${color.secondary};
  border-radius: 10px;
  color: ${props =>
    props.theme === "primary40" ||
    props.theme === "primary48" ||
    props.theme === "primary56"
      ? color.secondary
      : color.white};
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  padding: ${props => (props.p ? props.p : "10px 10px 10px 20px")};
  margin: ${props => (props.margin ? props.margin : "")};
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  @media (min-width: 576px) {
    width: auto;
    white-space: ${props => (props.wrap ? "" : "nowrap")};
    max-width: ${props => props.width};
    margin: ${props => (props.marginSM ? props.marginSM : "")};
  }

  @media (min-width: 769px) {
    margin: ${props => (props.marginMD ? props.marginMD : "")};
  }

  @media (min-width: 992px) {
    margin: ${props => (props.marginLG ? props.marginLG : "")};
  }

  @media (min-width: 1250px) {
    margin: ${props => (props.marginXL ? props.marginXL : "")};
  }

  &:hover {
    //background-image: linear-gradient(90deg, #FFF 0%, #FFF 100%);
    background-color: ${props =>
      props.theme === "primary40" ||
      props.theme === "primary48" ||
      props.theme === "primary56"
        ? color.white
        : color.white};
    border-color: ${props =>
      props.theme === "primary40" ||
      props.theme === "primary48" ||
      props.theme === "primary56"
        ? color.secondary
        : color.secondary};
    color: ${props =>
      props.theme === "primary40" ||
      props.theme === "primary48" ||
      props.theme === "primary56"
        ? color.secondary
        : color.secondary};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    width: 34px;
    background-color: #fff;
    border-radius: 10px;
    color: ${color.secondary};
    margin-left: 20px;
  }
`

const Button = ({
  content,
  id,
  className,
  theme,
  height,
  width,
  arrow,
  arrow2,
  margin,
  marginSM,
  marginMD,
  marginLG,
  p,
  wrap,
  onClick,
  target,
  tel,
}) => (
  <Wrapper
    id={id}
    className={className}
    to={!tel ? (content.url ? content.url : content) : null}
    href={tel ? (content.url ? content.url : content) : null}
    height={height}
    width={width}
    arrow={arrow}
    arrow2={arrow2}
    theme={theme}
    p={p}
    margin={margin}
    marginSM={marginSM}
    marginMD={marginMD}
    marginLG={marginLG}
    wrap={wrap}
    onClick={onClick}
    target={target}
    tel={tel}
  >
    {content.text}
    {arrow && 
      <span>
        {">"}
      </span>
    }
  </Wrapper>
)

export default Button

Button.propTypes = {
  width: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  content: {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  },
}

Button.defaultProps = {
  rel: "noopener noreferrer nofollow",
  target: "_blank",
  width: "auto",
  content: {
    text: "Start Your Business with Us, Today!",
    url: "/",
  },
}
