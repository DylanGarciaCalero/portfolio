const ListItem = ({ name, link, className }) => {
  return (
    <li className={className ? className : 'text-sm'}>
      <a href={link} target="_blank">
        { name }
      </a>
    </li>
  )
};

export default ListItem;