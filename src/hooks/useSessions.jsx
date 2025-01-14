import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSessions = () => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, refetch, data: sessions = [] } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/sessions");
      return data;
    },
  });

  return [isLoading, sessions, refetch];
};

export default useSessions;
