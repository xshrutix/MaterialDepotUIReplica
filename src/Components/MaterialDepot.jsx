import "./House.css";

const MaterialDepot = () => {
 const cards =[
 "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/apple_exclusive_brand.jpg?width=100",
 "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/vivre_exclusive_brand.jpg?width=100",
 "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/therare_exclusive_brand.jpg?width=100",
 "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/viva_exclusive_brand.jpg?width=100",
 "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/sol_exclusive_brand.jpg?width=100",
 "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/alimo_exclusive_brand.jpg?width=100"

]
  return (
    <div className="mt-[80px] ">
      <span className=" mb-4 text-left pl-[114px] text-[27px] font-semibold ">
        Material Depot Exclusives
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

export default MaterialDepot;
