import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";
const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: () => {
            return new apiClient<Genre>("/genres").getAll();
        },
        staleTime: ms("24h"),
    });
};

export default useGenres;
