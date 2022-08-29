import { reduxForm, Field } from "redux-form/dist/redux-form";
import { Box, Flex, Heading } from "@chakra-ui/react";
import SurveyField from "./SurveyField";
import LinkButton from "../LinkButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import {ImCross} from "react-icons/im"

const FIELDS = [
    {label:'Survey Title', name: 'title'},
    {label:'Survey Line', name: 'subject'},
    {label:'Email Body', name: 'emails'},
    {label:'Recipient List', name: 'recipients'},
  ]


const SurveyForm = () => {
  
  
    //helper function
  const renderFields = () => {
    return FIELDS.map(({label,name})=>{
        return <Field key={label} label={label} name={name} component={SurveyField} />
    })
  } 
    return(
        <Box>
            <form >
            <Heading as='h3'>Create New Survey</Heading>
            {renderFields()}
            <Flex py={[4,6,]} justify='space-between'>
                <LinkButton type to='/surveys' text='Cancel' rounded={6} bgColor='red' color='white' height='40px' icon={ImCross}/>
                <LinkButton type  to='/surveys/review' text='Next' rounded={6} bgColor='teal' color='white' icon={AiOutlineArrowRight}/>
            </Flex>
            </form>
        </Box>
    )
};

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
