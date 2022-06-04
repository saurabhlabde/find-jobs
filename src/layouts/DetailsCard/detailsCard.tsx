import { FC } from "react";

import { Profile, Item, Tag, Button } from "./components/index";

import { LocationIcon, CompanyIcon } from "@assets/index";

import { IDetailsCardProps } from "./detailsCard.d";

const DetailsCard: FC<IDetailsCardProps> = ({ props }) => {
  const title = props?.title ?? null;
  const profile = props?.company?.name.slice(0, 1) ?? null;
  const details = props?.description ?? null;
  const location = props?.locationNames ?? "-";
  const compony = props?.company?.name ?? "-";
  const tags = props?.tags ?? [];
  const remote = props?.remotes.length >= 1 ? "is" : "is not";
  const email = props?.userEmail ?? "-";
  const url = props?.applyUrl ?? null;

  const applyClickHandel = () => {
    return url && window.open(url, "_blank");
  };

  return (
    <div>
      <div className="bg-primary px-[15px] pt-[15px] pb-[20px] rounded-[15px] w-full m-[5px]">
        <div className="flex flex-row items-center">
          {profile && (
            <Profile
              props={{
                name: profile,
              }}
            />
          )}

          {title && (
            <div className="ml-2">
              <h1 className="text-primary_color text-sm font-semibold">
                {title}
              </h1>
            </div>
          )}
        </div>

        {details && (
          <div className="mt-[10px]">
            <h2 className="text-secondary_color text-sm font-semibold">
              <p>{details}</p>
            </h2>
          </div>
        )}

        <div className="flex flex-row mt-[15px] flex-wrap">
          <Item
            key={1}
            props={{
              icon: <CompanyIcon />,
              name: compony,
            }}
          />

          <Item
            key={1}
            props={{
              icon: <LocationIcon />,
              name: location,
            }}
          />
        </div>

        <div className="my-[15px]">
          <h2 className="text-secondary_color text-sm font-semibold">
            Job {remote} remote
          </h2>
        </div>

        <div className="my-[15px]">
          <h2 className="text-secondary_color text-sm font-semibold">
            Contact email : {email}
          </h2>
        </div>

        <div className="flex flex-row flex-wrap mt-[10px] ml-[-2.5px]">
          {tags?.map((item, i) => {
            return (
              <Tag
                key={i}
                props={{
                  name: item?.name,
                }}
              />
            );
          })}
        </div>

        <div className="mt-[75px]">
          <Button
            props={{
              label: "Apply for job",
              onClick: applyClickHandel,
            }}
          />
        </div>

        <div className="h-72 w-full"></div>
      </div>
    </div>
  );
};

export default DetailsCard;
