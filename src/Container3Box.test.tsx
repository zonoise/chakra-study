import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { Container3Box } from "./Container3Box"

test("renders learn react link", () => {
  render(<Container3Box />)
  const r = new RegExp("うまい");
  const linkElement = screen.getByText(r,{exact:false})
  expect(linkElement).toBeInTheDocument()
})
