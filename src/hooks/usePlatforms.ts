import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatoforms = () => {
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["platforms"],
        queryFn: () => {
            return new apiClient<Platform>("/platforms/lists/parents").getAll();
        },
        staleTime: 24 * 60 * 60 * 1000, // 24h
    });
};

export default usePlatoforms;
