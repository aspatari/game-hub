import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import apiClient from "../services/api-client";
import { Game } from "./useGames";

const useGame = (slug: string) => {
    return useQuery<Game, Error>({
        queryKey: ["games", slug],
        queryFn: () => {
            return new apiClient<Game>(`/games`).get(slug);
        },

        staleTime: ms("24h"),
    });
};
export default useGame;
