import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { connect } from "react-redux";

import LinkButton from "./LinkButton";

const Landing = (props) => {
  return (
    <Box>
      <Box
        as="section"
        minH={"100vh"}
        display={"flex"}
        alignItems="center"
        justifyContent={["center"]}
        gap={[4,4,6]}
        pt={24}
        color="blue.900"
      >
        <Box display={"flex"} textAlign={["center",'center','center','left']} flexDirection={["column",'column','flex','flex']} >
          <Heading fontSize={[16, 22]} py={[4, 6]}>
            Create surveys with ease
          </Heading>
          <Heading fontWeight={"bold"} fontSize={[24,40]} color="#ffc967">
            No Hassle, Zero Subscription
          </Heading>
          <Heading fontSize={[20, 28]} py={[4, 6]}>
            Pay X for Y surveys
          </Heading>
          <Box alignSelf={["center",'center','center','start']} fontSize="20px">
            <LinkButton
              text="Create Survey"
              width="140px"
              height={"40px"}
              fontSize='14px'
              rounded={8}
              bgColor="blue.800"
              color={"white"}
              py={[4]}
              type={props.auth && "router"}
              to={props.auth ? "/surveys": undefined}
              href="/auth/google"
            />
          </Box>

        </Box>
        <Box w={'40%'} display={['none','none','none','block']}>
            <Image src="../../bgsurvey-image.jpg"></Image>
          </Box>
      </Box>
      <Heading textAlign={"center"}>Let's Put your data to work</Heading>
      <Text py={[4, 6]} textAlign={"center"}>
        Powered By:
      </Text>
      <Flex
        direction={["column", "row", "row"]}
        justify="space-evenly"
        py={[4, 6]}
        gap="2px"
      >
        <Box w={['null','300px','null']}>
          <Image src="../../mongodb.webp" alt="mongodb" />
        </Box>
        <Box w={['null','300px','null']}>
          <Image src="../../sendgrid.webp" alt="sendgrid" />
        </Box>
      </Flex>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Landing);
