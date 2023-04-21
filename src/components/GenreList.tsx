import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-utl";
import useGameQuery from "../store";

function GenreList() {
    const { data, isFetching, error } = useGenres();

    const setGenreId = useGameQuery((s) => s.setGenreId);
    const selectedGenreId = useGameQuery((s) => s.gameQuery.genreId);

    if (error) return null;
    if (isFetching) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                objectFit="cover"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                                onClick={() => setGenreId(genre.id)}
                                fontSize="lg"
                                variant={"link"}
                                whiteSpace={"normal"}
                                textAlign="left"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default GenreList;
