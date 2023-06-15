import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { useState } from "react";

// interface OrderPhase {
//   phase: "letter" | "name" | "bible" | "order";
// }

enum OrderPhase {
  "letter",
  "name",
  "bible",
  "order",
}

const Order = () => {
  const [phase, setPhase] = useState<OrderPhase>(0);

  const letterList = [
    "ㄱ",
    "ㄴ",
    "ㄷ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅅ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  const nameList = [
    "어쩌고",
    "저쩌고",
    "기원이",
    "승준이",
    "전도사님",
    "목사님",
    "ㅇㅇㅇ",
    "ㄴㄴㄴ",
  ];

  const bookOrderList = [
    {
      bookName: "123123",
      count: 2,
    },
    {
      bookName: "22222",
      count: 1,
    },
    {
      bookName: "12333333123",
      count: 0,
    },
    {
      bookName: "444444",
      count: 4,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const handleNameClick = (name: string) => {
    setName(name);
    setIsOpen(true);
  };

  return (
    <div className="container">
      {phase === 0 && (
        <div className="py-4 flex flex-wrap gap-4">
          {letterList.map((letter) => {
            return (
              <Avatar
                key={letter}
                onClick={() => {
                  console.log(letter);
                  setPhase(phase + 1);
                }}
              >
                {letter}
              </Avatar>
            );
          })}
        </div>
      )}

      {phase === 1 && (
        <div className="pt-8 flex flex-wrap gap-4">
          {nameList.map((name) => {
            return (
              <Chip
                key={name}
                onClick={() => {
                  handleNameClick(name);
                }}
                label={name}
              />
            );
          })}
        </div>
      )}

      {phase === 2 && (
        <div className="py-2 px-2 flex flex-wrap gap-4">
          {bookOrderList.map((bookOrder) => {
            return (
              <Card className="w-40" key={bookOrder.bookName}>
                <CardHeader title={bookOrder.bookName}></CardHeader>
                <CardContent></CardContent>

                <CardActions>
                  <div className="flex w-full justify-center items-center">
                    <ButtonPrimary className="w-32">-</ButtonPrimary>
                    <span className="font-bold px-8">{bookOrder.count}</span>
                    <ButtonPrimary className="w-32">+</ButtonPrimary>
                  </div>
                </CardActions>
              </Card>
            );
          })}
        </div>
      )}

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent>{name} 이름 맞으십니까</DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setPhase(phase + 1);
              setIsOpen(false);
            }}
          >
            예
          </Button>
          <Button onClick={() => setIsOpen(false)}>아니오</Button>
        </DialogActions>
      </Dialog>
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>이름 확인</Dialog.Title>
          <Dialog.Description>너 맞음?</Dialog.Description>

          <p>{name}</p>

          <button onClick={() => setIsOpen(false)}>예</button>
          <button onClick={() => setIsOpen(false)}>아니오</button>
        </Dialog.Panel>
      </Dialog> */}
    </div>
  );
};

export default Order;
