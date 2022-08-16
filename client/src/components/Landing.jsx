import { Box, Heading,
Link } from "@chakra-ui/react";
import React from "react";

const Landing = () => {
  return(
    <Box pt={24}>
        <Heading>Landing</Heading>
        <Link href='/auth/google'  isExternal>
            Proxy me 
        </Link>
    </Box>
  )
};

export default Landing;
