import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import { SiMaterialformkdocs } from "react-icons/si";
import { Helmet } from "react-helmet-async";

const SessionMaterials = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isFetching, data: materials = [] } = useQuery({
        queryKey: ['materials', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/materials?id=${id}`)
            return data;
        }
    })

    const { isLoading, data: session = {} } = useQuery({
        queryKey: ['session', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/sessions/${id}`)
            return data;
        }
    })

    if (isLoading, isFetching) return <Loading></Loading>

    return (
        <div className="pb-24 pt-20 w-11/12 mx-auto">
            <Helmet><title>{session.sessionTitle}&apos;s Materials | Lumeno Student</title></Helmet>
            <div className="stats shadow w-full py-4">
                <div className="stat">
                    <div className="stat-figure text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Session Name</div>
                    <div className="stat-value">{session.sessionTitle}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-xl">
                        <SiMaterialformkdocs />
                    </div>
                    <div className="stat-title">Total Materials</div>
                    <div className="stat-value">{materials.length}</div>
                </div>
            </div>
            {materials.length > 0 ? <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-24">
                {materials.map(material => <div key={material._id} className=" bg-white rounded-md shadow-md md:min-h-[350px]">
                    <img className="h-[200px] w-full object-cover" src={material?.materialImage}></img>
                    <div className="px-8 pb-12">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-semibold uppercase mt-4">{material?.materialTitle}</h2>
                        </div>
                        <p className="text-lg mb-3">{material?.material}</p>
                        <div className="text-2xl font-semibold mt-8">
                            <Link
                                to={material?.materialLink}
                                className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[200px] justify-center px-5 py-2 text-sm text-black transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
                            >
                                View Materials
                            </Link>
                        </div>
                    </div>
                </div>)}
            </div> : <div className="mt-52 text-center text-2xl font-semibold">No Material Posted Yet</div>}
        </div>
    );
};

export default SessionMaterials;