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
import { FaEye } from "react-icons/fa";

export default function ViewComponents() {
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis deserunt odit obcaecati necessitatibus dolore
              voluptatibus repudiandae.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
