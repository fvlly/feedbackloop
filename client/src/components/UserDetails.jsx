import React from 'react'
import { Stack,Center,Link } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { AiOutlineGooglePlus } from "react-icons/ai";

import LinkButton from './LinkButton';
import Billing from './Billing'

const UserDetails = (props) => {
    
    if (props.auth) {
        return (
          <Stack direction={props.direction} spacing={props.spacing}>
            <Center><Billing /></Center>
            <Center color="#ff6d60" p={[1.5]} >
              Credits: {props.auth.credits}
            </Center>
            <Center><Link _hover={{textDecoration: 'none',color:'white',fontWeight:'bold'}} color="#ff6d60" href="/api/logout">Sign Out</Link></Center>
          </Stack>
        )
      } else if (props.auth === null) {
        return;
      } else {
        return (
          <Center>
            <LinkButton
            text="Sign in with google"
            href="/auth/google"
            bgColor="#ff6d60"
            color="white"
            rounded='6'
            fontSize={'12px'}
            width='140px'
            height='40px'
            icon={AiOutlineGooglePlus}
          />
          </Center>
        )
      }
};
  




const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };

}

export default connect(mapStateToProps)(UserDetails)