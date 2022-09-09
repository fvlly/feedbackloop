import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import LinkButton from "./LinkButton";

const Landing = () => {
  return (
    <Box>
      <Box
        as="section"
        minH={"100vh"}
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        pt={24}
        color="blue.900"
      >
        <Box display={"flex"} textAlign={"center"} flexDirection="column">
          <Heading fontSize={[20, 28]} py={[4, 6]}>
            Easy Survey creation and Distribution
          </Heading>
          <Heading fontWeight={"bold"} color="orange.500">
            No Hassle, Zero Subscription
          </Heading>
          <Heading fontSize={[20, 28]} py={[4, 6]}>
            Pay X for Y surveys
          </Heading>
          <Box alignSelf={"center"} fontSize='20px'>
            <LinkButton
              text="Create Survey"
              width="140px"
              height={"40px"}
              rounded={8}
              bgColor="blue.800"
              color={"white"}
              py={[4]}
              href="/auth/google"
            />
          </Box>
        </Box>
      </Box>
      <Heading textAlign={"center"}>Let's Put your data to work</Heading>
      <Text py={[4, 6]} textAlign={"center"}>
        Powered By:
      </Text>
      <Flex
        direction={["column", "column", "row"]}
        justify="space-evenly"
        py={[4, 6]}
        gap="2px"
      >
        <Box>
          <Image src="../../mongodb.png" alt="mongodb" />
        </Box>
        <Box>
          <Image src="../../sendgrid.png" alt="sendgrid" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Landing;
