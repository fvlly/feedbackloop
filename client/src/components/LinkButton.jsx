import { Link, Icon, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LinkButton = ({
  type,
  to,
  borderColor,
  text,
  color,
  href,
  bgColor,
  icon,
  rounded,
  width,
  height,
}) => {
  return (
    <Link
      as={type && RouterLink}
      to={type && to}
      gap={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={width}
      h={height}
      fontSize={12}
      px={4}
      border="1px solid"
      fontWeight="bold"
      color={color}
      borderColor={borderColor}
      bgColor={bgColor}
      rounded={rounded}
      href={href}
      //   target="_blank"
      _hover={{ textDecoration: "none", transform: "scale(1.01)" }}
    >
      <Text> {text}</Text>

      <Icon as={icon} w={6} h={6} />
    </Link>
  );
};

export default LinkButton;
