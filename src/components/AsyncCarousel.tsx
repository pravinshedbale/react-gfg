import { useEffect, useState } from 'react';
import Card from './Container/Card';
import './Carousel.css';
import Navigator from './Navigator';
type IPhoto = {
  url: string;
};
const AsyncCarousel = () => {
  const [current, setCurrent] = useState(1);
  const [url, setUrl] = useState('');
  useEffect(() => {
    const api = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + current);
      const json: IPhoto = await response.json();
      setUrl(json.url);
    };
    api();
  }, [current]);
  return (
    <>
      <Navigator></Navigator>
      <Card>
        <div className='carousel'>
          <img src={url} alt='' height='300' width='500' />
          <p>{current}</p>
        </div>
        <div className='carousel-controls'>
          <button disabled={current === 1 ? true : false} onClick={() => setCurrent(current - 1)} className='carousel-buttons'>
            Previous
          </button>
          <button disabled={current === 5000 ? true : false} onClick={() => setCurrent(current + 1)} className='carousel-buttons'>
            Next
          </button>
        </div>
      </Card>
    </>
  );
};

export default AsyncCarousel;
