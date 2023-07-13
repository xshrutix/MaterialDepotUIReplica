import "./House.css";

const TileGallery = () => {
  const cards =[
       "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/PGVT_vitrified_Tiles.jpg?width=100",
       "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/ceramic_Tiles_priced.jpg?width=100",
       "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/gvt_vitrified_Tiles_priced.jpg?width=100",
       "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/porcelain_tiles_priced.jpg?width=100",
       "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/vitrified_Tiles_price.jpg?width=100",
       "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/wall_tiles_priced.jpg?width=100"
]
  return (
    <div className="mt-[90px] ">
      <span className=" mb-4 text-left pl-[114px] text-[25px] font-semibold ">
        Tile Gallery
      </span>
      <div className="flex flex-col items-center">
        <div className="inline-flex justify-evenly mt-6 shadow-inner ">
          {cards.map((item, index) => (
            <div key={index} className="p-[6px] shadow-card shadow-md">
              <img
                src={item}
                className="h-[300px] w-[204px]"
                alt={`Item ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TileGallery;
