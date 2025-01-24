import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";

const StudentViewStudyMaterialsCard = ({ bookedSession }) => {
    const {
        sessionTitle,
        sessionId,
        averageRating,
        classStartTime,
        classEndTime,
    } = bookedSession;

    const { loading } = useAuth();

    if (loading) return <Loading></Loading>;

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    {sessionTitle}
                    <div className="badge bg-[#ABEF5F]">{averageRating}</div>
                </h2>
                <p>
                    Class Period: {classStartTime} To {classEndTime}
                </p>
                <div className="card-actions mt-2 flex gap-4">
                    <Link
                        to={`/dashboard/session-materials/${sessionId}`}
                        className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-2 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
                    >
                        View Materials
                    </Link>
                </div>
            </div>
        </div>
    );
};

StudentViewStudyMaterialsCard.propTypes = {
    bookedSession: PropTypes.object,
};

export default StudentViewStudyMaterialsCard;
