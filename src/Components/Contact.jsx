import { BsTelephone } from 'react-icons/bs'
import './Contact.css'
const Contact = () => {
  return (
      <div className="inline-flex contact-wrapper items-center align-middle shadow-lg p-4 w-[170px] rounded-md bg-white">
  <div><BsTelephone className='text-[26px] font-semibold'/></div>
  <div className='flex flex-col ml-2'>
    <span className='text-[14px] font-semibold'>Buy on Phone</span>
    <span className='text-[18px] text-blue-700'>8121523945</span>
  </div>
</div>
  )
}

export default Contact