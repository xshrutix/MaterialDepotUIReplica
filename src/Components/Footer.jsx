import companyLogo from "../assets/images/md_main_logo.png";
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { RxTwitterLogo } from 'react-icons/rx'
import { ImYoutube } from 'react-icons/im'
import { FaFacebook } from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'



const Footer = () => {
  return (
      <div className="mt-[90px] mb-8 py-4 pr-[60px]">
          <div className="flex justify-evenly ml-[50px] mr-[180px]">
              <div className="flex flex-col items-center">
                  <div>
                      <img src="https://materialdepot.in/images/header/main_logo.svg"></img>
                      </div>
                  <span className="text-lg font-normal">@2023 Material Depot All Rights</span>
                  <span className="text-lg font-normal">Reserved</span>
              </div>
              <div className="flex flex-col items-start">
                  <span className="text-lg mb-2">MATERIAL DEPOT</span>
                 
                  <span className="text-base font-bold">FAQs</span>
                 
                  <span className="text-base  font-bold">About us</span>
                 
                  <span className="text-base  font-bold">Contact us</span>
                  
                  <span className="text-base  font-bold">Careers</span>
              </div>
              
              <div className="flex flex-col items-start">
                  <span className="text-lg font-normal mb-2">Follow Us</span>
                  
                  <div className="inline-flex">
                     
                          <AiFillLinkedin className="text-3xl  mr-2" />
                          
                      <AiOutlineInstagram  className="text-3xl mr-2" />
                      <RxTwitterLogo  className="text-3xl mr-2" />
                      <ImYoutube   className="text-3xl mr-2"/>
                      <FaFacebook  className="text-3xl mr-2" />
                      <BsPinterest  className="text-3xl"/>
                  </div>
                  <span className="text-lg mt-2">BLOG</span>
              </div>
              <div className="flex flex-col items-start ">
                   <span className="mb-2 text-lg font-normal">Download the App Now</span>
                  <img className="mt-4" src="https://materialdepot.in/images/footer/googleplay.svg" />
                 
              </div>
          </div> 
    </div>
  );
};

export default Footer;