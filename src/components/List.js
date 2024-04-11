import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const List = ({ title, param }) => {

  

  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData(param).then(res => setList(res.data.results))
  }, []);
  console.log(list)
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        <div className="list">
          <div className="row">
            <h2 className="text-white title">{title}</h2>
            <div className="col">
              <div className="row__posters">
                {
                  list.map(item => <img
                    className="row__poster row__posterLarge"
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title}
                  />)
                }
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default List;