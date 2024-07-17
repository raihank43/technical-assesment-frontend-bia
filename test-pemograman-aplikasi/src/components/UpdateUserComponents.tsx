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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BiEdit } from "react-icons/bi";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserDataInterface } from "@/interfaces/userDataInterface";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export default function UpdateUserComponents({
  userData,
  setUserData,
  selectedUser,
}: {
  userData: UserDataInterface[];
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
  selectedUser: UserDataInterface;
}) {
  const [name, setName] = useState<string>(selectedUser.name);
  const [alamat, setAlamat] = useState<string>(selectedUser.alamat);
  const [gender, setGender] = useState<string>(selectedUser.gender);
  const [birthDate, setBirthDate] = useState<string>("");

  const { toast } = useToast();

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: UserDataInterface = {
      id: selectedUser.id,
      name,
      alamat,
      gender,
      birthDate: new Date(birthDate),
      createdAt: selectedUser.createdAt,
      updatedAt: new Date(),
    };
    if (!data.name || !data.alamat || !data.gender || !data.birthDate) {
      toast({
        description: "Mohon isi semua data dengan benar.",
        className: "bg-red-500 border-none text-white font-bold",
      });
      return;
    }
    const newData = userData.map((user) =>
      user.id === selectedUser.id ? data : user
    );
    setUserData(newData);
    toast({
      description: "Berhasil Mengupdate User.",
      className: "bg-green-500 border-none text-white font-bold",
    });
    const escEvent = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(escEvent);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 border-none flex gap-2">
          <BiEdit />
          Edit User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Edit profile user disini. Klik simpan ketika selesai.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nama
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Alamat
              </Label>
              <Input
                id="username"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                P / W
              </Label>
              <RadioGroup
                defaultValue={gender}
                onValueChange={(value) => setGender(value)}
                className="flex"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Laki-Laki" id="r1" />
                  <Label htmlFor="r1">Pria</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Perempuan" id="r2" />
                  <Label htmlFor="r2">Wanita</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Tanggal Lahir
              </Label>
              <Input
                id="username"
                className="col-span-3 justify-center"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Simpan</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
