import React from "react";

type btnProps = {
  label: string;
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => void;
};

export default function ButtonComponent(props: btnProps) {
  return (
    <button
      className="btn"
      onClick={(event) => props.handleClick(event, "ytb: kang wahyu studio")}
    >
      {props.label}
    </button>
  );
}
