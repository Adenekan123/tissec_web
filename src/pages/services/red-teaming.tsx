import { SectionPoster, StaticBanner } from "../../components";
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
            <section className="-mt-24 relative z-10">
                <div className="bg-zinc-50 text-center md:mx-24 pb-16 text-sky-950">
                    <h2 className="md:text-4xl text-3xl pt-12 md:mx-0 mx-4">Why do you need Red Teaming security testing?</h2>
                    <div className="md:grid grid-cols-3 md:basis-9/12 md:px-24 px-20 py-10 gap-x-20">
                        <div className="flex flex-col items-center">
                            <button className="text-5xl shadow-xl p-8 hover:bg-amber-400 my-8 hover:text-white"><MdOutlineSearch /></button>
                            <p className="text-base">Identifies weaknesses in your processes to prepare for a real-world attack.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="text-5xl shadow-xl p-8 hover:bg-amber-400 my-8 hover:text-white"><VscTools /></button>
                            <p className="text-base">Improves your organisation’s defences and remain competitive.</p>
                        </div>
                        <div className="flex  flex-col items-center">
                            <button className="text-5xl shadow-xl p-8 hover:bg-amber-400 my-8 hover:text-white"><SlChart /></button>
                            <p className="text-base">Enables you to make informed cybersecurity decisions for more effective outcomes.</p>
                        </div>
                    </div>
                    <p className="text-base md:px-8 px-4">Red Teaming is a service designed to help you find out how secure your physical spaces are from real-world threats. The findings then give you information
                        on how you can prevent these attacks.
                    </p>
                </div>
            </section>
            <SectionPoster image={'/images/Red-Teaming.jpg'}>
                <div className="flex flex-col md:basis-2/6 text-left md:mr-16 md:mt-60 mt-20">
                    <h6 className="md:text-5xl text-sky-950 pb-4 text-3xl">Identifying weaknesses and real-world risks</h6>
                    <div className="pb-8 text-base text-sky-950">
                        <p className="py-6">Our Red Teaming security testing is a full-scale simulated attack, virtual as well as physical, on your organisation. Our testing will not only give you a clearer picture of how well your systems and networks can prevent a hack, both through cyber and physical means, but also how quickly you can detect the hack and respond to it.</p>
                        <p>The service includes a threat and risk analysis session to determine your most important assets, the most likely groups that would target them, and their methods and motivations.</p>
                        <p className="py-6">We then devise tests for all scenarios, the results of which are provided to you in a report. This gives you a summary of the risks identified and key messages that you can use to develop a security-aware culture in your organisation.</p>
                        <p>In essence, we help you identify weaknesses and real-world risks from attacks, and use the information to help you prevent them and drive a cultural change within your business.</p>
                        <p className="font-bold text-sky-950 py-6">Do you know if your organisation is safe from threats, including state-sponsored attacks, organised crime and hacktivist groups?</p>
                    </div>
                    <div><button className="bg-sky-950 px-8 py-5 text-white hover:bg-amber-400 font-medium">Contact us</button></div>
                </div>
            </SectionPoster>
            <section>
                <div className="md:m-24 m-4">
                    <h2 className="md:text-5xl md:pb-20 pb-10 text-center text-sky-950 text-3xl">What we offer</h2>
                    <div className="md:grid grid-cols-2 gap-6 text-sky-950 space-y-2">
                        <div className="space-y-6">
                            <div className="flex p-6 hover:bg-sky-950 shadow-lg group">
                                <div className="text-5xl pr-5 group-hover:text-amber-400"><MdOutlineSearch /></div>
                                <div>
                                    <h5 className="text-xl font-semibold group-hover:text-amber-400">Open-source intelligence gathering (OSINT)</h5>
                                    <p className="text-base py-4 group-hover:text-white">As with the first stage of any operation, our targeted Red Teaming attack begins with investigating your company and employees, gathering information that is inadvertently revealed.
                                        This comes from a variety of sources with a focus on the social media pages of the staff. We use this to plan our attacks, both cyber and physical.</p>
                                </div>
                            </div>

                            <div className="flex p-6 hover:bg-sky-950 shadow-lg group">
                                <div className="text-5xl pr-5 group-hover:text-amber-400"><IoIosMailOpen /></div>
                                <div>
                                    <h5 className="text-xl font-semibold group-hover:text-amber-400">Email spear phishing attacks</h5>
                                    <p className="text-base py-4 group-hover:text-white">Cyber criminals use information gathered from your employees to gain access to your organisation’s systems and data. Our red teams use social engineering to get personal information from targets within your team and use this to get them to reveal their username and password,
                                        or open an attachment that would let us into their computer.</p>
                                </div>
                            </div>

                            <div className="flex p-6 hover:bg-sky-950 shadow-lg group">
                                <div className="text-5xl pr-5 group-hover:text-amber-400"><SlHome /></div>
                                <div>
                                    <h5 className="text-xl font-semibold group-hover:text-amber-400">Physical intrusion</h5>
                                    <p className="text-base py-4 group-hover:text-white">If your organisation is susceptible to physical intrusion, attackers can gain access to steal sensitive information as well as planting keylogger devices, or compromising the network. Our Red Teaming security testing solutions include planning
                                        and executing a similar physical intrusion into your company to see how vulnerable you are to such attacks.</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:py-20 space-y-8 py-4">
                            <div className="group">
                                <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                                    <div className="text-5xl pr-5 group-hover:text-amber-400"><TbCloudSearch /></div>
                                    <div>
                                        <h5 className="text-xl font-semibold group-hover:text-amber-400">External and internal network security</h5>
                                        <p className="text-base py-4 group-hover:text-white">We identify devices in your organisations that may have been insecurely configured as these might be used to break into your organisation. Our Red Teaming security testing will also find other possible methods of intrusion and try to exploit them to gain access to your internal network. If successful,
                                            we will attempt to escalate our privileges to gain access to sensitive data.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                                    <div className="text-5xl pr-5 group-hover:text-amber-400"><IoIosPhonePortrait /></div>
                                    <div className="">
                                        <h5 className="text-xl font-semibold group-hover:text-amber-400">Vishing</h5>
                                        <p className="text-base py-4 group-hover:text-white">Since not all information gathering exercises by hackers is online, we will also assess how secure your organisation is against telephone social engineering attempts. Our trained team of telephone social engineers will call employees to see if they can get them to divulge sensitive login
                                            information or to get them to open an attachment sent as a spear phishing attack.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="md:mx-24 my-24 mx-4">
                    <div className="md:flex item-center md:space-x-8 md:space-y-0 space-y-16">
                        <div className="w-90">
                            <img src={"/images/charities-reputations-v1-1024x576.png"} alt="" />
                        </div>
                        <div className="flex flex-col space-y-6 text-sky-950">
                            <h2 className="text-4xl">What is a red team (or, why would you pay to be hacked)?</h2>
                            <p className="md:space-y-24 text-base">The only real way you can determine the effectiveness of your security is by trying to get it hacked into.</p>
                            <p className="text-base">And this is just what Falanx Cyber’s red teams are employed to do.</p>
                            <div> <button className="bg-sky-950 px-8  py-5 text-white hover:bg-amber-400">Read more</button></div>
                        </div>
                    </div>
                </div>
            </section>
            <Partner />
        </section >


    );

};

export default RedTeaming;