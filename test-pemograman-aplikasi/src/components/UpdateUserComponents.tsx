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

export default function UpdateUserComponents() {
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nama
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Alamat
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              P / W
            </Label>
            <RadioGroup defaultValue="" className="flex">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Pria</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
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
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Simpan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
