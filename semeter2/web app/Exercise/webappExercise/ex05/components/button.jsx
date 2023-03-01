import "./Card.css";

const Button = ({ name, action }) => {
  return <button onClick={action}>{name}</button>;
};

export default Button;
