import { SectionPoster, StaticBanner } from "../../components";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { PiNumberSquareOneThin } from "react-icons/pi";
import { PiNumberSquareThreeThin } from "react-icons/pi";
import { PiNumberSquareFiveThin } from "react-icons/pi";
import { PiNumberSquareTwoThin } from "react-icons/pi";
import { PiNumberSquareFourThin } from "react-icons/pi";
import Partner from "../home/components/partner";

const OurTestingProcess = () => {
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
                    <h2 className="md:text-5xl md:m-16 text-2xl m-10">What do you get when you work with us?</h2>
                    <div className="md:flex md:m-24 md:basis-9/12 m-7">
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><IoSettingsOutline /></button>
                            <p className="md:text-lg text-base">A bespoke and client-focused penetration testing service.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><IoIosStarOutline /></button>
                            <p className="md:text-lg text-base">Highly-skilled and experienced penetration testers.</p>
                        </div>
                        <div className="flex  flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><MdBarChart /></button>
                            <p className="md:text-lg text-base">Comprehensive, yet easy-to-understand reporting of our findings.</p>
                        </div>
                    </div>
                    <p className="md:text-lg text-base">Our penetration testing and assessment services are designed to ensure that your systems and processes cannot be breached from cyber attacks. We work closely with your team, understanding your systems thoroughly before we start testing.
                    </p>
                </div>
            </section>
            <SectionPoster image={"/images/Background-4.jpg"}>
                <div className="flex flex-col md:basis-2/6 text-left md:m-24 mx-2 my-24">
                    <h6 className="md:text-5xl text-sky-950 md:pb-6 text-3xl ">Cybersecurity testing with a personal touch</h6>
                    <div className="pb-8 md:text-lg text-base text-sky-950">
                        <p className="py-6">We believe the personal touch we provide with our penetration testing services is why our clients choose to keep working with us. We provide a friendly, customer-focused service that is designed to support your specific business needs. We invest time forging individual relationships, getting to know you and your team, learning the intricacies of the technical systems you manage.</p>
                        <p className="space-y-24">Our penetration testers embed themselves in your processes, speaking to project managers directly to arrange the testing. Their flexible and professional approach is further complemented by their skills and experience. More importantly, as our client, you will be working with a dedicated account manager. This one-point of contact will provide you with all the information and support you need.</p>
                        <p className="font-bold text-sky-950 mt-10">Would you like to know more about how our penetration testing services could benefit your organisation?</p>
                    </div>
                    <div className="mt-8"><button className="bg-sky-950 md:px-16 md:py-4 text-white hover:bg-amber-400 md:text-lg px-8 py-2 text-sm">Find out more</button></div>
                </div>
            </SectionPoster>
            {/* <section className="bg-[url('/images/blurred-background.jpg')] bg-cover md:h-[60vh] w-full">
                <div className="md:flex md:m-20 justify-evenly text-sky-950">
                    <div className="md:basis-4/6 md:ml-40 ml-4 bg-zinc-50 md:px-8 mx-2 md:py-4 py-0 shadow-2xl shadow-sky-950 md:mt-16 mt-2 border border-sky-950">
                        <p className="md:text-2xl md:leading-normal text-sm p-4">"As a security manager i know the benefit of carrying out stimulated cyber attacks on your system.
                            I need a service provider that can handle my requirements."
                        </p>
                        <h5 className="flex justify-end md:pt-20 md:text-lg text-base m-8">Security Manager</h5>
                    </div>

                    <div className="md:ml-24 ml-0 font-medium">
                        <h3 className="md:text-4xl md:mt-20 text-xl p-8">Uncover critical vulnerability in your enviroment</h3>
                        <div className="mt-8"><button className="bg-sky-950 md:px-16 md:py-4 px-6 py-2 text-white hover:bg-amber-400 md:text-lg text-sm">Find out more</button></div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="bg-sky-950">
                    <div className="md:m-24 m-4">
                        <h2 className="md:text-5xl py-20 text-white text-3xl">Our process</h2>
                        <div className="md:grid md:grid-cols-2 md:gap-8 pb-24 space-y-10">
                            <div className="flex group">
                                <div className="text-7xl pr-3 text-amber-400"><PiNumberSquareOneThin className="group-hover:bg-amber-400 group-hover:text-white" /></div>
                                <div className="text-white font-medium">
                                    <h5 className="md:text-xl group-hover:text-amber-400 mb-3 text-lg">Dedicated account manager</h5>
                                    <p className="md:text-lg text-base">As we mentioned earlier, we provide you with a dedicated account manager. This individual will be responsible for working with you, providing both operational support and account management functions for the life of the contract, to ensure you receive the best possible level of service to achieve optimum results for your business. Your account manager will work closely with you, supported by the knowledge and expertise of our cybersecurity specialists.</p>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="text-7xl pr-3 text-amber-400"><PiNumberSquareTwoThin className="group-hover:bg-amber-400 group-hover:text-white" /></div>
                                <div className="text-white font-medium">
                                    <h5 className="md:text-xl group-hover:text-amber-400 mb-3 text-lg">Understanding your needs</h5>
                                    <p className="md:text-lg text-base">You can contact your account manager at any time to request penetration testing services. We will arrange for a scoping call at a mutually convenient time to understand your needs. This helps us refine your penetration testing requirements in order to fully understand the breadth and depth of the project.</p>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="text-7xl pr-3 text-amber-400"><PiNumberSquareThreeThin className="group-hover:bg-amber-400 group-hover:text-white" /></div>
                                <div className="text-white font-medium">
                                    <h5 className="md:text-xl group-hover:text-amber-400 mb-3 text-lg">Project kick off</h5>
                                    <p className="md:text-lg text-base">Before we commence the testing, we have a kick off call with you. This ensures everyone is clear about the scope of testing and all concerns, including hygiene factors, have been addressed. Once you have consented, we will commence the requested testing on the agreed dates.</p>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="text-7xl pr-3 text-amber-400"><PiNumberSquareFourThin className="group-hover:bg-amber-400 group-hover:text-white" /></div>
                                <div className="text-white font-medium">
                                    <h5 className="md:text-xl group-hover:text-amber-400 mb-3 text-lg">Testing phase</h5>
                                    <p className="md:text-lg text-base">During the testing phase, you can expect regular verbal updates about the daily progress. After the testing is complete, we will provide you with a securely-delivered electronic report. Your account manager will also plan in a convenient time for a report debrief. We use this time to explain the findings and conclusions of the report, and answer any questions you may have.</p>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="text-7xl pr-3 text-amber-400"><PiNumberSquareFiveThin className="group-hover:bg-amber-400 group-hover:text-white" /></div>
                                <div className="text-white font-medium">
                                    <h5 className="md:text-xl group-hover:text-amber-400 mb-3 text-lg">Reporting</h5>
                                    <p className="md:text-lg text-base">Our electronic report includes several key components like the executive summary, which includes our recommendations, the scope of the test we undertook, the key findings of the test along with the evidence, and the tools and methodology we used.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mt-24">
            <Partner />
            </section>
            
        </section >
    )
}

export default OurTestingProcess;