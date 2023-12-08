import "../sass/card.scss";
import Word from "./Word";
import { data } from "../helper/data";
const Card = () => {
  return (
    <main>
      <div className="container">
        {data.map(({ img, name, id, word }) => (
          <div key={id} className="card">
            <img src={img} alt="" />
            <Word word={word} name={name} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Card;
