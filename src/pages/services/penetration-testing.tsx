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

      <section className="-mt-24 relative z-10">
        <div className="bg-zinc-50 text-center mx-24 text-gray-800 p-8">
          <div>
            <h2 className="text-4xl m-16">Falanx Cyber penetration testing services</h2>
            <p className="text-base px-20">
              Penetration tests are simulated attacks carried out by our testing team. They employ the same techniques that attackers use to reveal if your systems or applications can withstand hostile attacks
              and whether discovered vulnerabilities can lead to further intrusion and exploitation.
            </p>
          </div>
          <div className="flex m-24 w-9/12">
            <div className="flex flex-col items-center">
              <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><MdOutlineSearch /></button>
              <p className="text-lg">Uncover critical vulnerabilities in your organisation.</p>
            </div>
            <div className="flex flex flex-col items-center">
              <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><GiNotebook /></button>
              <p className="text-lg">Enable you to prioritise and address risks through detailed reports.</p>
            </div>
            <div className="flex flex flex-col items-center">
              <button className="text-6xl shadow-xl p-8 hover:bg-amber-400 mb-8 hover:text-white"><IoStarOutline /></button>
              <p className="text-lg">Assisting in meeting industry and regulatory compliance.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="text-gray-800 mx-24">
        <h2 className="text-4xl text-center py-16">Our penetration testing services</h2>
        <div className="flex space-x-8">
          <div className="space-y-6 w-1/2">
            <div className="flex p-6 hover:bg-sky-950 shadow-lg">
              <div className="text-4xl px-3 hover:text-amber-400">
                <GiNotebook />
              </div>
              <div>
                <h5 className="text-xl font-semibold hover:text-amber-400">Vulnerability assessments</h5>
                <p className="text-base py-4 hover:text-white">Vulnerability penetration testing assessments provide your systems with non-intrusive, automated and regular tests to identify security loopholes in your systems and networks,
                  rather than specific attack scenarios. These vulnerabilities are then measured on a scale of severity.</p>
              </div>
            </div>
            <div className="flex p-6 hover:bg-sky-950 shadow-lg">
              <div className="text-4xl px-3 hover:text-amber-400">
                <TfiRulerAlt2 />
              </div>
              <div>
                <h5 className="text-xl font-semibold hover:text-amber-400">Social engineering</h5>
                <p className="text-base py-4 hover:text-white">Our social engineering services focus on highlighting the risks posed by the human element of your organisation. Since unaware staff can give away important information without realising,
                  our testing can help you assess if your employees might be a security risk.
                </p>
              </div>
            </div>
            <div className="flex p-6 hover:bg-sky-950 shadow-lg">
              <div className="text-4xl px-3 hover:text-amber-400">
                <SlHome />
              </div>
              <div>
                <h5 className="text-xl font-semibold hover:text-amber-400">External infrastructure penetration testing</h5>
                <p className="text-base py-4  hover:text-white">Infrastructure penetration testing evaluates how secure your external perimeter is from cyber-attacks. This test will also identify hosts which may require additional testing,
                  such as web applications.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 w-1/2">
            <div className="flex p-6 hover:bg-sky-950 shadow-lg">
              <div className="text-4xl px-3 hover:text-amber-400">
                <MdOutlineContentPasteSearch />
              </div>
              <div>
                <h5 className="text-xl font-semibold hover:text-amber-400">Web application testing</h5>
                <p className=" text-base py-4 hover:text-white">Web application testing identifies flaws or security issues that may allow for your website or web applications to be hacked, putting sensitive data at risk. From internet technologies, mobile applications,
                  APIs and everything in between, we can provide you with extensive testing on all of your application types.
                </p>
              </div>
            </div>
            <div className="flex p-6 hover:bg-sky-950 shadow-lg">
              <div className="text-4xl px-3 hover:text-amber-400">
                <TfiWorld />
              </div>
              <div>
                <h5 className="text-xl font-semibold hover:text-amber-400">Internal and wireless network testing</h5>
                <p className="text-base py-4 hover:text-white">An internal network penetration test simulates an attacker who has gained access to the network by breaching the organisation’s technical or physical perimeter, or a malicious insider who has legitimate network access. The test will assess the difficulty with which an attacker can escalate their privileges,
                  with a goal of proving access to sensitive and confidential data on the network.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="m-24">
        <h1 className="text-5xl text-center">Get a free, no obligation quote</h1>
        <div className="flex flex-col gap-12 my-16 text-gray-400 ">
          <div className="grid grid-cols-2 gap-y-14">
            <div><input type="text" className="w-11/12 border border-gray-300 h-12 px-7 py-5" placeholder="Name" /></div>
            <div><input type="text" className="w-11/12 border border-gray-300 h-12 px-7 py-5" placeholder="Surname" /></div>
            <div><input type="text" className="w-11/12 border border-gray-300 h-12 px-7 py-5" placeholder="Email" /></div>
            <div><input type="text" className="w-11/12 border border-gray-300 h-12 px-7 py-5" placeholder="Contact Tel" /></div>
          </div>
          <div>
            <select className="border border-gray-300 w-full px-7 py-5">
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
            <textarea className="border border-gray-300 h-32 w-full px-7 py-5" placeholder="Message" />
          </div>
          <div>
            <select className="border border-gray-300 w-full px-7 py-5">
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
          <div className="py-px">
            <input type="checkbox" /><label className="text-lg  text-gray-800">I agree to the privacy policy</label>
          </div>
          <div>
            <input type="checkbox" /><label className="text-lg  text-gray-800">I agree to receive marketing emails from Falanx and understand that I can unsubscribe at any time.</label>
          </div>
          <div><button className="bg-sky-950 px-9 py-3 text-white text-base">Submit</button></div>
        </div>
      </section>
      <Partner />
    </section>
  );
};

export default PenetrationTesting;
