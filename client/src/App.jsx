import { useEffect } from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import { connect } from "react-redux";

import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Surveys from './components/surveys/Surveys'
import Landing from './components/Landing'
import { Container } from '@chakra-ui/react'
import { fetchUser } from "./actions";


const App = (props) => {
  
  useEffect(()=>{
    props.fetchUser()
  },[])



  return (
    <BrowserRouter>
    <Header />
    <Container maxW={'98%'}>
    <Route exact path='/' component={Landing} />
    <Route exact path='/surveys' component={Dashboard} />
    <Route  path='/surveys/new' component={Surveys} />

    </Container>
    </BrowserRouter>
    )
}

const mapStateToProps = (state)=>{
  return{auth:state.auth}
}

export default  connect(mapStateToProps,{fetchUser})(App)