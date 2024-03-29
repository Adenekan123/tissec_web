import { GiSmartphone } from "react-icons/gi";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";




export const Footer = () => {
  return (
    <div className=" bg-[#122135] md:p-28 p-4">
      <footer className="md:flex md:space-x-16">
        <div className="text-white text-base font-medium leading-relaxed md:pt-0 pt-20">
          <div className="">
            <img className="w-36 mb-5" src="/images/Whitex150.png" alt="" />
          </div>
          <h3 className="mb-9 ">Falanx Cyber Defence Limited is part of Wavenet Ltd.</h3>
          <ul>
            <li><a href="" className='hover:text-amber-300'>Privacy Policy</a></li>
            <li><a href="" className='hover:text-amber-300 '>Modern Slavery and Human Trafficking Policy Statement</a></li>
            <li className="mb-7 hover:text-amber-300"><a href="">Terms & Conditions</a></li>
          </ul>
          <h3>Registered company No. 08224292</h3>
          <h3>VAT No. GB3677 307 67</h3>
        </div>

        <div className="flex space-x-12 text-white mt-8 mb-12">
          <div className="leading-loose">
            <h3 className="font-extrabold text-lg mb-5">What we do</h3>
            <ul className='text-base leading-7'>
              <li><a href="" className='hover:text-amber-300'>Penetration Testing</a></li>
              <li><a href="" className='hover:text-amber-300'>Detect and Response</a></li>
              <li><a href="" className='hover:text-amber-300'>Advice and Guidance</a></li>
            </ul>

          </div>
          <div className="leading-loose">
            <h3 className="font-extrabold text-lg mb-5">Who we are</h3>
            <ul className='text-base'>
              <li><a href="" className='hover:text-amber-300 mb-4'>About Us</a></li>
              <li><a href="" className='hover:text-amber-300 mb-4'>Meet our Team</a></li>
              <li><a href="" className='hover:text-amber-300 mb-4'>Case Studies</a></li>
              <li><a href="" className='hover:text-amber-300 mb-4'>Blog</a></li>
            </ul>

          </div>

        </div>
        <div className="leading-loose font-thin text-sm text-white mt-8">
          <h3 className="font-extrabold text-lg mb-5">Contact</h3>
          <div className='flex mb-4 '>
            <div className='text-2xl mr-3 text-amber-300'><GiSmartphone /></div>

            <ul><li><a href="" className='hover:text-amber-300'>020 7856 9450</a></li></ul>
          </div>
          <div className='flex mb-4'>
            <div className='text-2xl mr-3 text-amber-300'><PiEnvelopeSimpleThin /></div>
            <ul><li><a href="" className='hover:text-amber-300'>info@falanx.com</a></li></ul>
          </div>
          <div className='flex mb-4'>
            <div className='text-2xl mr-3 text-amber-300'><CiLocationOn /></div>
            <ul><li><a href="" className='hover:text-amber-300'>Our Location</a></li></ul>
          </div>
        </div>
      </footer>
      <div className=" md:flex text-white mt-7 font-medium md:space-x-96">
        <div className='text-2xl'>
          <ul className='flex space-x-4'>
            <li><a href="" className='hover:text-amber-300'><FaFacebookF /></a></li>
            <li><a href="" className='hover:text-amber-300'><VscTwitter /></a></li>
            <li><a href="" className='hover:text-amber-300'><FaLinkedinIn /></a></li>
            <li><a href="" className='hover:text-amber-300'><FaYoutube /></a></li>
          </ul>
        </div>

        <h3 className="md:mt-0 mt-8  md:text-base text-sm">© 2024 - Falanx - Web Design & Development by One2create Ltd</h3>
      </div>

    </div>
  )
}

