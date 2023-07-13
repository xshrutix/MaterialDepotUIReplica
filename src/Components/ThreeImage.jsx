
import img1 from '../assets/images/img1-div1.png'
import img2 from '../assets/images/img2-div1.png'
import video from '../assets/images/hero_Animation.mp4'
export const ThreeImage = () => {
    return (
      <div className='mt-[115px] flex justify-center items-center '>
      <div className="inline-flex align-middle justify-evenly ">
                <div>
                   <video width="870" height="450" autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
             
          </div>
          <div>
              <img  src={img1} className='px-6 h-[205px] w-[470px]'  alt="" />
              <img src={img2} className='h-[205px] w-[470px] px-6 pt-[10px]'  alt="" />
          </div>
            </div>
            </div>
  )
}
