export default function Hero() {
  return (
    <section className="relative overflow-hidden h-screen">

      <div className="absolute pointer-events-none -z-10">
        <img
          src="../../assets/images/bg.jpg"
          className="max-w-none object-cover w-full h-full"
          priority
          alt="Hero"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <h1
              className="h1 font-uncut-sans mb-6 text-primary"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              Where the world builds <em className="font-italic">software</em>
            </h1>
            <p
              className="text-xl text-gray-400 mb-10"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                  href="#0"
                >
                  Get Started For Free{" "}
                  <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}