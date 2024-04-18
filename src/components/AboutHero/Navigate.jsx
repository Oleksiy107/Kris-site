import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navigate() {
  return (
    <div className="NavigateToItemPage">
      <ul>
        <li>
          <HashLink
            className="NavigateToItemPage__itemList"
            to={"/геройПерший"}
          >
            Герой 1
          </HashLink>
        </li>
        <li>
          <HashLink
            className="NavigateToItemPage__itemList"
            to={"/геройДругий"}
          >
            Герой 2
          </HashLink>
        </li>
        <li>
          <HashLink
            className="NavigateToItemPage__itemList"
            to={"/геройТретій"}
          >
            Герой 3
          </HashLink>
        </li>
        <li>
          <HashLink
            className="NavigateToItemPage__itemList"
            to={"/геройЧетвертий"}
          >
            Герой 4
          </HashLink>
        </li>
      </ul>
    </div>
  );
}
