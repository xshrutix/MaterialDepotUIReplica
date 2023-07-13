
export const Choice = () => {
    const cards1 = [
        {
            Text: "Tiles",
            Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCollectionImages%2FTiles_mob.jpg%3Fwidth%3D200&w=128&q=75"
        },
        {
             Text: "Laminates",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FLaminates%2FChips%2F0.jpg%3Fwidth%3D200&w=128&q=75"
        },
        {
             Text: "Louvers",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FPanels%2520v02.jpg%3Fwidth%3D200&w=128&q=75"
        },
        {
            Text: "Plywood & Blockboards",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FPlywood%2FChips%2F0.jpg%3Fwidth%3D200&w=128&q=75"
        },
        {
                Text:"Wooden Flooring",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FWooden_flooring.webp%3Fwidth%3D200&w=128&q=75"
        },
        {
            Text: "MDF & Boards",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FMdf%2520board.jpeg%3Fwidth%3D200&w=128&q=75"
        }
    ]
    const cards2 = [
        {
           Text: "Quartz",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FQuartz.jpg%3Fwidth%3D200&w=128&q=75"
        },
        {
            Text: "Sanitaryware",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FSanitaryware.png%3Fwidth%3D200&w=128&q=75"
        },
        {
              Text: "Hinges & Channels",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FHinges%2520and%2520channels.jpg%3Fwidth%3D200&w=128&q=75"
        },
        {
            Text: "Quartz Sinks",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FDesigner%2520Sinks.jpg%3Fwidth%3D200&w=128&q=75"
        },
        {
                Text: "Wallpaper",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FWallpapers.webp%3Fwidth%3D200&w=128&q=75"
        },
        {
             Text: "Edgebands",
    Link: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FEdgebands.jpg%3Fwidth%3D200&w=128&q=75"
        }
    ]
  return (
      <div className="mt-[36px]">
          <div className="items-center text-center">
          <h2 className="text-[42px] font-semibold">Popular Choices</h2>
              <span className="text-base">Stunning Range For Your Dream Space</span>
          </div>
         <div className="flex justify-center items-center text-center align-middle mt-4">
              {cards1.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
    <div key={index} className="px-[42px] ">
  <img className="rounded-full h-[120px] w-[120px]" src={item.Link} alt={item.Text} />
          </div>
  <span className="mt-2">{item.Text}</span>
 </div>
  ))}
          </div>
           <div className="flex justify-center items-center text-center align-middle mt-6">
  {cards2.map((item, index) => (
    <div key={index} className="flex flex-col items-center">
    <div key={index} className="px-[42px] ">
  <img className="rounded-full h-[120px] w-[120px]" src={item.Link} alt={item.Text} />
          </div>
  <span className="mt-2">{item.Text}</span>
 </div>
  ))}
</div>
          
    </div>
  )
}
