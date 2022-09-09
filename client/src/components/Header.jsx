import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Link, HStack, Center } from "@chakra-ui/react";
import LinkButton from "./LinkButton";
import { fetchUser } from "../actions";
import Billing from "./Billing";
import { AiOutlineGooglePlus } from "react-icons/ai";


const Header = (props) => {
  //helper
  const renderContent = () => {
    if (props.auth) {
      return (
        <HStack spacing={8}>
          <Billing />
          <Center
            color="orange.500"
            rounded={[10]}
            p={[1.5]}
            border="1px solid"
            borderColor="white"
          >
            Credits: {props.auth.credits}
          </Center>
          <Link href="/api/logout">Logout</Link>
        </HStack>
      );
    } else if (props.auth === null) {
      return;
    } else {
      return (
        <LinkButton
          text="Sign in with google"
          href="/auth/google"
          bgColor="orange.500"
          color="white"
          rounded='6'
          width='140px'
          height='40px'
          icon={AiOutlineGooglePlus}
        />
      );
    }
  };

  return (
    <nav>
      <Flex
        position="fixed"
        zIndex={2}
        w={"full"}
        top={0}
        bgColor={"gray.700"}
        color="orange.500"
        minH="10vh"
        px={8}
        align="center"
        justify="space-between"
        sx={{
          a: {
            _hover: {
              color: "orange.800",
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
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchUser })(Header);
