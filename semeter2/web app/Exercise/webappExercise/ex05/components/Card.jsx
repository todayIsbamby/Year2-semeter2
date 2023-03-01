import "./Card.css";
import Button from "./button";

const Card = ({
  foodtype,
  foodname,
  info,
  imgSrc,
  vote,
  setVoteCount,
  increase,
  decrease,
}) => {
  // const increase = () => {
  //   if (vote === "MIN") {
  //     setVoteCount(1);
  //   } else if (vote === "MAX") {
  //     alert("Cannot Vote more");
  //   } else if (vote === 9) {
  //     setVoteCount("MAX");
  //   } else {
  //     setVoteCount(vote + 1);
  //   }
  // };

  // const decrease = () => {
  //   if (vote === "MIN") {
  //     alert("Cannot unvote");
  //   } else if (vote === "MAX") {
  //     setVoteCount(9);
  //   } else if (vote === 1) {
  //     setVoteCount("MIN");
  //   } else {
  //     setVoteCount(vote - 1);
  //   }
  // };

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
          <Button name="Click to Vote"
            action={() => {
              increase(vote, setVoteCount);
            }}
          />
        
         
          <div className="score">
            <p className="scoreText">{vote}</p>
          </div>

          <Button
            name="Click to Unvote"
            action={() => {
              decrease(vote, setVoteCount);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
