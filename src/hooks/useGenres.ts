import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ["genres"],
        queryFn: () => {
            return new apiClient<Genre>("/genres").getAll();
        },
        staleTime: 24 * 60 * 60 * 1000, // 24h
    });
};

export default useGenres;
