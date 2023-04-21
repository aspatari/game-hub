import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshoots from "../hooks/useScreenShots";

interface Props {
    gameId: number;
}

function GameScreenhots({ gameId }: Props) {
    const { data, isLoading, error } = useScreenshoots(gameId);

    if (isLoading) return null;

    if (error) throw error;

    if (!data) return null;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {data.results.map((screenshot) => (
                <Image key={screenshot.id} src={screenshot.image} />
            ))}
        </SimpleGrid>
    );
}

export default GameScreenhots;
