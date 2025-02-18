const SubscribeUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
      <div className="lg:col-span-2 p-10 rounded-2xl shadow-lg">
        <div>
          <h1 className="font-black text-[#131318] text-2xl mb-4">
            Subscribe Now
          </h1>
          <p className="text-[#5A5A5D] mb-6">
            Stay ahead with daily study insights & tips. Sign up today!
          </p>
          <hr />
        </div>
        <form className="grid grid-cols-1 mt-8 gap-4">
          <input
            className="bg-[#1313180D] p-4"
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
          />
          <input
            className="bg-[#1313180D] p-4"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <button className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 justify-center">
            Subscribe
          </button>
        </form>
      </div>
      <div className="lg:col-span-4">
        <img
          className="w-full rounded-lg h-[450px] object-cover object-bottom"
          src="https://i.ibb.co.com/NdjnQPxc/two-students-studying-together-online-with-laptop-park-1150-4115.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SubscribeUs;
