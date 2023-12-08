import "../sass/card.scss";
import Word from "./Word";
import { data } from "../helper/data";
const Card = () => {
  return (
    <div className="container">
      {data.map(({ img, name, id, word }) => (
        <div key={id} className="card">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <Word word={word} name={name} />
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Card;
