import { Box, Heading, } from "@chakra-ui/react";
import LinkButton from "./LinkButton";
import { AiOutlinePlus } from "react-icons/ai";

import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <Box as="section" pt={24} position='relative' minHeight='100vh'>
      <Heading>Dashboard</Heading>
      <SurveyList />
      <Box position='absolute' bottom={2} right={4}>
        <LinkButton
        type
          to="/surveys/new"
          bgColor="#c05621"
          color="white"
          width="50px"
          height="50px"
          rounded={"50%"}
          icon={AiOutlinePlus}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
