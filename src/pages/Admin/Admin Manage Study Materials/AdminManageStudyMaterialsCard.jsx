import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AdminManageStudyMaterialsCard = ({ material, refetch }) => {
    const { _id, materialTitle, sessionTitle, materialLink, materialImage } = material;
    const axiosSecure = useAxiosSecure();

    //   handle delete note using id
    const handleDeleteNote = async () => {
        try {
            await axiosSecure.delete(`/materials/${_id}`);
            toast.success("Material Deleted");
            refetch();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const deleteConfirmation = () => {
        toast((t) => (
            <div className="flex gap-4 items-center justify-center">
                <p className="font-semibold">Are You Sure?</p>
                <button
                    className="bg-red-500 rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
                    onClick={() => {
                        toast.dismiss(t.id);
                        handleDeleteNote();
                    }}
                >
                    Delete
                </button>
                <button
                    className="bg-[#52C303] rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
                    onClick={() => toast.dismiss(t.id)}
                >
                    Dismiss
                </button>
            </div>
        ));
    };

    return (
        <div className="card bg-base-100 rounded-none w-96 shadow-2xl">
            <figure>
                <img
                    src={materialImage}
                    alt={materialTitle} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {sessionTitle}
                </h2>
                <p className="font-bold">Material Title: <span className="font-normal">{materialTitle}</span></p>
                {/* Button Section */}
                <div className="card-actions flex justify-between mt-4">
                    <div>
                        <Link to={materialLink} className="px-4 py-1 flex items-center gap-1.5 bg-[#ABEF5F] font-black uppercase text-sm text-black transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none mx-auto justify-center">View Link</Link>
                    </div>
                    <div className="flex gap-2">
                        <button to={materialLink} onClick={deleteConfirmation} className="px-4 py-1 flex items-center gap-1.5 bg-red-500 font-black uppercase text-sm text-white transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none mx-auto justify-center">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AdminManageStudyMaterialsCard.propTypes = {
    material: PropTypes.object,
    refetch: PropTypes.func,
}

export default AdminManageStudyMaterialsCard;