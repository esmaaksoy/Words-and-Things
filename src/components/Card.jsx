import "../sass/card.scss";
import Word from "./Word";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const Card = ({ data }) => {
  return (
    <div className="container">
      {data.map(({ img, name,id }) => (
        <div key={id}>
          <img src={img} alt="" />
          <p>{name}</p>
          <MdKeyboardDoubleArrowDown className="arrowDown"/>
        </div>
      ))}
      <Word />
    </div>
  );
};

export default Card;
