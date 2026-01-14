import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-20 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg -600">
              Let's connect and discuss how we can work together
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <motion.div
                className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg border-2 border-blue-200"
                whileHover={{ y: -5, shadow: "xl" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold  mb-2">Email</h3>
                    <a
                      href="mailto:[Your Email]"
                      className="text-blue-600 hover:text-blue font-medium break-all"
                    >
                      [Your Email]
                    </a>
                    <p className="-600 text-sm mt-2">
                      Send me an email anytime
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg border-2 border-green-200"
                whileHover={{ y: -5, shadow: "xl" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-600 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold  mb-2">Phone</h3>
                    <p className=" font-medium">[Your Number]</p>
                    <p className="-600 text-sm mt-2">Available for calls</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 shadow-lg border-2 border-emerald-200"
                whileHover={{ y: -5, shadow: "xl" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold  mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/[Your Number]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald font-medium"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="-600 text-sm mt-2">
                      Quick response guaranteed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form (Visual Only) */}
          <AnimatedSection delay={0.4}>
            <motion.div
              className="bg-gray-50 rounded-xl p-8 shadow-lg"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold  mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium  mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium  mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium  mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue transition-colors shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
