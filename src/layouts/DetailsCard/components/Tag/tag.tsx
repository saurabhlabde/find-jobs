import { FC } from "react";

import { ITagProps } from "./tag.d";

const Tag: FC<ITagProps> = ({ props }) => {
  return (
    <div className="bg-secondary py-2 px-4 m-[2.5px] rounded-full">
      <h2 className="text-secondary_color text-xs font-semibold">
        {props?.name}
      </h2>
    </div>
  );
};

export default Tag;
