import { Flex,Box,Heading, } from "@chakra-ui/react";
import LinkButton from "./LinkButton";
import { AiOutlinePlus } from "react-icons/ai";

import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <Box as="section" pt={24} position='relative' minHeight='100vh'>
      <Heading>Dashboard</Heading>
      <SurveyList />
      <Flex  position='absolute' top={[20,'90px']} right={0}>
        <LinkButton
        type
          to="/surveys/new"
          bgColor="#dd6b20"
          color="white"
          width="50px"
          height="50px"
          rounded={"50%"}
          icon={AiOutlinePlus}
        />
      </Flex>
    </Box>
  );
};

export default Dashboard;
