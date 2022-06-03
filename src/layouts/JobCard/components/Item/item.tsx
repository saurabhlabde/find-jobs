import { FC } from "react";

import LocationIcon from "@assets/location.svg";

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
