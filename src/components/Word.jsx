import { useState } from "react";
import "../sass/word.scss"
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
const Word = ({ name, word }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="title">
      {show ? <p className="content">{word}</p> : <p className="name">{name}</p>}
      {show ? (
        <IoArrowUpCircleOutline
          className="arrowDown"
          onClick={() => setShow(!show)}
        />
      ) : (
        <IoArrowDownCircleOutline
          className="arrowDown"
          onClick={() => setShow(!show)}
        />
      )}
    </div>
  );
};

export default Word;
