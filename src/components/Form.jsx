import { FaPlusSquare } from "react-icons/fa";

const Form = ({ setInputText }) => {
  const inputHandler = (event) => {
    setInputText(event.target.value);
  };
  return (
    <form>
      <input type="text" className="todo-input" onChange={inputHandler} />
      <button className="todo-button" type="submit">
        <FaPlusSquare />
      </button>
    </form>
  );
};

export default Form;
