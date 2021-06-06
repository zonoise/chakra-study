import * as React from "react"
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react"

export const Container3Box = () => {
  
  const headingStyle ={
    bg:"orange.400",
    borderRadius:"8px 8px 0 0",
    border:"1px solid gray",
    margin:"-1px -1px 0" 
  }

  const dummyText = 
    "Chakra UI は、React アプリケーションを構築するために必要なビルディング"+
    "ブロックを提供する";

  return (
  <Container maxW="container.lg" bg="yellow.100" centerContent>
    <Heading p={3} size="xl">特徴</Heading>
    <Stack w="100%" bg="" direction={["column",null,"row"]} spacing="24px" justifyContent={["center","space-evenly"]}>
      <Box w={["100%",null,"200px"]} h="" bg="orange.300" borderRadius="8" boxShadow="md" border="1px solid gray">
        <Heading  sx={headingStyle} p={2} size="lg" textAlign="center">{'\u2728'}うまい{'\u2728'}</Heading>
        <Text align="center" m={2}>{dummyText}</Text>
      </Box>
      <Box w={["100%",null,"200px"]} h="" bg="orange.300" borderRadius="8" boxShadow="md" border="1px solid gray">
        <Heading  sx={headingStyle} p={2} size="lg" textAlign="center">{'\u2728'}はやい{'\u2728'}</Heading>
        <Text m={2}>{dummyText}</Text>
      </Box>
      <Box w={["100%",null,"200px"]} h="" bg="orange.300" borderRadius="8" boxShadow="md" border="1px solid gray">
        <Heading  sx={headingStyle} p={2} size="lg" textAlign="center">{'\u2728'}やすい{'\u2728'}</Heading>
        <Text m={2}>{dummyText}</Text>
      </Box>
    </Stack>
  </Container>
  )
}
