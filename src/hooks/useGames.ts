import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoadding, setIsLoadding] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(({ data }) => {
        setGames(data.results);
        setIsLoadding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoadding(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoadding };
};

export default useGames;
