import Card from './Container/Card';
import './Carousel.css';
import Navigator from './Navigator';
import { useState } from 'react';
const Carousel = () => {
  const carouselImages = [
    'https://cdn.pixabay.com/photo/2018/05/14/20/56/pansy-3401542_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/04/07/16/47/spring-2211353_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/09/28/12/35/scotland-1700413_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/05/16/13/49/cow-7200409_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/09/16/04/02/skyline-5575251_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg',
  ];
  const [carouselIndex, setCaraouselIndex] = useState(0);
  return (
    <>
      <Navigator></Navigator>
      <Card>
        <div className='carousel'>
          <img src={carouselImages[carouselIndex]} alt='' height='300' width='500' />
          <p>{carouselIndex + 1}</p>
        </div>
        <div className='carousel-controls'>
          <button disabled={carouselIndex === 0 ? true : false} onClick={() => setCaraouselIndex(carouselIndex - 1)}>
            Previous
          </button>
          <button disabled={carouselIndex === carouselImages.length - 1 ? true : false} onClick={() => setCaraouselIndex(carouselIndex + 1)}>
            Next
          </button>
        </div>
      </Card>
    </>
  );
};

export default Carousel;
