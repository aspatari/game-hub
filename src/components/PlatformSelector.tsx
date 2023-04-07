import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatoforms from "../hooks/usePlatforms";

function PlatformSelector() {
    const { data, error } = usePlatoforms();

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((p) => (
                    <MenuItem key={p.id}>{p.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;
