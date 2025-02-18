const WhyChooseUs = () => {
  return (
    <div id="whyUs">
      <h1 className="text-5xl font-bold mb-20">Why Choose Us</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Card 1 */}
        <div className="p-8 flex flex-col shadow-xl">
          <img
            className="w-24 h-24"
            src="https://i.ibb.co.com/SDVGLHGF/img-icons8.png"
            alt=""
          />
          <h1 className="text-[#131318] font-black text-2xl my-4">
            📚 Seamless Study Sessions
          </h1>
          <p className="text-[#5A5A5D]">
            Effortlessly schedule and join study sessions with peers and tutors.
            Stay organized, collaborate in real time, and enhance learning
            efficiency with our intuitive session management tools.
          </p>
        </div>
        {/* Card 2 */}
        <div className="p-8 shadow-xl">
          <img
            className="w-24 h-24"
            src="https://i.ibb.co.com/vvsrdNPP/img-icons8.png"
            alt=""
          />
          <h1 className="text-[#131318] font-black text-2xl my-4">
            🎯 Personalized Learning Hub
          </h1>
          <p className="text-[#5A5A5D]">
            Access tailored study materials, track progress, and receive
            AI-driven recommendations. Lumeno adapts to your learning style,
            ensuring a customized and engaging educational experience.
          </p>
        </div>
        {/* Card 1 */}
        <div className="p-8 shadow-xl">
          <img
            className="w-24 h-24"
            src="https://i.ibb.co.com/pBh0LRw1/img-icons8.png"
            alt=""
          />
          <h1 className="text-[#131318] font-black text-2xl my-4 row-span-2">
            🔗 Collaborate & Connect
          </h1>
          <p className="text-[#5A5A5D]">
            Engage with a vibrant learning community, share resources, and
            participate in interactive discussions. Build meaningful connections
            with students and educators to enhance knowledge-sharing and
            academic success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
