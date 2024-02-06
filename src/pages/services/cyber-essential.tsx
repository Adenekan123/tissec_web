import { SectionPoster, StaticBanner } from "../../components";
import { CiCalendarDate } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { PiHouseLineThin } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import { PiGlobeStandThin } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";

const CyberEssential = () => {
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
                <div className="bg-zinc-50 text-center md:mx-24 text-gray-800 md:p-8 p-2">
                    <h2 className="md:text-4xl md:m-16 text-2xl m-10">Why us for your Cyber Essentials certification?</h2>
                    <div className="md:flex md:m-24 md:basis-9/12 m-7">
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><CiCalendarDate /></button>
                            <p className="md:text-lg text-base">We have over 30 years' of experience in cyber security.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><CiCircleCheck /></button>
                            <p className="md:text-lg text-base">Our assessors are senior penetration testers and industry experts.</p>
                        </div>
                        <div className="flex  flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><PiHouseLineThin /></button>
                            <p className="md:text-lg text-base">We help you build a strong foundation for your company’s cybersecurity.</p>
                        </div>
                    </div>
                    <p>We are an approved certified body for Cyber Essentials, working under the IASME consortium.</p>
                </div>
            </section>
            <SectionPoster image={'/images/cyber-essentials-2.jpg'}>
                <div className="flex flex-col md:basis-2/6 text-left md:m-24 mx-2 my-24">
                    <h6 className="md:text-5xl text-sky-950 md:pb-6 text-3xl ">Discover your company’s cybersecurity weakness</h6>
                    <div className="pb-8 md:text-lg text-base text-sky-950">
                        <p className="py-6">Cyber Essentials is a Government-backed scheme that encourages organisations to adopt best practices in information security strategy. This, in turn,
                            makes the UK a safer place to do business. In fact, this certification is fast becoming one of the requirements for companies in both B2B and B2C sales.
                        </p>
                        <p className="space-y-24">With our Cyber Essentials / Cyber Essentials Plus services, you get a cost-effective way to audit your internal IT security. Additionally, you also acquire
                            a strong foundation from which to mitigate the risk from widespread, but unskilled, cyber attacks.
                        </p>
                        <p className="font-bold text-sky-950 mt-10">Did you know you have 90 days after passing Cyber Essentials to apply for Cyber Essentials Plus? Would you like to book a pre-assessment?</p>
                    </div>
                    <div className="mt-8"><button className="bg-sky-950 md:px-7 md:py-4 text-white hover:bg-amber-400 md:text-base px-8 py-2 text-sm">Get in touch</button></div>
                </div>
            </SectionPoster>
            <section>
                <div className="md:bg-white">
                    <h2 className="md:text-5xl md:px-20 md:py-16 pb-10 text-center text-sky-950 text-lg">Why do you need Cyber Essentials?</h2>
                    <div className="md:mx-20">
                        <div className="md:grid grid-cols-2 md:space-x-10 md:pb-0 pb-16 text-sky-950 m-4 space-y-2">
                            <div className="md:space-y-6 ">
                                <div className="flex p-6 md:px-9 hover:bg-sky-950 shadow-lg group">
                                    <div className="md:text-4xl text-2xl md:pr-8 group-hover:text-amber-400"><TfiSearch /></div>
                                    <div>
                                        <h5 className="text-xl font-semibold group-hover:text-amber-400">Discover your cybersecurity weaknesses</h5>
                                        <p className="text-base py-4 group-hover:text-white">Self-assess your organisation’s security against our assessor questionnaire annually,
                                            making your network and systems inherently more secure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:space-y-6 ">
                                <div className="flex p-6 md:px-9 hover:bg-sky-950 shadow-lg group">
                                    <div className="md:text-4xl text-2xl md:pr-8 group-hover:text-amber-400"><PiGlobeStandThin /></div>
                                    <div>
                                        <h5 className="text-xl font-semibold group-hover:text-amber-400">Implement common sense defence</h5>
                                        <p className="py-4 group-hover:text-white text-base">Learn how to defend your organisation against widespread, but unskilled and untargeted, cyber attacks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-72 pb-36">
                            <div className="flex p-6 md:px-9 hover:bg-sky-950 shadow-lg group">
                                <div className="md:text-4xl text-2xl md:pr-8 group-hover:text-amber-400"><GiTrophyCup /></div>
                                <div>
                                    <h5 className="text-xl font-semibold group-hover:text-amber-400">Be recognised for taking cybersecurity seriously</h5>
                                    <p className="py-4 group-hover:text-white text-base">Proudly display your security awareness and show your customers, partners, and investors how seriously you take cybersecurity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-[url('/images/mdr-grey-bg-yellow.jpg')] bg-cover bg-top w-full relative">
                    <h2 className="text-4xl text-center my-16">Build your own Cyber Essentials package</h2>
                    <div className="flex item-center align my-8 space-x-12 ">
                        <div className="bg-sky-950 ml-40 w-96 text-white">
                            <li>How long has it been since you audited your internal IT security policies?</li>
                            <li>How frequently is your endpoint security updated?</li>
                            <li>When was the last time your firewall configuration was updated?</li>
                            <li>How robust is your password policy?</li>
                        </div>
                        <div>
                            <p className="text-lg">Cyber Essentials is a simple and straightforward process which enables you to annually self-assess your organisation’s
                                security against our assessor questionnaire, which is then verified by our accrediting body, IASME consortium.
                            </p>
                            <p className="text-lg py-6">
                                Very quickly, this level of assessment will identify any issues and get you and your organisation thinking about cybersecurity.
                            </p>
                            <p className="text-lg">
                                Our assessors are all senior penetration testers with years of experience. With their help, you can build a strong
                                foundation to defend your organisation against everyday cyber attacks.
                            </p>
                            <p className="text-lg py-6 font-normal">
                                You can also build your own package by selecting the services you want and paying just for those.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default CyberEssential;