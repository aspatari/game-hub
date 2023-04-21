import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import apiClient, { FetchResponse } from "../services/api-client";

const useTrailers = (gameId: number) =>
    useQuery<FetchResponse<Trailer>, Error>({
        queryKey: ["trailers"],
        queryFn: () => {
            return new apiClient<Trailer>(`/games/${gameId}/movies`).getAll();
        },
    });

export default useTrailers;
