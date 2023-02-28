import "./index.css";
import Card from "./components/Card";

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
  return (
    <div
      className="flex flex-col items-center space-y"
      style={{ width: "100%" }}
    >
      <h1>โหวตอาหาร</h1>
      {foods.map((food) => {
        return (
          <Card
            foodtype={food.foodtype}
            foodname={food.foodname}
            info={food.info}
            imgSrc={food.imgSrc}
          />
        );
      })}
    </div>
  );
}

export default App;
