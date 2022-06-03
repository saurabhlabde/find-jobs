import * as React from "react";
import { memo } from "react";

const LocationIcon = () => (
  <svg width={15} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.887 5.281C12.231 2.394 9.712 1.094 7.5 1.094h-.006c-2.207 0-4.731 1.294-5.388 4.181C1.375 8.5 3.35 11.231 5.138 12.95a3.397 3.397 0 0 0 2.362.956c.85 0 1.7-.319 2.356-.956 1.788-1.719 3.763-4.444 3.031-7.669ZM7.5 8.412a1.969 1.969 0 1 1 0-3.937 1.969 1.969 0 0 1 0 3.938Z"
      fill="#fff"
    />
  </svg>
);

const LocationIconMemo = memo(LocationIcon);
export default LocationIconMemo;
