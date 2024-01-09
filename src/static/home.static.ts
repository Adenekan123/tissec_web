export const homeBannerContents:IHomeBannerContent[] = [
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

export interface IHomeBannerContent{
    heading:string;
    description:string;
    quote:string;
    url:string;
}

