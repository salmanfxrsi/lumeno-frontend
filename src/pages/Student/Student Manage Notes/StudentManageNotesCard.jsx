import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogPanel,
  Field,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";

const StudentManageNotesCard = ({ note, refetch }) => {
  const { _id, noteTitle, noteDescription } = note;
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();

  if (loading) return <Loading></Loading>;

  //   handle delete note using id
  const handleDeleteNote = async () => {
    try {
      await axiosSecure.delete(`/notes/${_id}`);
      toast.success("Note Deleted");
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

  const handleUpdateNote = async (event) => {
    event.preventDefault();
    const form = event.target;
    const noteTitle = form.noteTitle.value;
    const noteDescription = form.noteDescription.value;
    const noteData = {
      studentEmail: user.email,
      studentName: user.displayName,
      studentImage: user.photoURL,
      noteTitle,
      noteDescription,
    };

    try {
      await axiosSecure.patch(`/notes/${_id}`, noteData);
      toast.success("Note Updated");
      refetch();
      setIsOpen(false);
      event.target.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="shadow-2xl rounded-2xl p-10 flex justify-between gap-2">
      <div className="">
        <h2 className="card-title">{noteTitle}</h2>
        <p>{noteDescription}</p>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#ABEF5F] font-black uppercase p-4 text-black transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none mx-auto justify-center"
        >
          <FiEdit />
        </button>
        {/* Delete Note Button */}
        <button
          onClick={deleteConfirmation}
          className="bg-red-500 text-white font-black uppercase p-4 transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none mx-auto justify-center"
        >
          <AiFillDelete />
        </button>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white shadow-2xl p-12 rounded-2xl">
            <form onSubmit={handleUpdateNote} className="grid grid-cols-1">
              <Field>
                <Label className="font-semibold">Title</Label>
                <Input
                  required
                  defaultValue={noteTitle}
                  name="noteTitle"
                  className="border w-full mt-2 pl-4 py-2 rounded-md"
                />
              </Field>
              <Field className="mt-4">
                <Label className="font-semibold mb-4">Description</Label>
                <Textarea
                  rows={5}
                  required
                  defaultValue={noteDescription}
                  name="noteDescription"
                  className="pl-4 py-2 rounded-md border w-full mt-4"
                ></Textarea>
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
                  Update Now
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

StudentManageNotesCard.propTypes = {
  note: PropTypes.object,
  refetch: PropTypes.func,
};

export default StudentManageNotesCard;
