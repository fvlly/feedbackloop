import { withRouter   } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Heading,Button,Flex, VStack, StackDivider, Text } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineMail } from "react-icons/ai";

import formFields from "./formFields";

import { submitSurvey } from "../../actions";

const SurveyFormReview = ({ onCancel, formValues,submitSurvey,history}) => {

    const reviewFields = formFields.map(({name,label}) =>{
         return(
            <Box key={name}>
                <label>{label}</label>
                <Text fontWeight={'bold'} py='4'>{formValues[name]}</Text>
            </Box>
        )
    })

    return (
    <Box>
      <Heading as="h5">Please confirm your entries</Heading>
      <Box>
      <VStack alignItems={'start'}  spacing={2} divider={<StackDivider borderColor='gray.700'/>} >
        {reviewFields}
      </VStack>
        
    
      </Box>
      <Flex justify={'space-between'}>
      <Button
        onClick={onCancel}
        leftIcon={<AiOutlineArrowLeft />}
        colorScheme="red"
      >
        Back
      </Button>
      <Button
        onClick={()=>submitSurvey(formValues,history)}
        rightIcon={<AiOutlineMail />}
        colorScheme="teal"
      >
        Send Survey
      </Button>
      </Flex>
    </Box>
  );
};

function mapStateToProps(state) {

    return {
       formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps,{submitSurvey})(withRouter(SurveyFormReview));

//manual form review
{/* <VStack  spacing={4} divider={<StackDivider borderColor='gray.700' />}>
            <Text> Survey Title: {formValues.title} </Text>
            <Text> Survey Line: {formValues.subject} </Text>
            <Text> Email Body: {formValues.body} </Text>
            <Text> Reipients: {formValues.emails} </Text>
        </VStack> */}