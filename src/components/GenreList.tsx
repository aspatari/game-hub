import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-utl";
interface Props {
    onSelect: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
function GenreList({ onSelect, selectedGenre }: Props) {
    const { data, error, isLoadding } = useGenres();

    if (error) return null;
    if (isLoadding) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                objectFit="cover"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                onClick={() => onSelect(genre)}
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
