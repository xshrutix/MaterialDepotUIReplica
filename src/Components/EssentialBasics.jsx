import "./House.css";

const EssentialBasic = () => {
  const cards =[
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/MR_grade_plywood.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/BWP_grade_plywood.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/BWR_Grade_plywood.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/fully_calibrated_plywood.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/okume_face_plywood.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/gurjan_face_plywood.jpg?width=100"

]
  return (
    <div className="mt-[80px] ">
      <span className=" mb-4 text-left pl-[114px] text-[27px] font-semibold ">
        Essential Basics
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

export default EssentialBasic;
