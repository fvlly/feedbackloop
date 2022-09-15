import { Link as RouterLink } from "react-router-dom";
import { Flex, Link,Box } from "@chakra-ui/react";

import Hamburger from "./Hamburger";
import UserDetails from "./UserDetails";


const Header = (props) => {

  return (
    <nav>
      <Flex
        position="fixed"
        zIndex={2}
        w={"full"}
        top={0}
        bgColor={"gray.700"}
        color="#ff6d60"
        minH="10vh"
        px={8}
        align="center"
        justify="space-between"
        sx={{
          a: {
            _hover: {
              color: "white",
              textDecoration: "none",
            },
          },
        }}
      >
        <Link as={RouterLink} to="/">
          Feedback
        </Link>
        <Box display={['none','block']}> <UserDetails direction='row' spacing='8'/> </Box>
        <Box display={['block','none']}><Hamburger direction='column' spacing='20' /></Box> 
      </Flex>
    </nav>
  );
}

export default Header