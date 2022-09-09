import { Box, Text,Flex, Divider, Icon, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";

import { fetchSurveys } from "../../actions";

const SurveyList = (props) => {
   
    useEffect(() => {
        props.fetchSurveys();
        console.log(props.surveys);
      }, []);
 

  

  return (
    <Box>
      {renderSurveys()}
    </Box>
  );

  //render list of surveys
  function renderSurveys()  {

  if (props.surveys.length < 1) {
    return(
      <Box>
        <Heading>Let's get started</Heading>
        <Text>Create a survey</Text>
      </Box>
    )
  }
    
  return  props.surveys.reverse().map((survey) => {
        return (
          <Flex cursor={'pointer'}  key={survey.id} direction={'column'} color='gray.800' border="1px solid" rounded={10} my={[4,6]} p={[4,6]} boxShadow={'md'}>
            
              <Text fontWeight={'bold'} fontSize='20px'>{survey.title}</Text>
              <Text>{survey.body}</Text>
              <Text marginLeft={'auto'} as="span" py={4}>
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </Text>
            <Divider />
            <Flex color='orange.500' pt={4}>
              <Text mr={4} as="span">Yes: {survey.yes}</Text>
              <Text as="span">No: {survey.no}</Text>
              <Icon w={6} h={6} as={AiOutlineDelete} marginLeft={'auto'}></Icon>
            </Flex>
          </Flex>
        );
      });

}

};

const mapStateToProps = (state) => {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
