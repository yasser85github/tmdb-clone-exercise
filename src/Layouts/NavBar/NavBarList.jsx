import FontAwesomeIcon from "react-fontawesome";

export default function NavBarList({ items }) {
  function getItem(item) {
    let itemList = null;
    switch (item.type) {
      case "logo":
        itemList = (
          <img className="h-5 min-w-[154px]" src={item.src} alt={item.name} />
        );
        break;
      case "language":
        itemList = (
          <p className="border-white rounded-[3px] py-[3px] px-[5px] border-[1px] border-solid hover:bg-white hover:text-tmdbDarkBlue">
            {item.name}
          </p>
        );
        break;
      case "icon":
        itemList = <FontAwesomeIcon name={item.name} size="lg" />;
        break;
      default:
        itemList = <p>{item.name}</p>;
        break;
    }
    return itemList;
  }
  return (
    <ul className="flex items-center gap-7">
      {items.map((item) => {
        return <li key={item.name}>{getItem(item)}</li>;
      })}
    </ul>
  );
}
