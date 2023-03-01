import "./index.css";
import Card from "./components/Card";
import { useState } from "react";
const foods = [
  {
    foodtype: "อาหารคาว",
    foodname: "ส้มตำ",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum sapien eget nisi vestibulum lacinia. Maecenas eget lectus in nibh placerat sagittis. Pellentesque dignissim ut sapien nec consequat. Aenean id mattis eros. Phasellus vulputate ante at congue tincidunt. Quisque nibh nisi, lobortis eget magna non, fermentum molestie leo. Vestibulum eu risus elit. Vestibulum volutpat facilisis dignissim. ",
    imgSrc:
      "https://cdn.pixabay.com/photo/2015/04/07/07/51/papaya-salad-710613__480.jpg",
  },
  {
    foodtype: "อาหารหวาน",
    foodname: "มาการอง",
    info: "Curabitur ac fringilla purus. Donec enim justo, blandit cursus lobortis non, lobortis ut velit. Ut eu consequat eros. Vivamus interdum pellentesque ligula, quis malesuada purus iaculis quis. Pellentesque ac ipsum pharetra, lacinia justo et, dignissim nulla. Nam diam augue, laoreet et dolor sit amet, suscipit placerat risus. In volutpat quam eget erat ultrices, vitae varius metus interdum.",
    imgSrc: "https://mpics.mgronline.com/pics/Images/558000008264601.JPEG",
  },
];
function App() {
  const [vote, setVoteCount] = useState("MIN");
  const [vote1, setVote1Count] = useState("MIN");

  const increase = (value, setValue) => {
    if (value === "MIN") {
      setValue(1);
    } else if (value === "MAX") {
      alert("Cannot Vote more");
    } else if (value === 9) {
      setValue("MAX");
    } else {
      setValue(value + 1);
    }
  };

  const decrease = (value, setValue) => {
    if (value === "MIN") {
      alert("Cannot unvote");
    } else if (value === "MAX") {
      setValue(9);
    } else if (value === 1) {
      setValue("MIN");
    } else {
      setValue(value - 1);
    }
  };

  return (
    <div
      className="flex flex-col items-center space-y"
      style={{ width: "100%" }}
    >
      <h1>โหวตอาหาร</h1>

      <Card
        foodtype={foods[0].foodtype}
        foodname={foods[0].foodname}
        info={foods[0].info}
        imgSrc={foods[0].imgSrc}
        vote={vote}
        setVoteCount={setVoteCount}
        increase={increase}
        decrease={decrease}
      />
      <Card
        foodtype={foods[1].foodtype}
        foodname={foods[1].foodname}
        info={foods[1].info}
        imgSrc={foods[1].imgSrc}
        vote={vote1}
        setVoteCount={setVote1Count}
        increase={increase}
        decrease={decrease}
      />
    </div>
  );
}

export default App;
