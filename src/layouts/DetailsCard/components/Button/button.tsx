import { FC } from "react";

import { IButtonProps } from "./button.d";

const Button: FC<IButtonProps> = ({ props }) => {
  return (
    <div
      className="h-[45px] px-9 rounded-xl bg-blue-600 hover:bg-blue-500 max-w-max flex items-center justify-center ease-in duration-300"
      onClick={props?.onClick}
      role="button"
    >
      <h1 className="text-primary_color text-sm font-semibold capitalize">
        {props?.label}
      </h1>
    </div>
  );
};

export default Button;
