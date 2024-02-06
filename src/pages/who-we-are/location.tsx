import { StaticBanner } from "../../components";
import Partner from "../home/components/partner";
import { IoLocationSharp } from "react-icons/io5";
const Location = () => {
  return (
    <section>
      <section>
        <StaticBanner
          content={{
            heading: "Our Location",
            description:
              "The home of our UK based SOC.",
            url: "#",
          }}
        />
      </section>
      <section>
        <div className="md:mx-28 my-24 mx-4">
          <div className="text-center text-sky-950">
            <h6 className="md:text-5xl text-3xl">Our location</h6>
            <p className="text-base mt-7">Here is the location of our UK office.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10 py-6 mt-10">
            <div className="md:basis-8/12 md:mt-0 mt-10">
              <iframe className="w-full" height="400" scrolling="no" id="gmap_canvas"
                src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=Abbey%20Square,Reading%20RG1%203BE%20The%20blade+(The%20blade)
             &amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
            <div className="bg-sky-950 h-28 md:basis-4/12 basis-screen md:mt-5 p-6 order-first md:order-last">
              <h6 className="text-xl text-white font-normal">Reading</h6>
              <p className="pt-3 text-base text-sky-100">The Blade,Abbey Square,Reading RG1 3BE</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="py-3 px-6 bg-sky-950 text-white flex space-x-2 hover:bg-amber-400"><IoLocationSharp className="text-xl" /><p>Get Directions</p></button>
          </div>
        </div>

      </section>
      <Partner />
    </section>
  )
}

export default Location