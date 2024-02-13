import { SectionPoster, StaticBanner } from "../../components";
import { CiStopwatch } from "react-icons/ci";
import { PiMicrophoneStageThin } from "react-icons/pi";
import { PiWarningCircleThin } from "react-icons/pi";
import Partner from "../home/components/partner";
const RetainedTesting = () => {
    return (
        <section>
            <section>
                <StaticBanner
                    content={{
                        heading: "Penetration Testing",
                        description:
                            "How secure are your systems and networks against targeted cyber attacks? We can help you find out.",
                        url: "#",
                    }}
                />
            </section>
            <section className="-mt-36 relative z-10">
                <div className="bg-zinc-50 text-center md:mx-24 md:pb-24 text-gray-800 md:px-16 p-2">
                    <h2 className="md:text-3xl md:m-16 text-2xl m-10">Why do you need our retained incident response service?</h2>
                    <div className="md:flex md:m-24 md:basis-9/12 m-7">
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><PiWarningCircleThin /></button>
                            <p className="md:text-lg text-base">Fast incident response to minimise the impact of a security breach.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><PiMicrophoneStageThin /></button>
                            <p className="md:text-lg text-base">Mitigate economic, public relations, and legal or regulatory risks.</p>
                        </div>
                        <div className="flex  flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><CiStopwatch /></button>
                            <p className="md:text-lg text-base">Get back up and running after the incident faster.</p>
                        </div>
                    </div>
                </div>
            </section>
            <SectionPoster image={'/images/clockbg.png'}>
                <div className="md:basis-4/12 text-left md:mr-24 mt-28">
                    <h2 className="md:text-4xl text-sky-950 pb-6 text-3xl">Here to help when you need it the most 24x7x365</h2>
                    <div className="pb-8 md:text-base text-sm text-sky-950">
                        <p className="py-6">Suffering a cybersecurity breach is inevitable in today’s landscape, it can be a nightmare to devise a containment plan, fix the problem, recover systems and maintain business continuity. Then, there’s also the need to simultaneously limit damage through communication and reporting.</p>
                        <p className="space-y-24">In short, responding to a breach can be a daunting prospect.</p>
                        <p className="text-sky-950 py-6">This is where we can help. You can be one step ahead by putting vital help in place now so you can manage and respond to high-consequence incidents when you need it most. Put our experts on standby to do the work for you. Should you need to simply contact our designated Incident Response contact number and they will be ready to determine the best recovery strategy
                            and support you with communication and reporting to minimise the impact a breach has on your business.
                        </p>
                    </div>
                </div>
            </SectionPoster>
            <section>
                <div className="bg-sky-950 py-14 text-white">
                    <div className="md:flex md:mt-8 md:mx-24 md:space-x-7">
                        <div className="basis-1/2 p-3">
                            <details className="border border-white mb-4 hover:border-amber-400 text-base">
                                <summary className="p-3 hover:text-amber-400">What help will I received?</summary>
                                <p className="pr-10 m-4">Falanx Cyber will produce a detailed report that will provide insight into the attack.</p>
                                <div className="p-3">
                                    <li>Initial findings</li>
                                    <li>Attack narrative</li>
                                    <li>Containment strategy</li>
                                    <li>Detailed findings</li>
                                    <li>Attack Timeline</li>
                                    <li>Analysis of identified threats</li>
                                    <li>Incident specific recommendations</li>
                                    <li> General recommendations</li>
                                </div>
                            </details>

                            <details className="border border-white mb-4 hover:border-amber-400 text-base">
                                <summary className="p-3 hover:text-amber-400">How quickly will you be available?</summary>
                                <p className="pr-10 m-4">We have a 2 hour SLA for remote triage and support following client notification. Pre-purchased hours are set
                                    against strict SLAs to ensure investigations can begin immediately.</p>
                            </details>

                            <details className="border border-white mb-4 hover:border-amber-400 text-base">
                                <summary className="p-3 hover:text-amber-400">I am not a customer - can you help?</summary>
                                <p className="pr-10 m-4">Falanx Cyber will always prioritise incident response activities for retained incident response customers. Due to the time sensitive nature of incident
                                    response activities, we will do our best to assist new customers as soon as possible.</p>
                            </details>
                        </div>
                        <div className="basis-1/2 p-3">
                            <details className="border border-white mb-4 hover:border-amber-400 text-base">
                                <summary className="p-3 hover:text-amber-400">What happens after the problem has been resolved?</summary>
                                <p className="pr-10 m-4">We’ll support your business in preventing similar attacks from occurring, firstly taking a preventative approach with penetration testing and security
                                    assessments and secondly via our protective managed detection and response (MDR) service.</p>
                            </details>

                            <details className="border border-white mb-4 hover:border-amber-400 text-base">
                                <summary className="p-3 hover:text-amber-400">Can you advise on a recovery strategy</summary>
                                <p className="pr-10 m-4">Falanx Cyber will provide advice and support in preventing incidents from occurring in the future, including
                                    how to optimally respond should an event occur again.</p>
                            </details>
                            <details className="border border-white mb-4 hover:border-amber-400 text-base">
                                <summary className="p-3 hover:text-amber-400">How will you ensure data integrity</summary>
                                <p className="pr-10 m-4">Our service utilises agent-based remote data collection methods that are forensically sound to ensure data integrity</p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="md:basis-7/12 md:mx-28 mb-28">
                    <h2 className="md:text-5xl md:mb-16 m-12 text-2xl text-center text-slate-950">Contact Us</h2>
                    <div className="md:flex md:flex-col gap-y-12 mx-4">
                        <div className="md:flex gap-x-4">
                            <input type="text"
                                placeholder="Name"
                                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 md:basis-6/12 w-full md:mb-0 mb-6" />

                            <input type="text"
                                placeholder="Surname"
                                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 md:basis-6/12 w-full md:mb-0 mb-6" />
                        </div>

                        <div className="md:flex gap-x-4 ">
                            <input type="text"
                                placeholder="Email"
                                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 md:basis-6/12 w-full md:mb-0 mb-6" />

                            <input type="text"
                                placeholder="Contact Tel"
                                className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 md:basis-6/12 w-full md:mb-0 mb-6" />
                        </div>
                        <div className="md:mb-0 mb-6">
                            <select className="active:border-amber-400 py-3 px-3 border border-slate-300 w-full text-slate-300">
                                <option>I would like to discuss..</option>
                                <option >Manage Detection & Response</option>
                                <option>Advisory Service</option>
                                <option>Penetration Testing</option>
                                <option>Cyber awareness and education</option>
                                <option>All Service</option>
                                <option>Partnering with Falanx</option>
                                <option>All Service</option>
                            </select>
                        </div>
                        <div className="md:mb-0 mb-6">
                            <textarea className="active:border-amber-400 py-3 px-3 border border-slate-300 w-full text-slate-300" placeholder="Message" />
                        </div>
                        <div className="md:mb-0 mb-4">
                            <select className="active:border-amber-400 py-3 px-3 border border-slate-300 w-full text-slate-300">
                                <option>Where do you hear about us?</option>
                                <option >Search Engine(Google,Yahoo)</option>
                                <option>Social Media(Twitter,Linkedin,Facebook)</option>
                                <option>Tv/Radio</option>
                                <option>Referral</option>
                                <option>Events</option>
                                <option>Word of mouth</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div>
                            <div className="md:flex items-center md:gap-x-4 mb-4 md:space-x-0 space-x-3">
                                <input type="checkbox" />
                                <label className="text-base text-gray-800">I agree to the privacy policy</label>
                            </div>
                            <div className="md:flex items-center md:gap-x-4  md:space-x-0 space-x-3 mb-4">
                                <input type="checkbox" />
                                <label className="text-base text-gray-800">I agree to receive marketing emails from Falanx and understand that I can unsubscribe at any time.</label>
                            </div>
                            <div><button className="bg-sky-950 px-9 py-3 mt-5 text-white text-base">Submit</button></div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="-mt-20">
                <Partner />
            </section>
        </section>
    )
}

export default RetainedTesting;