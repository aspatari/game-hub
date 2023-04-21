import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatoforms from "../hooks/usePlatforms";
import useGameQuery from "../store";

function PlatformSelector() {
    const { data, error } = usePlatoforms();
    const selectedPlatformId = useGameQuery((s) => s.gameQuery.platformId);
    const setPlatformId = useGameQuery((s) => s.setPlatfornId);

    const selectedPlatform = data?.results.find((p) => p.id === selectedPlatformId);

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platoform) => (
                    <MenuItem key={platoform.id} onClick={() => setPlatformId(platoform.id)}>
                        {platoform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;
