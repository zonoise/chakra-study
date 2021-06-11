import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Container3Box } from "./Container3Box"
import { GridSample } from "./GridSample"
import { Navbar } from "./Navbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Container3Box></Container3Box>
    <GridSample />
  </ChakraProvider>
)
