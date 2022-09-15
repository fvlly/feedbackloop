import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Link, HStack, Center } from "@chakra-ui/react";
import LinkButton from "./LinkButton";
import { fetchUser } from "../actions";
import Billing from "./Billing";
import { AiOutlineGooglePlus } from "react-icons/ai";


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
        {renderContent()}
      </Flex>
    </nav>
  );

    //helper
    function renderContent() {
      if (props.auth) {
        return (
          <HStack spacing={8}>
            <Billing />
            <Center
              color="#ff6d60"
              
              p={[1.5]}
              
            >
              Credits: {props.auth.credits}
            </Center>
            <Link href="/api/logout">Sign Out</Link>
          </HStack>
        );
      } else if (props.auth === null) {
        return;
      } else {
        return (
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
        );
      }
    };
  

};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchUser })(Header);
