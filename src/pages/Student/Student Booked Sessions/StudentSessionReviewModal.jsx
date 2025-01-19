import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Input,
  Textarea,
} from "@headlessui/react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const StudentSessionReviewModal = ({
  isOpen,
  setIsOpen,
  bookedSession,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();

  const { _id: bookedSessionId, ...restOfBookedSession } = bookedSession;

  const handleReviewNow = async (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = Number(form.rating.value);
    const review = form.review.value;
    const reviewedSessionData = {
      ...restOfBookedSession,
      bookedSessionId,
      rating,
      review,
    };

    try {
      await axiosSecure.post("/reviews", reviewedSessionData);
      toast.success("Review Created");
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
            <DialogTitle className="font-bold text-center mb-8">
              Session: {bookedSession.sessionTitle}
            </DialogTitle>
            <form onSubmit={handleReviewNow}>
              <Field>
                <Label className="font-semibold text-sm">Rating</Label>
                <Input
                  type="number"
                  name="rating"
                  className="pl-4 py-2 rounded-md border w-full mt-2 "
                  min={0}
                  max={5}
                />
              </Field>
              <Field className="mt-4">
                <Label className="font-semibold text-sm">Review</Label>
                <Textarea
                  type="text"
                  name="review"
                  className="pl-4 py-2 rounded-md border w-full mt-2 "
                  rows={3}
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
                  Review Now
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

StudentSessionReviewModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  bookedSession: PropTypes.object,
  refetch: PropTypes.func,
};

export default StudentSessionReviewModal;
