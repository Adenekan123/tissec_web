import { Carousel } from "../../components";
import { HomeBaner } from "../../components";
import { homeBannerContents } from "../../static/home.static";

const Home = () => {
  return (
    <div className="px-20 bg-[url('/images/home-bg-n.jpg')] min-h-[80vh]">
      <Carousel>
        {homeBannerContents.map((content, i) => (
          <div key={"slide" + i} className="embla__slide">
            <HomeBaner content={content} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
