import "./House.css";

const StyleSpectrum = () => {
 const cards =[
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Scandinavian_design_theme.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Minimalist_design_theme.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Modern_design_theme.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Bohemian_design_theme.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Coastal_design_theme.jpg?width=100",
  "https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Traditional_design_theme.jpg?width=100"

]
  return (
    <div className="mt-[80px] ">
      <span className=" mb-4 text-left pl-[114px] text-[27px] font-semibold ">
        The Style Spectrum
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

export default StyleSpectrum;
