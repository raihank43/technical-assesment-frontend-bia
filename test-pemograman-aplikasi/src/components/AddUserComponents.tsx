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
import { BiPlus } from "react-icons/bi";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { UserDataInterface } from "@/interfaces/userDataInterface";
import { addUser, getUser } from "@/api/api";
import { useToast } from "@/components/ui/use-toast";

export default function AddUserComponents({
  userData,
  setUserData,
}: {
  userData: UserDataInterface[];
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
}) {
  const [name, setName] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: UserDataInterface = {
      id: userData.length + 1,
      name,
      alamat,
      gender,
      birthDate: new Date(birthDate),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    if (!data.name || !data.alamat || !data.gender || !data.birthDate) {
      toast({
        description: "Mohon isi semua data dengan benar.",
        className: "bg-red-500 border-none text-white font-bold",
      });
      return;
    }
    await addUser(data);
    toast({
      description: "Berhasil Menambahkan User Baru.",
      className: "bg-green-500 border-none text-white font-bold",
    });
    const fetchData = await getUser();
    setUserData(fetchData);

    console.log({ fetchData });
    // Simulasikan penekanan tombol ESC
    const escEvent = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(escEvent);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit self-end flex gap-2">
          <BiPlus />
          Tambah User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambahkan User Baru</DialogTitle>
          <DialogDescription>
            Tambahkan user baru disini. Klik simpan ketika selesai.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
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
                defaultValue=""
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
