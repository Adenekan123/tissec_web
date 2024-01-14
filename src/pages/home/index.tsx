import { Carousel } from "../../components";
import { HomeBaner } from "../../components";
import { homeBannerContents } from "../../static/home.static";
import LatestNews from "./components/latest-news";
import WhatWeDo from "./components/what-we-do";
import WhoWeAre from "./components/who-we-are";

const Home = () => {
  return (
    <>
      <section className="banner bg-cover bg-top-right min-h-max relative overflow-hidden">
        <Carousel>
          {homeBannerContents.map((content, i) => (
            <div key={"slide" + i} className="embla__slide ">
              <HomeBaner content={content} />
            </div>
          ))}
        </Carousel>
        <WhatWeDo />
      </section>
      <section>
        <WhoWeAre />
      </section>
      <section>
        <LatestNews />
      </section>
    </>
  );
};

export default Home;
