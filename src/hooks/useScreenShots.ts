import { useQuery } from "@tanstack/react-query";
import ScreenShot from "../entities/ScreenShot";
import apiClient, { FetchResponse } from "../services/api-client";

const useScreenshoots = (gameId: number) =>
    useQuery<FetchResponse<ScreenShot>, Error>({
        queryKey: ["screenshots", gameId],
        queryFn: () => {
            return new apiClient<ScreenShot>(`/games/${gameId}/screenshots`).getAll();
        },
    });

export default useScreenshoots;
