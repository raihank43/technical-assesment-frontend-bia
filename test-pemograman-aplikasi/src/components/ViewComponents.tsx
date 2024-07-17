import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserDataInterface } from "@/interfaces/userDataInterface";
import { FaEye } from "react-icons/fa";

export default function ViewComponents({ user }: { user: UserDataInterface }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 border-none flex gap-2">
          <FaEye />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detail User</DialogTitle>
          <DialogDescription>
            Berikut ini adalah detail user yang dipilih.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-700">
            <strong>Gender:</strong> {user.gender}
          </p>
          <p className="text-gray-700">
            <strong>Birth Date:</strong>{" "}
            {new Date(user.birthDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <strong>Alamat:</strong> {user.alamat}
          </p>
          <p className="text-gray-700">
            <strong>Created At:</strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <strong>Updated At:</strong>{" "}
            {new Date(user.updatedAt).toLocaleDateString()}
          </p>
        </div>
        <DialogFooter>
          {/* <Button>Close</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
