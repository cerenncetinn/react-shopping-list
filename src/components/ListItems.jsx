import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItems({
  items,
  onDeleteItem,
  onUpdatesItems,
  filterButton,
}) {
  const filteredItems = items.filter((item) => {
    if (filterButton === "all") return true;
    if (filterButton === "completed") return item.completed;
    if (filterButton === "incomplete") return !item.completed;
  });

  return (
    <ul className="shopping-list list-unstyled">
      {filteredItems.length > 0 ? (
        filteredItems.map((i) => (
          <Item
            urun={i}
            key={i.id}
            onDeleteItem={onDeleteItem}
            onUpdatesItems={onUpdatesItems}
          />
        ))
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
