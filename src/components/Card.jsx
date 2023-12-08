import "../sass/card.scss";
import Word from "./Word";
import { FaReadme } from "react-icons/fa6";
const Card = ({ data }) => {
  return (
    <div className="container">
      {data.map(({ img, name,id }) => (
        <div key={id} className="card">
         <div className="image">
         <img src={img} alt="" />
         </div>
      <div>
      <p>{name}</p>
          <FaReadme className="arrowDown"/>
      </div>
        
        </div>
      ))}
      <Word data={data}/>
    </div>
  );
};

export default Card;
