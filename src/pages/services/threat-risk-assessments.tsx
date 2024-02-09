import { StaticBanner } from "../../components"
import { GoSearch } from "react-icons/go";
import { LiaLifeRingSolid } from "react-icons/lia";
import { MdOutlineMessage } from "react-icons/md";
import Partner from "../home/components/partner";






const ThreatRiskAssessments = () =>{
    return(
        <section>
            <section>
                <section >
                    <StaticBanner
                        content={{
                            heading: "Managed Detection & Response (MDR)",
                            description: "24/7/365 cyber security threat monitoring for your business",
                            url: "#",
                        }}
                    />
                </section>
            </section>

            <section className=" -mt-24 relative z-10 ">
        <div className="bg-zinc-50 md:mx-24 z-30 md:px-12 px-16 pb-4">
          <h2 className="flex md:text-4xl text-2xl text-slate-950 md:justify-center text-center mb-16 pt-12">Concerned about cyber threats and risks?</h2>
          <div className="md:flex justify-center md:space-x-28  mb-16">
            <div className="md:mb-0 mb-12">
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 mx-auto py-7 ml-16 shadow-xl hover:bg-amber-300 hover:text-white text-slate-950"><GoSearch /></div>
              <p className="text-center text-xl text-slate-950">We can help you identify the risks and threats you face, addressing three key areas of weakness.</p>
            </div>
            <div className="md:mb-0 mb-12">
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 ml-16 shadow-xl hover:bg-amber-300 hover:text-white text-slate-950"><LiaLifeRingSolid /></div>
              <p className="text-center text-lg text-slate-950">We focus on your technology to provide you with a threat model of your organisation’s key assets.</p>
            </div>
            <div className="md:mb-0 mb-12">
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 ml-16      shadow-xl hover:bg-amber-300 hover:text-white text-slate-950"><MdOutlineMessage /></div>
              <p className="text-center text-lg text-slate-950">We advise you on the cybersecurity solutions that are most applicable and effective for your organisation’s needs.</p>
            </div>
          </div>
        </div>
        
      </section>

      <section>
                <div className="md:bg-[url('/images/cyber-awareness.jpg')]  bg-cover bg-center relative md:mb-20 mb-8">
                    <div className=" flex flex-row md:justify-end">
                        <div className=" flex flex-col md:w-5/12 text-left md:mr-4 md:my-24 my-8 px-6">
                            <h2 className="md:text-5xl text-3xl text-blue-950 mb-8 leading-tight">Focused security solutions</h2>
                            <div className="text-left">
                                <p className="mb-6 text-blue-950 leading-7">Are you concerned about unnecessary expenses when protecting your organisation’s assets and information? We can help you understand what means of cybersecurity would be most effective for you, based on your key assets.</p>

                                <p className="mb-6 text-blue-950 leading-7">We have created a simple process that helps us identify, analyse and prioritise risks bespoke to your operations and infrastructure. With this understanding, we can help you focus expenses on the security solutions relevant to your organisation.</p>

                                <p className="mb-6 text-blue-950 leading-7">Would you like to learn about how you can make your cybersecurity budget more efficient and effective?</p>

                            </div>
                            <button className="bg-slate-900 text-white py-4 px-6 flex justify-center md:w-2/5 w-3/6 "><a href="">Contact us</a></button>


                        </div>

                    </div>
                </div>
            </section >

            <section>
                <Partner />
            </section>


        </section>
    )

}
export default ThreatRiskAssessments