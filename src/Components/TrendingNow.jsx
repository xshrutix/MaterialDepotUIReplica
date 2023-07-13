import { useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './House.css';

const TrendingNow = () => {
  const cards = [
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/wooden_texture_laminates.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/fabric_laminates.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/bathroom_Tile.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/bedroom_Tiles.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/elevation_Tiles_nonpriced.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/highlighter_tiles.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/marble_look_tiles.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/stacked_stone_Tiles.png?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/brick_look_tiles_nonpriced.jpg?width=100"
  ];

  const containerRef = useRef(null);
  const cardWidth = 200; // Width of each card
  const padding = 8; // Padding between cards

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollTo({
      left: container.scrollLeft - (container.clientWidth + padding),
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollTo({
      left: container.scrollLeft + (container.clientWidth + padding),
      behavior: 'smooth',
    });
  };

  return (
    <div className="mt-8 px-[65px]">
      <span className=" text-left pl-[40px] text-[25px] mb-8 font-semibold ">
        Trending Now
      </span>
      <div className="carousel-container">
        <button className="carousel-arrow" onClick={scrollLeft}>
          <BsChevronLeft />
        </button>
        <div className="carousel-items" ref={containerRef}>
          {cards.map((item, index) => (
            <div key={index} className="carousel-card shadow-inner">
              <img
                src={item}
                className="card-image"
                alt={`Item ${index}`}
              />
            </div>
          ))}
        </div>
        <button className="carousel-arrow" onClick={scrollRight}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}

export default TrendingNow;
