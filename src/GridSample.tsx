import * as React from "react"
import {
  GridItem,
  Container,
  Heading,
  Grid,
  Text,
} from "@chakra-ui/react"

type ItemProps = {
  head: string,
  body: string,
  colSpan?: number 
}

const MyCard: React.FC<ItemProps> = ({ head, body, colSpan}) => {
  const headingStyle = {
    bg: "orange.400",
    borderRadius: "8px 8px 0 0",
    border: "1px solid gray",
    margin: "-1px -1px 0"
  }

  if( colSpan === undefined){
    colSpan = 1
  } 

  return (
    <GridItem colSpan={[1,1,colSpan]} w={"100%"} h="" bg="orange.300" borderRadius="8" boxShadow="md" border="1px solid gray">
      <Heading sx={headingStyle} p={2} size="lg" textAlign="center">{head}</Heading>
      <Text m={2}>{body}</Text>
    </GridItem>
  )
};

export const GridSample = () => {

  const dummyText =
    "Chakra UI は、React アプリケーションを構築するために必要なビルディング" +
    "ブロックを提供する";

  const dummyText2 = dummyText + dummyText;

  return (
    <Container maxW="container.xl" bg={["blue.300","blue.900","blue.300","blue.800"]} centerContent>
      <Heading p={3} size="xl">Grid col=(2,2,4,5)</Heading>
      <Grid templateColumns={["repeat(2, 1fr)", null, "repeat(4, 1fr)",null,"repeat(5, 1fr)"]}
        rowGap={4} columnGap={4} bg="green.200">
        <MyCard head="子" body={dummyText} />
        <MyCard head="丑" body={dummyText2} colSpan={2} />
        <MyCard head="寅" body={dummyText2}  />
        <MyCard head="卯" body={dummyText} />
        <MyCard head="辰" body={dummyText2}/>
        <MyCard head="巳" body={dummyText} />
        <MyCard head="午" body={dummyText} />
        <MyCard head="未" body={dummyText} />
        <MyCard head="申" body={dummyText} />
        <MyCard head="酉" body={dummyText} />
        <MyCard head="戌" body={dummyText} />
        <MyCard head="亥" body={dummyText} />
      </Grid>
    </Container>

  )
}
