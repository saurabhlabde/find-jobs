import { FC } from "react";

import { LocationIcon } from "@assets/index";

import { IItemProps } from "./item.d";

const Item: FC<IItemProps> = ({ props }) => {
  return (
    <div className="flex flex-row items-center mr-4">
      <div className="flex items-center justify-center">{props?.icon}</div>
      <div className="ml-2">
        <h2 className="text-secondary_color text-sm font-semibold">
          {props?.name}
        </h2>
      </div>
    </div>
  );
};

export default Item;
