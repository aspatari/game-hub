import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import Game from "../entities/Game";
import apiClient from "../services/api-client";

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
