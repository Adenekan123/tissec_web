import { StaticBanner } from "../../components"
import { HiOutlineLockOpen } from "react-icons/hi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TfiAlarmClock } from "react-icons/tfi";
import { SiCircle } from "react-icons/si";
import { CgArrowLongRight } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import { BsFlag } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import { CiLock } from "react-icons/ci";
import Partner from "../home/components/partner";





const ManagedDetectionResponse = () => {
    return (
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

            <section className="-mt-24 relative z-10 ">
                {/* ml-16 */}
                <div className="bg-zinc-50 md:px-12 px-16 pb-4 md:mx-24 z-30">
                    <h2 className="flex md:text-4xl text-3xl text-blue-950 md:justify-center text-center mb-16 pt-12">Why do I need a managed detection and response service?</h2>
                    <div className="md:grid md:grid-cols-4 justify-center md:space-x-12 mb-16">
                        <div className="md:mb-0 mb-12">
                            <div className="flex justify-center items-center mb-4 text-5xl bg-zinc-100 w-28 py-7  shadow-xl hover:bg-amber-300 hover:text-white ml-16"><HiOutlineLockOpen /></div>
                            <p className="text-center text-xl text-blue-950 mb-8">Ransomware protection</p>
                            <p className="text-blue-950 md:px-4 text-center">We detect and respond to threats across your entire IT estate and spot signs of intrusion early.</p>
                        </div>
                        <div className="md:mb-0 mb-12">
                            <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7  shadow-xl hover:bg-amber-300 hover:text-white ml-12"><RxCounterClockwiseClock /></div>
                            <p className="text-center text-lg text-blue-950 mb-8">Out of hours cover</p>
                            <p className="text-blue-950 text-center">Our team are an extension of yours. We’re here, around the clock, watching for anomalies on your network</p>
                        </div>
                        <div className="md:mb-0 mb-12">
                            <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7   shadow-xl hover:bg-amber-300 hover:text-white ml-12"><TfiAlarmClock /></div>
                            <p className="text-center text-lg text-blue-950 mb-8">Fast response</p>
                            <p className="text-blue-950 text-center">Quickly detect and respond to suspicious activity in real-time</p>
                        </div>
                        <div className="md:mb-0 mb-12">
                            <div className="flex justify-center mb-4 text-5xl bg-zinc-100 w-28 py-7 shadow-xl hover:bg-amber-300 hover:text-white ml-16"><SiCircle /></div>
                            <p className="text-center text-lg text-blue-950 mb-8">Evolving threat landscape</p>
                            <p className="text-blue-950  text-center">The tools and know-how to maximise breech detection</p>
                        </div>

                    </div>

                </div>
                <div className="bg-zinc-50 md:mx-24 z-30 md:px-12 pb-12">
                    <p className="text-center text-base text-blue-950 px-4">Test your current ransomware response plan and prioritise and address risks in this tabletop ransomware simulation.</p>
                </div>
            </section>

            <section>
                <div className="md:bg-[url('/images/raise_the_bar.jpg')]  bg-cover relative md:mb-20 mb-8">
                    <div className=" flex flex-row md:justify-end">
                        <div className=" flex flex-col md:w-2/6 text-left md:mr-4 md:my-24 my-8 px-6">
                            <h2 className="md:text-5xl text-3xl text-blue-950 mb-8 leading-tight">Day or night, weekends and public holidays we alert you to suspicious activity across your IT estate and can respond to threats on your behalf</h2>
                            <div className="text-left">
                                <p className="mb-6 text-blue-950 leading-7">Our fully-managed detection and response service means you don’t need a team of in-house security experts to trawl through security alerts or race to respond to suspicious activity at 3.a.m.</p>

                                <p className="mb-6 text-blue-950 leading-7">From our Security Operations Centre (SOC) in Reading our security-cleared analysts watch for anomalies across your entire IT estate – including endpoints, firewalls & cloud apps – around the clock 365 days a year. And when necessary, we can take action on your behalf.</p>

                                <p className="mb-6 text-blue-950 leading-7">Wherever you are on your MDR journey from EDR to fully managed Extended Detection and Response (XDR) we can help keep your business secure.</p>

                                <p className="mb-6 text-blue-950 leading-7 font-semibold">Looking for around the clock protection from cyber threats including ransomware? </p>
                            </div>
                            <button className="bg-slate-900 text-white py-4 px-6 flex justify-center md:w-2/5 w-3/6 "><a href="">Find out more</a></button>


                        </div>

                    </div>
                </div>
            </section >
            <section>
                <div className="text-blue-950 mb-24">
                    <h2 className="md:text-4xl text-3xl text-center md:mb-20 mb-24 md:p-0 p-4">Why Choose Falanx Cyber MDR? </h2>
                    <div className="md:grid md:grid-cols-2 gap-x-8 gap-y-8 md:mx-28 mx-4">
                        <div className=" bg-white flex shadow-2xl shadow-sky-150 px-6 py-12 hover:bg-sky-950 hover:text-amber-300 group md:mb-0 mb-8">
                            <div className="text-5xl mr-8"><CgArrowLongRight /></div>
                            <div>
                                <p className=" text-2xl mb-4">Flexible approach</p>
                                <p className="group-hover:text-white">From EDR to fully-managed XDR we have flexible offerings to suit your level of risk, cyber maturity and affordability.</p>
                            </div>
                        </div>
                        <div className=" bg-white flex shadow-2xl shadow-sky-150 px-6 py-12 hover:bg-sky-950 hover:text-amber-300 group md:mb-0 mb-8">
                            <div className="text-5xl mr-8"><GoSearch /></div>
                            <div>
                                <p className=" text-2xl mb-4">HI and AI</p>
                                <p className="group-hover:text-white">We don’t just rely on AI. Our team of analysts detect and respond to threats around the clock</p>
                            </div>
                        </div>
                        <div className=" bg-white flex shadow-2xl shadow-sky-150 px-6 py-12 hover:bg-sky-950 hover:text-amber-300 group md:mb-0 mb-8">
                            <div className="text-5xl mr-8"><BsFlag /></div>
                            <div>
                                <p className=" text-2xl mb-4">UK-based SOC</p>
                                <p className="group-hover:text-white">We have a physical SOC based in our Reading HQ.</p>
                            </div>
                        </div>
                        <div className=" bg-white flex shadow-2xl shadow-sky-150 px-6 py-12 hover:bg-sky-950 hover:text-amber-300 group md:mb-0 mb-8">
                            <div className="text-5xl mr-8"><SlDiamond /></div>
                            <div>
                                <p className=" text-2xl mb-4">Triple ISO-certified</p>
                                <p className="group-hover:text-white">We are the first SOC in the UK to be triple certified.</p>
                            </div>
                        </div>
                        <div className=" bg-white flex shadow-2xl shadow-sky-150 px-6 py-12 hover:bg-sky-950 hover:text-amber-300 group md:mb-0 mb-8">
                            <div className="text-5xl mr-8"><CiLock /></div>
                            <div>
                                <p className=" text-2xl mb-4">Security-cleared analysts</p>
                                <p className="group-hover:text-white">ALL our analysts are highly trained and are on hand to speak directly to clients. We don’t operate a tiered support system.</p>
                            </div>
                        </div>
                        <div className=" bg-white flex shadow-2xl shadow-sky-150 px-6 py-12 hover:bg-sky-950 hover:text-amber-300 group md:mb-0 mb-8">
                            <div className="text-5xl mr-8"><SlDiamond /></div>
                            <div>
                                <p className=" text-2xl mb-4">Rapid deployment</p>
                                <p className="group-hover:text-white">FromOur onboarding team can work with you and onboard at your pace.</p>
                            </div>
                        </div>
                        <div className=" bg-white flex shadow-2xl shadow-sky-150 px-6 py-12 hover:bg-sky-950 hover:text-amber-300 group md:mb-0 mb-8">
                            <div className="text-5xl mr-8"><GoSearch /></div>
                            <div>
                                <p className=" text-2xl mb-4">Detection in depth</p>
                                <p className="group-hover:text-white">Our service has been built based on our "Detection in Depth" approach to maximise breach detection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className="flex md:pl-28 md:pr-20 bg-slate-950 text-white py-8">
                        <div className="md:px-0 md:py-0 px-4 py-8">
                            <h2 className="md:text-5xl text-4xl mb-8">Works with your environment</h2>
                            <p className="mb-2"><span className="font-bold">Don’t have a SIEM tool?</span>No worries.</p>
                            <p className="mb-2"><span className="font-bold">Already using Microsoft Sentinel with an E54 licence?</span> No problem.</p>
                            <p className="mb-2"> We work around you and can integrate with your current Microsoft Sentinel environment or we provide a SIEM from Elastic as part of our service. </p>
                            <p className="mb-10">No specialist IT resources are required, our MDR is fully managed, end-to-end.</p>
                            <button className="bg-amber-500  text-white py-4 px-6">Request more information</button>
                        </div>
                        <div className="">
                            <img src="/images/Falanx-Image2.jpg" alt="" />

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div className="flex md:p-28 px-4 bg-[url('/images/mdr-grey-bg-yellow.jpg')] bg-cover mb-8 ">
                        <div className="">
                            <img src="/images/Inspecs-select-Falanx-Cyber.png" alt="" />

                        </div>
                        <div className="md:ml-12 md:mt-0 mt-16">
                            <h2 className="md:text-5xl text-3xl mb-8 leading-tight">How eyewear manufacturer Inspecs has 24/7 eyes on glass</h2>
                            <p className="mb-8 leading-loose md:mr-12">Read how Falanx Cyber enabled Inspecs to ‘free up’ their IT team to allow them to focus on strategy and delivery – while ensuring cyber security is always placed first.</p>

                            <button className="bg-slate-900  text-white py-4 px-8 md:mb-0 mb-8">Read the case study</button>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="basis-7/12 md:basis-7/12  md:mx-28 mx-4">
                    <h2 className="md:text-5xl text-4xl md:mb-16 mb-8 text-center text-slate-900">Request a Quote</h2>
                    <div className="flex flex-col gap-y-12">
                        <div className="md:flex gap-x-3 ">
                            <input
                                type="text"
                                placeholder="name"
                                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 md:basis-6/12 w-full md:mb-0 mb-12"
                            />
                            <input
                                type="text"
                                placeholder="Surname"
                                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 md:basis-6/12 w-full"
                            />
                        </div>
                        <div className="md:flex gap-x-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 md:basis-6/12 w-full md:mb-0 mb-12"
                            />
                            <input
                                type="text"
                                placeholder="Contact Tel"
                                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 md:basis-6/12 w-full"
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
                        <div className="flex border border-slate-300 md:w-1/4 w-full p-2  bg-slate-100">
                            <div className=" mt-5">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className=" ml-3">I'm not a robot</label>
                            </div>
                            <div className=" md:ml-14 ml-24">
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
                <Partner />
            </section>

        </section>
    )

}
export default ManagedDetectionResponse