//contains logic to render a single label and text field

import { FormControl, FormLabel,FormErrorMessage, Input } from "@chakra-ui/react"


const SurveyField = ({input,label,meta}) => {
   
    return (
    <FormControl isInvalid={meta.touched && meta.invalid}>
        <FormLabel>{label}</FormLabel>
        <Input {...input} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}

export default SurveyField