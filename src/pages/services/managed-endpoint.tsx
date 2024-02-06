import { SectionPoster, StaticBanner } from "../../components";
import { IoLocateOutline } from "react-icons/io5";
import { CiAlarmOn } from "react-icons/ci";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { MdOutlineErrorOutline } from "react-icons/md";
import { ImConnection } from "react-icons/im";
import { VscTools } from "react-icons/vsc";
import { BsClock } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import Partner from "../home/components/partner";

const ManagedEndpoint = () => {
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
                <div className="bg-zinc-50 text-center md:mx-6 text-gray-800 md:p-8 p-2">
                    <h2 className="md:text-5xl md:m-16 text-2xl m-10">Why choose a Managed EDR Service?</h2>
                    <div className="md:flex md:m-24 md:basis-9/12 m-7">
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><IoLocateOutline /></button>
                            <p className="md:text-xl text-base">Combining market-leading EDR technology with Falanx Cyber analysts to hunt and remediate threats.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><CiAlarmOn /></button>
                            <p className="md:text-xl text-base">Significantly faster investigation and response.</p>
                        </div>
                        <div className="flex  flex-col items-center">
                            <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><MdOutlineDoNotDisturb /></button>
                            <p className="md:text-xl text-base">Protect user devices against multiple threat vectors.</p>
                        </div>
                    </div>
                </div>
            </section>
            <SectionPoster image={'/images/EMDR-2.jpg'}>
                <div className="flex flex-col md:basis-2/6 text-left md:mr-16 mt-36">
                    <h6 className="md:text-5xl text-sky-950 pb-6 text-3xl">Protecting your endpoints</h6>
                    <div className="pb-8 md:text-xl text-base text-sky-950">
                        <p className="py-6">Protect your endpoints against a variety of attacks through enhanced monitoring at the device level to spot intrusion earlier and, if appropriate, isolate the device whilst further investigation reveals next steps remedial action.</p>
                        <p className="space-y-24">Our M-EDR security monitoring service combines market-leading EDR technology with teams of highly trained Falanx Cyber analysts who actively hunt, investigate, and remediate threats from our UK security operations centre (SOC).</p>
                        <p className="font-bold text-sky-950 py-6">Did you know EDR is also available as part of our Managed Detection and Response service?</p>
                    </div>
                    <div><button className="bg-sky-950 md:px-8 md:py-5 px-5 py-3 text-white hover:bg-amber-400 font-semibold md:text-xl text-sm">Request a quote</button></div>
                </div>
            </SectionPoster>
            <section className="text-sky-950">
                <div className="bg-[url('/images/mdr-grey-bg-yellow.jpg')] bg-cover bg-top w-full relative">
                    <div className="pt-24 md:px-16 m-4">
                        <h2 className="md:text-5xl md:my-16 text-3xl my-6">Rapid investigation and immediate intervention</h2>
                        <div className="md:flex md:text-left md:mr-72 md:space-x-10 space-y-6">
                            <div className="space-y-4">
                                <p className="md:text-xl text-base py-3">Our endpoint protection platform includes trade craft protection techniques that cover the MITRE ATT&CK™ Matrix, enabling us to stop targeted attacks at any stage before damage and loss occur</p>
                                <p className="md:text-xl text-base py-3">These points combined drive the Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) down to a couple of seconds. That, in turn, significantly reduces the cost, time, and effort in dealing with any cyber-attack.</p>
                            </div>
                            <div>
                                <p className="md:text-xl text-base">With average dwell times in excess of 90 days, long-term data retention is key. All data is streamed to Falanx Cyber’s backend SOC infrastructure, where it is retained for up to 1 year for future analysis.</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white md:mx-64 md:my-44 hover:bg-sky-950 ml-16 mt-20">
                        <div className="flex md:p-6 p-5">
                            <div className="md:w-44 mx-8 w-96">
                                <img src={"/images/Banner-Speech-Marks.png"} alt="" />
                            </div>
                            <div className="text-xl group">
                                <p className="font-medium group-hover:text-amber-400">"We selected Falanx’s managed endpoint and detection service as the right option for us and Falanx worked closely with our external IT providers to facilitate a smooth onboarding process. The ongoing service has been excellent with fast responses to queries and good detection of anomalies on our network and infrastructure."</p>
                                <p className="text-right  py-8 group-hover:text-white">– Matt Enright, Chief Financial Officer, OTAQ</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:text-center md:mx-96 my-20 mx-6">
                        <h2 className="md:text-5xl text-3xl">Standard features included in our M-EDR service</h2>
                        <p className="md:text-xl pt-16 text-base">Endpoint protection, security operations, and threat hunting programmes powered by the speed, scalability, and power of Falanx Cyber, Endgame and Elastic.</p>
                    </div>
                    <div className="md:mx-16 md:my-24 md:flex md:space-x-32 text-sky-950 m-4 space-y-2">
                        <div className="md:space-y-6 space-y-9 ">
                            <div className="flex p-6 md:px-9 hover:bg-sky-950 shadow-lg group">
                                <div className="md:text-7xl text-4xl md:pr-8 pr-4 group-hover:text-amber-400"><MdOutlineErrorOutline /></div>
                                <div>
                                    <h5 className="md:text-2xl text-xl font-semibold group-hover:text-amber-400">Instant action</h5>
                                    <p className="md:text-xl py-4 group-hover:text-white text-base">Enjoy the comfort of knowing that your infrastructure is being constantly monitored and, in the event of suspicious activity, action will be taken to isolate the offending item before it can do harm.</p>
                                </div>
                            </div>

                            <div className="flex p-6 hover:bg-sky-950 shadow-lg group">
                                <div className="md:text-7xl text-4xl md:pr-8 pr-4 group-hover:text-amber-400"><ImConnection /></div>
                                <div>
                                    <h5 className="md:text-2xl text-xl font-semibold group-hover:text-amber-400">Online & offline</h5>
                                    <p className="md:text-xl py-4 group-hover:text-white text-base">Whether staff are on or offline, in the office or working remotely, their endpoints are constantly protected.</p>
                                </div>
                            </div>

                            <div className="flex p-6 hover:bg-sky-950 shadow-lg group">
                                <div className="md:text-7xl text-4xl md:pr-8 pr-4 group-hover:text-amber-400"><VscTools /></div>
                                <div>
                                    <h5 className="md:text-2xl text-xl font-semibold group-hover:text-amber-400">Simple, lightweight, yet powerful</h5>
                                    <p className="md:text-xl py-4 group-hover:text-white text-base">Our lightweight agent consumes minimal system resources, typically less than 1%, whilst offering next-generation cyber protection.</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:py-20 space-y-8 py-4">
                            <div className="group">
                                <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                                    <div className="md:text-7xl text-4xl md:pr-8 pr-4 group-hover:text-amber-400"><BsClock /></div>
                                    <div>
                                        <h5 className="md:text-2xl text-xl font-semibold group-hover:text-amber-400">24x7x365 Service</h5>
                                        <p className="md:text-xl py-4 group-hover:text-white text-base">Protection any time, day or night, including weekends and bank holidays. Clients can rest easy when away from work, safe in the knowledge that if anything happens, we are watching from our UK SOC.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                                    <div className="md:text-7xl text-4xl md:pr-8 pr-4 group-hover:text-amber-400"><MdOutlineDoNotDisturb /></div>
                                    <div>
                                        <h5 className="md:text-2xl text-xl font-semibold group-hover:text-amber-400">Prevent to protect</h5>
                                        <p className="md:text-xl py-4 group-hover:text-white text-base">We look for signs of intrusion and prevent malicious code from being executed, protecting you from zero-day attacks.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                                    <div className="md:text-7xl text-4xl md:pr-8 pr-4 group-hover:text-amber-400"><IoSettingsOutline /></div>
                                    <div>
                                        <h5 className="md:text-2xl text-xl font-semibold group-hover:text-amber-400">Defence against APT attackers</h5>
                                        <p className="md:text-xl py-4 group-hover:text-white text-base">Our M-EDR solution has been independently evaluated against the tactics, techniques, and procedures of two major Advanced Persistent Threat (APT) campaigns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:-mt-24">
                <div className="bg-sky-950 py-7 text-white">
                    <h2 className="md:text-5xl text-center text-3xl my-8">Full feature list</h2>
                    <div className="md:flex md:my-24 md:mx-48 md:space-x-7 mx-4">
                        <div className="md:w-[50vw]">
                            <h4 className="md:text-2xl text-xl font-bold py-8">Our service</h4>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3">24x7x365 Service</summary>
                                <p className="pr-10 m-4">Alerting any time, day or night, including weekends and bank holidays.</p>
                            </details>
                           
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3">Real-time alerting</summary>
                                <p className="pr-10 m-4">React immediately to mitigate and minimise the risk and costs associated with a potential breach.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3">Regular reporting</summary>
                                <p className="pr-10 m-4">Summary reporting of the incidents raised and dealt with over the prior period at both a business and technical level.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3">Enterprise-class security solution</summary>
                                <p className="pr-10 m-4">Whatever your budget and needs, Falanx Cyber has a solution for you that you can afford.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Instant response</summary>
                                <p className="pr-10 m-4">Reduce mean time to respond and, consequently, reduce risk of a breach through immediate intervention.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Validated by the best</summary>
                                <p className="pr-10 m-4">Our service is built upon components that are validated by Gartner, Forrester and MITRE.</p>
                            </details>
                        </div>
                        <div className="md:w-[50vw]">
                            <h4 className="md:text-2xl text-xl text-white font-bold py-8">Our toolset</h4>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Malware and randsomware prevention</summary>
                                <p className="pr-10 m-4">Prevention is the best solution – leverage Machine Learning to identify rogue attachments earlier and avoid opening the file.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Phishing prevention</summary>
                                <p className="pr-10 m-4">Prevention is the best solution – leverage Machine Learning to identify rogue attachments earlier and avoid opening the file.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Exploit prrevention</summary>
                                <p className="pr-10 m-4">Block attempts to exploit vulnerabilities — even zero-day vulnerabilities and kernel exploits designed to elevate privileges — before any malicious code can execute.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3">File-less attack prevention</summary>
                                <p className="pr-10 m-4">As threat actors use more sophisticated, file-less attacks it is important to spot them before they execute.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Machine learning/artificial intelligence</summary>
                                <p className="pr-10 m-4">Complements rule-based alerts in SIEM to provide speedy, enriched alerting from multiple sources.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Milliseconds matter</summary>
                                <p className="pr-10 m-4">Hunt for threats with a rapid succession of ad-hoc queries. Drill into and pivot through underlying data at will. And do it all with the technology fast enough for the sharpest analysts.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Secure.By design</summary>
                                <p className="pr-10 m-4">Implement authentication and network traffic encryption. Create user roles and implement index- and cluster-level permissions. Manage access to Kibana saved objects like dashboards.</p>
                            </details>
                            <details className="text-lg border border-white mb-4 hover:border-amber-400">
                                <summary className="p-3 hover:border-amber-400">Retain the data you need</summary>
                                <p className="pr-10 m-4">With average dwell times in excess of 90 days, long-term data retention is key. Elastic scales as big as you need, stores data for as long as you want, and makes searching through it simple and fast.</p>
                            </details>
                        </div>
                    </div>

                </div>
            </section>
            <section className="-mt-20">
                <Partner/>
            </section>
        </section>
    )
}

export default ManagedEndpoint;
