import { StaticBanner } from "../../components"
import { GoCircleSlash } from "react-icons/go";
import { BsCloudDownload } from "react-icons/bs";
import { MdLocationSearching } from "react-icons/md";
import { HiOutlineLockOpen } from "react-icons/hi";
import { SiCircle } from "react-icons/si";
import Partner from "../home/components/partner";






const EthicalPhishing = () => {
  return (
    <section>
      <section >
        <StaticBanner 
          content={{ 
            heading: "Ethical Phishing",
            description: "Are your staff prepared for cyber attacks that are designed to coax sensitive information from them? Let us find out.",
            url: "#",
          }}
        />
      </section>
      <section className=" -mt-24 relative z-10 ">
        <div className="bg-zinc-50 p-12 mx-24 z-30">
          <h2 className="flex text-4xl text-slate-950 justify-center mb-16">Why use our ethical phishing services?</h2>
          <div className="flex justify-center space-x-28 mb-16">
            <div>
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 ml-16 shadow-xl hover:bg-amber-300 hover:text-white"><GoCircleSlash /></div>
              <p className="text-center text-xl text-slate-950">To test your organisation’s<br /> defences.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 ml-16 shadow-xl hover:bg-amber-300 hover:text-white"><BsCloudDownload /></div>
              <p className="text-center text-lg text-slate-950">To identify potential data leaks.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 ml-16      shadow-xl hover:bg-amber-300 hover:text-white"><MdLocationSearching /></div>
              <p className="text-center text-lg text-slate-950">To highlight weaknesses in human <br /> behaviour.</p>
            </div>

          </div>
          <div>
            <p className="text-center text-base text-slate-950">Phishing is more prevalent than ever and becoming increasingly more sophisticated. We can help you minimise cyber attacks and identify cyber weaknesses in your organisation through the education and safe testing of your employees through our ethical phishing solutions.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[url('/images/Ethical-Phishing-2.jpg')] bg-cover h-[70vh] relative mb-96">
          <div>
            {/* <div className="h-full">
            <img className="h-full w-full object-cover object-center border-black border" src="/images/home-who-we-are.jpg" alt=""/>
          </div> */}
            <div className=" flex flex-row justify-end">
              <div className=" flex flex-col w-2/6 text-left mr-16 mt-20">
                <h2 className="text-4xl text-slate-950 mb-8">What is phishing?</h2>
                <div className="text-left">
                <p className="mb-4 text-slate-950">Phishing is basically ‘fishing’ for sensitive information. This could be anything from usernames, passwords, bank details, and other personal details. Cyber criminals use ‘bait’, such as a spoof email that looks official, to catch their victims.</p>
                <p className="mb-4 text-slate-950">Our Ethical Phishing services thoroughly assess the ability of your organisation’s personnel to identify and appropriately act to targeted email phishing attacks. By utilising the tactics, techniques and procedures used by genuine attackers, our range of phishing services can be run as stand-alone exercises, or in conjunction with each other over a period of time, as part of a tailored campaign.</p>
                <p className="mb-4 text-slate-950">We can even bring your cybersecurity awareness training for employees to life by conducting the ethical phishing service and using the results to tailor your staff’s training programme. This way, their training is conducted with real-world examples that involve them, making the lesson much more memorable.</p>
                <p className="mb-4 text-slate-950 font-extrabold">Did you know that an email that seems trustworthy could be a phishing attempt designed to steal information? We can help you identify them.</p>
                </div>
                <button className="bg-slate-900 text-white py-4 px-8 flex items-end justify-end w-2/5 "><a href="">Find out more</a></button>

              </div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h2 className="text-5xl text-slate-950 mb-12 text-center">Ethical phishing services we offer</h2>
            <p className="text-center w-2/4 ml-80 leading-7 text-slate-700">Every phishing campaign that we conduct for you concludes with a detailed report of your employee’s susceptibility to certain attacks, complete with actionable recommendations to further improve their abilities and knowledge.</p>
          </div>
          <div className="flex m-16 gap-8 ">
            <div className="">
              <div className="flex space-x-8 bg-zinc-50 py-12 px-6 hover:bg-sky-950 hover:text-amber-300 mb-6">
                <div className="text-5xl"><HiOutlineLockOpen /></div>
                <div className="">
                  <h4 className="font-bold text-lg mb-4 text-left">Credential harvesting and pharming</h4>
                  <p className="text-slate-700 hover:text-white">We will coax your organisation’s employees into disclosing their credentials. This service is ideal for assessing your employee’s awareness of phishing email attacks. Furthermore, all credentials obtained can then be reviewed to ensure they adhere to an adequate password policy</p>
                </div>
              </div>
              <div className="flex space-x-8 bg-zinc-50 py-12 px-6 hover:bg-sky-950 hover:text-amber-300 ">
                <div className="text-5xl"><MdLocationSearching /></div>
                <div>
                  <h4 className=" font-bold text-lg text-left mb-4">Whaling</h4>
                  <p className="text-slate-700 hover:text-white">Akin to Spear Phishing, the target(s) will be at the senior executive level within your organisation. Again, the aim of this test is to gauge the susceptibility of the target(s) to reveal confidential information.</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-8 bg-zinc-50 py-12 px-6 hover:bg-sky-950 hover:text-amber-300 mt-24 mb-44">
              <div className="text-5xl"><SiCircle /></div>
              <div>
                  <h4 className="font-bold text-lg text-left mb-4">Spear phishing</h4>
                  <p className="text-slate-700 hover:text-white">This uses phishing scenarios previously mentioned but the attack is directed at a specific target group of individuals (e.g. your finance department) using information specific to the target(s). This test allows you to gauge the likelihood of the targets revealing confidential information.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[url('/images/bg-images.jpeg')]  bg-cover h-[60vh]">
          <div className="flex m-12 justify-evenly ">
            <div className="w-3/6 ml-40 bg-zinc-50 px-8 py-4 shadow-2xl shadow-sky-150 mt-16">
              <p className="text-2xl leading-normal text-sky-950">"My job is to ensure that our business is protected against cyber security attacks. I need a company that can hunt for and eradicate threats."</p>
              <p className="flex justify-end mt-8 ext-sky-950">CISO</p>
            </div>
            <div className="ml-32 mt-16">
              <p className="w-7/12 text-2xl text-center font-semibold text-sky-950 mb-8">24/7 ongoing monitoring to hunt for and eradicate threats</p>
              <div>
              <p className="bg-amber-300 d-inline-block text-white w-1/3 text-center p-3 ml-12 font-medium text-xl"><a href="">Find out more</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Partner />
      </section>
    </section>
  )
}

export default EthicalPhishing