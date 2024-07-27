import React, { useState } from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../../partials/container";
import { color } from "../../../components/colors"
import SectionTitle from "../../atoms/section-title";
import TeamBoxes from "../../organisms/team-boxes";
import ArrowDownSVG from "../../../images/arrow-down.inline.svg"
//import { Parallax, Background } from "react-parallax"

const Team = styled.section`
  width: 100%;
  position: relative;
  padding: 48px 0 141px;
  background-color: ${color.primaryLight};

  @media (min-width: 769px) {
    padding: 104px 0 141px;
  }

  button {
    font-family: Barlow, sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
    color: ${color.white};
    text-transform: uppercase;
    background-color: transparent;
    border: transparent;
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    cursor: pointer;

    span {
      display: block;
      padding-top: 5px;
      pointer-events: none;
    }

    &.active {
      span {
        transform: scale(-1);
      }
    }
  }
`

const HomepageTeamSection = ({ data }) => {
  const [teamIsActive, setTeamIsActive] = useState(false)

  const handleClick = e => {
    e.target.previousSibling.classList.toggle("active")
    e.target.classList.toggle("active")
    setTeamIsActive(!teamIsActive)
  }

  return (
    <Team id="nasza-kadra">
      <Container>
        <SectionTitle title={data.kadraTytul} color={color.white} center mb="50" />
      </Container>
      <TeamBoxes data={data}/>
      <button onClick={e => handleClick(e)}>{teamIsActive ? "Pokaż mniej" : "Pokaż więcej"}<span><ArrowDownSVG /></span></button>
    </Team>
  )}
export default HomepageTeamSection