import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FlipMove from "react-flip-move";

const listingItems = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              onClick={() => {
                props.deleteItem(item.key);
              }}
              icon={faTrash}
            />
          </span>

          <div className="date">{new Date(item.key).toDateString()}</div>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
};

export default listingItems;
