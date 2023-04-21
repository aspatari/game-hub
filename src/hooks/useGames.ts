import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import { Game } from "../entities/Game";
import apiClient, { FetchResponse } from "../services/api-client";
import useGameQuery from "../store";
const useGames = () => {
    const gameQuery = useGameQuery((s) => s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam }) => {
            return new apiClient<Game>("/games").getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery?.searchText,
                    page: pageParam,
                },
            });
        },
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms("24h"),
    });
};
export default useGames;
