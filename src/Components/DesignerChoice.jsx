import "./House.css";

export const DesignerChoice = () => {
  const cards =[
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Acrylic_Laminates_non-priced.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Solid_color_laminates.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/hexagonal_Tiles.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/moroccan_tiles.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/subway_Tiles.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/mosaic_tiles.jpg?width=100"

]
  return (
    <div className="mt-[90px] ">
      <span className=" mb-4 text-left pl-[114px] text-[25px] font-semibold ">
        Designer's Choice
      </span>
      <div className="flex flex-col items-center">
        <div className="inline-flex justify-evenly mt-6 shadow-inner ">
          {cards.map((item, index) => (
            <div key={index} className="px-[6px] shadow-card shadow-md">
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
}
