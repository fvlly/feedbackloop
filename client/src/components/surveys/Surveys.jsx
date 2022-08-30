import {useState} from 'react'
import {Box,Heading} from '@chakra-ui/react'
import { reduxForm } from 'redux-form/dist/redux-form'

import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

const Surveys = () => {

  const [showFormReview,setShowFormReview] = useState(false)

  const renderContent = () =>{
    if(showFormReview) {
      return <SurveyFormReview onCancel={()=>setShowFormReview(false)} />
    }

    return <SurveyForm onSurveySubmit={()=>setShowFormReview(true )} />
  }


  return (
    <Box as='section' pt={24}>
      {renderContent()}
    </Box>
  )
}

export default reduxForm({
  form: 'surveyForm'
})(Surveys)