import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { color } from "../components/colors"
import Title from "../atomic/atoms/section-title"
import Text from "../atomic/atoms/text"
import Container from "../atomic/partials/container"
import Footer from "../atomic/sections/homepage/footer"

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 386px);
  width: 100%;
`

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: ${color.secondary};
  border: 2px solid ${color.secondary};
  border-radius: 10px;
  color: ${color.white};
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  padding: 10px 18px;
  cursor: pointer;
  transition: background-color 0.3s ease 0s, color 0.3s ease 0s,
    border-color 0.3s ease 0s;

  &:hover {
    background-color: ${color.white};
    border-color: ${color.secondary};
    color: ${color.secondary};
  }

  @media (min-width: 576px) {
    width: auto;
    white-space: nowrap;
    margin: 24px auto 0;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Nie znaleziono" />
    <Content>
      <Container style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Title title={"Dziękujemy"} align="center" />
        <Title
          title={"Twoja wiadomość została do nas wysłana"}
          align="center"
        />
        <Text
          text={"Możesz wrócić na stronę główną klikając przycisk poniżej"}
          center
        />
        <Button to="/">Strona główna</Button>
      </Container>
    </Content>
    <Footer />
  </Layout>
)

export default NotFoundPage
