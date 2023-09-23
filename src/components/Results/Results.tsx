import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { IFormInput } from "../Users";

interface handleModalOpenProps {
  open: boolean;
  user: IFormInput;
  handleOpen: () => void;
}
export function Results({ handleOpen, open, user }: handleModalOpenProps) {
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-blue-gray-700">
          Barcha fanlar uchun umumiy yig'ilgan ballar.
        </DialogHeader>
        <DialogBody divider>
          Foydalanuvchi ism familiyasi:
          <br />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <br />
          Fanlardan ishlangan test ballari:
          <br />
          Ona tili: <span className="font-semibold">{user.onatili}</span>
          <br />
          Gegrafiya: <span className="font-semibold">{user.geografiya}</span>
          <br />
          Tarix: <span className="font-semibold">{user.tarix}</span>
          <br />
          Umumiy ball: <span className="font-semibold">{user.result}</span>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Yopish</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
