import { FC } from "react";
import * as S from "./styled";

type Props = {
  title: string;
  message: string;
};

export const MessageBox: FC<Props> = ({ title, message }) => {
  return (
    <S.Box>
      <div className="title">{title}</div>
      <div className="message">{message}</div>
    </S.Box>
  );
};
