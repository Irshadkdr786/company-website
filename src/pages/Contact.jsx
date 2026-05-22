export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">

            {/* HEADER */}
            <div className="text-center px-6">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-gray-600 mt-3">
                    We’d love to hear from you. Let’s build something amazing together.
                </p>
            </div>

            {/* MAIN SECTION */}
            <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10">

                {/* CONTACT FORM */}
                <div className="bg-white p-8 rounded-xl shadow">

                    <h2 className="text-2xl font-bold mb-6">Send Message</h2>

                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

                {/* CONTACT INFO + MAP */}
                <div className="space-y-6">

                    {/* INFO CARD */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-xl font-bold mb-4">Contact Info</h2>

                        <p className="text-gray-600">📍 Dubai, United Arab Emirates</p>
                        <p className="text-gray-600 mt-2">📧 info@mycompany.com</p>
                        <p className="text-gray-600 mt-2">📞 +971 50 000 0000</p>
                    </div>

                    {/* GOOGLE MAP */}
                    <div className="bg-white p-4 rounded-xl shadow">

                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps?q=Dubai,+UAE&output=embed"
                            width="100%"
                            height="250"
                            className="rounded-lg"
                            loading="lazy"
                        ></iframe>

                    </div>

                </div>

            </div>

        </div>
    )
}