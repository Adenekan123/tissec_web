import { StaticBanner } from "../../components"
import { CiLock } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdLocationSearching } from "react-icons/md";
import Partner from "../home/components/partner";





const RansomWareSimulation = () => {
  return (
    <section>
      <section>
        <section >
          <StaticBanner
            content={{
              heading: "Ransomware Simulation",
              description: "How will your incident response plan fare against a ransomware attack? Find out.",
              url: "#",
            }}
          />
        </section>
      </section>

      <section className=" -mt-24 relative z-10 ">
        <div className="bg-zinc-50 p-12 mx-24 z-30">
          <h2 className="flex text-4xl text-slate-950 justify-center mb-16">Why you need a ransomware simulation service</h2>
          <div className="flex justify-center space-x-28 mb-16">
            <div>
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 ml-16 shadow-xl hover:bg-amber-300 hover:text-white"><CiLock /></div>
              <p className="text-center text-xl text-slate-950">Test your incident response<br /> procedure</p>
            </div>
            <div>
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 ml-16 shadow-xl hover:bg-amber-300 hover:text-white"><IoIosCheckmarkCircleOutline /></div>
              <p className="text-center text-lg text-slate-950">Provide assurance to stakeholders</p>
            </div>
            <div>
              <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 ml-16      shadow-xl hover:bg-amber-300 hover:text-white"><MdLocationSearching /></div>
              <p className="text-center text-lg text-slate-950">Receive essential guidance to address<br /> risks</p>
            </div>

          </div>
          <div>
            <p className="text-center text-base text-slate-950">Test your current ransomware response plan and prioritise and address risks in this tabletop ransomware simulation.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url('/images/Ethical-Phishing-2.jpg')] bg-cover h-[70vh] relative mb-96">
          <div className=" flex flex-row justify-end">
            <div className=" flex flex-col w-2/6 text-left mr-24 mt-20">
              <h2 className="text-4xl text-slate-950 mb-8">You’ve got your incident response plan in place but do you know how well it would perform in a real-world ransomware scenario?</h2>
              <div className="text-left">
                <p className="mb-4 text-slate-950">Discover how a tabletop ransomware simulation exercise can test your incident response plan and highlight areas of weaknesses in your organisation.</p>

                <p className="mb-4 text-slate-950">This tailored service offers a hands-on experience led by our consultants that mirrors a real-world ransomware attack.</p>

                <p className="mb-4 text-slate-950">You’ll be guided through a series of interactive exercises, scenarios and roundtable discussions with our consultant working with you as they unfold to steer discussions. This engaging approach allows your team to evaluate your breach plan and receive vital guidance to prioritise and address risk.</p>

                <p className="mb-4 text-slate-950">Prepare your team for any encounter with confidence, providing stakeholders with the assurance that protection against threats is your utmost priority.</p>
              </div>
              <button className="bg-slate-900 text-white py-4 px-8 flex items-end justify-end w-2/5 "><a href="">Find out more</a></button>

            </div>

          </div>
        </div>
      </section >
      <section>
        <div className="basis-7/12 md:basis-7/12 py-10 m-28">
          <h2 className="text-6xl mb-24 text-center text-slate-900">Request a quote</h2>
          <div className="flex flex-col gap-y-12">
            <div className="flex gap-x-3">
              <input
                type="text"
                placeholder="name"
                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 basis-6/12"
              />
              <input
                type="text"
                placeholder="Surname"
                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 basis-6/12"
              />
            </div>
            <div className="flex gap-x-3">
              <input
                type="email"
                placeholder="Email"
                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 basis-6/12"
              />
              <input
                type="text"
                placeholder="Contact Tel"
                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 basis-6/12"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="I would like to discuss..."
                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 w-full"
              />
            </div>
            <div>
              <textarea
                name=""
                className="text-slate-300 active:border-amber-400 py-3 px-3 w-full border border-slate-300"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <input
                type="text"
                placeholder="Where did you hear about us?"
                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 w-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-x-3 mb-3">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">I agree to the privacy policy.</label>
              </div>
              <div className="flex items-center gap-x-3">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                  I agree to receive marketing emails from Falanx and understand
                  that I can unsubscribe at any time..
                </label>
              </div>
            </div>
            <div className="flex border border-slate-300 w-1/4 space p-2 bg-slate-100">
              <div className=" mt-5">
                <input type="checkbox" name="" id=""/>
                <label htmlFor="" className=" ml-3">I'm not a robot</label>
              </div>
              <div className=" ml-14">
                <img className=" w-12" src="/images/RecaptchaLogo.svg.png" alt="reCAPTCHA logo" />
                <p className="text-xs text-slate-400">Privacy-Terms</p>
              </div>

            </div>

            <div>
              <button className="px-12 py-3 bg-blue-950 text-white rounded-md font-semibold">
                Sumbit
              </button>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url('/images/bg-images.jpeg')]  bg-cover h-[60vh]">
          <div className="flex m-12 justify-evenly ">
            <div className="w-3/6 ml-40 bg-zinc-50 px-8 py-4 shadow-2xl shadow-sky-150 mt-16">
              <p className="text-2xl leading-normal text-sky-950">"I need a suplier that understands the importance of implementing and maintaining information Security best practices critical to our ongoing success and reputation"</p>
              <p className="flex justify-end mt-8 text-sky-950">Managnig Director</p>
            </div>
            <div className="ml-32 mt-16">
              <p className="w-7/12 text-2xl text-center font-semibold text-sky-950 mb-8">Get real-time ongoing cyber detection & response</p>
              <div>
              <p className="bg-amber-300  hover:bg-sky-950 d-inline-block text-white w-2/5 text-center p-3 ml-12 font-medium text-xl"><a href="">Find out more</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Partner />
      </section>

    </section >
  )
}

export default RansomWareSimulation