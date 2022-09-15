import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { connect } from "react-redux";
import LinkButton from "./LinkButton";
import { FcSurvey } from "react-icons/fc";

import SurveyList from "./surveys/SurveyList";

const Dashboard = (props) => {
  return (
    <Box as="section" pt={24} position="relative" minHeight="100vh">
      <Box  fontSize={[18,22]}>
        Welcome
        <Text as="span" color="orange.400" px={2}>
          {props.auth && props.auth.username}
        </Text>
        !!!
      </Box>
      <Box pos={'absolute'} top={'210px'}>
      <LinkButton
        type="router"
        to="/surveys/new"
        bgColor="gray.500"
        color="white"
        width="140px"
        height="40px"
        fontSize={'12px'}
        rounded={10}
        text="Create Survey"
        icon={FcSurvey}
      />
      </Box>

      <SurveyList />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Dashboard);
