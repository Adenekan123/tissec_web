import { Carousel } from "../../components";
import { HomeBaner } from "../../components";
import { homeBannerContents } from "../../static/home.static";

const Home = () => {
  return (
    <div className="bg-[url('/images/home-bg-n.jpg')] min-h-screen lg:min-h-[80vh] bg-cover bg-center">
      <Carousel>
        {homeBannerContents.map((content, i) => (
          <div key={"slide" + i} className="embla__slide h-full">
            <HomeBaner content={content} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
