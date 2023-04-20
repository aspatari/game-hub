import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatoforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
    const { data: genres } = useGenres();
    const { data } = usePlatoforms();

    const selectedPlatform = data?.results.find((p) => p.id === gameQuery.platformId);

    const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
    const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;
    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
}

export default GameHeading;
