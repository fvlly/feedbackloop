import {  Box, Text } from "@chakra-ui/react";
import { connect } from "react-redux";


import SurveyList from "./surveys/SurveyList";

const Dashboard = (props) => {
  return (
    <Box as="section" pt={24} position="relative" minHeight="100vh">
        <Text fontSize={[18,22]} color="orange.400" px={2}>
         Welcome  {props.auth && props.auth.username} !!!
        </Text>
      
      <SurveyList />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Dashboard);
