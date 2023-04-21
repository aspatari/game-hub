import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../store";

function GameHeading() {
    const genreid = useGameQuery((s) => s.gameQuery.genreId);
    const platformId = useGameQuery((s) => s.gameQuery.platformId);

    const genre = useGenre(genreid);
    const platform = usePlatform(platformId);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
}

export default GameHeading;
