import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading";
import StudentManageNotesCard from "./StudentManageNotesCard";
import StudentManageNotesHeader from "./StudentManageNotesHeader";
import { Helmet } from "react-helmet-async";

const StudentManageNotes = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: notes = [],
    refetch,
  } = useQuery({
    queryKey: ["notes", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/notes?studentEmail=${user?.email}`
      );
      return data;
    },
  });

  if ((loading, isLoading)) return <Loading></Loading>;

  return (
    <div className="w-11/12 3xl:container mx-auto">
      <Helmet>
        <title>Manage Notes | Lumeno Admin</title>
      </Helmet>
      <div className="flex justify-between">
        <StudentManageNotesHeader
          notes={notes.length}
        ></StudentManageNotesHeader>
      </div>
      <div className="grid gap-24 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mt-8">
        {notes.map((note) => (
          <StudentManageNotesCard
            key={note._id}
            note={note}
            refetch={refetch}
          ></StudentManageNotesCard>
        ))}
      </div>
    </div>
  );
};

export default StudentManageNotes;
