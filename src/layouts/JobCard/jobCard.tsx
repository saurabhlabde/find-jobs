import { FC } from "react";

import { Profile, Item, Tag } from "./components/index";

const JobCard: FC = () => {
  return (
    <div>
      <div>
        <Profile />
        <div>
          <h1>Senior Fullstack Engineer - Platform</h1>
        </div>
      </div>

      <div>
        At Segment, we believe companies should be able to send their customer
        data wherever they want, whenever they want, with no fuss. We make this
        easy with a single whenever they want with no...
      </div>

      <div>
        <Item key={1} />
        <Item key={2} />
      </div>

      <div>
        <Tag />
      </div>
    </div>
  );
};

export default JobCard;
