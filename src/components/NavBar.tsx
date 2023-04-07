import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
type Props = {};

function NavBar({}: Props) {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text> Navbar</Text>
    </HStack>
  );
}

export default NavBar;
