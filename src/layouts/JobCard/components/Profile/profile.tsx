import { FC } from "react";

import { IProfileProps } from "./profile.d";

const Profile: FC<IProfileProps> = ({ props }) => {
  const profile = props?.name ?? "-";
  return (
    <div className="h-9 w-9 flex items-center justify-center bg-primary rounded-full">
      <h1 className="text-primary_color font-bold uppercase">{profile}</h1>
    </div>
  );
};

export default Profile;
