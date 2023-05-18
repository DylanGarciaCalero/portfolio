const Button = ({ title, className }) => {
  return (
    <button className={ className ? className : 'bg-secondary p-2 px-3 border border-text-primary border-opacity-10 transition ease-in-out duration-300 hover:text-primary rounded-md text-sm text-white dark:text-text-primary hover:bg-highlight'}>
      { title }
    </button>
  );
};
export default Button;