import PropTypes from "prop-types";
import TutorUploadMaterialsModal from "./TutorUploadMaterialsModal";
import { useState } from "react";

const TutorUploadMaterialsCard = ({ session, refetch }) => {
    let [isOpen, setIsOpen] = useState(false);
    const { _id, sessionTitle, registrationFee } = session;

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    {sessionTitle}
                    <div
                        className="badge bg-[#ABEF5F]"
                    >
                        {registrationFee} $
                    </div>
                </h2>
                <p>Session Id: {_id}</p>
                <div className="card-actions mt-2 flex gap-4">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-2 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500"
                    >
                        Upload Material
                    </button>
                    <TutorUploadMaterialsModal isOpen={isOpen} setIsOpen={setIsOpen} session={session} refetch={refetch}></TutorUploadMaterialsModal>
                </div>
            </div>
        </div>
    );
};

TutorUploadMaterialsCard.propTypes = {
    session: PropTypes.object,
    refetch: PropTypes.func,
};

export default TutorUploadMaterialsCard;
