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
  fontSize,
}) => {
  return (
    <Link
      as={type==='router' && RouterLink}
      to={type==='router' && to}
      gap={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={width}
      h={height}
      fontSize={fontSize}
      px={2}
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

      {icon && <Icon as={icon} w={6} h={6} />}
      <Text> {text}</Text>

    </Link>
  );
};

export default LinkButton;
