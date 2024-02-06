import { StaticBanner } from "../../components"
import Partner from "../home/components/partner";



const AboutUs = () => {
  return (

    <section>
      <section>
        <section >
          <StaticBanner
            content={{
              heading: "About Us",
              description: "Putting enterprise-class cybersecurity services within reach of every organisation.",
              url: "#",
            }}

          />
        </section>
      </section>

      <section>
        <div className=" md:mx-72 mx-4 md:my-28 my-16 text-[#122170] text-center text-lg">
          <p className="mb-8">Falanx Cyber provides enterprise-class cyber security services and solutions. We deliver end-to-end cyber capabilities, either as specific engagements or as fully-managed services. Our capabilities comprise a full suite of cyber security services, all focussed on improving our clients’ cyber resilience, and ultimately enabling them to withstand, cyber-attacks.</p>

          <p>Falanx Cyber operates from the UK with our headquarters and Security Operations Centre (SOC) based in Reading. As a provider of cyber security services, we are focussed on delivering those services to the highest standards of client satisfaction possible. We believe that by focussing on our core business our clients benefit from levels of agility, expertise, and quality.</p>
        </div>
      </section>

      <section>
        <div className="md:flex md:mx-28 mx-4 mt-32 mb-20">
          <div>
            <h3 className="mb-8 md:text-5xl text-3xl ml-4 text-[#122135]">Charity Partner </h3>
            <p className="mb-4 text-[#122170]">Falanx Cyber’s charity partner is MIND.</p>
            <p className="text-[#122170]">MIND provide advice and support to empower anyone experiencing a mental health problem.</p>
            <p className="text-[#74b3e3]"><link rel="stylesheet" href="" />www.mind.org.uk</p>
          </div>
          <div className=" w-72 md:ml-32 md:mt-0 mt-4">
            <img className="" src="/images/Mind-logo-scaled.jpg" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="text-center bg-[#8b8b8b] text-white py-24 md:px-0 px-6">
          <p className="mb-8 text-4xl">Falanx Cyber</p>
          <p className="text-lg font-medium">Falanx Cyber Defence Limited is part of the Wavenet Group.</p>
        </div>
      </section>

      <section>
        <div className="bg-[#122135] py-12">
          <h2 className="text-center text-5xl text-white mb-16">Our Timeline</h2>
          <div className=" md:mx-24 mx-4">
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2022</h2>
              <p className=" font-normal text-white">Launched Retained-IR and Continuous Vulnerability Scanning Services.</p>
            </div>
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2021</h2>
              <p className=" font-normal text-white">f:CEL (falanx cyber exposure level) launched.
                Organisation certified to ISO 27001, ISO 9001, and ISO 20000</p>
            </div>
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2020</h2>
              <p className="font-normal text-white">Managed Detection & Response service launched.
                Fully-managed Endpoint Detection & Response service launched.</p>
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 gap-x-4 md:mx-24 mx-4">
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2019</h2>
              <p className=" font-normal text-white">SOC relocated to larger premises at The
                Blade in Reading.</p>
            </div>
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2018</h2>
              <p className=" font-normal text-white">Acquires First Base Technologies,
                bolstering penetration testing capabilities and organisational reach.</p>
            </div>
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2017</h2>
              <p className="font-normal text-white mb-4">Penetration testing services are certified
                to CREST.</p>
              <p className="text-white mb-2">Acquires AuditSec Services Limited.</p>
              <p className="text-white">SOC moves to Birmingham.</p>
            </div>
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2016</h2>
              <p className=" font-normal text-white mb-4">Name changes to Falanx Cyber Defence
                Limited.</p>
              <p className="text-white mb-4">Acquires consultancy-house, JustASC.</p>
              <p className="text-white">Penetration testing and consultancy services become part of the service portfolio.</p>
            </div>
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2015</h2>
              <p className="text-lg font-normal text-white mb-4">First UK-based SOC is opened in Reading,
                Green Park and protective monitoring services are delivered.</p>
              <p className="text-white">Organisation certified to ISO 27001, ISO 9001, and ISO 20000</p>
            </div>
            <div className="border border-white p-8 mb-4">
              <h2 className="mb-8 text-lg text-amber-300">2014</h2>
              <p className="text-lg font-normal text-white mb-4">Company founded as Falanx Assuria.</p>
              <p className="text-white">Falanx Assuria is launched on the Alternative Investment Market (AIM).</p>
            </div>

          </div>
        </div>
      </section>

      <section>
        <Partner />
      </section>

    </section>
  )
}

export default AboutUs