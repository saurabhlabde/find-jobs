import { FC } from "react";

import { SearchIcon } from "@assets/index";

const SearchInput: FC = () => {
  return (
    <div>
      <div>
        <input placeholder="Search jobs" />
      </div>

      <div>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
