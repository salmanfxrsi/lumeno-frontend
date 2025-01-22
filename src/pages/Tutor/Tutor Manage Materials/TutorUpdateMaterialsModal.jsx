import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Field, Input, Label } from "@headlessui/react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TutorUpdateMaterialsModal = ({ isOpen, setIsOpen, material, refetch }) => {
    const { _id, sessionTitle, materialTitle, materialImage, materialLink } = material;
    const axiosSecure = useAxiosSecure();


    const handleUpdateMaterial = async (event) => {
        event.preventDefault();
        const form = event.target;
        const materialTitle = form.materialTitle.value;
        const materialImage = form.materialImage.value;
        const materialLink = form.materialLink.value;
        const materialData = { materialTitle, materialImage, materialLink }
        console.log(materialData)

        try {
            await axiosSecure.patch(`/materials/${_id}`, materialData);
            toast.success("Note Updated");
            refetch();
            setIsOpen(false);
            event.target.reset();
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    {/* The actual dialog panel  */}
                    <DialogPanel className="max-w-lg space-y-4 bg-white p-12 rounded-sm">
                        <DialogTitle className="font-bold text-center mb-8">
                            Session: {sessionTitle}
                        </DialogTitle>
                        <form onSubmit={handleUpdateMaterial}>
                            <Field>
                                <Label className="font-semibold text-sm">Material Title</Label>
                                <Input
                                    type="text"
                                    name="materialTitle"
                                    className="pl-4 py-2 rounded-md border w-full mt-2 "
                                    defaultValue={materialTitle}
                                    required
                                />
                            </Field>
                            <Field className="mt-4">
                                <Label className="font-semibold text-sm">Material Image</Label>
                                <Input
                                    type="url"
                                    name="materialImage"
                                    defaultValue={materialImage}
                                    className="pl-4 py-2 rounded-md border w-full mt-2 "
                                    required
                                />
                            </Field>
                            <Field className="mt-4">
                                <Label className="font-semibold text-sm">Material Link</Label>
                                <Input
                                    type="text"
                                    name="materialLink"
                                    defaultValue={materialLink}
                                    className="pl-4 py-2 rounded-md border w-full mt-2 "
                                    required
                                />
                            </Field>
                            <div className="flex gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-1.5 bg-red-500 font-black uppercase w-[170px] px-5 py-3 text-sm text-white transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none mx-auto justify-center"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center gap-1.5 bg-[#ABEF5F] font-black uppercase w-[170px] px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none mx-auto justify-center"
                                >
                                    Update Material
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

TutorUpdateMaterialsModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    material: PropTypes.object,
    refetch: PropTypes.func,
}

export default TutorUpdateMaterialsModal;