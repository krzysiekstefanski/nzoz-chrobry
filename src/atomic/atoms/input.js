import React from "react"
import styled from "styled-components"
import { color } from "../../components/colors"

const Field = styled.input`
  height: 44px;
  width: 100%;
  padding: 12px;
  background-color: #d2e1e8;
  background-color: ${color.blueLight};
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  border: none;
`

const Input = () => <Field />

export default Input
