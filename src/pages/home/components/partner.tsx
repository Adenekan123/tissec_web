const Partner = () => {
  return (
    <div className=" bg-blue-500 py-16 md:py-24 text-white px-4 md:px-20 mt-24">
      <div className="flex md:flex-row flex-col gap-y-16 text-center md:text-left items-center justify-center">
        <div className="flex flex-col gap-y-6 basis-5/12">
          <h2 className="text-4xl">Want to become a partner ?</h2>
          <p className="text-sm">Join the community and see the benefits.</p>
        </div>
        <div className="basis-4/12 text-right">
          <button className="px-12 py-3 w-80 bg-blue-950 text-white rounded-md font-semibold">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
