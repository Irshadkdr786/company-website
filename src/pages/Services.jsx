export default function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Modern UI/UX designs that convert visitors into customers.",
    },
    {
      title: "Web Development",
      desc: "Fast, scalable and responsive websites using modern tech.",
    },
    {
      title: "E-Commerce",
      desc: "Online stores with secure payment and smooth UX.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve Google ranking and organic traffic.",
    },
    {
      title: "Branding",
      desc: "Complete brand identity and digital presence.",
    },
    {
      title: "Maintenance",
      desc: "Ongoing support and website updates.",
    },
  ]

  return (
    <div className="py-16 bg-gray-50 min-h-screen fade-in">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-gray-600 mt-3">
          We provide complete digital solutions for your business
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-full mb-4"></div>

            <h2 className="text-xl font-bold">{item.title}</h2>

            <p className="text-gray-600 mt-3">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}