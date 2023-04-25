const ListItem = ({ name, link, className }) => {
  return (
    <li className={className ? className : 'text-sm flex justify-center items-center'}>
      <a href={link} target="_blank">
        { name }
      </a>
    </li>
  )
};

export default ListItem;