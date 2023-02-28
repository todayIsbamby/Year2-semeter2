import "./Card.css";
import { useCallback, useState } from "react";

const Card = ({foodtype,foodname,info,imgSrc }) => {
  const [vote, setVoteCount] = useState("MIN");

  const increase = useCallback(() => {
    if (vote === "MIN") {
      setVoteCount(1);
    } else if (vote === "MAX") {
      alert("Cannot Vote more");
    } else if (vote === 9) {
      setVoteCount("MAX");
    } else {
      setVoteCount(vote + 1);
    }
  }, [vote, setVoteCount]);

  const decrease = useCallback(() => {
    if (vote === "MIN") {
      alert("Cannot unvote");
    } else if (vote === "MAX") {
      setVoteCount(9);
    } else if (vote === 1) {
      setVoteCount("MIN");
    } else {
      setVoteCount(vote - 1);
    }
  }, [vote, setVoteCount]);

  return (
    <div className="flexBox">
      <div className="Foods">
        <div className="infoAndPhoto">
          <div className="info">
            <h2>{foodtype}</h2>
            <h4>{foodname}</h4>
            <p>{info}</p>
          </div>
          <img src={imgSrc} alt=""></img>
        </div>
        <div className="groupButton">
          <button onClick={increase}>Click to Vote</button>
          <div className="score">
            <p className="scoreText">{vote}</p>
          </div>

          <button onClick={decrease}>Click to Unvote</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
