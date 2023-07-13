import "./House.css";

const WallPanel = () => {
  const cards =[
   "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Charcoal_Panels_priced.jpg?width=100",
   "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/MDF%20Panels_priced.jpg?width=100",
   "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/WPC_Panels_priced.jpg?width=100",
   "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Wooden_look-375.jpg?width=100",
   "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Plain_Colour_Panels_priced.jpg?width=100",
   "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Marble%20Texture%20Panels_priced.jpg?width=100"

]
  return (
    <div className="mt-[80px] ">
      <span className=" mb-4 text-left pl-[114px] text-[27px] font-semibold ">
        Wall Panel Artistry
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

export default WallPanel;
