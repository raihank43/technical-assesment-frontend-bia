import { FaTrash } from "react-icons/fa";
import { Button } from "./ui/button";
import { UserDataInterface } from "@/interfaces/userDataInterface";
import { deleteUser } from "@/api/api";

export default function DeleteButton({
  userData,
  setUserData,
  selectedUser,
}: {
  userData: UserDataInterface[];
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
  selectedUser: UserDataInterface;
}) {
  const handleDelete = async () => {
    // await deleteUser(selectedUser.id); //!! For some reason json-server still using old data so it will always return 404
    const newData = userData.filter((user) => user.id !== selectedUser.id);
    setUserData(newData);
  };

  return (
    <Button
      onClick={handleDelete}
      className="bg-red-500 border-none flex gap-2"
    >
      <FaTrash />
      Delete
    </Button>
  );
}
