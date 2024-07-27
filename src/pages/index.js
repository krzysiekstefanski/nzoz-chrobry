import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Top from "../atomic/sections/homepage/top";
import About from "../atomic/sections/homepage/about";
import Team from "../atomic/sections/homepage/team";
import WhyUs from "../atomic/sections/homepage/why-us";
import NightShift from "../atomic/sections/homepage/night-shift"
import Contact from "../atomic/sections/homepage/contact"
import Files from "../atomic/sections/homepage/files"
import Footer from "../atomic/sections/homepage/footer";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Top data={data.wpPage.zdjecieGlowne} />
    <About data={data.wpPage.oNas} />
    <Team data={data.wpPage.kadra} />
    <WhyUs data={data.wpPage.dlaczegoMy} />
    <Contact data={data.wpPage.kontakt} />
    <NightShift />
    <Files />
    <Footer />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query WordpressAktyPrawne {
    wpPage(id: { eq: "cG9zdDoy" }) {
      title
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
      zdjecieGlowne {
        zdjecieGlowneObraz {
          sourceUrl
          localFile {
            childImageSharp {
              fluid(maxWidth: 3000) {
                src
              }
            }
          }
        }
      }
      oNas {
        oNasTytul
        oNasTekst
        oNasZdjecie {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                src
              }
            }
          }
          sourceUrl
        }
      }
      kadra {
        kadraTytul
        kadraKategoria {
          kadraKategoriaNazwa
          kadraKategoriaOsoba {
            kadraKategoriaImie
            kadraKategoriaStanowisko
            kadraKategoriaOpis
          }
        }
      }
      dlaczegoMy {
        dlaczegomytytul
        dlaczegomyopis
        dlaczegomyzdjecie {
          sourceUrl
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                src
              }
            }
          }
        }
        dlaczegomydoswiadczenie {
          dlaczegomydoswiadczenienazwa
          dlaczegomydoswiadczenieopis
          dlaczegomydoswiadczeniebox
        }
      }
      kontakt {
        kontaktZdjecie {
          sourceUrl
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                src
              }
            }
          }
        }
      }
    }
  }
`
