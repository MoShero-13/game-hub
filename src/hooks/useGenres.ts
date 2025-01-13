import genres from "@/data/genres";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<
    {
      count: number;
      results: Genre[];
    },
    Error
  >(["genres"], () => apiClient.getAll(), {
    staleTime: ms("24h"), // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
