import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";
import LinkButton from "./LinkButton";
import { fetchUser } from "../actions";

const Header = (props) => {
  //helper
  const renderContent = () => {
    if (props.auth) {
      return <h1>Hello</h1>;
    } else if (props.auth === null) {
      return;
    } else {
      return (
        <LinkButton
          text="Sign in with google"
          href="/auth/google"
          bgColor="orange"
          color="white"
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
        bgColor={"gray.100"}
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
