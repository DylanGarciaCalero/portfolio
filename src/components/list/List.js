import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <ul className="flex flex-row gap-2 items-center list-none">
      {items.map((item, index) => {
        if (index !== items.length && index !== 0) {
          return (
            <>
              <p id="list-devider" className="px-4">/</p>
              <ListItem name={ item.name } link={item.link}/>
            </>
          )
        } else {
          return (
            <ListItem name={ item.name } link={item.link}/>
          )
        }
      })}
    </ul>
  )
};

export default List;