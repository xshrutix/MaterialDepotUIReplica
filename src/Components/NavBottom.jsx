import { RiArrowDropDownLine } from 'react-icons/ri'
export const NavBottom = () => {
    const items = [
        "PlyWood & Boards",
        "Laminates",
        "Tiles",
        "Louvers & Panels",
        "Quartz",
        "Wooden Flooring",
        "Hardware",
        "Sanitaryware",
        "Wallpaper"
    ]
    return (
      <div className='flex justify-center align-middle border-b-2 bg-white'>
            <div className="inline-flex justify-evenly">
                {items.map((item , index) => (
                   <div className="px-4 py-2 text-[17px] flex" key={index}>
                        <span className='text-black font-semibold'>{item}</span>
                  <RiArrowDropDownLine className='text-2xl'/>
                </div>
              ))}
            
                
            </div>
            </div>
  )
}
