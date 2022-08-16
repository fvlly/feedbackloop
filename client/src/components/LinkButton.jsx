import { Link, Icon, Text } from "@chakra-ui/react";
import { AiOutlineGooglePlus } from "react-icons/ai";

const LinkButton = ({ borderColor, text, color, href, bgColor }) => {
  return (
    <Link
      gap={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={["110px", "140px"]}
      h={["40px"]}
      fontSize={12}
      px={4}
      border="1px solid"
      fontWeight="bold"
      color={color}
      borderColor={borderColor}
      bgColor={bgColor}
      rounded={6}
      href={href}
    //   target="_blank"
      _hover={{ textDecoration: "none", transform: "scale(1.01)" }}
    >
      <Icon as={AiOutlineGooglePlus} w={6} h={6} />
      <Text> {text}</Text>
    </Link>
  );
};

export default LinkButton;
