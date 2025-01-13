import SessionCard from "../../../components/SessionCard";

const HomeSessionShowcase = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SessionCard />
            <SessionCard />
            <SessionCard />
            <SessionCard />
            <SessionCard />
            <SessionCard />
        </div>
    );
};

export default HomeSessionShowcase;