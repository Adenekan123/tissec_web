import { SectionPoster, StaticBanner } from "../../components";
import { PiCloudCheck } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { PiEnvelopeOpenThin } from "react-icons/pi";
import { CiCircleQuestion } from "react-icons/ci";
import { PiLaptopThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Partner from "../home/components/partner";

const AwarenessTraining = () => {
    return (
        <section>
            <section>
                <StaticBanner
                    content={{
                        heading: "Cybersecurity Awareness Training",
                        description:
                            "Do your staff know how to reduce the likelihood of data breaches and cyber attacks? Let us help.",
                        url: "#",
                    }}
                />
            </section>
            <section className="-mt-36 relative z-10">
                <div className="bg-zinc-50 text-center md:mx-24 text-sky-950 md:p-8 p-2">
                    <h2 className="md:text-4xl md:m-16 text-3xl m-10">What does our awareness training for employees offer?</h2>
                    <div className="md:flex space-x-8 md:m-24">
                        <div className="flex flex-col items-center basis-5/12">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white mt-6"><PiCloudCheck /></button>
                            <p className="text-base">Follow up training and testing through a cloud eLearning platform.</p>
                        </div>
                        <div className="flex flex-col items-center basis-5/12">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white mt-6"><IoBulbOutline /></button>
                            <p className="text-base">Comprehensive training with real-world examples that reduce likelihood of cyber attacks succeeding.</p>
                        </div>
                        <div className="flex flex-col items-center basis-5/12">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white mt-6"><BsBarChart /></button>
                            <p className="text-base">Bring the training to life using real-world stories from our trainers’ own experiences as ethical hackers</p>
                        </div>
                    </div>
                </div>
            </section>
            <SectionPoster image={'/images/Cyber-Awareness-Training23.jpg'}>
                <div className="flex flex-col md:basis-2/6 text-left md:m-16 mx-2 my-24">
                    <h6 className="md:text-5xl text-sky-950 md:pb-8 text-3xl ">Empowering your staff with cybersecurity knowledge</h6>
                    <div className="pb-8 md:text-lg text-base text-sky-950">
                        <p className="py-6">Cybersecurity is not just the job of the IT department. It is something that involves everyone in the organisation.
                            Empowered with the right cybersecurity awareness knowledge, your staff can be your greatest asset, alerting you to threats in real-time as
                            they happen and providing valuable feedback on whether your online security processes and procedures are effective and workable alongside the
                            needs of their job.
                        </p>
                        <p className="space-y-24">With the introduction of GDPR, it’s now necessary to educate your staff on the concepts of cybersecurity across a range of
                            potential attacks and how to correctly handle third parties’ sensitive information.
                        </p>
                        <p className="space-y-24">Unlike most training packages, we use our experience from being ethical hackers to bring the training to life. Using real-world stories from our trainers’
                            own experiences, we hugely increase staff engagement and promote cultural change within the business.
                        </p>
                        <p className="font-bold text-sky-950 mt-10">Did you know our ethical phishing package could help us assess the cybersecurity awareness of your staff and make the training more comprehensive?</p>
                    </div>
                    <div className="mt-8"><button className="bg-sky-950 md:px-7 md:py-4 text-white hover:bg-amber-400 md:text-base px-8 py-2 text-sm">Find out more</button></div>
                </div>
            </SectionPoster>
            <section>
                <div className="md:grid grid-cols-2 md:space-x-4 md:m-24 space-y-10 -mt-24 m-4">
                    <div>
                        <h6 className="md:text-4xl text-3xl text-sky-950 md:pb-10 pb-6">Regulatory compliance</h6>
                        <p className="text-base text-sky-950">A further reason to introduce security awareness training for employees at your organisation is that you may not be compliant with regulations and the law if you don’t. Certain types of organisations such as financial or government
                            institutions and healthcare organisations are required by law to ensure their workforce has received cybersecurity training.
                        </p>
                    </div>
                    <div className="bg-sky-950 px-5 py-10 text-sky-950">
                        <p className="text-base font-semibold text-white">Make sure your organisation is compliant with regulations?</p>
                        <div className="mt-12"><button className="bg-white md:px-7 md:py-4 px-5 py-3 hover:bg-amber-400 hover:text-white">Get in touch</button></div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:space-x-20 md:m-24 m-6">
                    <div>
                        <h6 className="md:text-4xl text-3xl text-sky-950 md:pb-10 pt-10">What our cybersecurity awareness training provides</h6>
                        <p className="text-base text-sky-950 pt-6">Our live cybersecurity training sessions can be recorded or provided as a webcast to deliver to offices where face-to-face training is not possible.
                            Our awareness training can cover many different topics, delivered through modules no shorter than one hour.
                        </p>
                    </div>
                    <div className=" text-sky-950">
                        <div className="flex text-center md:m-8 m-10">
                            <div className="basis-5/12 mr-16">
                                <button className="text-6xl"><PiEnvelopeOpenThin/></button>
                                <p className="text-base">Email phishing and ransomware</p>
                            </div>
                            <div className="basis-5/12">
                                <button className="text-6xl"><CiCircleQuestion/></button>
                                <p className="text-base">Who may hack you and why</p>
                            </div>
                        </div>
                        <div className="md:flex grid grid-cols-2 text-center md:space-x-24">
                            <div className="basic-5/12">
                                <button className="text-6xl"><PiLaptopThin /></button>
                                <p className="text-base">Social media</p>
                            </div>
                            <div className="basic-5/12">
                                <button className="text-6xl"><CiSettings /></button>
                                <p className="text-base">Social engineering</p>
                            </div>
                            <div className="basic-5/12 md:mx-0 md:mt-0 mx-40 mt-10">
                                <button className="text-6xl"><CiLock /></button>
                                <p className="text-base">Passwords</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Partner/>
        </section>
    )
}

export default AwarenessTraining;
