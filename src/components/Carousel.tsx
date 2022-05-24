import Card from "./Container/Card";
import "./Carousel.css";
import Navigator from "./Navigator";
const Carousel = () => {
  return (
    <>
      <Navigator></Navigator>
      <Card>
        <div className="carousel"></div>
        <div className="carousel-controls"></div>
      </Card>
    </>
  );
};

export default Carousel;
