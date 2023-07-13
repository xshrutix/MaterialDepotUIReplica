import {BsWhatsapp} from 'react-icons/bs'

const ExclusiveRequest = () => {
    return (
        <div className="px-[110px] mt-[70px] font-inter">
            <span className="text-[32px] font-[650] text-center flex justify-center ">Exclusive Material Requests</span>
            <div className="flex mt-2 bg-[#f5eddf] px-8 py-4 rounded-lg justify-between align-middle">
                <div className="flex-col align-middle pt-10 pb-6">
                    <span className="text-xl font-semibold">
                        No more wasting time and energy visiting multiple stores.
                    </span>
                    <br/>
                    <br />
                    <span>Just send us a WhatsApp message with your material list, and we'll give you the</span>
                    <br />
                    <span>best quote possible. It's that easy!</span>
                    <br />
                    
                    
                    <br/>
                    <button className='flex text-white font-bold bg-green-600 py-3 px-[56px] rounded-lg'>
                        <BsWhatsapp className='text-base mr-3 mt-1' />
                        <span className='text-[16px]'>Get Quote on Whatsapp</span>
                    </button>
 
                </div>
                <div>
                    <img className="w-[400px] h-[270px]" src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fmaterial-request.png&w=1920&q=75" />
                </div>
            </div>
     </div>
  )
}

export default ExclusiveRequest