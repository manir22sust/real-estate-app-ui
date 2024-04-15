import { Card } from "../card/Card";

import { listData } from "../../lib/dummydata";

import "./list.scss";

export const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
