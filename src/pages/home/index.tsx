import { Carousel } from "../../components";
import { HomeBaner } from "../../components";
import { homeBannerContents } from "../../static/home.static";
import WhatWeDo from "./components/what-we-do";

const Home = () => {
  return (
    <>
      <section className="banner bg-[url('/images/home-bg-n.jpg')]  bg-cover bg-top-right h-[80vh]">
        <Carousel>
          {homeBannerContents.map((content, i) => (
            <div key={"slide" + i} className="embla__slide h-full">
              <HomeBaner content={content} />
            </div>
          ))}
        </Carousel>
        <WhatWeDo />
      </section>
    </>
  );
};

export default Home;
