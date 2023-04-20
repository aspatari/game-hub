import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatoforms from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
    const { data, error } = usePlatoforms();

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platoform) => (
                    <MenuItem key={platoform.id} onClick={() => onSelectPlatform(platoform)}>
                        {platoform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;
