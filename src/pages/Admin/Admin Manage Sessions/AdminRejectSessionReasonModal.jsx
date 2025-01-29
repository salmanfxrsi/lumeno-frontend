import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Field,
  Label,
  Textarea,
} from "@headlessui/react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const AdminRejectSessionReasonModal = ({
  isOpen,
  setIsOpen,
  id,
  refetch,
  handleUpdateStatus,
}) => {
  const axiosSecure = useAxiosSecure();

  const handleSendNow = async (event) => {
    event.preventDefault();
    const form = event.target;
    const rejectionReason = form.rejectionReason.value;
    const rejectionFeedback = form.rejectionFeedback.value;
    const rejectionInfo = {
      rejectionReason,
      rejectionFeedback,
    };

    try {
      await axiosSecure.put(`/sessions/${id}`, rejectionInfo);
      toast.success("Session Rejected");
      handleUpdateStatus(id, "rejected");
      setIsOpen(false);
      refetch();
    } catch (error) {
      toast.error(error.message);
    }
  };

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
            <form onSubmit={handleSendNow}>
              <Field>
                <Label className="font-semibold text-sm">Reason</Label>
                <Textarea
                  type="text"
                  name="rejectionReason"
                  className="pl-4 py-2 rounded-md border w-full mt-2 "
                />
              </Field>
              <Field className="mt-4">
                <Label className="font-semibold text-sm">
                  Feedback
                </Label>
                <Textarea
                  type="text"
                  name="rejectionFeedback"
                  className="pl-4 py-2 rounded-md border w-full mt-2 "
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
                  Send
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

AdminRejectSessionReasonModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  id: PropTypes.string,
  refetch: PropTypes.func,
  handleUpdateStatus: PropTypes.func,
};

export default AdminRejectSessionReasonModal;
