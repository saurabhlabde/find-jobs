import { FC } from "react";
import Router from "next/router";

import { Profile, Item, Tag } from "./components/index";

import { CompanyIcon, LocationIcon } from "@assets/index";

import { IJobCardProps } from "./jobCard.d";

const JobCard: FC<IJobCardProps> = ({ props }) => {
  const id = props?.id ?? null;
  const title = props?.title ?? null;
  const profile = props?.company?.name.slice(0, 1) ?? null;
  const details = props?.description ?? null;
  const location = props?.locationNames ?? "-";
  const compony = props?.company?.name ?? "-";
  const tags = props?.tags ?? [];
  const slug = props?.slug ?? [];

  const cardClickHandel = () => {
    return Router.push({
      pathname: `/d/${id}`,
      query: {
        companySlug: "company slug",
        jobSlug: "job slug",
      },
    });
  };

  return (
    <div
      className="bg-secondary hover:bg-slate-900 px-[15px] pt-[15px] pb-[20px] rounded-[15px] w-[500px] m-[5px] cursor-default ease-in duration-200"
      onClick={cardClickHandel}
    >
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
        <div className="jb-card-details mt-[10px] line-clamp-3">
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
    </div>
  );
};

export default JobCard;
