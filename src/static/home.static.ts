import { BsEnvelopeOpen } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GrLock } from "react-icons/gr";
import { LiaLaptopSolid } from "react-icons/lia";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";
import { RiHomeWifiLine } from "react-icons/ri";
import { SlBookOpen, SlGlobe } from "react-icons/sl";

export const homeBannerContents: IHomeBannerContent[] = [
  {
    heading: "detection & response",
    description:
      "Get managed detection and response for real-time, ongoing protection of your entire IT estate and operations.",
    quote:
      "that understands the importance of implementing and maintaining Information Security",
    url: "#",
  },
  {
    heading: "Penetration Testing",
    description:
      "Uncover critical vulnerabilities in your environment with our CREST-certified penetration testing methodology.",
    quote:
      "I know the benefit of carrying out simulated cyber attacks on our systems.",
    url: "#",
  },
  {
    heading: "awareness training",
    description:
      "Empower your staff to recognise and defend against cyber-attacks with our range of training and advisory services.",
    quote:
      "“My job is to ensure that our business is protected against cyber security attacks. I need a company that can hunt for and eradicate threats.”",
    url: "#",
  },
];

export const whatWeDoContents = [
  {
    testing: [
      {
        heading: "penetration testing",
        description: "test the security of your environment and network",
        url: "#",
        icon: RiHomeWifiLine,
      },
      {
        heading: "Ethical Phishing",
        description:
          "Identify the cybersecurity weaknesses in your organisation",
        url: "#",
        icon: BsEnvelopeOpen,
      },
      {
        heading: "Red Teaming",
        description:
          "Find out how well your organisation will hold up against a real-world attack",
        url: "#",
        icon: GrLock,
      },
    ],
    detect: [
      {
        heading: "Managed Detection & Response",
        description:
          "On-going analysis of the cybersecurity of your entire environment",
        url: "#",
        icon: MdOutlineYoutubeSearchedFor,
      },
      {
        heading: "Managed Endpoint Detection & Response",
        description:
          "Protect your endpoints (devices) against all types of cyber-attacks",
        url: "#",
        icon: LiaLaptopSolid,
      },
      {
        heading: "Incident Response",
        description:
          "Damage control in case your organisation does suffer a security breach",
        url: "#",
        icon: FaClockRotateLeft,
      },
    ],
    advise: [
      {
        heading: "Awareness Training",
        description:
          "Reduce the likelihood of data breaches by training your staff to recognise attacks",
        url: "#",
        icon: SlBookOpen,
      },
      {
        heading: "Cyber Essentials & Cyber Essential [Plus]",
        description:
          "Audit your internal IT security so you can start with a strong cybersecurity foundation",
        url: "#",
        icon: SlGlobe,
      },
      {
        heading: "Threat & Risk Assessment",
        description:
          "Refine your cybersecurity strategy by identifying key assets and the threats they face",
        url: "#",
        icon: PiNotepadBold,
      },
    ],
  },
];

export interface IHomeBannerContent {
  heading: string;
  description: string;
  quote?: string;
  url: string;
}
