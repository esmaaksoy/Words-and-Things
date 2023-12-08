import { useState } from "react";
import "../sass/word.scss"
import {
  CiCircleMinus ,
  CiCirclePlus,
} from "react-icons/ci";
const Word = ({ name, word}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="title">
      <div className="arrow">
        <h4>{name}</h4>
        {show ? (
        <CiCircleMinus
          className="arrowDown"
          onClick={() => setShow(!show)}
        />
      ) : (
        <CiCirclePlus 
          className="arrowDown"
          onClick={() => setShow(!show)}
        />
      )}
      </div>
      {show && <p className="content">{word}</p>}
    </div>
  );
};

export default Word;
