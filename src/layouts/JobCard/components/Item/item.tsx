import { FC } from "react";

import { LocationIcon } from "@assets/index";

const Item: FC = () => {
  return (
    <div>
      <div>
        <LocationIcon />
      </div>
      <div>
        <h2>San Francisco</h2>
      </div>
    </div>
  );
};

export default Item;
