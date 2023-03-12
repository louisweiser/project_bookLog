const wishListData = ["book1", "book2", "book3", "book4"];

export default function DynamicList() {
  const items = wishListData;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
