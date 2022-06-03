import { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading: FC = () => {
  return (
    <div>
      <ClipLoader color={"#3e3b3b"} size={150} />
    </div>
  );
};

export default Loading;
