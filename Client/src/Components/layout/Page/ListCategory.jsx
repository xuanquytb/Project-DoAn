import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../../../Store/Context/CategoryContext";
import { useHistory, Link } from "react-router-dom";

const ListCategory = () => {
  const history = useHistory();
  const {
    categoryState: { categorys },
    getCategory,
  } = useContext(CategoryContext);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="list__category">
        <div
          className="list__category-content"
          id="slider__category"
          style={{ transform: "translateX(0)" }}
        >
          {categorys.map((item) => {
            return (
              <Link
                to={`/category-user?id=${item.id}`}
                key={item.id}
                className="list__category-link"
              >
                {item.nameCategory}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListCategory;
