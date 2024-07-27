import React from "react"
import styled from "styled-components"
import { color } from "../../components/colors"
import FormAcceptance from "../molecules/form-acceptance"
import VisibilitySensor from "../../components/VisibilitySensor"
import Text from "../atoms/text"

const Wrapper = styled.div`
  width: 100%;

  .form-label {
    p {
      line-height: 16px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    @media (min-width: 769px) {
      align-items: flex-end;
    }

    @media (min-width: 992px) {
      flex-direction: row;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px ${color.white} inset;
    }
  }
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  .form-label {
    &:first-child {
      @media (min-width: 992px) {
        padding-right: 10px;
      }
    }

    &:last-child {
      @media (min-width: 992px) {
        padding-left: 10px;
      }
    }

    &--wide {
      width: 100%;
    }
  }
`

const Flexbox2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const FormInput = styled.input`
  height: 46px;
  width: 100%;
  font-family: Barlow, sans-serif;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  background-color: transparent;
  border: 0;
  border: 2px solid ${color.primaryLight2};
  border-radius: 10px;
  padding: 5px 15px;
  color: ${color.black};

  &:hover,
  &:focus {
    border-color: ${color.secondary};
    outline: none;
  }

  &::placeholder {
    color: ${color.primary};
  }
`

const FormTextarea = styled.textarea`
  height: 160px;
  width: 100%;
  font-family: Barlow, sans-serif;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  background-color: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border: 2px solid ${color.primaryLight2};
  border-radius: 10px;
  outline: none;
  padding: 10px 15px;
  resize: none;
  color: ${color.black};

  &:hover,
  &:focus {
    border-color: ${color.secondary};
    outline: none;
  }

  &::placeholder {
    color: ${color.primary};
  }
`

const FormButton = styled.button`
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
  }
`

const Form = () => {
  return (
    <Wrapper>
      <Text size="20" interline="30" mb="20">
        Skontaktuj się z nami przy pomocy poniższego formularza.
      </Text>
      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/thank-you"
      >
        <input type="hidden" name="bot-field" />
        <Flexbox>
          <label className={"form-label"} htmlFor="fname">
            <p style={{ display: "none" }}>Imię</p>
            <FormInput
              id="fname"
              type="text"
              name="fname"
              placeholder="Imię"
              required
            />
          </label>
          <label className={"form-label"} htmlFor="lname">
            <p style={{ display: "none" }}>Nazwisko</p>
            <FormInput
              id="lname"
              type="text"
              name="lname"
              placeholder="Nazwisko"
              required
            />
          </label>
        </Flexbox>
        <label className={"form-label form-label--wide"} htmlFor="email">
          <p style={{ display: "none" }}>Adres e-mail</p>
          <FormInput
            id="email"
            type="email"
            name="email"
            placeholder="Adres e-mail"
          />
        </label>
        <label className={"form-label form-label--wide"} htmlFor="phone">
          <p style={{ display: "none" }}>Numer telefonu</p>
          <FormInput
            id="phone"
            type="phone"
            name="phone"
            placeholder="Numer telefonu"
          />
        </label>
        <label
          className={"form-label"}
          htmlFor="message"
          style={{ position: "relative" }}
        >
          <p style={{ display: "none" }}>Wiadomość</p>
          <FormTextarea
            id="message"
            type="text"
            name="message"
            placeholder="Wiadomość"
          />
        </label>
        <FormAcceptance />
        <Flexbox2>
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => (
              <FormButton
                className={isVisible ? "slideUp enter" : "slideUp"}
                type="submit"
              >
                Wyślij
              </FormButton>
            )}
          </VisibilitySensor>
        </Flexbox2>
      </form>
    </Wrapper>
  )
}

export default Form
