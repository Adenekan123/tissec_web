const WhoWeAre = () => {
  return (
    <div className="bg-[url('/images/home-who-we-are.jpg')] md:bg-cover bg-center  md:px-20 px-4 md:py-28 py-16">
      <div className="flex justify-end items-center">
        <div className="md:basis-6/12">
          <div className="md:w-5/12 flex flex-col gap-y-10 mx-auto bg-white/80 md:bg-none p-6 md:p-0 rounded-md">
            <h2 className="text-4xl">Who we are</h2>
            <p>
              We are cybersecurity experts who can help you identify areas of
              cyber-risk and help you manage them.
            </p>
            <div className="flex gap-x-2">
              <button className="md:px-8 px-4 md:py-3 py-2 bg-blue-950 text-slate-100 font-semibold hover:bg-amber-400">
                Find out more
              </button>
              <button className="md:px-8 px-4 md:py-3 py-2 border-2 border-blue-950 text-slate-600 font-semibold hover:bg-amber-400 hover:text-white hover:border-white ">
                Meet the team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
