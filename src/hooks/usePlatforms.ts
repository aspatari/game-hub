import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatoforms = () => {
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["platforms"],
        queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24h
    });
};

export default usePlatoforms;
