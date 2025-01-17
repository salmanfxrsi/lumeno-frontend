import student_create_note_image from "../../../assets/Student Create Note/student_create_note_image.jpg";
import { Field, Input, Label, Textarea } from "@headlessui/react";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useRole from "../../../hooks/useRole";

const StudentCreateNote = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [isLoading] = useRole();

  if ((loading, isLoading)) return <Loading></Loading>;

  const handleCreateNote = async (event) => {
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
      await axiosSecure.post("/notes", noteData);
      toast.success("Note Created");
      navigate("/dashboard/student-manage-notes");
      event.target.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="mt-24 w-11/12 2xl::container mx-auto">
      <h1 className="uppercase text-2xl font-semibold mb-32">
        You Are Doing Great{" "}
        <span className="font-black">{user?.displayName}</span>, Keep It Up With
        Lumeno
      </h1>
      <div className="grid grid-cols-2 gap-12">
        <form onSubmit={handleCreateNote} className="grid grid-cols-2 gap-6">
          <Field>
            <Label className="text-lg font-semibold">Student Email</Label>
            <Input
              value={user?.email}
              name="studentEmail"
              className="pl-4 py-2 cursor-not-allowed rounded-md border w-full mt-2 "
              readOnly
            />
          </Field>
          <Field>
            <Label className="text-lg font-semibold">Title</Label>
            <Input
              required
              name="noteTitle"
              className="border w-full mt-2 pl-4 py-2 rounded-md"
            />
          </Field>
          <Field className="col-span-2">
            <Label className="text-lg font-semibold mb-4">Description</Label>
            <Textarea
              rows={8}
              required
              name="noteDescription"
              className="pl-4 py-2 rounded-md border w-full mt-4"
            ></Textarea>
          </Field>
          <button className="col-span-2 gap-1.5 bg-[#ABEF5F] font-black uppercase px-5 py-1 text-sm text-black transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none w-full">
            <h1>Create Note Now</h1>
          </button>
        </form>
        <div>
          <img src={student_create_note_image} className="rounded-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default StudentCreateNote;
