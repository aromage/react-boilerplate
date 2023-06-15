import { PostDataType } from "data/types";
import React, { FC } from "react";
import Badge from "components/Badge/Badge";
import { useHistory } from "react-router-dom";

export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  categories: string[];
  maxLength?: number;
}

// | "pink"
// | "green"
// | "yellow"
// | "red"
// | "indigo"
// | "blue"
// | "purple"
// | "gray";

const CategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = "flex flex-wrap space-x-2 gap-y-2",
  itemClass,
  categories,
  maxLength = 1,
}) => {
  const history = useHistory();
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      {categories.length > 0 ? (
        categories.slice(0, maxLength).map((item, index) => (
          <div
            key={index}
            className="hover:cursor-pointer h-6"
            onClick={() => {
              const paramObj = {
                type: "hashtag",
                keyword: item,
              };
              history.push({
                pathname: "/search-result",
                search: new URLSearchParams(paramObj).toString(),
              });
            }}
          >
            <Badge
              className={itemClass}
              key={index}
              name={item}
              href={""}
              color={"gray"}
            />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CategoryBadgeList;
