import "./House.css";
const HouseOfMaterials = () => {
  const cards = [
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Classic_Wood_Cladding_Spaces.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Elegant_Quartz_Surfaces_Spaces.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Marble_TV%20Unit_Spaces.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Sleek_kitchen_cabinets_spaces.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/solids_on_wardrobe_Spaces.jpg?width=100",
    "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/timber_tone_kitchen_Spaces.jpg?width=100",
  ];
  return (
    <div className="mt-[100px] ">
      <span className=" mb-4 text-left pl-[114px] text-[25px] font-semibold ">
        House of Materials
      </span>
      <div className="flex flex-col items-center">
        <div className="inline-flex justify-evenly mt-8 shadow-inner ">
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

export default HouseOfMaterials;
