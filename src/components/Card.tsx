import React, { FC, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primaty",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  const [first, setfirst] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border:
          variant === CardVariant.outlined ? "1px solid lightgray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={() => onClick(first)}
    >
      {children}
    </div>
  );
};

export default Card;
