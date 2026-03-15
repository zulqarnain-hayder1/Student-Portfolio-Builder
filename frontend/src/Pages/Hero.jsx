const Hero = () => {

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 text-white flex items-center">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">

          <h1 className="text-5xl font-bold leading-tight">
            Build Your
            <span className="text-indigo-400"> Professional </span>
            Project Portfolio
          </h1>

          <p className="text-gray-300 text-lg">
            Showcase your internship projects with style. Upload your work,
            add descriptions, and generate a shareable portfolio that helps
            recruiters discover your talent.
          </p>

          <div className="flex gap-4 pt-4">

            <button className="bg-indigo-500 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300 shadow-lg hover:scale-105">
              
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
              View Portfolios
            </button>

          </div>

          {/* small stats */}
          <div className="flex gap-10 pt-6 text-sm text-gray-400">
            <div>
              <h2 className="text-xl font-bold text-white">10K+</h2>
              Projects
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">3K+</h2>
              Students
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">500+</h2>
              Recruiters
            </div>
          </div>

        </div>

        {/* Right Section */}
        <div className="relative">

          {/* Glass Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl hover:scale-105 transition duration-300">

            <img
              src="https://illustrations.popsy.co/white/programming.svg"
              alt="portfolio"
              className="w-full"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;