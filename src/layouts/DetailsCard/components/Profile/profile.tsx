import { FC } from "react";

import { IProfileProps } from "./profile.d";

const Profile: FC<IProfileProps> = ({ props }) => {
  return (
    <div className="h-9 w-9 flex items-center justify-center bg-secondary rounded-full">
      <h1 className="text-primary_color font-bold uppercase">{props?.name}</h1>
    </div>
  );
};

export default Profile;
