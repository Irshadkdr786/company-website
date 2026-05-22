export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">

      {/* HEADER */}
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We are a creative digital agency focused on building modern,
          responsive and high-quality web solutions for businesses worldwide.
        </p>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10 items-center">

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a team of designers and developers passionate about creating
            digital experiences that help businesses grow. Our focus is on
            performance, design, and user experience.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 leading-relaxed">
            We design and develop websites, web applications, and digital
            platforms that are fast, scalable, and visually appealing.
          </p>
        </div>

      </div>

      {/* MISSION / VISION */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Deliver high-quality web solutions that help businesses succeed online.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            Become a leading digital agency known for innovation and quality.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Quality, transparency, creativity, and customer satisfaction.
          </p>
        </div>

      </div>

    </div>
  )
}