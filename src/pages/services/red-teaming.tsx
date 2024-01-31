import {SectionPoster, StaticBanner } from "../../components";
import { MdOutlineSearch } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { SlChart } from "react-icons/sl";
import { IoIosMailOpen } from "react-icons/io";
import { SlHome } from "react-icons/sl";
import { TbCloudSearch } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import Partner from "../home/components/partner";

const RedTeaming = () => {
    return (
        <section>
            <section>
                <StaticBanner
                    content={{
                        heading: "Red Teaming",
                        description:
                            "Is your organisation secure from real-world risks? Our Red Teaming service can help you find out.",
                        url: "#",
                    }}
                />
            </section>
            <section className="-mt-36 relative z-10">
                <div className="bg-zinc-50 text-center md:mx-24 md:pb-24 text-gray-800 md:px-16 p-2">
                    <h2 className="md:text-5xl md:m-16 text-2xl m-10">Why do you need Red Teaming security testing?</h2>
                    <div className="md:flex md:m-24 md:basis-9/12 m-7">
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><MdOutlineSearch /></button>
                            <p className="md:text-xl text-lg">Identifies weaknesses in your processes to prepare for a real-world attack.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><VscTools /></button>
                            <p className="md:text-xl text-lg">Improves your organisation’s defences and remain competitive.</p>
                        </div>
                        <div className="flex  flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><SlChart /></button>
                            <p className="md:text-xl text-lg">Enables you to make informed cybersecurity decisions for more effective outcomes.</p>
                        </div>
                    </div>
                    <p className="md:text-xl text-base">Red Teaming is a service designed to help you find out how secure your physical spaces are from real-world threats. The findings then give you information
                        on how you can prevent these attacks.
                    </p>
                </div>
            </section>
            <SectionPoster image={'/images/Red-Teaming.jpg'}>
                <div className="flex flex-col md:basis-2/6 text-left md:mr-16 mt-36">
                    <h6 className="md:text-6xl text-sky-950 pb-6 text-3xl">Identifying weaknesses and real-world risks</h6>
                    <div className="pb-8 md:text-xl text-base text-sky-950">
                        <p className="py-6">Our Red Teaming security testing is a full-scale simulated attack, virtual as well as physical, on your organisation. Our testing will not only give you a clearer picture of how well your systems and networks can prevent a hack, both through cyber and physical means, but also how quickly you can detect the hack and respond to it.</p>
                        <p className="space-y-24">The service includes a threat and risk analysis session to determine your most important assets, the most likely groups that would target them, and their methods and motivations.</p>
                        <p >We then devise tests for all scenarios, the results of which are provided to you in a report. This gives you a summary of the risks identified and key messages that you can use to develop a security-aware culture in your organisation.</p>
                        <p className="py-6">In essence, we help you identify weaknesses and real-world risks from attacks, and use the information to help you prevent them and drive a cultural change within your business.</p>
                        <p className="font-bold text-sky-950">Do you know if your organisation is safe from threats, including state-sponsored attacks, organised crime and hacktivist groups?</p>

                    </div>
                    <div><button className="bg-sky-950 px-8 py-5 text-white hover:bg-amber-400 font-medium">Contact us</button></div>
                </div>
            </SectionPoster>
            <section>
                <div className="md:bg-[url('/images/slash-background-for-box-buttons-2.jpg')] bg-cover bg-top w-full relative">
                    <h2 className="md:text-5xl md:px-24 md:py-36 pb-10 text-center text-sky-950 text-3xl">What we offer</h2>
                    <div className="md:mx-16 md:flex md:space-x-32 pb-16 text-sky-950 m-4 space-y-2">
                        <div className="md:space-y-6 ">
                            <div className="flex p-6 md:px-9 hover:bg-sky-950 shadow-lg group">
                                <div className="md:text-7xl text-5xl md:pr-8 group-hover:text-amber-400"><MdOutlineSearch /></div>
                                <div>
                                    <h5 className="text-2xl font-semibold group-hover:text-amber-400">Open-source intelligence gathering (OSINT)</h5>
                                    <p className="md:text-xl py-4 group-hover:text-white text-base">As with the first stage of any operation, our targeted Red Teaming attack begins with investigating your company and employees, gathering information that is inadvertently revealed.
                                        This comes from a variety of sources with a focus on the social media pages of the staff. We use this to plan our attacks, both cyber and physical.</p>
                                </div>
                            </div>

                            <div className="flex p-6 hover:bg-sky-950 shadow-lg group">
                                <div className="md:text-7xl text-5xl md:pr-8 group-hover:text-amber-400"><IoIosMailOpen /></div>
                                <div>
                                    <h5 className="text-2xl font-semibold group-hover:text-amber-400">Email spear phishing attacks</h5>
                                    <p className="md:text-xl py-4 group-hover:text-white text-base">Cyber criminals use information gathered from your employees to gain access to your organisation’s systems and data. Our red teams use social engineering to get personal information from targets within your team and use this to get them to reveal their username and password,
                                        or open an attachment that would let us into their computer.</p>
                                </div>
                            </div>

                            <div className="flex p-6 hover:bg-sky-950 shadow-lg group">
                                <div className="md:text-7xl text-5xl md:pr-8 group-hover:text-amber-400"><SlHome /></div>
                                <div>
                                    <h5 className="text-2xl font-semibold group-hover:text-amber-400">Physical intrusion</h5>
                                    <p className="md:text-xl py-4 group-hover:text-white text-base">If your organisation is susceptible to physical intrusion, attackers can gain access to steal sensitive information as well as planting keylogger devices, or compromising the network. Our Red Teaming security testing solutions include planning
                                        and executing a similar physical intrusion into your company to see how vulnerable you are to such attacks.</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:py-20 space-y-8 py-4">
                            <div className="group">
                                <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                                    <div className="md:text-7xl text-5xl md:pr-8 group-hover:text-amber-400"><TbCloudSearch /></div>
                                    <div>
                                        <h5 className="text-2xl font-semibold group-hover:text-amber-400">External and internal network security</h5>
                                        <p className="md:text-xl py-4 group-hover:text-white text-base">We identify devices in your organisations that may have been insecurely configured as these might be used to break into your organisation. Our Red Teaming security testing will also find other possible methods of intrusion and try to exploit them to gain access to your internal network. If successful,
                                            we will attempt to escalate our privileges to gain access to sensitive data.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                                    <div className="md:text-7xl text-5xl md:pr-8 group-hover:text-amber-400"><IoIosPhonePortrait /></div>
                                    <div>
                                        <h5 className="text-2xl font-semibold group-hover:text-amber-400">Vishing</h5>
                                        <p className="md:text-xl py-4 group-hover:text-white text-base">Since not all information gathering exercises by hackers is online, we will also assess how secure your organisation is against telephone social engineering attempts. Our trained team of telephone social engineers will call employees to see if they can get them to divulge sensitive login
                                            information or to get them to open an attachment sent as a spear phishing attack.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="md:flex item-center md:m-24 md:space-x-12 m-4">
                    <div className="w-90">
                        <img src={"/images/charities-reputations-v1-1024x576.png"} alt="" />
                    </div>
                    <div className="flex flex-col space-y-6 text-gray-600">
                        <h2 className="md:text-4xl text-3xl pt-10">What is a red team (or, why would you pay to be hacked)?</h2>
                        <p className="md:space-y-24 md:text-lg text-sm">The only real way you can determine the effectiveness of your security is by trying to get it hacked into.</p>
                        <p className="md:text-lg text-sm">And this is just what Falanx Cyber’s red teams are employed to do.</p>
                        <div> <button className="bg-sky-950 md:px-8 md:py-5 px-5 py-3 text-white hover:bg-amber-400">Read more</button></div>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="bg-[url('/images/blurred-background.jpg')] bg-cover md:h-[60vh] w-full">
                    <div className="md:flex md:m-20 justify-evenly text-sky-950">
                        <div className="md:basis-4/6 md:ml-40 ml-4 bg-zinc-50 md:px-8 mx-2 md:py-4 py-0 shadow-2xl shadow-sky-950 md:mt-16 mt-2 border border-sky-950">
                            <p className="md:text-2xl md:leading-normal text-sm p-4">I need a trusted partner that can provide additional security services into my portfolio</p>
                            <h5 className="flex justify-end md:pt-20 md:text-lg text-base m-8">Managing Director</h5>
                        </div>

                        <div className="md:ml-24 mt-6 font-medium ">
                            <h3 className="md:text-4xl md:mt-20 text-xl p-8">Enhance your portfolio with our suite of cybersecurity services</h3>
                            <div className="md:mt-8 "><button className="bg-sky-950 md:px-16 md:py-4 px-6 py-2 text-white hover:bg-amber-400 md:text-lg text-sm">Find out more</button></div>
                        </div>
                    </div>

                </div>

            </section > */}
            <section className="-mt-24">
            <Partner />
            </section>
        </section >


    );

};

export default RedTeaming;