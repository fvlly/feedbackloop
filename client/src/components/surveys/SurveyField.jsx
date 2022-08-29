//contains logic to render a single label and text field

import { FormControl, FormLabel, Input } from "@chakra-ui/react"


const SurveyField = ({input,meta,label}) => {
   
    return (
    <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input {...input} />
    </FormControl>
  )
}

export default SurveyField