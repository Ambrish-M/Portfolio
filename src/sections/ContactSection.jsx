import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello
              👋
            </p>
            <div>
              <p className="text-indigo-400 font-medium">Email:</p>
              <p className="text-gray-200">ambrish2706@gmail.com</p>
            </div>
            <div>
              <p className="text-indigo-400 font-medium">Phone:</p>
              <p className="text-gray-200">+91 8610422260</p>
            </div>
            <div>
              <p className="text-indigo-400 font-medium">Location:</p>
              <p className="text-gray-200">Dharmapuri | Tamilnadu IN</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded font-medium"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
