export const Header = () => {
  return (

    <div className="border px-8 py-4">
      <header className="flex space-x-32 justify-between w-full ">
        <div>
          <img className="w-32" src="/images/FalanxCyber_Yellow_RGB_HighRes_Wavenet-2.png" alt="" />
        </div>
        <div className="flex space-x-4 text-lg font-bold mt-4 mr-16 justify-end font-normal">

          <button className="text-blue-950 hover:text-amber-400 py-2 px-4">Our services</button> 
          <button className="text-blue-950 hover:text-amber-400 py-2 px-0">Who we are</button>
          <a href="" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white py-2 px-4">Contact us</a>

        </div>
      </header>
    </div>
  )
}

