export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          We Build Modern Websites
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl">
          High-performance, responsive and professional web solutions for startups and businesses.
          We turn ideas into real digital products.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            View Services
          </button>
        </div>

      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-gray-50 text-center">

        <h2 className="text-3xl font-bold mb-12">Our Services</h2>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Web Design</h3>
            <p className="text-gray-600 mt-3">
              Modern UI/UX design for better user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-gray-600 mt-3">
              Fast and scalable websites using modern technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">SEO Optimization</h3>
            <p className="text-gray-600 mt-3">
              Improve visibility and ranking on search engines.
            </p>
          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-slate-900 text-white text-center">

        <h2 className="text-3xl font-bold">Ready to start your project?</h2>
        <p className="text-gray-300 mt-3">
          Let’s build something amazing together.
        </p>

        <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
          Contact Us
        </button>

      </section>

    </div>
  )
}