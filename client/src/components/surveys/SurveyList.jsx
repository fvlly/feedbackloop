import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
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
    
  return  props.surveys.reverse().map((survey) => {
        return (
          <Box key={survey.id} border="1px solid" rounded={10} my={[4,6]} p={[4,6]}>
            <Box>
              <Text>{survey.title}</Text>
              <Text>{survey.body}</Text>
              <Text as="span">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </Text>
            </Box>
            <Box color='orange.500'>
              <Text as="span">Yes: {survey.yes}</Text>
              <Text as="span">No: {survey.no}</Text>
            </Box>
          </Box>
        );
      });

}

};

const mapStateToProps = (state) => {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
