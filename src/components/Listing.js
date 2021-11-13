import ListItem from "./ListItem.js";
import { v1 as uuidv1 } from "uuid";

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
export default Listing;
