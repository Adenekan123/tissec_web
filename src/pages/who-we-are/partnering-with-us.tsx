import { StaticBanner } from "../../components"
import { BsGraphUpArrow } from "react-icons/bs";
import { ImStarEmpty } from "react-icons/im";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FiAward } from "react-icons/fi";
import { MdLocationSearching } from "react-icons/md";
import Partner from "../home/components/partner";






const PartneringWithUs = () => {
    return (
        <section>
            <section>
                <section >
                    <StaticBanner
                        content={{
                            heading: "Partnering with Falanx Cyber",
                            description: "Grow your sales pipeline and keep your clients cyber-safe",
                            url: "#",
                        }}

                    />
                </section>
            </section>

            <section className="-mt-24 relative z-10 hidden md:block ">
                {/* ml-16 */}
                <div className="bg-zinc-50 md:px-12 px-16 pb-4 md:mx-24 z-30 text-blue-950">
                    <h2 className="flex md:text-4xl text-3xl  md:justify-center text-center mb-8 pt-12">Enabling Business Growth with Falanx Cyber</h2>
                    <p className="text-center leading-loose">Irrespective of whether you’re a leading solution provider, system integrator, MSSP or corporate reseller, by partnering with Falanx Cyber you access a portfolio of cyber security services that will secure your clients and grow your business.</p>

                    <div className="md:grid md:grid-cols-2  gap-x-8 gap-y-8 mb-16 mt-16">
                        <div className="flex">
                            <div className="text-5xl"><BsGraphUpArrow /></div>
                            <div className="ml-8">
                                <p className="text-2xl mb-4">Increase Revenue</p>
                                <p className=" text-base">Generate new opportunities to rapidly grow your business and increase profitability.</p>
                            </div>

                        </div>
                        <div className="flex">
                            <div className="text-5xl"><ImStarEmpty /></div>
                            <div className="ml-8">
                                <p className="text-2xl mb-4">Work alongside a trusted partner</p>
                                <p className="text-base">Collaborating with us means you get the benefit of our reputation in the industry as well as our range of cyber security solutions.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-5xl"><IoIosCheckmarkCircleOutline /></div>
                            <div className="ml-8">
                                <p className="text-2xl mb-4">Remain Competitive</p>
                                <p className="text-base">Become your clients’ trusted advisor and retain your long-term client relationships with effective cyber security solutions.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-5xl"><FiAward /></div>
                            <div className="ml-8">
                                <p className="text-2xl mb-4">Win new business</p>
                                <p className="text-base">We’re not just focussed on great cyber security services – we’re also committed to developing a flexible, adaptable and predictable pipeline with you.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-5xl"><MdLocationSearching /></div>
                            <div className="ml-8">
                                <p className="text-2xl mb-4">Differentiate Yourself</p>
                                <p className=" text-base">Our mantra is to provide enterprise-class cyber solutions to all, big and small. As such, we offer a range of services on a variety of platforms to suit all organisations and budgets.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section>
                <div>
                    <div className="md:flex my-8 md:px-28 px-4 py-12 bg-[url('/images/mdr-grey-bg-yellow.jpg')] md:bg-cover  bg-left-top mb-8 ">
                        <div className="md:w-8/12 w-9/12">
                            <img src="/images/PBS-case-study.png" alt="" />

                        </div>
                        <div className=" md:mt-0 mt-16">
                            <h2 className="md:text-4xl text-3xl mb-8 leading-tight text-[#122135]">How MSP, Preferred Business Systems Inc, reduced its client’s cyber risk to virtually zero</h2>

                            <p className="mb-8 leading-loose md:mr-12 text-base text-[#122135]">How? By incorporating Falanx Cyber’s <span className="text-[#74c4ec]">SOC services</span> into its Cyber Riot tech stack.</p>

                            <button className="bg-[#122135]  text-white py-4 px-8 md:mb-0 mb-8">Read the success story</button>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="basis-7/12 md:basis-7/12  md:mx-28 mx-4 my-20">
                    <h2 className="md:text-5xl text-4xl  text-center text-[#122135]">Interested in becoming a partner?</h2>
                    <p className="text-center md:mb-16 mb-8 mt-2 text-[#122135]">Fill out the form for more information about becoming a partner</p>
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
                            <div className="flex gap-x-3">
                                <div><input type="checkbox" name="" id="" /></div>
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
                            <button className="px-12 py-3 bg-[#122135] text-white rounded-md font-semibold">
                                Sumbit
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="text-center bg-[#122135] md:px-24 px-8 py-16 text-white">
                    <h2 className="text-5xl leading-tight">Are you an N-able MSP partner? Find out more about our <span className="text-[#74c4ec] hover:text-amber-300">N-able Partner Programme</span></h2>
                </div>
            </section>

            <section>
                <Partner />
            </section>

        </section>
    )
}
export default PartneringWithUs