import { reduxForm, Field } from "redux-form/dist/redux-form";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import SurveyField from "./SurveyField";
import LinkButton from "../LinkButton";
import validateEmails from "../../utils/validateEmails";
import { AiOutlineArrowRight } from "react-icons/ai";
import {ImCross} from "react-icons/im"
import formFields from "./formFields";




const SurveyForm = (props) => {
  
  
    //helper function
  const renderFields = () => {
    return formFields.map(({label,name})=>{
        return <Field key={label} label={label} name={name} component={SurveyField} />
    })
  } 

  

    return(
        <Box>
            <form onSubmit={props.handleSubmit(props.onSurveySubmit)} >
            <Heading as='h3'>Create New Survey</Heading>
            {renderFields()}
            <Flex py={[4,6,]} justify='space-between'>
                <LinkButton type='router' to='/surveys' text='Cancel' rounded={6} bgColor='red' color='white' height='40px' icon={ImCross}/>
               <Button rightIcon={<AiOutlineArrowRight />} type="submit" colorScheme='teal'>Next</Button>
                {/* <LinkButton type  to='/surveys/review' text='Next' rounded={6} bgColor='teal' color='white' icon={AiOutlineArrowRight}/> */}
            </Flex>
            </form>
        </Box>
    )
};

function validate(values) {
  const errors = {}

  errors.recipients = validateEmails(values.recipients|| '')


  if(!values.title) {
    errors.title = "You must provide a Title"
  }
  if(!values.subject) {
    errors.subject = "You must provide a Subject"
  }
  if(!values.body) {
    errors.body = "You must provide a Message"
  }
  if(!values.recipients) {
    errors.recipients = "You must provide an Email"
  }

  


  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount:false
})(SurveyForm);


// dynamic error handling
  // FIELDS.forEach(({name}) =>{
  //   if (!values[name]) {
  //     errors[name] = 'You must provide a Value'
  //   }
  // })