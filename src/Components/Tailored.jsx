export const Tailored = () => {
    const cards1 = [
        {
            Text: "Quality Products",
            Link: "https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fquality-products.svg&w=48&q=75"
        },
        {
             Text: "Rare and exquisite designs",
             Link: "https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Frare-collection.svg&w=64&q=75"
        },
        {
             Text: "Simplified Material Discovery",
             Link: "https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fsimplified-discovery.svg&w=48&q=75"
        },
        {
            Text: "Expert Advice",
            Link: "https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fexpert-advice.svg&w=48&q=75"
        },
        
        {
            Text: "Excellent Customer Service",
            Link: "https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fcustomer-service.svg&w=48&q=75"
        }
    ]
  return (
    <div className=" mt-[80px] ">
            <span className="text-2xl font-[640] text-center flex justify-center">Tailored To You</span>
          <div className="flex justify-evenly ml-[70px] mr-[70px]  mt-[48px]">
              {cards1.map((item, index) => (
            <div key={index} className="flex flex-col items-center  ">
                    <div>
                        <img className="h-[50px] w-[70px]" src={item.Link} alt="cart" /></div>
              <div className="flex flex-col items-center mt-6">
                          <span className="text-[16px] font-bold"> {item.Text}</span>
              </div>
          </div>
          ))}
          
          
     </div>     
    </div>
  )
}