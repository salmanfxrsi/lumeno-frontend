import Loading from "../../../components/Loading";
import SessionCard from "../../../components/SessionCard";
import useSessions from "../../../hooks/useSessions";

const HomeSessionShowcase = () => {
  const [isLoading, sessions] = useSessions();

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {sessions
        .filter((session) => session.status === "approved")
        .slice(0, 6)
        .map((session) => (
          <SessionCard key={session._id} data={session}></SessionCard>
        ))}
    </div>
  );
};

export default HomeSessionShowcase;
