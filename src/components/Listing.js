import ListItem from "./ListItem.js";
import { v1 as uuidv1 } from "uuid";
import PropTypes from "prop-types";

function Listing({ items }) {
  const filterItems = items.filter((item) => item.state !== "removed");
  const listItems = filterItems.map((item) => (
    <ListItem key={uuidv1()} item={item} />
  ));
  return <div className="item-list">{listItems}</div>;
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Listing;
