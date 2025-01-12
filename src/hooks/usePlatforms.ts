import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/services/api-client";

const apiClient = new APIClient("/genres");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: platforms.length, results: platform },
  });

export default usePlatforms;
