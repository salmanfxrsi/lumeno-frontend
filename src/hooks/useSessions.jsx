import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSessions = (search) => {
  const axiosPublic = useAxiosPublic();

  const {
    isLoading,
    refetch,
    data: sessions = [],
  } = useQuery({
    queryKey: ["sessions", search],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/sessions?search=${search}`);
      return data;
    },
  });

  return [isLoading, sessions, refetch];
};

export default useSessions;
