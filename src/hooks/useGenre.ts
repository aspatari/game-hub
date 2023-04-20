import useGenres from "./useGenres";

const useGenre = (id?: number) => {
    const { data } = useGenres();

    const genre = data?.results.find((p) => p.id === id);
    return genre;
};

export default useGenre;
