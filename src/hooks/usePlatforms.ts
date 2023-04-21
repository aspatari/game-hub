import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "../entities/Platform";
import apiClient, { FetchResponse } from "../services/api-client";
const usePlatoforms = () => {
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["platforms"],
        queryFn: () => {
            return new apiClient<Platform>("/platforms/lists/parents").getAll();
        },
        staleTime: ms("24h"),
    });
};

export default usePlatoforms;
