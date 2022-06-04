import { useState, FC } from "react";
import Router from "next/router";

import { SearchIcon } from "@assets/index";

import { ISearchInputProps } from "./searchInput.d";

const SearchInput: FC<ISearchInputProps> = ({ props }) => {
  const [focus, setFocus] = useState<boolean>();

  const focusHandel = () => {
    return setFocus(true);
  };

  const blurHandel = () => {
    return setFocus(false);
  };

  const redirectHandel = () => {
    return (
      props?.redirect &&
      Router.push({
        pathname: "/search",
        query: {
          q: "",
        },
      })
    );
  };

  const value = props?.value ?? "";
  const setValue = props?.setValue ?? null;

  const background = focus ? "bg-slate-900" : "bg-secondary";

  return (
    <div
      className={`${background} h-12 w-full md:w-[500px] flex flex-row items-center rounded-full ease-in duration-200`}
      onClick={redirectHandel}
    >
      <div className="h-full w-full">
        <input
          placeholder="Search jobs"
          className="h-full w-full px-5 bg-transparent text-primary_color border-none outline-none text-sm font-semibold"
          onFocus={focusHandel}
          onBlur={blurHandel}
          value={value}
          onChange={(e) => {
            return setValue && setValue(e.target.value);
          }}
        />
      </div>

      <div className="mr-5">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
