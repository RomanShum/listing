function ListItem({ item }) {
  const code = item.currency_code;
  const length = item.title.length;

  let price =
    (code === "EUR" && "€" + item.price) ||
    (code === "USD" && "$" + item.price) ||
    item.price + " " + code;

  let title =
    (length > 50 && item.title.substring(0, 50) + "...") || item.title;

  let quantityClass =
    "item-quantity " +
    ((item.quantity <= 10 && "level-low") ||
      (item.quantity <= 20 && "level-medium") ||
      "level-high");

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img alt={item.title} src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={quantityClass}>{item.quantity} left</p>
      </div>
    </div>
  );
}

export default ListItem;
