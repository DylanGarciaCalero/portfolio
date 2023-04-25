import List from "../list/List";

const Navigation = ({ navItems }) => {
  return (
    <nav className="hidden md:block font-semibold">
      <List items={ navItems }/>
    </nav>
  )
};
export default Navigation;