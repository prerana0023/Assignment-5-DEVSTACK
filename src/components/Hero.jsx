import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-12 sm:px-8 md:flex-row md:py-16 lg:px-10">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
            Explore frontend, backend, database, and tooling options.
            Compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:w-1/2">
          <img
            src={bannerStack}
            alt="Development stack illustration"
            className="w-64 sm:w-72 md:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;