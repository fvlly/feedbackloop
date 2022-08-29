import React from 'react'
import {Box,Heading} from '@chakra-ui/react'
import SurveyForm from './SurveyForm'

const Surveys = () => {
  return (
    <Box as='section' pt={24}>
      <SurveyForm />
    </Box>
  )
}

export default Surveys