import APIClient, { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "@/store";
import Game from "../entites/Game";

const apiClient = new APIClient("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
      return response as FetchResponse<Game>;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
