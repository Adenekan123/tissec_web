import { Carousel } from "../../components";
import { HomeBaner } from "../../components";
import { homeBannerContents } from "../../static/home.static";
import WhatWeDo from "./components/what-we-do";

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
    </>
  );
};

export default Home;
