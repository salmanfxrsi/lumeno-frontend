import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";;
import { RiResetRightFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import TutorUploadMaterialsCard from "./TutorUploadMaterialsCard";

const TutorUploadMaterials = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState("");

    const { data: sessions = [], refetch } = useQuery({
        queryKey: ["sessions", user?.email, search],
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                `/sessions?tutorEmail=${user?.email}&&search=${search}`
            );
            return data.filter(session => session.status === 'approved');
        },
    });

    if (loading) return <Loading></Loading>;

    return (
        <div className="pb-24 w-11/12 mx-auto">
            <Helmet>
                <title>Upload Material | Lumeno Tutor</title>
            </Helmet>
            <div className="mb-16 flex justify-between items-center mt-24">
                {/* Search Bar */}
                <div className="flex items-center border-2 w-[500px] rounded-lg p-1">
                    <FaSearch className="text-gray-600 mx-3 text-xl" />
                    <input
                        type="text"
                        placeholder="Search Session"
                        className="w-full py-2 outline-none text-lg"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {/* Reset Button */}
                <button
                    onClick={() => setSearch("")}
                    className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-8 py-5 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none ml-16"
                >
                    <h1>Reset</h1>
                    <RiResetRightFill className="text-xl" />
                </button>
            </div>
            {/* Sessions Showcase */}
            {sessions.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
                    {sessions.map((session) => (
                        <TutorUploadMaterialsCard
                            key={session._id}
                            session={session}
                            refetch={refetch}
                        ></TutorUploadMaterialsCard>
                    ))}
                </div>
            ) : (
                <h1 className="text-2xl font-semibold mt-36 text-center uppercase">
                    No Session Found
                </h1>
            )}
        </div>
    );
};

export default TutorUploadMaterials;
