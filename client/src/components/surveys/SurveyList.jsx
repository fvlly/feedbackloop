import { Box, Text, Flex, Divider, Icon, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { FcSurvey } from "react-icons/fc";

import { fetchSurveys, deleteSurvey } from "../../actions";
import LinkButton from "../LinkButton";

const SurveyList = (props) => {
  useEffect(() => {
    props.fetchSurveys();
    
  }, []);

  return <Box >{renderSurveys()}</Box>;

  //render list of surveys
  function renderSurveys() {
    if (props.surveys.length < 1) {
      return (
        <Box>
          <Text fontSize={[16,22]} py={[4,6]}>
             Let's get you started and create your first survey.
          </Text>
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
      );
    }

    return (
      <Box pt={'10px'} >
        <Text color={'gray.900'} py={4} fontSize={['20px']}> Good to have you back, here are your surveys </Text>
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
      <SimpleGrid pt={[6]} columns={[null,null,2,3]} spacing={'40px'}>
        {props.surveys.reverse().map((survey) => {
      return (
        <Flex
          key={survey._id}
          cursor={"pointer"}
          direction={"column"}
          color="gray.800"
          border="1px solid"
          borderColor={'orange.500'}
          rounded={10}
          my={[4, 6]}
          p={[4, 6]}
          boxShadow={"md"}
          _hover={{transform:'scale(1.01)',
                   boxShadow:'2xl'
        }}
        >
          <Text fontWeight={"bold"} fontSize="20px">
            {survey.title}
          </Text>
          <Text>{survey.body}</Text>
          <Text marginLeft={"auto"} as="span" py={4}>
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </Text>
          <Divider />
          <Flex color="orange.500" pt={4}>
            <Text mr={4} as="span">
              Yes: {survey.yes}
            </Text>
            <Text as="span">No: {survey.no}</Text>
            <Icon
              onClick={() => props.deleteSurvey(survey._id)}
              w={6}
              h={6}
              as={AiOutlineDelete}
              marginLeft={"auto"}
            ></Icon>
          </Flex>
        </Flex>
      );
    })}
      </SimpleGrid>
      </Box>
    )
  }
};

const mapStateToProps = (state) => {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
