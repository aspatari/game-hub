import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-utl";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading>
                <Emoji rating={game.rating_top} />
            </CardBody>
        </Card>
    );
}

export default GameCard;
