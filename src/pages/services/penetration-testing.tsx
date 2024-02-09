import { StaticBanner } from "../../components";
import { MdOutlineSearch } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { TfiWorld } from "react-icons/tfi";
import { SlHome } from "react-icons/sl";
import Partner from "../home/components/partner"

const PenetrationTesting = () => {
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

      <section>
        <div className="-mt-24 relative z-10">
          <div className="bg-zinc-50 text-center md:mx-24 pb-16 text-sky-950">
            <h2 className="md:text-4xl text-3xl pt-16 md:mx-0 mx-4">Falanx Cyber penetration testing services</h2>
            <p className="text-base md:mx-24 mt-20 mx-8">
              Penetration tests are simulated attacks carried out by our testing team. They employ the same techniques that attackers use to reveal if your systems or applications can withstand hostile attacks
              and whether discovered vulnerabilities can lead to further intrusion and exploitation.
            </p>
            <div className="md:grid grid-cols-3 md:basis-9/12 md:px-24 px-10 gap-x-20">
              <div className="flex flex-col items-center">
                <button className="text-5xl shadow-xl p-8 hover:bg-amber-400 my-8 hover:text-white"><MdOutlineSearch /></button>
                <p className="text-base">Uncover critical vulnerabilities in your organisation.</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-5xl shadow-xl p-8 hover:bg-amber-400 my-8 hover:text-white"><GiNotebook /></button>
                <p className="text-base">Enable you to prioritise and address risks through detailed reports.</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-5xl shadow-xl p-8 hover:bg-amber-400 my-8 hover:text-white"><IoStarOutline /></button>
                <p className="text-base">Assisting in meeting industry and regulatory compliance.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="text-sky-950 md:mx-24 mx-4">
        <h2 className="md:text-4xl text-3xl text-center py-20">Our penetration testing services</h2>
        <div className="md:flex md:space-x-8">
          <div className="space-y-8 md:basis-1/2">
            <div className="group">
              <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                <div className="text-4xl px-3 group-hover:text-amber-400">
                  <GiNotebook />
                </div>
                <div>
                  <h5 className="text-xl font-semibold group-hover:text-amber-400">Vulnerability assessments</h5>
                  <p className="text-base py-4 group-hover:text-white">Vulnerability penetration testing assessments provide your systems with non-intrusive, automated and regular tests to identify security loopholes in your systems and networks,
                    rather than specific attack scenarios. These vulnerabilities are then measured on a scale of severity.</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                <div className="text-4xl px-3 group-hover:text-amber-400">
                  <TfiRulerAlt2 />
                </div>
                <div>
                  <h5 className="text-xl font-semibold group-hover:text-amber-400">Social engineering</h5>
                  <p className="text-base py-4 group-hover:text-white">Our social engineering services focus on highlighting the risks posed by the human element of your organisation. Since unaware staff can give away important information without realising,
                    our testing can help you assess if your employees might be a security risk.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                <div className="text-4xl px-3 group-hover:text-amber-400">
                  <SlHome />
                </div>
                <div>
                  <h5 className="text-xl font-semibold group-hover:text-amber-400">External infrastructure penetration testing</h5>
                  <p className="text-base py-4 group-hover:text-white">Infrastructure penetration testing evaluates how secure your external perimeter is from cyber-attacks. This test will also identify hosts which may require additional testing,
                    such as web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-8 md:basis-1/2">
            <div className="group">
              <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                <div className="text-4xl px-3 group-hover:text-amber-400">
                  <MdOutlineContentPasteSearch />
                </div>
                <div>
                  <h5 className="text-xl font-semibold group-hover:text-amber-400">Web application testing</h5>
                  <p className=" text-base py-4 group-hover:text-white">Web application testing identifies flaws or security issues that may allow for your website or web applications to be hacked, putting sensitive data at risk. From internet technologies, mobile applications,
                    APIs and everything in between, we can provide you with extensive testing on all of your application types.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex p-6 group-hover:bg-sky-950 shadow-lg">
                <div className="text-4xl px-3 group-hover:text-amber-400">
                  <TfiWorld />
                </div>
                <div>
                  <h5 className="text-xl font-semibold group-hover:text-amber-400">Internal and wireless network testing</h5>
                  <p className="text-base py-4 group-hover:text-white">An internal network penetration test simulates an attacker who has gained access to the network by breaching the organisation’s technical or physical perimeter, or a malicious insider who has legitimate network access. The test will assess the difficulty with which an attacker can escalate their privileges,
                    with a goal of proving access to sensitive and confidential data on the network.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="basis-9/12 md:mx-24 mx-4 my-10">
          <h1 className="md:text-5xl mb-12 text-3xl text-center text-sky-950">Get a free, no obligation quote</h1>
          <div className="md:flex flex-col space-y-5 text-gray-400 ">
            <div className="md:flex md:gap-x-5">
              <input type="text"
                className="md:basis-6/12 w-full md:mb-0 mb-3 border border-gray-300 p-3"
                placeholder="Name"
              />
              <input type="text"
                className="md:basis-6/12 w-full border border-gray-300 p-3"
                placeholder="Surname" />
            </div>
            <div className="md:flex md:gap-x-5">
              <input type="text"
                className="md:basis-6/12 w-full md:mb-0 mb-3 border border-gray-300 p-3"
                placeholder="Email" />

              <input type="text"
                className="md:basis-6/12 w-full border border-gray-300 p-3"
                placeholder="Contact Tel" />
            </div>
            <div>
              <select className="border border-gray-300 w-full p-3">
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
            <div>
              <textarea className="border border-gray-300 h-32 w-full p-3" placeholder="Message" />
            </div>
            <div>
              <select className="border border-gray-300 w-full p-3">
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
            <div className="flex items-center gap-x-2">
              <input type="checkbox" />
              <label className="text-sky-950">I agree to the privacy policy</label>
            </div>
            <div className="flex gap-x-2">
              <div><input type="checkbox" /></div>
              <label className="text-sky-950">I agree to receive marketing emails from Falanx and understand that I can unsubscribe at any time.</label>
            </div>
            <div><button className="bg-sky-950 px-9 py-3 text-white text-base">Submit</button></div>
          </div>
        </div>

      </section>
      <Partner />
    </section >
  );
};

export default PenetrationTesting;
