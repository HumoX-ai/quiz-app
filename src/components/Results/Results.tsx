import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { IFormInput } from "../Users";
import { useEffect, useState } from "react";
import axios from "axios";

interface handleModalOpenProps {
  open: boolean;
  user: IFormInput;
  handleOpen: () => void;
}
export function Results({ handleOpen, open, user }: handleModalOpenProps) {
  const [useList, setUseList] = useState<IFormInput[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login"
      );
      setUseList(res.data);
    };
    fetchData();
  });
  const sortedUsers = useList.sort((a, b) => b.result - a.result);
  const index = sortedUsers.findIndex((item) => item.id === user.id);
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
          <br />
          <p>
            Reytingda: <span className="font-semibold">{index + 1}</span>-o'rindasiz
          </p>
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
