import { FaTrash } from "react-icons/fa";
import { Button } from "./ui/button";

export default function DeleteButton() {
  return (
    <Button className="bg-red-500 border-none flex gap-2">
      <FaTrash />
      Delete
    </Button>
  );
}
