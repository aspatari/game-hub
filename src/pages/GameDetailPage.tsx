import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

function GameDetailPage() {
    const { slug } = useParams();

    const { data, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;
    if (error) throw error;
    return (
        <>
            <Heading>{data?.name}</Heading>
            <ExpandableText>{data?.description_raw}</ExpandableText>
            <GameAttributes game={data} />
        </>
    );
}

export default GameDetailPage;
