export const Contacts = () => {
  return (
    <div className="flex gap-x-6 pr-6 md:pr-20 w-full">
      <div className="basis-2/12 md:basis-5/12 bg-[url('/images/contact-form-home.jpg')] bg-cover bg-left"></div>
      <div className="basis-10/12 md:basis-7/12 py-10 w-full">
        <h2 className="text-4xl mb-24">Contact us</h2>
        <div className="flex flex-col gap-y-12">
          <div className="flex gap-x-3 w-full">
            <input
              type="text"
              placeholder="name"
              className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 d-block w-full basis-full md:basis-6/12 "
            />
            <input
              type="text"
              placeholder="Surname"
              className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 d-block w-full basis-full  md:basis-6/12"
            />
          </div>
          <div className="flex gap-x-3">
            <input
              type="email"
              placeholder="Email"
              className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 w-full basis-full  md:basis-6/12 d-block"
            />
            <input
              type="text"
              placeholder="Contact Tel"
              className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 w-full basis-full md:basis-6/12"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="I would like to discuss..."
              className="text-slate-300 active:border-amber-400 py-3 px-3 border border-slate-300 w-full"
            />
          </div>
          <div>
            <textarea
              name=""
              className="text-slate-300 active:border-amber-400 py-3 px-3 w-full border border-slate-300"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <div className="flex items-center gap-x-3 mb-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">I agree to the privacy policy.</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                I agree to receive marketing emails from Falanx and understand
                that I can unsubscribe at any time..
              </label>
            </div>
          </div>

          <div>
            <button className="px-12 py-3 bg-blue-950 text-white rounded-md font-semibold">
              Sumbit
            </button>
          </div>
          <p className="text-slate-600">
            We respect your privacy and do not tolerate spam and will never
            sell, rent, lease or give away your information to any third party.
          </p>
        </div>
      </div>
    </div>
  );
};
