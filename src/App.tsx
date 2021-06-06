import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Container3Box } from "./Container3Box"
import { GridSample } from "./GridSample"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container3Box></Container3Box>
    <GridSample />
  </ChakraProvider>
)
